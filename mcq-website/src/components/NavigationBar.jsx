import React from 'react';

export default function NavigationBar({
  questionsList,
  historyMap,
  bookmarksList = [],
  activeQuestionId
}) {
  if (!questionsList || questionsList.length === 0) return null;

  const total = questionsList.length;
  let attempted = 0;
  let correct = 0;

  questionsList.forEach(q => {
    const h = historyMap[q.id];
    if (h) {
      attempted++;
      if (h.isCorrect) correct++;
    }
  });

  const scrollToQuestion = (id) => {
    const el = document.getElementById(`question-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const scrollToNextUnanswered = () => {
    const nextUnanswered = questionsList.find(q => !historyMap[q.id]);
    if (nextUnanswered) {
      scrollToQuestion(nextUnanswered.id);
    } else {
      // If all answered, jump to first
      scrollToQuestion(questionsList[0].id);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="quick-jump-dock" aria-label="Question Navigation Dock">
      <div className="dock-header">
        <div className="dock-stats">
          <span className="dock-stat-item">
            <strong>{attempted}</strong> / {total} Completed
          </span>
          {attempted > 0 && (
            <span className="dock-stat-badge">
              🎯 {Math.round((correct / attempted) * 100)}% Accuracy ({correct}✓ / {attempted - correct}✗)
            </span>
          )}
        </div>

        <div className="dock-controls">
          <button 
            className="dock-action-btn"
            onClick={scrollToNextUnanswered}
            title="Jump to the next unattempted question"
          >
            ⚡ Next Unanswered
          </button>
          <button 
            className="dock-action-btn dock-btn-top"
            onClick={scrollToTop}
            title="Scroll to top of page"
          >
            ⬆️ Top
          </button>
        </div>
      </div>

      {/* Grid of clickable question pills */}
      <div className="dock-pills-container">
        {questionsList.map((q, idx) => {
          const hist = historyMap[q.id];
          const isBm = bookmarksList.includes(q.id);
          
          let statusClass = 'pill-unattempted';
          let icon = null;
          if (hist) {
            statusClass = hist.isCorrect ? 'pill-correct' : 'pill-wrong';
            icon = hist.isCorrect ? '✓' : '✗';
          }

          return (
            <button
              key={q.id}
              className={`jump-pill ${statusClass} ${isBm ? 'has-bookmark' : ''}`}
              onClick={() => scrollToQuestion(q.id)}
              title={`Q${q.questionNum}: ${q.question.substring(0, 60)}...`}
            >
              <span className="pill-num">Q{q.questionNum}</span>
              {icon && <span className="pill-icon">{icon}</span>}
              {isBm && <span className="pill-star">★</span>}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
