import { motion, useReducedMotion } from 'motion/react'
import { Plus } from 'lucide-react'
import PageHead from '../components/PageHead'
import { faqs } from '../data/faqs'
import { useSEO } from '../hooks/useSEO'

export default function Faq() {
  useSEO('FAQ', 'Answers about products, enquiries and services at Raksha Computers.')
  const reduce = useReducedMotion()
  return (
    <>
      <PageHead title="Questions" intro="Short answers about how this site and the shop work." />
      <section className="py-14 md:py-20">
        <div className="wrap max-w-3xl">
          {faqs.map((f, idx) => (
            <motion.details
              key={f.q}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group border-t border-white/10 py-6 last:border-b"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg transition-colors hover:text-yellow marker:hidden [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus className="shrink-0 text-orange transition-transform duration-300 group-open:rotate-45 group-open:text-yellow" />
              </summary>
              <p className="mt-4 max-w-xl text-muted leading-relaxed">{f.a}</p>
            </motion.details>
          ))}
        </div>
      </section>
    </>
  )
}
