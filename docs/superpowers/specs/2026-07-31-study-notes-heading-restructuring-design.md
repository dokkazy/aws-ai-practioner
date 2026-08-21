# Study Notes Heading Restructuring (H1 -> H4) & CSS Hierarchy Design Specification

## Project Context & Path
- **Workspace Directory**: `/home/vchuy/Documents/aws-ai-practioner`
- **Target Files**:
  - `notes-data.js` (Contains 28 study note contents in `window.NOTES_DATA`)
  - `aws-ai-practioner.css` (Contains `.markdown-body` styling for headings & prose)
  - `aws-ai-practioner.html` (Application HTML structure)

## Overview
Currently, the study notes embedded in `notes-data.js` primarily use flat `##` (H2) headers with occasional `###` (H3), resulting in weak structural hierarchy. 
This specification outlines the comprehensive restructuring of heading levels from H1 to H4 across all 28 study notes in `notes-data.js`, along with visual CSS enhancements in `aws-ai-practioner.css`.

## Goals
1. Standardize heading levels H1 -> H4 across all 28 study notes (`notes-data.js`).
2. Implement visual CSS hierarchy for H1 -> H4 in `.markdown-body` within `aws-ai-practioner.css`.
3. Ensure 100% synchronization between source notes content and web portal runtime data in `notes-data.js`.

---

## 1. Heading Hierarchy Standard

| Level | Syntax | Role & Scope | Example |
|---|---|---|---|
| **H1** | `# Title` | Note Title (Single instance at file start) | `# AI and Machine Learning Overview` |
| **H2** | `## Chapter` | Major Knowledge Chapter / Core Category | `## Supervised Learning`, `## Deep Learning` |
| **H3** | `### Section` | Sub-topic, Algorithm, Service, or Concept | `### Regression`, `### Neural Networks` |
| **H4** | `#### Subsection` | Detailed breakdown, metrics, code, or sub-feature | `#### Confusion Matrix`, `#### Feature Selection` |

---

## 2. Visual CSS Design (`aws-ai-practioner.css`)

The `.markdown-body` CSS will be updated with distinct styles for each heading level:

```css
/* H1 - Main Document Title */
.markdown-body h1 {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--text);
  margin: 2rem 0 1.25rem 0;
  padding-bottom: 0.6rem;
  border-bottom: 2px solid var(--accent);
}

/* H2 - Major Chapter Box */
.markdown-body h2 {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--accent);
  margin: 2rem 0 1rem 0;
  padding: 0.5rem 0.8rem;
  background: var(--surface-2);
  border-left: 4px solid var(--accent);
  border-radius: var(--radius-sm);
}

/* H3 - Sub-topic / Component */
.markdown-body h3 {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text);
  margin: 1.5rem 0 0.75rem 0;
  padding-left: 0.6rem;
  border-left: 3px solid var(--border-strong);
}

/* H4 - Technical Detail / Metric */
.markdown-body h4 {
  font-size: 0.98rem;
  font-weight: 600;
  color: var(--text-muted);
  margin: 1.2rem 0 0.5rem 0;
  padding-left: 1.2rem;
  position: relative;
}

.markdown-body h4::before {
  content: '▸';
  position: absolute;
  left: 0.2rem;
  color: var(--accent);
}
```

---

## 3. Automation Script & Data Sync

A Node.js script (`scripts/restructure-headings.js`) will:
1. Scan and parse all 28 note objects in `notes-data.js`.
2. Restructure flat `##` headings into logical `###` and `####` based on domain knowledge hierarchy.
3. Re-generate Table of Contents (TOC) links inside each note markdown string.
4. Overwrite `notes-data.js` (`window.NOTES_DATA`) with updated notes.

---

## 4. Verification Plan

1. Verify heading syntax in all 28 notes in `notes-data.js`.
2. Verify `notes-data.js` JS syntax execution.
3. Validate web application UI rendering across light and dark themes in `aws-ai-practioner.html`.
