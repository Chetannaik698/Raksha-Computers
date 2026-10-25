import { Landmark, Building2, HeartHandshake, Briefcase, Wrench, Users, ShieldCheck, Award } from 'lucide-react'

export interface ClientItem {
  id: string
  name: string
  category: string
  badge: string
  icon: typeof Landmark
  accent: 'yellow' | 'orange' | 'cyan' | 'blue'
}

export const CLIENT_DATA: ClientItem[] = [
  {
    id: 'nat-banks',
    name: 'Nationalised Banks',
    category: 'Institutional AMC',
    badge: 'Desktop & Audit AMC',
    icon: Landmark,
    accent: 'yellow'
  },
  {
    id: 'coop-banks',
    name: 'Co-operative Banks',
    category: 'Banking Infrastructure',
    badge: 'Branch IT & CCTV',
    icon: Building2,
    accent: 'cyan'
  },
  {
    id: 'coop-soc',
    name: 'Co-operative Societies',
    category: 'Society Systems',
    badge: 'Billing & Power Backups',
    icon: HeartHandshake,
    accent: 'orange'
  },
  {
    id: 'pvt-ltd',
    name: 'Private Limited Companies',
    category: 'Corporate Workstations',
    badge: 'Custom PCs & Tally',
    icon: Briefcase,
    accent: 'blue'
  },
  {
    id: 'prop-firms',
    name: 'Proprietary Firms',
    category: 'Business Accounting',
    badge: '12/7 Urgent IT Support',
    icon: Wrench,
    accent: 'yellow'
  },
  {
    id: 'institutions',
    name: 'Schools & Institutions',
    category: 'Lab IT Setups',
    badge: 'Annual Hardware Contracts',
    icon: Award,
    accent: 'cyan'
  },
  {
    id: 'enterprise-offices',
    name: 'Commercial Offices',
    category: 'Enterprise Tech',
    badge: 'Printers & Networking',
    icon: ShieldCheck,
    accent: 'orange'
  },
  {
    id: 'individual-clients',
    name: 'Individual Customers',
    category: 'Home & Students',
    badge: 'Doorstep PC Sales & Repair',
    icon: Users,
    accent: 'blue'
  }
]

interface ClientMarqueeProps {
  speed?: 'normal' | 'slow' | 'fast'
  direction?: 'left' | 'right'
  className?: string
  bgTone?: 'navy' | 'deep'
}

export default function ClientMarquee({
  speed = 'normal',
  direction = 'left',
  className = '',
  bgTone = 'navy'
}: ClientMarqueeProps) {
  // Duplicate for seamless 0 -> -50% infinite marquee loop
  const list = [...CLIENT_DATA, ...CLIENT_DATA]

  const animClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
  const speedClass = speed === 'slow' ? 'animate-marquee-slow' : speed === 'fast' ? 'animate-marquee-fast' : ''

  const fadeBg = bgTone === 'navy' 
    ? 'from-navy via-navy/80 to-transparent' 
    : 'from-deep via-deep/80 to-transparent'
  const fadeBgRight = bgTone === 'navy' 
    ? 'from-transparent via-navy/80 to-navy' 
    : 'from-transparent via-deep/80 to-deep'

  return (
    <div className={`marquee-container relative w-full overflow-hidden select-none py-3 ${className}`}>
      {/* Edge Blur / Gradient Fade */}
      <div
        aria-hidden
        className={`pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 sm:w-28 bg-gradient-to-r ${fadeBg}`}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 sm:w-28 bg-gradient-to-r ${fadeBgRight}`}
      />

      {/* Marquee Track */}
      <div className={`${animClass} ${speedClass} flex gap-4 sm:gap-5 items-center`}>
        {list.map((c, i) => {
          const Icon = c.icon
          const accentColor =
            c.accent === 'yellow'
              ? 'text-yellow border-yellow/30 bg-yellow/10'
              : c.accent === 'orange'
              ? 'text-orange border-orange/30 bg-orange/10'
              : c.accent === 'cyan'
              ? 'text-cyan border-cyan/30 bg-cyan/10'
              : 'text-electric border-electric/30 bg-electric/10'

          return (
            <div
              key={`${c.id}-${i}`}
              className="group/item flex shrink-0 items-center gap-3.5 rounded-2xl border border-white/10 bg-edge/60 backdrop-blur-md px-4 py-3 sm:px-5 sm:py-3.5 shadow-sm transition-all duration-300 hover:border-yellow/40 hover:bg-edge/90 hover:scale-[1.02] hover:shadow-lg"
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${accentColor} transition-transform duration-300 group-hover/item:scale-110`}
              >
                <Icon size={20} />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2">
                  <span className="font-brand font-bold text-sm sm:text-[15px] text-paper group-hover/item:text-yellow transition-colors whitespace-nowrap">
                    {c.name}
                  </span>
                  <span className="hidden sm:inline-block rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] font-medium text-muted uppercase tracking-wider">
                    {c.category}
                  </span>
                </div>
                <span className="text-xs text-muted font-medium whitespace-nowrap mt-0.5">
                  {c.badge}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
