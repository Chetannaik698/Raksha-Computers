import { Clock, Landmark, ShieldCheck, Truck } from 'lucide-react'

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Managed by Hardware Experts',
    desc: 'Started in 2011 with deep knowledge of hardware concepts, diagnostics, and genuine spares.'
  },
  {
    icon: Clock,
    title: '10:00 AM – 8:30 PM (Mon–Sat)',
    desc: 'Ready to attend to walk-ins, urgent hardware repairs, and enterprise AMC visits (Sunday Holiday).'
  },
  {
    icon: Landmark,
    title: 'AMC for Banks & Institutions',
    desc: 'Annual Maintenance Contracts for Nationalised Banks, Co-op Societies, Firms & Home setups.'
  },
  {
    icon: Truck,
    title: 'Doorstep Service Across Mangaluru',
    desc: 'Door service for buying & selling used laptops/desktops and computer peripheral supply.'
  }
]

export default function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-deep/50 py-10 md:py-14">
      <div className="wrap">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className="group relative flex flex-col rounded-2xl border border-white/5 bg-deep p-6 transition duration-300 hover:border-yellow/30 hover:shadow-lg hover:shadow-orange-500/5"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric/15 to-orange/15 text-orange group-hover:scale-110 transition-transform">
                  <Icon size={24} className="text-orange group-hover:text-yellow transition-colors" />
                </div>
                <h3 className="font-display text-base font-semibold text-paper group-hover:text-yellow transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {p.desc}
                </p>
                <span className="mt-4 text-xs font-semibold text-cyan/90 opacity-0 group-hover:opacity-100 transition-opacity">
                  Raksha Pillar 0{i + 1}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
