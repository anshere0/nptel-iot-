import React, { useState, useEffect, useMemo } from 'react';

export default function MockTestView({
  mockConfig,
  onExitMockTest,
  onRestartMockTest
}) {
  const { questions, selectedWeeks, examMode, timerMinutes } = mockConfig;

  // User selections in mock test: { [questionId]: ['a', ...] }
  const [userAnswers, setUserAnswers] = useState({});

  // Has the test been submitted?
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Remaining time in seconds
  const [secondsRemaining, setSecondsRemaining] = useState(timerMinutes > 0 ? timerMinutes * 60 : null);

  // Timer interval
  useEffect(() => {
    if (isSubmitted || secondsRemaining === null || secondsRemaining <= 0) return;

    const timer = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitTest(); // Auto-submit on time expiry
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted, secondsRemaining]);

  // Option selection handler
  const handleSelectOption = (questionId, key, isMulti) => {
    if (isSubmitted) return; // Locked after submission

    setUserAnswers(prev => {
      const current = prev[questionId] || [];
      let updated;
      if (isMulti) {
        if (current.includes(key)) {
          updated = current.filter(k => k !== key);
        } else {
          updated = [...current, key];
        }
      } else {
        // Toggle single option or switch
        updated = [key];
      }

      return {
        ...prev,
        [questionId]: updated
      };
    });
  };

  const handleClearAnswer = (questionId) => {
    if (isSubmitted) return;
    setUserAnswers(prev => {
      const copy = { ...prev };
      delete copy[questionId];
      return copy;
    });
  };

  const handleSubmitTest = () => {
    const answeredCount = Object.keys(userAnswers).length;
    if (!isSubmitted && answeredCount < questions.length) {
      const confirmSubmit = window.confirm(
        `You have answered ${answeredCount} of ${questions.length} questions. Are you sure you want to submit your mock test?`
      );
      if (!confirmSubmit) return;
    }
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Evaluate test results
  const results = useMemo(() => {
    let score = 0;
    const weekBreakdown = {};

    questions.forEach(q => {
      const wKey = `Week ${q.weekNum}`;
      if (!weekBreakdown[wKey]) {
        weekBreakdown[wKey] = { total: 0, correct: 0, attempted: 0 };
      }
      weekBreakdown[wKey].total++;

      const chosen = (userAnswers[q.id] || []).map(k => String(k).trim().toLowerCase()).sort();
      const correctKeys = (q.correctKeys || []).map(k => String(k).trim().toLowerCase()).sort();

      if (chosen.length > 0) {
        weekBreakdown[wKey].attempted++;
      }

      const isCorrect = chosen.length === correctKeys.length && chosen.every((k, idx) => k === correctKeys[idx]);
      if (isCorrect) {
        score++;
        weekBreakdown[wKey].correct++;
      }
    });

    const total = questions.length;
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

    // NPTEL Badge
    let badge = 'Participant';
    let badgeColor = 'var(--text-muted)';
    if (percentage >= 90) {
      badge = '🥇 Elite + Gold';
      badgeColor = '#fbbf24';
    } else if (percentage >= 75) {
      badge = '🥈 Elite + Silver';
      badgeColor = '#94a3b8';
    } else if (percentage >= 60) {
      badge = '🥉 Elite';
      badgeColor = '#d97706';
    } else if (percentage >= 40) {
      badge = '✅ Successfully Certified';
      badgeColor = '#10b981';
    } else {
      badge = '⚠️ Need More Revision (< 40%)';
      badgeColor = '#ef4444';
    }

    return { score, total, percentage, badge, badgeColor, weekBreakdown };
  }, [questions, userAnswers]);

  // Format seconds into MM:SS
  const formatTime = (secs) => {
    if (secs === null) return null;
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const scrollToQuestion = (id) => {
    const el = document.getElementById(`mock-q-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const answeredCount = Object.keys(userAnswers).length;

  return (
    <div className="mock-test-container">
      {/* Top Floating / Sticky Test Bar */}
      <header className="mock-top-bar">
        <div className="mock-bar-left">
          <span className="mock-live-badge">🎯 Mock Exam</span>
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>
              {isSubmitted ? 'Exam Results & Review' : '2026 Random Question Simulation'}
            </h3>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Weeks: {selectedWeeks.join(', ')} • {questions.length} Questions
            </span>
          </div>
        </div>

        <div className="mock-bar-right">
          {secondsRemaining !== null && !isSubmitted && (
            <div className={`mock-timer-display ${secondsRemaining < 300 ? 'timer-warning' : ''}`}>
              ⏱️ {formatTime(secondsRemaining)}
            </div>
          )}

          <div className="mock-progress-summary">
            <strong>{answeredCount}</strong> / {questions.length} Answered
          </div>

          {!isSubmitted ? (
            <button className="btn-primary btn-submit-test" onClick={handleSubmitTest}>
              🏁 Submit Test
            </button>
          ) : (
            <button className="dock-action-btn" onClick={onExitMockTest}>
              ✕ Exit Review
            </button>
          )}

          <button className="icon-btn" onClick={onExitMockTest} title="Exit Mock Test">
            ✕
          </button>
        </div>
      </header>

      {/* Scorecard Hero (When Submitted) */}
      {isSubmitted && (
        <section className="mock-scorecard-card">
          <div className="scorecard-header">
            <div>
              <span className="scorecard-pretitle">Official Simulation Scorecard</span>
              <h2 className="scorecard-title">
                {results.score} <span style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>/ {results.total}</span>
                <span className="scorecard-percentage">({results.percentage}%)</span>
              </h2>
            </div>

            <div className="scorecard-badge" style={{ borderColor: results.badgeColor, color: results.badgeColor }}>
              {results.badge}
            </div>
          </div>

          {/* Weekly Performance Matrix */}
          <div className="scorecard-matrix">
            <h4 style={{ fontSize: '0.875rem', marginBottom: '0.75rem', color: 'var(--text-secondary)' }}>
              Weekly Performance Breakdown:
            </h4>
            <div className="scorecard-grid">
              {Object.entries(results.weekBreakdown).map(([wName, wStat]) => {
                const wPct = wStat.total > 0 ? Math.round((wStat.correct / wStat.total) * 100) : 0;
                return (
                  <div key={wName} className="scorecard-week-box">
                    <span className="box-week">{wName}</span>
                    <span className="box-score">{wStat.correct} / {wStat.total}</span>
                    <span className={`box-pct ${wPct >= 70 ? 'pct-high' : wPct >= 40 ? 'pct-mid' : 'pct-low'}`}>
                      {wPct}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="scorecard-actions">
            <button className="btn-primary" onClick={() => onRestartMockTest(mockConfig)}>
              🔄 Retake Same Configuration (Reshuffled)
            </button>
            <button className="dock-action-btn" onClick={onExitMockTest}>
              🎯 New Custom Mock Test
            </button>
            <button className="dock-action-btn" onClick={onExitMockTest}>
              📚 Return to Practice Portal
            </button>
          </div>
        </section>
      )}

      {/* Quick Jump Navigator Dock */}
      <nav className="quick-jump-dock mock-jump-dock">
        <div className="dock-header">
          <span style={{ fontSize: '0.8125rem', fontWeight: 600 }}>
            {isSubmitted ? 'Click any question to review answer:' : 'Jump to Question:'}
          </span>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button 
              className="dock-action-btn" 
              onClick={() => {
                const firstUnanswered = questions.find(q => !userAnswers[q.id] || userAnswers[q.id].length === 0);
                if (firstUnanswered) scrollToQuestion(firstUnanswered.id);
              }}
            >
              Next Unanswered
            </button>
            <button className="dock-action-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Top ↑
            </button>
          </div>
        </div>

        <div className="dock-pills-container">
          {questions.map((q, idx) => {
            const chosen = userAnswers[q.id] || [];
            const isAnswered = chosen.length > 0;
            
            let statusClass = 'pill-unattempted';
            let mark = null;

            if (isSubmitted) {
              const correctKeys = (q.correctKeys || []).map(k => String(k).trim().toLowerCase()).sort();
              const chosenSorted = chosen.map(k => String(k).trim().toLowerCase()).sort();
              const isCorrect = chosenSorted.length === correctKeys.length && chosenSorted.every((k, i) => k === correctKeys[i]);
              statusClass = isCorrect ? 'pill-correct' : 'pill-wrong';
              mark = isCorrect ? '✓' : '✗';
            } else if (isAnswered) {
              statusClass = 'pill-chosen';
            }

            return (
              <button
                key={q.id}
                className={`jump-pill ${statusClass}`}
                onClick={() => scrollToQuestion(q.id)}
                title={`#${idx + 1} (${q.week})`}
              >
                <span>Q{idx + 1}</span>
                {mark && <span>{mark}</span>}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Continuous Questions Feed */}
      <main className="questions-feed mock-questions-feed">
        {questions.map((q, idx) => {
          const isMulti = q.type === 'mcq-multi';
          const isTF = q.type === 'true-false';
          const chosen = userAnswers[q.id] || [];
          const isAnswered = chosen.length > 0;

          // In simulation mode before submission, answers are hidden!
          const revealAnswers = isSubmitted || examMode === 'immediate';

          let isCorrect = false;
          if (revealAnswers && isAnswered) {
            const correctKeys = (q.correctKeys || []).map(k => String(k).trim().toLowerCase()).sort();
            const chosenSorted = chosen.map(k => String(k).trim().toLowerCase()).sort();
            isCorrect = chosenSorted.length === correctKeys.length && chosenSorted.every((k, i) => k === correctKeys[i]);
          }

          return (
            <div
              key={q.id}
              id={`mock-q-${q.id}`}
              className={`question-card continuous-card ${
                revealAnswers && isAnswered
                  ? isCorrect
                    ? 'card-attempted-correct'
                    : 'card-attempted-wrong'
                  : ''
              }`}
            >
              {/* Question Header */}
              <div className="question-header">
                <div className="question-tags">
                  <span className="tag tag-primary">#{idx + 1}</span>
                  <span className="tag tag-week">{q.week}</span>
                  <span className="tag tag-type">
                    {isMulti ? '☑️ Multiple Select' : isTF ? '⚖️ True / False' : '🔘 Single Choice'}
                  </span>
                  <span className="tag tag-term">Original Q{q.questionNum}</span>
                </div>

                {!isSubmitted && isAnswered && (
                  <button className="btn-reselect" onClick={() => handleClearAnswer(q.id)}>
                    Clear Selection
                  </button>
                )}
              </div>

              {/* Question Stem */}
              <div className="question-text">{q.question}</div>

              {/* Options */}
              <div className="options-list">
                {(q.options || []).map(opt => {
                  const isSelected = chosen.includes(opt.key);
                  const isCorrectKey = (q.correctKeys || []).includes(opt.key);

                  let optClasses = ['option-item'];
                  if (isSelected) optClasses.push('selected');

                  if (revealAnswers) {
                    optClasses.push('evaluated');
                    if (isSelected && isCorrectKey) {
                      optClasses.push('correct-selection');
                    } else if (isSelected && !isCorrectKey) {
                      optClasses.push('wrong-selection');
                    } else if (!isSelected && isCorrectKey) {
                      optClasses.push('correct-missed');
                    }
                  }

                  return (
                    <div
                      key={opt.key}
                      className={optClasses.join(' ')}
                      onClick={() => handleSelectOption(q.id, opt.key, isMulti)}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="option-pill">{opt.key.toUpperCase()}</div>
                      <div className="option-text">{opt.text}</div>
                      {revealAnswers && isCorrectKey && (
                        <span className="option-indicator indicator-correct">✓ Correct</span>
                      )}
                      {revealAnswers && isSelected && !isCorrectKey && (
                        <span className="option-indicator indicator-wrong">✗ Your Choice</span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Explanation (Revealed when submitted or in immediate mode) */}
              {revealAnswers && (
                <div className={`explanation-panel ${isCorrect ? 'status-correct' : 'status-incorrect'}`}>
                  <div className="explanation-header-row">
                    <div className={`explanation-banner ${isCorrect ? 'correct' : 'incorrect'}`}>
                      {isCorrect ? '🎉 Correct Answer!' : '❌ Incorrect Selection'}
                    </div>
                  </div>

                  <div className="correct-answer-row">
                    <span className="correct-label">Correct Key(s):</span>
                    <span className="correct-keys-badge">
                      {(q.correctKeys || []).map(k => k.toUpperCase()).join(', ')}
                    </span>
                  </div>

                  {q.explanation && (
                    <div className="explanation-body">
                      <span className="explanation-heading">Conceptual Explanation:</span>
                      <p>{q.explanation}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </main>

      {/* Bottom Floating Submit Bar */}
      {!isSubmitted && (
        <div className="mock-bottom-bar">
          <span>
            {answeredCount} of {questions.length} answered
          </span>
          <button className="btn-primary" onClick={handleSubmitTest} style={{ padding: '0.75rem 2rem', fontWeight: 800 }}>
            🏁 Submit Mock Test
          </button>
        </div>
      )}
    </div>
  );
}
