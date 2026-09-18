import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import Button from '../ui/Button'
import { inputClass, labelClass, optionalClass, errorClass, requiredMark } from '../ui/formStyles'

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email').or(z.literal('')).optional(),
  phone: z.string().optional(),
  occasion: z.string().min(1, 'Please select an occasion'),
  date: z.string().min(1, 'Please enter your event date'),
  duration: z.string().optional(),
  location: z.string().min(2, 'Please enter your event location'),
  inspiration: z.string().optional(),
  message: z.string().min(10, 'Please tell Siddhi a little more about your vision'),
}).refine((data) => data.email || data.phone, {
  message: 'Please provide at least an email or phone number',
  path: ['email'],
})

type FormData = z.infer<typeof schema>

const occasions = [
  'Bridal Mehndi',
  'Guest Henna',
  'Festival or Carnival',
  'Baby Shower',
  'Prom or Party',
  'Custom Request',
  'Other',
]

function InquiryForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [selectOpen, setSelectOpen] = useState(false)
  const [selectedOccasion, setSelectedOccasion] = useState('')

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setError(false)
    try {
      const endpoint = import.meta.env.VITE_FORMSPREE_INQUIRY_URL
      const res = await fetch(`https://formspree.io/f/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSubmitted(true)
        reset()
        setSelectedOccasion('')
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-6 text-center">
        <div className="w-14 h-14 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center">
          <Check size={24} strokeWidth={1.5} />
        </div>
        <h3 className="font-display text-wine-800 text-3xl font-medium">Thank You</h3>
        <p className="font-sans text-henna text-sm max-w-sm leading-relaxed">
          Your inquiry has been received. Siddhi will be in touch with you personally very soon.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="font-sans text-[10px] font-medium tracking-[2.5px] uppercase text-rose-600 hover:text-wine-800 transition-colors mt-2"
        >
          Send another inquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">

      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Full Name {requiredMark}</label>
        <input {...register('name')} placeholder="Your name" className={inputClass} />
        {errors.name && <span className={errorClass}>{errors.name.message}</span>}
      </div>

      {/* Email and Phone, either/or */}
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Contact Details {requiredMark}</label>
        <p className="font-sans text-[11px] text-wine-700/60 -mt-0.5">
          Please provide at least one, email or phone number
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
          <input {...register('email')} type="email" placeholder="Email address" className={inputClass} />
          <input {...register('phone')} type="tel" placeholder="Phone number" className={inputClass} />
        </div>
        {errors.email && <span className={errorClass}>{errors.email.message}</span>}
      </div>

      {/* Occasion and Duration */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>Occasion {requiredMark}</label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setSelectOpen(!selectOpen)}
              aria-haspopup="listbox"
              aria-expanded={selectOpen}
              className={`${inputClass} flex items-center justify-between text-left ${
                selectOpen ? 'border-rose-600 ring-2 ring-rose-600/15' : ''
              } ${selectedOccasion ? 'text-wine-800' : 'text-wine-700/40'}`}
            >
              {selectedOccasion || 'Select an occasion'}
              <ChevronDown size={16} className={`text-marigold-600 transition-transform duration-200 ${selectOpen ? 'rotate-180' : ''}`} />
            </button>

            {selectOpen && (
              <ul
                role="listbox"
                className="absolute z-20 top-full mt-1 left-0 right-0 rounded-lg border border-marigold-600/40 bg-cream shadow-[0_14px_36px_rgba(107,58,30,0.16)] max-h-56 overflow-y-auto gold-scroll"
              >
                {occasions.map((occ) => (
                  <li key={occ}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={selectedOccasion === occ}
                      onClick={() => {
                        setSelectedOccasion(occ)
                        setValue('occasion', occ, { shouldValidate: true })
                        setSelectOpen(false)
                      }}
                      className={`w-full text-left px-4 py-3 font-sans text-sm border-b border-marigold-600/15 last:border-0 transition-colors duration-150 ${
                        selectedOccasion === occ
                          ? 'text-rose-600 bg-rose-100/60'
                          : 'text-wine-800 hover:bg-sage-50'
                      }`}
                    >
                      {occ}
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <input type="hidden" {...register('occasion')} />
          </div>
          {errors.occasion && <span className={errorClass}>{errors.occasion.message}</span>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>
            Event Duration <span className={optionalClass}>(optional)</span>
          </label>
          <input {...register('duration')} placeholder="e.g. 3 hours, full day, 2 days" className={inputClass} />
        </div>
      </div>

      {/* Date and Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>Event Date {requiredMark}</label>
          <input
            {...register('date')}
            type="date"
            min={new Date().toISOString().split('T')[0]}
            className={`${inputClass} [color-scheme:light]`}
          />
          {errors.date && <span className={errorClass}>{errors.date.message}</span>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>Event Location {requiredMark}</label>
          <input {...register('location')} placeholder="City or venue" className={inputClass} />
          {errors.location && <span className={errorClass}>{errors.location.message}</span>}
        </div>
      </div>

      {/* Inspiration */}
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>
          Inspiration Link <span className={optionalClass}>(optional)</span>
        </label>
        <input {...register('inspiration')} placeholder="Pinterest board, Instagram post, or any reference link" className={inputClass} />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Message {requiredMark}</label>
        <textarea
          {...register('message')}
          rows={5}
          placeholder="Tell Siddhi about your vision, any design ideas, or anything else she should know..."
          className={`${inputClass} resize-none`}
        />
        {errors.message && <span className={errorClass}>{errors.message.message}</span>}
      </div>

      {error && (
        <p className="font-sans text-[12px] text-rose-700 text-center">
          Something went wrong. Please try again or reach out directly at bhargavasiddhi@gmail.com
        </p>
      )}

      <div>
        <Button type="submit" variant="solid" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Request Booking'}
        </Button>
      </div>
    </form>
  )
}

export default InquiryForm
