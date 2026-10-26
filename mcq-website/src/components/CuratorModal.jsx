import React from 'react';

export default function CuratorModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={e => e.stopPropagation()} 
        style={{ maxWidth: '580px', padding: '2rem' }}
      >
        {/* Modal Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: 'var(--radius-lg)',
              background: 'linear-gradient(135deg, #2563eb 0%, #9333ea 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.75rem',
              fontWeight: 800,
              boxShadow: '0 4px 14px rgba(147, 51, 234, 0.35)'
            }}>
              A
            </div>
            <div>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.02em', margin: 0 }}>
                Curated & Built by Ansh
              </h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                Full-Stack Developer • NPTEL IoT Certification Aspirant
              </p>
            </div>
          </div>

          <button 
            style={{ fontSize: '1.5rem', color: 'var(--text-muted)', lineHeight: 1, padding: '0.25rem' }} 
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Curator Statement */}
        <div style={{ 
          background: 'var(--bg-tertiary)', 
          padding: '1.25rem', 
          borderRadius: 'var(--radius-md)', 
          borderLeft: '4px solid var(--accent-primary)',
          fontSize: '0.9rem',
          lineHeight: 1.6,
          color: 'var(--text-secondary)',
          marginBottom: '1.5rem'
        }}>
          "I designed and engineered this comprehensive testing portal to provide myself and fellow students with a rigorous, distraction-free environment to prepare for the <strong>NPTEL Introduction to IoT</strong> certification exam (IIT Kharagpur — Prof. Sudip Misra). The system features <strong>904 verified questions</strong> with instantaneous distractor analysis, strict bank separation, and offline persistence."
        </div>

        {/* Project Highlights Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div style={{ background: 'var(--bg-tertiary)', padding: '0.875rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-primary)' }}>180 Qs</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>2026 Current Session</div>
          </div>
          <div style={{ background: 'var(--bg-tertiary)', padding: '0.875rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--success-border)' }}>724 Qs</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Historical Bank (4 Terms)</div>
          </div>
        </div>

        {/* Connect & Social Profiles */}
        <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
          Connect with Ansh
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="option-item"
            style={{ textDecoration: 'none', padding: '0.75rem 1rem' }}
          >
            <div className="option-pill" style={{ background: '#24292e', color: 'white' }}>
              🐙
            </div>
            <div className="option-text" style={{ fontWeight: 600 }}>
              GitHub Profile
              <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 400 }}>
                Explore open-source repositories & contributions
              </span>
            </div>
            <span style={{ color: 'var(--text-muted)' }}>↗</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="option-item"
            style={{ textDecoration: 'none', padding: '0.75rem 1rem' }}
          >
            <div className="option-pill" style={{ background: '#0a66c2', color: 'white' }}>
              💼
            </div>
            <div className="option-text" style={{ fontWeight: 600 }}>
              LinkedIn Network
              <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 400 }}>
                Connect professionally & discuss IoT / web engineering
              </span>
            </div>
            <span style={{ color: 'var(--text-muted)' }}>↗</span>
          </a>

          {/* Portfolio */}
          <div
            className="option-item"
            style={{ padding: '0.75rem 1rem', opacity: 0.85 }}
          >
            <div className="option-pill" style={{ background: 'var(--accent-gradient)', color: 'white' }}>
              🌐
            </div>
            <div className="option-text" style={{ fontWeight: 600 }}>
              Personal Portfolio
              <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 400 }}>
                Currently in development — launching soon!
              </span>
            </div>
            <span className="tag tag-provisional">In Progress</span>
          </div>

          {/* Contact / Email */}
          <a
            href="mailto:contact@example.com"
            className="option-item"
            style={{ textDecoration: 'none', padding: '0.75rem 1rem' }}
          >
            <div className="option-pill" style={{ background: '#ea4335', color: 'white' }}>
              ✉️
            </div>
            <div className="option-text" style={{ fontWeight: 600 }}>
              Direct Inquiries
              <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 400 }}>
                Feedback, corrections, or study collaboration
              </span>
            </div>
            <span style={{ color: 'var(--text-muted)' }}>↗</span>
          </a>
        </div>

        {/* Footer info note */}
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '1.25rem' }}>
          *You can customize these social links anytime directly in <code>src/components/CuratorModal.jsx</code>.
        </p>
      </div>
    </div>
  );
}
