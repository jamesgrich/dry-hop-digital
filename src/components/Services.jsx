import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    icon: '📱',
    title: 'Event Apps',
    desc: 'Real-time attendee apps for festivals and events — live beer/product lists, vendor stock management, search and filtering.',
  },
  {
    icon: '🛍️',
    title: 'Shopify Integrations',
    desc: 'Connect your Shopify store to third-party platforms. Custom themes, automation, and data sync tailored to your workflow.',
  },
  {
    icon: '🔗',
    title: 'API & Integrations',
    desc: 'Bridge your tools together. Untappd, Shopify, social feeds, POS systems — we make them talk to each other.',
  },
  {
    icon: '📺',
    title: 'Display Boards',
    desc: 'Big-screen wall displays for events. Auto-scrolling, live-updated, and branded — perfect for festival main stages.',
  },
  {
    icon: '⚡',
    title: 'Rapid Prototyping',
    desc: 'Go from idea to working product in days. We ship fast, iterate in real-time, and build things that actually get used.',
  },
  {
    icon: '🎨',
    title: 'White-Label Platforms',
    desc: 'Fully branded, deployable platforms your clients can own. Custom domains, colours, logos — ready to resell.',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="section" ref={ref}>
      <div className="container">
        <div className="section-label">What We Do</div>
        <h2 className="section-title">Services built<br />for the tap room</h2>
        <p className="section-sub" style={{ marginBottom: '3.5rem' }}>
          We specialise in digital tools that make events run smoother — from
          the bar to the big screen.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.2rem',
        }}>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', padding: '1.8rem',
                transition: 'border-color .2s, transform .2s',
                cursor: 'default',
              }}
              whileHover={{ borderColor: 'var(--border2)', y: -3 }}
            >
              <div style={{
                width: 44, height: 44, background: 'var(--amber-glow)',
                border: '1px solid rgba(143,173,136,0.2)',
                borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.3rem', marginBottom: '1rem',
              }}>
                {s.icon}
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '.5rem' }}>{s.title}</h3>
              <p style={{ fontSize: '.875rem', color: 'var(--sub)', lineHeight: 1.65 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
