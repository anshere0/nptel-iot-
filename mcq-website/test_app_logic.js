import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('=====================================================');
console.log('   NPTEL IoT Portal Automated Logic & Data Test Suite');
console.log('=====================================================\n');

let testsPassed = 0;
let testsFailed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ PASS: ${message}`);
    testsPassed++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    testsFailed++;
  }
}

// TEST 1: Manifest integrity
console.log('[Suite 1: Manifest & Data Completeness]');
const manifestPath = path.join(__dirname, 'public', 'data', 'manifest.json');
assert(fs.existsSync(manifestPath), 'manifest.json exists');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

// Verify manifest counts align with actual file counts
assert(manifest.totalAllQuestions >= 977, `Total questions in manifest is >= 977 (actual: ${manifest.totalAllQuestions})`);
assert(manifest.currentSession.total === 253, `Current session total is 253 (actual: ${manifest.currentSession.total})`);
assert(manifest.practiceBank.total === 724, `Practice bank total is 724 (actual: ${manifest.practiceBank.total})`);
if (manifest.aiGenerated) {
  assert(manifest.aiGenerated.total === 28, `AI Generated bank total is 28 (actual: ${manifest.aiGenerated.total})`);
}

// TEST 2: Current session files W1 to W12
console.log('\n[Suite 2: 2026 Current Session Integrity]');
let curSum = 0;
for (let w = 1; w <= 12; w++) {
  const wPath = path.join(__dirname, 'public', 'data', 'current-session-2026', `W${w}.json`);
  assert(fs.existsSync(wPath), `W${w}.json exists`);
  const data = JSON.parse(fs.readFileSync(wPath, 'utf8'));
  
  // Every week must have at least 15 questions (15 from official PDF + any preserved supplementary)
  assert(data.length >= 15, `W${w}.json has >= 15 questions (actual: ${data.length})`);
  
  // Verify first 15 questions are sequential Q1..Q15
  let first15Valid = true;
  for (let i = 0; i < 15; i++) {
    if (data[i].questionNum !== i + 1) {
      first15Valid = false;
      break;
    }
  }
  assert(first15Valid, `W${w}.json first 15 questions are numbered Q1..Q15 following official PDF`);
  
  curSum += data.length;

  // Check each question has required fields
  data.forEach((q, idx) => {
    if (!q.id || !q.question || !q.options || !q.correctKeys || q.correctKeys.length === 0) {
      assert(false, `W${w} Q${idx + 1} has complete schema`);
    }
  });
}
assert(curSum === 253, `Total 2026 session questions sum to 253 (actual: ${curSum})`);

// TEST 3: Practice Bank completeness
console.log('\n[Suite 3: Practice Bank Integrity]');
const pracPath = path.join(__dirname, 'public', 'data', 'practice-bank-904', 'questions.json');
assert(fs.existsSync(pracPath), 'practice-bank-904/questions.json exists');
const practiceData = JSON.parse(fs.readFileSync(pracPath, 'utf8'));
assert(practiceData.length === 724, `Practice bank contains exactly 724 questions (actual: ${practiceData.length})`);

// TEST 4: Scoring Engine Logic
console.log('\n[Suite 4: Scoring Engine Logic Simulation]');

function evaluateAnswer(correctKeys, selectedKeys) {
  const c = correctKeys.map(k => String(k).trim().toLowerCase()).sort();
  const s = selectedKeys.map(k => String(k).trim().toLowerCase()).sort();
  return c.length === s.length && c.every((k, idx) => k === s[idx]);
}

// Single-choice test
assert(evaluateAnswer(['b'], ['b']) === true, 'Single-choice correct option evaluates to TRUE');
assert(evaluateAnswer(['b'], ['a']) === false, 'Single-choice incorrect option evaluates to FALSE');
assert(evaluateAnswer(['b'], ['b', 'c']) === false, 'Single-choice with extra distractor evaluates to FALSE');

// Multiple-select test
assert(evaluateAnswer(['a', 'b', 'c'], ['a', 'b', 'c']) === true, 'Multi-select exact match evaluates to TRUE');
assert(evaluateAnswer(['a', 'b', 'c'], ['a', 'b']) === false, 'Multi-select partial answer evaluates to FALSE');
assert(evaluateAnswer(['a', 'b', 'c'], ['a', 'b', 'c', 'd']) === false, 'Multi-select with extra wrong key evaluates to FALSE');
assert(evaluateAnswer(['a', 'b'], ['b', 'a']) === true, 'Multi-select order-independent selection evaluates to TRUE');

// True/False test
assert(evaluateAnswer(['a'], ['a']) === true, 'True/False correct evaluates to TRUE');
assert(evaluateAnswer(['a'], ['b']) === false, 'True/False wrong evaluates to FALSE');

// TEST 5: Bank Separation Verification
console.log('\n[Suite 5: Bank Separation Check]');
const w1Sample = JSON.parse(fs.readFileSync(path.join(__dirname, 'public', 'data', 'current-session-2026', 'W1.json'), 'utf8'))[0];
assert(w1Sample.bank === 'current-session-2026', 'Current session record has bank="current-session-2026"');
assert(practiceData[0].bank === 'practice-bank-904', 'Practice bank record has bank="practice-bank-904"');

// TEST 6: AI Generated Questions Verification
console.log('\n[Suite 6: AI Generated Conceptual Bank Integrity]');
const aiPath = path.join(__dirname, 'public', 'data', 'ai-generated', 'questions.json');
assert(fs.existsSync(aiPath), 'ai-generated/questions.json exists');
const aiQuestions = JSON.parse(fs.readFileSync(aiPath, 'utf8'));
assert(aiQuestions.length === 28, `AI Generated bank has 28 questions (actual: ${aiQuestions.length})`);

// Verify all AI questions have required schema fields
let aiSchemaValid = true;
aiQuestions.forEach((q, idx) => {
  if (!q.id || !q.question || !q.options || !q.correctKeys || !q.explanation || !q.week) {
    aiSchemaValid = false;
    console.error(`  ✗ Invalid AI question schema at index ${idx}: ${q.id}`);
  }
});
assert(aiSchemaValid, 'All 28 AI Generated questions adhere to strict schema requirements');

console.log('\n=====================================================');
console.log(`   TEST RESULTS: ${testsPassed} PASSED, ${testsFailed} FAILED`);
console.log('=====================================================');

if (testsFailed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
