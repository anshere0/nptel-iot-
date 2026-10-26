import React, { useState, useEffect, useMemo, useCallback } from 'react';

export default function FlashcardView({ 
  flashcards = [], 
  masteredIds = [], 
  onToggleMastered 
}) {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [selectedDifficulty, setSelectedDifficulty] = useState('ALL');
  const [selectedTopic, setSelectedTopic] = useState('ALL');
  const [selectedMastery, setSelectedMastery] = useState('ALL'); // 'ALL', 'MASTERED', 'UNMASTERED'
  const [searchQuery, setSearchQuery] = useState('');
  
  // Set of card IDs that are currently flipped to reveal the answer
  const [flippedCardIds, setFlippedCardIds] = useState(new Set());
  const [allFlipped, setAllFlipped] = useState(false);

  // Extract unique topics for the selected week
  const availableTopics = useMemo(() => {
    const set = new Set();
    flashcards.forEach(card => {
      if (selectedWeek === 'ALL' || card.weekNum === selectedWeek) {
        if (card.topic) set.add(card.topic);
      }
    });
    return Array.from(set).sort();
  }, [flashcards, selectedWeek]);

  // Filter cards by week, difficulty, topic, mastery, and search query
  const filteredCards = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return flashcards.filter(card => {
      // 1. Week filter
      if (selectedWeek !== 'ALL' && card.weekNum !== selectedWeek) return false;
      
      // 2. Difficulty filter
      if (selectedDifficulty !== 'ALL' && card.difficulty.toLowerCase() !== selectedDifficulty.toLowerCase()) return false;
      
      // 3. Topic filter
      if (selectedTopic !== 'ALL' && card.topic !== selectedTopic) return false;

      // 4. Mastery filter
      const isMastered = masteredIds.includes(card.id);
      if (selectedMastery === 'MASTERED' && !isMastered) return false;
      if (selectedMastery === 'UNMASTERED' && isMastered) return false;

      // 5. Search query
      if (q) {
        const matchFront = card.front && card.front.toLowerCase().includes(q);
        const matchBack = card.back && card.back.toLowerCase().includes(q);
        const matchTopic = card.topic && card.topic.toLowerCase().includes(q);
        const matchLecture = card.lectureTitle && card.lectureTitle.toLowerCase().includes(q);
        if (!matchFront && !matchBack && !matchTopic && !matchLecture) return false;
      }

      return true;
    });
  }, [flashcards, selectedWeek, selectedDifficulty, selectedTopic, selectedMastery, searchQuery, masteredIds]);

  // Reset flips when changing week or main filters
  useEffect(() => {
    setFlippedCardIds(new Set());
    setAllFlipped(false);
  }, [selectedWeek]);

  // Toggle single card flip
  const handleToggleCardFlip = useCallback((cardId) => {
    setFlippedCardIds(prev => {
      const next = new Set(prev);
      if (next.has(cardId)) {
        next.delete(cardId);
      } else {
        next.add(cardId);
      }
      return next;
    });
  }, []);

  // Global flip toggle: flip all currently filtered cards
  const handleToggleFlipAll = () => {
    if (allFlipped) {
      setFlippedCardIds(new Set());
      setAllFlipped(false);
    } else {
      const allIds = new Set(filteredCards.map(c => c.id));
      setFlippedCardIds(allIds);
      setAllFlipped(true);
    }
  };

  // Calculate mastery statistics for current week
  const weekTotalCards = useMemo(() => {
    return flashcards.filter(c => selectedWeek === 'ALL' || c.weekNum === selectedWeek).length;
  }, [flashcards, selectedWeek]);

  const weekMasteredCount = useMemo(() => {
    return flashcards.filter(c => (selectedWeek === 'ALL' || c.weekNum === selectedWeek) && masteredIds.includes(c.id)).length;
  }, [flashcards, selectedWeek, masteredIds]);

  const weekProgressPercent = weekTotalCards > 0 
    ? Math.round((weekMasteredCount / weekTotalCards) * 100) 
    : 0;

  return (
    <div className="flashcard-container">
      {/* 1. Week Filter Bar */}
      <div className="filter-bar flashcard-filter-bar">
        <div className="filter-section-title">
          <span>🎴</span>
          <span>Select Course Week (AI Flashcards Deck — 1,800 Total Cards)</span>
        </div>
        <div className="weeks-grid">
          <button
            className={`week-btn ${selectedWeek === 'ALL' ? 'active' : ''}`}
            onClick={() => { setSelectedWeek('ALL'); setSelectedTopic('ALL'); }}
          >
            <span className="week-label">All Weeks</span>
            <span className="week-badge">{flashcards.length}</span>
          </button>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(w => {
            const count = flashcards.filter(c => c.weekNum === w).length;
            const mastered = flashcards.filter(c => c.weekNum === w && masteredIds.includes(c.id)).length;
            return (
              <button
                key={w}
                className={`week-btn ${selectedWeek === w ? 'active' : ''}`}
                onClick={() => { setSelectedWeek(w); setSelectedTopic('ALL'); }}
                title={`Study Week ${w} Flashcards (${count} cards)`}
              >
                <span className="week-label">Week {w}</span>
                <span className="week-badge">{mastered}/{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Controls Panel: Search, Difficulty, Topic, Mastery, Flip All */}
      <div className="flashcard-controls-panel">
        {/* Search Input */}
        <div className="flashcard-search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="flashcard-search-input"
            placeholder="Search concepts, protocols, terms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              type="button" 
              className="search-clear-btn"
              onClick={() => setSearchQuery('')}
              title="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        {/* Difficulty Filter */}
        <div className="filter-group-inline">
          <label>Difficulty:</label>
          <div className="filter-chips">
            {['ALL', 'Easy', 'Medium', 'Hard'].map(d => (
              <button
                key={d}
                className={`filter-chip ${selectedDifficulty === d ? 'active' : ''}`}
                onClick={() => setSelectedDifficulty(d)}
              >
                {d === 'ALL' ? 'All' : d}
              </button>
            ))}
          </div>
        </div>

        {/* Mastery Filter */}
        <div className="filter-group-inline">
          <label>Status:</label>
          <div className="filter-chips">
            <button
              className={`filter-chip ${selectedMastery === 'ALL' ? 'active' : ''}`}
              onClick={() => setSelectedMastery('ALL')}
            >
              All Cards
            </button>
            <button
              className={`filter-chip ${selectedMastery === 'MASTERED' ? 'active' : ''}`}
              onClick={() => setSelectedMastery('MASTERED')}
            >
              ⭐ Mastered
            </button>
            <button
              className={`filter-chip ${selectedMastery === 'UNMASTERED' ? 'active' : ''}`}
              onClick={() => setSelectedMastery('UNMASTERED')}
            >
              ⏳ Unmastered
            </button>
          </div>
        </div>

        {/* Topic Dropdown */}
        {availableTopics.length > 1 && (
          <div className="filter-group-inline">
            <label>Topic:</label>
            <select 
              value={selectedTopic} 
              onChange={e => setSelectedTopic(e.target.value)}
              className="select-custom"
            >
              <option value="ALL">All Topics ({availableTopics.length})</option>
              {availableTopics.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        )}

        {/* Global Flip All Action */}
        <div className="deck-actions">
          <button 
            type="button" 
            className={`btn-action-deck ${allFlipped ? 'active' : ''}`}
            onClick={handleToggleFlipAll}
            title={allFlipped ? 'Show all concept prompts' : 'Flip all visible cards to show answers'}
          >
            🔄 {allFlipped ? 'Flip All to Prompts' : 'Flip All to Answers'}
          </button>
        </div>
      </div>

      {/* 3. Progress and Info Bar */}
      <div className="flashcard-progress-bar-container">
        <div className="progress-info-row">
          <span>
            <strong>
              {selectedWeek === 'ALL' ? 'All Weeks' : `Week ${selectedWeek}`}
            </strong>: Showing <strong>{filteredCards.length}</strong> flashcard{filteredCards.length !== 1 ? 's' : ''} in grid formation
          </span>
          <span className="mastery-stat-tag">
            ⭐ Mastered: {weekMasteredCount}/{weekTotalCards} ({weekProgressPercent}%)
          </span>
        </div>
        <div className="progress-track">
          <div 
            className="progress-fill" 
            style={{ width: `${weekProgressPercent}%` }}
          />
        </div>
      </div>

      {/* 4. Multi-Column Grid Formation (Side-by-Side and Below) */}
      {filteredCards.length === 0 ? (
        <div className="empty-state-card">
          <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🔍</div>
          <h3>No flashcards match your current filter criteria</h3>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            Try resetting the search query or difficulty/topic filters to see more cards.
          </p>
          <button 
            type="button" 
            className="pill-btn" 
            style={{ marginTop: '1rem' }}
            onClick={() => {
              setSearchQuery('');
              setSelectedDifficulty('ALL');
              setSelectedTopic('ALL');
              setSelectedMastery('ALL');
            }}
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="flashcards-grid">
          {filteredCards.map((card, idx) => {
            const isFlipped = flippedCardIds.has(card.id);
            const isMastered = masteredIds.includes(card.id);

            return (
              <div 
                key={card.id} 
                className="flashcard-grid-item"
                onClick={() => handleToggleCardFlip(card.id)}
                title="Click anywhere to flip card"
              >
                <div className={`flashcard-card ${isFlipped ? 'is-flipped' : ''}`}>
                  {/* Front Face: Prompt / Concept */}
                  <div className="flashcard-face flashcard-front">
                    <div className="flashcard-header">
                      <div className="flashcard-badges-left">
                        <span className="card-badge card-week-badge">
                          W{card.weekNum} • Lec {card.lectureNum}
                        </span>
                        <span className="card-badge card-topic-badge">
                          {card.topic}
                        </span>
                      </div>
                      <div className="flashcard-badges-right">
                        <span className={`card-badge card-diff-badge diff-${card.difficulty.toLowerCase()}`}>
                          {card.difficulty}
                        </span>
                        <button
                          type="button"
                          className={`btn-star-card ${isMastered ? 'mastered' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleMastered(card.id);
                          }}
                          title={isMastered ? 'Mastered card (click to unmark)' : 'Mark as mastered'}
                        >
                          {isMastered ? '★' : '☆'}
                        </button>
                      </div>
                    </div>

                    <div className="flashcard-body">
                      <span className="card-prompt-label">PROMPT / CONCEPT</span>
                      <h3 className="card-question-text">{card.front}</h3>
                    </div>

                    <div className="flashcard-footer">
                      <span className="card-flip-hint">👆 Click to flip & view answer</span>
                      <span className="card-index-pill">#{card.cardNum} of W{card.weekNum}</span>
                    </div>
                  </div>

                  {/* Back Face: Answer / Explanation */}
                  <div className="flashcard-face flashcard-back">
                    <div className="flashcard-header">
                      <div className="flashcard-badges-left">
                        <span className="card-badge card-answer-badge">
                          💡 Answer & Concept
                        </span>
                      </div>
                      <div className="flashcard-badges-right">
                        <button
                          type="button"
                          className={`btn-star-card ${isMastered ? 'mastered' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleMastered(card.id);
                          }}
                          title={isMastered ? 'Mastered card (click to unmark)' : 'Mark as mastered'}
                        >
                          {isMastered ? '★' : '☆'}
                        </button>
                      </div>
                    </div>

                    <div className="flashcard-body">
                      <p className="card-answer-text">{card.back}</p>
                      <div className="card-meta-detail">
                        <strong>Source:</strong> {card.lectureTitle} (Week {card.weekNum})
                      </div>
                    </div>

                    <div className="flashcard-footer">
                      <span className="card-flip-hint">👆 Click to flip back</span>
                      <span className="card-index-pill">#{card.cardNum} of W{card.weekNum}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
