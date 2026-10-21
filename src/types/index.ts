export type ArtKind = 'gpu' | 'laptop' | 'tower' | 'ram' | 'keyboard' | 'mouse' | 'ssd' | 'monitor' | 'accessories'
export interface Category { slug: string; name: string; kind: ArtKind; blurb: string }
export interface Product {
  id: string
  slug: string
  name: string
  category: string
  kind: ArtKind
  summary: string
  description: string
  specs: Record<string, string>
  image?: string
  images?: string[]
  badge?: string
  inStock?: boolean
  featured?: boolean
  demo?: boolean
}
export interface Service {
  slug: string; name: string; short: string; description: string
  includes: string[]; confirmed: boolean
}
export interface Review {
  id: string
  author: string
  rating: number
  date: string
  comment: string
  verified: boolean
}
export interface Faq { q: string; a: string }
export type EnquiryType = 'product' | 'service' | 'general'
export interface EnquiryPayload {
  type: EnquiryType; name: string; phone: string; email?: string; subject?: string; message: string
}
