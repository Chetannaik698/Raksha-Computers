import type { ReactNode } from 'react'

export interface TickerItem {
  text: string
  tag?: string
  icon?: ReactNode
}

interface TextTickerProps {
  items: (string | TickerItem)[]
  speed?: 'normal' | 'slow' | 'fast'
  direction?: 'left' | 'right'
  className?: string
  bgClass?: string
}

export default function TextTicker({
  items,
  speed = 'normal',
  direction = 'left',
  className = '',
  bgClass = 'bg-navy/70 border-y border-white/10'
}: TextTickerProps) {
  // Normalize items
  const normalized: TickerItem[] = items.map((it) =>
    typeof it === 'string' ? { text: it } : it
  )

  // Duplicate for seamless 0 to -50% marquee loop
  const list = [...normalized, ...normalized]

  const animClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
  const speedClass = speed === 'slow' ? 'animate-marquee-slow' : speed === 'fast' ? 'animate-marquee-fast' : ''

  return (
    <div className={`marquee-container relative w-full overflow-hidden select-none py-2.5 ${bgClass} ${className}`}>
      {/* Edge Blur / Gradient Fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 sm:w-24 bg-gradient-to-r from-navy via-navy/70 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 sm:w-24 bg-gradient-to-r from-transparent via-navy/70 to-navy"
      />

      <div className={`${animClass} ${speedClass} flex items-center gap-6 sm:gap-8`}>
        {list.map((it, idx) => (
          <div
            key={idx}
            className="flex shrink-0 items-center gap-2.5 text-xs sm:text-sm font-medium text-paper transition-colors hover:text-yellow cursor-default"
          >
            {it.icon ? (
              <span className="text-orange">{it.icon}</span>
            ) : (
              <span className="h-1.5 w-1.5 rounded-full bg-yellow animate-subtle-pulse" />
            )}
            <span className="whitespace-nowrap tracking-wide font-brand font-semibold">
              {it.text}
            </span>
            {it.tag && (
              <span className="rounded-full bg-orange/15 border border-orange/30 px-2 py-0.5 text-[10px] font-bold text-orange uppercase tracking-wider">
                {it.tag}
              </span>
            )}
            <span className="text-white/20 select-none ml-2">/</span>
          </div>
        ))}
      </div>
    </div>
  )
}
