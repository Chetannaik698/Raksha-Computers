import fs from 'node:fs'
import path from 'node:path'

const rootDir = process.cwd()

// Read existing products
const content = fs.readFileSync(path.join(rootDir, 'src/data/products.ts'), 'utf8')

// Parse products array from file
const productsJsonMatch = content.match(/export const products:\s*Product\[\]\s*=\s*(\[[\s\S]*?\])\s*$/)
if (!productsJsonMatch) {
  console.error('Could not match products array')
  process.exit(1)
}

const allProducts = JSON.parse(productsJsonMatch[1])
console.log(`Read ${allProducts.length} total products from src/data/products.ts`)

// Filter only products whose image file physically exists in public/
const validProducts = allProducts.filter((p) => {
  if (!p.image) return false
  const fullPath = path.join(rootDir, 'public', p.image)
  return fs.existsSync(fullPath)
})

console.log(`Filtered down to ${validProducts.length} products with verified physical images.`)

// Secondary images mapping
const galleryMap = {
  'p-fingers-big-pic': ['/images/products/fingers-big-picture-monitor.webp', '/images/products/fingers-big-picture-monitor-box.webp'],
  'p-fingers-opulent-case': ['/images/products/fingers-opulent-cabinet.webp', '/images/products/fingers-opulent-cabinet-box.webp', '/images/products/fingers-opulent-cabinet-rear.webp'],
  'p-frontech-450w': ['/images/products/frontech-450w-smps.webp', '/images/products/frontech-450w-smps-back.webp'],
  'p-geonix-185-mon': ['/images/products/geonix-185-monitor.webp', '/images/products/geonix-185-monitor-box.webp'],
  'p-geonix-surv-hdd': ['/images/products/geonix-surveillance-hdd.webp', '/images/products/geonix-surveillance-hdd-back.webp'],
  'p-lapcare-battery': ['/images/products/lapcare-laptop-battery.webp', '/images/products/lapcare-laptop-battery-back.webp'],
  'p-fugen-battery': ['/images/products/fugen-laptop-battery.webp', '/images/products/fugen-laptop-battery-back.webp'],
  'p-zeb-supreme': ['/images/products/zebronics-supreme-headphone.png', '/images/products/zebronics-headphone-box.webp']
}

// Clean products: only exact MRP rate, set price = mrp, no discount / strike-through
const cleaned = validProducts.map((p) => {
  const mrpVal = p.mrp || p.price
  return {
    id: p.id,
    slug: p.slug,
    name: p.name,
    category: p.category,
    kind: p.kind,
    summary: p.summary,
    description: p.description,
    specs: p.specs,
    image: p.image,
    images: galleryMap[p.id] || (p.image ? [p.image] : []),
    badge: p.badge || undefined,
    mrp: mrpVal,
    price: mrpVal,
    priceLabel: 'MRP (Incl. Taxes)',
    inStock: true,
    featured: !!p.featured
  }
})

// Categories that have active inventory
const activeCategories = [
  {
    slug: 'components',
    name: 'Components & Hardware',
    kind: 'ssd',
    blurb: 'Processors, Motherboards, GPUs, Monitors, SMPS, Internal Drives & Power Backup.'
  },
  {
    slug: 'accessories',
    name: 'Accessories & Peripherals',
    kind: 'mouse',
    blurb: 'Gaming mice, keyboards, webcams, speakers, adapters, dongles & laptop sleeves.'
  },
  {
    slug: 'desktops',
    name: 'Desktops & Cabinets',
    kind: 'tower',
    blurb: 'Custom gaming PCs, high-airflow cabinets, and assembled office workstations.'
  },
  {
    slug: 'printers',
    name: 'Printers & Inks',
    kind: 'printer',
    blurb: 'Genuine HP Ink Advantage cartridges, combo packs, and high-yield inks.'
  },
  {
    slug: 'laptops',
    name: 'Laptops',
    kind: 'laptop',
    blurb: 'Branded Dell, HP, Lenovo laptops for business, students, and everyday productivity.'
  }
]

const outputContent = `import type { Category, Product } from '../types'

export const categories: Category[] = ${JSON.stringify(activeCategories, null, 2)}

export const products: Product[] = ${JSON.stringify(cleaned, null, 2)}
`

fs.writeFileSync(path.join(rootDir, 'src/data/products.ts'), outputContent, 'utf8')
console.log(`Successfully generated src/data/products.ts with ${cleaned.length} products across ${activeCategories.length} categories.`)
