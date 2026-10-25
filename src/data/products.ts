import type { Category, Product } from '../types'

export const categories: Category[] = [
  {
    "slug": "components",
    "name": "Components & Hardware",
    "kind": "ssd",
    "blurb": "Processors, Motherboards, GPUs, Monitors, SMPS, Internal Drives & Power Backup."
  },
  {
    "slug": "accessories",
    "name": "Accessories & Peripherals",
    "kind": "mouse",
    "blurb": "Gaming mice, keyboards, webcams, speakers, adapters, dongles & laptop sleeves."
  },
  {
    "slug": "desktops",
    "name": "Desktops & Cabinets",
    "kind": "tower",
    "blurb": "Custom gaming PCs, high-airflow cabinets, and assembled office workstations."
  },
  {
    "slug": "printers",
    "name": "Printers & Inks",
    "kind": "printer",
    "blurb": "Genuine HP Ink Advantage cartridges, combo packs, and high-yield inks."
  },
  {
    "slug": "laptops",
    "name": "Laptops",
    "kind": "laptop",
    "blurb": "Branded Dell, HP, Lenovo laptops for business, students, and everyday productivity."
  }
]

export const products: Product[] = [
  {
    "id": "p-dell-15",
    "slug": "dell-15-slim-laptop-silver",
    "name": "Dell 15″ Slim Laptop (Silver Edition)",
    "category": "laptops",
    "kind": "laptop",
    "summary": "Sleek silver Dell laptop for office productivity, study, and everyday multitasking.",
    "description": "Genuine Dell laptop with a refined silver finish, narrow-bezel anti-glare display, and responsive ergonomic keyboard. Perfect for students, office work, and remote professionals. Available directly in-store at Raksha Computers with full setup & warranty.",
    "specs": {
      "Brand": "Dell",
      "Display": "15.6″ Full HD Anti-Glare",
      "Design": "Sleek Silver Finish with Precision Touchpad",
      "Connectivity": "Wi-Fi, Bluetooth, HDMI, USB 3.2, Audio Combo",
      "Availability": "In Stock at Derebail shop"
    },
    "image": "/images/products/dell-laptop-silver.webp",
    "images": [
      "/images/products/dell-laptop-silver.webp"
    ],
    "badge": "In Shop Stock",
    "mrp": 54990,
    "price": 54990,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": true
  },
  {
    "id": "p-zeb-cronus",
    "slug": "zebronics-cronus-rgb-gaming-tower",
    "name": "Zebronics Cronus ARGB Gaming PC",
    "category": "desktops",
    "kind": "tower",
    "summary": "High-airflow gaming desktop in Zebronics Cronus chassis with triple halo ARGB ring fans and tempered glass.",
    "description": "Custom-built gaming and video editing PC housed in the striking Zebronics Cronus chassis. Features 3 vibrant rainbow ARGB ring fans, transparent tempered glass showcase panel, and optimized airflow routing. Configure with your preferred processor and graphics card.",
    "specs": {
      "Chassis": "Zebronics Cronus Mid Tower",
      "Cooling": "3× 120mm ARGB Ring Intake Fans",
      "Side Panel": "Full-View Tempered Glass",
      "Front I/O": "USB 3.0, Dual USB 2.0, HD Audio / Mic",
      "Customization": "Processor, RAM & GPU tailored to your budget"
    },
    "image": "/images/products/zebronics-cronus-gaming-cabinet.webp",
    "images": [
      "/images/products/zebronics-cronus-gaming-cabinet.webp"
    ],
    "badge": "Custom Rig",
    "mrp": 48000,
    "price": 48000,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": true
  },
  {
    "id": "p-mesh-tower",
    "slug": "high-airflow-mesh-gaming-desktop",
    "name": "High-Airflow Dual-Fan Mesh Gaming PC",
    "category": "desktops",
    "kind": "tower",
    "summary": "Performance desktop build featuring full-front metal mesh with dual large intake fans for cool thermals.",
    "description": "Engineered for sustained gaming sessions and 3D rendering. The high-permeability front mesh grill paired with dual high-diameter fans ensures optimal thermal stability for your components during long hours.",
    "specs": {
      "Chassis": "High-Airflow Mesh Front Tower",
      "Cooling": "Dual High-Diameter Intake Fans",
      "Motherboard": "ATX, Micro-ATX Support",
      "Expansion": "Multiple 2.5″ SSD & 3.5″ HDD Mounts",
      "Use": "Gaming, Video Editing & Creative Work"
    },
    "image": "/images/products/mesh-gaming-tower-cabinet.webp",
    "images": [
      "/images/products/mesh-gaming-tower-cabinet.webp"
    ],
    "badge": "Max Airflow",
    "mrp": 54000,
    "price": 54000,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": true
  },
  {
    "id": "p-geonix-tower",
    "slug": "geonix-office-desktop-pc",
    "name": "Geonix Office & Business Desktop PC",
    "category": "desktops",
    "kind": "tower",
    "summary": "Durable, compact desktop computer built in Geonix chassis for offices, billing counters, and schools.",
    "description": "A dependable workhorse built for business operations, accounting software (Tally, Vyapar, Marg), retail billing, and documentation. Low power consumption, compact footprint, and whisper-quiet operation.",
    "specs": {
      "Chassis": "Geonix \"Made to Perform\" Cabinet",
      "Form Factor": "Micro-ATX Compact Tower",
      "Front Ports": "Dual USB 3.0, Dual USB 2.0, Front Audio & Mic",
      "Suitability": "Accounting, Office Work, Billing Counters"
    },
    "image": "/images/products/geonix-office-cabinet.webp",
    "images": [
      "/images/products/geonix-office-cabinet.webp"
    ],
    "badge": "Office & Billing",
    "mrp": 24990,
    "price": 24990,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-evm-sata",
    "slug": "evm-2-5-sata-ssd-128gb-512gb",
    "name": "EVM 2.5″ High-Speed SATA III SSD (128GB / 512GB)",
    "category": "components",
    "kind": "ssd",
    "summary": "Breathe new life into your PC or laptop with 550MB/s 3D NAND SATA SSDs.",
    "description": "Upgrade your slow laptop or desktop with authentic EVM 2.5-inch SATA III SSDs. Experience 10x faster boot times and responsive application launches compared to traditional mechanical hard drives. Backed by a 5-year manufacturer warranty.",
    "specs": {
      "Brand": "EVM (3D NAND)",
      "Form Factor": "2.5-inch SATA III 6Gb/s",
      "Sequential Read": "Up to 550 MB/s",
      "Sequential Write": "Up to 500 MB/s",
      "Warranty": "5 Years Manufacturer Replacement Warranty"
    },
    "image": "/images/products/evm-sata-ssds.webp",
    "images": [
      "/images/products/evm-sata-ssds.webp"
    ],
    "badge": "5-Year Warranty",
    "mrp": 4499,
    "price": 4499,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": true
  },
  {
    "id": "p-evm-nvme",
    "slug": "evm-m2-nvme-pcie-gen3-ssd-512gb",
    "name": "EVM M.2 NVMe PCIe Gen 3×4 High-Speed SSD (512GB)",
    "category": "components",
    "kind": "ssd",
    "summary": "Lightning-speed M.2 2280 NVMe SSD engineered for gaming, fast render times and instant boot.",
    "description": "Blazing-fast PCIe Gen 3x4 NVMe drive delivering read speeds up to 3200 MB/s and write speeds up to 2100 MB/s. Compact M.2 2280 form factor fits modern laptops and desktop motherboards. Made in India with 5-year warranty.",
    "specs": {
      "Brand": "EVM",
      "Interface": "M.2 NVMe PCIe Gen 3×4 (3D NAND)",
      "Read Speed": "Up to 3,200 MB/s",
      "Write Speed": "Up to 2,100 MB/s",
      "Warranty": "5 Years Manufacturer Warranty"
    },
    "image": "/images/products/evm-nvme-pcie-ssds.webp",
    "images": [
      "/images/products/evm-nvme-pcie-ssds.webp"
    ],
    "badge": "Up to 3200 MB/s",
    "mrp": 4999,
    "price": 4999,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": true
  },
  {
    "id": "p-wd-blue",
    "slug": "western-digital-wd-blue-1tb-desktop-hdd",
    "name": "Western Digital (WD Blue) 1.0TB Desktop Hard Drive",
    "category": "components",
    "kind": "ssd",
    "summary": "High-reliability 1.0TB 3.5-inch 7200 RPM internal hard drive for documents, CCTV backups, and games.",
    "description": "Original Western Digital Blue 1TB internal SATA hard drive with 64MB cache. Ideal for expanding storage, secondary storage in desktop PCs, or CCTV DVR storage.",
    "specs": {
      "Brand": "Western Digital (WD Blue)",
      "Capacity": "1.0 TB (1000 GB)",
      "Interface": "SATA 6 Gb/s, 64MB Cache",
      "Class": "7200 RPM Class",
      "Form Factor": "3.5-inch Internal Desktop Drive"
    },
    "image": "/images/products/wd-blue-1tb-hdd.webp",
    "images": [
      "/images/products/wd-blue-1tb-hdd.webp"
    ],
    "badge": "Bulk Storage",
    "mrp": 4500,
    "price": 4500,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-zeb-smps",
    "slug": "zebronics-zeb-n450w-power-supply-smps",
    "name": "Zebronics ZEB-N450W Economy Power Supply (SMPS)",
    "category": "components",
    "kind": "ram",
    "summary": "Reliable 450W desktop ATX power supply with 20+4 pin and SATA connectors.",
    "description": "Zebronics ZEB-N450W (DSATA) economy series SMPS. Provides stable DC voltages (+3.3V, +5V, +12V) with built-in overload protection for office PCs, home desktops, and PSU replacements.",
    "specs": {
      "Brand": "Zebronics",
      "Model": "ZEB-N450W (DSATA)",
      "AC Input": "230V 50Hz 6A",
      "Motherboard": "20+4 Pin Connector",
      "Form Factor": "Standard ATX"
    },
    "image": "/images/products/zebronics-450w-smps.webp",
    "images": [
      "/images/products/zebronics-450w-smps.webp"
    ],
    "badge": "Genuine Spares",
    "mrp": 850,
    "price": 850,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-xpg-primer",
    "slug": "xpg-primer-rgb-gaming-mouse",
    "name": "ADATA XPG PRIMER RGB Optical Gaming Mouse",
    "category": "accessories",
    "kind": "mouse",
    "summary": "High-precision RGB gaming mouse with textured side grips and ultra-durable tactile switches.",
    "description": "Built for gamers seeking precision and comfort. Features a high-accuracy optical sensor, dynamic RGB lighting strip, tactile braided cable, and textured side grips for marathon gaming sessions.",
    "specs": {
      "Brand": "ADATA XPG",
      "Model": "PRIMER",
      "Lighting": "Dynamic RGB Lighting Strip",
      "Cable": "Braided ultra-flexible cable",
      "Design": "Ergonomic right-handed contour"
    },
    "image": "/images/products/xpg-primer-gaming-mouse.webp",
    "images": [
      "/images/products/xpg-primer-gaming-mouse.webp"
    ],
    "badge": "RGB Gaming",
    "mrp": 2999,
    "price": 2999,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": true
  },
  {
    "id": "p-zeb-supreme",
    "slug": "zebronics-zeb-supreme-usb-headphone-with-mic",
    "name": "Zebronics ZEB-SUPREME USB Headphone with Mic",
    "category": "accessories",
    "kind": "accessories",
    "summary": "Over-ear USB headset with clear adjustable boom microphone and comfortable padded cushions.",
    "description": "Ideal for office meetings, Zoom/Teams calls, online classes, and call centers. Features plug-and-play USB connection with integrated sound controller, 40mm audio drivers, and a 1.8-meter tangle-resistant cord.",
    "specs": {
      "Brand": "Zebronics",
      "Model": "ZEB-SUPREME",
      "Interface": "USB Audio Interface",
      "Driver Size": "40mm Neodymium Drivers",
      "Cable Length": "1.8 Meter Cable",
      "Microphone": "Flexible Boom Mic"
    },
    "image": "/images/products/zebronics-supreme-headphone.webp",
    "images": [
      "/images/products/zebronics-supreme-headphone.png",
      "/images/products/zebronics-headphone-box.webp"
    ],
    "badge": "Top Seller",
    "mrp": 1099,
    "price": 1099,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": true
  },
  {
    "id": "p-hd-webcam",
    "slug": "usb-high-solution-hd-webcam-hs48",
    "name": "High-Solution HD USB Webcam with Mic (HS48)",
    "category": "accessories",
    "kind": "accessories",
    "summary": "Crisp HD video webcam with integrated noise-reduction microphone for PCs and laptops.",
    "description": "Universal clip-on USB webcam with wide-angle glass optics and automatic low-light correction. Plug into any Windows or Mac computer without extra driver downloads. Perfect for remote working and video conferencing.",
    "specs": {
      "Model": "HS48 High Solution (Hi-Focus)",
      "Resolution": "HD 1080p Optical Sensor",
      "Microphone": "Built-in noise reduction mic",
      "Connection": "USB 2.0 Plug & Play",
      "Mount": "Flexible monitor clip & desk stand"
    },
    "image": "/images/products/hifocus-hs48-webcam.webp",
    "images": [
      "/images/products/hifocus-hs48-webcam.webp"
    ],
    "badge": "Plug & Play",
    "mrp": 1999,
    "price": 1999,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": true
  },
  {
    "id": "p-sandisk-drives",
    "slug": "sandisk-ultra-usb-3-and-cruzer-blade-pendrives",
    "name": "SanDisk Ultra USB 3.0 & Cruzer Blade Flash Drives",
    "category": "accessories",
    "kind": "accessories",
    "summary": "Authentic SanDisk USB 3.0 Ultra (up to 130MB/s) and pocket-sized Cruzer Blade pen drives.",
    "description": "Keep your documents, photos, and system backups handy. Genuine SanDisk drives in 16GB, 32GB, 64GB, and 128GB with SanDisk SecureAccess password encryption support.",
    "specs": {
      "Brand": "SanDisk",
      "Models": "Ultra USB 3.0 & Cruzer Blade USB 2.0",
      "Speeds": "Up to 130 MB/s (USB 3.0)",
      "Security": "SanDisk SecureAccess software"
    },
    "image": "/images/products/sandisk-flash-drives.webp",
    "images": [
      "/images/products/sandisk-flash-drives.webp"
    ],
    "badge": "Fast Transfer",
    "mrp": 950,
    "price": 950,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-portronics-otg",
    "slug": "portronics-bridge-x-and-y-otg-metal-adapters",
    "name": "Portronics Bridge X & Y USB OTG Aluminum Adapters",
    "category": "accessories",
    "kind": "accessories",
    "summary": "Premium aluminum alloy Type-C to USB-A and USB-A to Type-C fast data sync adapters.",
    "description": "Pocket-sized adapters for connecting pendrives, mice, or keyboards to Type-C laptops, MacBooks, iPad, or Android phones. Built from aircraft-grade aluminum alloy with fast charging and fast sync.",
    "specs": {
      "Brand": "Portronics",
      "Models": "Bridge X (Type-C to USB-A) & Bridge Y (USB-A to Type-C)",
      "Housing": "Durable Aluminum Alloy",
      "Feature": "Fast Charge & Data Sync OTG"
    },
    "image": "/images/products/portronics-bridge-otg.webp",
    "images": [
      "/images/products/portronics-bridge-otg.webp"
    ],
    "badge": "All-Metal Alloy",
    "mrp": 399,
    "price": 399,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-usb-hdmi",
    "slug": "usb-3-to-hdmi-1080p-display-converter",
    "name": "USB 3.0 to HDMI 1080p Dual-Display Adapter",
    "category": "accessories",
    "kind": "accessories",
    "summary": "Easily connect an external monitor, TV or projector via standard USB 3.0 port.",
    "description": "Turn any available USB 3.0 port into an HDMI output. Supports extended and mirrored desktop modes in 1080p Full HD without requiring an internal graphics card upgrade.",
    "specs": {
      "Input": "USB 3.0 Male",
      "Output": "HDMI Female (1080p Full HD)",
      "Modes": "Extend Display / Mirror Display",
      "Compatibility": "Windows 11, 10, 8, 7"
    },
    "image": "/images/products/usb-hdmi-adapter.webp",
    "images": [
      "/images/products/usb-hdmi-adapter.webp"
    ],
    "badge": "Multi-Monitor",
    "mrp": 1299,
    "price": 1299,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-zeb-pluto",
    "slug": "zebronics-pluto-2-0-multimedia-desktop-speakers",
    "name": "Zebronics Pluto 2.0 Multimedia Desktop Speakers",
    "category": "accessories",
    "kind": "accessories",
    "summary": "Compact 5W RMS stereo computer speakers with 3.5mm AUX jack and USB power.",
    "description": "Elevate your desktop audio with clear, crisp sound. USB-powered convenience means no bulky wall adapter is needed. Perfect for desk spaces, YouTube, meetings, and light music listening.",
    "specs": {
      "Brand": "Zebronics",
      "Model": "ZEB-PLUTO",
      "Power Output": "5W RMS (2.5W + 2.5W)",
      "Connection": "3.5mm Audio Jack + USB 5V Power",
      "Controls": "In-line volume control wheel"
    },
    "image": "/images/products/zebronics-pluto-speakers.webp",
    "images": [
      "/images/products/zebronics-pluto-speakers.webp"
    ],
    "badge": "Stereo Sound",
    "mrp": 699,
    "price": 699,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-rocky-speaker",
    "slug": "rocky-rugged-water-resistant-bluetooth-speaker",
    "name": "Rocky Rugged 2M Drop-Proof Bluetooth Speaker",
    "category": "accessories",
    "kind": "accessories",
    "summary": "Drop-proof (2M) and IPX4 splash-resistant compact wireless Bluetooth speaker.",
    "description": "Tough shock-absorbing silicone bumper case designed for portability and outdoor reliability. Features punchy audio, easy Bluetooth pairing, and clip hook.",
    "specs": {
      "Brand": "Rocky",
      "Durability": "2 Meter Drop Proof Certified",
      "Water Rating": "IPX4 Water Resistant",
      "Connectivity": "Bluetooth Wireless + AUX"
    },
    "image": "/images/products/rocky-bluetooth-speaker.webp",
    "images": [
      "/images/products/rocky-bluetooth-speaker.webp"
    ],
    "badge": "IPX4 Rugged",
    "mrp": 1999,
    "price": 1999,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-micro-otg",
    "slug": "micro-usb-to-usb-female-otg-adapter",
    "name": "Micro USB to USB Female OTG Converter Adapter",
    "category": "accessories",
    "kind": "accessories",
    "summary": "Miniature OTG adapter to plug standard USB drives and peripherals into Micro-USB devices.",
    "description": "Ultra-portable plug-and-play adapter allowing quick access to flash drives, keyboard, and mouse on Micro-USB phones and tablets.",
    "specs": {
      "Type": "Micro USB Male to USB 2.0 Type-A Female",
      "Material": "Molded PVC shell",
      "Feature": "Instant OTG sync"
    },
    "image": "/images/products/micro-usb-otg-adapter.webp",
    "images": [
      "/images/products/micro-usb-otg-adapter.webp"
    ],
    "badge": "Compact",
    "mrp": 149,
    "price": 149,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-hammok-glory-kb",
    "slug": "hammok-glory-usb-wired-keyboard",
    "name": "HAMMOK Glory USB Standard Wired Keyboard",
    "category": "accessories",
    "kind": "keyboard",
    "summary": "Standard 104-key USB wired keyboard with silent key travel, long click life, and durable build.",
    "description": "The HAMMOK Glory is an everyday productivity keyboard built for smooth, noiseless typing in offices, schools, and homes. Features comfortable spill-resistant keycaps, laser-carved legends that resist fading, and an integrated USB cable.",
    "specs": {
      "Brand": "HAMMOK",
      "Model": "Glory USB Keyboard",
      "Keys": "104 Standard Keys with Number Pad",
      "Key Life": "Over 10 Million Keystrokes",
      "Interface": "USB 2.0 Plug & Play"
    },
    "image": "/images/products/hammok-glory-keyboard.webp",
    "images": [
      "/images/products/hammok-glory-keyboard.webp"
    ],
    "badge": "Quiet Typing",
    "mrp": 699,
    "price": 699,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": true
  },
  {
    "id": "p-zeb-k65-kb",
    "slug": "zebronics-zeb-k65-wired-multimedia-keyboard",
    "name": "Zebronics Zeb-K65 USB Wired Keyboard",
    "category": "accessories",
    "kind": "keyboard",
    "summary": "Comfortable full-size 104-key desktop keyboard with dedicated Rupee key and 1.2m cable.",
    "description": "Essential office and student keyboard engineered for long typing sessions. Low-profile tactile keys, built-in tilt feet, and high reliability make the Zebronics Zeb-K65 a dependable choice for billing counters and everyday computing.",
    "specs": {
      "Brand": "Zebronics",
      "Model": "ZEB-K65",
      "Keys": "104 UV-Coated Keys",
      "Cable Length": "1.2 Meter Heavy-Duty Cable",
      "Compatibility": "Windows 11, 10, 8, 7, Mac OS"
    },
    "image": "/images/products/zebronics-k65-keyboard.webp",
    "images": [
      "/images/products/zebronics-k65-keyboard.webp"
    ],
    "badge": "Best Value",
    "mrp": 449,
    "price": 449,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-bestor-clicklite-kb",
    "slug": "bestor-clicklite-x-rgb-gaming-keyboard",
    "name": "Bestor ClickLite X RGB Backlit Gaming Keyboard",
    "category": "accessories",
    "kind": "keyboard",
    "summary": "Tactile gaming keyboard with dynamic multi-zone rainbow RGB backlighting and anti-ghosting.",
    "description": "Unleash every click with the Bestor ClickLite X Gaming Keyboard. Engineered for responsive gaming and stylish desk aesthetics, featuring floating keycap design, vibrant rainbow backlighting, and sturdy construction.",
    "specs": {
      "Brand": "Bestor",
      "Model": "ClickLite X",
      "Backlighting": "Multi-Zone Rainbow RGB LED",
      "Key Architecture": "Tactile Membrane with Anti-Ghosting",
      "Connectivity": "Braided USB Cable"
    },
    "image": "/images/products/bestor-clicklite-keyboard.webp",
    "images": [
      "/images/products/bestor-clicklite-keyboard.webp"
    ],
    "badge": "RGB Backlit",
    "mrp": 1999,
    "price": 1999,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": true
  },
  {
    "id": "p-dell-kb216",
    "slug": "dell-kb216-essential-wired-multimedia-keyboard",
    "name": "Dell KB216 Essential Wired Multimedia Keyboard",
    "category": "accessories",
    "kind": "keyboard",
    "summary": "Original Dell chiclet-style quiet keyboard with dedicated multimedia hotkeys and 3-year warranty.",
    "description": "The benchmark for business and remote work. Dell KB216 features chiclet-style keys with quiet scissor-like action, compact space-saving footprint, and quick-access volume and playback controls.",
    "specs": {
      "Brand": "Dell",
      "Model": "KB216",
      "Key Type": "Chiclet / Island-style Low Profile",
      "Warranty": "3 Years Official Dell Manufacturer Warranty",
      "Hotkeys": "Volume Mute, Volume Down, Volume Up, Play/Pause"
    },
    "image": "/images/products/dell-kb216-keyboard.webp",
    "images": [
      "/images/products/dell-kb216-keyboard.webp"
    ],
    "badge": "3-Year Warranty",
    "mrp": 999,
    "price": 999,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": true
  },
  {
    "id": "p-dell-ms116",
    "slug": "dell-ms116-usb-optical-mouse",
    "name": "Dell MS116 USB Optical Mouse (Black)",
    "category": "accessories",
    "kind": "mouse",
    "summary": "Authentic Dell 1000 DPI optical mouse with smooth tracking and ambidextrous contour.",
    "description": "The standard optical mouse trusted by corporate offices worldwide. Accurate 1000 DPI LED tracking, durable scroll wheel, and ergonomic symmetrical shape suitable for both left and right-handed users.",
    "specs": {
      "Brand": "Dell",
      "Model": "MS116",
      "Sensor": "1000 DPI Optical Sensor",
      "Buttons": "3 Buttons with Clickable Scroll Wheel",
      "Warranty": "Official Dell Warranty"
    },
    "image": "/images/products/dell-ms116-mouse.webp",
    "images": [
      "/images/products/dell-ms116-mouse.webp"
    ],
    "badge": "Original Dell",
    "mrp": 499,
    "price": 499,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-lapcare-l50",
    "slug": "lapcare-l50-usb-optical-mouse",
    "name": "Lapcare L-50 USB Wired Optical Mouse",
    "category": "accessories",
    "kind": "mouse",
    "summary": "Ultra-durable 1200 DPI budget optical mouse with 10 million click lifecycle rating.",
    "description": "Compact and reliable wired USB mouse for home, billing counters, and offices. Tested for up to 10 million clicks with smooth 1200 DPI navigation.",
    "specs": {
      "Brand": "Lapcare",
      "Model": "L-50",
      "DPI": "1200 DPI Optical",
      "Clicks Rating": "Up to 10 Million Clicks",
      "Cable": "1.2m Durable USB Cable"
    },
    "image": "/images/products/lapcare-l50-mouse.webp",
    "images": [
      "/images/products/lapcare-l50-mouse.webp"
    ],
    "badge": "10M Clicks",
    "mrp": 269,
    "price": 269,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-hammok-joy11",
    "slug": "hammok-joy-11-wireless-mini-mouse",
    "name": "HAMMOK JOY 11 Wireless Mini Mouse",
    "category": "accessories",
    "kind": "mouse",
    "summary": "Portable 2.4GHz wireless mini mouse with USB nano receiver and adjustable DPI switch.",
    "description": "Pocket-sized wireless mouse for laptops, tablets, and smart TVs. Features 10-meter wireless freedom, ergonomic grip, and battery-saving auto sleep mode.",
    "specs": {
      "Brand": "HAMMOK",
      "Model": "JOY 11 Mini",
      "DPI Range": "800 / 1000 / 1200 DPI Switchable",
      "Range": "Up to 10 Meters Wireless (2.4 GHz)",
      "Receiver": "Mini USB Nano Dongle"
    },
    "image": "/images/products/hammok-joy11-mouse.webp",
    "images": [
      "/images/products/hammok-joy11-mouse.webp"
    ],
    "badge": "2.4GHz Wireless",
    "mrp": 599,
    "price": 599,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-zeb-scorpio",
    "slug": "zebronics-zeb-scorpio-pro-gaming-mouse",
    "name": "Zebronics ZEB-SCORPIO Pro Wired Gaming Mouse",
    "category": "accessories",
    "kind": "mouse",
    "summary": "Ergonomic gaming mouse with green neon accents, 1200 DPI optical sensor, and 1.3m braided cable.",
    "description": "Gamer’s Dream gaming mouse built for fast reflexes and comfortable palm rest. Equipped with 1200 DPI precision tracking, textured grip sides, and a high-durability braided cord.",
    "specs": {
      "Brand": "Zebronics",
      "Model": "ZEB-SCORPIO Pro",
      "DPI": "1200 DPI Gaming Grade",
      "Cable": "1.3 Meter Braided Shielded Cable",
      "Design": "Ergonomic Right-Hand Grip"
    },
    "image": "/images/products/zebronics-scorpio-mouse.webp",
    "images": [
      "/images/products/zebronics-scorpio-mouse.webp"
    ],
    "badge": "Braided Cable",
    "mrp": 549,
    "price": 549,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": true
  },
  {
    "id": "p-bestor-clicklite-mouse",
    "slug": "bestor-clicklite-x-rgb-gaming-mouse",
    "name": "Bestor ClickLite X RGB Optical Gaming Mouse",
    "category": "accessories",
    "kind": "mouse",
    "summary": "Aggressive gaming aesthetic mouse with multi-color cycling RGB LEDs and precision optics.",
    "description": "Complete your gaming setup with the Bestor ClickLite X Gaming Mouse. Features dynamic RGB light strips, contoured finger rests, and ultra-smooth glide feet for competitive play.",
    "specs": {
      "Brand": "Bestor",
      "Model": "ClickLite X Mouse",
      "Lighting": "Dynamic Breathing RGB Lighting",
      "Buttons": "Ergonomic 4-Button Configuration",
      "Connector": "Gold-Plated USB"
    },
    "image": "/images/products/bestor-clicklite-mouse.webp",
    "images": [
      "/images/products/bestor-clicklite-mouse.webp"
    ],
    "badge": "RGB Breathing",
    "mrp": 999,
    "price": 999,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-hp-m10",
    "slug": "hp-m10-wired-usb-optical-mouse",
    "name": "HP M10 Wired USB Optical Mouse",
    "category": "accessories",
    "kind": "mouse",
    "summary": "Versatile HP optical mouse with switchable 1000 / 1600 / 2000 DPI sensor for precision.",
    "description": "Genuine HP wired mouse featuring selectable DPI sensitivity up to 2000 DPI, giving you the flexibility for fine spreadsheet work or fast gaming navigation.",
    "specs": {
      "Brand": "HP (Hewlett-Packard)",
      "Model": "M10",
      "Resolution": "1000 / 1600 / 2000 DPI",
      "Cable": "Flexible 1.5m USB Cable",
      "Warranty": "1 Year HP Warranty"
    },
    "image": "/images/products/hp-m10-mouse.webp",
    "images": [
      "/images/products/hp-m10-mouse.webp"
    ],
    "badge": "Multi-DPI",
    "mrp": 499,
    "price": 499,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-lapcare-safari3",
    "slug": "lapcare-safari-iii-wireless-mouse-black",
    "name": "Lapcare Safari III Wireless Mouse (LWM-003)",
    "category": "accessories",
    "kind": "mouse",
    "summary": "Sleek matte black wireless mouse bundled with genuine Duracell battery for long battery life.",
    "description": "A smooth travel and desk companion. Ergonomic pebble shape, 2.4GHz lag-free wireless connection, and free PC cleaner software bundled inside.",
    "specs": {
      "Brand": "Lapcare",
      "Model": "Safari III (LWM-003)",
      "Connection": "2.4GHz Wireless USB Nano Dongle",
      "Battery": "Free Duracell Battery Included",
      "Manufacture": "Made in India"
    },
    "image": "/images/products/lapcare-safari3-mouse.webp",
    "images": [
      "/images/products/lapcare-safari3-mouse.webp"
    ],
    "badge": "Duracell Included",
    "mrp": 699,
    "price": 699,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-hammok-solo-spk",
    "slug": "hammok-solo-portable-bluetooth-speaker-5w",
    "name": "HAMMOK SOLO Portable Bluetooth Speaker (5W TWS)",
    "category": "accessories",
    "kind": "accessories",
    "summary": "Retro-modern wireless Bluetooth speaker with 5W acoustic driver, handle strap, TWS, and Type-C charging.",
    "description": "Take your tunes anywhere. The HAMMOK SOLO features punchy 5W sound output, Bluetooth 5.0, AUX, TF card, USB playback, 1500mAh rechargeable battery with up to 4 hours of playback, and True Wireless Stereo (TWS) pairing support.",
    "specs": {
      "Brand": "HAMMOK",
      "Model": "SOLO",
      "Audio Output": "5W RMS with Passive Bass Radiator",
      "Battery": "1500 mAh (4 Hours Playback / 12 Hours Standby)",
      "Inputs": "Bluetooth, AUX 3.5mm, TF MicroSD, USB Flash Drive, Type-C Charging"
    },
    "image": "/images/products/hammok-solo-speaker.webp",
    "images": [
      "/images/products/hammok-solo-speaker.webp"
    ],
    "badge": "5W Punchy Bass",
    "mrp": 1299,
    "price": 1299,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": true
  },
  {
    "id": "p-hammok-spin-lan",
    "slug": "hammok-spin-usb-c-to-gigabit-ethernet-adapter",
    "name": "HAMMOK SPIN USB-C to LAN Ethernet Adapter",
    "category": "accessories",
    "kind": "accessories",
    "summary": "Premium Type-C to RJ45 Gigabit Ethernet adapter for MacBook, iPad, and ultrabooks.",
    "description": "Eliminate Wi-Fi lag on modern laptops that lack an RJ45 port. Provides instant, stable wired LAN connectivity up to 1000 Mbps with aluminum casing and status indicator LEDs.",
    "specs": {
      "Brand": "HAMMOK",
      "Model": "SPIN",
      "Input": "USB Type-C Male",
      "Output": "RJ45 Gigabit LAN Female (10/100/1000 Mbps)",
      "Compatibility": "MacBook Pro/Air, Windows Laptops, Chromebooks"
    },
    "image": "/images/products/hammok-spin-typec-lan.webp",
    "images": [
      "/images/products/hammok-spin-typec-lan.webp"
    ],
    "badge": "High Speed",
    "mrp": 999,
    "price": 999,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-hammok-usb-lan",
    "slug": "hammok-core-usb-2-to-lan-ethernet-adapter",
    "name": "HAMMOK CORE USB 2.0 to LAN Fast Ethernet Adapter",
    "category": "accessories",
    "kind": "accessories",
    "summary": "Standard USB-A to RJ45 Fast Ethernet network adapter for desktops and laptops.",
    "description": "An affordable replacement when your motherboard’s onboard LAN port is damaged or unavailable. Plug into any standard USB-A port for instant wired internet.",
    "specs": {
      "Brand": "HAMMOK",
      "Model": "CORE",
      "Interface": "USB 2.0 to RJ45 10/100 Mbps",
      "Drivers": "Built-in auto driver installation"
    },
    "image": "/images/products/hammok-usb2-lan-adapter.webp",
    "images": [
      "/images/products/hammok-usb2-lan-adapter.webp"
    ],
    "badge": "Plug & Play",
    "mrp": 499,
    "price": 499,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-techie-typec-hdmi",
    "slug": "techie-4k-usb-c-to-hdmi-display-adapter",
    "name": "Techie 4K Ultra HD USB-C to HDMI Display Adapter",
    "category": "accessories",
    "kind": "accessories",
    "summary": "Metallic 4K@30Hz USB Type-C to HDMI adapter for external monitor, TV or projector projection.",
    "description": "Connect your Type-C laptop, MacBook, or smartphone directly to big screens and projectors in 4K resolution. Zero delay, plug-and-play with premium aluminum heat-dissipating shell.",
    "specs": {
      "Brand": "Techie",
      "Model": "COVTC1A",
      "Resolution": "4K Ultra HD @ 30Hz / 1080p @ 60Hz",
      "Housing": "Durable Aluminum Alloy Shielding"
    },
    "image": "/images/products/techie-typec-hdmi-adapter.webp",
    "images": [
      "/images/products/techie-typec-hdmi-adapter.webp"
    ],
    "badge": "4K Ultra HD",
    "mrp": 1299,
    "price": 1299,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": true
  },
  {
    "id": "p-hdmi-vga",
    "slug": "hdmi-to-vga-1080p-video-converter-adapter",
    "name": "Full HD 1080p HDMI to VGA Converter Adapter with Audio",
    "category": "accessories",
    "kind": "accessories",
    "summary": "Active digital HDMI to analog VGA video adapter for connecting modern PCs/laptops to older VGA monitors.",
    "description": "Built-in active IC chipset converts digital HDMI output from laptops, desktop GPUs, or set-top boxes into analog VGA for older CRT/LCD monitors and projectors with HDCP compliance.",
    "specs": {
      "Input": "HDMI Male (1080p, HDCP supported)",
      "Output": "VGA Female (15-pin D-Sub)",
      "Compatibility": "Laptops, Desktops, Projectors, Monitors"
    },
    "image": "/images/products/hdmi-to-vga-adapter.webp",
    "images": [
      "/images/products/hdmi-to-vga-adapter.webp"
    ],
    "badge": "1080p Full HD",
    "mrp": 499,
    "price": 499,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-techie-hdd-case",
    "slug": "techie-usb-3-external-enclosure-2-5-sata-ssd-hdd",
    "name": "Techie USB 3.0 External Enclosure for 2.5″ SSD / HDD",
    "category": "accessories",
    "kind": "accessories",
    "summary": "Convert internal 2.5-inch laptop SATA hard drives or SSDs into portable external USB 3.0 drives.",
    "description": "Turn your spare or upgraded laptop hard drive into a high-speed external portable hard drive. Features shock-proof protective casing, UASP high-speed protocol, and tool-free slide opening.",
    "specs": {
      "Brand": "Techie",
      "Model": "TC2.5ENC3",
      "Interface": "SuperSpeed USB 3.0 (up to 5 Gbps)",
      "Drive Support": "All 2.5″ SATA I/II/III SSD & HDD (up to 4TB)",
      "Design": "Tool-free installation with LED status light"
    },
    "image": "/images/products/techie-usb3-hdd-enclosure.webp",
    "images": [
      "/images/products/techie-usb3-hdd-enclosure.webp"
    ],
    "badge": "Tool-Free",
    "mrp": 699,
    "price": 699,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-hammok-lily-wifi",
    "slug": "hammok-lily-300m-usb-wifi-dongle-receiver",
    "name": "HAMMOK LILY 300Mbps 2.4GHz USB Wi-Fi Dongle Receiver",
    "category": "accessories",
    "kind": "accessories",
    "summary": "Compact 300 Mbps wireless mini USB adapter for PC desktops needing instant Wi-Fi.",
    "description": "Upgrade your desktop computer to connect to your home or mobile hotspot Wi-Fi without cumbersome network cables. Up to 300Mbps transmission with gold-plated USB contact.",
    "specs": {
      "Brand": "HAMMOK",
      "Model": "LILY 300M",
      "Speed": "Up to 300 Mbps Wireless-N (2.4 GHz)",
      "Form Factor": "Ultra-compact Nano Dongle"
    },
    "image": "/images/products/hammok-lily-wifi-dongle.webp",
    "images": [
      "/images/products/hammok-lily-wifi-dongle.webp"
    ],
    "badge": "300 Mbps",
    "mrp": 499,
    "price": 499,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-tplink-nano-wifi",
    "slug": "tp-link-tl-wn725n-150mbps-wireless-nano-usb-adapter",
    "name": "TP-Link TL-WN725N 150Mbps Wireless N Nano USB Adapter",
    "category": "accessories",
    "kind": "accessories",
    "summary": "The smallest 150 Mbps Wi-Fi adapter from TP-Link with advanced security and reliable range.",
    "description": "Sleek miniature design so small that once plugged into a desktop or laptop USB port, you can leave it there. Supports WPA/WPA2 encryption and seamless Windows 11 compatibility.",
    "specs": {
      "Brand": "TP-Link",
      "Model": "TL-WN725N",
      "Wireless Speed": "150 Mbps Wi-Fi 802.11b/g/n",
      "Interface": "USB 2.0 Nano Form Factor",
      "Warranty": "3 Years TP-Link Warranty"
    },
    "image": "/images/products/tplink-nano-wifi-adapter.webp",
    "images": [
      "/images/products/tplink-nano-wifi-adapter.webp"
    ],
    "badge": "World #1 Brand",
    "mrp": 699,
    "price": 699,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": true
  },
  {
    "id": "p-hp-sleeve-bag",
    "slug": "hp-15-6-executive-laptop-sleeve-carry-bag",
    "name": "HP 15.6″ Executive Water-Resistant Laptop Sleeve Bag",
    "category": "accessories",
    "kind": "accessories",
    "summary": "Durable grey melange fabric laptop bag with protective shock-padding, front zip pocket, and handles.",
    "description": "Protect your laptop from scratches, accidental drops, and dust. Fits standard 14-inch to 15.6-inch laptops with extra zippered accessory compartment for charger, mouse, and pens.",
    "specs": {
      "Brand": "HP",
      "Size Compatibility": "14″ to 15.6″ Laptops & MacBooks",
      "Material": "Water-Repellent Heathered Poly-Fabric",
      "Features": "Comfortable carrying handles, reinforced zip pulls"
    },
    "image": "/images/products/hp-laptop-sleeve-bag.webp",
    "images": [
      "/images/products/hp-laptop-sleeve-bag.webp"
    ],
    "badge": "Padded Protection",
    "mrp": 1299,
    "price": 1299,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-hm501-thermal",
    "slug": "hm501-high-performance-thermal-paste-grease-30g",
    "name": "HM501 High-Performance Thermal Paste / Grease (30g Syringe)",
    "category": "components",
    "kind": "accessories",
    "summary": "30-gram professional thermal compound syringe for CPU, GPU heatsink repasting and thermal maintenance.",
    "description": "Drop computer temperatures dramatically. Formulated with high thermal conductivity micro-particles to bridge the microscopic gaps between processor heatspreaders and coolers.",
    "specs": {
      "Model": "HM501 Thermal Grease",
      "Volume": "30 Gram Large Syringe Dispenser",
      "Application": "Intel/AMD CPUs, Laptop Processors, GPUs, Chipsets",
      "Properties": "Non-conductive, non-corrosive, long shelf life"
    },
    "image": "/images/products/hm501-thermal-paste.webp",
    "images": [
      "/images/products/hm501-thermal-paste.webp"
    ],
    "badge": "Cooling Essential",
    "mrp": 399,
    "price": 399,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-fingers-big-pic",
    "slug": "fingers-the-big-picture-75hz-frameless-fhd-monitor",
    "name": "FINGERS \"The Big Picture\" 75Hz Frameless FHD LED Monitor",
    "category": "components",
    "kind": "monitor",
    "summary": "Ultra-slim 21.5″ Full HD 1920×1080 frameless monitor with 5,00,000:1 dynamic contrast and HDMI/VGA.",
    "description": "Immerse yourself in breathtaking visuals with FINGERS The Big Picture monitor. Features an edge-to-edge frameless aesthetic, vibrant 16.7 million colors, 75Hz refresh rate for tear-free gaming, and dual HDMI & VGA inputs.",
    "specs": {
      "Brand": "FINGERS",
      "Display Size": "21.45″ / 54.6 cm Full HD (1920 × 1080)",
      "Panel": "Frameless Anti-Glare VA Panel (16.7M Colors)",
      "Refresh Rate": "75Hz Refresh Rate with Low Blue Light Mode",
      "Inputs": "HDMI & VGA Dual Input Ports",
      "Warranty": "3 Years Manufacturer Warranty"
    },
    "image": "/images/products/fingers-big-picture-monitor.webp",
    "images": [
      "/images/products/fingers-big-picture-monitor.webp",
      "/images/products/fingers-big-picture-monitor-box.webp"
    ],
    "badge": "Frameless 75Hz",
    "mrp": 9575,
    "price": 9575,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": true
  },
  {
    "id": "p-geonix-185-mon",
    "slug": "geonix-18-5-inch-hd-led-pc-monitor",
    "name": "Geonix 18.5″ Wide HD LED PC Monitor (GXTF-WVHDF185)",
    "category": "components",
    "kind": "monitor",
    "summary": "Compact 18.5-inch 16:9 TFT LED desktop monitor with HDMI and VGA dual inputs.",
    "description": "Perfect for retail billing points, security CCTV monitoring stations, school labs, and budget desktop PC configurations. Crisp 1366x768 resolution, energy-saving LED backlight, and sturdy V-shaped stand.",
    "specs": {
      "Brand": "Geonix",
      "Model": "GXTF-WVHDF185",
      "Resolution": "1366 × 768 HD (16:9 Aspect Ratio)",
      "Panel Type": "TFT LED Backlit (16.7M Colors)",
      "Connectivity": "HDMI & VGA Dual Input",
      "Warranty": "3 Years Warranty"
    },
    "image": "/images/products/geonix-185-monitor.webp",
    "images": [
      "/images/products/geonix-185-monitor.webp",
      "/images/products/geonix-185-monitor-box.webp"
    ],
    "badge": "Best Budget Screen",
    "mrp": 6500,
    "price": 6500,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": true
  },
  {
    "id": "p-circle-gaming-case",
    "slug": "circle-gaming-argb-slatted-tempered-glass-pc-cabinet",
    "name": "Circle Gaming Elegant ARGB Tempered Glass PC Cabinet",
    "category": "desktops",
    "kind": "tower",
    "summary": "Modern slatted vertical intake grill gaming chassis with 3 ARGB fans, rear fan, and tempered glass.",
    "description": "Showcase your high-performance components. Featuring an architecturally modern vertical slatted front panel for superior intake airflow, full-view transparent tempered glass side panel, and pre-installed multi-color ARGB fans.",
    "specs": {
      "Brand": "Circle Gaming",
      "Cooling": "3× Front 120mm ARGB Fans + 1× Rear Exhaust Fan Included",
      "Side Panel": "Edge-to-Edge Tempered Glass",
      "Motherboard Support": "ATX, Micro-ATX, Mini-ITX",
      "Front Ports": "USB 3.0, Dual USB 2.0, HD Audio In/Out"
    },
    "image": "/images/products/circle-gaming-cabinet.webp",
    "images": [
      "/images/products/circle-gaming-cabinet.webp"
    ],
    "badge": "Triple ARGB Fans",
    "mrp": 4500,
    "price": 4500,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": true
  },
  {
    "id": "p-fingers-opulent-case",
    "slug": "fingers-opulent-micro-atx-pc-cabinet-with-smps",
    "name": "FINGERS Opulent Fashion Micro-ATX PC Cabinet with SMPS",
    "category": "desktops",
    "kind": "tower",
    "summary": "Sophisticated matte black office & home computer chassis bundled with BIS certified SMPS power supply.",
    "description": "Designed for corporate desks, schools, and home workstations. Sleek minimalist front panel with high-speed USB 3.0, durable steel chassis frame, and an included BIS certified power supply unit.",
    "specs": {
      "Brand": "FINGERS",
      "Model": "Opulent Fashion PC Case",
      "Power Supply": "Includes BIS Certified SMPS with Power Cord",
      "Front I/O": "USB 3.0 Port, USB 2.0 Port, HD Audio Jack",
      "Structure": "High-strength steel with bundle cable management"
    },
    "image": "/images/products/fingers-opulent-cabinet.webp",
    "images": [
      "/images/products/fingers-opulent-cabinet.webp",
      "/images/products/fingers-opulent-cabinet-box.webp",
      "/images/products/fingers-opulent-cabinet-rear.webp"
    ],
    "badge": "Includes SMPS",
    "mrp": 2999,
    "price": 2999,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-amd-ryzen-5600",
    "slug": "amd-ryzen-5-5600-6-core-desktop-processor",
    "name": "AMD Ryzen™ 5 5600 6-Core 12-Thread Desktop Processor",
    "category": "components",
    "kind": "ram",
    "summary": "Zen 3 architecture 6-core 12-thread powerhouse CPU clocking up to 4.4GHz with 35MB game cache.",
    "description": "The golden standard CPU for high-FPS 1080p gaming and content creation on the mature AM4 platform. Unlocked for overclocking, PCIe 4.0 support, and incredible power efficiency with included Wraith Stealth cooler.",
    "specs": {
      "Brand": "AMD",
      "Model": "Ryzen™ 5 5600 (5000 Series)",
      "Cores / Threads": "6 Cores / 12 Threads",
      "Clock Speed": "3.5 GHz Base, up to 4.4 GHz Max Boost",
      "Socket": "AM4 (compatible with B450, B550, A520)",
      "Warranty": "3 Years AMD Manufacturer Warranty"
    },
    "image": "/images/products/amd-ryzen-5-5600.webp",
    "images": [
      "/images/products/amd-ryzen-5-5600.webp"
    ],
    "badge": "Top Gaming CPU",
    "mrp": 25000,
    "price": 25000,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": true
  },
  {
    "id": "p-intel-i5-11500",
    "slug": "intel-core-i5-11500-11th-gen-desktop-processor",
    "name": "Intel® Core™ i5-11500 11th Gen LGA1200 Desktop Processor",
    "category": "components",
    "kind": "ram",
    "summary": "6-Core 12-Thread Rocket Lake CPU with up to 4.60GHz turbo and integrated Intel UHD 750 Graphics.",
    "description": "High-speed performance for multitasking, photo editing, and esports. The onboard Intel UHD Graphics 750 delivers sharp 4K multi-display outputs without needing a separate discrete graphics card.",
    "specs": {
      "Brand": "Intel",
      "Family": "11th Gen Core i5 (i5-11500)",
      "Cores / Threads": "6 Cores / 12 Threads",
      "Speed": "2.70 GHz Base, up to 4.60 GHz Intel Turbo Boost",
      "Socket": "LGA 1200 (compatible with H510, B560, Z590)",
      "Integrated GPU": "Intel® UHD Graphics 750"
    },
    "image": "/images/products/intel-core-i5-11500.webp",
    "images": [
      "/images/products/intel-core-i5-11500.webp"
    ],
    "badge": "Intel UHD 750",
    "mrp": 23500,
    "price": 23500,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": true
  },
  {
    "id": "p-colorful-rtx-3050",
    "slug": "colorful-geforce-rtx-3050-6gb-gddr6-graphics-card",
    "name": "Colorful GeForce RTX™ 3050 6GB GDDR6 Gaming Graphics Card",
    "category": "components",
    "kind": "gpu",
    "summary": "NVIDIA Ampere architecture dedicated graphics card with real-time Ray Tracing and AI DLSS technology.",
    "description": "Transform your PC into a modern gaming rig. The RTX 3050 6GB GDDR6 enables smooth gaming across GTA V, Valorant, Cyberpunk 2077, and Call of Duty with AI tensor cores, hardware video encoding (NVENC), and quiet cooling fans.",
    "specs": {
      "Brand": "Colorful (NVIDIA)",
      "GPU Chipset": "GeForce RTX 3050",
      "Memory": "6GB GDDR6 High-Speed VRAM (96-bit)",
      "Architecture": "NVIDIA Ampere with 2nd Gen RT & 3rd Gen Tensor Cores",
      "Video Outputs": "DisplayPort, HDMI"
    },
    "image": "/images/products/colorful-rtx-3050-6gb.webp",
    "images": [
      "/images/products/colorful-rtx-3050-6gb.webp"
    ],
    "badge": "Ray Tracing / DLSS",
    "mrp": 28990,
    "price": 28990,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": true
  },
  {
    "id": "p-nextron-rx580",
    "slug": "nextron-gaming-nforce-rx-580-8gb-gddr5-graphics-card",
    "name": "NEXTRON Gaming NFORCE RX 580 8GB GDDR5 Graphics Card",
    "category": "components",
    "kind": "gpu",
    "summary": "High-memory 8GB GDDR5 graphics card with 2048 Stream Processors and dual custom cooling fans.",
    "description": "Massive 8GB VRAM capacity allows you to run modern games and video editing software like Premiere Pro and DaVinci Resolve without memory stutter. Features dual high-efficiency fans and metal heat-sink.",
    "specs": {
      "Brand": "Nextron Gaming",
      "Chipset": "AMD Radeon RX 580 (2048 SP)",
      "Video Memory": "8GB GDDR5 256-bit Bus",
      "Cooling": "Auto Extreme Dual-Fan Active Heatsink",
      "Outputs": "HDMI, DisplayPort, DVI"
    },
    "image": "/images/products/nextron-rx580-8gb.webp",
    "images": [
      "/images/products/nextron-rx580-8gb.webp"
    ],
    "badge": "8GB VRAM",
    "mrp": 15999,
    "price": 15999,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": true
  },
  {
    "id": "p-foxin-gt740",
    "slug": "foxin-fgc-740-4gb-ddr3-dedicated-graphics-card",
    "name": "Foxin FGC 740 4GB DDR3 Dedicated Graphics Card",
    "category": "components",
    "kind": "gpu",
    "summary": "Low-power 4GB graphics card for multi-display setups, CAD, and lightweight gaming.",
    "description": "Upgrade your PC to support dual monitors and smooth video rendering. Low profile format, zero auxiliary power required, and outputs for HDMI, VGA, and DVI.",
    "specs": {
      "Brand": "Foxin",
      "Model": "FGC 740 (GeForce GT 740)",
      "Memory": "4GB DDR3 Memory",
      "Outputs": "HDMI, VGA (D-Sub), DVI"
    },
    "image": "/images/products/foxin-gt740-graphics.webp",
    "images": [
      "/images/products/foxin-gt740-graphics.webp"
    ],
    "badge": "Budget 4GB",
    "mrp": 4999,
    "price": 4999,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-gigabyte-h610m",
    "slug": "gigabyte-h610m-h-v3-ddr4-ultra-durable-motherboard",
    "name": "GIGABYTE H610M H V3 DDR4 Ultra Durable Motherboard",
    "category": "components",
    "kind": "ram",
    "summary": "Modern LGA 1700 motherboard with PCIe 4.0, NVMe M.2 slot, GbE LAN, and Anti-Sulfur design.",
    "description": "Engineered for Intel 12th, 13th, and 14th Gen Core i3/i5/i7 processors. Featuring hybrid digital VRM, Ultra Durable armor components, high-speed NVMe PCIe Gen3 x4 M.2, and premium audio capacitors.",
    "specs": {
      "Brand": "GIGABYTE",
      "Model": "H610M H V3 DDR4",
      "Socket": "LGA 1700 (Intel 12th, 13th & 14th Gen Core)",
      "Memory": "Dual-Channel DDR4 up to 3200 MHz (2x DIMMs)",
      "Storage": "1× M.2 NVMe Slot + 4× SATA 6Gb/s Ports",
      "Warranty": "3 Years Gigabyte India Warranty"
    },
    "image": "/images/products/gigabyte-h610m-motherboard.webp",
    "images": [
      "/images/products/gigabyte-h610m-motherboard.webp"
    ],
    "badge": "LGA 1700 (12/13/14th Gen)",
    "mrp": 8200,
    "price": 8200,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": true
  },
  {
    "id": "p-biostar-h310m",
    "slug": "biostar-h310mhp-lga-1151-micro-atx-motherboard",
    "name": "BIOSTAR H310MHP LGA 1151 Micro-ATX Motherboard",
    "category": "components",
    "kind": "ram",
    "summary": "Reliable Intel H310 chipset motherboard supporting 8th & 9th Generation Core i3 / i5 / i7.",
    "description": "Ideal for replacement and custom builds powered by Intel 8th and 9th gen processors. Features DDR4 dual-channel memory support, GbE LAN, HDMI/VGA outputs, and moisture-proof PCB.",
    "specs": {
      "Brand": "BIOSTAR",
      "Model": "H310MHP",
      "Socket": "LGA 1151 (Intel 8th & 9th Gen Core)",
      "Memory": "2× DDR4 DIMM Slots (up to 32GB)",
      "Display Output": "HDMI & VGA Ports"
    },
    "image": "/images/products/biostar-h310m-motherboard.webp",
    "images": [
      "/images/products/biostar-h310m-motherboard.webp"
    ],
    "badge": "8th/9th Gen Intel",
    "mrp": 5500,
    "price": 5500,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-zeb-z310sn",
    "slug": "zebronics-zeb-z310sn-m2-lga-1151-motherboard",
    "name": "Zebronics ZEB-Z310SN M2 LGA 1151 Motherboard with NVMe",
    "category": "components",
    "kind": "ram",
    "summary": "Intel 8th & 9th Gen motherboard equipped with onboard ultra-fast NVMe/SATA M.2 storage slot.",
    "description": "Get rapid boot speeds on budget PC builds. Features onboard M.2 slot for NVMe SSDs, high-durability capacitors, USB 3.0 ports, and HDMI output.",
    "specs": {
      "Brand": "Zebronics",
      "Model": "ZEB-Z310SN M2",
      "Socket": "LGA 1151 (Intel 8th / 9th Gen)",
      "Storage Slot": "Onboard M.2 (NVMe / SATA Mode Supported)"
    },
    "image": "/images/products/zebronics-z310sn-motherboard.webp",
    "images": [
      "/images/products/zebronics-z310sn-motherboard.webp"
    ],
    "badge": "NVMe M.2 Slot",
    "mrp": 4999,
    "price": 4999,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-zeb-h61s",
    "slug": "zebronics-zeb-h61s-m2-lga-1155-motherboard",
    "name": "Zebronics ZEB-H61S M2 LGA 1155 Motherboard with NVMe Slot",
    "category": "components",
    "kind": "ram",
    "summary": "Budget revival motherboard for Intel 2nd & 3rd Gen processors with modern M.2 NVMe slot.",
    "description": "Breathe new speed into older systems. Adds high-speed NVMe M.2 SSD capability to LGA 1155 Core i3/i5/i7 chips, paired with HDMI and VGA display outputs.",
    "specs": {
      "Brand": "Zebronics",
      "Model": "ZEB-H61S M2",
      "Socket": "LGA 1155 (Intel 2nd / 3rd Gen Core)",
      "Memory": "Dual DDR3 Slots",
      "Storage": "M.2 NVMe / SATA Slot + SATA Ports"
    },
    "image": "/images/products/zebronics-h61s-motherboard.webp",
    "images": [
      "/images/products/zebronics-h61s-motherboard.webp"
    ],
    "badge": "Budget Repair",
    "mrp": 3499,
    "price": 3499,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-frontech-h61",
    "slug": "frontech-h61-mainboard-ft-0491-lga-1155",
    "name": "Frontech H61 Mainboard FT-0491 (LGA 1155 with NVMe)",
    "category": "components",
    "kind": "ram",
    "summary": "Durable LGA 1155 motherboard with HQ Chipset, 6+4 USB configuration, NVMe M.2 slot, and HDMI.",
    "description": "Cost-effective desktop replacement board for Intel Core i3, i5, and i7 processors. Features onboard high-definition HDMI video output, NVMe M.2 slot, and 3 SATA ports.",
    "specs": {
      "Brand": "Frontech",
      "Model": "FT-0491 (H61 Chipset)",
      "Socket": "LGA 1155",
      "Slots": "M.2 NVMe Slot, 1× PCIe x16, Dual DDR3"
    },
    "image": "/images/products/frontech-h61-motherboard.webp",
    "images": [
      "/images/products/frontech-h61-motherboard.webp"
    ],
    "badge": "Economy Board",
    "mrp": 3299,
    "price": 3299,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-cm-mwe-650",
    "slug": "cooler-master-mwe-bronze-650-v3-atx-3-1-power-supply",
    "name": "Cooler Master MWE Bronze 650 V3 230V ATX 3.1 Power Supply",
    "category": "components",
    "kind": "ram",
    "summary": "High-efficiency 650W gaming PSU certified 80 PLUS Bronze with next-gen ATX 3.1 standard compliance.",
    "description": "Built for gaming desktops running high-tier GPUs. Features 80 PLUS Bronze efficiency rating, 120mm silent HDB fan, flat black flexible cables, DC-to-DC circuit design, and full electrical protections (OVP, OPP, SCP, UVP, OTP).",
    "specs": {
      "Brand": "Cooler Master",
      "Model": "MWE Bronze 650 V3 230V",
      "Standard": "ATX 3.1 Ready",
      "Efficiency": "80 PLUS Bronze (Up to 88% Efficiency)",
      "Warranty": "5 Years Manufacturer Warranty"
    },
    "image": "/images/products/coolermaster-650w-bronze.webp",
    "images": [
      "/images/products/coolermaster-650w-bronze.webp"
    ],
    "badge": "80+ Bronze / ATX 3.1",
    "mrp": 8499,
    "price": 8499,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": true
  },
  {
    "id": "p-corsair-cx550",
    "slug": "corsair-cx-series-cx550-550w-80-plus-bronze-power-supply",
    "name": "CORSAIR CX Series CX550 550W 80 PLUS Bronze Power Supply",
    "category": "components",
    "kind": "ram",
    "summary": "Quiet, reliable 550W continuous power supply with 80 PLUS Bronze efficiency and black sleeved cabling.",
    "description": "One of the most trusted power supplies in PC building. Low-noise thermally controlled 120mm cooling fan, LLC resonant topology with DC to DC conversion, and continuous stable power delivery.",
    "specs": {
      "Brand": "Corsair",
      "Model": "CX550 (CX Series)",
      "Wattage": "550 Watts Continuous Output",
      "Certification": "80 PLUS Bronze Certified",
      "Warranty": "5 Years Corsair Global Warranty"
    },
    "image": "/images/products/corsair-cx550-psu.webp",
    "images": [
      "/images/products/corsair-cx550-psu.webp"
    ],
    "badge": "5-Year Warranty",
    "mrp": 5499,
    "price": 5499,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": true
  },
  {
    "id": "p-antesports-rx550",
    "slug": "ant-esports-rx550-80-plus-bronze-gaming-power-supply",
    "name": "Ant Esports RX550 550W 80 PLUS Bronze Gaming Power Supply",
    "category": "components",
    "kind": "ram",
    "summary": "Heavy-duty 550W ATX power supply with high-airflow 120mm fan and 80 PLUS Bronze certification.",
    "description": "Affordable performance power supply for mid-range gaming builds and desktop upgrades. Features flat black cables for neat routing and active PFC.",
    "specs": {
      "Brand": "Ant Esports",
      "Model": "RX550 (RX Series)",
      "Wattage": "550W Power Delivery",
      "Certification": "80 PLUS Bronze Certified"
    },
    "image": "/images/products/antesports-rx550-psu.webp",
    "images": [
      "/images/products/antesports-rx550-psu.webp"
    ],
    "badge": "80 PLUS Bronze",
    "mrp": 4199,
    "price": 4199,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-frontech-450w",
    "slug": "frontech-atx-p4-450w-smps-power-supply",
    "name": "Frontech ATX P4 450W SMPS Power Supply (PS-0005A)",
    "category": "components",
    "kind": "ram",
    "summary": "Economical 450W ATX desktop power supply with 20+4 pin motherboard and SATA connectors.",
    "description": "A dependable replacement power unit for home computers, student PCs, and office desktop towers. Full BIS certification (IS 13252) with built-in surge and over-voltage protection.",
    "specs": {
      "Brand": "Frontech",
      "Model": "PS-0005A ATX P4",
      "Input": "220–240VAC 5A 47–63Hz",
      "Output": "+3.3V, +5V, +12V rails with 450W peak capability"
    },
    "image": "/images/products/frontech-450w-smps.webp",
    "images": [
      "/images/products/frontech-450w-smps.webp",
      "/images/products/frontech-450w-smps-back.webp"
    ],
    "badge": "BIS Certified",
    "mrp": 999,
    "price": 999,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-artis-powersafe-ups",
    "slug": "artis-powersafe-600va-line-interactive-desktop-ups",
    "name": "Artis POWERSAFE 600VA Line Interactive Desktop UPS",
    "category": "components",
    "kind": "ram",
    "summary": "Safe BIS certified 600VA desktop computer UPS with built-in Automatic Voltage Regulation (AVR).",
    "description": "Protect your PC, Wi-Fi router, and billing machines from unexpected Mangalore power cuts, voltage drops, and lightning surges. Micro-load detection keeps low-power devices running without cutting off.",
    "specs": {
      "Brand": "Artis",
      "Model": "POWERSAFE 600VA",
      "Capacity": "600VA / 360W Capacity",
      "Features": "Inbuilt AVR, Micro Load Detection, Light Weight Design",
      "Sockets": "3 Output Sockets with Surge Protection"
    },
    "image": "/images/products/powersafe-600va-ups.webp",
    "images": [
      "/images/products/powersafe-600va-ups.webp"
    ],
    "badge": "Inbuilt AVR",
    "mrp": 2999,
    "price": 2999,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": true
  },
  {
    "id": "p-geonix-surv-hdd",
    "slug": "geonix-500gb-surveillance-sata-internal-hard-drive",
    "name": "Geonix 500GB Surveillance 24/7 SATA Internal Hard Drive",
    "category": "components",
    "kind": "ssd",
    "summary": "A-Grade tested 500GB 3.5″ SATA hard drive optimized for 24/7 CCTV surveillance recording & PC storage.",
    "description": "Engineered for continuous write cycles in CCTV DVR/NVR recorders and desktop PCs. Backed by a 2-year warranty assurance from Geonix.",
    "specs": {
      "Brand": "Geonix",
      "Capacity": "500 GB Storage",
      "Type": "3.5-inch Internal SATA Hard Drive",
      "Application": "CCTV Surveillance & Desktop Storage",
      "Warranty": "2 Years Replacement Assurance"
    },
    "image": "/images/products/geonix-surveillance-hdd.webp",
    "images": [
      "/images/products/geonix-surveillance-hdd.webp",
      "/images/products/geonix-surveillance-hdd-back.webp"
    ],
    "badge": "2-Year Warranty",
    "mrp": 3200,
    "price": 3200,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-lapcare-battery",
    "slug": "lapcare-high-capacity-laptop-replacement-battery",
    "name": "Lapcare High-Capacity Replacement Laptop Battery",
    "category": "components",
    "kind": "accessories",
    "summary": "High-density replacement battery for HP, Dell, Lenovo, and Acer laptops with 1-year warranty.",
    "description": "Restore your laptop’s cord-free mobility. Features premium Grade-A lithium-ion cells with multi-stage circuit protection against overcharging and short circuits.",
    "specs": {
      "Brand": "Lapcare",
      "Cell Quality": "Grade-A High Density Lithium-Ion",
      "Compatibility": "Available for all major Dell, HP, Lenovo & Acer models",
      "Warranty": "1 Year Full Replacement Warranty"
    },
    "image": "/images/products/lapcare-laptop-battery.webp",
    "images": [
      "/images/products/lapcare-laptop-battery.webp",
      "/images/products/lapcare-laptop-battery-back.webp"
    ],
    "badge": "Grade-A Cells",
    "mrp": 2499,
    "price": 2499,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-fugen-battery",
    "slug": "fugen-accessories-premium-laptop-battery",
    "name": "FUGEN Accessories Premium Replacement Laptop Battery",
    "category": "components",
    "kind": "accessories",
    "summary": "High-endurance laptop battery with true cell capacity rating and up to 500 recharge cycles.",
    "description": "A trusted brand in laptop accessories. Offers reliable power retention, 500 recharge cycles, and 12-month manufacturer warranty with installation support at our shop.",
    "specs": {
      "Brand": "FUGEN Tech",
      "Cycles": "Up to 500 Recharge Cycles",
      "Warranty": "12 Months Replacement Warranty",
      "Safety": "Over-temperature & over-voltage protection"
    },
    "image": "/images/products/fugen-laptop-battery.webp",
    "images": [
      "/images/products/fugen-laptop-battery.webp",
      "/images/products/fugen-laptop-battery-back.webp"
    ],
    "badge": "12-Month Warranty",
    "mrp": 2299,
    "price": 2299,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-hp-680-combo",
    "slug": "hp-680-ink-advantage-2-pack-combo-black-and-color",
    "name": "Original HP 680 Ink Advantage 2-Pack Combo (Black + Tri-color)",
    "category": "printers",
    "kind": "printer",
    "summary": "Original HP Ink Advantage twin pack containing both 680 Black and 680 Tri-color cartridges.",
    "description": "Get deep, razor-sharp black text and brilliant vivid colors. Genuine HP ink is formulated to prevent printhead clogs and corrosion, ensuring hundreds of smudge-free prints for assignments, photos, and bills.",
    "specs": {
      "Brand": "HP (Original Genuine Ink)",
      "Model": "HP 680 2-Pack Combo (F6V76AA / F6V77AA)",
      "Cartridges Included": "1× 680 Black + 1× 680 Tri-colour",
      "Page Yield": "Up to 480 Black / 150 Tri-color Pages",
      "Compatible Printers": "HP DeskJet Ink Advantage 1115, 2135, 3635, 3835, 4535, 4675"
    },
    "image": "/images/products/hp-680-combo-pack.webp",
    "images": [
      "/images/products/hp-680-combo-pack.webp"
    ],
    "badge": "Save More 2-Pack",
    "mrp": 1899,
    "price": 1899,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": true
  },
  {
    "id": "p-hp-680-black",
    "slug": "hp-680-ink-advantage-original-black-ink-cartridge",
    "name": "Original HP 680 Ink Advantage Black Ink Cartridge",
    "category": "printers",
    "kind": "printer",
    "summary": "Original HP 680 Black cartridge delivering crisp, high-density black text for documents.",
    "description": "Genuine HP 680 Black ink cartridge for everyday home and school printing. Quick-drying and smear-resistant.",
    "specs": {
      "Brand": "HP",
      "Cartridge Code": "HP 680 Black (F6V77AA)",
      "Yield": "Up to 480 Standard Document Pages",
      "Support": "DeskJet Ink Advantage 2135, 3635, 3835, 4535 series"
    },
    "image": "/images/products/hp-680-black-ink.webp",
    "images": [
      "/images/products/hp-680-black-ink.webp"
    ],
    "badge": "100% Genuine",
    "mrp": 949,
    "price": 949,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-hp-680-color",
    "slug": "hp-680-ink-advantage-original-tri-color-ink-cartridge",
    "name": "Original HP 680 Ink Advantage Tri-Colour Ink Cartridge",
    "category": "printers",
    "kind": "printer",
    "summary": "Original HP 680 Cyan, Magenta, Yellow tri-color ink cartridge for vivid photos and graphics.",
    "description": "Produce high-fidelity color prints, school projects, and presentations. Genuine formula prevents nozzle drying.",
    "specs": {
      "Brand": "HP",
      "Cartridge Code": "HP 680 Tri-colour (F6V76AA)",
      "Yield": "Up to 150 High-Res Color Pages"
    },
    "image": "/images/products/hp-680-color-ink.webp",
    "images": [
      "/images/products/hp-680-color-ink.webp"
    ],
    "badge": "Vivid Color",
    "mrp": 999,
    "price": 999,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-hp-46-black",
    "slug": "hp-46-ink-advantage-original-black-ink-cartridge",
    "name": "Original HP 46 Ink Advantage Black Ink Cartridge (Ultra High Yield)",
    "category": "printers",
    "kind": "printer",
    "summary": "Massive yield original HP 46 black ink cartridge printing up to 1,500 pages per cartridge.",
    "description": "Designed for high-volume printing at exceptionally low running costs. Print up to 1,500 pages of crisp black text per cartridge.",
    "specs": {
      "Brand": "HP",
      "Model": "HP 46 Black (CZ637AA)",
      "Page Yield": "Up to 1,500 High-Capacity Pages",
      "Printers": "HP DeskJet Ink Advantage 2020hc, 2520hc, 4729 series"
    },
    "image": "/images/products/hp-46-black-ink.webp",
    "images": [
      "/images/products/hp-46-black-ink.webp"
    ],
    "badge": "Up to 1500 Pages",
    "mrp": 999,
    "price": 999,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  },
  {
    "id": "p-hp-47-black",
    "slug": "hp-47-ink-advantage-original-black-ink-cartridge",
    "name": "Original HP 47 Ink Advantage Black Ink Cartridge",
    "category": "printers",
    "kind": "printer",
    "summary": "Authentic HP 47 Black ink cartridge engineered for Ultra Ink Advantage all-in-one printers.",
    "description": "Long-lasting, fade-resistant documents with authentic HP 47 black ink. Highest reliability for office and student printers.",
    "specs": {
      "Brand": "HP",
      "Model": "HP 47 Black",
      "Yield": "Up to 1,500 Pages",
      "Printers": "HP Ultra Ink Advantage 4828, 4877 series"
    },
    "image": "/images/products/hp-47-black-ink.webp",
    "images": [
      "/images/products/hp-47-black-ink.webp"
    ],
    "badge": "Genuine HP",
    "mrp": 999,
    "price": 999,
    "priceLabel": "MRP (Incl. Taxes)",
    "inStock": true,
    "featured": false
  }
]
