import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { CheckCircle2, Clock, MapPin, MessageCircle, Phone, ShieldCheck, Sparkles, Store } from 'lucide-react'
import PageHead from '../components/PageHead'
import { MAPS_LINK, SITE } from '../data/site'
import { waLink } from '../lib/utils'
import { useSEO } from '../hooks/useSEO'

export default function About() {
  useSEO('About Raksha Computers', 'About Raksha Computers in Derebail, Mangaluru. Sales and repair services for laptops, desktops, printers, and computer accessories.')
  const reduce = useReducedMotion()

  return (
    <>
      <PageHead
        title="About Raksha Computers"
        intro="Your trusted local neighborhood computer sales, repair, and hardware partner in Derebail, Mangaluru since 2011."
      />

      {/* Main Story & Storefront Section */}
      <section className="py-16 md:py-24">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 text-base md:text-lg text-muted"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-3.5 py-1 text-xs font-semibold text-orange dark:text-yellow">
              <Sparkles size={14} />
              <span>Serving Mangaluru Since {SITE.establishedYear}</span>
            </div>

            <h2 className="display text-[clamp(1.8rem,3.5vw,2.8rem)] text-paper">
              Friendly advice, transparent repair, and genuine parts.
            </h2>

            <p>
              Raksha Computers started with a clear promise: provide Mangaluru residents and businesses with honest computer advice, dependable repair services, and genuine hardware without the inflated overheads.
            </p>

            <p>
              Whether you need a new laptop for college, a custom-built desktop for gaming or video editing, high-speed SSD upgrades, printer maintenance, or networking supplies, we take the time to understand your exact budget and use-case.
            </p>

            <address className="space-y-3 not-italic text-paper pt-2">
              <p className="flex gap-3 text-sm md:text-base">
                <MapPin className="mt-1 shrink-0 text-orange" size={19} />
                <span>{SITE.addressLine}, {SITE.addressArea}</span>
              </p>
              <p className="flex gap-3 text-sm md:text-base">
                <Clock className="mt-1 shrink-0 text-orange" size={19} />
                <span>{SITE.hours}</span>
              </p>
              <p className="flex gap-3 text-sm md:text-base">
                <Phone className="shrink-0 text-orange" size={19} />
                <a href={SITE.phoneHref} className="hover:text-yellow transition-colors font-medium">
                  {SITE.phone}
                </a>
              </p>
            </address>

            <div className="flex flex-wrap gap-3 pt-3">
              <a
                href={waLink('Hello Raksha Computers, I would like to enquire about your services and products.')}
                target="_blank"
                rel="noreferrer"
                className="btn inline-flex items-center gap-2 !bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-semibold shadow-md shadow-green-900/30"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Us</span>
              </a>
              <a href={MAPS_LINK} target="_blank" rel="noreferrer" className="btn btn-line hover:border-yellow hover:text-yellow">
                Get Directions
              </a>
            </div>
          </motion.div>

          {/* Real Storefront Signboard Showcase */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-edge to-deep p-3 shadow-2xl"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <img
                src="/images/shop/raksha-computers-storefront.webp"
                alt="Raksha Computers Mercia Square Storefront and Signboard"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block rounded-full bg-orange/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  Ground Floor B2 • Mercia Square
                </span>
                <p className="mt-1.5 text-sm font-semibold text-paper">
                  Official Store Entrance & Signboard at Derebail
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Inside the Store / Gallery */}
      <section className="border-t border-white/10 bg-deep py-16 md:py-24">
        <div className="wrap">
          <div className="max-w-2xl">
            <h2 className="display text-[clamp(1.8rem,3.5vw,2.8rem)]">Visit our physical store</h2>
            <p className="mt-3 text-muted">
              Stop by our air-conditioned store in Mercia Square for walk-in consultations, system testing, or hands-on hardware inspection.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Photo 1: Storefront */}
            <div className="group overflow-hidden rounded-2xl border border-white/10 bg-edge/60 p-3 transition-colors hover:border-orange/40">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src="/images/shop/raksha-computers-storefront.webp"
                  alt="Store Signboard and Entrance"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-3 font-display text-base font-semibold text-paper">Storefront & Signage</h3>
              <p className="mt-1 text-xs text-muted">Directly accessible from Bejai–Kavoor Road near Landlinks Township.</p>
            </div>

            {/* Photo 2: Reception & Desk */}
            <div className="group overflow-hidden rounded-2xl border border-white/10 bg-edge/60 p-3 transition-colors hover:border-orange/40">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src="/images/shop/raksha-computers-desk.webp"
                  alt="Customer Reception and Billing Desk"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-3 font-display text-base font-semibold text-paper">Reception & Customer Desk</h3>
              <p className="mt-1 text-xs text-muted">Quick billing, UPI (GPay/PhonePe) payments, and personalized consultations.</p>
            </div>

            {/* Photo 3: Workshop / Interior */}
            <div className="group overflow-hidden rounded-2xl border border-white/10 bg-edge/60 p-3 transition-colors hover:border-orange/40">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src="/images/shop/raksha-computers-interior.webp"
                  alt="Hardware Assembly and Diagnostic Workbench"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-3 font-display text-base font-semibold text-paper">Diagnostics & Assembly Lab</h3>
              <p className="mt-1 text-xs text-muted">Equipped for safe laptop repair, thermal repasting, and custom desktop builds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand & Quality Highlights */}
      <section className="py-16 md:py-24">
        <div className="wrap">
          <h2 className="display text-center text-[clamp(1.8rem,3.5vw,2.8rem)]">What makes us dependable</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <ShieldCheck className="text-orange" size={28} />
              <h3 className="mt-4 font-display text-lg font-semibold text-paper">100% Genuine Brands</h3>
              <p className="mt-2 text-sm text-muted">Authorised stock from HP, Lenovo, Acer, Dell, Asus, Intel, Zebronics, SanDisk, and EVM.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Store className="text-yellow" size={28} />
              <h3 className="mt-4 font-display text-lg font-semibold text-paper">Direct Physical Shop</h3>
              <p className="mt-2 text-sm text-muted">No ghost sellers. Walk into our Derebail shop any day to pick up or test before you buy.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <CheckCircle2 className="text-emerald-400" size={28} />
              <h3 className="mt-4 font-display text-lg font-semibold text-paper">Expert Diagnostics</h3>
              <p className="mt-2 text-sm text-muted">Transparent diagnosis of laptop motherboards, screen replacements, and cooling systems.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <MessageCircle className="text-cyan" size={28} />
              <h3 className="mt-4 font-display text-lg font-semibold text-paper">Instant WhatsApp Support</h3>
              <p className="mt-2 text-sm text-muted">Message us pictures of your machine or required spare for immediate guidance.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
