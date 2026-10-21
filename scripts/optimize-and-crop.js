import sharp from 'sharp'
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const publicDir = path.join(rootDir, 'public')
const prodDir = path.join(publicDir, 'images', 'products')
const shopDir = path.join(publicDir, 'images', 'shop')

async function processAll() {
  console.log('Optimizing and cropping images with refined coordinates...')

  // 1. Dell Laptop (counter photo)
  await sharp(path.join(prodDir, 'dell-laptop-silver.png'))
    .extract({ left: 40, top: 600, width: 1120, height: 950 })
    .webp({ quality: 90 })
    .toFile(path.join(prodDir, 'dell-laptop-silver.webp'))

  // 2. Storage Master Image Crops
  const storageImg = path.join(prodDir, 'storage-ssds-harddisk.png')

  // Sandisk Flash Drives (top-left)
  await sharp(storageImg)
    .extract({ left: 30, top: 130, width: 550, height: 490 })
    .webp({ quality: 90 })
    .toFile(path.join(prodDir, 'sandisk-flash-drives.webp'))

  // WD Blue 1TB HDD (top-right)
  await sharp(storageImg)
    .extract({ left: 590, top: 110, width: 590, height: 500 })
    .webp({ quality: 90 })
    .toFile(path.join(prodDir, 'wd-blue-1tb-hdd.webp'))

  // EVM 2.5" SATA SSDs (bottom-left)
  await sharp(storageImg)
    .extract({ left: 30, top: 480, width: 800, height: 680 })
    .webp({ quality: 90 })
    .toFile(path.join(prodDir, 'evm-sata-ssds.webp'))

  // EVM M.2 NVMe PCIe SSDs (bottom-right)
  await sharp(storageImg)
    .extract({ left: 840, top: 480, width: 830, height: 680 })
    .webp({ quality: 90 })
    .toFile(path.join(prodDir, 'evm-nvme-pcie-ssds.webp'))

  // 3. Audio & SMPS Shelf Crops (1728 x 2304)
  const audioImg = path.join(prodDir, 'shop-audio-speakers.png')

  // Rocky Bluetooth Speaker (top shelf)
  await sharp(audioImg)
    .extract({ left: 240, top: 580, width: 580, height: 550 })
    .webp({ quality: 90 })
    .toFile(path.join(prodDir, 'rocky-bluetooth-speaker.webp'))

  // Zebronics Pluto 2.0 Speakers (middle/bottom left shelf)
  await sharp(audioImg)
    .extract({ left: 0, top: 1140, width: 850, height: 1050 })
    .webp({ quality: 90 })
    .toFile(path.join(prodDir, 'zebronics-pluto-speakers.webp'))

  // Zebronics SMPS Power Supply (bottom right shelf)
  await sharp(audioImg)
    .extract({ left: 850, top: 1500, width: 620, height: 650 })
    .webp({ quality: 90 })
    .toFile(path.join(prodDir, 'zebronics-450w-smps.webp'))

  console.log('Refined crops generated successfully!')
}

processAll().catch(console.error)
