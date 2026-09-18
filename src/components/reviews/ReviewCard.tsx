import type { Testimonial } from '../../data/testimonials'

interface ReviewCardProps {
  testimonial: Testimonial
}

function ReviewCard({ testimonial }: ReviewCardProps) {
  return (
    <div className="relative h-full p-8 pt-10 rounded-2xl bg-cream border border-marigold-600/40 shadow-[0_10px_30px_rgba(107,58,30,0.08)] flex flex-col gap-4">
      <span className="absolute top-3 left-6 font-cormorant text-rose-300 text-6xl leading-none select-none">
        &ldquo;
      </span>

      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} className="text-marigold-600 text-sm">★</span>
        ))}
      </div>

      <blockquote className="font-cormorant italic text-wine-800 text-lg leading-relaxed flex-1">
        {testimonial.review}
      </blockquote>

      <div className="flex items-center gap-2 pt-3 border-t border-marigold-600/25">
        <div className="w-4 h-px bg-rose-600" />
        <span className="font-sans text-[10px] font-medium tracking-[2.5px] uppercase text-rose-600">
          {testimonial.name} · {testimonial.occasion}
        </span>
      </div>
    </div>
  )
}

export default ReviewCard
