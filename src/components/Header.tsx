import { useEffect, useState, type FormEvent } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, Moon, Search, Sun, X } from 'lucide-react'
import { cn } from '../lib/utils'
import { useTheme } from '../hooks/useTheme'

const links = [
  ['/', 'Home'],
  ['/products', 'Products'],
  ['/services', 'Services'],
  ['/pay', 'Pay (UPI)'],
  ['/about', 'About'],
  ['/contact', 'Contact']
] as const

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2.5 sm:gap-3.5 select-none" aria-label="Raksha Computers home">
      <div className="relative shrink-0">
        <div aria-hidden className="absolute -inset-1 rounded-full bg-gradient-to-r from-orange/40 via-yellow/30 to-electric/40 blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <img
          src="/logo.png"
          alt=""
          className="relative h-11 w-12 sm:h-12 sm:w-14 shrink-0 object-contain drop-shadow-[0_2px_10px_rgba(0,102,255,0.35)] transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <span className="flex flex-col justify-center leading-none">
        <span className="font-logo text-[18px] sm:text-[21px] font-black uppercase tracking-[0.05em] text-paper group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow group-hover:to-orange group-hover:bg-clip-text transition-all duration-300">
          Raksha
        </span>
        <span className="font-logo text-[9.5px] sm:text-[11px] font-extrabold uppercase tracking-[0.28em] text-electric dark:text-cyan group-hover:text-gold transition-colors duration-200 mt-1">
          Computers
        </span>
      </span>
    </Link>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [searching, setSearching] = useState(false)
  const [q, setQ] = useState('')
  const [solid, setSolid] = useState(false)
  const { theme, toggleTheme, setTheme } = useTheme()
  const nav = useNavigate()
  const loc = useLocation()
  useEffect(() => { setOpen(false); setSearching(false) }, [loc.pathname])
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 24)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  const go = (e: FormEvent) => { e.preventDefault(); if (q.trim()) nav(`/search?q=${encodeURIComponent(q.trim())}`) }

  return (
    <header className={cn('fixed inset-x-0 top-0 z-50 transition-colors duration-300', solid || open ? 'bg-navy/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/10 dark:shadow-black/40' : 'bg-transparent')}>
      <div className="wrap flex h-[68px] sm:h-[72px] items-center justify-between gap-3 sm:gap-6">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => cn('relative py-2 text-[15px] font-medium transition-colors hover:text-yellow', isActive ? 'text-paper font-semibold' : 'text-muted')}>
              {({ isActive }) => (
                <>
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute -bottom-0.5 left-0 right-0 h-[2.5px] rounded-full bg-gradient-to-r from-orange via-yellow to-cyan shadow-[0_0_10px_rgba(255,184,0,0.7)]"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <form onSubmit={go} role="search" className="flex items-center">
            <AnimatePresence initial={false}>
              {searching && (
                <motion.input key="s" autoFocus value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search products" placeholder="Search products"
                  initial={{ width: 0, opacity: 0 }} animate={{ width: 180, opacity: 1 }} exit={{ width: 0, opacity: 0 }}
                  className="field hidden !rounded-full !py-2 md:block" />
              )}
            </AnimatePresence>
            <button type="button" aria-label="Search" onClick={() => (window.innerWidth < 768 ? nav('/search') : setSearching((s) => !s))} className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full text-muted transition hover:bg-black/5 dark:hover:bg-white/10 hover:text-yellow"><Search size={18} /></button>
          </form>

          {/* Day / Night Mode Toggle */}
          <button
            id="theme-toggle-btn"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to Day mode' : 'Switch to Night mode'}
            title={theme === 'dark' ? 'Switch to Day mode' : 'Switch to Night mode'}
            className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full text-muted transition hover:bg-black/5 dark:hover:bg-white/10 hover:text-yellow active:scale-95"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'dark' ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="pointer-events-none"
                >
                  <Sun size={18} className="text-yellow drop-shadow-[0_0_8px_rgba(255,184,0,0.6)]" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: -90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="pointer-events-none"
                >
                  <Moon size={18} className="text-electric drop-shadow-[0_0_8px_rgba(0,102,255,0.4)]" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          <Link to="/contact" className="btn btn-red hidden !py-2.5 sm:inline-flex">Enquire now</Link>
          <button className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full text-muted hover:text-paper lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((o) => !o)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav aria-label="Mobile" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-y-auto max-h-[calc(100vh-72px)] border-t border-white/10 bg-navy lg:hidden">
            <div className="wrap flex flex-col py-6 space-y-4">
              {links.map(([to, label]) => (
                <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => cn('text-lg font-medium transition-colors hover:text-yellow', isActive ? 'text-paper font-semibold' : 'text-muted')}>{label}</NavLink>
              ))}
              <Link to="/contact" className="btn btn-red justify-center">Enquire now</Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
