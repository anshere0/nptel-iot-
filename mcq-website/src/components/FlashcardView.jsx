import React, { useState, useEffect, useMemo, useCallback } from 'react';

export default function FlashcardView({ 
  flashcards = [], 
  masteredIds = [], 
  onToggleMastered 
}) {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [selectedDifficulty, setSelectedDifficulty] = useState('ALL');
  const [selectedTopic, setSelectedTopic] = useState('ALL');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [shuffledIndices, setShuffledIndices] = useState([]);

  // Filter cards by week, difficulty, and topic
  const filteredCards = useMemo(() => {
    return flashcards.filter(card => {
      if (selectedWeek !== 'ALL' && card.weekNum !== selectedWeek) return false;
      if (selectedDifficulty !== 'ALL' && card.difficulty.toLowerCase() !== selectedDifficulty.toLowerCase()) return false;
      if (selectedTopic !== 'ALL' && card.topic !== selectedTopic) return false;
      return true;
    });
  }, [flashcards, selectedWeek, selectedDifficulty, selectedTopic]);

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

  // Handle deck indexing (shuffled or sequential)
  const activeCards = useMemo(() => {
    if (!isShuffled) return filteredCards;
    if (shuffledIndices.length !== filteredCards.length) return filteredCards;
    return shuffledIndices.map(i => filteredCards[i]).filter(Boolean);
  }, [filteredCards, isShuffled, shuffledIndices]);

  // Reset index when filters change
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setIsShuffled(false);
  }, [selectedWeek, selectedDifficulty, selectedTopic]);

  const currentCard = activeCards[currentIndex] || null;
  const isCurrentMastered = currentCard ? masteredIds.includes(currentCard.id) : false;

  const handleNext = useCallback(() => {
    if (currentIndex < activeCards.length - 1) {
      setIsFlipped(false);
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, activeCards.length]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex]);

  const handleFlip = useCallback(() => {
    setIsFlipped(prev => !prev);
  }, []);

  const handleToggleCurrentMastered = useCallback(() => {
    if (currentCard) {
      onToggleMastered(currentCard.id);
    }
  }, [currentCard, onToggleMastered]);

  const handleShuffleToggle = () => {
    if (!isShuffled) {
      const arr = Array.from({ length: filteredCards.length }, (_, i) => i);
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      setShuffledIndices(arr);
      setIsShuffled(true);
      setCurrentIndex(0);
      setIsFlipped(false);
    } else {
      setIsShuffled(false);
      setCurrentIndex(0);
      setIsFlipped(false);
    }
  };

  // Keyboard Navigation: Left/Right arrow, Spacebar to flip, M to master
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore if typing inside input or textarea
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        handleFlip();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        handleToggleCurrentMastered();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleFlip, handleNext, handlePrev, handleToggleCurrentMastered]);

  // Calculate mastery statistics for current filtered deck
  const masteredCount = useMemo(() => {
    return filteredCards.filter(c => masteredIds.includes(c.id)).length;
  }, [filteredCards, masteredIds]);

  const progressPercent = filteredCards.length > 0 
    ? Math.round((masteredCount / filteredCards.length) * 100) 
    : 0;

  return (
    <div className="flashcard-container">
      {/* 1. Week Filter Bar */}
      <div className="filter-bar flashcard-filter-bar">
        <div className="filter-section-title">
          <span>🎴</span>
          <span>Select Course Week (AI Flashcards Deck — 1,800 Total)</span>
        </div>
        <div className="weeks-grid">
          <button
            className={`week-btn ${selectedWeek === 'ALL' ? 'active' : ''}`}
            onClick={() => setSelectedWeek('ALL')}
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
                onClick={() => setSelectedWeek(w)}
                title={`Study Week ${w} Flashcards (${count} cards)`}
              >
                <span className="week-label">Week {w}</span>
                <span className="week-badge">{mastered}/{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Sub-Filters & Controls */}
      <div className="flashcard-controls-panel">
        <div className="filter-group-inline">
          <label>Difficulty:</label>
          <div className="filter-chips">
            {['ALL', 'Easy', 'Medium', 'Hard'].map(d => (
              <button
                key={d}
                className={`filter-chip ${selectedDifficulty === d ? 'active' : ''}`}
                onClick={() => setSelectedDifficulty(d)}
              >
                {d === 'ALL' ? 'All Difficulties' : d}
              </button>
            ))}
          </div>
        </div>

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

        <div className="deck-actions">
          <button 
            type="button" 
            className={`btn-action-deck ${isShuffled ? 'active' : ''}`}
            onClick={handleShuffleToggle}
            title={isShuffled ? 'Restore original lecture order' : 'Randomize deck order'}
          >
            🔀 {isShuffled ? 'Shuffled' : 'Shuffle Deck'}
          </button>
          <button 
            type="button" 
            className="btn-action-deck"
            onClick={() => { setCurrentIndex(0); setIsFlipped(false); }}
            title="Return to the first card"
          >
            ⏮ Restart Deck
          </button>
        </div>
      </div>

      {/* 3. Progress Tracker */}
      <div className="flashcard-progress-bar-container">
        <div className="progress-info-row">
          <span>
            {activeCards.length > 0 ? `Card ${currentIndex + 1} of ${activeCards.length}` : 'No cards found'}
            {isShuffled && ' • (Shuffled Mode)'}
          </span>
          <span className="mastery-stat-tag">
            ⭐ Mastered: {masteredCount}/{filteredCards.length} ({progressPercent}%)
          </span>
        </div>
        <div className="progress-track">
          <div 
            className="progress-fill" 
            style={{ width: `${activeCards.length > 0 ? ((currentIndex + 1) / activeCards.length) * 100 : 0}%` }}
          />
        </div>
      </div>

      {/* 4. The 3D Interactive Flip Card */}
      {currentCard ? (
        <div className="flashcard-scene" onClick={handleFlip}>
          <div className={`flashcard-card ${isFlipped ? 'is-flipped' : ''}`}>
            {/* Front Face */}
            <div className="flashcard-face flashcard-front">
              <div className="flashcard-header">
                <span className="card-badge card-week-badge">
                  {currentCard.week} • Lecture {currentCard.lectureNum}
                </span>
                <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                  <span className="card-badge card-topic-badge">{currentCard.topic}</span>
                  <span className={`card-badge card-diff-badge diff-${currentCard.difficulty.toLowerCase()}`}>
                    {currentCard.difficulty}
                  </span>
                </div>
              </div>

              <div className="flashcard-body">
                <span className="card-prompt-label">PROMPT / CONCEPT</span>
                <h2 className="card-question-text">{currentCard.front}</h2>
              </div>

              <div className="flashcard-footer">
                <span className="card-flip-hint">👆 Click card or press [Space] to reveal answer</span>
                {isCurrentMastered && (
                  <span className="mastered-badge">✅ Mastered</span>
                )}
              </div>
            </div>

            {/* Back Face */}
            <div className="flashcard-face flashcard-back">
              <div className="flashcard-header">
                <span className="card-badge card-answer-badge">💡 Concept Answer & Definition</span>
                <button
                  type="button"
                  className={`btn-master-card ${isCurrentMastered ? 'mastered' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggleCurrentMastered();
                  }}
                  title="Toggle card mastered status"
                >
                  {isCurrentMastered ? '⭐ Mastered' : '☆ Mark as Mastered'}
                </button>
              </div>

              <div className="flashcard-body">
                <p className="card-answer-text">{currentCard.back}</p>
                <div className="card-meta-detail">
                  <strong>Source Lecture:</strong> {currentCard.lectureTitle} ({currentCard.week})
                </div>
              </div>

              <div className="flashcard-footer">
                <span className="card-flip-hint">👆 Click card or press [Space] to flip back</span>
                <span className="card-index-pill">#{currentCard.cardNum} of {currentCard.week}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-state-card">
          <p>No flashcards match the selected filters.</p>
          <button 
            type="button" 
            className="pill-btn" 
            onClick={() => { setSelectedDifficulty('ALL'); setSelectedTopic('ALL'); }}
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* 5. Navigation Controls Bar */}
      <div className="flashcard-nav-controls">
        <button
          type="button"
          className="btn-nav-card"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          title="Previous Card (Left Arrow)"
        >
          ← Previous
        </button>

        <button
          type="button"
          className="btn-flip-card"
          onClick={handleFlip}
          title="Flip Card (Spacebar)"
        >
          🔄 {isFlipped ? 'Show Prompt' : 'Reveal Answer'}
        </button>

        <button
          type="button"
          className="btn-nav-card"
          onClick={handleNext}
          disabled={currentIndex >= activeCards.length - 1}
          title="Next Card (Right Arrow)"
        >
          Next →
        </button>
      </div>

      {/* 6. Keyboard Shortcuts Hint */}
      <div className="keyboard-shortcuts-bar">
        <span>⌨️ Shortcuts:</span>
        <kbd>[Space]</kbd> Flip Card • <kbd>[←]</kbd> Previous • <kbd>[→]</kbd> Next • <kbd>[M]</kbd> Toggle Mastered
      </div>
    </div>
  );
}
