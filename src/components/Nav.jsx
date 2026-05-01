import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Clients', href: '#clients' },
  { label: 'About', href: '#about' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: 'var(--nav-h)',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      transition: 'all .3s',
    }}>
      <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
          <img src="/logo-icon.svg" alt="Dry Hop Digital" style={{ width: 32, height: 32, borderRadius: 8 }} />
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.35rem', letterSpacing: '.06em' }}>
            Dry Hop Digital
          </span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2.2rem' }} className="nav-links">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontSize: '.78rem', fontWeight: 600, letterSpacing: '.08em',
              textTransform: 'uppercase', color: 'var(--sub)', transition: 'color .2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--sub)'}
            >{l.label}</a>
          ))}
          <a href="#contact" className="btn-primary" style={{ padding: '.55rem 1.3rem', fontSize: '.72rem' }}>
            Get in Touch
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="nav-hamburger"
          style={{
            background: 'none', border: 'none', color: 'var(--text)',
            display: 'none', flexDirection: 'column', gap: 5, padding: 4,
          }}
          aria-label="Menu"
        >
          <span style={{ display: 'block', width: 22, height: 2, background: 'currentColor', transition: 'all .2s', transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <span style={{ display: 'block', width: 22, height: 2, background: 'currentColor', transition: 'all .2s', opacity: open ? 0 : 1 }} />
          <span style={{ display: 'block', width: 22, height: 2, background: 'currentColor', transition: 'all .2s', transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'absolute', top: 'var(--nav-h)', left: 0, right: 0,
              background: 'var(--surface)', borderBottom: '1px solid var(--border)',
              padding: '1.5rem',
              display: 'flex', flexDirection: 'column', gap: '1.2rem',
            }}
          >
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                style={{ fontSize: '.9rem', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase' }}
              >{l.label}</a>
            ))}
            <a href="#contact" className="btn-primary" style={{ textAlign: 'center' }} onClick={() => setOpen(false)}>
              Get in Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
