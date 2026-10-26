import React, { useState } from 'react';

export default function StatsModal({
  isOpen,
  onClose,
  currentBank,
  manifest,
  userHistory,
  onResetProgress
}) {
  if (!isOpen) return null;

  const [confirmReset, setConfirmReset] = useState(false);

  const is2026 = currentBank === 'current-session-2026';
  const isAI = currentBank === 'ai-generated-bank';
  const isAIPractice = currentBank === 'ai-practice-bank';
  const isFlashcards = currentBank === 'flashcards';
  const isMockExams = currentBank === 'mock-exams-bank';

  let bankData = manifest?.practiceBank;
  let bankName = 'Historical Practice Bank';
  if (is2026) {
    bankData = manifest?.currentSession;
    bankName = '2026 Exam-Session MCQs';
  } else if (isAIPractice) {
    bankData = manifest?.aiPracticeBank;
    bankName = 'Official NPTEL AI Practice Questions (3,000 Qs)';
  } else if (isFlashcards) {
    bankData = manifest?.flashcards;
    bankName = 'Official NPTEL AI Flashcards Deck (1,800 Cards)';
  } else if (isMockExams) {
    bankData = manifest?.mockExamsBank;
    bankName = 'Official Mock Exam Papers (Mocks 1–5, 150 Qs)';
  } else if (isAI) {
    bankData = manifest?.aiGenerated;
    bankName = 'AI Generated Scenario MCQs';
  }

  const totalQuestions = bankData?.total || 0;
  const weeksData = isMockExams ? (bankData?.mocks || {}) : (bankData?.weeks || {});

  // Compute stats from userHistory
  let attempted = 0;
  let correct = 0;
  let incorrect = 0;

  Object.values(userHistory).forEach(h => {
    attempted++;
    if (h.isCorrect) correct++;
    else incorrect++;
  });

  const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
  const unattempted = Math.max(0, totalQuestions - attempted);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2>Learning Analytics & Performance</h2>
          <button 
            style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }} 
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          Active Bank: <strong>{bankName}</strong>
        </p>

        {/* Top 4 Stat Boxes */}
        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-val">{totalQuestions}</div>
            <div className="stat-lbl">Total Items</div>
          </div>
          <div className="stat-box">
            <div className="stat-val" style={{ color: 'var(--accent-primary)' }}>{attempted}</div>
            <div className="stat-lbl">Attempted</div>
          </div>
          <div className="stat-box">
            <div className="stat-val" style={{ color: 'var(--correct)' }}>{correct}</div>
            <div className="stat-lbl">Correct Answers</div>
          </div>
          <div className="stat-box">
            <div className="stat-val" style={{ color: accuracy >= 75 ? 'var(--correct)' : 'var(--warning)' }}>
              {accuracy}%
            </div>
            <div className="stat-lbl">Accuracy Rate</div>
          </div>
        </div>

        {/* Week-by-Week / Paper Breakdown */}
        <h3 style={{ fontSize: '1.125rem', marginBottom: '0.75rem', marginTop: '1.5rem' }}>
          {isMockExams ? 'Mock Exam Papers Breakdown (Mocks 1 to 5)' : 'Weekly Breakdown (Weeks 1 to 12)'}
        </h3>
        <div style={{ maxHeight: '240px', overflowY: 'auto', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ background: 'var(--bg-secondary)', textAlign: 'left', borderBottom: '1px solid var(--border-light)' }}>
                <th style={{ padding: '0.625rem 1rem' }}>{isMockExams ? 'Paper' : 'Week'}</th>
                <th style={{ padding: '0.625rem 1rem' }}>Available</th>
                <th style={{ padding: '0.625rem 1rem' }}>Completed</th>
                <th style={{ padding: '0.625rem 1rem' }}>Progress</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(weeksData).map(wKey => {
                const count = typeof weeksData[wKey] === 'number' ? weeksData[wKey] : weeksData[wKey]?.count || 0;
                const label = weeksData[wKey]?.title || wKey;
                return (
                  <tr key={wKey} style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '0.5rem 1rem', fontWeight: 600 }}>{label}</td>
                    <td style={{ padding: '0.5rem 1rem' }}>{count}</td>
                    <td style={{ padding: '0.5rem 1rem' }}>-</td>
                    <td style={{ padding: '0.5rem 1rem' }}>
                      <span className="tag tag-primary">Available</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Reset Progress Section */}
        <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h4 style={{ color: 'var(--danger)', fontSize: '0.9375rem', marginBottom: '0.25rem' }}>
                Danger Zone: Reset Bank History
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                Clears all answered options and bookmarks for <strong>{bankName}</strong>.
              </p>
            </div>

            {!confirmReset ? (
              <button
                className="pill-btn"
                style={{ borderColor: 'var(--danger)', color: 'var(--danger)' }}
                onClick={() => setConfirmReset(true)}
              >
                🗑️ Reset Progress
              </button>
            ) : (
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  className="pill-btn"
                  style={{ background: 'var(--danger)', color: '#fff', borderColor: 'var(--danger)' }}
                  onClick={() => {
                    onResetProgress();
                    setConfirmReset(false);
                    onClose();
                  }}
                >
                  Yes, Confirm Reset
                </button>
                <button
                  className="pill-btn"
                  onClick={() => setConfirmReset(false)}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
