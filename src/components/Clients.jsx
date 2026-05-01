import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const clients = [
  {
    name: 'Beer Hatch',
    tag: 'Shopify · Untappd Integration',
    icon: '🍺',
    color: '#d4a843',
    desc: 'Custom Shopify storefront with live Untappd API integration — pulling fresh beer listings, ratings, and brewery data directly into the shop experience.',
    tags: ['Shopify', 'Untappd API', 'Custom Theme'],
  },
  {
    name: 'Norwich Craft Beer Festival',
    tag: 'Event App',
    icon: '🎪',
    color: '#22c55e',
    desc: 'A full white-label event platform: real-time beer listings, vendor stock management, a live wall display board, and admin portal — all deployed and running on the day.',
    tags: ['Event App', 'Real-Time', 'TV Display', 'Vendor Portal'],
  },
]

export default function Clients() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="clients" className="section" ref={ref}>
      <div className="container">
        <div className="section-label">Clients</div>
        <h2 className="section-title">Trusted by the<br />events industry</h2>
        <p className="section-sub" style={{ marginBottom: '3.5rem' }}>
          Real projects, real events. Here's what we've shipped.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.4rem' }}>
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', overflow: 'hidden',
              }}
            >
              {/* Header band */}
              <div style={{
                padding: '1.5rem 1.8rem',
                background: `linear-gradient(135deg, ${c.color}12 0%, transparent 100%)`,
                borderBottom: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', gap: '1rem',
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: `${c.color}20`, border: `1px solid ${c.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.6rem', flexShrink: 0,
                }}>
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem' }}>{c.name}</div>
                  <div style={{ fontSize: '.78rem', color: 'var(--sub)', marginTop: 2 }}>{c.tag}</div>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '1.5rem 1.8rem' }}>
                <p style={{ fontSize: '.88rem', color: 'var(--sub)', lineHeight: 1.7, marginBottom: '1.2rem' }}>
                  {c.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
                  {c.tags.map(t => (
                    <span key={t} style={{
                      fontSize: '.7rem', fontWeight: 600, letterSpacing: '.06em',
                      textTransform: 'uppercase', padding: '.3rem .7rem',
                      background: 'var(--card2)', border: '1px solid var(--border2)',
                      borderRadius: 5, color: 'var(--sub)',
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: '3rem', padding: '2rem', textAlign: 'center',
            border: '1px dashed var(--border2)', borderRadius: 'var(--radius)',
          }}
        >
          <div style={{ fontSize: '.85rem', color: 'var(--sub)', marginBottom: '.8rem' }}>
            Your event could be next →
          </div>
          <a href="#contact" className="btn-primary">Let's Talk</a>
        </motion.div>
      </div>
    </section>
  )
}
