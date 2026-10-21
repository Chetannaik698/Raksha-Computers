import { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { motion } from 'motion/react'
import { AlertCircle, ChevronLeft, ChevronRight, Search, SearchX } from 'lucide-react'
import PageHead from '../components/PageHead'
import ProductCard from '../components/ProductCard'
import NotFound from './NotFound'
import { listCategories, listProducts, type ProductPage, type Sort } from '../lib/api'
import { useSEO } from '../hooks/useSEO'
import { cn } from '../lib/utils'
import type { Category } from '../types'

export default function Catalogue({ mode }: { mode: 'all' | 'category' | 'search' }) {
  const { slug } = useParams()
  const [sp, setSp] = useSearchParams()
  const q = sp.get('q') ?? ''
  const sort = (sp.get('sort') === 'name' ? 'name' : 'featured') as Sort
  const page = Number(sp.get('page')) || 1
  const category = mode === 'category' ? slug : sp.get('category') ?? undefined
  const [cats, setCats] = useState<Category[]>([])
  const [data, setData] = useState<ProductPage | null>(null)
  const [error, setError] = useState(false)
  const [input, setInput] = useState(q)
  const current = cats.find((c) => c.slug === category)

  useEffect(() => { listCategories().then(setCats) }, [])
  useEffect(() => { setInput(q) }, [q])
  useEffect(() => {
    let live = true
    setData(null); setError(false)
    listProducts({ q, category, sort, page }).then((r) => live && setData(r)).catch(() => live && setError(true))
    return () => { live = false }
  }, [q, category, sort, page])

  const title = mode === 'search' ? (q ? `Results for “${q}”` : 'Search products') : current ? current.name : 'Products'
  useSEO(title, 'Browse laptops, desktops, components, and accessories available at Raksha Computers in Derebail, Mangaluru. Enquire directly on WhatsApp for best price and stock.')

  const update = (next: Record<string, string | null>) => {
    const n = new URLSearchParams(sp)
    Object.entries(next).forEach(([k, v]) => (v ? n.set(k, v) : n.delete(k)))
    if (!('page' in next)) n.delete('page')
    setSp(n)
  }
  if (mode === 'category' && cats.length && !current) return <NotFound />

  return (
    <>
      <PageHead title={title} intro={current?.blurb ?? 'Explore laptops, custom PC builds, components and accessories available at our store in Derebail, Mangaluru. Click WhatsApp Enquire for instant pricing and availability.'} />
      <section className="py-12 md:py-16">
        <div className="wrap">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <nav aria-label="Categories" className="flex flex-wrap gap-2">
              <Link to="/products" className={cn('rounded-full border px-4 py-2 text-sm font-medium transition duration-200', !category ? 'border-transparent bg-gradient-to-r from-[#FF5500] via-[#FF7700] to-[#FFB800] text-white shadow-md shadow-orange-500/30' : 'border-white/15 text-muted hover:border-orange dark:hover:border-yellow/50 hover:text-paper dark:hover:text-white')}>All</Link>
              {cats.map((c) => (
                <Link key={c.slug} to={`/products/category/${c.slug}`} aria-current={category === c.slug ? 'page' : undefined} className={cn('rounded-full border px-4 py-2 text-sm font-medium transition duration-200', category === c.slug ? 'border-transparent bg-gradient-to-r from-[#FF5500] via-[#FF7700] to-[#FFB800] text-white shadow-md shadow-orange-500/30' : 'border-white/15 text-muted hover:border-orange dark:hover:border-yellow/50 hover:text-paper dark:hover:text-white')}>{c.name}</Link>
              ))}
            </nav>
            <div className="flex flex-wrap items-center gap-3">
              <form role="search" onSubmit={(e) => { e.preventDefault(); update({ q: input.trim() || null }) }} className="relative flex-1 sm:flex-initial">
                <label htmlFor="cq" className="sr-only">Search products</label>
                <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
                <input id="cq" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search products" className="field !rounded-full !py-2.5 !pl-10 w-full sm:w-64" />
              </form>
              <label className="flex items-center gap-2 text-sm text-muted">Sort
                <select value={sort} onChange={(e) => update({ sort: e.target.value === 'name' ? 'name' : null })} className="field !w-auto !rounded-full !py-2.5">
                  <option value="featured">Featured</option><option value="name">Name A–Z</option>
                </select></label>
            </div>
          </div>

          <div className="mt-10" aria-live="polite">
            {error && <div role="alert" className="flex items-center gap-3 rounded-2xl border border-orange/40 bg-orange/10 p-6"><AlertCircle className="text-yellow" /> We could not load products. Refresh the page or call the shop.</div>}
            {!error && !data && (
              <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{Array.from({ length: 6 }).map((_, i) => <div key={i} className="h-72 animate-pulse rounded-2xl bg-edge/60" />)}</div>
            )}
            {data && data.items.length === 0 && (
              <div className="grid place-items-center rounded-3xl border border-dashed border-white/15 py-20 text-center">
                <SearchX size={36} className="text-muted" /><h2 className="mt-4 font-display text-xl">No products match</h2>
                <p className="mt-2 max-w-sm text-muted">Try another word or clear the filters. You can also ask the shop directly.</p>
                <Link to="/products" className="btn btn-line mt-6 hover:border-yellow hover:text-yellow">Clear filters</Link>
              </div>
            )}
            {data && data.items.length > 0 && (
              <>
                <p className="mb-8 text-sm text-muted">{data.total} {data.total === 1 ? 'listing' : 'listings'}</p>
                <motion.div
                  key={`${q}${category}${sort}${data.page}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {data.items.map((p, idx) => (
                    <motion.div
                      key={p.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.4), ease: [0.22, 1, 0.36, 1] }}
                    >
                      <ProductCard p={p} />
                    </motion.div>
                  ))}
                </motion.div>
                {data.pages > 1 && (
                  <nav aria-label="Pagination" className="mt-14 flex items-center justify-center gap-4">
                    <button className="btn btn-line !px-4" disabled={data.page <= 1} onClick={() => update({ page: String(data.page - 1) })} aria-label="Previous page"><ChevronLeft size={18} /></button>
                    <span className="text-sm text-muted">Page {data.page} of {data.pages}</span>
                    <button className="btn btn-line !px-4" disabled={data.page >= data.pages} onClick={() => update({ page: String(data.page + 1) })} aria-label="Next page"><ChevronRight size={18} /></button>
                  </nav>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
