// Typed data-access layer. Replace the bodies with real API calls later; pages do not change.
import { categories, products } from '../data/products'
import { services } from '../data/services'
import { reviews } from '../data/reviews'
import type { Category, EnquiryPayload, Product, Review, Service } from '../types'

export type Sort = 'featured' | 'name' | 'price-asc' | 'price-desc'
export interface ProductQuery { q?: string; category?: string; sort?: Sort; page?: number; pageSize?: number }
export interface ProductPage { items: Product[]; total: number; pages: number; page: number }

const wait = (ms = 250) => new Promise((r) => setTimeout(r, ms))

export async function listCategories(): Promise<Category[]> { await wait(60); return categories }

export async function listProducts(query: ProductQuery = {}): Promise<ProductPage> {
  await wait()
  const { q = '', category, sort = 'featured', page = 1, pageSize = 12 } = query
  const term = q.trim().toLowerCase()
  let items = products.filter((p) =>
    (!category || p.category === category) &&
    (!term || [p.name, p.summary, p.category, p.description, Object.values(p.specs || {}).join(' ')].join(' ').toLowerCase().includes(term)))
  if (sort === 'name') items = [...items].sort((a, b) => a.name.localeCompare(b.name))
  else if (sort === 'price-asc') items = [...items].sort((a, b) => (a.price ?? 999999) - (b.price ?? 999999))
  else if (sort === 'price-desc') items = [...items].sort((a, b) => (b.price ?? 0) - (a.price ?? 0))
  else items = [...items].sort((a, b) => Number(!!b.featured) - Number(!!a.featured))
  const pages = Math.max(1, Math.ceil(items.length / pageSize))
  const cur = Math.min(Math.max(1, page), pages)
  return { items: items.slice((cur - 1) * pageSize, cur * pageSize), total: items.length, pages, page: cur }
}

export async function getProduct(slug: string): Promise<Product | null> {
  await wait(120); return products.find((p) => p.slug === slug) ?? null
}
export async function getRelated(p: Product): Promise<Product[]> {
  await wait(60); return products.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 3)
}
export async function listServices(): Promise<Service[]> { await wait(60); return services }
export async function getService(slug: string): Promise<Service | null> {
  await wait(60); return services.find((s) => s.slug === slug) ?? null
}

export async function listReviews(): Promise<Review[]> {
  await wait(60)
  return reviews
}

// SIMULATED. Nothing is sent or stored. Wire this to a backend endpoint later.
export async function submitEnquiry(_payload: EnquiryPayload): Promise<{ ok: true; simulated: true }> {
  await wait(700)
  return { ok: true, simulated: true }
}
