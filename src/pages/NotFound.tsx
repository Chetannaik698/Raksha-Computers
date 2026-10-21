import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'

export default function NotFound() {
  useSEO('Page not found', 'This page could not be found.')
  return (
    <section className="grid min-h-[80vh] place-items-center px-5 pt-24 text-center">
      <div>
        <p className="display text-[clamp(5rem,20vw,12rem)] text-edge">404</p>
        <h1 className="-mt-6 font-display text-2xl md:text-3xl">This page is offline</h1>
        <p className="mx-auto mt-4 max-w-sm text-muted">The link may be wrong or the page may have moved.</p>
        <div className="mt-8 flex justify-center gap-3"><Link to="/" className="btn btn-red">Go home</Link><Link to="/products" className="btn btn-line">Browse products</Link></div>
      </div>
    </section>
  )
}
