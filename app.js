

/* ============================================================
   AWS AI Practitioner - English Study Notes & 7 Practice Tests Engine
   ============================================================ */

/**
 * Render markdown text with KaTeX math support.
 * Handles $...$ (inline) and $$...$$ (block) LaTeX expressions.
 */
function renderMarkdown(text) {
  if (!text) return '';
  const html = marked.parse ? marked.parse(text) : text;
  if (typeof renderMathInElement === 'function') {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    renderMathInElement(tmp, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false }
      ],
      throwOnError: false
    });
    return tmp.innerHTML;
  }
  return html;
}


// LocalStorage Keys
const LS_THEME = 'aif_theme';
const LS_USER_ANSWERS = 'aif_user_answers_v2';
const LS_BOOKMARKS = 'aif_bookmarks_v2';
const LS_READ_SECTIONS = 'aif_read_sections_v1'; // { [noteId]: { [sectionId]: true } }
const LS_STREAK = 'aif_streak_v1';               // { currentStreak, lastStudyDate }
const LS_NOTE_HEADINGS = 'aif_note_headings_v1'; // { [noteId]: [headingId, ...] }

// State Management
let state = {
  viewMode: 'note', // 'note' or 'test'
  currentNoteId: (window.NOTES_DATA && window.NOTES_DATA.length > 0) ? window.NOTES_DATA[0].id : null,
  currentTestIdx: 0,
  currentFilter: 'all',
  currentTheme: localStorage.getItem(LS_THEME) || 'dark',
  searchQuery: '',

  // Set of collapsed tree keys
  collapsedKeys: new Set(),

  userAnswers: JSON.parse(localStorage.getItem(LS_USER_ANSWERS) || '{}'),
  bookmarks: JSON.parse(localStorage.getItem(LS_BOOKMARKS) || '{}'),
  revealAllAnswers: false,
  openDetailedExp: {},

  // Read-tracking + gamification
  readSections: JSON.parse(localStorage.getItem(LS_READ_SECTIONS) || '{}'),
  streak: JSON.parse(localStorage.getItem(LS_STREAK) || '{}'),
  noteHeadingIds: {},           // { [noteId]: Set<headingId> } populated on render + from storage
  notesFullyRead: new Set(),    // noteIds currently fully read (to detect transitions)
};

// DOM References
const dom = {
  header: document.querySelector('.header'),
  sidebarToggle: document.getElementById('sidebarToggle'),
  sidebar: document.getElementById('sidebar'),
  treeContainer: document.getElementById('treeContainer'),
  mainContent: document.getElementById('mainContent'),
  searchInput: document.getElementById('searchInput'),
  themeToggle: document.getElementById('themeToggle'),
  ringFill: document.getElementById('ringFill'),
  ringPct: document.getElementById('ringPct'),
  progressCount: document.getElementById('progressCount'),
  streakBadge: document.getElementById('streakBadge'),
  streakNum: document.getElementById('streakNum'),
  readCelebration: document.getElementById('readCelebration'),
  celebrationTitle: document.getElementById('celebrationTitle'),
  celebrationSub: document.getElementById('celebrationSub'),
  toast: document.getElementById('toast')
};

function isQuestionAnswered(key, userSelected) {
  if (!userSelected) return false;
  if (key === "2_14") {
    return userSelected.split(' → ').length === 4;
  }
  if (key === "2_25" || key === "2_43") {
    const parts = userSelected.split(' | ');
    return parts.length === 3 && parts.every(x => x !== '');
  }
  if (key === "2_35") {
    const parts = userSelected.split(' | ');
    return parts.length === 4 && parts.every(x => x !== '');
  }

  // Check if it's a general multi-select question (Choose 2, Choose 3, etc.)
  const [tIdxStr, qIdStr] = key.split('_');
  const tIdx = parseInt(tIdxStr, 10);
  const qId = parseInt(qIdStr, 10);
  if (!isNaN(tIdx) && !isNaN(qId) && window.TESTS_DATA) {
    const test = window.TESTS_DATA[tIdx];
    if (test && test.questions) {
      const q = test.questions.find(x => x.id === qId);
      if (q && Array.isArray(q.answers) && q.answers.length > 1) {
        return Array.isArray(userSelected) && userSelected.length === q.answers.length;
      }
    }
  }

  return true;
}

function loadExplanationsForTest(testIdx, callback) {
  const scriptId = `explanations-script-test-${testIdx}`;
  if (document.getElementById(scriptId)) {
    if (callback) callback();
    return;
  }
  const script = document.createElement('script');
  script.id = scriptId;
  script.src = `explanations-test-${testIdx + 1}.js`;
  script.onload = () => {
    if (callback) callback();
  };
  script.onerror = () => {
    if (callback) callback();
  };
  document.head.appendChild(script);
}

function slugify(text) {
  if (typeof text !== 'string') return '';
  return text.toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove Vietnamese accents
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'd')
    .replace(/[^a-z0-9\s-]/g, '')   // remove non-alphanumeric characters
    .replace(/[\s-]+/g, '-')         // replace spaces and multiple hyphens with a single hyphen
    .replace(/^-+|-+$/g, '');        // trim hyphens
}

/* ============================================================
   READ TRACKING + GAMIFICATION
   ============================================================ */

let readObserver = null;

// Build a styled TOC nav from a leading markdown link list in the note body.
// Converts the default <a> list into an indented, theme-aware nav with
// display-only checkboxes reflecting auto-detected read state.
function buildTOC(docBody) {
  const firstUl = docBody.querySelector(':scope > ul');
  if (!firstUl) return false;

  // Verify it's actually a TOC: every <a> href starts with '#'
  const links = firstUl.querySelectorAll('a[href]');
  if (links.length === 0) return false;
  let isToc = true;
  links.forEach(a => {
    if (!a.getAttribute('href').startsWith('#')) isToc = false;
  });
  if (!isToc) return false;

  const nav = document.createElement('nav');
  nav.className = 'toc-nav';

  const title = document.createElement('div');
  title.className = 'toc-nav-title';
  title.textContent = '\u{1F4D1} Table of Contents';
  nav.appendChild(title);

  const list = document.createElement('ul');
  list.className = 'toc-list';
  nav.appendChild(list);

  // Walk top-level <li>, depth = nested <ul> level
  const walk = (ul, depth, targetList) => {
    const items = ul.children;
    for (const li of items) {
      if (li.tagName !== 'LI') continue;
      const anchor = li.querySelector(':scope > a[href]');
      if (!anchor) continue;
      const href = anchor.getAttribute('href');
      const sectionId = href.slice(1);
      const headingLevel = Math.min(depth + 2, 4); // depth 0->H2, 1->H3, 2->H4

      const item = document.createElement('li');
      item.className = `toc-item toc-h${headingLevel}`;
      item.setAttribute('data-section', sectionId);

      const check = document.createElement('input');
      check.type = 'checkbox';
      check.className = 'toc-check';
      check.setAttribute('data-section', sectionId);
      check.disabled = true; // display-only

      const a = document.createElement('a');
      a.href = href;
      a.textContent = anchor.textContent;

      item.appendChild(check);
      item.appendChild(a);
      targetList.appendChild(item);

      // Recurse into nested ul (deeper level)
      const nestedUl = li.querySelector(':scope > ul');
      if (nestedUl) {
        walk(nestedUl, depth + 1, targetList);
      }
    }
  };

  walk(firstUl, 0, list);
  firstUl.replaceWith(nav);
  return true;
}

// Track all heading IDs in a note for full-read detection.
// Persisted so sidebar can show read-state for notes not yet opened this session.
function collectNoteHeadings(docBody, noteId) {
  const ids = new Set();
  docBody.querySelectorAll('h2[id], h3[id], h4[id]').forEach(h => {
    ids.add(h.id);
  });
  state.noteHeadingIds[noteId] = ids;

  // Persist (array form, since Set isn't JSON-serializable)
  try {
    const stored = JSON.parse(localStorage.getItem(LS_NOTE_HEADINGS) || '{}');
    stored[noteId] = Array.from(ids);
    localStorage.setItem(LS_NOTE_HEADINGS, JSON.stringify(stored));
  } catch (e) { /* ignore quota errors */ }

  return ids;
}

// Load persisted heading IDs for all notes into state.noteHeadingIds (Sets),
// and seed notesFullyRead so already-complete notes don't re-celebrate on load.
function loadPersistedHeadings() {
  let stored = {};
  try {
    stored = JSON.parse(localStorage.getItem(LS_NOTE_HEADINGS) || '{}');
  } catch (e) { stored = {}; }
  Object.keys(stored).forEach(noteId => {
    if (!state.noteHeadingIds[noteId]) {
      state.noteHeadingIds[noteId] = new Set(stored[noteId]);
    }
    if (isNoteFullyRead(noteId)) state.notesFullyRead.add(noteId);
  });
}

// Restore TOC checkbox + heading section-read state from persisted readSections.
function restoreReadStateInDom(noteId, docBody) {
  const read = state.readSections[noteId] || {};
  Object.keys(read).forEach(sectionId => {
    const tocCheck = docBody.querySelector(`.toc-check[data-section="${cssEscape(sectionId)}"]`);
    if (tocCheck) {
      tocCheck.checked = true;
      tocCheck.closest('.toc-item')?.classList.add('read');
    }
    const heading = docBody.getElementById(sectionId);
    if (heading) heading.classList.add('section-read');
  });
}

// Escape an id for use in a CSS selector / querySelector.
function cssEscape(value) {
  if (window.CSS && typeof window.CSS.escape === 'function') {
    return window.CSS.escape(value);
  }
  return String(value).replace(/(["\\])/g, '\\$1');
}

// Set up IntersectionObserver to auto-mark headings as read when scrolled to.
function setupReadTracking(noteId, docBody) {
  if (readObserver) readObserver.disconnect();
  readObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        markSectionRead(noteId, entry.target.id, docBody);
      }
    }
  }, {
    rootMargin: '-80px 0px -60% 0px',
    threshold: 0
  });

  docBody.querySelectorAll('h2[id], h3[id], h4[id]').forEach(h => readObserver.observe(h));
}

// Mark a single section as read; update DOM locally + persist + gamification.
function markSectionRead(noteId, sectionId, docBody) {
  if (!noteId || !sectionId) return;
  if (!state.readSections[noteId]) state.readSections[noteId] = {};
  if (state.readSections[noteId][sectionId]) return; // already read

  state.readSections[noteId][sectionId] = true;
  localStorage.setItem(LS_READ_SECTIONS, JSON.stringify(state.readSections));

  // Update DOM locally (no full re-render -> avoids jank)
  if (docBody) {
    const tocCheck = docBody.querySelector(`.toc-check[data-section="${cssEscape(sectionId)}"]`);
    if (tocCheck) {
      tocCheck.checked = true;
      tocCheck.closest('.toc-item')?.classList.add('read');
    }
    const heading = docBody.getElementById(sectionId);
    if (heading) heading.classList.add('section-read');
  }

  touchStreak();
  updateSidebarNoteState(noteId);

  // Note-complete transition
  if (isNoteFullyRead(noteId)) {
    if (!state.notesFullyRead.has(noteId)) {
      state.notesFullyRead.add(noteId);
      celebrateNoteComplete(noteId);
      updateDomainProgressForNote(noteId);
    }
  }
}

// Is every heading in a note marked read?
function isNoteFullyRead(noteId) {
  const headingIds = state.noteHeadingIds[noteId];
  if (!headingIds || headingIds.size === 0) return false;
  const read = state.readSections[noteId] || {};
  for (const id of headingIds) {
    if (!read[id]) return false;
  }
  return true;
}

// Count read sections / total for a note -> {read, total, fullyRead}.
function getNoteReadState(noteId) {
  const headingIds = state.noteHeadingIds[noteId];
  const total = headingIds ? headingIds.size : 0;
  const read = state.readSections[noteId] || {};
  let readCount = 0;
  if (headingIds) {
    for (const id of headingIds) {
      if (read[id]) readCount++;
    }
  }
  return { read: readCount, total, fullyRead: total > 0 && readCount === total };
}

// Determine a note's domain name from NOTES_DATA.
function getNoteDomain(noteId) {
  const notes = window.NOTES_DATA || [];
  const note = notes.find(n => n.id === noteId);
  return note ? note.domain : null;
}

// Update a single sidebar note item's read-state icon (no tree rebuild).
function updateSidebarNoteState(noteId) {
  const el = document.querySelector(`.test-node[data-note-id="${cssEscape(noteId)}"]`);
  if (!el) return;
  const statusEl = el.querySelector('.note-status');
  if (!statusEl) return;
  const { read, total, fullyRead } = getNoteReadState(noteId);
  if (total === 0) {
    el.classList.remove('note-partial', 'note-done');
    statusEl.className = 'note-status unread';
    statusEl.textContent = '\u{1F4C4}';
    statusEl.title = 'Not read yet';
  } else if (fullyRead) {
    el.classList.remove('note-partial');
    el.classList.add('note-done');
    statusEl.className = 'note-status read';
    statusEl.textContent = '\u2713';
    statusEl.title = 'All sections read';
  } else if (read > 0) {
    el.classList.remove('note-done');
    el.classList.add('note-partial');
    statusEl.className = 'note-status partial';
    statusEl.textContent = '\u25D0';
    statusEl.title = `${read}/${total} sections read`;
  } else {
    el.classList.remove('note-partial', 'note-done');
    statusEl.className = 'note-status unread';
    statusEl.textContent = '\u{1F4C4}';
    statusEl.title = 'Not read yet';
  }
  updateDomainProgressForNote(noteId);
}

// Update domain progress mini-bar for the domain owning noteId.
function updateDomainProgressForNote(noteId) {
  const domain = getNoteDomain(noteId);
  if (!domain) return;
  updateDomainProgress(domain);
}

// Recompute + update a domain's "X/Y" text, bar fill, complete badge (no rebuild).
function updateDomainProgress(domain) {
  const notes = window.NOTES_DATA || [];
  const domainNotes = notes.filter(n => n.domain === domain);
  if (domainNotes.length === 0) return;

  let done = 0;
  domainNotes.forEach(n => {
    const { fullyRead } = getNoteReadState(n.id);
    if (fullyRead) done++;
  });
  const total = domainNotes.length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  const header = document.querySelector(`.domain-tree-header[data-domain="${cssEscape(domain)}"]`);
  if (!header) return;

  const textEl = header.querySelector('.domain-progress-text');
  const fillEl = header.querySelector('.domain-progress-fill');
  if (textEl) textEl.textContent = `${done}/${total}`;
  if (fillEl) fillEl.style.width = pct + '%';
  header.classList.toggle('complete', total > 0 && done === total);
}

// Note-complete celebration overlay (lightweight, no confetti).
let celebrationTimer = null;
function celebrateNoteComplete(noteId) {
  if (!dom.readCelebration) return;
  const notes = window.NOTES_DATA || [];
  const note = notes.find(n => n.id === noteId);
  if (note) {
    dom.celebrationTitle.textContent = `\u2713 ${note.title} \u2014 completed!`;
    dom.celebrationSub.textContent = 'You read every section. Keep the momentum going. \u{1F680}';
  }
  dom.readCelebration.classList.remove('show');
  // restart animation
  void dom.readCelebration.offsetWidth;
  dom.readCelebration.classList.add('show');
  if (celebrationTimer) clearTimeout(celebrationTimer);
  celebrationTimer = setTimeout(() => {
    dom.readCelebration.classList.remove('show');
  }, 1700);
}

// ---- Streak tracking ----
// YYYY-MM-DD in local time.
function todayStr() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function yesterdayStr() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

// Record study activity once per day; updates streak.
function touchStreak() {
  const today = todayStr();
  const s = state.streak || {};
  if (s.lastStudyDate === today) return; // already counted today

  if (s.lastStudyDate === yesterdayStr()) {
    s.currentStreak = (s.currentStreak || 0) + 1;
  } else {
    s.currentStreak = 1;
  }
  s.lastStudyDate = today;
  state.streak = s;
  localStorage.setItem(LS_STREAK, JSON.stringify(state.streak));
  updateStreakUI();
}

function updateStreakUI() {
  if (!dom.streakBadge) return;
  const streak = (state.streak && state.streak.currentStreak) || 0;
  if (streak >= 2) {
    dom.streakBadge.hidden = false;
    dom.streakNum.textContent = streak;
  } else {
    dom.streakBadge.hidden = true;
  }
}

// INITIALIZATION
function init() {
  applyTheme(state.currentTheme);
  setupEventListeners();
  loadPersistedHeadings();
  renderSidebarTree();
  updateStreakUI();

  // Configure marked to generate IDs for headings matching markdown anchors
  if (window.marked && typeof marked.use === 'function') {
    marked.use({
      renderer: {
        heading(text, level, raw) {
          let content = text;
          let lvl = level;
          let rawStr = raw;
          if (typeof text === 'object' && text !== null) {
            content = text.text || '';
            lvl = text.depth || text.level || 2;
            rawStr = text.raw || content;
          }
          const id = slugify(rawStr || content || '');
          return `<h${lvl} id="${id}">${content}</h${lvl}>\n`;
        }
      }
    });
  }

  if (state.viewMode === 'note' && state.currentNoteId) {
    renderNoteView(state.currentNoteId);
  } else if (window.TESTS_DATA && window.TESTS_DATA.length > 0) {
    loadExplanationsForTest(state.currentTestIdx, () => {
      if (state.viewMode === 'test') {
        renderTestView(state.currentTestIdx);
      }
    });
    renderTestView(state.currentTestIdx);
  }
}

// THEME CONTROL
function applyTheme(theme) {
  state.currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(LS_THEME, theme);
  dom.themeToggle.innerHTML = theme === 'dark' ? '🌙 Dark' : '☀️ Light';
}

function toggleTheme() {
  applyTheme(state.currentTheme === 'dark' ? 'light' : 'dark');
}

// COLLAPSE TREE HANDLER
function toggleTreeCollapse(key) {
  if (state.collapsedKeys.has(key)) {
    state.collapsedKeys.delete(key);
  } else {
    state.collapsedKeys.add(key);
  }
  renderSidebarTree();
}

// RENDER SIDEBAR TREE VIEW
function renderSidebarTree() {
  const query = state.searchQuery.toLowerCase();
  const notes = window.NOTES_DATA || [];
  const tests = window.TESTS_DATA || [];

  // Group notes by domain
  const domainsMap = {};
  notes.forEach(note => {
    const domainName = note.domain;
    const title = note.title;
    const content = note.content;

    if (query && !title.toLowerCase().includes(query) && !content.toLowerCase().includes(query)) {
      return;
    }

    if (!domainsMap[domainName]) domainsMap[domainName] = [];
    domainsMap[domainName].push(note);
  });

  const isNotesRootCollapsed = state.collapsedKeys.has('notes_root');
  let html = `
    <div class="tree-section-title" onclick="toggleTreeCollapse('notes_root')">
      <span>📚 Study Notes (${notes.length} Sections)</span>
      <span class="tree-arrow">${isNotesRootCollapsed ? '►' : '▼'}</span>
    </div>
  `;

  if (!isNotesRootCollapsed) {
    let domainIdx = 0;
    for (const [domain, items] of Object.entries(domainsMap)) {
      domainIdx++;
      const domKey = `dom_${domainIdx}`;
      const isDomCollapsed = state.collapsedKeys.has(domKey);

      // Domain progress: fully-read notes / total notes in domain
      let domDone = 0;
      items.forEach(n => {
        if (getNoteReadState(n.id).fullyRead) domDone++;
      });
      const domTotal = items.length;
      const domPct = domTotal ? Math.round((domDone / domTotal) * 100) : 0;
      const domComplete = domTotal > 0 && domDone === domTotal;

      html += `
        <div class="domain-tree-header ${domComplete ? 'complete' : ''}" data-domain="${domain}" onclick="toggleTreeCollapse('${domKey}')">
          <span class="domain-name">${domain}</span>
          <span class="domain-progress-mini">
            <span class="domain-progress-text">${domDone}/${domTotal}</span>
            <span class="domain-progress-bar"><span class="domain-progress-fill" style="width:${domPct}%"></span></span>
            <span class="domain-complete-badge">✓</span>
          </span>
          <span class="tree-arrow">${isDomCollapsed ? '►' : '▼'}</span>
        </div>
      `;

      if (!isDomCollapsed) {
        items.forEach(note => {
          const isActive = state.viewMode === 'note' && state.currentNoteId === note.id;
          const { read, total, fullyRead } = getNoteReadState(note.id);
          let statusIcon, statusClass, statusTitle, nodeExtra = '';
          if (total === 0 || read === 0) {
            statusIcon = '📄'; statusClass = 'unread'; statusTitle = 'Not read yet';
          } else if (fullyRead) {
            statusIcon = '✓'; statusClass = 'read'; statusTitle = 'All sections read';
            nodeExtra = 'note-done';
          } else {
            statusIcon = '◐'; statusClass = 'partial'; statusTitle = `${read}/${total} sections read`;
            nodeExtra = 'note-partial';
          }
          // Language badge: only show if more than 1 language available for the note
          const langs = note.languages || ['EN'];
          const langBadge = langs.length > 1
            ? `<span class="test-badge-count">${langs.join('/')}</span>`
            : '';
          html += `
            <div class="test-tree-item">
              <div class="test-node ${isActive ? 'active' : ''} ${nodeExtra}" data-note-id="${note.id}" onclick="selectNote('${note.id}')">
                <div class="test-title-text">
                  <span class="note-status ${statusClass}" title="${statusTitle}">${statusIcon}</span>
                  <span title="${note.title}">${note.title}</span>
                </div>
                ${langBadge}
              </div>
            </div>
          `;
        });
      }
    }
  }

  const isTestsRootCollapsed = state.collapsedKeys.has('tests_root');
  html += `
    <div class="tree-section-title" onclick="toggleTreeCollapse('tests_root')">
      <span>🎯 Practice Tests (${tests.length} Tests / 350 Qs)</span>
      <span class="tree-arrow">${isTestsRootCollapsed ? '►' : '▼'}</span>
    </div>
  `;

  if (!isTestsRootCollapsed) {
    tests.forEach((test, idx) => {
      if (query && !test.title.toLowerCase().includes(query)) {
        // filter logic
      }
      const isActive = state.viewMode === 'test' && state.currentTestIdx === idx;
      html += `
        <div class="test-tree-item ${isActive ? 'open' : ''}">
          <div class="test-node ${isActive ? 'active' : ''}" onclick="selectTest(${idx})">
            <div class="test-title-text">
              <span>📝</span>
              <span>${test.title}</span>
            </div>
            <span class="test-badge-count">${test.questions ? test.questions.length : 0} Qs</span>
          </div>

          <div class="question-tree-list">
            <div class="q-grid-container">
              ${test.questions ? test.questions.map(q => {
        const key = `${idx}_${q.id}`;
        const userSel = state.userAnswers[key];
        let qClass = '';
        if (userSel && isQuestionAnswered(key, userSel)) {
          const isCorrect = Array.isArray(q.answers) ? q.answers.includes(userSel) : q.answers === userSel;
          qClass = isCorrect ? 'correct' : 'incorrect';
        }
        const isBm = state.bookmarks[key] ? 'bookmarked' : '';
        return `<div class="q-node ${qClass} ${isBm}" onclick="scrollToQuestion(${idx}, ${q.id})">${q.id}</div>`;
      }).join('') : ''}
            </div>
          </div>
        </div>
      `;
    });
  }

  dom.treeContainer.innerHTML = html;
  updateOverallProgress();
}

function selectNote(noteId) {
  state.viewMode = 'note';
  state.currentNoteId = noteId;
  renderSidebarTree();
  renderNoteView(noteId);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectTest(testIdx) {
  state.viewMode = 'test';
  state.currentTestIdx = testIdx;
  renderSidebarTree();
  renderTestView(testIdx);
  loadExplanationsForTest(testIdx, () => {
    if (state.viewMode === 'test' && state.currentTestIdx === testIdx) {
      renderTestView(testIdx);
    }
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// RENDER STUDY NOTE VIEW
function renderNoteView(noteId) {
  const notes = window.NOTES_DATA || [];
  const note = notes.find(n => n.id === noteId);
  if (!note) return;

  let parsedContent = note.content;
  if (window.marked) {
    parsedContent = renderMarkdown(note.content);
  }

  // Wrap tables in responsive div wrapper
  parsedContent = parsedContent
    .replace(/<table>/g, '<div class="table-wrapper"><table>')
    .replace(/<\/table>/g, '</table></div>');

  dom.mainContent.innerHTML = `
    <div class="note-header-banner">
      <div class="note-banner-meta">${note.domain} &gt; ${note.fileName}</div>
      <h1 class="note-banner-title">${note.title}</h1>
      <div class="note-banner-tags">
        <span class="brand-badge">${note.docType}</span>
        <span class="note-read-time">⏱️ ${note.readTime}</span>
      </div>
    </div>

    <div id="docBody" class="markdown-body">
      ${parsedContent}
    </div>
  `;

  // Read tracking + TOC transform
  const docBody = document.getElementById('docBody');
  if (docBody) {
    buildTOC(docBody);
    collectNoteHeadings(docBody, noteId);
    restoreReadStateInDom(noteId, docBody);
    // Seed fully-read set so we don't re-celebrate an already-complete note on load
    if (isNoteFullyRead(noteId)) state.notesFullyRead.add(noteId);
    setupReadTracking(noteId, docBody);
  }

  if (window.mermaid) {
    mermaid.contentLoaded();
  }
}

// RENDER PRACTICE TEST VIEW
function renderTestView(testIdx) {
  const tests = window.TESTS_DATA || [];
  const test = tests[testIdx];
  if (!test) return;

  let filteredQs = test.questions || [];
  if (state.currentFilter === 'unanswered') {
    filteredQs = test.questions.filter(q => !isQuestionAnswered(`${testIdx}_${q.id}`, state.userAnswers[`${testIdx}_${q.id}`]));
  } else if (state.currentFilter === 'correct') {
    filteredQs = test.questions.filter(q => {
      const ans = state.userAnswers[`${testIdx}_${q.id}`];
      return ans && isQuestionAnswered(`${testIdx}_${q.id}`, ans) && (Array.isArray(q.answers) ? q.answers.includes(ans) : q.answers === ans);
    });
  } else if (state.currentFilter === 'incorrect') {
    filteredQs = test.questions.filter(q => {
      const ans = state.userAnswers[`${testIdx}_${q.id}`];
      return ans && isQuestionAnswered(`${testIdx}_${q.id}`, ans) && !(Array.isArray(q.answers) ? q.answers.includes(ans) : q.answers === ans);
    });
  } else if (state.currentFilter === 'bookmarked') {
    filteredQs = test.questions.filter(q => state.bookmarks[`${testIdx}_${q.id}`]);
  }

  dom.mainContent.innerHTML = `
    <div class="test-banner">
      <div class="test-banner-header">
        <div class="test-banner-title">${test.title}</div>
        <div class="test-banner-stats" id="testStatsBadge">
          Completed: ${getTestCompletedCount(testIdx)} / ${test.questions.length} Qs
        </div>
      </div>
      <div class="test-progress-bar-bg">
        <div class="test-progress-bar-fill" style="width: ${Math.round((getTestCompletedCount(testIdx) / test.questions.length) * 100)}%;"></div>
      </div>
    </div>

    <div class="toolbar">
      <div class="filter-group">
        <button class="btn-filter ${state.currentFilter === 'all' ? 'active' : ''}" onclick="setFilter('all')">All (${test.questions.length})</button>
        <button class="btn-filter ${state.currentFilter === 'unanswered' ? 'active' : ''}" onclick="setFilter('unanswered')">Unanswered</button>
        <button class="btn-filter ${state.currentFilter === 'correct' ? 'active' : ''}" onclick="setFilter('correct')">Correct</button>
        <button class="btn-filter ${state.currentFilter === 'incorrect' ? 'active' : ''}" onclick="setFilter('incorrect')">Incorrect</button>
        <button class="btn-filter ${state.currentFilter === 'bookmarked' ? 'active' : ''}" onclick="setFilter('bookmarked')">⭐ Bookmarked</button>
      </div>
      <div class="action-group">
        <button class="btn-action" onclick="toggleRevealAllAnswers()">${state.revealAllAnswers ? '🙈 Hide All Answers' : '👁️ Reveal All Answers'}</button>
        <button class="btn-action" onclick="resetCurrentTest()">🔄 Reset Test</button>
      </div>
    </div>

    <div id="questionsContainer">
      ${filteredQs.map(q => renderQuestionCard(testIdx, q)).join('')}
    </div>

    <div class="footer-nav">
      <button class="btn-nav-test" onclick="selectTest(${testIdx - 1})" ${testIdx === 0 ? 'disabled' : ''}>⬅️ Prev Test</button>
      <div style="font-weight:700; font-size:0.9rem;">${test.title} (${testIdx + 1} / ${tests.length})</div>
      <button class="btn-nav-test" onclick="selectTest(${testIdx + 1})" ${testIdx === tests.length - 1 ? 'disabled' : ''}>Next Test ➡️</button>
    </div>
  `;
}

function renderQuestionCard(tIdx, q) {
  const key = `${tIdx}_${q.id}`;
  const userSelected = state.userAnswers[key];
  const isAns = isQuestionAnswered(key, userSelected);
  const isBm = !!state.bookmarks[key];
  const showExp = isAns || state.revealAllAnswers;
  const isDetailOpen = showExp && !!state.openDetailedExp[key];

  const correctAnswers = Array.isArray(q.answers) ? q.answers : [q.answers || q.answer_str];

  // Generate structured detailed breakdown
  const detailedBreakdown = (window.DETAILED_EXPLANATIONS && window.DETAILED_EXPLANATIONS[key]) || q.detailed_explanation || `⏳ **Đang tải giải thích chi tiết từ Antigravity Tutor...**`;

  // Custom UI for ordering question 2_14
  if (key === "2_14") {
    const items = [
      { key: "1", text: "Deploy model" },
      { key: "2", text: "Develop model" },
      { key: "3", text: "Monitor model" },
      { key: "4", text: "Define business goal and frame ML problem" }
    ];

    const currentOrder = userSelected ? userSelected.split(' → ') : [];
    const poolItems = items.filter(it => !currentOrder.includes(it.key));

    let poolHtml = poolItems.map(it => `
      <div class="option-item" onclick="addOrderStep(${tIdx}, ${q.id}, '${it.key}')">
        <div class="option-key">${it.key}</div>
        <div class="option-text">${it.text}</div>
      </div>
    `).join('');

    let orderHtml = currentOrder.map((stepKey, idx) => {
      const it = items.find(x => x.key === stepKey);
      let stateClass = '';
      if (showExp) {
        const correctOrder = ["4", "2", "1", "3"];
        stateClass = correctOrder[idx] === stepKey ? 'selected-correct' : 'selected-incorrect';
      }
      return `
        <div class="order-step-item ${stateClass}">
          <span class="order-step-badge">${idx + 1}</span>
          <span class="order-step-text">(${it.key}) ${it.text}</span>
        </div>
      `;
    }).join('');

    return `
      <div class="question-card" id="qcard_${q.id}">
        <div class="q-card-header">
          <div class="q-number-title">Question ${q.id} (Sắp xếp theo thứ tự)</div>
          <div class="q-card-actions">
            ${showExp ? `<button class="btn-icon-action btn-detail-exp ${isDetailOpen ? 'detail-active' : ''}" onclick="toggleDetailedExp(${tIdx}, ${q.id})">📖 Chi tiết đáp án</button>` : ''}
            <button class="btn-icon-action ${isBm ? 'bookmarked' : ''}" onclick="toggleBookmark(${tIdx}, ${q.id})">
              ${isBm ? '★ Saved' : '☆ Bookmark'}
            </button>
            <button class="btn-icon-action" onclick="copyForAI(${tIdx}, ${q.id})">🤖 Ask AI</button>
          </div>
        </div>

        <div class="q-prompt">${q.text}</div>

        <div class="ordering-container">
          <div class="ordering-order-list">
            <div class="ordering-label">Thứ tự bạn chọn:</div>
            <div class="order-steps-wrapper">
              ${orderHtml || '<div class="ordering-placeholder">Nhấp chọn các bước bên dưới theo thứ tự đúng...</div>'}
            </div>
            ${currentOrder.length > 0 && !isAns ? `<button class="btn-reset-order" onclick="resetOrderSteps(${tIdx}, ${q.id})">🔄 Reset</button>` : ''}
          </div>
          
          ${!isAns ? `
            <div class="ordering-pool">
              <div class="ordering-label">Các bước cần sắp xếp:</div>
              <div class="options-list">
                ${poolHtml}
              </div>
            </div>
          ` : ''}
        </div>

        <div class="explanation-box ${showExp ? 'visible' : ''}">
          <div class="exp-header">💡 CORRECT ANSWER: 4 → 2 → 1 → 3</div>
          <div class="exp-content">${q.explanation}</div>
        </div>

        <div class="detailed-exp-drawer ${isDetailOpen ? 'open' : ''}">
          <div class="detailed-exp-header">📖 PHÂN TÍCH VÀ GIẢI THÍCH CHUYÊN SÂU (DETAILED BREAKDOWN)</div>
          <div class="detailed-exp-body">${renderMarkdown(detailedBreakdown)}</div>
        </div>
      </div>
    `;
  }

  // Custom UI for matching questions 2_25, 2_35, 2_43
  if (key === "2_25" || key === "2_35" || key === "2_43") {
    let items = [];
    let options = [];
    let correctParts = [];

    if (key === "2_25") {
      items = [
        "The company's chatbot needs predictions from the LLM to understand users' intent with minimal latency",
        "A data processing job needs to query the LLM to process gigabytes of text files on weekends",
        "The company's engineering team needs to create an API that can process small pieces of text content and provide low-latency predictions"
      ];
      options = ["Real-time inference", "Batch transform"];
      correctParts = ["Real-time inference", "Batch transform", "Real-time inference"];
    } else if (key === "2_35") {
      items = [
        "Binary classification",
        "Multi-class classification",
        "K-means clustering",
        "Dimensionality reduction"
      ];
      options = ["Supervised learning", "Unsupervised learning"];
      correctParts = ["Supervised learning", "Supervised learning", "Unsupervised learning", "Unsupervised learning"];
    } else if (key === "2_43") {
      items = [
        "Prompt Template 1: Classify text as sports, politics, or entertainment",
        "Prompt Template 2: Classify image with a few examples",
        "Prompt Template 3: Think step by step and walk through thinking"
      ];
      options = ["Zero-shot learning", "Few-shot learning", "Chain-of-thought reasoning"];
      correctParts = ["Zero-shot learning", "Few-shot learning", "Chain-of-thought reasoning"];
    }

    const currentSelections = userSelected ? userSelected.split(' | ') : Array(items.length).fill('');

    let matchingRows = items.map((itemText, idx) => {
      const selectedVal = currentSelections[idx] || '';
      const correctVal = correctParts[idx];
      let stateClass = '';
      if (showExp) {
        stateClass = selectedVal === correctVal ? 'match-correct' : 'match-incorrect';
      }

      let selectOrBadgeHtml = '';
      if (isAns) {
        if (selectedVal === correctVal) {
          selectOrBadgeHtml = `
            <div class="matching-badge badge-correct">
              <span class="badge-icon">✓</span>
              <span class="badge-text">${selectedVal}</span>
            </div>
          `;
        } else {
          selectOrBadgeHtml = `
            <div class="matching-badge-group">
              <div class="matching-badge badge-incorrect">
                <span class="badge-icon">✗</span>
                <span class="badge-text">${selectedVal || 'Chưa chọn'}</span>
              </div>
              <div class="matching-correct-reveal-badge">
                ➔ Đúng: <span class="correct-text-highlight">${correctVal}</span>
              </div>
            </div>
          `;
        }
      } else {
        selectOrBadgeHtml = `
          <select class="matching-dropdown" 
                  onchange="selectMatchingItem(${tIdx}, ${q.id}, ${idx}, this.value, ${items.length})">
            <option value="">-- Chọn đáp án --</option>
            ${options.map(opt => `
              <option value="${opt}" ${selectedVal === opt ? 'selected' : ''}>${opt}</option>
            `).join('')}
          </select>
        `;
      }

      return `
        <div class="matching-row ${stateClass}">
          <div class="matching-item-text">${idx + 1}. ${itemText}</div>
          <div class="matching-select-wrapper">
            ${selectOrBadgeHtml}
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="question-card" id="qcard_${q.id}">
        <div class="q-card-header">
          <div class="q-number-title">Question ${q.id} (Ghép nối đáp án)</div>
          <div class="q-card-actions">
            ${showExp ? `<button class="btn-icon-action btn-detail-exp ${isDetailOpen ? 'detail-active' : ''}" onclick="toggleDetailedExp(${tIdx}, ${q.id})">📖 Chi tiết đáp án</button>` : ''}
            <button class="btn-icon-action ${isBm ? 'bookmarked' : ''}" onclick="toggleBookmark(${tIdx}, ${q.id})">
              ${isBm ? '★ Saved' : '☆ Bookmark'}
            </button>
            <button class="btn-icon-action" onclick="copyForAI(${tIdx}, ${q.id})">🤖 Ask AI</button>
          </div>
        </div>

        <div class="q-prompt">${q.text.split('\n')[0].trim()}</div>

        <div class="matching-container">
          ${matchingRows}
        </div>

        <div class="explanation-box ${showExp ? 'visible' : ''}">
          <div class="exp-header">💡 CORRECT ANSWER: ${correctParts.join(' | ')}</div>
          <div class="exp-content">${q.explanation}</div>
        </div>

        <div class="detailed-exp-drawer ${isDetailOpen ? 'open' : ''}">
          <div class="detailed-exp-header">📖 PHÂN TÍCH VÀ GIẢI THÍCH CHUYÊN SÂU (DETAILED BREAKDOWN)</div>
          <div class="detailed-exp-body">${renderMarkdown(detailedBreakdown)}</div>
        </div>
      </div>
    `;
  }

  return `
    <div class="question-card" id="qcard_${q.id}">
      <div class="q-card-header">
        <div class="q-number-title">Question ${q.id}</div>
        <div class="q-card-actions">
          ${showExp ? `<button class="btn-icon-action btn-detail-exp ${isDetailOpen ? 'detail-active' : ''}" onclick="toggleDetailedExp(${tIdx}, ${q.id})">📖 Chi tiết đáp án</button>` : ''}
          <button class="btn-icon-action ${isBm ? 'bookmarked' : ''}" onclick="toggleBookmark(${tIdx}, ${q.id})">
            ${isBm ? '★ Saved' : '☆ Bookmark'}
          </button>
          <button class="btn-icon-action" onclick="copyForAI(${tIdx}, ${q.id})">🤖 Ask AI</button>
        </div>
      </div>

      <div class="q-prompt">${q.text}</div>

      <div class="options-list">
        ${q.options.map(opt => {
    let stateClass = '';
    const isOptSelected = Array.isArray(userSelected) ? userSelected.includes(opt.key) : userSelected === opt.key;
    const isCorrectOpt = correctAnswers.includes(opt.key);

    if (isAns) {
      if (isOptSelected) {
        stateClass = isCorrectOpt ? 'selected-correct' : 'selected-incorrect';
      } else if (isCorrectOpt) {
        stateClass = 'reveal-correct';
      }
    } else if (state.revealAllAnswers && isCorrectOpt) {
      stateClass = 'reveal-correct';
    } else if (isOptSelected) {
      stateClass = 'selected';
    }

    return `
            <div class="option-item ${stateClass}" onclick="selectOption(${tIdx}, ${q.id}, '${opt.key}')">
              <div class="option-key">${opt.key}</div>
              <div class="option-text">${opt.text}</div>
            </div>
          `;
  }).join('')}
      </div>

      <!-- Standard Explanation Box (Shows automatically after choosing answer) -->
      <div class="explanation-box ${showExp ? 'visible' : ''}">
        <div class="exp-header">💡 CORRECT ANSWER: ${correctAnswers.join(', ')}</div>
        <div class="exp-content">${q.explanation}</div>
      </div>

      <!-- Detailed Explanation Drawer (Shows ONLY when clicking 'Chi tiết đáp án') -->
      <div class="detailed-exp-drawer ${isDetailOpen ? 'open' : ''}">
        <div class="detailed-exp-header">📖 PHÂN TÍCH VÀ GIẢI THÍCH CHUYÊN SÂU (DETAILED BREAKDOWN)</div>
        <div class="detailed-exp-body">${renderMarkdown(detailedBreakdown)}</div>
      </div>
    </div>
  `;
}

function toggleDetailedExp(tIdx, qId) {
  const key = `${tIdx}_${qId}`;
  if (!state.openDetailedExp) state.openDetailedExp = {};
  state.openDetailedExp[key] = !state.openDetailedExp[key];

  const qCard = document.getElementById(`qcard_${qId}`);
  if (qCard) {
    const drawer = qCard.querySelector('.detailed-exp-drawer');
    const btn = qCard.querySelector('.btn-detail-exp');

    if (state.openDetailedExp[key]) {
      const detailedBreakdown = (window.DETAILED_EXPLANATIONS && window.DETAILED_EXPLANATIONS[key]);
      if (detailedBreakdown) {
        const body = drawer.querySelector('.detailed-exp-body');
        if (body) {
          body.innerHTML = renderMarkdown(detailedBreakdown);
        }
      } else {
        loadExplanationsForTest(tIdx, () => {
          const test = window.TESTS_DATA && window.TESTS_DATA[tIdx];
          const q = test && test.questions && test.questions.find(x => x.id === qId);
          const basicExp = q ? q.explanation : '';

          const freshBreakdown = (window.DETAILED_EXPLANATIONS && window.DETAILED_EXPLANATIONS[key]) ||
            (q && q.detailed_explanation) ||
            `⚠️ **Không thể tải giải thích chi tiết từ hệ thống.**\n\n**Giải thích cơ bản:**\n${basicExp}`;
          const body = drawer.querySelector('.detailed-exp-body');
          if (body) {
            body.innerHTML = renderMarkdown(freshBreakdown);
          }
        });
      }
    }

    if (drawer) {
      drawer.classList.toggle('open', !!state.openDetailedExp[key]);
    }
    if (btn) {
      btn.classList.toggle('detail-active', !!state.openDetailedExp[key]);
    }
  }
}

function selectOption(tIdx, qId, optKey) {
  const key = `${tIdx}_${qId}`;
  const test = window.TESTS_DATA[tIdx];
  const q = test.questions.find(x => x.id === qId);
  const correctAnswers = Array.isArray(q.answers) ? q.answers : [q.answers || q.answer_str];
  const isMulti = correctAnswers.length > 1;

  if (isMulti) {
    let current = Array.isArray(state.userAnswers[key]) ? [...state.userAnswers[key]] : [];
    if (current.includes(optKey)) {
      // Toggle off if already selected
      current = current.filter(x => x !== optKey);
    } else if (current.length < correctAnswers.length) {
      // Add if not already selected and we haven't reached the limit
      current.push(optKey);
    }
    state.userAnswers[key] = current;
  } else {
    state.userAnswers[key] = optKey;
  }

  localStorage.setItem(LS_USER_ANSWERS, JSON.stringify(state.userAnswers));
  touchStreak();
  renderSidebarTree();
  renderTestView(tIdx);
}

function addOrderStep(tIdx, qId, stepKey) {
  const key = `${tIdx}_${qId}`;
  let current = state.userAnswers[key] ? state.userAnswers[key].split(' → ') : [];
  if (current.includes(stepKey)) return;
  current.push(stepKey);

  const joined = current.join(' → ');
  state.userAnswers[key] = joined;

  if (current.length === 4) {
    localStorage.setItem(LS_USER_ANSWERS, JSON.stringify(state.userAnswers));
    touchStreak();
    renderSidebarTree();
  }
  renderTestView(tIdx);
}

function resetOrderSteps(tIdx, qId) {
  const key = `${tIdx}_${qId}`;
  delete state.userAnswers[key];
  delete state.openDetailedExp[key];
  localStorage.setItem(LS_USER_ANSWERS, JSON.stringify(state.userAnswers));
  renderSidebarTree();
  renderTestView(tIdx);
}

function selectMatchingItem(tIdx, qId, itemIdx, val, totalItems) {
  const key = `${tIdx}_${qId}`;
  let current = state.userAnswers[key] ? state.userAnswers[key].split(' | ') : Array(totalItems).fill('');
  current[itemIdx] = val;

  const joined = current.join(' | ');
  state.userAnswers[key] = joined;

  const isCompleted = current.every(x => x !== '');
  if (isCompleted) {
    localStorage.setItem(LS_USER_ANSWERS, JSON.stringify(state.userAnswers));
    touchStreak();
    renderSidebarTree();
  }
  renderTestView(tIdx);
}

function toggleBookmark(tIdx, qId) {
  const key = `${tIdx}_${qId}`;
  if (state.bookmarks[key]) {
    delete state.bookmarks[key];
  } else {
    state.bookmarks[key] = true;
  }
  localStorage.setItem(LS_BOOKMARKS, JSON.stringify(state.bookmarks));
  renderSidebarTree();
  renderTestView(tIdx);
}

function setFilter(filter) {
  state.currentFilter = filter;
  renderTestView(state.currentTestIdx);
}

function toggleRevealAllAnswers() {
  state.revealAllAnswers = !state.revealAllAnswers;
  renderTestView(state.currentTestIdx);
}

function resetCurrentTest() {
  showCustomConfirm(
    `Reset Test ${state.currentTestIdx + 1}`,
    `Bạn có chắc chắn muốn reset toàn bộ đáp án của Practice Test ${state.currentTestIdx + 1} không?`,
    () => {
      const tests = window.TESTS_DATA || [];
      const test = tests[state.currentTestIdx];
      if (test && test.questions) {
        test.questions.forEach(q => {
          const key = `${state.currentTestIdx}_${q.id}`;
          delete state.userAnswers[key];
          delete state.openDetailedExp[key];
        });
      }
      localStorage.setItem(LS_USER_ANSWERS, JSON.stringify(state.userAnswers));
      renderSidebarTree();
      renderTestView(state.currentTestIdx);
      showToast('🔄 Reset answers for this test!');
    }
  );
}

function getTestCompletedCount(testIdx) {
  const tests = window.TESTS_DATA || [];
  const test = tests[testIdx];
  if (!test || !test.questions) return 0;
  return test.questions.filter(q => isQuestionAnswered(`${testIdx}_${q.id}`, state.userAnswers[`${testIdx}_${q.id}`])).length;
}

function updateOverallProgress() {
  let totalQs = 0;
  let doneQs = 0;
  const tests = window.TESTS_DATA || [];
  tests.forEach((t, idx) => {
    if (t.questions) {
      totalQs += t.questions.length;
      doneQs += getTestCompletedCount(idx);
    }
  });
  const pct = totalQs ? Math.round((doneQs / totalQs) * 100) : 0;

  // Drive the progress ring SVG
  const C = 2 * Math.PI * 15; // circumference of r=15 circle ≈ 94.25
  if (dom.ringFill) {
    dom.ringFill.style.strokeDasharray = C;
    dom.ringFill.style.strokeDashoffset = C * (1 - pct / 100);
  }
  if (dom.ringPct) dom.ringPct.textContent = pct + '%';
  if (dom.progressCount) dom.progressCount.textContent = `${doneQs}/${totalQs}`;
}

function scrollToQuestion(testIdx, qId) {
  if (state.viewMode !== 'test' || state.currentTestIdx !== testIdx) {
    selectTest(testIdx);
  }
  setTimeout(() => {
    const el = document.getElementById(`qcard_${qId}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 100);
}

// UTILS & PROMPT COPY
// Universal Clipboard Copy Helper (Works on HTTPS, HTTP, Localhost, File://)
function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  } else {
    return new Promise((resolve, reject) => {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.top = '0';
        textarea.style.left = '0';
        textarea.style.width = '2em';
        textarea.style.height = '2em';
        textarea.style.padding = '0';
        textarea.style.border = 'none';
        textarea.style.outline = 'none';
        textarea.style.boxShadow = 'none';
        textarea.style.background = 'transparent';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();

        const successful = document.execCommand('copy');
        document.body.removeChild(textarea);

        if (successful) resolve();
        else reject(new Error('execCommand copy failed'));
      } catch (err) {
        reject(err);
      }
    });
  }
}

function copyForAI(tIdx, qId) {
  const tests = window.TESTS_DATA || [];
  const test = tests[tIdx];
  if (!test || !test.questions) return;
  const q = test.questions.find(item => item.id === qId);
  if (!q) return;

  const promptText = `Hãy phân tích và giải thích chi tiết câu hỏi thi AWS Certified AI Practitioner sau đây:

[Bài Test]: ${test.title} - Câu ${q.id}
[Câu hỏi]:
${q.id}. ${q.text}
${q.options.map(o => `- ${o.key}. ${o.text}`).join('\n')}

[Đáp án đúng]: ${Array.isArray(q.answers) ? q.answers.join(', ') : (q.answers || q.answer_str)}
[Lời giải thích hiện tại]:
${q.explanation}

[Yêu cầu dành cho AI]:
Hãy phân tích chuyên sâu tại sao đáp án trên lại là lựa chọn chính xác nhất theo tiêu chuẩn AWS AI Practitioner, đồng thời phân tích lý do chi tiết vì sao các đáp án còn lại chưa phù hợp trong ngữ cảnh này.`;

  copyToClipboard(promptText).then(() => {
    showToast('📋 Đã sao chép prompt cho AI!');
  }).catch(err => {
    console.error('Clipboard copy failed:', err);
    prompt('Copy Prompt cho AI bên dưới:', promptText);
  });
}

function showToast(msg) {
  dom.toast.innerText = msg;
  dom.toast.classList.add('show');
  setTimeout(() => dom.toast.classList.remove('show'), 2500);
}

function showCustomConfirm(title, message, onOk) {
  const modal = document.getElementById('confirmModal');
  const titleEl = document.getElementById('confirmTitle');
  const bodyEl = document.getElementById('confirmBody');
  const okBtn = document.getElementById('confirmOkBtn');
  const cancelBtn = document.getElementById('confirmCancelBtn');

  titleEl.innerText = title;
  bodyEl.innerText = message;

  modal.classList.add('show');

  const onConfirm = () => {
    cleanup();
    onOk();
  };

  const onCancel = () => {
    cleanup();
  };

  const onOutsideClick = (e) => {
    if (e.target === modal) {
      cleanup();
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'Escape') {
      cleanup();
    }
  };

  const cleanup = () => {
    modal.classList.remove('show');
    okBtn.removeEventListener('click', onConfirm);
    cancelBtn.removeEventListener('click', onCancel);
    modal.removeEventListener('click', onOutsideClick);
    document.removeEventListener('keydown', onKeyDown);
  };

  okBtn.addEventListener('click', onConfirm);
  cancelBtn.addEventListener('click', onCancel);
  modal.addEventListener('click', onOutsideClick);
  document.addEventListener('keydown', onKeyDown);
}

// EVENT BINDING
function setupEventListeners() {
  dom.sidebarToggle.addEventListener('click', () => {
    dom.sidebar.classList.toggle('collapsed');
  });

  dom.themeToggle.addEventListener('click', toggleTheme);

  dom.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderSidebarTree();
  });
}

// Start Application
document.addEventListener('DOMContentLoaded', init);

