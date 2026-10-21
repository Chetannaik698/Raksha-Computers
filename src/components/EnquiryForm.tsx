import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react'
import { submitEnquiry } from '../lib/api'
import type { EnquiryType } from '../types'

const schema = z.object({
  name: z.string().trim().min(2, 'Enter your name'),
  phone: z.string().trim().regex(/^(\+?91)?[\s-]?[6-9]\d{4}[\s-]?\d{5}$/, 'Enter a valid 10-digit Indian mobile number'),
  email: z.string().trim().email('Enter a valid email').or(z.literal('')).optional(),
  message: z.string().trim().min(10, 'Tell us a little more (at least 10 characters)').max(1000, 'Keep it under 1000 characters')
})
type Values = z.infer<typeof schema>

export default function EnquiryForm({ type, subject, placeholder }: { type: EnquiryType; subject?: string; placeholder?: string }) {
  const [state, setState] = useState<'idle' | 'done' | 'error'>('idle')
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<Values>({ resolver: zodResolver(schema) })
  const onSubmit = async (v: Values) => {
    try { await submitEnquiry({ type, subject, ...v }); setState('done'); reset() } catch { setState('error') }
  }
  const err = (m?: string) => m && <p role="alert" className="mt-1.5 text-sm font-semibold text-orange-600 dark:text-yellow">{m}</p>

  if (state === 'done') return (
    <div role="status" className="rounded-2xl border border-electric/30 dark:border-cyan/40 bg-gradient-to-br from-electric/15 to-navy p-6">
      <CheckCircle2 className="text-electric dark:text-cyan" />
      <h3 className="mt-3 font-display text-lg text-paper">Thanks. Your details are checked.</h3>
      <p className="mt-2 text-muted">This is a demonstration form, so nothing was sent to the shop. To enquire now, call or WhatsApp {`+91 99006 03818`}. An enquiry never confirms an order or booking.</p>
      <button className="btn btn-line hover:border-yellow hover:text-yellow mt-4" onClick={() => setState('idle')}>Send another</button>
    </div>
  )
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      {subject && <p className="text-sm text-muted">About: <span className="font-semibold text-orange dark:text-yellow">{subject}</span></p>}
      <div className="grid gap-4 sm:grid-cols-2">
        <div><label htmlFor={`n-${type}`} className="mb-1.5 block text-sm">Name</label>
          <input id={`n-${type}`} className="field" autoComplete="name" aria-invalid={!!errors.name} {...register('name')} />{err(errors.name?.message)}</div>
        <div><label htmlFor={`p-${type}`} className="mb-1.5 block text-sm">Mobile number</label>
          <input id={`p-${type}`} className="field" inputMode="tel" autoComplete="tel" aria-invalid={!!errors.phone} {...register('phone')} />{err(errors.phone?.message)}</div>
      </div>
      <div><label htmlFor={`e-${type}`} className="mb-1.5 block text-sm">Email (optional)</label>
        <input id={`e-${type}`} type="email" className="field" autoComplete="email" aria-invalid={!!errors.email} {...register('email')} />{err(errors.email?.message)}</div>
      <div><label htmlFor={`m-${type}`} className="mb-1.5 block text-sm">Message</label>
        <textarea id={`m-${type}`} rows={5} className="field" placeholder={placeholder ?? 'What are you looking for?'} aria-invalid={!!errors.message} {...register('message')} />{err(errors.message?.message)}</div>
      {state === 'error' && <p role="alert" className="flex gap-2 font-medium text-orange"><AlertCircle size={18} /> Something went wrong. Please try again or call the shop.</p>}
      <button className="btn btn-red" disabled={isSubmitting}>{isSubmitting ? <><Loader2 className="animate-spin" size={18} /> Checking</> : <><Send size={17} /> Send enquiry</>}</button>
      <p className="text-xs text-muted">Demo form: details are validated but not sent or stored.</p>
    </form>
  )
}
