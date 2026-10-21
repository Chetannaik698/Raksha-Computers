import type { Category, Product } from '../types'

export const categories: Category[] = [
  { slug: 'laptops', name: 'Laptops', kind: 'laptop', blurb: 'Everyday, student and performance machines in shop stock.' },
  { slug: 'desktops', name: 'Desktops', kind: 'tower', blurb: 'Office towers, gaming rigs and custom performance builds.' },
  { slug: 'components', name: 'Components', kind: 'ssd', blurb: 'High-speed SSDs, hard drives, power supplies and upgrades.' },
  { slug: 'accessories', name: 'Accessories', kind: 'mouse', blurb: 'Gaming mice, USB headsets, HD webcams, speakers and adapters.' }
]

export const products: Product[] = [
  // LAPTOPS
  {
    id: 'p-dell-15',
    slug: 'dell-15-slim-laptop-silver',
    name: 'Dell 15″ Slim Laptop (Silver Edition)',
    category: 'laptops',
    kind: 'laptop',
    featured: true,
    badge: 'In Shop Stock',
    image: '/images/products/dell-laptop-silver.webp',
    images: ['/images/products/dell-laptop-silver.webp', '/images/products/dell-laptop-silver-full.webp'],
    summary: 'Sleek silver Dell laptop for office productivity, study, and everyday multitasking.',
    description: 'Genuine Dell laptop with a refined silver finish, narrow-bezel anti-glare display, and responsive ergonomic keyboard. Perfect for students, office work, and remote professionals. Available directly in-store at Raksha Computers.',
    specs: {
      'Brand': 'Dell',
      'Display': '15.6″ Full HD Anti-Glare',
      'Design': 'Sleek Silver Finish with Precision Touchpad',
      'Connectivity': 'Wi-Fi, Bluetooth, HDMI, USB 3.2, Audio Combo',
      'Availability': 'Available at Derebail shop'
    }
  },

  // DESKTOPS
  {
    id: 'p-zeb-cronus',
    slug: 'zebronics-cronus-rgb-gaming-tower',
    name: 'Zebronics Cronus ARGB Gaming PC',
    category: 'desktops',
    kind: 'tower',
    featured: true,
    badge: 'Custom Rig',
    image: '/images/products/zebronics-cronus-gaming-cabinet.webp',
    summary: 'High-airflow gaming desktop in Zebronics Cronus chassis with triple halo ARGB ring fans and tempered glass.',
    description: 'Custom-built gaming and video editing PC housed in the striking Zebronics Cronus chassis. Features 3 vibrant rainbow ARGB ring fans, transparent tempered glass showcase panel, and optimized airflow routing. Configure with your preferred processor and graphics card.',
    specs: {
      'Chassis': 'Zebronics Cronus Mid Tower',
      'Cooling': '3× 120mm ARGB Ring Intake Fans',
      'Side Panel': 'Full-View Tempered Glass',
      'Front I/O': 'USB 3.0, Dual USB 2.0, HD Audio / Mic',
      'Customization': 'Processor, RAM & GPU tailored to your budget'
    }
  },
  {
    id: 'p-mesh-tower',
    slug: 'high-airflow-mesh-gaming-desktop',
    name: 'High-Airflow Dual-Fan Mesh Gaming PC',
    category: 'desktops',
    kind: 'tower',
    featured: true,
    badge: 'Max Airflow',
    image: '/images/products/mesh-gaming-tower-cabinet.webp',
    summary: 'Performance desktop build featuring full-front metal mesh with dual large intake fans for cool thermals.',
    description: 'Engineered for sustained gaming sessions and 3D rendering. The high-permeability front mesh grill paired with dual high-diameter fans ensures optimal thermal stability for your components during long hours.',
    specs: {
      'Chassis': 'High-Airflow Mesh Front Tower',
      'Cooling': 'Dual High-Diameter Intake Fans',
      'Motherboard': 'ATX, Micro-ATX Support',
      'Expansion': 'Multiple 2.5″ SSD & 3.5″ HDD Mounts',
      'Use': 'Gaming, Video Editing & Creative Work'
    }
  },
  {
    id: 'p-geonix-tower',
    slug: 'geonix-office-desktop-pc',
    name: 'Geonix Office & Business Desktop PC',
    category: 'desktops',
    kind: 'tower',
    featured: false,
    badge: 'Office & Billing',
    image: '/images/products/geonix-office-cabinet.webp',
    summary: 'Durable, compact desktop computer built in Geonix chassis for offices, billing counters, and schools.',
    description: 'A dependable workhorse built for business operations, accounting software (Tally, Vyapar, Marg), retail billing, and documentation. Low power consumption, compact footprint, and whisper-quiet operation.',
    specs: {
      'Chassis': 'Geonix "Made to Perform" Cabinet',
      'Form Factor': 'Micro-ATX Compact Tower',
      'Front Ports': 'Dual USB 3.0, Dual USB 2.0, Front Audio & Mic',
      'Suitability': 'Accounting, Office Work, Billing Counters'
    }
  },

  // COMPONENTS
  {
    id: 'p-evm-sata',
    slug: 'evm-2-5-sata-ssd-128gb-512gb',
    name: 'EVM 2.5″ High-Speed SATA III SSD (128GB / 512GB)',
    category: 'components',
    kind: 'ssd',
    featured: true,
    badge: '5-Year Warranty',
    image: '/images/products/evm-sata-ssds.webp',
    images: ['/images/products/evm-sata-ssds.webp', '/images/products/storage-ssds-harddisk.webp'],
    summary: 'Breathe new life into your PC or laptop with 550MB/s 3D NAND SATA SSDs.',
    description: 'Upgrade your slow laptop or desktop with authentic EVM 2.5-inch SATA III SSDs. Experience 10x faster boot times and responsive application launches compared to traditional mechanical hard drives. Backed by a 5-year manufacturer warranty.',
    specs: {
      'Brand': 'EVM (3D NAND)',
      'Form Factor': '2.5-inch SATA III 6Gb/s',
      'Sequential Read': 'Up to 550 MB/s',
      'Sequential Write': 'Up to 500 MB/s',
      'Warranty': '5 Years Manufacturer Replacement Warranty'
    }
  },
  {
    id: 'p-evm-nvme',
    slug: 'evm-m2-nvme-pcie-gen3-ssd-512gb',
    name: 'EVM M.2 NVMe PCIe Gen 3×4 High-Speed SSD (512GB)',
    category: 'components',
    kind: 'ssd',
    featured: true,
    badge: 'Up to 3200 MB/s',
    image: '/images/products/evm-nvme-pcie-ssds.webp',
    images: ['/images/products/evm-nvme-pcie-ssds.webp', '/images/products/storage-ssds-harddisk.webp'],
    summary: 'Lightning-speed M.2 2280 NVMe SSD engineered for gaming, fast render times and instant boot.',
    description: 'Blazing-fast PCIe Gen 3x4 NVMe drive delivering read speeds up to 3200 MB/s and write speeds up to 2100 MB/s. Compact M.2 2280 form factor fits modern laptops and desktop motherboards. Made in India with 5-year warranty.',
    specs: {
      'Brand': 'EVM',
      'Interface': 'M.2 NVMe PCIe Gen 3×4 (3D NAND)',
      'Read Speed': 'Up to 3,200 MB/s',
      'Write Speed': 'Up to 2,100 MB/s',
      'Warranty': '5 Years Manufacturer Warranty'
    }
  },
  {
    id: 'p-wd-blue',
    slug: 'western-digital-wd-blue-1tb-desktop-hdd',
    name: 'Western Digital (WD Blue) 1.0TB Desktop Hard Drive',
    category: 'components',
    kind: 'ssd',
    featured: false,
    badge: 'Bulk Storage',
    image: '/images/products/wd-blue-1tb-hdd.webp',
    summary: 'High-reliability 1.0TB 3.5-inch 7200 RPM internal hard drive for documents, CCTV backups, and games.',
    description: 'Original Western Digital Blue 1TB internal SATA hard drive with 64MB cache. Ideal for expanding storage, secondary storage in desktop PCs, or CCTV DVR storage.',
    specs: {
      'Brand': 'Western Digital (WD Blue)',
      'Capacity': '1.0 TB (1000 GB)',
      'Interface': 'SATA 6 Gb/s, 64MB Cache',
      'Class': '7200 RPM Class',
      'Form Factor': '3.5-inch Internal Desktop Drive'
    }
  },
  {
    id: 'p-zeb-smps',
    slug: 'zebronics-zeb-n450w-power-supply-smps',
    name: 'Zebronics ZEB-N450W Economy Power Supply (SMPS)',
    category: 'components',
    kind: 'ram',
    featured: false,
    badge: 'Genuine Spares',
    image: '/images/products/zebronics-450w-smps.webp',
    summary: 'Reliable 450W desktop ATX power supply with 20+4 pin and SATA connectors.',
    description: 'Zebronics ZEB-N450W (DSATA) economy series SMPS. Provides stable DC voltages (+3.3V, +5V, +12V) with built-in overload protection for office PCs, home desktops, and PSU replacements.',
    specs: {
      'Brand': 'Zebronics',
      'Model': 'ZEB-N450W (DSATA)',
      'AC Input': '230V 50Hz 6A',
      'Motherboard': '20+4 Pin Connector',
      'Form Factor': 'Standard ATX'
    }
  },

  // ACCESSORIES
  {
    id: 'p-xpg-primer',
    slug: 'xpg-primer-rgb-gaming-mouse',
    name: 'ADATA XPG PRIMER RGB Optical Gaming Mouse',
    category: 'accessories',
    kind: 'mouse',
    featured: true,
    badge: 'RGB Gaming',
    image: '/images/products/xpg-primer-gaming-mouse.webp',
    summary: 'High-precision RGB gaming mouse with textured side grips and ultra-durable tactile switches.',
    description: 'Built for gamers seeking precision and comfort. Features a high-accuracy optical sensor, dynamic RGB lighting strip, tactile braided cable, and textured side grips for marathon gaming sessions.',
    specs: {
      'Brand': 'ADATA XPG',
      'Model': 'PRIMER',
      'Lighting': 'Dynamic RGB Lighting Strip',
      'Cable': 'Braided ultra-flexible cable',
      'Design': 'Ergonomic right-handed contour'
    }
  },
  {
    id: 'p-zeb-supreme',
    slug: 'zebronics-zeb-supreme-usb-headphone-with-mic',
    name: 'Zebronics ZEB-SUPREME USB Headphone with Mic',
    category: 'accessories',
    kind: 'accessories',
    featured: true,
    badge: 'Top Seller',
    image: '/images/products/zebronics-supreme-headphone.webp',
    images: ['/images/products/zebronics-supreme-headphone.webp', '/images/products/zebronics-headphone-box.webp'],
    summary: 'Over-ear USB headset with clear adjustable boom microphone and comfortable padded cushions.',
    description: 'Ideal for office meetings, Zoom/Teams calls, online classes, and call centers. Features plug-and-play USB connection with integrated sound controller, 40mm audio drivers, and a 1.8-meter tangle-resistant cord.',
    specs: {
      'Brand': 'Zebronics',
      'Model': 'ZEB-SUPREME',
      'Interface': 'USB Audio Interface',
      'Driver Size': '40mm Neodymium Drivers',
      'Cable Length': '1.8 Meter Cable',
      'Microphone': 'Flexible Boom Mic'
    }
  },
  {
    id: 'p-hd-webcam',
    slug: 'usb-high-solution-hd-webcam-hs48',
    name: 'High-Solution HD USB Webcam with Mic (HS48)',
    category: 'accessories',
    kind: 'accessories',
    featured: true,
    badge: 'Plug & Play',
    image: '/images/products/usb-hd-webcam-hs48.webp',
    summary: 'Crisp HD video webcam with integrated noise-reduction microphone for PCs and laptops.',
    description: 'Universal clip-on USB webcam with wide-angle glass optics and automatic low-light correction. Plug into any Windows or Mac computer without extra driver downloads. Perfect for remote working and video conferencing.',
    specs: {
      'Model': 'HS48 High Solution',
      'Resolution': 'HD 1080p Optical Sensor',
      'Microphone': 'Built-in noise reduction mic',
      'Connection': 'USB 2.0 Plug & Play',
      'Mount': 'Flexible monitor clip & desk stand'
    }
  },
  {
    id: 'p-sandisk-drives',
    slug: 'sandisk-ultra-usb-3-and-cruzer-blade-pendrives',
    name: 'SanDisk Ultra USB 3.0 & Cruzer Blade Flash Drives',
    category: 'accessories',
    kind: 'accessories',
    featured: false,
    badge: 'Fast Transfer',
    image: '/images/products/sandisk-flash-drives.webp',
    summary: 'Authentic SanDisk USB 3.0 Ultra (up to 130MB/s) and pocket-sized Cruzer Blade pen drives.',
    description: 'Keep your documents, photos, and system backups handy. Genuine SanDisk drives in 16GB, 32GB, 64GB, and 128GB with SanDisk SecureAccess password encryption support.',
    specs: {
      'Brand': 'SanDisk',
      'Models': 'Ultra USB 3.0 & Cruzer Blade USB 2.0',
      'Speeds': 'Up to 130 MB/s (USB 3.0)',
      'Security': 'SanDisk SecureAccess software'
    }
  },
  {
    id: 'p-portronics-otg',
    slug: 'portronics-bridge-x-and-y-otg-metal-adapters',
    name: 'Portronics Bridge X & Y USB OTG Aluminum Adapters',
    category: 'accessories',
    kind: 'accessories',
    featured: false,
    badge: 'All-Metal Alloy',
    image: '/images/products/portronics-bridge-otg.webp',
    summary: 'Premium aluminum alloy Type-C to USB-A and USB-A to Type-C fast data sync adapters.',
    description: 'Pocket-sized adapters for connecting pendrives, mice, or keyboards to Type-C laptops, MacBooks, iPad, or Android phones. Built from aircraft-grade aluminum alloy with fast charging and fast sync.',
    specs: {
      'Brand': 'Portronics',
      'Models': 'Bridge X (Type-C to USB-A) & Bridge Y (USB-A to Type-C)',
      'Housing': 'Durable Aluminum Alloy',
      'Feature': 'Fast Charge & Data Sync OTG'
    }
  },
  {
    id: 'p-usb-hdmi',
    slug: 'usb-3-to-hdmi-1080p-display-converter',
    name: 'USB 3.0 to HDMI 1080p Dual-Display Adapter',
    category: 'accessories',
    kind: 'accessories',
    featured: false,
    badge: 'Multi-Monitor',
    image: '/images/products/usb-hdmi-adapter.webp',
    summary: 'Easily connect an external monitor, TV or projector via standard USB 3.0 port.',
    description: 'Turn any available USB 3.0 port into an HDMI output. Supports extended and mirrored desktop modes in 1080p Full HD without requiring an internal graphics card upgrade.',
    specs: {
      'Input': 'USB 3.0 Male',
      'Output': 'HDMI Female (1080p Full HD)',
      'Modes': 'Extend Display / Mirror Display',
      'Compatibility': 'Windows 11, 10, 8, 7'
    }
  },
  {
    id: 'p-zeb-pluto',
    slug: 'zebronics-pluto-2-0-multimedia-desktop-speakers',
    name: 'Zebronics Pluto 2.0 Multimedia Desktop Speakers',
    category: 'accessories',
    kind: 'accessories',
    featured: false,
    badge: 'Stereo Sound',
    image: '/images/products/zebronics-pluto-speakers.webp',
    summary: 'Compact 5W RMS stereo computer speakers with 3.5mm AUX jack and USB power.',
    description: 'Elevate your desktop audio with clear, crisp sound. USB-powered convenience means no bulky wall adapter is needed. Perfect for desk spaces, YouTube, meetings, and light music listening.',
    specs: {
      'Brand': 'Zebronics',
      'Model': 'ZEB-PLUTO',
      'Power Output': '5W RMS (2.5W + 2.5W)',
      'Connection': '3.5mm Audio Jack + USB 5V Power',
      'Controls': 'In-line volume control wheel'
    }
  },
  {
    id: 'p-rocky-speaker',
    slug: 'rocky-rugged-water-resistant-bluetooth-speaker',
    name: 'Rocky Rugged 2M Drop-Proof Bluetooth Speaker',
    category: 'accessories',
    kind: 'accessories',
    featured: false,
    badge: 'IPX4 Rugged',
    image: '/images/products/rocky-bluetooth-speaker.webp',
    summary: 'Drop-proof (2M) and IPX4 splash-resistant compact wireless Bluetooth speaker.',
    description: 'Tough shock-absorbing silicone bumper case designed for portability and outdoor reliability. Features punchy audio, easy Bluetooth pairing, and clip hook.',
    specs: {
      'Brand': 'Rocky',
      'Durability': '2 Meter Drop Proof Certified',
      'Water Rating': 'IPX4 Water Resistant',
      'Connectivity': 'Bluetooth Wireless + AUX'
    }
  },
  {
    id: 'p-micro-otg',
    slug: 'micro-usb-to-usb-female-otg-adapter',
    name: 'Micro USB to USB Female OTG Converter Adapter',
    category: 'accessories',
    kind: 'accessories',
    featured: false,
    badge: 'Compact',
    image: '/images/products/micro-usb-otg-adapter.webp',
    summary: 'Miniature OTG adapter to plug standard USB drives and peripherals into Micro-USB devices.',
    description: 'Ultra-portable plug-and-play adapter allowing quick access to flash drives, keyboard, and mouse on Micro-USB phones and tablets.',
    specs: {
      'Type': 'Micro USB Male to USB 2.0 Type-A Female',
      'Material': 'Molded PVC shell',
      'Feature': 'Instant OTG sync'
    }
  }
]
