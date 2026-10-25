import { Clock, Mail, MapPin, MessageCircle, Phone, Store, Truck } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import PageHead from '../components/PageHead'
import TextTicker from '../components/TextTicker'
import EnquiryForm from '../components/EnquiryForm'
import { MAPS_EMBED, MAPS_LINK, SITE } from '../data/site'
import { waLink } from '../lib/utils'
import { useSEO } from '../hooks/useSEO'

export default function Contact() {
  useSEO('Contact RAKSHA COMPUTERS', 'Call, WhatsApp, email or visit RAKSHA COMPUTERS at Mercia Square, Derebail, Mangaluru. 12/7 support for hardware sales and repairs.')
  const reduce = useReducedMotion()

  return (
    <>
      <PageHead
        title="Contact RAKSHA COMPUTERS"
        intro="Call, WhatsApp, email, or visit our shop. We have a working time of 12/7 and attend to customer needs at any point of time."
      />
      <TextTicker
        items={[
          { text: '12/7 Working Time (9:00 AM – 9:00 PM Daily)', tag: 'Always Open' },
          { text: 'Direct Call & WhatsApp: +91 99006 03818' },
          { text: 'Basement-2, Mercia Square, Derebail, Mangaluru' },
          { text: 'Official Email: rakshacdm@gmail.com' },
          { text: 'On-Site AMC & Remote Technical Support' },
          { text: 'Instant Payments via UPI (GPay, PhonePe, Paytm)' }
        ]}
        speed="normal"
        direction="left"
      />
      <section className="py-14 md:py-20">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="flex flex-wrap gap-3">
              <a href={SITE.phoneHref} className="btn btn-red">
                <Phone size={18} /> Call {SITE.phone}
              </a>
              <a
                href={waLink('Hello RAKSHA COMPUTERS, I have an enquiry about your products/services.')}
                target="_blank"
                rel="noreferrer"
                className="btn inline-flex items-center gap-2 !bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-semibold shadow-md shadow-green-900/30"
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
              <a
                href={SITE.emailHref}
                className="btn btn-line inline-flex items-center gap-2 hover:border-yellow hover:text-yellow"
              >
                <Mail size={18} className="text-orange" /> Email Us
              </a>
            </div>

            <address className="space-y-4 not-italic">
              <div className="flex gap-3">
                <MapPin className="mt-1 shrink-0 text-orange" size={20} />
                <div>
                  <strong className="block text-paper font-semibold">RAKSHA COMPUTERS</strong>
                  <span className="text-muted">{SITE.addressLine}, {SITE.addressArea}</span>
                  <span className="block text-xs text-yellow mt-0.5">{SITE.landmark}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock className="mt-1 shrink-0 text-orange" size={20} />
                <div>
                  <span className="block font-semibold text-paper">Working Time: 12/7</span>
                  <span className="text-sm text-muted">{SITE.hours}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="mt-1 shrink-0 text-orange" size={20} />
                <div>
                  <span className="block font-semibold text-paper">Direct Email</span>
                  <a href={SITE.emailHref} className="text-sm text-cyan hover:underline hover:text-yellow transition-colors">
                    {SITE.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <Truck className="mt-1 shrink-0 text-emerald-400" size={20} />
                <div>
                  <span className="block font-semibold text-paper">Doorstep Service</span>
                  <span className="text-sm text-muted">Buying & selling of used laptops/desktops and delivery of computer peripherals & toners.</span>
                </div>
              </div>
            </address>

            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-sm font-semibold text-electric dark:text-cyan hover:text-orange dark:hover:text-yellow transition-colors hover:underline"
            >
              Open in Google Maps →
            </a>

            {/* Map & Storefront Photo */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  title="Map showing RAKSHA COMPUTERS"
                  src={MAPS_EMBED}
                  loading="lazy"
                  className="h-56 sm:h-full w-full border-0 min-h-[220px]"
                />
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-edge/60">
                <img
                  src="/images/shop/raksha-computers-storefront.webp"
                  alt="RAKSHA COMPUTERS Storefront Signboard"
                  className="h-56 sm:h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 min-h-[220px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-4 flex flex-col justify-end">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-yellow">
                    <Store size={14} />
                    <span>Store Entrance</span>
                  </div>
                  <p className="mt-0.5 text-xs text-paper/90">
                    Mercia Square B-2, Derebail (Opp. Mukund Kedar Apts)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-white/10 bg-deep p-6 md:p-8"
          >
            <h2 className="mb-2 font-display text-xl">Send an enquiry</h2>
            <p className="mb-6 text-xs text-muted">
              We respond promptly to AMC proposals, hardware queries, used PC valuations, and custom build requests.
            </p>
            <EnquiryForm type="general" />
          </motion.div>
        </div>
      </section>
    </>
  )
}
