import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const IMG = 'https://images.unsplash.com/photo-1774109049275-6b6fa2f7cd4a?auto=format&fit=crop&w=1920&q=80'

export default function PhotoBanner() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} style={{
      position: 'relative',
      height: 420,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* Photo */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${IMG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        transform: 'scale(1.04)',
        transition: 'transform 8s ease-out',
      }} />

      {/* Dark gradient overlay — heavier at edges, lighter in centre so the image reads */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.55) 40%, rgba(8,8,8,0.55) 60%, rgba(8,8,8,0.92) 100%)',
      }} />
      {/* Top/bottom fade into page */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, var(--surface) 0%, transparent 18%, transparent 82%, var(--bg) 100%)',
      }} />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{
          position: 'relative', zIndex: 1,
          textAlign: 'center', padding: '0 2rem',
          maxWidth: 720,
        }}
      >
        <div style={{
          fontSize: '.68rem', fontWeight: 700, letterSpacing: '.22em',
          textTransform: 'uppercase', color: 'var(--amber)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.6rem',
          marginBottom: '1.2rem',
        }}>
          <span style={{ display: 'block', width: 24, height: 1, background: 'var(--amber)' }} />
          Craft Beer · Live Events · Digital Solutions
          <span style={{ display: 'block', width: 24, height: 1, background: 'var(--amber)' }} />
        </div>

        <h2 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(2.6rem, 5vw, 4.4rem)',
          letterSpacing: '.03em', lineHeight: .9,
          marginBottom: '1.2rem',
        }}>
          Built for the nights<br />
          <span style={{ color: 'var(--amber)' }}>that bring people together</span>
        </h2>

        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 2rem' }}>
          From the first pour to last orders — we build the digital layer that makes it all run smoothly.
        </p>

        <a href="#contact" className="btn-primary">Start a Project</a>
      </motion.div>

      {/* Photo credit */}
      <a
        href="https://unsplash.com/@karljoshuabernal"
        target="_blank"
        rel="noreferrer"
        style={{
          position: 'absolute', bottom: 14, right: 18, zIndex: 2,
          fontSize: '.65rem', color: 'rgba(255,255,255,0.3)',
          textDecoration: 'none', letterSpacing: '.04em',
          transition: 'color .2s',
        }}
        onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
        onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.3)'}
      >
        Photo: Karl Joshua Bernal / Unsplash
      </a>
    </div>
  )
}
