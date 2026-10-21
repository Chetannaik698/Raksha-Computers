import type { Service } from '../types'

export const services: Service[] = [
  {
    slug: 'laptop-repair',
    name: 'Laptop repair',
    confirmed: true,
    short: 'Screen, battery, hinge, motherboard chip-level repair, and liquid damage recovery.',
    description: 'Expert diagnostics and genuine repairs for Dell, HP, Lenovo, Asus, Acer, Apple MacBook, and other brands. With over 14 years of experience in Mangaluru, we provide honest assessments, authentic replacement parts, and never recommend unnecessary component changes.',
    includes: [
      'Authentic replacement parts with upfront quotes',
      'Display screen and broken hinge repair',
      'Battery replacement and power charging jack fix',
      'Motherboard chip-level circuit diagnosis & repair',
      'Keyboard, touchpad & cooling fan servicing'
    ]
  },
  {
    slug: 'desktop-upgrades',
    name: 'Desktop upgrades',
    confirmed: true,
    short: 'More memory, faster SSD storage, custom office & gaming towers.',
    description: 'Custom-assembled desktop computers designed for your workflow and budget. Whether you need an office billing station, a student PC, or a dedicated gaming workstation, we select compatible parts and assemble them cleanly. We also revitalize older computers with rapid NVMe/SATA SSDs and RAM upgrades.',
    includes: [
      'Custom PC configuration, parts selection & assembly',
      'Instant speedup via SSD and RAM upgrades',
      'Graphics card (GPU) & power supply (SMPS) upgrades',
      'Reliable office, shop billing & workstation setups'
    ]
  },
  {
    slug: 'troubleshooting',
    name: 'Troubleshooting and setup',
    confirmed: true,
    short: 'Windows & Linux setup, licensed antivirus, driver fixes & data recovery.',
    description: 'Complete operating system and software maintenance services. We install genuine Windows 10/11 or Linux, configure licensed antivirus protection, clean up malware infections, tune up slow machines, and recover critical files from corrupted drives.',
    includes: [
      'Clean Windows & Linux OS installation and setup',
      'Licensed antivirus installation & malware removal',
      'System tune-up and background bloatware cleaning',
      'Data backup & deleted/corrupted drive recovery'
    ]
  }
]
