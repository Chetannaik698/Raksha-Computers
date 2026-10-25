import fs from 'node:fs'
import path from 'node:path'

const rootDir = process.cwd()
const content = fs.readFileSync(path.join(rootDir, 'src/data/products.ts'), 'utf8')
const matchP = content.match(/export const products:\s*Product\[\]\s*=\s*(\[[\s\S]*?\])\s*$/)
const matchC = content.match(/export const categories:\s*Category\[\]\s*=\s*(\[[\s\S]*?\])\s*export const products/)

const products = JSON.parse(matchP[1])
const categories = JSON.parse(matchC[1])
const domain = 'https://rakshacomputers.com'

const urls = [
  '',
  '/products',
  '/services',
  '/about',
  '/contact',
  '/payment',
  '/faq',
  '/privacy',
  '/terms'
]

categories.forEach((c) => {
  urls.push(`/products/category/${c.slug}`)
})

products.forEach((p) => {
  urls.push(`/products/${p.slug}`)
})

const xmlLines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map((u) => `  <url><loc>${domain}${u}</loc></url>`),
  '</urlset>',
  ''
]

fs.writeFileSync(path.join(rootDir, 'public/sitemap.xml'), xmlLines.join('\n'), 'utf8')
console.log(`Generated public/sitemap.xml with ${urls.length} verified URLs.`)
