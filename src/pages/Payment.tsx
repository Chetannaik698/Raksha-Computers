import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  HelpCircle,
  MessageCircle,
  QrCode,
  ShieldCheck,
  Smartphone,
  Store,
  Wallet
} from 'lucide-react'
import QRCode from 'qrcode'
import PageHead from '../components/PageHead'
import { SITE } from '../data/site'
import { waLink } from '../lib/utils'
import { useSEO } from '../hooks/useSEO'

const UPI_ID = '9900603818@upi'
const UPI_PHONE = '9900603818'
const MERCHANT_NAME = 'Raksha Computers'

export default function Payment() {
  useSEO(
    'Pay via UPI | Raksha Computers',
    'Scan QR code or click to pay Raksha Computers using Google Pay, PhonePe, Paytm, BHIM or any UPI app. Instant receipt on WhatsApp.'
  )
  const reduce = useReducedMotion()

  const [amount, setAmount] = useState<string>('')
  const [note, setNote] = useState<string>('')
  const [qrDataUrl, setQrDataUrl] = useState<string>('')
  const [copiedId, setCopiedId] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  // Construct UPI string
  const cleanAmount = amount.trim() && !isNaN(Number(amount)) && Number(amount) > 0 ? Number(amount).toFixed(2) : ''
  const cleanNote = note.trim() || 'Payment to Raksha Computers'

  const upiLink = `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent(MERCHANT_NAME)}&cu=INR${
    cleanAmount ? `&am=${cleanAmount}` : ''
  }&tn=${encodeURIComponent(cleanNote)}`

  // Generate QR Code on change
  useEffect(() => {
    QRCode.toDataURL(upiLink, {
      width: 400,
      margin: 1.5,
      color: {
        dark: '#050D1A',
        light: '#FFFFFF'
      },
      errorCorrectionLevel: 'H'
    })
      .then(setQrDataUrl)
      .catch(console.error)
  }, [upiLink])

  const copyToClipboard = (text: string, type: 'id' | 'phone') => {
    navigator.clipboard.writeText(text)
    if (type === 'id') {
      setCopiedId(true)
      setTimeout(() => setCopiedId(false), 2000)
    } else {
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
    }
  }

  const presets = ['250', '500', '1000', '2500', '5000']

  return (
    <>
      <PageHead
        title="Instant UPI Payment"
        intro="Scan QR code with Google Pay, PhonePe, Paytm, or BHIM. On mobile, tap Click to Pay to launch your preferred UPI app directly."
      />

      <section className="py-12 md:py-20">
        <div className="wrap grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          {/* Left Column: Interactive QR Code & Mobile Click to Pay */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-start rounded-3xl border border-white/10 bg-gradient-to-b from-[#0a1836] to-deep p-6 sm:p-10 shadow-2xl backdrop-blur-xl"
          >
            {/* Merchant Identity Header */}
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-orange via-yellow to-cyan p-0.5 shadow-lg shadow-orange-500/20">
                <div className="flex h-full w-full items-center justify-center rounded-2xl bg-navy">
                  <Wallet size={24} className="text-yellow" />
                </div>
              </div>
              <h2 className="mt-3.5 font-display text-2xl font-bold text-paper sm:text-3xl">
                {MERCHANT_NAME}
              </h2>
              <div className="mt-1 flex items-center justify-center gap-1.5 text-xs text-muted">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>Verified UPI Merchant • Derebail, Mangaluru</span>
              </div>
            </div>

            {/* QR Code Container */}
            <div className="relative mt-8 rounded-3xl border-2 border-white/15 bg-white p-5 shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
              {qrDataUrl ? (
                <div className="relative">
                  <img
                    src={qrDataUrl}
                    alt="Scan to pay Raksha Computers"
                    className="h-64 w-64 rounded-xl sm:h-72 sm:w-72 object-contain"
                  />
                  {/* Center Emblem */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-navy bg-white shadow-md">
                      <span className="font-display text-xs font-black text-orange">RC</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72">
                  <QrCode size={48} className="animate-spin text-muted" />
                </div>
              )}
            </div>

            {/* Amount Status */}
            <p className="mt-4 text-center font-display text-lg font-semibold text-paper">
              {cleanAmount ? (
                <>
                  Paying <span className="text-yellow">₹{cleanAmount}</span>
                </>
              ) : (
                <span className="text-muted text-sm">Scan to pay custom or bill amount</span>
              )}
            </p>

            {/* 1-Tap Click to Pay for Mobile */}
            <div className="mt-6 w-full space-y-3">
              <a
                href={upiLink}
                className="btn w-full inline-flex items-center justify-center gap-2.5 !bg-gradient-to-r from-[#FF5500] via-[#FF7700] to-[#FFB800] !py-3.5 text-sm sm:text-base font-bold text-white shadow-xl shadow-orange-500/30 hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                <Smartphone size={18} />
                <span>Click to Pay via UPI App</span>
              </a>

              {/* Individual UPI App Links */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-1">
                <a
                  href={`gpay://upi/pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent(
                    MERCHANT_NAME
                  )}&cu=INR${cleanAmount ? `&am=${cleanAmount}` : ''}`}
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 py-2 px-1 text-[11px] sm:text-xs font-semibold text-paper transition hover:border-yellow/40 hover:bg-white/10"
                >
                  <span>Google Pay</span>
                </a>

                <a
                  href={`phonepe://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent(
                    MERCHANT_NAME
                  )}&cu=INR${cleanAmount ? `&am=${cleanAmount}` : ''}`}
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 py-2 px-1 text-[11px] sm:text-xs font-semibold text-paper transition hover:border-yellow/40 hover:bg-white/10"
                >
                  <span>PhonePe</span>
                </a>

                <a
                  href={`paytmmp://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent(
                    MERCHANT_NAME
                  )}&cu=INR${cleanAmount ? `&am=${cleanAmount}` : ''}`}
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 py-2 px-1 text-[11px] sm:text-xs font-semibold text-paper transition hover:border-yellow/40 hover:bg-white/10"
                >
                  <span>Paytm</span>
                </a>
              </div>
            </div>

            {/* Quick Copy UPI Details */}
            <div className="mt-6 w-full divide-y divide-white/10 rounded-2xl border border-white/10 bg-navy/60 p-4 text-xs">
              <div className="flex items-center justify-between pb-3">
                <div>
                  <span className="text-muted block text-[11px]">UPI ID</span>
                  <span className="font-mono font-semibold text-paper text-sm">{UPI_ID}</span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(UPI_ID, 'id')}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 font-medium text-paper transition hover:border-yellow hover:text-yellow active:scale-95"
                >
                  {copiedId ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  <span>{copiedId ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="flex items-center justify-between pt-3">
                <div>
                  <span className="text-muted block text-[11px]">UPI / Phone Number</span>
                  <span className="font-mono font-semibold text-paper text-sm">+91 {UPI_PHONE}</span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(UPI_PHONE, 'phone')}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 font-medium text-paper transition hover:border-yellow hover:text-yellow active:scale-95"
                >
                  {copiedPhone ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Amount Selector, Payment Confirmation, In-Store Proof */}
          <div className="space-y-6">
            {/* Enter Amount Card */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl border border-white/10 bg-deep p-6 sm:p-8"
            >
              <h3 className="font-display text-xl font-bold text-paper">Custom Bill Amount</h3>
              <p className="mt-1 text-xs sm:text-sm text-muted">
                Enter your repair quotation or invoice amount to generate an exact payment QR code.
              </p>

              <div className="mt-4">
                <label htmlFor="amount" className="block text-xs font-medium uppercase text-muted mb-1.5">
                  Amount in Rupees (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-display text-xl font-bold text-muted">
                    ₹
                  </span>
                  <input
                    id="amount"
                    type="number"
                    min="1"
                    placeholder="Enter amount (or leave blank)"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="field !rounded-2xl !py-3.5 !pl-9 text-lg font-semibold text-paper w-full"
                  />
                </div>
              </div>

              {/* Quick Presets */}
              <div className="mt-3 flex flex-wrap gap-2">
                {presets.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setAmount(p)}
                    className={`rounded-xl border px-3 py-1.5 text-xs font-semibold transition ${
                      amount === p
                        ? 'border-orange bg-orange/20 text-yellow shadow-sm shadow-orange-500/20'
                        : 'border-white/10 bg-white/5 text-muted hover:border-white/20 hover:text-paper'
                    }`}
                  >
                    +₹{p}
                  </button>
                ))}
                {amount && (
                  <button
                    type="button"
                    onClick={() => setAmount('')}
                    className="rounded-xl border border-white/10 px-3 py-1.5 text-xs text-muted hover:text-white"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Note / Bill Description */}
              <div className="mt-4">
                <label htmlFor="note" className="block text-xs font-medium uppercase text-muted mb-1.5">
                  Payment Purpose / Note (Optional)
                </label>
                <input
                  id="note"
                  type="text"
                  placeholder="e.g. Laptop repair bill / SSD purchase"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="field !rounded-xl !py-2.5 text-sm text-paper w-full"
                />
              </div>
            </motion.div>

            {/* Send Receipt on WhatsApp */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-950/40 via-deep to-navy p-6 sm:p-8"
            >
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-500/20 text-emerald-400">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-paper">Confirm Payment via WhatsApp</h3>
                  <p className="mt-1 text-xs text-muted leading-relaxed">
                    Once paid, send your transaction screenshot to Raksha Computers to immediately get your invoice, delivery confirmation, or service release.
                  </p>
                  <a
                    href={waLink(
                      `Hello Raksha Computers, I have sent a UPI payment of ₹${
                        cleanAmount || '[Amount]'
                      } to ${UPI_ID}. Note: ${cleanNote}. Here is my screenshot:`
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-green-900/30 transition hover:from-emerald-500 hover:to-green-500"
                  >
                    <MessageCircle size={16} />
                    <span>Send Screenshot on WhatsApp</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* In-Store Physical Standee Verification */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-deep p-4 sm:p-6"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-yellow">
                <Store size={15} />
                <span>Physical Store Desk at Mercia Square</span>
              </div>
              <p className="mt-1 text-xs text-muted">
                Paying in person? Look for the official Google Pay & BHIM UPI standees on our front billing desk.
              </p>

              <div className="mt-4 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10">
                <img
                  src="/images/shop/raksha-computers-desk.webp"
                  alt="Raksha Computers Billing Desk with UPI Standee"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Supported Payment Logos / Chips */}
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-muted">
                {['Google Pay', 'PhonePe', 'Paytm', 'BHIM UPI', 'Net Banking', 'Cash In-Store'].map((method) => (
                  <span
                    key={method}
                    className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-paper"
                  >
                    <CheckCircle2 size={11} className="text-emerald-400" />
                    <span>{method}</span>
                  </span>
                ))}
              </div>
            </motion.div>

            {/* FAQ / Help */}
            <div className="rounded-2xl border border-white/5 bg-white/5 p-4 text-xs text-muted flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <HelpCircle size={15} className="text-orange" />
                Need help with payment? Call us directly:
              </span>
              <a href={SITE.phoneHref} className="font-semibold text-yellow hover:underline">
                {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
