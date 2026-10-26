import React from 'react';

export default function BankSelector({ 
  currentBank, 
  onSelectBank, 
  manifest,
  userStats2026,
  userStatsPractice,
  onOpenMockTest
}) {
  const total2026 = manifest?.currentSession?.total || 253;
  const totalPractice = manifest?.practiceBank?.total || 724;

  return (
    <div className="bank-switcher-container">
      {/* 2026 Current Session Card */}
      <div 
        className={`bank-card ${currentBank === 'current-session-2026' ? 'active' : ''}`}
        onClick={() => onSelectBank('current-session-2026')}
        role="button"
        tabIndex={0}
      >
        <div className="bank-badge-icon">🎯</div>
        <div className="bank-info">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h3>2026 Exam-Session Question Bank</h3>
            {onOpenMockTest && (
              <button 
                type="button"
                className="btn-mock-inline"
                onClick={(e) => { e.stopPropagation(); onOpenMockTest(); }}
                title="Launch a custom randomized mock test"
              >
                ⚡ Start Mock Test
              </button>
            )}
          </div>
          <p>
            Official assignment questions for the current 2026 examination cycle (noc26_cs161). Separated into Weeks 1 through 12.
          </p>
          <div className="bank-meta">
            <span className="tag tag-primary">{total2026} Questions</span>
            <span className="tag">
              Attempted: {userStats2026.attempted}/{total2026}
            </span>
            {userStats2026.attempted > 0 && (
              <span className="tag tag-verified">
                Accuracy: {Math.round((userStats2026.correct / userStats2026.attempted) * 100)}%
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Public Practice Bank Card */}
      <div 
        className={`bank-card ${currentBank === 'practice-bank-904' ? 'active' : ''}`}
        onClick={() => onSelectBank('practice-bank-904')}
        role="button"
        tabIndex={0}
      >
        <div className="bank-badge-icon">📚</div>
        <div className="bank-info">
          <h3>Historical Public Practice Bank</h3>
          <p>
            Complete question collection from 4 historical NPTEL offerings (2022–2024). Includes Week 0 and all question formats.
          </p>
          <div className="bank-meta">
            <span className="tag tag-primary">724 Questions</span>
            <span className="tag">
              Attempted: {userStatsPractice.attempted}/{totalPractice}
            </span>
            {userStatsPractice.attempted > 0 && (
              <span className="tag tag-verified">
                Accuracy: {Math.round((userStatsPractice.correct / userStatsPractice.attempted) * 100)}%
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
