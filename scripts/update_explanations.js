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

const targetMatch = content.match(/Object\.assign\(\s*window\.DETAILED_EXPLANATIONS\s*,\s*(\{)/);
if (!targetMatch) {
  console.error("Malformed target JS file structure");
  process.exit(1);
}
const startIdx = targetMatch.index + targetMatch[0].length - 1;
const endIdx = content.lastIndexOf('}');
if (startIdx === -1 || endIdx === -1 || startIdx >= endIdx) {
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
