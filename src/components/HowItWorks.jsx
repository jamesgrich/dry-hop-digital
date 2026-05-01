import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Tell us what you need',
    desc: 'A quick call or message is all it takes. We listen to your event, your pain points, and what you wish existed.',
  },
  {
    num: '02',
    title: 'We scope and quote fast',
    desc: 'No bloated proposals. You get a clear scope, realistic timeline, and a flat fee — no hourly billing surprises.',
  },
  {
    num: '03',
    title: 'Build, iterate, ship',
    desc: 'We build in the open. You see progress daily, give feedback in real-time, and we adjust on the fly.',
  },
  {
    num: '04',
    title: 'Go live at your event',
    desc: "We're on call on the day. Your team gets a handover, docs, and support so everything runs smooth.",
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="how-it-works" className="section" ref={ref} style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div className="section-label">The Process</div>
        <h2 className="section-title">From idea to live<br />in days, not months</h2>
        <p className="section-sub" style={{ marginBottom: '3.5rem' }}>
          We keep it lean. No account managers, no bloated timelines — just direct,
          fast delivery from someone who's done this before.
        </p>

        <div className="steps-grid">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              className="step-item"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '3.5rem', lineHeight: 1,
                color: 'var(--amber)', marginBottom: '.75rem',
                userSelect: 'none',
              }}>
                {s.num}
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '.6rem' }}>{s.title}</h3>
              <p style={{ fontSize: '.875rem', color: 'var(--sub)', lineHeight: 1.65 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          position: relative;
        }
        .step-item {
          padding: 2rem 2rem 2rem 0;
          border-right: 1px solid var(--border);
          padding-right: 2rem;
          position: relative;
        }
        .step-item:first-child { padding-left: 0; }
        .step-item:last-child { border-right: none; }
        @media (max-width: 860px) {
          .steps-grid {
            grid-template-columns: 1fr 1fr;
          }
          .step-item:nth-child(2) { border-right: none; }
          .step-item:nth-child(3) { padding-left: 0; }
          .step-item:nth-child(4) { border-right: none; padding-left: 2rem; }
        }
        @media (max-width: 500px) {
          .steps-grid {
            grid-template-columns: 1fr;
          }
          .step-item {
            border-right: none;
            border-bottom: 1px solid var(--border);
            padding: 1.5rem 0;
          }
          .step-item:last-child { border-bottom: none; }
          .step-item::after { display: none !important; }
        }
      `}</style>
    </section>
  )
}
