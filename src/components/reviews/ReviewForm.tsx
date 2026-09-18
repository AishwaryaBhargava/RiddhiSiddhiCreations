import { useForm, useWatch } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Check } from 'lucide-react'
import Button from '../ui/Button'
import { inputClass, labelClass, optionalClass, errorClass, requiredMark } from '../ui/formStyles'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  occasion: z.string().min(1, 'Please enter your occasion'),
  city: z.string().optional(),
  rating: z.number().min(1, 'Please select a rating').max(5),
  review: z.string().min(20, 'Please write at least a sentence about your experience'),
  permission: z.literal(true).refine((val) => val === true, {
    message: 'Please give permission to display your review',
  }),
})

type FormData = z.infer<typeof schema>

function ReviewForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [hoveredStar, setHoveredStar] = useState(0)
  const [selectedStar, setSelectedStar] = useState(0)

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const permission = useWatch({ control, name: 'permission' })

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
      <div className="flex flex-col items-center justify-center py-14 gap-6 text-center">
        <div className="w-14 h-14 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center">
          <Check size={24} strokeWidth={1.5} />
        </div>
        <h3 className="font-display text-wine-800 text-3xl font-medium">Thank You</h3>
        <p className="font-sans text-henna text-sm max-w-sm leading-relaxed">
          Your review has been received. Siddhi will read it personally and it may be featured on the site.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="font-sans text-[10px] font-medium tracking-[2.5px] uppercase text-rose-600 hover:text-wine-800 transition-colors"
        >
          Submit another review
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>Your Name {requiredMark}</label>
          <input {...register('name')} placeholder="Your name" className={inputClass} />
          {errors.name && <span className={errorClass}>{errors.name.message}</span>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>Occasion {requiredMark}</label>
          <input {...register('occasion')} placeholder="e.g. Bridal, Festival, Baby Shower" className={inputClass} />
          {errors.occasion && <span className={errorClass}>{errors.occasion.message}</span>}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>
          City <span className={optionalClass}>(optional)</span>
        </label>
        <input {...register('city')} placeholder="Your city" className={inputClass} />
      </div>

      {/* Star rating */}
      <div className="flex flex-col gap-2">
        <label className={labelClass}>Rating {requiredMark}</label>
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
              aria-label={`${star} star${star > 1 ? 's' : ''}`}
              className="text-3xl leading-none transition-transform duration-150 hover:scale-110"
            >
              <span className={star <= (hoveredStar || selectedStar) ? 'text-marigold-600' : 'text-wine-700/20'}>★</span>
            </button>
          ))}
        </div>
        {errors.rating && <span className={errorClass}>{errors.rating.message}</span>}
        <input type="hidden" {...register('rating', { valueAsNumber: true })} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Your Review {requiredMark}</label>
        <textarea
          {...register('review')}
          rows={5}
          placeholder="Share your experience with Siddhi and Riddhi Siddhi Creations..."
          className={`${inputClass} resize-none`}
        />
        {errors.review && <span className={errorClass}>{errors.review.message}</span>}
      </div>

      {/* Permission checkbox */}
      <div className="flex flex-col gap-1">
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative mt-0.5 shrink-0">
            <input type="checkbox" {...register('permission')} className="sr-only" />
            <div className={`w-5 h-5 rounded border transition-colors flex items-center justify-center ${
              permission ? 'bg-sage border-sage text-cream' : 'border-marigold-600/60 group-hover:border-rose-600 bg-cream'
            }`}>
              {permission && <Check size={13} strokeWidth={3} />}
            </div>
          </div>
          <span className="font-sans text-[12px] text-henna leading-relaxed">
            I agree that this review may be displayed on the Riddhi Siddhi Creations website.
            My name and occasion may be shown alongside my review.
          </span>
        </label>
        {errors.permission && <span className={`${errorClass} ml-8`}>{errors.permission.message}</span>}
      </div>

      {error && (
        <p className="font-sans text-[12px] text-rose-700 text-center">
          Something went wrong. Please try again.
        </p>
      )}

      <div>
        <Button type="submit" variant="solid" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Review'}
        </Button>
      </div>
    </form>
  )
}

export default ReviewForm
