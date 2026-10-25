import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, MessageCircle } from 'lucide-react'
import Art from './Art'
import { waLink } from '../lib/utils'
import type { Product } from '../types'

export default function ProductCard({ p }: { p: Product }) {
  const enquiryText = p.mrp
    ? `Hello Raksha Computers, I want to enquire about ${p.name} (MRP: ₹${p.mrp.toLocaleString('en-IN')}). Is it currently available at your Derebail shop?`
    : `Hello Raksha Computers, I want to enquire about ${p.name}. Could you please share the current availability?`

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-edge/90 to-deep/95 transition-all duration-300 hover:border-orange/50 hover:shadow-[0_12px_40px_rgba(255,85,0,0.15)]">
      {/* Top Image / Media Area */}
      <Link to={`/products/${p.slug}`} className="relative block aspect-[4/3] w-full overflow-hidden bg-gradient-to-b from-[#0a1020] to-[#040813] p-4 sm:p-5">
        <div
          className="absolute inset-0 opacity-30 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(circle at 75% 20%, rgba(0,102,255,.22), transparent 60%), radial-gradient(circle at 20% 80%, rgba(255,98,0,.18), transparent 55%)'
          }}
        />

        {p.image ? (
          <div className="relative flex h-full w-full items-center justify-center">
            <img
              src={p.image}
              alt={p.name}
              loading="lazy"
              className="max-h-full max-w-full rounded-xl object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ) : (
          <Art kind={p.kind} className="relative h-full w-full transition-transform duration-500 group-hover:scale-105" label={p.name} />
        )}

        {/* Brand / Quality Badge */}
        {p.badge && (
          <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/75 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-paper backdrop-blur-md transition-colors group-hover:border-orange/40 group-hover:text-yellow">
            {p.badge}
          </span>
        )}
      </Link>

      {/* Content Area */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-medium uppercase tracking-wider text-muted">
              {p.category}
            </span>
            <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              In Stock
            </span>
          </div>

          <Link to={`/products/${p.slug}`}>
            <h3 className="mt-1.5 font-display text-base font-semibold text-paper line-clamp-1 transition-colors group-hover:text-yellow">
              {p.name}
            </h3>
          </Link>
          <p className="mt-1 text-xs text-muted line-clamp-2 leading-relaxed">
            {p.summary}
          </p>
        </div>

        {/* Exact MRP Rate Display */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-baseline justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-[11px] font-semibold tracking-wider text-muted uppercase">MRP</span>
              <span className="font-display text-lg font-bold text-paper">
                ₹{(p.mrp || p.price || 0).toLocaleString('en-IN')}
              </span>
            </div>
            <span className="text-[10px] text-muted">
              Incl. of all taxes
            </span>
          </div>
          <span className="text-[11px] font-medium text-paper/70">
            Derebail Store
          </span>
        </div>

        {/* Actions */}
        <div className="mt-3.5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <a
            href={waLink(enquiryText)}
            target="_blank"
            rel="noreferrer"
            aria-label={`Enquire about ${p.name} on WhatsApp`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-500 px-3 py-2 text-xs font-semibold text-white shadow-sm shadow-green-950/40 transition-all duration-200 hover:from-emerald-500 hover:to-green-500 hover:shadow-green-700/50 hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle size={14} className="shrink-0" />
            <span>WhatsApp Enquire</span>
          </a>

          <Link
            to={`/products/${p.slug}`}
            className="inline-flex items-center justify-center gap-1 rounded-xl border border-white/15 bg-white/5 px-2.5 py-2 text-xs font-medium text-paper transition-colors hover:border-yellow/50 hover:bg-white/10 hover:text-yellow"
          >
            <span>Details</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  )
}
