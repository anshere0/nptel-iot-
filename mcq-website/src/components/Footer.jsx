import React from 'react';

export default function Footer({ onOpenCurator, onOpenStats, currentBank, onSelectBank }) {
  const handleCycleBank = () => {
    const bankOrder = [
      'current-session-2026',
      'ai-practice-bank',
      'flashcards',
      'ai-generated-bank',
      'practice-bank-904'
    ];
    const currentIndex = bankOrder.indexOf(currentBank);
    const nextBank = bankOrder[(currentIndex + 1) % bankOrder.length];
    onSelectBank(nextBank);
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
            👤 Meet Ansh
          </button>

          <button 
            className="pill-btn"
            onClick={onOpenStats}
          >
            📊 Analytics
          </button>

          <button 
            className="pill-btn"
            onClick={handleCycleBank}
            title="Switch to next question bank or flashcards"
          >
            🔄 Cycle Banks
          </button>
        </div>
      </div>

      <div style={{
        paddingTop: '1rem',
        borderTop: '1px dashed var(--border-light)',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.5rem',
        fontSize: '0.75rem',
        opacity: 0.85
      }}>
        <span>Course: Introduction to Internet of Things (noc26_cs161) • Prof. Sudip Misra • IIT Kharagpur</span>
        <span>4,005 Questions & 1,800 AI Flashcards across Weeks 1 to 12 • 100% Verified</span>
      </div>
    </footer>
  );
}
