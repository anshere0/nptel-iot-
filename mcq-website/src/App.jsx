import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Header from './components/Header.jsx';
import BankSelector from './components/BankSelector.jsx';
import FilterBar from './components/FilterBar.jsx';
import QuestionCard from './components/QuestionCard.jsx';
import NavigationBar from './components/NavigationBar.jsx';
import StatsModal from './components/StatsModal.jsx';
import CuratorModal from './components/CuratorModal.jsx';
import MockTestModal from './components/MockTestModal.jsx';
import MockTestView from './components/MockTestView.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  // Theme state: dark by default for high visual impact, persisted to localStorage
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('nptel_iot_theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('nptel_iot_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Active Question Bank: 'current-session-2026', 'ai-generated-bank', or 'practice-bank-904'
  const [currentBank, setCurrentBank] = useState('current-session-2026');

  // Loaded Data Repositories
  const [manifest, setManifest] = useState(null);
  const [allQuestions2026, setAllQuestions2026] = useState([]);
  const [allQuestionsPractice, setAllQuestionsPractice] = useState([]);
  const [allQuestionsAI, setAllQuestionsAI] = useState([]);
  const [loading, setLoading] = useState(true);

  // User Progress Storage in LocalStorage (Decoupled per bank)
  // 1. 2026 Current Session
  const [userAnswers2026, setUserAnswers2026] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('nptel_iot_answers_2026')) || {};
    } catch { return {}; }
  });

  const [userHistory2026, setUserHistory2026] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('nptel_iot_history_2026')) || {};
    } catch { return {}; }
  });

  const [bookmarks2026, setBookmarks2026] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('nptel_iot_bookmarks_2026')) || [];
    } catch { return []; }
  });

  // 2. AI Generated Bank
  const [userAnswersAI, setUserAnswersAI] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('nptel_iot_answers_ai')) || {};
    } catch { return {}; }
  });

  const [userHistoryAI, setUserHistoryAI] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('nptel_iot_history_ai')) || {};
    } catch { return {}; }
  });

  const [bookmarksAI, setBookmarksAI] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('nptel_iot_bookmarks_ai')) || [];
    } catch { return []; }
  });

  // 3. Historical Practice Bank
  const [userAnswersPractice, setUserAnswersPractice] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('nptel_iot_answers_practice')) || {};
    } catch { return {}; }
  });

  const [userHistoryPractice, setUserHistoryPractice] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('nptel_iot_history_practice')) || {};
    } catch { return {}; }
  });

  const [bookmarksPractice, setBookmarksPractice] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('nptel_iot_bookmarks_practice')) || [];
    } catch { return []; }
  });

  // Persist progress changes to localStorage
  useEffect(() => {
    localStorage.setItem('nptel_iot_answers_2026', JSON.stringify(userAnswers2026));
  }, [userAnswers2026]);

  useEffect(() => {
    localStorage.setItem('nptel_iot_history_2026', JSON.stringify(userHistory2026));
  }, [userHistory2026]);

  useEffect(() => {
    localStorage.setItem('nptel_iot_bookmarks_2026', JSON.stringify(bookmarks2026));
  }, [bookmarks2026]);

  useEffect(() => {
    localStorage.setItem('nptel_iot_answers_ai', JSON.stringify(userAnswersAI));
  }, [userAnswersAI]);

  useEffect(() => {
    localStorage.setItem('nptel_iot_history_ai', JSON.stringify(userHistoryAI));
  }, [userHistoryAI]);

  useEffect(() => {
    localStorage.setItem('nptel_iot_bookmarks_ai', JSON.stringify(bookmarksAI));
  }, [bookmarksAI]);

  useEffect(() => {
    localStorage.setItem('nptel_iot_answers_practice', JSON.stringify(userAnswersPractice));
  }, [userAnswersPractice]);

  useEffect(() => {
    localStorage.setItem('nptel_iot_history_practice', JSON.stringify(userHistoryPractice));
  }, [userHistoryPractice]);

  useEffect(() => {
    localStorage.setItem('nptel_iot_bookmarks_practice', JSON.stringify(bookmarksPractice));
  }, [bookmarksPractice]);

  // Load datasets on mount
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        // 1. Fetch manifest
        const manifestRes = await fetch('/data/manifest.json');
        if (manifestRes.ok) {
          const m = await manifestRes.json();
          setManifest(m);
        }

        // 2. Fetch all 12 weeks of 2026 current session
        const wPromises = Array.from({ length: 12 }, (_, i) => 
          fetch(`/data/current-session-2026/W${i + 1}.json`).then(r => r.json())
        );
        const wResults = await Promise.all(wPromises);
        const merged2026 = wResults.flat();
        setAllQuestions2026(merged2026);

        // 3. Fetch AI Generated bank
        const aiRes = await fetch('/data/ai-generated/questions.json');
        if (aiRes.ok) {
          const aiData = await aiRes.json();
          setAllQuestionsAI(aiData);
        }

        // 4. Fetch practice bank
        const pracRes = await fetch('/data/practice-bank-904/questions.json');
        if (pracRes.ok) {
          const pracData = await pracRes.json();
          setAllQuestionsPractice(pracData);
        }
      } catch (err) {
        console.error('Error loading question datasets:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Filter States
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [selectedType, setSelectedType] = useState('all');
  const [selectedMode, setSelectedMode] = useState('all');
  const [selectedTerm, setSelectedTerm] = useState('ALL');

  // Stats, Curator, and Mock Test Modal States
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isCuratorOpen, setIsCuratorOpen] = useState(false);
  const [isMockModalOpen, setIsMockModalOpen] = useState(false);
  const [activeMockConfig, setActiveMockConfig] = useState(null);

  // Switch banks helper
  const handleBankChange = (bankId) => {
    setCurrentBank(bankId);
    setSelectedWeek(bankId === 'current-session-2026' ? 1 : 'ALL');
    setSelectedType('all');
    setSelectedMode('all');
    setSelectedTerm('ALL');
  };

  // Active data references based on current bank
  const is2026 = currentBank === 'current-session-2026';
  const isAI = currentBank === 'ai-generated-bank';

  const rawQuestions = is2026 
    ? allQuestions2026 
    : isAI 
      ? allQuestionsAI 
      : allQuestionsPractice;

  const activeAnswers = is2026 
    ? userAnswers2026 
    : isAI 
      ? userAnswersAI 
      : userAnswersPractice;

  const activeHistory = is2026 
    ? userHistory2026 
    : isAI 
      ? userHistoryAI 
      : userHistoryPractice;

  const activeBookmarks = is2026 
    ? bookmarks2026 
    : isAI 
      ? bookmarksAI 
      : bookmarksPractice;

  const setActiveAnswers = is2026 
    ? setUserAnswers2026 
    : isAI 
      ? setUserAnswersAI 
      : setUserAnswersPractice;

  const setActiveHistory = is2026 
    ? setUserHistory2026 
    : isAI 
      ? setUserHistoryAI 
      : setUserHistoryPractice;

  const setActiveBookmarks = is2026 
    ? setBookmarks2026 
    : isAI 
      ? setBookmarksAI 
      : setBookmarksPractice;

  // Available Terms in Practice Bank
  const availableTerms = useMemo(() => {
    if (is2026 || isAI) return [];
    const termMap = {};
    allQuestionsPractice.forEach(q => {
      const termId = q.setId;
      if (!termMap[termId]) {
        termMap[termId] = { id: termId, name: q.shortTerm || q.term, count: 0 };
      }
      termMap[termId].count++;
    });
    return Object.values(termMap);
  }, [is2026, isAI, allQuestionsPractice]);

  // Compute Week Progress Stats for FilterBar badges
  const weekStats = useMemo(() => {
    const stats = {};
    rawQuestions.forEach(q => {
      const wKey = `W${q.weekNum}`;
      if (!stats[wKey]) {
        stats[wKey] = { count: 0, attempted: 0, correct: 0 };
      }
      stats[wKey].count++;
      if (activeHistory[q.id]) {
        stats[wKey].attempted++;
        if (activeHistory[q.id].isCorrect) {
          stats[wKey].correct++;
        }
      }
    });
    return stats;
  }, [rawQuestions, activeHistory]);

  // Filtered Questions Pipeline
  const filteredQuestions = useMemo(() => {
    return rawQuestions.filter(q => {
      // 1. Week Filter
      if (selectedWeek !== 'ALL' && q.weekNum !== Number(selectedWeek)) {
        return false;
      }

      // 2. Term Filter (for historical practice bank only)
      if (!is2026 && !isAI && selectedTerm !== 'ALL' && q.setId !== selectedTerm) {
        return false;
      }

      // 3. Question Type Filter
      if (selectedType !== 'all' && q.type !== selectedType) {
        return false;
      }

      // 4. Practice Mode Filter
      const hist = activeHistory[q.id];
      if (selectedMode === 'wrong') {
        if (!hist || hist.isCorrect) return false;
      } else if (selectedMode === 'unattempted') {
        if (hist) return false;
      } else if (selectedMode === 'bookmarked') {
        if (!activeBookmarks.includes(q.id)) return false;
      }

      return true;
    });
  }, [rawQuestions, selectedWeek, selectedTerm, selectedType, selectedMode, is2026, isAI, activeHistory, activeBookmarks]);

  // Answer Evaluation Handler (Allows reselecting & re-answering)
  const handleAnswer = useCallback((questionId, selectedOptions) => {
    const q = rawQuestions.find(item => item.id === questionId);
    if (!q) return;

    const correct = (q.correctKeys || []).map(k => String(k).trim().toLowerCase()).sort();
    const chosen = (selectedOptions || []).map(k => String(k).trim().toLowerCase()).sort();

    // Exact set comparison
    const isCorrect = correct.length === chosen.length && correct.every((k, idx) => k === chosen[idx]);

    setActiveAnswers(prev => ({
      ...prev,
      [questionId]: selectedOptions
    }));

    setActiveHistory(prev => ({
      ...prev,
      [questionId]: {
        isCorrect,
        answeredAt: new Date().toISOString(),
        selected: selectedOptions
      }
    }));
  }, [rawQuestions, setActiveAnswers, setActiveHistory]);

  // Reset answer handler (allows student to clear choice)
  const handleResetAnswer = useCallback((questionId) => {
    setActiveAnswers(prev => {
      const next = { ...prev };
      delete next[questionId];
      return next;
    });
    setActiveHistory(prev => {
      const next = { ...prev };
      delete next[questionId];
      return next;
    });
  }, [setActiveAnswers, setActiveHistory]);

  // Bookmark toggle handler
  const handleToggleBookmark = useCallback((questionId) => {
    setActiveBookmarks(prev => {
      if (prev.includes(questionId)) {
        return prev.filter(id => id !== questionId);
      } else {
        return [...prev, questionId];
      }
    });
  }, [setActiveBookmarks]);

  // Reset Progress for Current Bank
  const handleResetProgress = useCallback(() => {
    setActiveAnswers({});
    setActiveHistory({});
    setActiveBookmarks([]);
  }, [setActiveAnswers, setActiveHistory, setActiveBookmarks]);

  // Summary stats for Header
  const activeStats = useMemo(() => {
    const total = rawQuestions.length;
    const attempted = Object.keys(activeHistory).length;
    let correct = 0;
    Object.values(activeHistory).forEach(h => {
      if (h.isCorrect) correct++;
    });
    return {
      total,
      attempted,
      correct,
      accuracy: attempted > 0 ? Math.round((correct / attempted) * 100) : 0
    };
  }, [rawQuestions, activeHistory]);

  // Bank stats for BankSelector badges
  const stats2026 = useMemo(() => {
    const attempted = Object.keys(userHistory2026).length;
    let correct = 0;
    Object.values(userHistory2026).forEach(h => { if (h.isCorrect) correct++; });
    return { attempted, correct };
  }, [userHistory2026]);

  const statsAI = useMemo(() => {
    const attempted = Object.keys(userHistoryAI).length;
    let correct = 0;
    Object.values(userHistoryAI).forEach(h => { if (h.isCorrect) correct++; });
    return { attempted, correct };
  }, [userHistoryAI]);

  const statsPractice = useMemo(() => {
    const attempted = Object.keys(userHistoryPractice).length;
    let correct = 0;
    Object.values(userHistoryPractice).forEach(h => { if (h.isCorrect) correct++; });
    return { attempted, correct };
  }, [userHistoryPractice]);

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ width: '48px', height: '48px', border: '4px solid var(--border-light)', borderTopColor: 'var(--accent-primary)', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
        <h2>Loading NPTEL IoT Question Banks...</h2>
      </div>
    );
  }

  return (
    <div className="app-container">
      {/* Top Header */}
      <Header
        currentBank={currentBank}
        stats={activeStats}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenStats={() => setIsStatsOpen(true)}
        onResetProgress={handleResetProgress}
        onOpenCurator={() => setIsCuratorOpen(true)}
        onOpenMockTest={() => setIsMockModalOpen(true)}
      />

      {/* Main View: Mock Test Active vs Regular Practice Feed */}
      {activeMockConfig ? (
        <MockTestView
          mockConfig={activeMockConfig}
          onExitMockTest={() => setActiveMockConfig(null)}
          onRestartMockTest={(cfg) => {
            // Re-shuffle with same settings
            const availablePool = allQuestions2026.filter(q => {
              if (!cfg.selectedWeeks.includes(q.weekNum)) return false;
              if (cfg.poolType === 'official-15' && q.questionNum > 15) return false;
              return true;
            });
            const shuffled = [...availablePool];
            for (let i = shuffled.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            setActiveMockConfig({
              ...cfg,
              questions: shuffled.slice(0, cfg.questions.length)
            });
          }}
        />
      ) : (
        <>
          {/* Question Banks Selector (2026 Session, AI Generated, and Practice Bank) */}
          <BankSelector
            currentBank={currentBank}
            onSelectBank={handleBankChange}
            manifest={manifest}
            userStats2026={stats2026}
            userStatsAI={statsAI}
            userStatsPractice={statsPractice}
            onOpenMockTest={() => setIsMockModalOpen(true)}
          />

          {/* Filter and Control Bar */}
          <FilterBar
            currentBank={currentBank}
            selectedWeek={selectedWeek}
            onSelectWeek={(w) => setSelectedWeek(w)}
            selectedType={selectedType}
            onSelectType={(t) => setSelectedType(t)}
            selectedMode={selectedMode}
            onSelectMode={(m) => setSelectedMode(m)}
            selectedTerm={selectedTerm}
            onSelectTerm={(tm) => setSelectedTerm(tm)}
            availableTerms={availableTerms}
            weekStats={weekStats}
          />

          {/* Quick Jump & Sticky Progress Dock */}
          <NavigationBar
            questionsList={filteredQuestions}
            historyMap={activeHistory}
            bookmarksList={activeBookmarks}
          />

          {/* Continuous Questions Feed Area */}
          <main className="questions-feed">
            {filteredQuestions.length === 0 ? (
              <div className="question-card" style={{ textAlign: 'center', padding: '3.5rem 2rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
                <h3>No questions match your current filter settings</h3>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                  Try selecting another week or changing your filter options (e.g. from "Wrong Answers" back to "All").
                </p>
              </div>
            ) : (
              filteredQuestions.map((q, idx) => (
                <QuestionCard
                  key={q.id}
                  index={idx}
                  totalInView={filteredQuestions.length}
                  question={q}
                  userAnswer={activeAnswers[q.id] || []}
                  isAttempted={Boolean(activeHistory[q.id])}
                  isCorrect={activeHistory[q.id]?.isCorrect || false}
                  onAnswer={handleAnswer}
                  onResetAnswer={handleResetAnswer}
                  isBookmarked={activeBookmarks.includes(q.id)}
                  onToggleBookmark={handleToggleBookmark}
                />
              ))
            )}
          </main>
        </>
      )}

      {/* Footer with Ansh Attribution & Disclaimer */}
      <Footer
        onOpenCurator={() => setIsCuratorOpen(true)}
        onOpenStats={() => setIsStatsOpen(true)}
        currentBank={currentBank}
        onSelectBank={handleBankChange}
      />

      {/* Detailed Stats Modal */}
      <StatsModal
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
        currentBank={currentBank}
        manifest={manifest}
        userHistory={activeHistory}
        onResetProgress={handleResetProgress}
      />

      {/* Curator & Portfolio Showcase Modal */}
      <CuratorModal
        isOpen={isCuratorOpen}
        onClose={() => setIsCuratorOpen(false)}
      />

      {/* Custom Mock Test Modal */}
      <MockTestModal
        isOpen={isMockModalOpen}
        onClose={() => setIsMockModalOpen(false)}
        allQuestions2026={allQuestions2026}
        onStartMockTest={(config) => setActiveMockConfig(config)}
      />
    </div>
  );
}
