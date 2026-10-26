import React from 'react';

export default function FilterBar({
  currentBank,
  selectedWeek,
  onSelectWeek,
  selectedType,
  onSelectType,
  selectedMode,
  onSelectMode,
  selectedTerm,
  onSelectTerm,
  availableTerms = [],
  weekStats = {}
}) {
  const is2026 = currentBank === 'current-session-2026';
  const isAI = currentBank === 'ai-generated-bank';
  const isAIPractice = currentBank === 'ai-practice-bank';
  const isMockExams = currentBank === 'mock-exams-bank';
  
  const weeksList = isMockExams
    ? [1, 2, 3, 4, 5]
    : (is2026 || isAI || isAIPractice)
      ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] 
      : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  let sectionTitle = 'Select Week (Historical Practice Bank)';
  let sectionIcon = '📅';
  if (is2026) sectionTitle = 'Select Course Week (2026 Current Session — 15 Qs/Week)';
  else if (isAI) sectionTitle = 'Select Course Week (AI Generated Scenario MCQs)';
  else if (isAIPractice) sectionTitle = 'Select Course Week (Official NPTEL AI Practice Questions — 250 Qs/Week)';
  else if (isMockExams) {
    sectionTitle = 'Select Mock Exam Paper (5 Full Papers — 30 Questions Each)';
    sectionIcon = '📑';
  }

  return (
    <div className="filter-bar">
      {/* Week / Mock Exam Selector */}
      <div>
        <div className="filter-section-title">
          <span>{sectionIcon}</span>
          <span>{sectionTitle}</span>
        </div>
        <div className="weeks-grid">
          {(!is2026 || isAI || isAIPractice || isMockExams) && (
            <button
              className={`week-btn ${selectedWeek === 'ALL' ? 'active' : ''}`}
              onClick={() => onSelectWeek('ALL')}
            >
              <span className="week-label">{isMockExams ? 'All Mock Exams' : 'All Weeks'}</span>
              {isMockExams && <span className="week-badge">150</span>}
            </button>
          )}

          {weeksList.map(w => {
            const wKey = isMockExams ? `M${w}` : `W${w}`;
            const st = weekStats[wKey];
            const attempted = st?.attempted || 0;
            const total = st?.count || (isMockExams ? 30 : (isAIPractice ? 250 : (isAI ? (w === 1 ? 6 : 2) : 15)));

            return (
              <button
                key={w}
                className={`week-btn ${selectedWeek === w ? 'active' : ''}`}
                onClick={() => onSelectWeek(w)}
                title={isMockExams ? `View Mock Exam ${w} (${total} questions)` : `View Week ${w} MCQs (${total} questions)`}
              >
                <span className="week-label">{isMockExams ? `Mock ${w}` : `Week ${w}`}</span>
                <span className="week-badge">{attempted}/{total}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sub-Filters: Type, Mode, Term */}
      <div className="sub-filters">
        {/* Practice Mode */}
        <div className="pill-group">
          <button
            className={`pill-btn ${selectedMode === 'all' ? 'active' : ''}`}
            onClick={() => onSelectMode('all')}
          >
            📋 All Questions
          </button>
          <button
            className={`pill-btn ${selectedMode === 'wrong' ? 'active' : ''}`}
            onClick={() => onSelectMode('wrong')}
          >
            ⚠️ Retry Wrong Answers
          </button>
          <button
            className={`pill-btn ${selectedMode === 'unattempted' ? 'active' : ''}`}
            onClick={() => onSelectMode('unattempted')}
          >
            ⏳ Unattempted
          </button>
          <button
            className={`pill-btn ${selectedMode === 'bookmarked' ? 'active' : ''}`}
            onClick={() => onSelectMode('bookmarked')}
          >
            ⭐ Bookmarked
          </button>
        </div>

        {/* Question Type Filter */}
        <div className="pill-group">
          <button
            className={`pill-btn ${selectedType === 'all' ? 'active' : ''}`}
            onClick={() => onSelectType('all')}
          >
            All Types
          </button>
          <button
            className={`pill-btn ${selectedType === 'mcq-single' ? 'active' : ''}`}
            onClick={() => onSelectType('mcq-single')}
          >
            Single Choice
          </button>
          <button
            className={`pill-btn ${selectedType === 'mcq-multi' ? 'active' : ''}`}
            onClick={() => onSelectType('mcq-multi')}
          >
            Multiple Select
          </button>
          <button
            className={`pill-btn ${selectedType === 'true-false' ? 'active' : ''}`}
            onClick={() => onSelectType('true-false')}
          >
            True / False
          </button>
        </div>

        {/* Term Filter (for Historical Practice Bank only) */}
        {!is2026 && !isAI && !isAIPractice && !isMockExams && availableTerms.length > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              Term:
            </span>
            <select
              className="nav-select"
              value={selectedTerm}
              onChange={e => onSelectTerm(e.target.value)}
            >
              <option value="ALL">All Academic Terms (724 Qs)</option>
              {availableTerms.map(t => (
                <option key={t.id} value={t.id}>
                  {t.name} ({t.count} Qs)
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
}
