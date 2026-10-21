import { Link } from 'react-router-dom'
import { MessageCircle, Navigation, Phone, Wallet } from 'lucide-react'
import { MAPS_LINK, SITE } from '../data/site'
import { waLink } from '../lib/utils'

export default function MobileBottomBar() {
  return (
    <aside
      aria-label="Quick mobile contact and payment dock"
      className="fixed bottom-3 inset-x-2.5 z-40 sm:hidden transition-all duration-300"
    >
      {/* Floating Glass Capsule Dock */}
      <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-[#0b1736]/95 via-[#071026]/98 to-[#040817] p-1.5 shadow-[0_14px_45px_rgba(0,0,0,0.65),0_0_24px_rgba(0,102,255,0.2)] backdrop-blur-2xl">
        {/* Subtle Top Sheen Line */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent opacity-80"
        />

        <div className="grid grid-cols-4 gap-1">
          {/* Direct Call Button */}
          <a
            href={SITE.phoneHref}
            className="group relative flex flex-col items-center justify-center gap-1 rounded-xl border border-orange/30 bg-gradient-to-b from-orange/20 to-orange/5 py-2 px-1 text-center text-xs font-semibold text-white shadow-sm transition-all duration-200 active:scale-95 hover:border-orange/50 hover:bg-orange/25"
            aria-label="Call Raksha Computers"
          >
            <div className="grid h-5 w-5 place-items-center rounded-full bg-orange/25 text-orange shadow-[0_0_8px_rgba(255,98,0,0.4)] group-hover:scale-110 transition-transform">
              <Phone size={12} />
            </div>
            <span className="tracking-tight text-[10px] font-bold">Call</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={waLink('Hello Raksha Computers, I would like to enquire about your products and services.')}
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-[#25D366] via-[#22c55e] to-[#128C7E] py-2 px-1 text-center text-xs font-bold text-white shadow-[0_4px_18px_rgba(37,211,102,0.45)] transition-all duration-200 active:scale-95 hover:brightness-105"
            aria-label="Chat with Raksha Computers on WhatsApp"
          >
            <div className="grid h-5 w-5 place-items-center rounded-full bg-black/15 text-white group-hover:scale-110 transition-transform">
              <MessageCircle size={12} className="fill-white/20" />
            </div>
            <span className="tracking-tight text-[10px]">WhatsApp</span>
          </a>

          {/* Pay via UPI */}
          <Link
            to="/pay"
            className="group relative flex flex-col items-center justify-center gap-1 rounded-xl border border-yellow/40 bg-gradient-to-b from-yellow/25 to-orange/10 py-2 px-1 text-center text-xs font-bold text-white shadow-[0_4px_16px_rgba(255,184,0,0.25)] transition-all duration-200 active:scale-95 hover:border-yellow hover:bg-yellow/30"
            aria-label="Pay via UPI or scan QR code"
          >
            <div className="grid h-5 w-5 place-items-center rounded-full bg-yellow/25 text-yellow shadow-[0_0_8px_rgba(255,184,0,0.4)] group-hover:scale-110 transition-transform">
              <Wallet size={12} />
            </div>
            <span className="tracking-tight text-[10px] text-yellow">Pay UPI</span>
          </Link>

          {/* Google Maps Directions Button */}
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col items-center justify-center gap-1 rounded-xl border border-cyan/30 bg-gradient-to-b from-cyan/20 to-electric/5 py-2 px-1 text-center text-xs font-semibold text-white shadow-sm transition-all duration-200 active:scale-95 hover:border-cyan/50 hover:bg-cyan/25"
            aria-label="Directions in Google Maps"
          >
            <div className="grid h-5 w-5 place-items-center rounded-full bg-cyan/25 text-cyan shadow-[0_0_8px_rgba(0,210,255,0.4)] group-hover:scale-110 transition-transform">
              <Navigation size={12} />
            </div>
            <span className="tracking-tight text-[10px] font-bold">Directions</span>
          </a>
        </div>
      </div>
    </aside>
  )
}
