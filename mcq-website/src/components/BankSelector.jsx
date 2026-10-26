import React from 'react';

export default function BankSelector({ 
  currentBank, 
  onSelectBank, 
  manifest,
  userStats2026 = { attempted: 0, correct: 0 },
  userStatsAIPractice = { attempted: 0, correct: 0 },
  userStatsFlashcards = { mastered: 0 },
  userStatsPractice = { attempted: 0, correct: 0 },
  userStatsAI = { attempted: 0, correct: 0 },
  userStatsMockExams = { attempted: 0, correct: 0 },
  onOpenMockTest
}) {
  const total2026 = manifest?.currentSession?.total || 253;
  const totalAIPractice = manifest?.aiPracticeBank?.total || 3000;
  const totalFlashcards = manifest?.flashcards?.total || 1800;
  const totalAI = manifest?.aiGenerated?.total || 28;
  const totalPractice = manifest?.practiceBank?.total || 724;
  const totalMockExams = manifest?.mockExamsBank?.total || 150;

  return (
    <div className="bank-selector bank-switcher-container">
      {/* 1. 2026 Current Session Card */}
      <div 
        className={`bank-card ${currentBank === 'current-session-2026' ? 'active' : ''}`}
        onClick={() => onSelectBank('current-session-2026')}
        role="button"
        tabIndex={0}
      >
        <div className="bank-badge-icon">🎯</div>
        <div className="bank-info">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h3>2026 Exam-Session Bank</h3>
            {onOpenMockTest && currentBank === 'current-session-2026' && (
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

      {/* 2. Official NPTEL AI Practice Bank Card */}
      <div 
        className={`bank-card ${currentBank === 'ai-practice-bank' ? 'active' : ''}`}
        onClick={() => onSelectBank('ai-practice-bank')}
        role="button"
        tabIndex={0}
      >
        <div className="bank-badge-icon">⚡</div>
        <div className="bank-info">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h3>Official AI Practice Questions</h3>
            {onOpenMockTest && currentBank === 'ai-practice-bank' && (
              <button 
                type="button"
                className="btn-mock-inline"
                onClick={(e) => { e.stopPropagation(); onOpenMockTest(); }}
                title="Launch a randomized mock test across AI practice questions"
              >
                ⚡ Start Mock Test
              </button>
            )}
          </div>
          <p>
            Official NPTEL AI-powered practice question pool. Organized per week from Week 1 to Week 12 (250 questions per week with lecture video transcript citations).
          </p>
          <div className="bank-meta">
            <span className="tag tag-primary">{totalAIPractice} Questions (W1–W12)</span>
            <span className="tag">
              Attempted: {userStatsAIPractice.attempted}/{totalAIPractice}
            </span>
            {userStatsAIPractice.attempted > 0 && (
              <span className="tag tag-verified">
                Accuracy: {Math.round((userStatsAIPractice.correct / userStatsAIPractice.attempted) * 100)}%
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 3. Official NPTEL AI Flashcards Card */}
      <div 
        className={`bank-card ${currentBank === 'flashcards' ? 'active' : ''}`}
        onClick={() => onSelectBank('flashcards')}
        role="button"
        tabIndex={0}
      >
        <div className="bank-badge-icon">🎴</div>
        <div className="bank-info">
          <h3>Official AI Flashcards Deck</h3>
          <p>
            Interactive 3D study flashcards extracted directly from the NPTEL AI widget. Organized per week (150 cards per week, Weeks 1 to 12) with difficulty & topic filters.
          </p>
          <div className="bank-meta">
            <span className="tag tag-primary">{totalFlashcards} Flashcards (W1–W12)</span>
            <span className="tag tag-verified">
              ⭐ Mastered: {userStatsFlashcards.mastered || 0}/{totalFlashcards}
            </span>
            {totalFlashcards > 0 && (
              <span className="tag">
                Progress: {Math.round(((userStatsFlashcards.mastered || 0) / totalFlashcards) * 100)}%
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 4. AI Generated Conceptual MCQs Card */}
      <div 
        className={`bank-card ${currentBank === 'ai-generated-bank' ? 'active' : ''}`}
        onClick={() => onSelectBank('ai-generated-bank')}
        role="button"
        tabIndex={0}
      >
        <div className="bank-badge-icon">🤖</div>
        <div className="bank-info">
          <h3>AI Generated Scenario MCQs</h3>
          <p>
            Inverse scenarios and distractor elimination traps testing deep understanding across Week 1-A to Week 12.
          </p>
          <div className="bank-meta">
            <span className="tag tag-primary">{totalAI} Questions</span>
            <span className="tag">
              Attempted: {userStatsAI.attempted}/{totalAI}
            </span>
            {userStatsAI.attempted > 0 && (
              <span className="tag tag-verified">
                Accuracy: {Math.round((userStatsAI.correct / userStatsAI.attempted) * 100)}%
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 5. Public Historical Practice Bank Card */}
      <div 
        className={`bank-card ${currentBank === 'practice-bank-904' ? 'active' : ''}`}
        onClick={() => onSelectBank('practice-bank-904')}
        role="button"
        tabIndex={0}
      >
        <div className="bank-badge-icon">📚</div>
        <div className="bank-info">
          <h3>Historical Practice Bank</h3>
          <p>
            Complete question collection from 4 historical NPTEL offerings (2022–2024). Includes Week 0 and historical assignment keys.
          </p>
          <div className="bank-meta">
            <span className="tag tag-primary">{totalPractice} Questions</span>
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

      {/* 6. Official Mock Exam Papers (Mocks 1–5) */}
      <div 
        className={`bank-card ${currentBank === 'mock-exams-bank' ? 'active' : ''}`}
        onClick={() => onSelectBank('mock-exams-bank')}
        role="button"
        tabIndex={0}
      >
        <div className="bank-badge-icon">📑</div>
        <div className="bank-info">
          <h3>Official Mock Exam Papers (Mocks 1–5)</h3>
          <p>
            Complete 150-question collection from the 5 official mock exam papers (30 questions each). Includes full answer keys, difficulty tags, and lecture citations.
          </p>
          <div className="bank-meta">
            <span className="tag tag-primary">{totalMockExams} Questions (5 Papers)</span>
            <span className="tag">
              Attempted: {userStatsMockExams.attempted}/{totalMockExams}
            </span>
            {userStatsMockExams.attempted > 0 && (
              <span className="tag tag-verified">
                Accuracy: {Math.round((userStatsMockExams.correct / userStatsMockExams.attempted) * 100)}%
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
