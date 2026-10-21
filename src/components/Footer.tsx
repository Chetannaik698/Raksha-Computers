import { Link } from 'react-router-dom'
import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { Logo } from './Header'
import { MAPS_LINK, SITE } from '../data/site'
import { waLink } from '../lib/utils'

export default function Footer() {
  const col = 'space-y-3 text-[15px] text-muted'
  return (
    <footer className="border-t border-white/10 bg-deep">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="space-y-5">
          <Logo />
          <p className="max-w-xs text-[15px] text-muted">Computers, laptops and accessories in Derebail, Mangaluru. Ask before you buy.</p>
        </div>
        <div><h2 className="mb-4 font-display text-sm font-semibold tracking-wider uppercase text-paper">Shop</h2><ul className={col}>
          <li><Link className="hover:text-yellow transition-colors" to="/products">All products</Link></li>
          <li><Link className="hover:text-yellow transition-colors" to="/products/category/laptops">Laptops</Link></li>
          <li><Link className="hover:text-yellow transition-colors" to="/products/category/desktops">Desktops</Link></li>
          <li><Link className="hover:text-yellow transition-colors" to="/products/category/components">Components</Link></li></ul></div>
        <div><h2 className="mb-4 font-display text-sm font-semibold tracking-wider uppercase text-paper">Company</h2><ul className={col}>
          <li><Link className="hover:text-yellow transition-colors" to="/services">Services</Link></li>
          <li><Link className="hover:text-yellow transition-colors" to="/about">About</Link></li>
          <li><Link className="hover:text-yellow transition-colors" to="/pay">Pay via UPI</Link></li>
          <li><Link className="hover:text-yellow transition-colors" to="/faq">FAQ</Link></li>
          <li><Link className="hover:text-yellow transition-colors" to="/privacy">Privacy</Link></li>
          <li><Link className="hover:text-yellow transition-colors" to="/terms">Terms</Link></li></ul></div>
        <div><h2 className="mb-4 font-display text-sm font-semibold tracking-wider uppercase text-paper">Visit or call</h2><ul className={col}>
          <li className="flex gap-2"><MapPin size={17} className="mt-0.5 shrink-0 text-orange" /><a href={MAPS_LINK} target="_blank" rel="noreferrer" className="hover:text-yellow transition-colors">{SITE.addressLine}, {SITE.addressArea}</a></li>
          <li className="flex gap-2"><Phone size={17} className="text-orange" /><a href={SITE.phoneHref} className="hover:text-yellow transition-colors">{SITE.phone}</a></li>
          <li className="flex gap-2"><MessageCircle size={17} className="text-yellow" /><a href={waLink('Hello Raksha Computers')} target="_blank" rel="noreferrer" className="hover:text-yellow transition-colors">WhatsApp</a></li></ul></div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-[13px] text-muted">
        <div className="wrap">© {new Date().getFullYear()} Raksha Computers. Sales and Services of Computers, Laptops & Printers • Derebail, Mangaluru.</div>
      </div>
    </footer>
  )
}
