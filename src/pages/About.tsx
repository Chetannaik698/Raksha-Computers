import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import {
  Briefcase,
  Building2,
  CheckCircle2,
  Clock,
  Compass,
  GraduationCap,
  HeartHandshake,
  Landmark,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Store,
  Target,
  UserCheck,
  Users,
  Wrench
} from 'lucide-react'
import PageHead from '../components/PageHead'
import ClientMarquee from '../components/ClientMarquee'
import TextTicker from '../components/TextTicker'
import { MAPS_LINK, SITE } from '../data/site'
import { waLink } from '../lib/utils'
import { useSEO } from '../hooks/useSEO'

export default function About() {
  useSEO(
    'About Raksha Computers',
    'About Raksha Computers in Derebail, Mangaluru. Sales and repair services for laptops, desktops, printers, hardware AMC, and computer accessories.'
  )
  const reduce = useReducedMotion()

  return (
    <>
      <PageHead
        title="About Raksha Computers"
        intro="Your trusted local neighborhood computer sales, repair, and hardware partner in Derebail, Mangaluru since 2011."
      />

      {/* CONTINUOUS TICKER */}
      <TextTicker
        items={[
          { text: 'Est. 2011 in Mangaluru', tag: '14+ Years' },
          { text: 'Owner Mr. Narayan (M.Com, Dip. Hardware & Networking, 20+ Yrs Exp)' },
          { text: 'AMC for Nationalised & Co-operative Banks', tag: 'Trusted' },
          { text: 'Mon–Sat: 10:00 AM – 8:30 PM (Sunday Holiday)' },
          { text: 'Doorstep Buying & Selling of Used Systems' },
          { text: 'CCTV Camera Setup & Live Mobile View' }
        ]}
        speed="normal"
        direction="right"
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
              <span>Serving Mangaluru Since {SITE.establishedYear} • Mon–Sat 10:00 AM – 8:30 PM</span>
            </div>

            <h2 className="display text-[clamp(1.8rem,3.5vw,2.8rem)] text-paper">
              Friendly advice, transparent repair, and genuine parts.
            </h2>

            <p>
              Raksha Computers started in 2011 with a clear promise: provide Mangaluru residents and businesses with honest computer advice, dependable repair services, and genuine hardware without inflated overheads. Handled and managed by experts who have a strong knowledge of hardware concepts.
            </p>

            <p>
              Whether you need a new laptop, custom-built desktop for office or gaming, high-speed SSD upgrades, printer maintenance, CCTV installations, or Hardware AMC, we take the time to understand your exact budget and use-case.
            </p>

            <address className="space-y-3 not-italic text-paper pt-2">
              <p className="flex gap-3 text-sm md:text-base">
                <MapPin className="mt-1 shrink-0 text-orange" size={19} />
                <span>{SITE.addressLine}, {SITE.addressArea}</span>
              </p>
              <p className="flex gap-3 text-sm md:text-base">
                <Clock className="mt-1 shrink-0 text-orange" size={19} />
                <span>Working Time: 10:00 AM – 8:30 PM (Mon – Sat, Sunday Holiday)</span>
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
                  Basement-2 • Mercia Square
                </span>
                <p className="mt-1.5 text-sm font-semibold text-paper">
                  Official Store Entrance & Signboard at Derebail
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About the Owner Section */}
      <section className="border-t border-white/10 bg-navy/60 py-16 md:py-20">
        <div className="wrap">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow/30 bg-yellow/10 px-3.5 py-1 text-xs font-semibold text-yellow">
                <UserCheck size={14} />
                <span>About the Owner</span>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-paper sm:text-3xl">
                  {SITE.owner.name}
                </h2>
                <p className="text-sm font-semibold uppercase tracking-wider text-orange mt-1">
                  {SITE.owner.title}
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-paper">
                  <GraduationCap size={15} className="text-orange" />
                  {SITE.owner.qualifications}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-paper">
                  <Briefcase size={15} className="text-yellow" />
                  {SITE.owner.experience}
                </span>
              </div>

              <div className="space-y-2 pt-1 text-sm text-muted">
                <p className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                  <span><strong>Hardware & Systems Mastery:</strong> 20+ years of deep technical expertise in computer hardware, chip-level diagnostics, and network infrastructure.</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-yellow" />
                  <span><strong>Ethical & Transparent:</strong> Built on honest guidance, 100% genuine components, fair pricing, and long-term customer relationships.</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-orange" />
                  <span><strong>Enterprise Trusted:</strong> Preferred hardware and AMC partner for nationalised banks, co-operative societies, and thousands of Mangaluru families.</span>
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="rounded-xl border border-white/5 bg-deep p-3.5 text-center sm:text-left">
                  <span className="font-display text-xl font-bold text-paper">20+</span>
                  <span className="block text-[11px] text-muted mt-0.5">Years Field Exp.</span>
                </div>
                <div className="rounded-xl border border-white/5 bg-deep p-3.5 text-center sm:text-left">
                  <span className="font-display text-xl font-bold text-yellow">100%</span>
                  <span className="block text-[11px] text-muted mt-0.5">Genuine Parts</span>
                </div>
                <div className="rounded-xl border border-white/5 bg-deep p-3.5 text-center sm:text-left">
                  <span className="font-display text-base font-bold text-emerald-400">10am–8:30pm</span>
                  <span className="block text-[11px] text-muted mt-0.5">Mon–Sat (Sun Off)</span>
                </div>
              </div>
            </motion.div>

            {/* Vision & Mission Mini Cards */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="rounded-2xl border border-yellow/20 bg-deep/90 p-6 shadow-lg">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-yellow">
                  <Compass size={16} />
                  <span>Our Vision</span>
                </div>
                <p className="mt-2.5 text-sm md:text-base text-paper leading-relaxed">
                  "{SITE.vision}"
                </p>
              </div>

              <div className="rounded-2xl border border-cyan/20 bg-deep/90 p-6 shadow-lg">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan">
                  <Target size={16} />
                  <span>Our Mission</span>
                </div>
                <p className="mt-2.5 text-sm md:text-base text-paper leading-relaxed">
                  "{SITE.mission}"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valued Clients Section */}
      <section className="border-t border-white/10 bg-deep py-16 md:py-20">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6 max-w-4xl">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow/30 bg-yellow/10 px-3.5 py-1 text-xs font-semibold text-yellow">
                <Landmark size={14} className="animate-subtle-pulse text-yellow" />
                <span>Enterprise & Institutional AMC</span>
              </div>
              <h2 className="display mt-3 text-[clamp(1.8rem,3.5vw,2.8rem)]">
                Our <span className="text-shimmer">Valued Clients</span>
              </h2>
            </div>
            <p className="max-w-md text-sm md:text-base text-muted">
              We provide Hardware AMC, computer sales, and technical support across Mangaluru to:
            </p>
          </div>

          {/* Continuous Moving Client Marquee */}
          <div className="mt-8">
            <ClientMarquee bgTone="deep" speed="normal" direction="left" />
          </div>
        </div>
      </section>

      {/* Inside the Store / Gallery */}
      <section className="border-t border-white/10 bg-navy/40 py-16 md:py-24">
        <div className="wrap">
          <div className="max-w-2xl">
            <h2 className="display text-[clamp(1.8rem,3.5vw,2.8rem)]">Visit our physical store</h2>
            <p className="mt-3 text-muted">
              Stop by our store in Mercia Square for walk-in consultations, system testing, or hands-on hardware inspection.
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
              <p className="mt-2 text-sm text-muted">Walk into our Derebail shop any day to pick up, get advice, or test before you buy.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <CheckCircle2 className="text-emerald-400" size={28} />
              <h3 className="mt-4 font-display text-lg font-semibold text-paper">Expert Diagnostics</h3>
              <p className="mt-2 text-sm text-muted">Over 20 years of field experience in laptop motherboards, screen replacements, and cooling.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <MessageCircle className="text-cyan" size={28} />
              <h3 className="mt-4 font-display text-lg font-semibold text-paper">Dedicated Support</h3>
              <p className="mt-2 text-sm text-muted">Call or message us on WhatsApp (Mon–Sat 10:00 AM – 8:30 PM, Sunday Holiday) for quick assistance, AMC queries, and doorstep service.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
