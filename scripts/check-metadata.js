import sharp from 'sharp'
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const publicDir = path.join(rootDir, 'public')
const prodDir = path.join(publicDir, 'images', 'products')
const shopDir = path.join(publicDir, 'images', 'shop')

async function main() {
  const files = [
    'images/products/dell-laptop-silver.png',
    'images/products/xpg-primer-gaming-mouse.png',
    'images/products/zebronics-supreme-headphone.png',
    'images/products/zebronics-cronus-gaming-cabinet.png',
    'images/products/mesh-gaming-tower-cabinet.png',
    'images/products/geonix-office-cabinet.png',
    'images/products/usb-hd-webcam-hs48.png',
    'images/products/portronics-bridge-otg.png',
    'images/products/storage-ssds-harddisk.png',
    'images/products/usb-hdmi-adapter.png',
    'images/products/micro-usb-otg-adapter.png',
    'images/products/shop-audio-speakers.png',
    'images/shop/raksha-computers-storefront.png',
    'images/shop/raksha-computers-desk.png',
    'images/shop/raksha-computers-interior.png'
  ]

  for (const f of files) {
    const full = path.join(publicDir, f)
    if (fs.existsSync(full)) {
      const meta = await sharp(full).metadata()
      console.log(f, `${meta.width}x${meta.height}`, `${meta.format}`, `${(fs.statSync(full).size / 1024 / 1024).toFixed(2)} MB`)
    }
  }
}

main().catch(console.error)
