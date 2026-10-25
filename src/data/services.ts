import type { Service } from '../types'

export const services: Service[] = [
  {
    slug: 'hardware-amc',
    name: 'Hardware Annual Maintenance Contracts (AMC)',
    confirmed: true,
    short: 'Comprehensive AMC for Banks, Co-op Societies, Individual Firms, and Home Computers & Printers.',
    description: 'Protect your mission-critical operations with Raksha Computers’ dependable Annual Maintenance Contracts (AMC). We cater to nationalised banks, co-operative societies, private firms, and individual home offices with scheduled preventative audits, rapid fault clearance, and priority on-site support to minimize downtime.',
    includes: [
      'Dedicated AMC for Banks, Co-op Societies, Firms & Home setups',
      'Scheduled preventive checkups & routine maintenance',
      'Priority on-site breakdown response & diagnostics',
      'Coverage for Desktop PCs, Laptops, Printers, UPS & Networking',
      'Regular operating system tune-ups and virus vulnerability scans'
    ]
  },
  {
    slug: 'laptop-repair',
    name: 'Computer Sales and Repair Service',
    confirmed: true,
    short: 'Screen, battery, hinge, motherboard chip-level repair, and sales of new & refurbished systems.',
    description: 'Expert diagnostics and genuine repairs for Dell, HP, Lenovo, Asus, Acer, Apple MacBook, and custom desktops. Managed by hardware experts since 2011, we provide honest assessments, authentic replacement parts, chip-level soldering, and sales of brand-new laptops, desktops, and printers.',
    includes: [
      'Authentic replacement parts with upfront transparent quotes',
      'Display screen, hinge repair, and body panel restoration',
      'Battery replacement and power charging jack fix',
      'Motherboard chip-level circuit diagnosis & BGA repair',
      'Keyboard, touchpad & cooling fan servicing'
    ]
  },
  {
    slug: 'desktop-upgrades',
    name: 'Computer Upgradation & Optimization',
    confirmed: true,
    short: 'RAM expansion, ultra-fast NVMe/SATA SSDs, graphics card upgrades & performance tuning.',
    description: 'Revitalize sluggish laptops and desktops to lightning-fast speeds. We optimize startup times, replace mechanical hard drives with high-speed SSDs, expand system RAM, upgrade power supplies (SMPS), and perform deep system optimizations so your computer performs like brand new.',
    includes: [
      'Instant speedup via high-speed NVMe and 2.5″ SATA SSD upgrades',
      'RAM capacity expansion for multitasking and smooth operations',
      'Graphics card (GPU) and high-efficiency SMPS power supply upgrades',
      'System bloatware removal, cache clearing, and performance optimization',
      'Complete thermal cleaning and premium thermal compound reapplication'
    ]
  },
  {
    slug: 'used-desktops-laptops',
    name: 'Buying & Selling of Used Desktops and Laptops',
    confirmed: true,
    short: 'Certified pre-owned laptops & desktops with door service and honest buyback valuation.',
    description: 'Looking to buy a budget-friendly certified pre-owned laptop or sell your older computer? We offer doorstep pickup, fair market appraisals, and a hand-picked stock of thoroughly tested, sanitized, and certified refurbished desktops and laptops with shop testing warranty.',
    includes: [
      'Door service for convenient inspection, pickup & delivery',
      'Rigorous multi-point quality check on screen, battery, SSD & motherboard',
      'Fair, transparent spot valuation for your used systems',
      'Budget-friendly laptops for students, accounts, and everyday work',
      'Pre-installed fresh operating system and essential tools'
    ]
  },
  {
    slug: 'assembled-desktops',
    name: 'Assembled Custom Desktops (Best Prices)',
    confirmed: true,
    short: 'Custom-configured desktop PCs for Office, Tally Accounting, Gaming, and Engineering.',
    description: 'Custom-assembled desktop computers designed strictly as per your workload and budget. Whether you require an office billing terminal, a Tally workstation, or an ARGB gaming rig with dedicated graphics, our engineers pick perfectly compatible components and assemble them cleanly.',
    includes: [
      'Custom PC configuration tailored to exact budget and performance needs',
      'Clean cable management, optimal thermal airflow, and stress testing',
      'Dedicated builds for Tally, Vyapar, Marg, Adobe Premiere & 3D software',
      'Choice of branded cabinets, RGB halo fans, and tempered glass casings',
      'Full brand warranties on all individual components'
    ]
  },
  {
    slug: 'cctv-surveillance',
    name: 'CCTV Installations and Support (Including WiFi Cameras)',
    confirmed: true,
    short: 'Security camera installations, smart WiFi cameras, DVR/NVR configuration, and maintenance.',
    description: 'End-to-end electronic security solutions for banks, offices, shops, residential apartments, and independent homes. We provide installation, cabling, mobile live-view setup, and ongoing maintenance for high-definition dome, bullet, and wireless WiFi cameras.',
    includes: [
      'HD dome & bullet cameras with night vision and infrared support',
      'Wireless WiFi smart cameras with two-way audio & mobile alerts',
      'DVR and NVR setup with high-capacity WD Purple surveillance storage',
      'Live remote surveillance view on your smartphones and tablets',
      'AMC and routine camera servicing, lens cleaning, and cabling checks'
    ]
  },
  {
    slug: 'printers-support',
    name: 'Printer Related Installations, Sales and Support',
    confirmed: true,
    short: 'Dealing with HP, Canon, Epson, Brother printers, toner cartridges, and repair support.',
    description: 'Sales of new printers, driver configuration, network sharing, cartridge toner refilling, and hardware repair for laser, inkjet, and ink-tank printers from leading brands such as HP, Canon, Epson, and Brother.',
    includes: [
      'Sales of new All-in-One, laser, and ink-tank printers (HP, Canon, Epson, Brother)',
      'High-yield printer toner refills and authentic ink bottle supply',
      'Paper jam clearance, roller replacement & head cleaning',
      'Wi-Fi and LAN network printer sharing across office computers',
      'Preventive printer maintenance and scan-to-PC setup'
    ]
  },
  {
    slug: 'troubleshooting',
    name: 'Hardware Trouble Shooting & OS Installation',
    confirmed: true,
    short: 'Blue screen errors, no display, power SMPS faults, and clean OS installations.',
    description: 'Comprehensive troubleshooting for frustrating hardware glitches and software errors. We fix power tripping, boot loops, corrupt drivers, and install genuine Windows 10/11 and Linux operating systems with all proper device drivers.',
    includes: [
      'Clean Windows 10, Windows 11, and Linux OS setup',
      'Deep hardware diagnostics for "No Display" and random shutdowns',
      'SMPS power supply, motherboard capacitor, and circuit troubleshooting',
      'Driver installation for sound, graphics, Wi-Fi, and printers',
      'BIOS updates, CMOS battery replacements, and boot repair'
    ]
  },
  {
    slug: 'antivirus-solutions',
    name: 'Antivirus Solutions & Software Support',
    confirmed: true,
    short: 'Licensed antivirus solutions, malware removal, and Tally Accounting Software setup.',
    description: 'Protect your financial records and personal files from malware, spyware, and ransomware. We deploy licensed antivirus packages, clean active infections, and provide specialized software setup including Tally Accounting Software for business billing.',
    includes: [
      'Licensed Antivirus & Internet Security installation (Quick Heal, Kaspersky, etc.)',
      'Deep rootkit, adware, malware, and ransomware purging',
      'Tally Accounting Software installation, license activation & data backup',
      'Browser security cleanup and firewall configuration',
      'Business accounting and billing software guidance'
    ]
  },
  {
    slug: 'data-recovery',
    name: 'Data Recovery Services',
    confirmed: true,
    short: 'Critical file recovery from formatted, non-detecting, or corrupted hard drives, SSDs & pen drives.',
    description: 'Accidentally formatted your drive or experiencing a clicking, non-detecting hard disk? Our experienced engineers use safe data recovery techniques to salvage your precious memories, client records, and enterprise databases.',
    includes: [
      'Data recovery from failing, corrupted, or formatted hard disk drives (HDD)',
      'Recovery from non-detecting SATA & NVMe Solid State Drives (SSD)',
      'File retrieval from damaged USB pen drives and SD memory cards',
      'Safe transfer to external hard drive or secure cloud storage',
      'Strict confidentiality and data privacy guaranteed'
    ]
  },
  {
    slug: 'preventive-maintenance',
    name: 'Preventive Maintenance of Computers',
    confirmed: true,
    short: 'Deep thermal cleaning, fan servicing, and scheduled hardware health checks.',
    description: 'Prolong the life of your hardware and prevent sudden expensive breakdowns. Our preventive maintenance includes dust vacuuming, fan lubrication, heat-sink cleaning, thermal compound re-application, and capacitor health inspection.',
    includes: [
      'Complete internal dust removal and airflow clearance',
      'Processor & GPU thermal paste renewal with premium compounds',
      'Cooling fan lubrication and rotational noise elimination',
      'Hard disk & SSD health (S.M.A.R.T.) verification',
      'Power voltage and SMPS load testing'
    ]
  },
  {
    slug: 'online-offline-support',
    name: '12/7 Online & Offline Doorstep Support',
    confirmed: true,
    short: 'Dedicated 12/7 working hours with remote quick-fix and doorstep technician visits.',
    description: 'We believe in serving our customers whenever they need us. With 12/7 working time, we attend to urgent issues through remote assistance tools (AnyDesk, TeamViewer) or dispatch technicians directly to your home or office for on-site resolution.',
    includes: [
      '12/7 working hours — attend to customer needs at any point of time',
      'Instant remote online desktop diagnosis and troubleshooting',
      'Doorstep visits across Mangaluru for hardware checks and pickup',
      'Emergency support for retail shops, banks, and corporate offices',
      'Direct technician communication over phone and WhatsApp'
    ]
  }
]

