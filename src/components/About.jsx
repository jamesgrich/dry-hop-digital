import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PHOTO = '/Screenshot_20260314_220329_Photos.jpg'

const skills = ['React', 'Node.js', 'Firebase', 'Shopify', 'APIs', 'Vite', 'Framer Motion', 'CSS']

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section" ref={ref} style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div className="about-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center',
        }}>

          {/* Left: photo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative' }}
          >
            {/* Amber glow behind photo */}
            <div style={{
              position: 'absolute', bottom: -30, left: -30, width: 260, height: 260,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(212,168,67,0.18) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            {/* Photo frame */}
            <div style={{
              position: 'relative',
              borderRadius: 20,
              overflow: 'hidden',
              border: '1px solid var(--border2)',
              boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
              aspectRatio: '3 / 3.2',
            }}>
              <img
                src={PHOTO}
                alt="James Richardson at a craft beer festival"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 58%',
                  display: 'block',
                }}
              />
              {/* Bottom gradient overlay for name badge */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(8,8,8,0.92) 0%, transparent 100%)',
                padding: '3rem 1.5rem 1.5rem',
              }}>
                <div style={{ fontWeight: 700, fontSize: '1rem' }}>James Richardson</div>
                <div style={{ fontSize: '.8rem', color: 'var(--amber)', marginTop: 3 }}>Founder · Developer</div>
              </div>
            </div>

            {/* Amber corner accent */}
            <div style={{
              position: 'absolute', top: -10, right: -10,
              width: 40, height: 40,
              borderTop: '3px solid var(--amber)',
              borderRight: '3px solid var(--amber)',
              borderRadius: '0 8px 0 0',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', bottom: -10, left: -10,
              width: 40, height: 40,
              borderBottom: '3px solid var(--amber)',
              borderLeft: '3px solid var(--amber)',
              borderRadius: '0 0 0 8px',
              pointerEvents: 'none',
            }} />
          </motion.div>

          {/* Right: copy */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="section-label">About</div>
            <h2 className="section-title">A decade of tech.<br />None of the fluff.</h2>

            <p style={{ color: 'var(--sub)', fontSize: '.95rem', lineHeight: 1.8, marginBottom: '1.2rem' }}>
              Dry Hop Digital is James Richardson — a regular at craft beer
              festivals who got tired of watching great events held back by
              clunky tools and slow technology.
            </p>
            <p style={{ color: 'var(--sub)', fontSize: '.95rem', lineHeight: 1.8, marginBottom: '1.2rem' }}>
              I've been on the floor at these events. I know what breaks, what
              vendors need, and what attendees actually want. That's why the
              software fits — because it's built by someone who's lived it.
            </p>
            <p style={{ color: 'var(--sub)', fontSize: '.95rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              No account managers. No bloated quotes. Just clean, modern software
              that works on the day.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginBottom: '2rem' }}>
              {skills.map(s => (
                <span key={s} style={{
                  fontSize: '.72rem', fontWeight: 600, padding: '.3rem .7rem',
                  background: 'var(--card)', border: '1px solid var(--border2)',
                  borderRadius: 5, color: 'var(--sub)', letterSpacing: '.04em',
                }}>{s}</span>
              ))}
            </div>

            <a href="#contact" className="btn-primary">Work With Me</a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .about-grid > div:first-child { max-width: 380px; margin: 0 auto; }
        }
      `}</style>
    </section>
  )
}
