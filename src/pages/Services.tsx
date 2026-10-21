import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import PageHead from '../components/PageHead'
import { listServices } from '../lib/api'
import { useSEO } from '../hooks/useSEO'
import type { Service } from '../types'

export default function Services() {
  useSEO('Services', 'Computer help in Derebail, Mangaluru: repairs, upgrades and troubleshooting. Ask Raksha Computers to confirm what is offered.')
  const reduce = useReducedMotion()
  const [s, setS] = useState<Service[] | null>(null)
  useEffect(() => { listServices().then(setS) }, [])
  return (
    <>
      <PageHead title="Services" intro="Typical computer help. These pages are a guide: please confirm with the shop what it offers, how long it takes and what it costs." />
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
    </>
  )
}
