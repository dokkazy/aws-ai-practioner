# Study Notes Heading Restructuring (H1 -> H4) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure heading levels (H1 to H4) across all 28 study notes in `notes-data.js`, update Markdown Table of Contents (TOC), and enhance visual CSS hierarchy in `aws-ai-practioner.css`.

**Architecture:** Node.js transformation script `scripts/restructure-headings.js` will parse `notes-data.js`, restructure header levels into H1 -> H4 based on document domain hierarchy, re-link TOC anchors, and write back to `notes-data.js`. `aws-ai-practioner.css` will be updated with distinct visual styles for H1, H2, H3, and H4 headings.

**Tech Stack:** JavaScript (Node.js ES6+), Vanilla CSS, HTML5.

---

### Task 1: CSS Heading Visual Hierarchy (`aws-ai-practioner.css`)

**Files:**
- Modify: `/home/vchuy/Documents/aws-ai-practioner/aws-ai-practioner.css:855-888`

- [ ] **Step 1: Inspect current CSS rules for `.markdown-body h2` and `.markdown-body h3`**

Run: `grep -n -A 35 "Headings UI/UX" /home/vchuy/Documents/aws-ai-practioner/aws-ai-practioner.css`

- [ ] **Step 2: Update `aws-ai-practioner.css` with H1 -> H4 visual hierarchy styles**

Replace lines around 855-887 in `aws-ai-practioner.css` with:

```css
/* Headings UI/UX Hierarchy (H1 -> H4) */
.markdown-body h1 {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--text);
  margin: 2.2rem 0 1.25rem 0;
  padding-bottom: 0.6rem;
  border-bottom: 2px solid var(--accent);
  letter-spacing: -0.02em;
  scroll-margin-top: 75px;
}

.markdown-body h2 {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--accent);
  margin: 2rem 0 1rem 0;
  padding: 0.5rem 0.8rem;
  background: var(--surface-2);
  border-left: 4px solid var(--accent);
  border-radius: var(--radius-sm);
  scroll-margin-top: 75px;
  line-height: 1.4;
  letter-spacing: -0.015em;
}

.markdown-body h3 {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text);
  margin: 1.6rem 0 0.75rem 0;
  padding-left: 0.6rem;
  border-left: 3px solid var(--border-strong);
  scroll-margin-top: 75px;
  line-height: 1.4;
}

.markdown-body h4 {
  font-size: 0.98rem;
  font-weight: 600;
  color: var(--text-muted);
  margin: 1.2rem 0 0.5rem 0;
  padding-left: 1.2rem;
  position: relative;
  scroll-margin-top: 75px;
  line-height: 1.4;
}

.markdown-body h4::before {
  content: '▸';
  position: absolute;
  left: 0.2rem;
  color: var(--accent);
}
```

- [ ] **Step 3: Verify CSS syntax integrity**

Run: `node -e "const fs = require('fs'); const css = fs.readFileSync('/home/vchuy/Documents/aws-ai-practioner/aws-ai-practioner.css', 'utf8'); console.log('CSS Lines:', css.split('\n').length);"`
Expected: Output shows valid line count (~1280 lines).

---

### Task 2: Heading Restructuring Node.js Script (`scripts/restructure-headings.js`)

**Files:**
- Create: `/home/vchuy/Documents/aws-ai-practioner/scripts/restructure-headings.js`
- Modify: `/home/vchuy/Documents/aws-ai-practioner/notes-data.js`

- [ ] **Step 1: Write transformation script `scripts/restructure-headings.js`**

Create `/home/vchuy/Documents/aws-ai-practioner/scripts/restructure-headings.js` with the logic to process markdown heading trees in `notes-data.js`.

The script:
1. Loads `window.NOTES_DATA` from `notes-data.js`.
2. For each note content string, parses line by line.
3. Classifies top-level concepts (H2), sub-concepts/algorithms/methods (H3), and detailed sub-elements/metrics/properties (H4).
4. Re-builds top Table of Contents (TOC) markdown block `- [Title](#anchor)` with correct indent spaces based on heading depth.
5. Overwrites `notes-data.js`.

- [ ] **Step 2: Run script to restructure headings across all 28 study notes**

Run: `node /home/vchuy/Documents/aws-ai-practioner/scripts/restructure-headings.js`
Expected: Output `Successfully restructured 28 study notes in notes-data.js`

- [ ] **Step 3: Validate syntax and content of updated `notes-data.js`**

Run: `node -e "const data = require('/home/vchuy/Documents/aws-ai-practioner/notes-data.js'); console.log('Total notes:', window.NOTES_DATA.length);"`
Expected: Output `Total notes: 28`

---

### Task 3: Verification & Browser Testing

**Files:**
- Test: `/home/vchuy/Documents/aws-ai-practioner/notes-data.js`
- Test: `/home/vchuy/Documents/aws-ai-practioner/aws-ai-practioner.html`

- [ ] **Step 1: Check heading distribution (H1, H2, H3, H4 counts) in `notes-data.js`**

Run: `node -e "const data = require('/home/vchuy/Documents/aws-ai-practioner/notes-data.js'); const notes = window.NOTES_DATA; let h1=0, h2=0, h3=0, h4=0; notes.forEach(n => { (n.content.match(/^# /gm)||[]).forEach(()=>h1++); (n.content.match(/^## /gm)||[]).forEach(()=>h2++); (n.content.match(/^### /gm)||[]).forEach(()=>h3++); (n.content.match(/^#### /gm)||[]).forEach(()=>h4++); }); console.log({h1, h2, h3, h4});"`

Expected output shows balanced distribution across H1, H2, H3, and H4 levels.

- [ ] **Step 2: Final Verification & Walkthrough Update**
