import sharp from 'sharp'
import path from 'node:path'
import fs from 'node:fs'

const rootDir = process.cwd()
const newProdDir = path.join(rootDir, 'public', 'images', 'newProducts')
const outDir = path.join(rootDir, 'public', 'images', 'products')

const glowSvg = `
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ff7700" stop-opacity="0.16" />
      <stop offset="50%" stop-color="#0066ff" stop-opacity="0.10" />
      <stop offset="100%" stop-color="#090e1a" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="#090e1a"/>
  <ellipse cx="400" cy="300" rx="360" ry="260" fill="url(#glow)"/>
</svg>
`

const tasks = [
  { src: 'image.png', dest: 'hammok-glory-keyboard.webp', rot: 270, maxW: 740, maxH: 480 },
  { src: 'image copy.png', dest: 'zebronics-k65-keyboard.webp', rot: 270, maxW: 740, maxH: 480 },
  { src: 'image copy 2.png', dest: 'lapcare-l50-mouse.webp', rot: 0, maxW: 680, maxH: 520 },
  { src: 'image copy 3.png', dest: 'hammok-joy11-mouse.webp', rot: 0, maxW: 680, maxH: 520 },
  { src: 'image copy 4.png', dest: 'bestor-clicklite-keyboard.webp', rot: 270, maxW: 740, maxH: 480 },
  { src: 'image copy 5.png', dest: 'dell-kb216-keyboard.webp', rot: 270, maxW: 740, maxH: 480 },
  { src: 'image copy 6.png', dest: 'dell-ms116-mouse.webp', rot: 0, maxW: 680, maxH: 520 },
  { src: 'image copy 7.png', dest: 'zebronics-scorpio-mouse.webp', rot: 0, maxW: 680, maxH: 520 },
  { src: 'image copy 8.png', dest: 'bestor-clicklite-mouse.webp', rot: 0, maxW: 680, maxH: 520 },
  { src: 'image copy 9.png', dest: 'hp-m10-mouse.webp', rot: 0, maxW: 680, maxH: 520 },
  { src: 'image copy 10.png', dest: 'hammok-spin-typec-lan.webp', rot: 0, maxW: 680, maxH: 520 },
  { src: 'image copy 11.png', dest: 'hdmi-to-vga-adapter.webp', rot: 0, maxW: 680, maxH: 520 },
  { src: 'image copy 12.png', dest: 'techie-usb3-hdd-enclosure.webp', rot: 0, maxW: 680, maxH: 520 },
  { src: 'image copy 13.png', dest: 'hammok-lily-wifi-dongle.webp', rot: 0, maxW: 680, maxH: 520 },
  { src: 'image copy 14.png', dest: 'hifocus-hs48-webcam.webp', rot: 0, maxW: 700, maxH: 520 },
  { src: 'image copy 15.png', dest: 'hm501-thermal-paste.webp', rot: 0, maxW: 680, maxH: 520 },
  { src: 'image copy 16.png', dest: 'hammok-usb2-lan-adapter.webp', rot: 0, maxW: 680, maxH: 520 },
  { src: 'image copy 17.png', dest: 'techie-typec-hdmi-adapter.webp', rot: 0, maxW: 680, maxH: 520 },
  { src: 'image copy 18.png', dest: 'hammok-solo-speaker.webp', rot: 0, maxW: 680, maxH: 520 },
  { src: 'image copy 19.png', dest: 'frontech-450w-smps.webp', rot: 0, maxW: 700, maxH: 520 },
  { src: 'image copy 20.png', dest: 'frontech-450w-smps-back.webp', rot: 0, maxW: 700, maxH: 520 },
  { src: 'image copy 21.png', dest: 'geonix-185-monitor.webp', rot: 270, maxW: 700, maxH: 520 },
  { src: 'image copy 22.png', dest: 'circle-gaming-cabinet.webp', rot: 0, maxW: 520, maxH: 520, isWhiteBg: true },
  { src: 'image copy 23.png', dest: 'fingers-big-picture-monitor-box.webp', rot: 0, maxW: 680, maxH: 520 },
  { src: 'image copy 24.png', dest: 'fingers-big-picture-monitor.webp', rot: 0, maxW: 700, maxH: 520 },
  { src: 'image copy 25.png', dest: 'fingers-opulent-cabinet.webp', rot: 0, maxW: 520, maxH: 520, isWhiteBg: true },
  { src: 'image copy 26.png', dest: 'fingers-opulent-cabinet-box.webp', rot: 270, maxW: 700, maxH: 520 },
  { src: 'image copy 27.png', dest: 'fingers-opulent-cabinet-rear.webp', rot: 270, maxW: 700, maxH: 520 },
  { src: 'image copy 28.png', dest: 'geonix-185-monitor-box.webp', rot: 270, maxW: 700, maxH: 520 },
  { src: 'image copy 29.png', dest: 'amd-ryzen-5-5600.webp', rot: 0, maxW: 680, maxH: 520 },
  { src: 'image copy 30.png', dest: 'intel-core-i5-11500.webp', rot: 0, maxW: 680, maxH: 520 },
  { src: 'image copy 31.png', dest: 'tplink-nano-wifi-adapter.webp', rot: 0, maxW: 680, maxH: 520 },
  { src: 'image copy 32.png', dest: 'lapcare-laptop-battery.webp', rot: 270, maxW: 740, maxH: 480 },
  { src: 'image copy 33.png', dest: 'lapcare-laptop-battery-back.webp', rot: 270, maxW: 740, maxH: 480 },
  { src: 'image copy 34.png', dest: 'lapcare-safari3-mouse.webp', rot: 0, maxW: 680, maxH: 520 },
  { src: 'image copy 35.png', dest: 'colorful-rtx-3050-6gb.webp', rot: 270, maxW: 700, maxH: 520 },
  { src: 'image copy 36.png', dest: 'coolermaster-650w-bronze.webp', rot: 270, maxW: 700, maxH: 520 },
  { src: 'image copy 37.png', dest: 'antesports-rx550-psu.webp', rot: 270, maxW: 700, maxH: 520 },
  { src: 'image copy 38.png', dest: 'zebronics-h61s-motherboard.webp', rot: 270, maxW: 700, maxH: 520 },
  { src: 'image copy 39.png', dest: 'corsair-cx550-psu.webp', rot: 270, maxW: 700, maxH: 520 },
  { src: 'image copy 40.png', dest: 'zebronics-z310sn-motherboard.webp', rot: 270, maxW: 700, maxH: 520 },
  { src: 'image copy 41.png', dest: 'foxin-gt740-graphics.webp', rot: 0, maxW: 680, maxH: 520 },
  { src: 'image copy 42.png', dest: 'nextron-rx580-8gb.webp', rot: 0, maxW: 680, maxH: 520 },
  { src: 'image copy 43.png', dest: 'hp-46-black-ink.webp', rot: 0, maxW: 680, maxH: 520 },
  { src: 'image copy 44.png', dest: 'hp-680-combo-pack.webp', rot: 0, maxW: 680, maxH: 520 },
  { src: 'image copy 45.png', dest: 'hp-680-color-ink.webp', rot: 0, maxW: 680, maxH: 520 },
  { src: 'image copy 46.png', dest: 'hp-680-black-ink.webp', rot: 0, maxW: 680, maxH: 520 },
  { src: 'image copy 47.png', dest: 'hp-47-black-ink.webp', rot: 0, maxW: 680, maxH: 520 },
  { src: 'image copy 48.png', dest: 'frontech-h61-motherboard.webp', rot: 270, maxW: 700, maxH: 520 },
  { src: 'image copy 49.png', dest: 'gigabyte-h610m-motherboard.webp', rot: 270, maxW: 700, maxH: 520 },
  { src: 'image copy 50.png', dest: 'biostar-h310m-motherboard.webp', rot: 270, maxW: 700, maxH: 520 },
  { src: 'image copy 51.png', dest: 'fugen-laptop-battery.webp', rot: 270, maxW: 740, maxH: 480 },
  { src: 'image copy 52.png', dest: 'fugen-laptop-battery-back.webp', rot: 270, maxW: 740, maxH: 480 },
  { src: 'image copy 53.png', dest: 'geonix-surveillance-hdd.webp', rot: 270, maxW: 700, maxH: 520 },
  { src: 'image copy 54.png', dest: 'geonix-surveillance-hdd-back.webp', rot: 270, maxW: 700, maxH: 520 },
  { src: 'image copy 55.png', dest: 'powersafe-600va-ups.webp', rot: 270, maxW: 700, maxH: 520 },
  { src: 'image copy 56.png', dest: 'hp-laptop-sleeve-bag.webp', rot: 0, maxW: 680, maxH: 520 }
]

async function buildAll() {
  console.log(`Starting studio generation for ${tasks.length} product images...`)
  let count = 0

  for (const t of tasks) {
    const srcFile = path.join(newProdDir, t.src)
    const destFile = path.join(outDir, t.dest)

    if (!fs.existsSync(srcFile)) {
      console.error(`Source not found: ${srcFile}`)
      continue
    }

    let pipeline = sharp(srcFile)
    if (t.rot !== 0) {
      pipeline = pipeline.rotate(t.rot)
    }

    if (t.isWhiteBg) {
      // Remove white background so it floats cleanly on the dark studio backdrop
      const rawRes = await pipeline
        .ensureAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true })

      const { data, info } = rawRes
      for (let i = 0; i < data.length; i += 4) {
        if (data[i] > 240 && data[i + 1] > 240 && data[i + 2] > 240) {
          data[i + 3] = 0
        }
      }
      pipeline = sharp(data, {
        raw: {
          width: info.width,
          height: info.height,
          channels: info.channels
        }
      }).png()
    }

    const prodLayer = await pipeline
      .resize({
        width: t.maxW || 700,
        height: t.maxH || 520,
        fit: 'inside',
        withoutEnlargement: true
      })
      .toBuffer()

    const meta = await sharp(prodLayer).metadata()
    const left = Math.round((800 - meta.width) / 2)
    const top = Math.round((600 - meta.height) / 2)

    const baseCanvas = await sharp(Buffer.from(glowSvg)).toBuffer()

    await sharp(baseCanvas)
      .composite([
        {
          input: prodLayer,
          top,
          left
        }
      ])
      .webp({ quality: 92 })
      .toFile(destFile)

    count++
    console.log(`[${count}/${tasks.length}] Generated & Deployed: ${t.dest}`)
  }

  console.log('ALL STUDIO IMAGES GENERATED & DEPLOYED SUCCESSFULLY!')
}

buildAll().catch(console.error)
