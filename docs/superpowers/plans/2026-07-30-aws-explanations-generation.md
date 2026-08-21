# AWS AI Practitioner Explanations Generation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Regenerate detailed, non-boilerplate Vietnamese explanations for all 350 questions across the 7 practice tests in the workspace files `explanations-test-1.js` to `explanations-test-7.js` using the Master Prompt.

**Architecture:** 
1. Create a helper Node.js script `scripts/update_explanations.js` to safely merge generated explanations into the JS database files.
2. Process questions in batches of 10 to avoid token limit issues.
3. For each batch, the AI agent will generate detailed explanations according to the Master Prompt rules and output them to a temp JSON file.
4. Run the helper script to merge the JSON data into the target JS file.

**Tech Stack:** Node.js, JSON, ES6

## Global Constraints
- Target files: `explanations-test-1.js` through `explanations-test-7.js`.
- Output must match the exact markdown structure defined in the design spec.
- No boilerplate text like "đây là tính năng khác của AWS" for wrong answers.

---

### Task 1: Create the Helper Script

**Files:**
- Create: `scripts/update_explanations.js`

**Interfaces:**
- Consumes: JSON file path and test index.
- Produces: Updated JS explanation file.

- [ ] **Step 1: Write helper script code**
Create `scripts/update_explanations.js`:
```javascript
const fs = require('fs');
const path = require('path');

const [,, testIdxStr, jsonFilePath] = process.argv;
if (!testIdxStr || !jsonFilePath) {
  console.error("Usage: node scripts/update_explanations.js <test_index> <json_file_path>");
  process.exit(1);
}

const testIdx = parseInt(testIdxStr, 10);
const targetFile = path.join(__dirname, `../explanations-test-${testIdx + 1}.js`);

if (!fs.existsSync(targetFile)) {
  fs.writeFileSync(targetFile, `if (!window.DETAILED_EXPLANATIONS) window.DETAILED_EXPLANATIONS = {};\nObject.assign(window.DETAILED_EXPLANATIONS, {});\n`);
}

const newExplanations = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

let content = fs.readFileSync(targetFile, 'utf8');

// Parse the assignment
const startIdx = content.indexOf('{');
const endIdx = content.lastIndexOf('}');
if (startIdx === -1 || endIdx === -1) {
  console.error("Malformed target JS file structure");
  process.exit(1);
}

const jsonStr = content.substring(startIdx, endIdx + 1);
let existingObj = {};
try {
  // Use Function to safely evaluate the JS object string
  existingObj = new Function(`return ${jsonStr}`)();
} catch (e) {
  console.error("Failed to parse existing explanations in JS file", e);
  process.exit(1);
}

// Merge new explanations
Object.assign(existingObj, newExplanations);

// Write back
const formattedJson = JSON.stringify(existingObj, null, 2);
const newContent = `if (!window.DETAILED_EXPLANATIONS) window.DETAILED_EXPLANATIONS = {};\nObject.assign(window.DETAILED_EXPLANATIONS, ${formattedJson});\n`;
fs.writeFileSync(targetFile, newContent, 'utf8');
console.log(`Successfully merged ${Object.keys(newExplanations).length} explanations into ${targetFile}`);
```

- [ ] **Step 2: Test script with dummy data**
Create `scripts/dummy.json`:
```json
{
  "0_99": "### Dummy Explanation"
}
```
Run: `node scripts/update_explanations.js 0 scripts/dummy.json`
Verify that `explanations-test-1.js` now contains `"0_99": "### Dummy Explanation"`.

- [ ] **Step 3: Clean up dummy data**
Restore `explanations-test-1.js` (git checkout) and remove `scripts/dummy.json`.

- [ ] **Step 4: Commit script**
```bash
git add scripts/update_explanations.js
git commit -m "feat: add explanations update helper script"
```

---

### Task 2: Process Test 1 (Questions 1 to 50)
- [ ] **Step 1: Generate & merge Questions 1-10**
- [ ] **Step 2: Generate & merge Questions 11-20**
- [ ] **Step 3: Generate & merge Questions 21-30**
- [ ] **Step 4: Generate & merge Questions 31-40**
- [ ] **Step 5: Generate & merge Questions 41-50**
- [ ] **Step 6: Commit changes to explanations-test-1.js**

---

### Task 3: Process Test 2 (Questions 1 to 50)
- [ ] **Step 1: Generate & merge Questions 1-10**
- [ ] **Step 2: Generate & merge Questions 11-20**
- [ ] **Step 3: Generate & merge Questions 21-30**
- [ ] **Step 4: Generate & merge Questions 31-40**
- [ ] **Step 5: Generate & merge Questions 41-50**
- [ ] **Step 6: Commit changes to explanations-test-2.js**

---

### Task 4: Process Test 3 (Questions 1 to 50)
- [ ] **Step 1: Generate & merge Questions 1-10**
- [ ] **Step 2: Generate & merge Questions 11-20**
- [ ] **Step 3: Generate & merge Questions 21-30**
- [ ] **Step 4: Generate & merge Questions 31-40**
- [ ] **Step 5: Generate & merge Questions 41-50**
- [ ] **Step 6: Commit changes to explanations-test-3.js**

---

### Task 5: Process Test 4 (Questions 1 to 50)
- [ ] **Step 1: Generate & merge Questions 1-10**
- [ ] **Step 2: Generate & merge Questions 11-20**
- [ ] **Step 3: Generate & merge Questions 21-30**
- [ ] **Step 4: Generate & merge Questions 31-40**
- [ ] **Step 5: Generate & merge Questions 41-50**
- [ ] **Step 6: Commit changes to explanations-test-4.js**

---

### Task 6: Process Test 5 (Questions 1 to 50)
- [ ] **Step 1: Generate & merge Questions 1-10**
- [ ] **Step 2: Generate & merge Questions 11-20**
- [ ] **Step 3: Generate & merge Questions 21-30**
- [ ] **Step 4: Generate & merge Questions 31-40**
- [ ] **Step 5: Generate & merge Questions 41-50**
- [ ] **Step 6: Commit changes to explanations-test-5.js**

---

### Task 7: Process Test 6 (Questions 1 to 50)
*Mục tiêu:* Tạo lại 50 câu giải thích cho Practice Test 6 (`explanations-test-6.js`, keys `5_1` đến `5_50`) theo đúng 100% chuẩn Master Prompt của Test 1 -> 5.

- [ ] **Step 1: Generate & merge Questions 1-10 (`5_1` to `5_10`)**
- [ ] **Step 2: Generate & merge Questions 11-20 (`5_11` to `5_20`)**
- [ ] **Step 3: Generate & merge Questions 21-30 (`5_21` to `5_30`)**
- [ ] **Step 4: Generate & merge Questions 31-40 (`5_31` to `5_40`)**
- [ ] **Step 5: Generate & merge Questions 41-50 (`5_41` to `5_50`)**
- [ ] **Step 6: Validate format and commit changes to explanations-test-6.js**

---

### Task 8: Process Test 7 (Questions 1 to 50)
*Mục tiêu:* Tạo lại 50 câu giải thích cho Practice Test 7 (`explanations-test-7.js`, keys `6_1` đến `6_50`) theo đúng 100% chuẩn Master Prompt của Test 1 -> 5.

- [ ] **Step 1: Generate & merge Questions 1-10 (`6_1` to `6_10`)**
- [ ] **Step 2: Generate & merge Questions 11-20 (`6_11` to `6_20`)**
- [ ] **Step 3: Generate & merge Questions 21-30 (`6_21` to `6_30`)**
- [ ] **Step 4: Generate & merge Questions 31-40 (`6_31` to `6_40`)**
- [ ] **Step 5: Generate & merge Questions 41-50 (`6_41` to `6_50`)**
- [ ] **Step 6: Validate format and commit changes to explanations-test-7.js**
