import { Link } from 'react-router-dom'
import { MessageCircle, Navigation, Phone, Wallet } from 'lucide-react'
import { MAPS_LINK, SITE } from '../data/site'
import { waLink } from '../lib/utils'

export default function MobileBottomBar() {
  return (
    <aside
      aria-label="Quick mobile contact and payment bar"
      className="fixed bottom-0 inset-x-0 z-40 sm:hidden border-t border-white/10 bg-[#081126]/95 dark:bg-[#050b18]/95 backdrop-blur-xl pb-[max(0.25rem,env(safe-area-inset-bottom))]"
    >
      <nav className="grid grid-cols-4 items-center h-14 max-w-lg mx-auto px-1">
        {/* Call */}
        <a
          href={SITE.phoneHref}
          className="flex flex-col items-center justify-center gap-0.5 py-1 text-center transition-transform active:scale-90"
          aria-label="Call Raksha Computers"
        >
          <div className="grid h-7 w-7 place-items-center rounded-lg bg-orange/15 text-orange">
            <Phone size={15} />
          </div>
          <span className="text-[10px] font-semibold tracking-tight text-white/90">Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={waLink('Hello Raksha Computers, I would like to enquire about your products and services.')}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 py-1 text-center transition-transform active:scale-90"
          aria-label="WhatsApp Raksha Computers"
        >
          <div className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-500/15 text-emerald-400">
            <MessageCircle size={15} />
          </div>
          <span className="text-[10px] font-semibold tracking-tight text-emerald-400">WhatsApp</span>
        </a>

        {/* Pay UPI */}
        <Link
          to="/pay"
          className="flex flex-col items-center justify-center gap-0.5 py-1 text-center transition-transform active:scale-90"
          aria-label="Pay via UPI or scan QR code"
        >
          <div className="grid h-7 w-7 place-items-center rounded-lg bg-yellow/15 text-yellow">
            <Wallet size={15} />
          </div>
          <span className="text-[10px] font-semibold tracking-tight text-yellow">Pay UPI</span>
        </Link>

        {/* Directions */}
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 py-1 text-center transition-transform active:scale-90"
          aria-label="Directions to shop"
        >
          <div className="grid h-7 w-7 place-items-center rounded-lg bg-cyan/15 text-cyan">
            <Navigation size={15} />
          </div>
          <span className="text-[10px] font-semibold tracking-tight text-cyan">Directions</span>
        </a>
      </nav>
    </aside>
  )
}
