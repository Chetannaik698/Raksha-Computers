export const SITE = {
  name: 'Raksha Computer',
  legalName: 'Raksha Computers',
  phone: '+91 99006 03818',
  phoneHref: 'tel:+919900603818',
  whatsapp: '919900603818',
  establishedYear: 2011,
  rating: 4.9,
  reviewsCount: 180,
  hours: 'Mon – Sat: 10:00 AM – 8:30 PM (Sun: On Call)',
  dailyHours: '10:00 AM – 8:30 PM',
  addressLine: 'Basement -2, Mercia Square, Bejai–Kavoor Road, opposite Kedar Apartments, below Jan Aushadi Kendra',
  landmark: 'Sri Gurudath, Landlinks Township, Bejai–Kavoor Road',
  addressArea: 'Derebail, Konchady, Mangaluru, Karnataka 575006',
  city: 'Mangaluru',
  pincode: '575006',
  coordinates: {
    lat: 12.908176,
    lng: 74.850579
  },
  paymentsAccepted: ['UPI (GPay, PhonePe, Paytm)', 'Net Banking', 'Cash'],
  url: 'https://rakshacomputers.in'
}

export const FULL_ADDRESS = `${SITE.name}, ${SITE.addressLine}, ${SITE.addressArea}`
export const DISPLAY_ADDRESS = `Mercia Square, Basement -2, Bejai–Kavoor Road, Derebail, Mangaluru - 575006`
export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Raksha Computer Mercia Square Derebail Mangalore')}`
export const MAPS_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent('Raksha Computer Mercia Square Derebail Mangalore')}&output=embed`
