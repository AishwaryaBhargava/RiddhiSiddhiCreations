import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email').or(z.literal('')).optional(),
  phone: z.string().optional(),
  occasion: z.string().min(1, 'Please select an occasion'),
  date: z.string().min(1, 'Please enter your event date'),
  duration: z.string().optional(),
  location: z.string().min(2, 'Please enter your event location'),
  inspiration: z.string().optional(),
  message: z.string().min(10, 'Please tell Arpana a little more about your vision'),
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

const inputClass = `
  w-full bg-transparent border border-gold/20 px-4 py-3
  font-sans text-sm text-ivory placeholder:text-ivory/25
  focus:outline-none focus:border-gold/60
  transition-colors duration-200
`

const labelClass = `font-sans text-[10px] tracking-[2.5px] uppercase text-gold/80`
const errorClass = `font-sans text-[10px] text-gold/70 mt-1`

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
      <div className="flex flex-col items-center justify-center py-20 gap-6 text-center">
        <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-gold" />
        </div>
        <h3 className="font-serif italic text-ivory text-3xl">Thank You</h3>
        <p className="font-sans text-ivory/60 text-sm max-w-sm leading-relaxed">
          Your inquiry has been received. Arpana will be in touch with you personally very soon.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="font-sans text-[10px] tracking-[2.5px] uppercase text-gold/60 hover:text-gold transition-colors mt-2"
        >
          Send another inquiry
        </button>
      </div>
    )
  }

  return (
    <>
      {/* Custom scrollbar and date picker styles */}
      <style>{`
        .gold-scroll::-webkit-scrollbar { width: 4px; }
        .gold-scroll::-webkit-scrollbar-track { background: transparent; }
        .gold-scroll::-webkit-scrollbar-thumb { background: rgba(201,162,77,0.4); border-radius: 2px; }
        .gold-scroll::-webkit-scrollbar-thumb:hover { background: rgba(201,162,77,0.7); }

        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(0.6) sepia(1) saturate(2) hue-rotate(5deg);
          cursor: pointer;
          opacity: 0.6;
        }
        input[type="date"]::-webkit-calendar-picker-indicator:hover {
          opacity: 1;
        }
        input[type="date"] {
          color-scheme: dark;
        }
      `}</style>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">

        {/* Name */}
        <div className="flex flex-col gap-1">
          <label className={labelClass}>
            Full Name <span className="text-gold">*</span>
          </label>
          <input {...register('name')} placeholder="Your name" className={inputClass} />
          {errors.name && <span className={errorClass}>{errors.name.message}</span>}
        </div>

        {/* Email and Phone — either/or */}
        <div className="flex flex-col gap-2">
          <label className={labelClass}>
            Contact Details <span className="text-gold">*</span>
          </label>
          <p className="font-sans text-[10px] text-ivory/35 -mt-1">
            Please provide at least one — email or phone number
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
            <div className="flex flex-col gap-1">
              <input
                {...register('email')}
                type="email"
                placeholder="Email address"
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-1">
              <input
                {...register('phone')}
                type="tel"
                placeholder="Phone number"
                className={inputClass}
              />
            </div>
          </div>
          {errors.email && (
            <span className={errorClass}>{errors.email.message}</span>
          )}
        </div>

        {/* Occasion and Duration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Custom select */}
          <div className="flex flex-col gap-1">
            <label className={labelClass}>
              Occasion <span className="text-gold">*</span>
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setSelectOpen(!selectOpen)}
                className={`w-full flex items-center justify-between border border-gold/20 px-4 py-3 font-sans text-sm transition-colors duration-200 focus:outline-none ${
                  selectOpen ? 'border-gold/60' : 'hover:border-gold/40'
                } ${selectedOccasion ? 'text-ivory' : 'text-ivory/25'}`}
              >
                {selectedOccasion || 'Select an occasion'}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14" height="14" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"
                  className={`text-gold/50 transition-transform duration-200 ${selectOpen ? 'rotate-180' : ''}`}
                >
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>

              {selectOpen && (
                <div className="absolute z-20 top-full left-0 right-0 border border-gold/20 border-t-0 bg-[#0E0E0E] max-h-52 overflow-y-auto gold-scroll">
                  {occasions.map((occ) => (
                    <button
                      key={occ}
                      type="button"
                      onClick={() => {
                        setSelectedOccasion(occ)
                        setValue('occasion', occ, { shouldValidate: true })
                        setSelectOpen(false)
                      }}
                      className={`w-full text-left px-4 py-3 font-sans text-sm border-b border-gold/8 transition-colors duration-150 ${
                        selectedOccasion === occ
                          ? 'text-gold bg-gold/8'
                          : 'text-ivory/70 hover:text-ivory hover:bg-gold/5'
                      }`}
                    >
                      {occ}
                    </button>
                  ))}
                </div>
              )}
              <input type="hidden" {...register('occasion')} />
            </div>
            {errors.occasion && <span className={errorClass}>{errors.occasion.message}</span>}
          </div>

          {/* Duration — optional */}
          <div className="flex flex-col gap-1">
            <label className={labelClass}>
              Event Duration
              <span className="text-ivory/30 ml-2 normal-case tracking-normal text-[10px]">(optional)</span>
            </label>
            <input
              {...register('duration')}
              placeholder="e.g. 3 hours, full day, 2 days"
              className={inputClass}
            />
          </div>
        </div>

        {/* Date and Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1">
            <label className={labelClass}>
              Event Date <span className="text-gold">*</span>
            </label>
            <input
              {...register('date')}
              type="date"
              min={new Date().toISOString().split('T')[0]}
              className={`${inputClass} [color-scheme:dark]`}
            />
            {errors.date && <span className={errorClass}>{errors.date.message}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label className={labelClass}>
              Event Location <span className="text-gold">*</span>
            </label>
            <input
              {...register('location')}
              placeholder="City or venue"
              className={inputClass}
            />
            {errors.location && <span className={errorClass}>{errors.location.message}</span>}
          </div>
        </div>

        {/* Inspiration */}
        <div className="flex flex-col gap-1">
          <label className={labelClass}>
            Inspiration Link
            <span className="text-ivory/30 ml-2 normal-case tracking-normal text-[10px]">(optional)</span>
          </label>
          <input
            {...register('inspiration')}
            placeholder="Pinterest board, Instagram post, or any reference link"
            className={inputClass}
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1">
          <label className={labelClass}>
            Message <span className="text-gold">*</span>
          </label>
          <textarea
            {...register('message')}
            rows={5}
            placeholder="Tell Arpana about your vision, any design ideas, or anything else she should know..."
            className={`${inputClass} resize-none`}
          />
          {errors.message && <span className={errorClass}>{errors.message.message}</span>}
        </div>

        {/* Error */}
        {error && (
          <p className="font-sans text-[11px] text-gold/70 text-center">
            Something went wrong. Please try again or reach out directly at bhargavasiddhi@gmail.com
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="self-start px-10 py-3.5 border border-gold/60 text-gold font-sans text-[10px] tracking-[3.5px] uppercase hover:bg-gold hover:text-black transition-all duration-250 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Request Booking'}
        </button>

      </form>
    </>
  )
}

export default InquiryForm