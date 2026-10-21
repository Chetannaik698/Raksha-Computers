import sharp from 'sharp'
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const publicDir = path.join(rootDir, 'public')
const prodDir = path.join(publicDir, 'images', 'products')
const brainDir = 'C:\\Users\\cheta\\.gemini\\antigravity-ide\\brain\\31988614-506c-4ed5-ac52-5f3da49bbaf1'

const mapping = [
  ['dell_silver_laptop_1792487317504.jpg', 'dell-laptop-silver.webp'],
  ['zebronics_gaming_pc_1792487835440.jpg', 'zebronics-cronus-gaming-cabinet.webp'],
  ['mesh_gaming_pc_1792487948517.jpg', 'mesh-gaming-tower-cabinet.webp'],
  ['geonix_office_pc_1792488478545.jpg', 'geonix-office-cabinet.webp'],
  ['evm_ssd_storage_1792488219124.jpg', 'evm-nvme-pcie-ssds.webp'],
  ['evm_ssd_storage_1792488219124.jpg', 'evm-sata-ssds.webp'],
  ['xpg_gaming_mouse_1792488022382.jpg', 'xpg-primer-gaming-mouse.webp'],
  ['zebronics_usb_headset_1792488123562.jpg', 'zebronics-supreme-headphone.webp'],
  ['usb_hd_webcam_1792488339241.jpg', 'usb-hd-webcam-hs48.webp'],
  ['sandisk_flash_drives_1792488582988.jpg', 'sandisk-flash-drives.webp'],
  ['wd_blue_hard_drive_1792488695587.jpg', 'wd-blue-1tb-hdd.webp'],
  ['portronics_adapters_1792488778685.jpg', 'portronics-bridge-otg.webp'],
  ['zebronics_pluto_speakers_1792488938972.jpg', 'zebronics-pluto-speakers.webp'],
  ['rocky_bluetooth_speaker_1792489010984.jpg', 'rocky-bluetooth-speaker.webp']
]

async function deploy() {
  console.log('Deploying AI-generated studio images into public/images/products...')
  for (const [srcName, destName] of mapping) {
    const srcFile = path.join(brainDir, srcName)
    const destFile = path.join(prodDir, destName)
    if (fs.existsSync(srcFile)) {
      await sharp(srcFile)
        .resize({ width: 1400, withoutEnlargement: true })
        .webp({ quality: 90 })
        .toFile(destFile)
      console.log('Processed & Deployed:', destName)
    } else {
      console.error('Source not found:', srcFile)
    }
  }
  console.log('All studio product images deployed successfully!')
}

deploy().catch(console.error)
