import type { Review } from '../types'

export const CUSTOMER_HIGHLIGHTS = [
  {
    title: '5.0 Star Customer Rating',
    desc: 'Rated 5.0 out of 5 based on more than 180 verified local reviews in Mangalore.'
  },
  {
    title: 'Honest Diagnosis & Advice',
    desc: 'Helpful technicians who inspect transparently and never recommend unnecessary part replacements.'
  },
  {
    title: 'Best Reasonable Pricing',
    desc: 'Quality laptops, custom desktop builds, and repairs at fair, budget-friendly rates.'
  },
  {
    title: 'Mon – Sat Working Hours',
    desc: 'Monday to Saturday, 10:00 AM – 8:30 PM (Sunday Holiday) with prompt turnaround and doorstep assistance.'
  }
]

export const reviews: Review[] = [
  {
    id: 'r1',
    author: 'Sandeep Prabhu',
    rating: 5,
    date: 'December 2024',
    comment: 'Laptops and desktops are available at best reasonable prices and excellent support and services are being provided.',
    verified: true
  },
  {
    id: 'r2',
    author: 'Venkatesh',
    rating: 5,
    date: 'May 2022',
    comment: 'Helpful technician, doesn\'t suggest unnecessary replacement of parts and uses authentic parts.',
    verified: true
  },
  {
    id: 'r3',
    author: 'Yogesh',
    rating: 5,
    date: 'August 2026',
    comment: 'Best place for computer sales and service solutions in Derebail. Dependable and honest support.',
    verified: true
  },
  {
    id: 'r4',
    author: 'Kusumakar Shetty',
    rating: 5,
    date: 'February 2025',
    comment: 'Quick service and reasonable price.',
    verified: true
  },
  {
    id: 'r5',
    author: 'Yash',
    rating: 5,
    date: 'January 2025',
    comment: 'Low cost, honest guidance and genuinely good service.',
    verified: true
  },
  {
    id: 'r6',
    author: 'Harsha',
    rating: 5,
    date: 'May 2022',
    comment: 'Good and quick service every time.',
    verified: true
  },
  {
    id: 'r7',
    author: 'Praveen',
    rating: 5,
    date: 'September 2022',
    comment: 'Quick turnaround time with fair, transparent pricing.',
    verified: true
  }
]
