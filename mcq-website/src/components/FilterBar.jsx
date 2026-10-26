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
  availableTerms,
  weekStats
}) {
  const is2026 = currentBank === 'current-session-2026';
  const weeksList = is2026 
    ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] 
    : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="filter-bar">
      {/* Week Selector */}
      <div>
        <div className="filter-section-title">
          <span>📅</span>
          <span>{is2026 ? 'Select Course Week (2026 Current Session)' : 'Select Week (Practice Bank)'}</span>
        </div>
        <div className="weeks-grid">
          {!is2026 && (
            <button
              className={`week-btn ${selectedWeek === 'ALL' ? 'active' : ''}`}
              onClick={() => onSelectWeek('ALL')}
            >
              <span className="week-label">All Weeks</span>
            </button>
          )}

          {weeksList.map(w => {
            const wKey = `W${w}`;
            const st = weekStats[wKey];
            const attempted = st?.attempted || 0;
            const total = st?.count || 15;

            return (
              <button
                key={w}
                className={`week-btn ${selectedWeek === w ? 'active' : ''}`}
                onClick={() => onSelectWeek(w)}
                title={`View Week ${w} MCQs`}
              >
                <span className="week-label">Week {w}</span>
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

        {/* Term Filter (for Practice Bank only) */}
        {!is2026 && (
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
