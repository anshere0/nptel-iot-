import React, { useState } from 'react';

export default function MockTestModal({
  isOpen,
  onClose,
  allQuestions2026,
  onStartMockTest
}) {
  if (!isOpen) return null;

  // Selected weeks: Weeks 1 to 12
  const [selectedWeeks, setSelectedWeeks] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  
  // Question pool type: 'official-15' (only official 15 MCQs from PDF) vs 'all' (including supplementary)
  const [poolType, setPoolType] = useState('official-15');

  // Test length: '15', '30', '45', '60', or 'all'
  const [questionCount, setQuestionCount] = useState('30');

  // Exam mode: 'simulation' (feedback at end) vs 'immediate' (practice mode)
  const [examMode, setExamMode] = useState('simulation');

  // Timer: 0 (no timer), 15, 30, 45, 60, 90 (minutes)
  const [timerMinutes, setTimerMinutes] = useState(30);

  // Toggle single week
  const toggleWeek = (w) => {
    if (selectedWeeks.includes(w)) {
      if (selectedWeeks.length === 1) return; // Keep at least one week selected
      setSelectedWeeks(selectedWeeks.filter(item => item !== w));
    } else {
      setSelectedWeeks([...selectedWeeks, w].sort((a, b) => a - b));
    }
  };

  const selectAllWeeks = () => {
    setSelectedWeeks([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  };

  const deselectAllWeeks = () => {
    setSelectedWeeks([1]); // Keep at least week 1
  };

  // Compute available pool of questions
  const availablePool = allQuestions2026.filter(q => {
    if (!selectedWeeks.includes(q.weekNum)) return false;
    if (poolType === 'official-15' && q.questionNum > 15) return false;
    return true;
  });

  const handleStart = () => {
    if (availablePool.length === 0) return;

    let targetCount = questionCount === 'all' ? availablePool.length : parseInt(questionCount, 10);
    targetCount = Math.min(targetCount, availablePool.length);

    // Fisher-Yates shuffle
    const shuffled = [...availablePool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const testQuestions = shuffled.slice(0, targetCount);

    onStartMockTest({
      questions: testQuestions,
      selectedWeeks,
      examMode,
      timerMinutes: timerMinutes,
      poolType
    });
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content mock-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="mock-modal-header">
          <div>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>🎯</span> Custom Mock Test Simulator
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
              Randomized test engine covering verified 2026 examination MCQs.
            </p>
          </div>
          <button className="icon-btn" onClick={onClose} title="Close">✕</button>
        </div>

        <div className="mock-modal-body">
          {/* 1. Week Selector */}
          <div className="mock-section">
            <div className="mock-section-title-row">
              <span className="mock-section-title">1. Select Course Weeks to Include</span>
              <div className="mock-quick-actions">
                <button type="button" className="mock-text-btn" onClick={selectAllWeeks}>All (1–12)</button>
                <span>•</span>
                <button type="button" className="mock-text-btn" onClick={deselectAllWeeks}>Reset</button>
              </div>
            </div>

            <div className="mock-weeks-grid">
              {Array.from({ length: 12 }, (_, i) => i + 1).map((w) => {
                const isSelected = selectedWeeks.includes(w);
                return (
                  <button
                    key={w}
                    type="button"
                    className={`mock-week-chip ${isSelected ? 'selected' : ''}`}
                    onClick={() => toggleWeek(w)}
                  >
                    <span className="chip-check">{isSelected ? '✓' : '+'}</span>
                    <span>Week {w}</span>
                  </button>
                );
              })}
            </div>
            <p className="mock-hint">
              Selected: {selectedWeeks.length} of 12 weeks ({availablePool.length} questions available in pool)
            </p>
          </div>

          {/* 2. Pool Type & Question Count */}
          <div className="mock-section">
            <span className="mock-section-title">2. Questions & Length</span>
            <div className="mock-options-row">
              <label className="mock-radio-card">
                <input
                  type="radio"
                  name="poolType"
                  value="official-15"
                  checked={poolType === 'official-15'}
                  onChange={() => setPoolType('official-15')}
                />
                <div>
                  <strong>Official 15 MCQs per Week</strong>
                  <p>Exclusively uses the 15 official assignment PDF MCQs for selected weeks.</p>
                </div>
              </label>

              <label className="mock-radio-card">
                <input
                  type="radio"
                  name="poolType"
                  value="all"
                  checked={poolType === 'all'}
                  onChange={() => setPoolType('all')}
                />
                <div>
                  <strong>All Questions (Including Supplementary)</strong>
                  <p>Includes official 15 MCQs plus additional retained course questions.</p>
                </div>
              </label>
            </div>

            <div className="mock-counts-selector">
              <span className="mock-label">Number of Questions:</span>
              <div className="mock-pill-group">
                {['15', '30', '45', '60', 'all'].map((cnt) => (
                  <button
                    key={cnt}
                    type="button"
                    className={`pill-btn ${questionCount === cnt ? 'active' : ''}`}
                    onClick={() => setQuestionCount(cnt)}
                  >
                    {cnt === 'all' ? `All Available (${availablePool.length})` : `${cnt} Questions`}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Feedback Mode & Timer */}
          <div className="mock-section">
            <span className="mock-section-title">3. Test Environment</span>
            
            <div className="mock-options-row">
              <label className="mock-radio-card">
                <input
                  type="radio"
                  name="examMode"
                  value="simulation"
                  checked={examMode === 'simulation'}
                  onChange={() => setExamMode('simulation')}
                />
                <div>
                  <strong>Real Exam Simulation (Recommended)</strong>
                  <p>Answers remain hidden until you click "Submit Exam". Full scorecard & review revealed at end.</p>
                </div>
              </label>

              <label className="mock-radio-card">
                <input
                  type="radio"
                  name="examMode"
                  value="immediate"
                  checked={examMode === 'immediate'}
                  onChange={() => setExamMode('immediate')}
                />
                <div>
                  <strong>Practice Mode (Instant Feedback)</strong>
                  <p>Check answers and read explanations immediately after choosing each option.</p>
                </div>
              </label>
            </div>

            <div className="mock-timer-selector">
              <span className="mock-label">Countdown Timer:</span>
              <div className="mock-pill-group">
                {[
                  { label: 'Off (Untimed)', val: 0 },
                  { label: '15 Mins', val: 15 },
                  { label: '30 Mins', val: 30 },
                  { label: '45 Mins', val: 45 },
                  { label: '60 Mins', val: 60 }
                ].map((t) => (
                  <button
                    key={t.val}
                    type="button"
                    className={`pill-btn ${timerMinutes === t.val ? 'active' : ''}`}
                    onClick={() => setTimerMinutes(t.val)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mock-modal-footer">
          <div className="mock-summary-meta">
            <span>🎲 Randomly ordered from {selectedWeeks.length} weeks</span>
            <span>•</span>
            <span>
              {questionCount === 'all' ? availablePool.length : Math.min(parseInt(questionCount, 10), availablePool.length)} Questions
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button className="dock-action-btn" onClick={onClose}>Cancel</button>
            <button 
              className="btn-primary" 
              onClick={handleStart}
              disabled={availablePool.length === 0}
              style={{ padding: '0.625rem 1.5rem', fontWeight: 700 }}
            >
              🚀 Start Mock Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
