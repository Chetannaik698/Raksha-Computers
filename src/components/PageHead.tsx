import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'

export default function PageHead({ title, intro, children }: { title: string; intro?: string; children?: ReactNode }) {
  const reduce = useReducedMotion()
  return (
    <section className="relative overflow-hidden border-b border-white/10 pb-14 pt-36 md:pb-20 md:pt-44">
      <motion.div
        animate={reduce ? undefined : { scale: [1, 1.1, 1], opacity: [0.2, 0.32, 0.2] }}
        transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-electric/25 blur-[130px]"
      />
      <motion.div
        animate={reduce ? undefined : { scale: [1, 1.14, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 9, ease: 'easeInOut', repeat: Infinity, delay: 1 }}
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-[320px] w-[320px] rounded-full bg-orange/20 blur-[120px]"
      />
      <div aria-hidden className="pointer-events-none absolute right-1/4 top-10 h-[220px] w-[220px] rounded-full bg-yellow/15 blur-[100px]" />
      <div className="wrap relative">
        <motion.h1
          initial={reduce ? false : { y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="display max-w-4xl text-[clamp(2.2rem,6vw,4.5rem)]"
        >
          {title}
        </motion.h1>
        {intro && (
          <motion.p
            initial={reduce ? false : { y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg text-muted"
          >
            {intro}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={reduce ? false : { y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}
