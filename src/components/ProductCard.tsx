import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, MessageCircle } from 'lucide-react'
import Art from './Art'
import { waLink } from '../lib/utils'
import type { Product } from '../types'

export default function ProductCard({ p }: { p: Product }) {
  const enquiryText = `Hello Raksha Computers, I want to enquire about ${p.name}. Could you please share the price and availability?`

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-edge/90 to-deep/95 transition-all duration-300 hover:border-orange/50 hover:shadow-[0_12px_40px_rgba(255,85,0,0.15)]">
      {/* Top Image / Media Area */}
      <Link to={`/products/${p.slug}`} className="relative block aspect-[4/3] w-full overflow-hidden bg-navy/60 p-4">
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(circle at 75% 20%, rgba(0,102,255,.25), transparent 60%), radial-gradient(circle at 20% 80%, rgba(255,98,0,.2), transparent 55%)'
          }}
        />

        {p.image ? (
          <div className="relative flex h-full w-full items-center justify-center">
            <img
              src={p.image}
              alt={p.name}
              loading="lazy"
              className="max-h-full max-w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-md"
            />
          </div>
        ) : (
          <Art kind={p.kind} className="relative h-full w-full transition-transform duration-500 group-hover:scale-105" label={p.name} />
        )}

        {/* Badge */}
        {p.badge && (
          <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/70 px-2.5 py-0.5 text-[11px] font-medium text-paper backdrop-blur-md transition-colors group-hover:border-orange/40 group-hover:text-yellow">
            {p.badge}
          </span>
        )}
      </Link>

      {/* Content Area */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex-1">
          <span className="text-[11px] font-medium uppercase tracking-wider text-muted">
            {p.category}
          </span>
          <Link to={`/products/${p.slug}`}>
            <h3 className="mt-1 font-display text-base font-semibold text-paper line-clamp-1 transition-colors group-hover:text-yellow">
              {p.name}
            </h3>
          </Link>
          <p className="mt-1.5 text-xs sm:text-sm text-muted line-clamp-2 leading-relaxed">
            {p.summary}
          </p>
        </div>

        {/* Actions - No price, only WhatsApp Enquire & details link */}
        <div className="mt-5 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
          <a
            href={waLink(enquiryText)}
            target="_blank"
            rel="noreferrer"
            aria-label={`Enquire about ${p.name} on WhatsApp`}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 px-3.5 py-2 text-xs font-semibold text-white shadow-sm shadow-green-900/40 transition-all duration-200 hover:from-emerald-500 hover:to-green-500 hover:shadow-green-700/50 hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle size={15} className="shrink-0" />
            <span>WhatsApp Enquire</span>
          </a>

          <Link
            to={`/products/${p.slug}`}
            className="inline-flex items-center justify-center gap-1 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-paper transition-colors hover:border-yellow/50 hover:bg-white/10 hover:text-yellow"
          >
            <span>Details</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  )
}
