import { motion } from 'framer-motion'
import PhoneDemo from './PhoneDemo'

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 'var(--nav-h)',
    }}>
      {/* Grid — right side only, clear of text */}
      <div className="hero-bg-grid" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage: 'linear-gradient(90deg, transparent 0%, transparent 42%, rgba(0,0,0,0.6) 56%, rgba(0,0,0,0.6) 80%, transparent 100%)',
        opacity: 0.6,
      }} />

      {/* Amber glow behind phone */}
      <div style={{
        position: 'absolute', top: '10%', right: '5%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,168,67,0.1) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '0%', left: '-5%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,168,67,0.05) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="container hero-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'center',
        padding: '2rem 2rem',
        width: '100%',
      }}>
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="section-label" style={{ marginBottom: '1rem' }}>
            Digital Solutions for Events
          </div>

          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(3.2rem, 5.5vw, 5.6rem)',
            lineHeight: .88, letterSpacing: '.02em',
            marginBottom: '1.4rem',
          }}>
            Events deserve<br />
            <span style={{ color: 'var(--amber)' }}>better digital</span><br />
            tools
          </h1>

          <p style={{ color: 'var(--sub)', fontSize: '1rem', lineHeight: 1.8, maxWidth: 460, marginBottom: '2rem' }}>
            Custom apps, Shopify integrations, and real-time platforms built for
            craft beer festivals, events, and hospitality. Delivered fast, without
            the agency price tag.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-primary">Start a Project</a>
            <a href="#clients" className="btn-ghost">See Our Work</a>
          </div>

          <div style={{
            display: 'flex', gap: '2.5rem', marginTop: '3rem',
            paddingTop: '2rem', borderTop: '1px solid var(--border)',
            flexWrap: 'wrap',
          }}>
            {[
              { val: '3+', label: 'Live Projects' },
              { val: '100%', label: 'Events-Focused' },
              { val: '48hr', label: 'Avg Turnaround' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.2rem', color: 'var(--amber)', lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontSize: '.72rem', color: 'var(--sub)', marginTop: 4, letterSpacing: '.05em', textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: phone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="hero-phone"
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <PhoneDemo />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-bg-grid { display: none; }
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid .section-label {
            justify-content: center;
          }
          .hero-grid p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-grid > div:first-child > div:last-child {
            justify-content: center;
          }
          .hero-phone {
            order: 1;
          }
        }
      `}</style>
    </section>
  )
}
