import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TABS = ['Attendees', 'Vendors', 'Display']

const beers = [
  { name: 'Coastal Pale Ale', brewery: 'Salt & Sail Co.', abv: '4.8%', style: 'Pale Ale', status: 'live' },
  { name: 'Dark Matter Stout', brewery: 'Iron Forge Brew', abv: '6.2%', style: 'Stout', status: 'low' },
  { name: 'Mango Hazy IPA', brewery: 'The Hops Lab', abv: '5.5%', style: 'Hazy IPA', status: 'live' },
  { name: 'Raspberry Gose', brewery: 'Wild Coast', abv: '3.8%', style: 'Sour', status: 'sold' },
]

const vendorBeers = [
  { name: 'Coastal Pale Ale', abv: '4.8%' },
  { name: 'Dark Matter Stout', abv: '6.2%' },
  { name: 'Golden Wheat', abv: '4.1%' },
]

const stockCycle = ['live', 'low', 'sold', 'live']
const stockLabels = { live: 'Available', low: 'Low Stock', sold: 'Sold Out' }
const stockColors = { live: 'var(--live)', low: 'var(--low)', sold: 'var(--sold)' }

function StatusDot({ status }) {
  return (
    <span style={{
      display: 'inline-block', width: 8, height: 8, borderRadius: '50%',
      background: stockColors[status], flexShrink: 0,
      boxShadow: status === 'live' ? '0 0 7px var(--live)' : 'none',
    }} />
  )
}

function AttendeeScreen() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '12px 16px 10px', borderBottom: '1px solid var(--border)', background: 'var(--surface)' }}>
        <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: 6 }}>
          Live Beer List
        </div>
        <div style={{
          background: 'var(--card)', border: '1px solid var(--border)',
          borderRadius: 8, padding: '6px 10px', fontSize: '11px', color: 'var(--muted)',
        }}>Search beers, breweries…</div>
      </div>
      <div>
        {beers.map((b, i) => (
          <div key={i} style={{
            padding: '9px 16px', borderBottom: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8,
          }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{b.name}</div>
              <div style={{ fontSize: '10px', color: 'var(--sub)', marginTop: 1 }}>{b.brewery} · {b.abv}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, flexShrink: 0 }}>
              <StatusDot status={b.status} />
              <span style={{ fontSize: '10px', color: stockColors[b.status], fontWeight: 700 }}>{stockLabels[b.status]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function VendorScreen() {
  const [stockIdx, setStockIdx] = useState(0)
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setStockIdx(i => (i + 1) % stockCycle.length)
      setAnimKey(k => k + 1)
    }, 1800)
    return () => clearInterval(t)
  }, [])

  const currentStatus = stockCycle[stockIdx]

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '12px 16px 10px', borderBottom: '1px solid var(--border)', background: 'var(--surface)' }}>
        <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--amber)' }}>
          Vendor Portal
        </div>
        <div style={{ fontSize: '10px', color: 'var(--sub)', marginTop: 3 }}>Salt & Sail Co. — update stock</div>
      </div>
      {vendorBeers.map((b, i) => {
        const isFirst = i === 0
        const status = isFirst ? currentStatus : (i === 1 ? 'low' : 'live')
        return (
          <div key={i} style={{
            padding: '9px 16px', borderBottom: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text)' }}>{b.name}</div>
              <div style={{ fontSize: '10px', color: 'var(--sub)', marginTop: 1 }}>{b.abv}</div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={isFirst ? animKey : status}
                initial={{ scale: 0.75, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.75, opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  background: `${stockColors[status]}18`,
                  border: `1px solid ${stockColors[status]}44`,
                  borderRadius: 6, padding: '4px 8px',
                }}
              >
                <StatusDot status={status} />
                <span style={{ fontSize: '10px', color: stockColors[status], fontWeight: 700 }}>
                  {stockLabels[status]}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        )
      })}
      <div style={{ padding: '10px 16px' }}>
        <div style={{
          background: 'var(--amber-glow)', border: '1px solid var(--amber)',
          borderRadius: 8, padding: '7px 10px', textAlign: 'center',
        }}>
          <span style={{ fontSize: '10px', color: 'var(--amber)', fontWeight: 700 }}>⚡ Changes sync instantly</span>
        </div>
      </div>
    </div>
  )
}

function DisplayScreen() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '12px 16px 10px', background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '15px', letterSpacing: '.1em', color: 'var(--amber)' }}>
          NORWICH CRAFT BEER FEST
        </div>
        <div style={{ fontSize: '10px', color: 'var(--sub)', marginTop: 2 }}>Wall Display — Live View</div>
      </div>
      {beers.slice(0, 3).map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          style={{
            padding: '9px 16px', borderBottom: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text)' }}>{b.name}</div>
            <div style={{ fontSize: '10px', color: 'var(--sub)', marginTop: 1 }}>{b.brewery} · {b.style}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <StatusDot status={b.status} />
            <span style={{ fontSize: '11px', color: stockColors[b.status], fontWeight: 700 }}>{b.abv}</span>
          </div>
        </motion.div>
      ))}
      <div style={{ padding: '10px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '9.5px', color: 'var(--muted)' }}>Auto-updates in real time</span>
        <span style={{ fontSize: '9.5px', color: 'var(--live)', fontWeight: 700 }}>● LIVE</span>
      </div>
    </div>
  )
}

const screens = { Attendees: AttendeeScreen, Vendors: VendorScreen, Display: DisplayScreen }

export default function PhoneDemo() {
  const [active, setActive] = useState('Attendees')
  const Screen = screens[active]

  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* Outer glow */}
      <div style={{
        position: 'absolute',
        width: 360, height: 360, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(143,173,136,0.16) 0%, transparent 65%)',
        pointerEvents: 'none',
        filter: 'blur(24px)',
      }} />

      {/* Phone frame */}
      <div style={{
        width: 258,
        borderRadius: 44,
        background: 'linear-gradient(170deg, #222 0%, #111 60%, #0a0a0a 100%)',
        border: '2.5px solid #2d2d2d',
        boxShadow: '0 0 0 1px #3a3a3a, 0 40px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* Notch */}
        <div style={{ display: 'flex', justifyContent: 'center', padding: '12px 0 4px', background: 'var(--bg)' }}>
          <div style={{
            width: 72, height: 20, background: '#0a0a0a',
            borderRadius: 14, border: '1px solid #202020',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#1a1a1a', border: '1px solid #2a2a2a' }} />
            <div style={{ width: 28, height: 4, borderRadius: 2, background: '#1a1a1a' }} />
          </div>
        </div>

        {/* Status bar */}
        <div style={{
          background: 'var(--bg)', padding: '2px 18px 8px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span style={{ fontSize: '9.5px', fontWeight: 700, color: 'var(--sub)' }}>9:41</span>
          <span style={{ fontSize: '9px', color: 'var(--sub)' }}>●●● 5G 🔋</span>
        </div>

        {/* Tab bar */}
        <div style={{
          display: 'flex', background: 'var(--surface)', borderBottom: '1px solid var(--border)',
        }}>
          {TABS.map(t => (
            <button
              key={t}
              onClick={() => setActive(t)}
              style={{
                flex: 1, padding: '9px 0', fontSize: '9.5px', fontWeight: 700,
                letterSpacing: '.04em', textTransform: 'uppercase',
                background: 'none', border: 'none',
                color: active === t ? 'var(--amber)' : 'var(--muted)',
                borderBottom: active === t ? '2px solid var(--amber)' : '2px solid transparent',
                transition: 'all .2s', cursor: 'pointer',
              }}
            >{t}</button>
          ))}
        </div>

        {/* Screen content */}
        <div style={{ background: 'var(--bg)', minHeight: 400, overflow: 'hidden' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.18 }}
            >
              <Screen />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Home bar */}
        <div style={{ background: 'var(--bg)', padding: '10px 0 14px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: 60, height: 4, background: '#2a2a2a', borderRadius: 2 }} />
        </div>
      </div>
    </div>
  )
}
