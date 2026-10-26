const fs = require('fs');

// Read the raw JSON from the file
let raw = fs.readFileSync('portal_questions_raw.json', 'utf8');

// Remove BOM
raw = raw.replace(/^\uFEFF/, '');

// The data was inside a JS template literal JSON.parse(`...`)
// The escaping is: \\" represents a literal " inside a JSON string value
// and \\n represents a literal \n inside a JSON string value
// We need to unescape the template literal escaping first
// In the template literal: \\\\ -> \\ and \\" -> \"  and \\n -> \n

// Replace \\\\ with a placeholder first
raw = raw.replace(/\\\\\\\\/g, '%%BACKSLASH%%');
// Replace \\" (template literal escaped quote) with \" (JSON escaped quote)  
raw = raw.replace(/\\\\"/g, '\\"');
// Replace \\n (template literal escaped newline) with \\n (JSON escaped newline is already \\n)
// Actually \\n in the extracted string is already correct for JSON
// Replace placeholder back
raw = raw.replace(/%%BACKSLASH%%/g, '\\\\');

try {
    const questions = JSON.parse(raw);
    console.log('Total questions parsed:', questions.length);
    
    // Separate into sets
    const sets = {};
    questions.forEach(q => {
        if (!sets[q.setId]) sets[q.setId] = [];
        sets[q.setId].push(q);
    });
    
    console.log('\n=== Question Sets ===');
    Object.keys(sets).sort().forEach(setId => {
        console.log(`${setId}: ${sets[setId].length} questions`);
    });
    
    // 2026 current session
    const current = questions.filter(q => q.setId === '2026-current');
    console.log('\n=== 2026 Current Session ===');
    const curWeeks = {};
    current.forEach(q => {
        const w = 'W' + q.weekNum;
        if (!curWeeks[w]) curWeeks[w] = [];
        curWeeks[w].push(q);
    });
    Object.keys(curWeeks).sort((a,b) => parseInt(a.slice(1)) - parseInt(b.slice(1))).forEach(w => {
        console.log(`  ${w}: ${curWeeks[w].length} questions`);
    });
    
    // Practice bank (everything else)
    const practice = questions.filter(q => q.setId !== '2026-current');
    console.log('\n=== Practice Bank ===');
    console.log('Total practice questions:', practice.length);
    
    const pracWeeks = {};
    practice.forEach(q => {
        const w = 'W' + q.weekNum;
        pracWeeks[w] = (pracWeeks[w] || 0) + 1;
    });
    Object.keys(pracWeeks).sort((a,b) => parseInt(a.slice(1)) - parseInt(b.slice(1))).forEach(w => {
        console.log(`  ${w}: ${pracWeeks[w]} questions`);
    });
    
    // Save properly parsed JSON
    // Save current session by week
    const outDir = 'mcq-website/public/data';
    fs.mkdirSync(outDir + '/current-session-2026', { recursive: true });
    fs.mkdirSync(outDir + '/practice-bank-904', { recursive: true });
    
    Object.keys(curWeeks).forEach(w => {
        const weekNum = w.slice(1);
        fs.writeFileSync(
            `${outDir}/current-session-2026/W${weekNum}.json`,
            JSON.stringify(curWeeks[w], null, 2),
            'utf8'
        );
    });
    
    // Save practice bank as one file
    fs.writeFileSync(
        `${outDir}/practice-bank-904/questions.json`,
        JSON.stringify(practice, null, 2),
        'utf8'
    );
    
    // Save source manifest
    const manifest = {
        source: 'https://nptel-iot.vercel.app/',
        sourceRepo: 'https://github.com/Harshith1702/nptel-iot',
        extractedAt: new Date().toISOString(),
        totalQuestions: questions.length,
        currentSessionCount: current.length,
        practiceCount: practice.length,
        sets: Object.keys(sets).map(s => ({
            setId: s,
            count: sets[s].length,
            term: sets[s][0]?.term || 'Unknown'
        })),
        weekBreakdown: {
            currentSession: Object.fromEntries(
                Object.entries(curWeeks).map(([w, qs]) => [w, qs.length])
            ),
            practiceBank: pracWeeks
        }
    };
    
    fs.writeFileSync(
        `${outDir}/practice-bank-904/source-manifest.json`,
        JSON.stringify(manifest, null, 2),
        'utf8'
    );
    
    console.log('\n=== Files Saved ===');
    console.log('Current session: W1-W12 JSON files in', outDir + '/current-session-2026/');
    console.log('Practice bank: questions.json in', outDir + '/practice-bank-904/');
    console.log('Manifest: source-manifest.json');
    
    // Sample question structure
    console.log('\n=== Sample Question Fields ===');
    const sample = questions[0];
    Object.keys(sample).forEach(k => {
        const v = sample[k];
        const display = typeof v === 'string' ? v.substring(0, 80) : JSON.stringify(v);
        console.log(`  ${k}: ${display}`);
    });
    
} catch(e) {
    console.error('Parse error:', e.message);
    // Find and show context around error
    const match = e.message.match(/position (\d+)/);
    if (match) {
        const pos = parseInt(match[1]);
        console.log('Context:', JSON.stringify(raw.substring(Math.max(0, pos-30), pos+30)));
    }
}
