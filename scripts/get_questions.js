const fs = require('fs');
const path = require('path');

const [,, testIdxStr, startQStr, endQStr] = process.argv;
if (!testIdxStr || !startQStr || !endQStr) {
  console.error("Usage: node scripts/get_questions.js <test_index> <start_q> <end_q>");
  process.exit(1);
}

const testIdx = parseInt(testIdxStr, 10);
const startQ = parseInt(startQStr, 10);
const endQ = parseInt(endQStr, 10);

global.window = {};
require('../tests-data.js');

const test = window.TESTS_DATA[testIdx];
if (!test) {
  console.error(`Test ${testIdx} not found`);
  process.exit(1);
}

const questions = test.questions.slice(startQ - 1, endQ);
const output = questions.map(q => ({
  id: `${testIdx}_${q.id}`,
  question: q.text,
  options: q.options,
  answer_str: q.answer_str,
  explanation: q.explanation
}));

console.log(JSON.stringify(output, null, 2));
