import type { Testimonial } from '../../data/testimonials'

interface ReviewCardProps {
  testimonial: Testimonial
}

function ReviewCard({ testimonial }: ReviewCardProps) {
  return (
    <div className="relative p-8 border border-gold/15 bg-white/[0.025] flex flex-col gap-4">
      {/* Gold top bar */}
      <div className="absolute top-0 left-8 w-8 h-0.5 bg-gold opacity-55" />

      {/* Stars */}
      <div className="flex gap-1 mt-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} className="text-gold text-sm">★</span>
        ))}
      </div>

      {/* Review */}
      <blockquote className="font-serif italic text-ivory/80 text-base leading-relaxed flex-1">
        "{testimonial.review}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-2 pt-2 border-t border-gold/10">
        <div className="w-4 h-px bg-gold/40" />
        <span className="font-sans text-[9.5px] tracking-[2.5px] uppercase text-gold/75">
          {testimonial.name} · {testimonial.occasion}
        </span>
      </div>
    </div>
  )
}

export default ReviewCard