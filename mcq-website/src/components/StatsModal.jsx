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
  const bankData = is2026 ? manifest?.currentSession : manifest?.practiceBank;
  const totalQuestions = bankData?.total || 0;
  const weeksData = bankData?.weeks || {};

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
          Active Bank: <strong>{is2026 ? '2026 Exam-Session MCQs' : 'Historical Practice Bank'}</strong>
        </p>

        {/* Top 4 Stat Boxes */}
        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-val">{totalQuestions}</div>
            <div className="stat-lbl">Total Questions</div>
          </div>
          <div className="stat-box">
            <div className="stat-val" style={{ color: 'var(--accent-primary)' }}>{attempted}</div>
            <div className="stat-lbl">Attempted</div>
          </div>
          <div className="stat-box">
            <div className="stat-val" style={{ color: 'var(--success-border)' }}>{correct}</div>
            <div className="stat-lbl">Correct</div>
          </div>
          <div className="stat-box">
            <div className="stat-val" style={{ color: accuracy >= 70 ? 'var(--success-border)' : 'var(--warning-border)' }}>
              {accuracy}%
            </div>
            <div className="stat-lbl">Accuracy</div>
          </div>
        </div>

        {/* Weekly Progress Breakdown Table */}
        <h3 style={{ fontSize: '1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
          Weekly Syllabus Progress
        </h3>
        <table className="stats-table">
          <thead>
            <tr>
              <th>Week</th>
              <th>Total Qs</th>
              <th>Single</th>
              <th>Multi-Select</th>
              <th>True/False</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(weeksData).map(wKey => {
              const wInfo = weeksData[wKey];
              return (
                <tr key={wKey}>
                  <td style={{ fontWeight: 600 }}>{wKey}</td>
                  <td>{wInfo.count}</td>
                  <td>{wInfo.single}</td>
                  <td>{wInfo.multi}</td>
                  <td>{wInfo.tf}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Danger Zone: Reset Progress */}
        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
          {!confirmReset ? (
            <button
              className="pill-btn"
              style={{ color: 'var(--error-text)', borderColor: 'var(--error-border)' }}
              onClick={() => setConfirmReset(true)}
            >
              ⚠️ Reset Progress For This Bank
            </button>
          ) : (
            <div style={{ background: 'var(--error-bg)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--error-border)' }}>
              <p style={{ color: 'var(--error-text)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                Are you sure you want to permanently clear all recorded answers and statistics for this bank?
              </p>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  className="btn-primary"
                  style={{ background: 'var(--error-border)' }}
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
