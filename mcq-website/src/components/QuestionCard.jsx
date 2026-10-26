import React, { useState, useEffect } from 'react';

export default function QuestionCard({
  question,
  index,
  totalInView,
  userAnswer,
  isAttempted,
  isCorrect,
  onAnswer,
  onResetAnswer,
  isBookmarked,
  onToggleBookmark
}) {
  if (!question) return null;

  const isMulti = question.type === 'mcq-multi';
  const isTF = question.type === 'true-false';

  // Local state for pending selections in multi-select mode
  const [selectedKeys, setSelectedKeys] = useState(userAnswer || []);

  useEffect(() => {
    setSelectedKeys(userAnswer || []);
  }, [question.id, userAnswer]);

  // Option Click Handler (Allows changing/reselecting answer anytime!)
  const handleOptionClick = (key) => {
    if (isMulti) {
      // Toggle key in array
      let updated;
      if (selectedKeys.includes(key)) {
        updated = selectedKeys.filter(k => k !== key);
      } else {
        updated = [...selectedKeys, key];
      }
      setSelectedKeys(updated);
      
      // If already attempted, immediately evaluate the updated multi-selection
      if (isAttempted) {
        onAnswer(question.id, updated);
      }
    } else {
      // Single choice & True/False: selecting another option reselects and changes answer
      setSelectedKeys([key]);
      onAnswer(question.id, [key]);
    }
  };

  const handleCheckAnswer = () => {
    if (selectedKeys.length === 0) return;
    onAnswer(question.id, selectedKeys);
  };

  const handleClearAnswer = () => {
    setSelectedKeys([]);
    if (onResetAnswer) {
      onResetAnswer(question.id);
    }
  };

  // Helper to determine CSS classes for options
  const getOptionClasses = (key) => {
    const isSelected = isAttempted 
      ? (userAnswer || []).includes(key) 
      : selectedKeys.includes(key);
    
    const isCorrectKey = (question.correctKeys || []).includes(key);

    let classes = ['option-item'];
    if (isSelected) classes.push('selected');

    if (isAttempted) {
      classes.push('evaluated');
      if (isSelected && isCorrectKey) {
        classes.push('correct-selection');
      } else if (isSelected && !isCorrectKey) {
        classes.push('wrong-selection');
      } else if (!isSelected && isCorrectKey) {
        classes.push('correct-missed');
      }
    }

    return classes.join(' ');
  };

  return (
    <div className={`question-card continuous-card ${isAttempted ? (isCorrect ? 'card-attempted-correct' : 'card-attempted-wrong') : ''}`} id={`question-${question.id}`}>
      {/* Question Header & Meta */}
      <div className="question-header">
        <div className="question-tags">
          <span className="tag tag-primary">Q{question.questionNum}</span>
          <span className="tag tag-week">{question.week}</span>
          <span className="tag tag-type">
            {isMulti ? '☑️ Multiple Select' : isTF ? '⚖️ True / False' : '🔘 Single Choice'}
          </span>
          {question.shortTerm && <span className="tag tag-term">{question.shortTerm}</span>}
          <span className={`tag ${question.verificationStatus === 'Verified' ? 'tag-verified' : 'tag-provisional'}`}>
            {question.verificationStatus === 'Verified' ? '🛡️ Verified' : '📝 Source-key only'}
          </span>
          {typeof index === 'number' && typeof totalInView === 'number' && (
            <span className="question-counter-badge">
              #{index + 1} of {totalInView}
            </span>
          )}
        </div>

        <div className="question-actions-top">
          {isAttempted && (
            <button
              className="btn-reselect"
              onClick={handleClearAnswer}
              title="Reset and re-answer this question"
            >
              🔄 Change Answer
            </button>
          )}
          <button
            className={`question-bookmark-btn ${isBookmarked ? 'bookmarked' : ''}`}
            onClick={() => onToggleBookmark(question.id)}
            title={isBookmarked ? 'Remove bookmark' : 'Bookmark this question'}
          >
            {isBookmarked ? '⭐' : '☆'}
          </button>
        </div>
      </div>

      {/* Question Stem */}
      <div className="question-text">
        {question.question}
      </div>

      {/* Multiple-select instruction banner */}
      {isMulti && (
        <div className="multi-action-area">
          <span className="multi-instruction">
            ☑️ Multiple options may be correct. Select all that apply:
          </span>
          {!isAttempted && (
            <button 
              className="btn-primary btn-check-answer"
              onClick={handleCheckAnswer}
              disabled={selectedKeys.length === 0}
            >
              Check Answer
            </button>
          )}
        </div>
      )}

      {/* Options List */}
      <div className="options-list">
        {(Array.isArray(question.options)
          ? question.options
          : (question.options && typeof question.options === 'object')
            ? Object.entries(question.options).map(([k, t]) => ({ key: k, text: t }))
            : []
        ).map((opt) => (
          <div
            key={opt.key}
            className={getOptionClasses(opt.key)}
            onClick={() => handleOptionClick(opt.key)}
            role="button"
            tabIndex={0}
          >
            <div className="option-pill">
              {opt.key.toUpperCase()}
            </div>
            <div className="option-text">
              {opt.text}
            </div>
            {isAttempted && (question.correctKeys || []).includes(opt.key) && (
              <span className="option-indicator indicator-correct">✓ Correct</span>
            )}
            {isAttempted && (userAnswer || []).includes(opt.key) && !(question.correctKeys || []).includes(opt.key) && (
              <span className="option-indicator indicator-wrong">✗ Your Choice</span>
            )}
          </div>
        ))}
      </div>

      {/* Interactive feedback & re-selection controls */}
      {isAttempted && (
        <div className={`explanation-panel ${isCorrect ? 'status-correct' : 'status-incorrect'}`}>
          <div className="explanation-header-row">
            <div className={`explanation-banner ${isCorrect ? 'correct' : 'incorrect'}`}>
              {isCorrect ? '🎉 Correct Answer!' : '❌ Incorrect Selection'}
            </div>
            <button
              className="btn-change-answer-inline"
              onClick={handleClearAnswer}
            >
              🔄 Change Answer / Try Again
            </button>
          </div>

          <div className="correct-answer-row">
            <span className="correct-label">Correct Key(s):</span>
            <span className="correct-keys-badge">
              {(question.correctKeys || []).map(k => k.toUpperCase()).join(', ')}
            </span>
            <span className="reselect-hint">
              💡 You can click any option above to reselect or change your answer.
            </span>
          </div>

          {question.explanation && (
            <div className="explanation-body">
              <span className="explanation-heading">Conceptual Explanation:</span>
              <p>{question.explanation}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
