export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)', background: 'var(--surface)',
      padding: '2.5rem 0',
    }}>
      <div className="container footer-inner" style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '1rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
          <img src="/logo-icon.svg" alt="" style={{ width: 26, height: 26, borderRadius: 6 }} />
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.1rem', letterSpacing: '.06em' }}>
            Dry Hop Digital
          </span>
        </div>

        <div style={{ fontSize: '.78rem', color: 'var(--muted)' }}>
          © {new Date().getFullYear()} Dry Hop Digital. All rights reserved.
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="https://jamesrichardson.dev" target="_blank" rel="noreferrer"
            style={{ fontSize: '.78rem', color: 'var(--sub)', transition: 'color .2s' }}
            onMouseEnter={e => e.target.style.color = 'var(--amber)'}
            onMouseLeave={e => e.target.style.color = 'var(--sub)'}
          >
            jamesrichardson.dev
          </a>
          <a href="#contact"
            style={{ fontSize: '.78rem', color: 'var(--sub)', transition: 'color .2s' }}
            onMouseEnter={e => e.target.style.color = 'var(--amber)'}
            onMouseLeave={e => e.target.style.color = 'var(--sub)'}
          >
            Contact
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .footer-inner {
            flex-direction: column;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  )
}
