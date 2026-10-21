import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { MAPS_LINK, SITE } from '../data/site'
import { waLink } from '../lib/utils'

export default function MobileQuickBar() {
  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-3 inset-x-3 z-40 md:hidden"
    >
      <div className="relative mx-auto flex max-w-md items-center justify-between gap-2 rounded-2xl border border-white/10 bg-deep/95 p-2 shadow-2xl backdrop-blur-xl">
        {/* Store location snippet */}
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 rounded-xl px-2.5 py-2 text-xs font-medium text-muted hover:text-paper transition"
          title="Open shop location in Google Maps"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-orange" />
          </span>
          <MapPin size={13} className="text-orange" />
          <span className="truncate max-w-[85px] xs:max-w-[110px]">Derebail</span>
        </a>

        {/* Quick Call */}
        <a
          href={SITE.phoneHref}
          className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-edge/40 px-3 py-2 text-xs font-semibold text-paper hover:border-yellow/40 transition active:scale-95"
        >
          <Phone size={14} className="text-orange" />
          <span>Call</span>
        </a>

        {/* 1-Tap WhatsApp Primary Action */}
        <a
          href={waLink('Hello Raksha Computers, I am browsing your website and have an enquiry.')}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#FF5500] via-[#FF7700] to-[#FFB800] px-3.5 py-2 text-xs font-bold text-white shadow-md shadow-orange-500/25 active:scale-95"
        >
          <MessageCircle size={15} />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  )
}
