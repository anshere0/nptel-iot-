import React from 'react';

export default function Footer({ onOpenCurator, onOpenStats, currentBank, onSelectBank }) {
  const handleCycleBank = () => {
    if (currentBank === 'current-session-2026') {
      onSelectBank('ai-generated-bank');
    } else if (currentBank === 'ai-generated-bank') {
      onSelectBank('practice-bank-904');
    } else {
      onSelectBank('current-session-2026');
    }
  };

  return (
    <footer style={{
      marginTop: '3.5rem',
      paddingTop: '2rem',
      borderTop: '1px solid var(--border-light)',
      color: 'var(--text-muted)',
      fontSize: '0.8125rem'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '1.25rem'
      }}>
        {/* Left: Branding & Creator Credit */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <span style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '0.9375rem' }}>
              NPTEL IoT Mastery Portal
            </span>
            <span className="tag tag-primary">2026 Ready</span>
          </div>
          <p>
            Curated and engineered with precision by{' '}
            <button
              onClick={onOpenCurator}
              style={{
                color: 'var(--accent-primary)',
                fontWeight: 700,
                textDecoration: 'underline',
                padding: '0 2px'
              }}
            >
              Ansh
            </button>
            {' '}• Free & open for students worldwide.
          </p>
        </div>

        {/* Right: Quick Navigation Actions */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button 
            className="pill-btn"
            onClick={onOpenCurator}
            style={{ fontWeight: 600, borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)' }}
          >
            👤 About Ansh
          </button>
          <button 
            className="pill-btn"
            onClick={onOpenStats}
          >
            📊 My Progress
          </button>
          <button 
            className="pill-btn"
            onClick={handleCycleBank}
            title="Cycle between 2026 Session, AI Generated, and Practice banks"
          >
            🔄 Switch Bank
          </button>
        </div>
      </div>

      {/* Fair-use disclaimer */}
      <div style={{
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-md)',
        padding: '0.875rem 1.25rem',
        lineHeight: 1.5,
        color: 'var(--text-muted)',
        fontSize: '0.75rem'
      }}>
        <strong>Educational Disclaimer:</strong> This portal is an independent educational practice resource developed to assist candidates preparing for the <em>NPTEL Introduction to Internet of Things</em> certification examination offered by IIT Kharagpur and taught by Prof. Sudip Misra. All lecture slide copyrights and course trademarks belong to NPTEL, Swayam, and IIT Kharagpur.
      </div>

      <div style={{ textAlign: 'center', marginTop: '1.25rem', fontSize: '0.75rem' }}>
        © {new Date().getFullYear()} NPTEL IoT Mastery System • Built for high performance & offline resilience.
      </div>
    </footer>
  );
}
