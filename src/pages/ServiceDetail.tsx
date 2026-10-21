import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { Check, Info } from 'lucide-react'
import PageHead from '../components/PageHead'
import EnquiryForm from '../components/EnquiryForm'
import NotFound from './NotFound'
import { getService } from '../lib/api'
import { useSEO } from '../hooks/useSEO'
import type { Service } from '../types'

export default function ServiceDetail() {
  const { slug = '' } = useParams()
  const reduce = useReducedMotion()
  const [s, setS] = useState<Service | null | undefined>(undefined)
  useEffect(() => { setS(undefined); getService(slug).then(setS) }, [slug])
  useSEO(s ? s.name : 'Service', s ? s.short : 'Service details')
  if (s === undefined) return <div className="wrap pb-24 pt-40"><div className="h-72 animate-pulse rounded-3xl bg-edge/60" /></div>
  if (s === null) return <NotFound />
  return (
    <>
      <PageHead title={s.name} intro={s.short} />
      <section className="py-14 md:py-20">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1fr]">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {!s.confirmed && <p className="mb-6 flex gap-3 rounded-2xl border border-electric/30 dark:border-cyan/40 bg-electric/10 p-4 text-[15px]"><Info className="mt-0.5 shrink-0 text-electric dark:text-cyan" size={18} /> Please confirm with the shop that this service is offered. No turnaround time, warranty or price is promised here.</p>}
            <p className="text-lg text-muted">{s.description}</p>
            <h2 className="mb-4 mt-10 font-display text-xl">What to expect</h2>
            <ul className="space-y-3">{s.includes.map((i) => <li key={i} className="flex gap-3"><Check className="mt-0.5 text-orange dark:text-yellow" size={18} />{i}</li>)}</ul>
            <Link to="/services" className="mt-10 inline-block text-sm text-muted hover:text-orange dark:hover:text-yellow transition-colors">All services</Link>
          </motion.div>
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-white/10 bg-deep p-6 md:p-8"
          >
            <h2 className="mb-5 font-display text-xl">Ask about {s.name.toLowerCase()}</h2>
            <EnquiryForm type="service" subject={s.name} placeholder="Describe the problem or what you need." />
          </motion.div>
        </div>
      </section>
    </>
  )
}
