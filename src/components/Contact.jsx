import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => setSent(true))
      .catch(() => setSent(true))
  }

  const inputStyle = {
    width: '100%', background: 'var(--card)', border: '1px solid var(--border)',
    borderRadius: 8, padding: '.85rem 1rem', fontSize: '.9rem', color: 'var(--text)',
    outline: 'none', transition: 'border-color .2s', fontFamily: "'Inter', sans-serif",
  }

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <div className="contact-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start',
        }}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">Contact</div>
            <h2 className="section-title">Got an event?<br />Let's build it.</h2>
            <p style={{ color: 'var(--sub)', fontSize: '.95rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Tell me about your event, your pain point, or just the thing you
              wish existed. I'll come back with a plain-English plan and a price
              — usually within 24 hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: '✉️', label: 'Email', val: 'hello@dryhop.digital' },
                { icon: '🌐', label: 'Portfolio', val: 'jamesrichardson.dev' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '.85rem' }}>
                  <div style={{
                    width: 38, height: 38, background: 'var(--amber-glow)',
                    border: '1px solid rgba(212,168,67,0.2)', borderRadius: 8,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
                  }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: '.72rem', color: 'var(--sub)', letterSpacing: '.06em', textTransform: 'uppercase' }}>{item.label}</div>
                    <div style={{ fontSize: '.88rem', fontWeight: 600 }}>{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {sent ? (
              <div style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', padding: '3rem 2rem', textAlign: 'center',
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🍺</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '.5rem' }}>Message received!</h3>
                <p style={{ color: 'var(--sub)', fontSize: '.9rem' }}>I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                style={{
                  background: 'var(--card)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)', padding: '2rem',
                  display: 'flex', flexDirection: 'column', gap: '1rem',
                }}
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="form-name-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input name="name" placeholder="Your name" required style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--amber)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                  <input name="email" type="email" placeholder="Email address" required style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--amber)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
                <input name="event" placeholder="Your event or project" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--amber)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
                <textarea
                  name="message"
                  placeholder="Tell me what you need..."
                  rows={5}
                  required
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => e.target.style.borderColor = 'var(--amber)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
                <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
                  Send Message →
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        @media (max-width: 500px) {
          .form-name-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
