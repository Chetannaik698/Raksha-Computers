import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const publicDir = path.join(rootDir, 'public')
const prodDir = path.join(publicDir, 'images', 'products')
const shopDir = path.join(publicDir, 'images', 'shop')

fs.mkdirSync(prodDir, { recursive: true })
fs.mkdirSync(shopDir, { recursive: true })

const copies = [
  ['image copy 4.png', 'images/products/dell-laptop-silver.png'],
  ['image copy.png', 'images/products/xpg-primer-gaming-mouse.png'],
  ['image copy 2.png', 'images/products/zebronics-headphone-box.png'],
  ['image copy 14.png', 'images/products/zebronics-supreme-headphone.png'],
  ['image copy 9.png', 'images/products/zebronics-cronus-gaming-cabinet.png'],
  ['image copy 8.png', 'images/products/mesh-gaming-tower-cabinet.png'],
  ['image copy 7.png', 'images/products/geonix-office-cabinet.png'],
  ['image copy 11.png', 'images/products/usb-hd-webcam-hs48.png'],
  ['image copy 12.png', 'images/products/portronics-bridge-otg.png'],
  ['image copy 13.png', 'images/products/storage-ssds-harddisk.png'],
  ['image copy 6.png', 'images/products/usb-hdmi-adapter.png'],
  ['image.png', 'images/products/micro-usb-otg-adapter.png'],
  ['image copy 3.png', 'images/products/shop-audio-speakers.png'],
  ['image copy 15.png', 'images/shop/raksha-computers-storefront.png'],
  ['image copy 10.png', 'images/shop/raksha-computers-desk.png'],
  ['image copy 5.png', 'images/shop/raksha-computers-interior.png']
]

for (const [src, dst] of copies) {
  const srcPath = path.join(publicDir, src)
  const dstPath = path.join(publicDir, dst)
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, dstPath)
    console.log('Copied:', src, '->', dst)
  } else {
    console.error('Not found:', src)
  }
}
console.log('All images organized successfully!')
