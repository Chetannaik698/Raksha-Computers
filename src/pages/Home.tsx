import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, ArrowUpRight, CheckCircle2, MapPin, MessageCircle, Phone, ShieldCheck, Sparkles, Store, Wrench } from 'lucide-react'
import Art from '../components/Art'
import ProductCard from '../components/ProductCard'
import { listCategories, listProducts, listServices } from '../lib/api'
import { MAPS_EMBED, MAPS_LINK, SITE } from '../data/site'
import { waLink } from '../lib/utils'
import { useSEO } from '../hooks/useSEO'
import type { Category, Product, Service } from '../types'

const line = { hidden: { y: '110%' }, show: (i: number) => ({ y: 0, transition: { duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.2, 0.8, 0.2, 1] as const } }) }

export default function Home() {
  useSEO('Raksha Computers Derebail | Laptops, Desktops & Hardware Mangaluru', 'Raksha Computers at Mercia Square, Derebail, Mangaluru. Genuine laptops, custom desktop builds, SSDs, printer repair and computer accessories. Enquire on WhatsApp for best price.')
  const reduce = useReducedMotion()
  const [cats, setCats] = useState<Category[]>([])
  const [featured, setFeatured] = useState<Product[]>([])
  const [acc, setAcc] = useState<Product[]>([])
  const [svc, setSvc] = useState<Service[]>([])

  useEffect(() => {
    listCategories().then(setCats)
    listProducts({ pageSize: 12 }).then((r) => setFeatured(r.items.filter((p) => p.featured)))
    listProducts({ category: 'accessories', pageSize: 12 }).then((r) => setAcc(r.items))
    listServices().then(setSvc)
  }, [])

  const f0 = featured.find((p) => p.kind === 'laptop') ?? featured[0]
  const f1 = featured.filter((p) => p !== f0).slice(0, 2)

  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[100svh] items-start overflow-hidden pb-16 pt-16 md:items-center md:pb-10 md:pt-32">
        <motion.div
          animate={reduce ? undefined : { scale: [1, 1.08, 1], opacity: [0.22, 0.32, 0.22] }}
          transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
          aria-hidden
          className="absolute -left-40 top-10 -z-10 h-[520px] w-[520px] rounded-full bg-electric/25 blur-[140px]"
        />
        <motion.div
          animate={reduce ? undefined : { scale: [1, 1.12, 1], opacity: [0.26, 0.38, 0.26] }}
          transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity, delay: 1 }}
          aria-hidden
          className="absolute -bottom-40 right-0 -z-10 h-[480px] w-[480px] rounded-full bg-orange/30 blur-[140px]"
        />

        {/* Hero GPU Animation - Placed right in the middle between navbar and text */}
        <motion.div
          initial={reduce ? false : { x: 120, opacity: 0, rotate: -6 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
          className="absolute -right-[15%] top-1 sm:top-3 -z-10 w-[115%] sm:w-[95%] max-w-[520px] opacity-60 pointer-events-none md:-right-[6%] md:top-[12%] md:w-[68%] md:max-w-[1100px] md:opacity-100"
        >
          {/* Subtle floating bobbing animation */}
          <motion.div
            animate={reduce ? undefined : { y: [-7, 7, -7] }}
            transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
          >
            <Art kind="gpu" className="w-full drop-shadow-[0_40px_80px_rgba(0,102,255,.35)]" label="Illustration of a dual-fan graphics card" />
          </motion.div>
        </motion.div>

        <div className="wrap w-full pt-[200px] sm:pt-[220px] md:pt-0">
          <div className="mb-4 mt-3.5 sm:mt-4 md:mt-0 inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-3.5 py-1 text-xs font-semibold text-orange dark:text-yellow">
            <Sparkles size={14} />
            <span>Trusted Computer Store in Derebail Since {SITE.establishedYear}</span>
          </div>
          <h1 className="display text-[clamp(2.6rem,8.6vw,8rem)]">
            <span className="block overflow-hidden pb-[0.08em]"><motion.span className="block" variants={line} custom={0} initial={reduce ? 'show' : 'hidden'} animate="show">Power your</motion.span></span>
            <span className="block overflow-hidden pb-[0.08em]"><motion.span className="block" variants={line} custom={1} initial={reduce ? 'show' : 'hidden'} animate="show">next <span className="text-gradient-logo drop-shadow-[0_4px_24px_rgba(255,98,0,0.35)]">move.</span></motion.span></span>
          </h1>
          <motion.div initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.7 }} className="mt-8 max-w-md">
            <p className="text-lg text-muted">Genuine laptops, custom desktop builds, high-speed SSDs, and accessories at Mercia Square, Derebail. Enquire on WhatsApp for current stock and best pricing.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/products" className="btn btn-red">Explore products <ArrowRight size={18} /></Link>
              <a
                href={waLink('Hello Raksha Computers, I would like to check product availability and prices.')}
                target="_blank"
                rel="noreferrer"
                className="btn inline-flex items-center gap-2 !bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-semibold shadow-md shadow-green-900/30"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Enquire</span>
              </a>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm text-muted"><MapPin size={16} className="text-orange" /> Mercia Square, Bejai–Kavoor Road, Derebail</p>
          </motion.div>
        </div>
      </section>

      {/* CATEGORY INDEX */}
      <section className="py-20 md:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.4fr]">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <h2 className="display text-[clamp(1.9rem,4vw,3.2rem)]">Start with what you need</h2>
            <p className="mt-5 max-w-sm text-muted">Four categories in stock. Each one opens the catalogue, ready to search and enquire.</p>
          </motion.div>
          <ul>
            {cats.map((c, idx) => (
              <motion.li
                key={c.slug}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="border-t border-white/10 last:border-b"
              >
                <Link to={`/products/category/${c.slug}`} className="group grid grid-cols-[1fr_auto] items-center gap-6 py-7 md:grid-cols-[1fr_160px_auto]">
                  <div>
                    <h3 className="font-display text-2xl transition-colors group-hover:text-yellow md:text-3xl">{c.name}</h3>
                    <p className="mt-2 max-w-md text-sm text-muted">{c.blurb}</p>
                  </div>
                  <Art kind={c.kind} className="hidden w-40 transition-transform duration-500 group-hover:-translate-y-1.5 md:block" />
                  <ArrowUpRight className="text-muted transition group-hover:translate-x-1 group-hover:text-yellow" size={22} />
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* FEATURED HARDWARE (REAL PRODUCTS) */}
      <section className="bg-paper py-20 text-ink md:py-32">
        <div className="wrap">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-end justify-between gap-6"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-orange">
                <Store size={15} />
                <span>Available In Shop</span>
              </div>
              <h2 className="display mt-1 text-[clamp(1.9rem,4vw,3.2rem)]">Featured hardware</h2>
            </div>
            <p className="max-w-xs text-sm text-ink/70">Genuine laptops, custom gaming towers and storage. Message on WhatsApp for real-time pricing and stock.</p>
          </motion.div>

          {f0 && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-14 grid gap-10 lg:grid-cols-[1.35fr_1fr]"
            >
              {/* Main spotlight product */}
              <Link to={`/products/${f0.slug}`} className="group relative grid place-items-center overflow-hidden rounded-3xl bg-navy p-8 md:p-14">
                <div aria-hidden className="absolute inset-0" style={{ background: 'radial-gradient(circle at 30% 20%, rgba(0,102,255,.35), transparent 55%), radial-gradient(circle at 80% 90%, rgba(255,98,0,.35), transparent 50%), radial-gradient(circle at 60% 60%, rgba(255,184,0,.15), transparent 55%)' }} />
                
                {f0.image ? (
                  <div className="relative flex h-full max-h-[360px] w-full items-center justify-center p-4">
                    <img
                      src={f0.image}
                      alt={f0.name}
                      className="max-h-full max-w-full rounded-2xl object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)] transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <Art kind={f0.kind} className="relative w-full max-w-[560px] transition-transform duration-700 group-hover:scale-105" label={f0.name} />
                )}

                <span className="absolute top-6 left-6 rounded-full bg-black/60 border border-white/15 px-3 py-1 text-xs font-semibold text-yellow backdrop-blur-md">
                  {f0.badge || 'Store Favorite'}
                </span>

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <h3 className="font-display text-xl text-paper group-hover:text-yellow transition-colors md:text-2xl">{f0.name}</h3>
                    <p className="mt-1 text-sm text-muted line-clamp-1">{f0.summary}</p>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-md">
                    <MessageCircle size={14} /> Enquire
                  </span>
                </div>
              </Link>

              {/* Side products */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:gap-8">
                {f1.map((p, i) => (
                  <Link key={p.id} to={`/products/${p.slug}`} className={`group block ${i === 1 ? 'lg:ml-10' : ''}`}>
                    <div className="relative grid place-items-center rounded-2xl bg-navy p-6 border border-white/5 transition-all duration-300 group-hover:border-yellow/30 group-hover:shadow-lg">
                      {p.image ? (
                        <div className="flex h-44 w-full items-center justify-center">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="max-h-full max-w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      ) : (
                        <Art kind={p.kind} className="w-4/5 transition-transform duration-500 group-hover:scale-105" label={p.name} />
                      )}
                      {p.badge && (
                        <span className="absolute top-3 left-3 rounded-full bg-black/60 px-2.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                          {p.badge}
                        </span>
                      )}
                    </div>
                    <div className="mt-3 flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-display text-base font-semibold text-paper group-hover:text-orange transition-colors">{p.name}</h3>
                        <p className="text-xs text-ink/70 line-clamp-1">{p.summary}</p>
                      </div>
                      <span className="shrink-0 text-xs font-semibold text-emerald-400">WhatsApp</span>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* SHOWCASE: ZEBRONICS CRONUS GAMING RIG */}
      <section className="relative overflow-hidden bg-deep py-20 md:py-32">
        <div className="wrap grid items-center gap-10 md:gap-14 lg:grid-cols-2">
          {/* Photo Showcase with ARGB Glow */}
          <motion.div initial={reduce ? false : { opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }} className="relative order-2 lg:order-1">
            <motion.div
              animate={reduce ? undefined : { scale: [1, 1.15, 1], opacity: [0.3, 0.48, 0.3] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden
              className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-electric/40 via-orange/30 to-yellow/30 blur-[110px]"
            />
            <div className="relative mx-auto flex max-w-[420px] items-center justify-center rounded-3xl border border-white/10 bg-navy/80 p-8 shadow-2xl backdrop-blur-md">
              <img
                src="/images/products/zebronics-cronus-gaming-cabinet.webp"
                alt="Zebronics Cronus ARGB Triple Fan Gaming PC"
                className="max-h-[460px] w-auto rounded-2xl object-contain drop-shadow-[0_25px_50px_rgba(0,102,255,0.4)] transition-transform duration-700 hover:scale-105"
              />
              <span className="absolute top-4 left-4 rounded-full bg-black/70 border border-white/10 px-3 py-1 text-xs font-semibold text-yellow backdrop-blur-md">
                Custom Build Showcase
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-3 py-1 text-xs font-semibold text-orange dark:text-yellow">
              <Sparkles size={14} />
              <span>Custom Performance Rigs</span>
            </div>
            <h2 className="display mt-3 text-[clamp(1.9rem,4vw,3.4rem)]">Built for the way you work and play</h2>
            <p className="mt-4 md:mt-6 max-w-lg text-base md:text-lg text-muted">From silent office accounting machines to high-airflow RGB gaming rigs with dedicated graphics, share your target budget and software requirements with us on WhatsApp.</p>
            <ul className="mt-6 md:mt-8 space-y-3 text-sm sm:text-base text-paper">
              {[
                'Office & billing setups (Tally, Vyapar, Marg, Excel)',
                'Gaming & video editing towers (Adobe Premiere, Blender, GTA)',
                'High-speed SSD & RAM upgrades for older PCs and laptops'
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-orange shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waLink('Hello Raksha Computers, I would like to get a quotation for a custom desktop build.')}
                target="_blank"
                rel="noreferrer"
                className="btn inline-flex items-center gap-2 !bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-semibold shadow-md shadow-green-900/40"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Custom Build</span>
              </a>
              <Link to="/products/category/desktops" className="btn btn-line">
                View Desktops <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ACCESSORIES, horizontal strip */}
      <section className="py-20 md:py-28">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="wrap mb-8 md:mb-10 flex items-end justify-between gap-6"
        >
          <div>
            <h2 className="display text-[clamp(1.9rem,4vw,3.2rem)]">Desk & audio accessories</h2>
            <p className="mt-2 text-xs sm:text-sm text-muted">Mice, USB headsets, webcams, speakers and storage essentials in stock</p>
          </div>
          <Link to="/products/category/accessories" className="hidden text-sm text-muted hover:text-orange dark:hover:text-yellow transition-colors sm:block">View all accessories →</Link>
        </motion.div>
        <div className="scroll-x flex snap-x gap-4 sm:gap-6 overflow-x-auto px-5 pb-6 md:px-10 lg:pl-[max(2.5rem,calc((100vw-1320px)/2+2.5rem))]">
          {acc.map((p) => (
            <div key={p.id} className="w-[260px] sm:w-[290px] shrink-0 snap-start md:w-[320px]">
              <ProductCard p={p} />
            </div>
          ))}
        </div>
      </section>

      {/* NEW SECTION: PHYSICAL SHOP & WORKSHOP TOUR */}
      <section className="border-t border-white/10 bg-deep py-20 md:py-32">
        <div className="wrap">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-end justify-between gap-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-3.5 py-1 text-xs font-semibold text-orange dark:text-yellow">
                <Store size={15} />
                <span>Physical Store in Derebail</span>
              </div>
              <h2 className="display mt-3 text-[clamp(1.9rem,4vw,3.2rem)]">
                Visit our shop in Mercia Square
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted">
              Look for our official signboard on Bejai–Kavoor Road. Walk in for transparent diagnostics, genuine parts, or hands-on testing before purchase.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1: Official Storefront */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-edge/80 p-3.5 shadow-xl transition-all duration-300 hover:border-orange/50 hover:shadow-orange-500/10"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <img
                  src="/images/shop/raksha-computers-storefront.webp"
                  alt="Raksha Computers Storefront and Signboard"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block rounded-full bg-orange/90 px-2.5 py-0.5 text-[11px] font-semibold text-white">
                    Ground Floor B-2
                  </span>
                  <p className="mt-1 text-sm font-semibold text-paper">Mercia Square Entrance</p>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-display text-lg font-semibold text-paper">Official Storefront & Signage</h3>
                <p className="mt-1.5 text-xs text-muted leading-relaxed">
                  Located near Landlinks Township Bus Stop, opposite Kedar Apartments. Look for the blue & orange Raksha Computers signboard.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Customer Desk & UPI Counter */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-edge/80 p-3.5 shadow-xl transition-all duration-300 hover:border-orange/50 hover:shadow-orange-500/10"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <img
                  src="/images/shop/raksha-computers-desk.webp"
                  alt="Customer Counter and UPI Standees"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block rounded-full bg-emerald-600/90 px-2.5 py-0.5 text-[11px] font-semibold text-white">
                    Easy Payments
                  </span>
                  <p className="mt-1 text-sm font-semibold text-paper">UPI, Cards & Cash</p>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-display text-lg font-semibold text-paper">Reception & Consultation Counter</h3>
                <p className="mt-1.5 text-xs text-muted leading-relaxed">
                  Discuss your computer requirements, get instant quotations, and complete payments via GPay, PhonePe, Paytm, or Net Banking.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Repair & Assembly Lab */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-edge/80 p-3.5 shadow-xl transition-all duration-300 hover:border-orange/50 hover:shadow-orange-500/10"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <img
                  src="/images/shop/raksha-computers-interior.webp"
                  alt="Hardware Assembly and Diagnostic Workstation"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block rounded-full bg-electric/90 px-2.5 py-0.5 text-[11px] font-semibold text-white">
                    Diagnostics Lab
                  </span>
                  <p className="mt-1 text-sm font-semibold text-paper">Testing & Assembly Bench</p>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-display text-lg font-semibold text-paper">Hardware Diagnostics & Repair</h3>
                <p className="mt-1.5 text-xs text-muted leading-relaxed">
                  Dedicated repair benches for laptop screen replacements, keyboard repairs, thermal repasting, data recovery, and custom PC builds.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Quick Services Strip taken from Official Signboard */}
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
              Official Store Services (As Per Signboard)
            </h4>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {[
                'Desktop & Laptop Repair',
                'Printer Repair & Toner Refilling',
                'CCTV & Surveillance',
                'UPS & Inverters',
                'All Types of Spares & Consumables',
                'Networking & Cabling',
                'Color & Black Prints | Lamination',
                'Accounting Software (Tally/Vyapar)'
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-navy/60 px-3 py-1.5 text-xs text-paper"
                >
                  <CheckCircle2 size={13} className="text-orange" />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-white/10 bg-deep py-20 md:py-32">
        <div className="wrap">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="display max-w-2xl text-[clamp(1.9rem,4vw,3.2rem)]">Repair & support services</h2>
            <p className="mt-4 md:mt-5 max-w-xl text-sm md:text-base text-muted">Comprehensive computer support from our Derebail workshop. Fast turnaround and honest pricing.</p>
          </motion.div>
          <div className="mt-10 md:mt-12">
            {svc.map((s, idx) => (
              <motion.div
                key={s.slug}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Link to={`/services/${s.slug}`} className="group flex items-center justify-between gap-4 sm:gap-6 border-t border-white/10 py-6 sm:py-8 last:border-b">
                  <div><h3 className="font-display text-xl group-hover:text-yellow transition-colors md:text-3xl">{s.name}</h3><p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted">{s.short}</p></div>
                  <ArrowUpRight className="shrink-0 text-muted transition duration-300 group-hover:rotate-45 group-hover:text-orange" size={24} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-20 md:py-32">
        <div className="wrap grid gap-10 md:gap-12 lg:grid-cols-[1fr_1.3fr]">
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="display text-[clamp(1.9rem,4vw,3.2rem)]"
          >
            Why start with a conversation
          </motion.h2>
          <div className="space-y-8 md:space-y-10">
            {[['A local shop you can walk into', 'Find us at Mercia Square on Bejai–Kavoor Road in Derebail, below Jan Aushadi Kendra.'],
              ['Ask before you buy', 'Call or WhatsApp to check availability, customized options, and today’s best deal. Direct advice without sales pressure.'],
              ['Plain answers & honest repair', 'Tell us your budget and what you use your computer for, and get transparent advice that fits your needs.']].map(([t, d], idx) => (
              <motion.div
                key={t}
                initial={reduce ? false : { opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-orange before:to-yellow"
              >
                <h3 className="font-display text-lg md:text-xl">{t}</h3>
                <p className="mt-1.5 md:mt-2 max-w-lg text-sm md:text-base text-muted">{d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className="px-4 sm:px-5 md:px-10">
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#061838] via-[#091D42] to-[#141226] p-6 sm:p-10 md:p-16 text-white shadow-2xl"
        >
          <motion.div
            animate={reduce ? undefined : { scale: [1, 1.15, 1], opacity: [0.28, 0.42, 0.28] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden
            className="absolute -left-10 -bottom-10 h-72 w-72 rounded-full bg-electric/30 blur-[100px]"
          />
          <motion.div
            animate={reduce ? undefined : { scale: [1, 1.2, 1], opacity: [0.32, 0.48, 0.32] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            aria-hidden
            className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-orange/35 blur-[90px]"
          />
          <div aria-hidden className="absolute right-24 bottom-4 h-48 w-48 rounded-full bg-yellow/20 blur-[80px]" />
          <div className="relative grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
            <div>
              <h2 className="display text-white text-[clamp(1.8rem,4vw,3.2rem)]">Building or upgrading a PC?</h2>
              <p className="mt-3 md:mt-4 max-w-md text-sm md:text-base text-white/85">Send us your budget and must-haves on WhatsApp. We will reply with the optimal parts list and pricing.</p>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:justify-end">
              <a
                href={waLink('Hello, I would like to enquire about a computer build or SSD upgrade for my laptop/PC.')}
                target="_blank"
                rel="noreferrer"
                className="btn inline-flex items-center justify-center gap-2 !bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-semibold shadow-lg shadow-green-900/40"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Enquiry</span>
              </a>
              <Link to="/contact" className="btn btn-line justify-center">
                Contact details
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT + LOCATION */}
      <section className="py-20 md:py-32">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="wrap grid gap-10 md:gap-12 lg:grid-cols-2"
        >
          <div>
            <h2 className="display text-[clamp(1.9rem,4vw,3.2rem)]">Raksha Computers</h2>
            <p className="mt-4 md:mt-6 max-w-lg text-base md:text-lg text-muted">A dedicated computer shop in Derebail, Mangaluru. Visit us to talk through laptops, desktops, components and accessories.</p>
            <address className="mt-6 md:mt-8 space-y-3 not-italic text-sm md:text-base text-paper">
              <p className="flex gap-3"><MapPin className="mt-1 shrink-0 text-orange" size={19} /><span>{SITE.addressLine}, {SITE.addressArea}</span></p>
              <p className="flex gap-3"><Phone className="shrink-0 text-orange" size={19} /><a href={SITE.phoneHref} className="hover:text-yellow transition-colors">{SITE.phone}</a></p>
            </address>
            <div className="mt-6 md:mt-8 flex flex-wrap gap-3">
              <a href={SITE.phoneHref} className="btn btn-red"><Phone size={18} /> Call now</a>
              <a href={MAPS_LINK} target="_blank" rel="noreferrer" className="btn btn-line">Get directions</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-lg">
            <iframe title="Map showing Raksha Computers, Derebail" src={MAPS_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[280px] sm:h-[360px] w-full border-0 grayscale-[.4] md:h-full md:min-h-[360px]" />
          </div>
        </motion.div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'ComputerStore', name: SITE.name, telephone: SITE.phone,
        address: { '@type': 'PostalAddress', streetAddress: SITE.addressLine, addressLocality: 'Mangaluru', addressRegion: 'Karnataka', postalCode: '575006', addressCountry: 'IN' } }) }} />
    </>
  )
}
