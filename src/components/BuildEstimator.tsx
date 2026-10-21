import { useState } from 'react'
import { motion } from 'motion/react'
import { Check, Cpu, HardDrive, MessageCircle, Monitor, Sparkles, Zap } from 'lucide-react'
import { waLink } from '../lib/utils'

interface PresetTier {
  id: string
  name: string
  badge: string
  minBudget: number
  maxBudget: number
  defaultBudget: number
  cpu: string
  gpu: string
  ram: string
  storage: string
  cooling: string
  psu: string
  targetUse: string
  fpsTarget: string
}

const presets: PresetTier[] = [
  {
    id: 'office',
    name: 'Office & Everyday',
    badge: 'Budget Friendly',
    minBudget: 20000,
    maxBudget: 35000,
    defaultBudget: 28000,
    cpu: 'Intel Core i3 12th/13th Gen',
    gpu: 'Intel UHD 730 Integrated Graphics',
    ram: '8GB - 16GB DDR4 3200MHz',
    storage: '512GB Fast NVMe M.2 SSD',
    cooling: 'Quiet Air Cooler',
    psu: '450W 80+ Bronze Certified',
    targetUse: 'MS Office, Tally, Multi-tab Browsing, YouTube, Billing software',
    fpsTarget: 'Smooth 1080p Desktop UI'
  },
  {
    id: 'student',
    name: 'Student & Coding',
    badge: 'Best Value',
    minBudget: 35000,
    maxBudget: 58000,
    defaultBudget: 48000,
    cpu: 'AMD Ryzen 5 5600G / Intel Core i5 12400',
    gpu: 'Radeon Vega 7 / GTX 1650 (Optional)',
    ram: '16GB Dual-Channel DDR4 3200MHz',
    storage: '1TB PCIe 4.0 NVMe SSD',
    cooling: 'Tower Air Cooler',
    psu: '500W 80+ Bronze Certified',
    targetUse: 'VS Code, Python, Android Studio, Photoshop, Casual Esports',
    fpsTarget: '60+ FPS in CS2 & Valorant'
  },
  {
    id: 'esports',
    name: '1080p AAA Gaming',
    badge: 'Gamer Favourite',
    minBudget: 58000,
    maxBudget: 90000,
    defaultBudget: 75000,
    cpu: 'AMD Ryzen 5 5600 / Intel Core i5 13400F',
    gpu: 'NVIDIA GeForce RTX 4060 8GB GDDR6',
    ram: '16GB - 32GB DDR4 3600MHz RGB',
    storage: '1TB Gen4 NVMe (Up to 5000MB/s)',
    cooling: 'Dual Heatpipe ARGB Air Cooler',
    psu: '650W 80+ Bronze Certified',
    targetUse: 'GTA V, Cyberpunk 2077, Modern AAA titles with DLSS 3',
    fpsTarget: '100+ FPS High Settings'
  },
  {
    id: 'pro',
    name: '1440p High-FPS & 3D',
    badge: 'High Performance',
    minBudget: 90000,
    maxBudget: 150000,
    defaultBudget: 125000,
    cpu: 'AMD Ryzen 5 7600X / Intel Core i5 14600KF',
    gpu: 'NVIDIA GeForce RTX 4070 SUPER 12GB',
    ram: '32GB High-Speed DDR5 6000MHz CL30',
    storage: '1TB - 2TB Gen4 NVMe (7400MB/s)',
    cooling: '240mm AIO Liquid Cooler',
    psu: '750W 80+ Gold Fully Modular',
    targetUse: '1440p Ultra Ray Tracing, 4K Premiere Pro, Blender 3D, Unreal Engine',
    fpsTarget: '120+ FPS 1440p Ultra'
  },
  {
    id: 'enthusiast',
    name: '4K Creative Studio & Beast',
    badge: 'Enthusiast Flagship',
    minBudget: 150000,
    maxBudget: 250000,
    defaultBudget: 195000,
    cpu: 'AMD Ryzen 7 7800X3D / Intel Core i7 14700K',
    gpu: 'NVIDIA GeForce RTX 4070 Ti SUPER 16GB',
    ram: '64GB Dual-Channel DDR5 6000MHz RGB',
    storage: '2TB + 2TB Gen4 Ultra M.2 SSDs',
    cooling: '360mm ARGB Dual-Chamber Liquid Cooler',
    psu: '850W - 1000W 80+ Gold ATX 3.0',
    targetUse: '4K Max Settings Gaming, 8K Video Rendering, AI Model Inference',
    fpsTarget: '144+ FPS 4K Ray Tracing'
  }
]

export default function BuildEstimator() {
  const [selectedPreset, setSelectedPreset] = useState<PresetTier>(presets[2]) // Default to 1080p Gaming
  const [budget, setBudget] = useState<number>(presets[2].defaultBudget)

  const handleSelectPreset = (p: PresetTier) => {
    setSelectedPreset(p)
    setBudget(p.defaultBudget)
  }

  const handleSliderChange = (val: number) => {
    setBudget(val)
    const matching = presets.find((p) => val >= p.minBudget && val <= p.maxBudget)
    if (matching && matching.id !== selectedPreset.id) {
      setSelectedPreset(matching)
    }
  }

  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val)
  }

  const waMessage = `Hello Raksha Computers, I used your website PC Estimator for a ${selectedPreset.name} build with target budget ${formatPrice(budget)}. Recommended specs: ${selectedPreset.cpu} with ${selectedPreset.gpu} and ${selectedPreset.ram}. Can you share real component availability and a quote?`

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy via-deep to-navy py-20 md:py-32">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 h-96 w-96 rounded-full bg-orange/15 blur-[140px]" />
      <div aria-hidden className="pointer-events-none absolute right-10 bottom-10 h-80 w-80 rounded-full bg-electric/20 blur-[130px]" />

      <div className="wrap relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange">
            <Sparkles size={14} className="text-yellow" /> Interactive PC Matcher
          </span>
          <h2 className="display mt-5 text-[clamp(2rem,4.5vw,3.6rem)]">
            Custom PC Budget Estimator
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg">
            Tell us your budget or your everyday workflow. See what parts fit, then ask our shop in Derebail to verify pricing and build it with clean cable management.
          </p>
        </div>

        {/* Preset Selector Buttons */}
        <div className="scroll-x mt-10 flex gap-2.5 overflow-x-auto pb-4 md:justify-center">
          {presets.map((p) => {
            const active = p.id === selectedPreset.id
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => handleSelectPreset(p)}
                className={`group flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 ${
                  active
                    ? 'border-transparent bg-gradient-to-r from-[#FF5500] via-[#FF7700] to-[#FFB800] text-white shadow-lg shadow-orange-500/30'
                    : 'border-white/10 bg-deep text-muted hover:border-yellow/50 hover:text-paper'
                }`}
              >
                <span>{p.name}</span>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${active ? 'bg-black/25 text-white' : 'bg-edge text-muted group-hover:text-paper'}`}>
                  {p.badge}
                </span>
              </button>
            )
          })}
        </div>

        {/* Estimator Interactive Box */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr] items-stretch">
          {/* Left: Interactive Budget Slider & Tier Summary */}
          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-deep/80 p-6 md:p-10 backdrop-blur-md shadow-xl">
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted">Estimated Target Budget</span>
                <span className="font-display text-2xl font-bold text-gradient-logo md:text-3xl">
                  {formatPrice(budget)}
                </span>
              </div>

              {/* Slider */}
              <div className="mt-6">
                <input
                  type="range"
                  min="20000"
                  max="250000"
                  step="5000"
                  value={budget}
                  onChange={(e) => handleSliderChange(Number(e.target.value))}
                  aria-label="Target PC build budget"
                  className="h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-edge accent-orange focus:outline-none"
                />
                <div className="mt-3 flex justify-between text-xs text-muted font-medium">
                  <span>₹20,000 (Office)</span>
                  <span>₹1,00,000 (1440p)</span>
                  <span>₹2,50,000+ (Beast)</span>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/5 bg-navy/60 p-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan">
                  <Monitor size={15} /> Target Performance
                </div>
                <p className="mt-2 text-base font-bold text-paper">
                  {selectedPreset.fpsTarget}
                </p>
                <p className="mt-1.5 text-xs text-muted">
                  Ideal for: {selectedPreset.targetUse}
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href={waLink(waMessage)}
                target="_blank"
                rel="noreferrer"
                className="btn btn-red flex-1 justify-center !py-3 text-sm font-bold shadow-md shadow-orange-500/30"
              >
                <MessageCircle size={18} /> Enquire on WhatsApp
              </a>
              <a
                href="/contact"
                className="btn btn-line justify-center !py-3 text-sm hover:border-yellow hover:text-yellow"
              >
                Request Custom Quote
              </a>
            </div>
          </div>

          {/* Right: Hardware Specification Highlights Card */}
          <div className="relative overflow-hidden rounded-3xl border border-orange/20 bg-gradient-to-br from-edge/50 via-deep to-deep p-6 md:p-10 shadow-2xl">
            <div aria-hidden className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-orange/20 to-yellow/20 blur-3xl" />

            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <span className="font-display text-lg font-bold text-paper">
                  Recommended Specs
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-orange/40 bg-orange/10 px-3 py-1 text-xs font-bold text-orange">
                  <Zap size={13} className="text-yellow" /> Balanced Build
                </span>
              </div>

              {/* Specs Rows */}
              <div className="mt-6 space-y-3.5 text-sm">
                <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-navy/40 p-3.5">
                  <div className="rounded-lg bg-orange/15 p-2 text-orange shrink-0">
                    <Cpu size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-muted block">Processor (CPU)</span>
                    <span className="font-semibold text-paper text-sm">{selectedPreset.cpu}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-navy/40 p-3.5">
                  <div className="rounded-lg bg-electric/15 p-2 text-electric dark:text-cyan shrink-0">
                    <Monitor size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-muted block">Graphics Card (GPU)</span>
                    <span className="font-semibold text-paper text-sm">{selectedPreset.gpu}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-navy/40 p-3.5">
                  <div className="rounded-lg bg-yellow/15 p-2 text-yellow shrink-0">
                    <Zap size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-muted block">System Memory (RAM)</span>
                    <span className="font-semibold text-paper text-sm">{selectedPreset.ram}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-navy/40 p-3.5">
                  <div className="rounded-lg bg-edge p-2 text-muted shrink-0">
                    <HardDrive size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-muted block">High-Speed Storage</span>
                    <span className="font-semibold text-paper text-sm">{selectedPreset.storage}</span>
                  </div>
                </div>
              </div>

              {/* Guarantee snippet */}
              <div className="mt-6 flex items-center gap-2 text-xs text-muted">
                <Check size={16} className="text-orange shrink-0" />
                <span>Full parts compatibility & assembly confirmed before booking.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
