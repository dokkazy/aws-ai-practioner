const fs = require('fs');
const path = require('path');

const notesDataPath = path.join(__dirname, '../notes-data.js');

let fileContent = fs.readFileSync(notesDataPath, 'utf8');
const window = {};
eval(fileContent);

if (!window.NOTES_DATA || !Array.isArray(window.NOTES_DATA)) {
  console.error('Failed to load window.NOTES_DATA');
  process.exit(1);
}

function slugify(text) {
  if (typeof text !== 'string') return '';
  return text
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'd')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function restructureNoteStrictHierarchy(content) {
  const lines = content.split('\n');
  let cleanLines = [];
  let inOldToc = false;

  // Filter out any existing TOC lines
  for (let line of lines) {
    if (line.trim().startsWith('- [') || line.trim().startsWith('* [')) {
      inOldToc = true;
      continue;
    }
    if (inOldToc) {
      if (line.trim() === '' || line.trim().startsWith('- [') || line.trim().startsWith('* [')) {
        continue;
      } else {
        inOldToc = false;
      }
    }
    cleanLines.push(line);
  }

  // Remove duplicate first H1 if present
  if (cleanLines.length > 0 && cleanLines[0].startsWith('# ')) {
    cleanLines.shift();
  }

  // Keywords that mark a Major Chapter (H2)
  const h2Keywords = [
    'what is cloud computing', 'deployment models', 'types of cloud', 'pricing of the cloud', 'aws cloud use cases',
    'what is ai', 'what is machine learning', 'what is deep', 'what is generative ai', 'training data',
    'supervised learning', 'unsupervised learning', 'semi-supervised', 'self-supervised', 'reinforcement learning',
    'what is rlhf', 'model fit', 'bias and variance', 'model evaluation', 'inferencing',
    'phases of a machine learning', 'hyperparameter tuning', 'what is amazon bedrock',
    'fine-tuning a model', 'amazon q business', 'amazon q developer', 'prompt engineering',
    'hardware for ai', 'sagemaker overview', 'compliance for ai', 'responsible ai', 'mlops', 'security and privacy'
  ];

  // Sub-detail keywords for H4 (must be nested under H3)
  const h4Keywords = [
    'feature engineering on structured', 'feature engineering on unstructured',
    'key classification metrics', 'auc-roc', 'regression metrics', 'metrics for evaluating llms'
  ];

  let currentH2 = null;
  let currentH3 = null;
  let resultLines = [];
  let headingTree = [];

  for (let i = 0; i < cleanLines.length; i++) {
    const line = cleanLines[i];

    if (line.startsWith('#') && line.includes(' ')) {
      const cleanText = line.replace(/^#+\s+/, '').trim();
      const lower = cleanText.toLowerCase();

      let level = 3;

      const isH2Candidate = h2Keywords.some(k => lower.includes(k));
      const isH4Candidate = h4Keywords.some(k => lower.includes(k));

      if (isH2Candidate) {
        level = 2;
        currentH2 = cleanText;
        currentH3 = null;
      } else if (currentH3 && isH4Candidate) {
        level = 4;
      } else {
        // Direct child of H2 MUST be H3!
        level = 3;
        currentH3 = cleanText;
      }

      const hashes = '#'.repeat(level);
      resultLines.push(`${hashes} ${cleanText}`);
      headingTree.push({ level, text: cleanText });
    } else {
      resultLines.push(line);
    }
  }

  // Generate Table of Contents
  let tocLines = [];
  headingTree.forEach((h) => {
    const slug = slugify(h.text);
    if (h.level === 2) {
      tocLines.push(`- [${h.text}](#${slug})`);
    } else if (h.level === 3) {
      tocLines.push(`  - [${h.text}](#${slug})`);
    } else if (h.level === 4) {
      tocLines.push(`    - [${h.text}](#${slug})`);
    }
  });

  let finalBody = [];
  finalBody.push(tocLines.join('\n'));
  finalBody.push('');
  finalBody.push(resultLines.join('\n'));

  return finalBody.join('\n');
}

window.NOTES_DATA.forEach((note) => {
  note.content = restructureNoteStrictHierarchy(note.content);
});

const newFileContent = `window.NOTES_DATA = ${JSON.stringify(window.NOTES_DATA, null, 2)};\n`;
fs.writeFileSync(notesDataPath, newFileContent, 'utf8');

console.log('Successfully enforced clean H2 -> H3 -> H4 parent-child nesting in notes-data.js!');
