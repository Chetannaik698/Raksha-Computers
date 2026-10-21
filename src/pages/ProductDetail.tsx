import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { CheckCircle2, ChevronRight, MessageCircle, Phone, ShieldCheck, Store, Truck } from 'lucide-react'
import Art from '../components/Art'
import ProductCard from '../components/ProductCard'
import EnquiryForm from '../components/EnquiryForm'
import NotFound from './NotFound'
import { getProduct, getRelated } from '../lib/api'
import { SITE } from '../data/site'
import { cn, waLink } from '../lib/utils'
import { useSEO } from '../hooks/useSEO'
import type { Product } from '../types'

export default function ProductDetail() {
  const { slug = '' } = useParams()
  const [p, setP] = useState<Product | null | undefined>(undefined)
  const [rel, setRel] = useState<Product[]>([])
  const [view, setView] = useState(0)

  useEffect(() => {
    let live = true
    setP(undefined)
    setView(0)
    getProduct(slug).then((r) => {
      if (!live) return
      setP(r)
      if (r) getRelated(r).then((x) => live && setRel(x))
    })
    return () => {
      live = false
    }
  }, [slug])

  useSEO(p ? p.name : 'Product', p ? p.summary : 'Product details')

  if (p === undefined) {
    return (
      <div className="wrap pb-24 pt-40">
        <div className="h-96 animate-pulse rounded-3xl bg-edge/60" />
      </div>
    )
  }

  if (p === null) return <NotFound />

  const galleryImages = p.images && p.images.length > 0 ? p.images : p.image ? [p.image] : []
  const hasRealImages = galleryImages.length > 0
  const activeImage = galleryImages[view] ?? galleryImages[0]
  const enquiryMessage = `Hello Raksha Computers, I am interested in ${p.name}. Could you please let me know the current price and availability in your Derebail shop?`

  return (
    <>
      <div className="wrap pt-32">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted">
          <Link to="/products" className="hover:text-orange dark:hover:text-white transition-colors">
            Products
          </Link>
          <ChevronRight size={14} />
          <Link to={`/products/category/${p.category}`} className="capitalize hover:text-orange dark:hover:text-white transition-colors">
            {p.category}
          </Link>
          <ChevronRight size={14} />
          <span className="text-paper truncate max-w-xs">{p.name}</span>
        </nav>
      </div>

      <section className="py-10 md:py-16">
        <div className="wrap grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          {/* Gallery Column */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
            <div className="relative grid aspect-[4/3] place-items-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-edge to-deep p-6 sm:p-10 shadow-2xl">
              <div aria-hidden className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-electric/20 blur-[90px]" />
              <div aria-hidden className="absolute right-1/4 bottom-1/4 h-56 w-56 rounded-full bg-orange/20 blur-[80px]" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={view}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="relative flex h-full w-full items-center justify-center"
                >
                  {hasRealImages ? (
                    <img
                      src={activeImage}
                      alt={`${p.name} - View ${view + 1}`}
                      className="max-h-full max-w-full rounded-2xl object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)]"
                    />
                  ) : (
                    <Art kind={p.kind} view={view} label={`${p.name}, view ${view + 1}`} className="w-full max-w-[500px]" />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Status Pill */}
              <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-navy/85 px-3 py-1 text-xs font-medium text-paper backdrop-blur-md">
                {hasRealImages ? (p.badge || 'Store Product') : 'Illustration'}
              </span>
            </div>

            {/* Thumbnail Navigation */}
            {hasRealImages && galleryImages.length > 1 && (
              <div className="mt-4 flex gap-3" role="group" aria-label="Gallery views">
                {galleryImages.map((img, v) => (
                  <button
                    key={v}
                    onClick={() => setView(v)}
                    aria-label={`Show view ${v + 1}`}
                    aria-pressed={view === v}
                    className={cn(
                      'h-20 w-24 overflow-hidden rounded-xl border bg-deep p-1.5 transition duration-200',
                      view === v ? 'border-orange ring-2 ring-orange/30 shadow-md shadow-orange-500/20' : 'border-white/10 hover:border-yellow/40 opacity-70 hover:opacity-100'
                    )}
                  >
                    <img src={img} alt="" className="h-full w-full object-contain" />
                  </button>
                ))}
              </div>
            )}

            {!hasRealImages && (
              <div className="mt-4 flex gap-3" role="group" aria-label="Gallery views">
                {[0, 1, 2].map((v) => (
                  <button
                    key={v}
                    onClick={() => setView(v)}
                    aria-label={`Show view ${v + 1}`}
                    aria-pressed={view === v}
                    className={cn(
                      'w-24 rounded-xl border bg-deep p-2 transition duration-200',
                      view === v ? 'border-orange ring-2 ring-orange/30 shadow-md shadow-orange-500/20' : 'border-white/10 hover:border-yellow/40'
                    )}
                  >
                    <Art kind={p.kind} view={v} className="w-full" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Details Column */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-orange/30 bg-orange/10 px-3 py-1 text-xs font-semibold text-orange dark:text-yellow">
                {p.category.toUpperCase()}
              </span>
              {p.badge && (
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                  {p.badge}
                </span>
              )}
            </div>

            <h1 className="display mt-4 text-[clamp(1.9rem,4vw,2.8rem)]">{p.name}</h1>
            <p className="mt-4 text-base md:text-lg text-muted leading-relaxed">{p.description}</p>

            {/* Price Policy Notice */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted">
                <Store size={15} className="text-orange" />
                <span>Price & Availability</span>
              </div>
              <p className="mt-1 font-display text-lg font-semibold text-paper">
                Contact for Today's Best Price
              </p>
              <p className="mt-1 text-xs text-muted">
                We provide competitive offline store pricing, seasonal discounts, and free configuration advice on WhatsApp or over a call.
              </p>
            </div>

            {/* Primary Action: WhatsApp Enquire Button */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={waLink(enquiryMessage)}
                target="_blank"
                rel="noreferrer"
                className="btn inline-flex items-center justify-center gap-2.5 !bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-500 hover:from-emerald-500 hover:to-green-500 text-white font-semibold shadow-lg shadow-green-900/40 hover:scale-[1.02] active:scale-[0.98] transition-all !px-6 !py-3.5"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Enquire</span>
              </a>

              <a
                href={SITE.phoneHref}
                className="btn btn-line hover:border-yellow hover:text-yellow inline-flex items-center gap-2 !px-5 !py-3.5"
              >
                <Phone size={18} />
                <span>Call Shop</span>
              </a>
            </div>

            {/* Trust highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/10 text-xs text-muted">
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                <span>100% Genuine Brands & Spares</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-orange shrink-0" />
                <span>Tested & Inspected Before Delivery</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Store size={16} className="text-yellow shrink-0" />
                <span>Walk-in Store in Derebail</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Truck size={16} className="text-cyan shrink-0" />
                <span>Pickup or Local Mangalore Assistance</span>
              </div>
            </div>

            {/* Specifications */}
            <h2 className="mb-3 mt-10 font-display text-lg">Product Specifications</h2>
            <dl className="divide-y divide-white/10 border-y border-white/10">
              {Object.entries(p.specs).map(([k, v]) => (
                <div key={k} className="grid grid-cols-[140px_1fr] gap-4 py-3 text-sm">
                  <dt className="text-muted">{k}</dt>
                  <dd className="text-paper font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="border-t border-white/10 bg-deep py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="display text-[clamp(1.7rem,3.5vw,2.6rem)]">Ask about this product</h2>
            <p className="mt-4 max-w-sm text-muted">
              Prefer an online form? Submit your contact number and our team at Raksha Computers will get back to you with price and stock details.
            </p>
          </div>
          <EnquiryForm type="product" subject={p.name} placeholder="Ask about price, stock, specs or compatible alternatives." />
        </div>
      </section>

      {/* Related Products */}
      {rel.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="wrap">
            <h2 className="display mb-10 text-[clamp(1.7rem,3.5vw,2.6rem)]">Related products</h2>
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {rel.map((r) => (
                <ProductCard key={r.id} p={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
