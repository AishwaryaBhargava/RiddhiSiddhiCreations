import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  occasion: z.string().min(1, 'Please enter your occasion'),
  city: z.string().optional(),
  rating: z.number().min(1, 'Please select a rating').max(5),
  review: z.string().min(20, 'Please write at least a sentence about your experience'),
  permission: z.literal(true, {
    errorMap: () => ({ message: 'Please give permission to display your review' }),
  }),
})

type FormData = z.infer<typeof schema>

const inputClass = `
  w-full bg-transparent border border-gold/20 px-4 py-3
  font-sans text-sm text-ivory placeholder:text-ivory/25
  focus:outline-none focus:border-gold/60
  transition-colors duration-200
`
const labelClass = `font-sans text-[10px] tracking-[2.5px] uppercase text-gold/80`
const errorClass = `font-sans text-[10px] text-gold/70 mt-1`

function ReviewForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [hoveredStar, setHoveredStar] = useState(0)
  const [selectedStar, setSelectedStar] = useState(0)

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
      const endpoint = import.meta.env.VITE_FORMSPREE_REVIEW_URL
      const res = await fetch(`https://formspree.io/f/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSubmitted(true)
        reset()
        setSelectedStar(0)
        setHoveredStar(0)
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
        <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-gold" />
        </div>
        <h3 className="font-serif italic text-ivory text-3xl">Thank You</h3>
        <p className="font-sans text-ivory/60 text-sm max-w-sm leading-relaxed">
          Your review has been received. Arpana will read it personally and it may be featured on the site.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="font-sans text-[10px] tracking-[2.5px] uppercase text-gold/60 hover:text-gold transition-colors"
        >
          Submit another review
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">

      {/* Name and Occasion */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-1">
          <label className={labelClass}>
            Your Name <span className="text-gold">*</span>
          </label>
          <input {...register('name')} placeholder="Your name" className={inputClass} />
          {errors.name && <span className={errorClass}>{errors.name.message}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <label className={labelClass}>
            Occasion <span className="text-gold">*</span>
          </label>
          <input
            {...register('occasion')}
            placeholder="e.g. Bridal, Festival, Baby Shower"
            className={inputClass}
          />
          {errors.occasion && <span className={errorClass}>{errors.occasion.message}</span>}
        </div>
      </div>

      {/* City — optional */}
      <div className="flex flex-col gap-1">
        <label className={labelClass}>
          City
          <span className="text-ivory/30 ml-2 normal-case tracking-normal text-[10px]">(optional)</span>
        </label>
        <input {...register('city')} placeholder="Your city" className={inputClass} />
      </div>

      {/* Star rating */}
      <div className="flex flex-col gap-2">
        <label className={labelClass}>
          Rating <span className="text-gold">*</span>
        </label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onMouseEnter={() => setHoveredStar(star)}
              onMouseLeave={() => setHoveredStar(0)}
              onClick={() => {
                setSelectedStar(star)
                setValue('rating', star, { shouldValidate: true })
              }}
              className="text-2xl transition-all duration-150 focus:outline-none"
            >
              <span className={
                star <= (hoveredStar || selectedStar)
                  ? 'text-gold'
                  : 'text-ivory/20'
              }>
                ★
              </span>
            </button>
          ))}
        </div>
        {errors.rating && <span className={errorClass}>{errors.rating.message}</span>}
        <input type="hidden" {...register('rating', { valueAsNumber: true })} />
      </div>

      {/* Review text */}
      <div className="flex flex-col gap-1">
        <label className={labelClass}>
          Your Review <span className="text-gold">*</span>
        </label>
        <textarea
          {...register('review')}
          rows={5}
          placeholder="Share your experience with Arpana and RiddhiSiddhi Creations..."
          className={`${inputClass} resize-none`}
        />
        {errors.review && <span className={errorClass}>{errors.review.message}</span>}
      </div>

      {/* Permission checkbox */}
      <div className="flex flex-col gap-1">
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative mt-0.5 shrink-0">
            <input
              type="checkbox"
              {...register('permission')}
              className="sr-only"
            />
            <div className="w-4 h-4 border border-gold/40 group-hover:border-gold/70 transition-colors bg-transparent flex items-center justify-center">
              <div className="w-2 h-2 bg-gold opacity-0 group-has-[:checked]:opacity-100 transition-opacity" />
            </div>
          </div>
          <span className="font-sans text-[11px] text-ivory/55 leading-relaxed">
            I agree that this review may be displayed on the RiddhiSiddhi Creations website.
            My name and occasion may be shown alongside my review.
          </span>
        </label>
        {errors.permission && (
          <span className={`${errorClass} ml-7`}>{errors.permission.message}</span>
        )}
      </div>

      {/* Error */}
      {error && (
        <p className="font-sans text-[11px] text-gold/70 text-center">
          Something went wrong. Please try again.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="self-start px-10 py-3.5 border border-gold/60 text-gold font-sans text-[10px] tracking-[3.5px] uppercase hover:bg-gold hover:text-black transition-all duration-250 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Review'}
      </button>

    </form>
  )
}

export default ReviewForm