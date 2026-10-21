import { SITE } from '../data/site'
export const cn = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(' ')
export const waLink = (text: string) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`
