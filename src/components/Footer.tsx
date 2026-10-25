import { Link } from 'react-router-dom'
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Logo } from './Header'
import { MAPS_LINK, SITE } from '../data/site'
import { waLink } from '../lib/utils'

export default function Footer() {
  const col = 'space-y-3 text-[15px] text-muted'
  return (
    <footer className="border-t border-white/10 bg-deep">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr_1.3fr]">
        <div className="space-y-5">
          <Logo />
          <p className="max-w-xs text-[14px] text-muted leading-relaxed">
            Computer Hardware Sales and Services started in 2011. Managed by experts with strong knowledge of hardware concepts.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-3 py-1 text-xs font-semibold text-orange dark:text-yellow">
            <Clock size={13} />
            <span>Working Time: 12/7 Support</span>
          </div>
        </div>

        <div>
          <h2 className="mb-4 font-display text-sm font-semibold tracking-wider uppercase text-paper">Products</h2>
          <ul className={col}>
            <li><Link className="hover:text-yellow transition-colors" to="/products">All Products</Link></li>
            <li><Link className="hover:text-yellow transition-colors" to="/products/category/laptops">Branded Laptops</Link></li>
            <li><Link className="hover:text-yellow transition-colors" to="/products/category/desktops">Assembled Desktops</Link></li>
            <li><Link className="hover:text-yellow transition-colors" to="/products/category/used-computers">Used Laptops/PCs (Door)</Link></li>
            <li><Link className="hover:text-yellow transition-colors" to="/products/category/printers">Printers & Toners</Link></li>
            <li><Link className="hover:text-yellow transition-colors" to="/products/category/cctv">CCTV & WiFi Cameras</Link></li>
            <li><Link className="hover:text-yellow transition-colors" to="/products/category/software-furniture">Tally & Furniture</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-display text-sm font-semibold tracking-wider uppercase text-paper">Services & Co.</h2>
          <ul className={col}>
            <li><Link className="hover:text-yellow transition-colors" to="/services">All Services</Link></li>
            <li><Link className="hover:text-yellow transition-colors" to="/services/hardware-amc">Hardware AMC</Link></li>
            <li><Link className="hover:text-yellow transition-colors" to="/about">About Us & Team</Link></li>
            <li><Link className="hover:text-yellow transition-colors" to="/contact">Contact & Map</Link></li>
            <li><Link className="hover:text-yellow transition-colors" to="/pay">Pay via UPI</Link></li>
            <li><Link className="hover:text-yellow transition-colors" to="/faq">FAQs</Link></li>
            <li><Link className="hover:text-yellow transition-colors" to="/terms">Terms</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-display text-sm font-semibold tracking-wider uppercase text-paper">Visit or Connect</h2>
          <ul className={col}>
            <li className="flex gap-2">
              <MapPin size={17} className="mt-0.5 shrink-0 text-orange" />
              <a href={MAPS_LINK} target="_blank" rel="noreferrer" className="hover:text-yellow transition-colors leading-snug">
                {SITE.addressLine}, {SITE.addressArea}
              </a>
            </li>
            <li className="flex gap-2">
              <Phone size={17} className="text-orange shrink-0" />
              <a href={SITE.phoneHref} className="hover:text-yellow transition-colors font-medium">
                {SITE.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail size={17} className="text-orange shrink-0" />
              <a href={SITE.emailHref} className="hover:text-yellow transition-colors">
                {SITE.email}
              </a>
            </li>
            <li className="flex gap-2">
              <MessageCircle size={17} className="text-emerald-400 shrink-0" />
              <a href={waLink('Hello RAKSHA COMPUTERS')} target="_blank" rel="noreferrer" className="hover:text-yellow transition-colors">
                WhatsApp Us (9900603818)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-[13px] text-muted">
        <div className="wrap">
          © {new Date().getFullYear()} RAKSHA COMPUTERS. Computer Hardware Sales & Services • Annual Maintenance Contracts (AMC) • Derebail, Mangaluru-575008.
        </div>
      </div>
    </footer>
  )
}
