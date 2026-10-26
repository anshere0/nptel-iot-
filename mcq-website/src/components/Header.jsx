import React from 'react';

export default function Header({ 
  currentBank, 
  stats, 
  theme, 
  onToggleTheme, 
  onOpenStats, 
  onResetProgress,
  onOpenCurator,
  onOpenMockTest
}) {
  const is2026 = currentBank === 'current-session-2026';

  return (
    <header className="app-header">
      <div className="brand-section">
        <div className="brand-icon">IoT</div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <h1 className="brand-title">NPTEL IoT Mastery Portal</h1>
            <button
              onClick={onOpenCurator}
              className="tag tag-verified"
              style={{
                cursor: 'pointer',
                border: '1px solid var(--accent-primary)',
                background: 'var(--info-bg)',
                color: 'var(--accent-primary)',
                fontWeight: 700
              }}
              title="Click to view Curator Profile"
            >
              ⭐ By Ansh
            </button>
          </div>
          <p className="brand-subtitle">
            Prof. Sudip Misra • IIT Kharagpur • 2026 Certification System
          </p>
        </div>
      </div>

      <div className="header-actions">
        <button 
          className="pill-btn mock-test-trigger-btn" 
          onClick={onOpenMockTest}
          title="Configure and launch custom randomized mock test"
        >
          🎯 Mock Test
        </button>

        <button 
          className="pill-btn" 
          onClick={onOpenCurator}
          style={{ fontWeight: 600, color: 'var(--accent-primary)' }}
          title="About the developer and curator"
        >
          👤 Curator
        </button>

        <button 
          className="pill-btn" 
          onClick={onOpenStats}
          title="View your overall learning statistics"
        >
          📊 Stats ({stats.attempted}/{stats.total})
        </button>

        <button 
          className="pill-btn" 
          onClick={onToggleTheme}
          title="Toggle Dark/Light Mode"
        >
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>

        <button 
          className="pill-btn"
          style={{ color: 'var(--error-text)', borderColor: 'var(--error-border)' }}
          onClick={onResetProgress}
          title="Reset progress for active bank"
        >
          🔄 Reset
        </button>
      </div>
    </header>
  );
}
