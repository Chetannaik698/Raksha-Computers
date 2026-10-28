import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, Landmark } from 'lucide-react'
import PageHead from '../components/PageHead'
import TextTicker from '../components/TextTicker'
import ClientMarquee from '../components/ClientMarquee'
import { listServices } from '../lib/api'
import { useSEO } from '../hooks/useSEO'
import type { Service } from '../types'

export default function Services() {
  useSEO('Services & AMC | RAKSHA COMPUTERS Mangaluru', 'Computer hardware sales, repair, AMC for banks, custom desktops, CCTV installations, and dedicated support in Derebail, Mangaluru.')
  const reduce = useReducedMotion()
  const [s, setS] = useState<Service[] | null>(null)
  useEffect(() => { listServices().then(setS) }, [])
  return (
    <>
      <PageHead
        title="Hardware Sales & Services"
        intro="Started in 2011, handled and managed by hardware experts. From chip-level repairs and custom builds to institutional AMC and CCTV surveillance with dedicated support."
      />

      {/* CONTINUOUS SERVICE TICKER */}
      <TextTicker
        items={[
          { text: 'Mon – Sat: 10:00 AM – 8:30 PM (Sun Holiday)', tag: 'Hours' },
          { text: 'Hardware AMC for Nationalised & Co-op Banks', tag: 'Trusted' },
          { text: 'Chip-Level Motherboard & Laptop Repairs' },
          { text: 'Custom Performance Gaming & Office Desktops' },
          { text: 'Buying & Selling of Used Desktops & Laptops' },
          { text: 'High-Speed SSD Upgrades & Data Recovery' },
          { text: 'CCTV Dome/Bullet & WiFi Surveillance Cameras' },
          { text: 'Laser Printer Servicing & Toner Refilling' }
        ]}
        speed="normal"
        direction="left"
      />

      <section className="py-14 md:py-20">
        <div className="wrap">
          {!s && <div className="h-64 animate-pulse rounded-2xl bg-edge/60" />}
          {s?.map((x, idx) => (
            <motion.div
              key={x.slug}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={`/services/${x.slug}`} className="group grid items-center gap-4 border-t border-white/10 py-10 last:border-b md:grid-cols-[1fr_1.2fr_auto] md:gap-12">
                <h2 className="font-display text-3xl transition-colors group-hover:text-yellow md:text-4xl">{x.name}</h2>
                <p className="max-w-lg text-muted">{x.short}</p>
                <ArrowUpRight className="text-muted transition duration-300 group-hover:rotate-45 group-hover:text-orange" size={28} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INSTITUTIONAL CLIENTS MARQUEE */}
      <section className="border-t border-white/10 bg-navy/60 py-16 md:py-20">
        <div className="wrap mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow/30 bg-yellow/10 px-3 py-1 text-xs font-semibold text-yellow">
              <Landmark size={14} className="animate-subtle-pulse" />
              <span>Institutional AMC</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-paper sm:text-3xl mt-2">
              Trusted by <span className="text-shimmer">Banks & Enterprises</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted">
            Continuous preventative maintenance and emergency support for commercial institutions across Mangaluru.
          </p>
        </div>
        <ClientMarquee bgTone="navy" speed="normal" direction="left" />
      </section>
    </>
  )
}
