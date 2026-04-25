import { motion } from 'framer-motion'
import SEO from '../../components/ui/SEO'
import { testimonials } from '../../data/testimonials'
import ReviewCard from '../../components/reviews/ReviewCard'
import ReviewForm from '../../components/reviews/ReviewForm'
import SectionHeading from '../../components/ui/SectionHeading'
import Divider from '../../components/ui/Divider'

function ReviewsPage() {
  const approved = testimonials.filter((t) => t.rating >= 4)

  return (
    <>
      <SEO
        title="Client Reviews"
        description="Read real reviews from happy clients of RiddhiSiddhi Creations. Bridal mehndi, festival henna, baby showers, and more. Share your own experience with Siddhi."
      />

      {/* Page header */}
      <section className="py-20 px-6 bg-[radial-gradient(ellipse_60%_60%_at_50%_60%,rgba(201,162,77,0.07)_0%,transparent_65%)]">
        <SectionHeading title="Client Reviews" />
        <p className="font-sans text-ivory/60 text-sm text-center max-w-md mx-auto -mt-6 leading-relaxed">
          Every review is from a real client, personally read and approved by Siddhi.
        </p>
      </section>

      {/* Reviews grid */}
      <section className="py-16 px-6 border-t border-gold/10">
        <div className="max-w-5xl mx-auto">
          {approved.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-sans text-ivory/30 text-sm tracking-wide">
                Reviews coming soon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {approved.map((t, i) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <ReviewCard testimonial={t} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Review form section */}
      <section className="py-20 px-6 border-t border-gold/10 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(201,162,77,0.05)_0%,transparent_65%)]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-sans text-[10px] tracking-[4px] uppercase text-gold block mb-3">
              Been a Client?
            </span>
            <h2 className="font-serif italic text-ivory text-4xl font-500 mb-4">
              Share Your Experience
            </h2>
            <Divider />
          </div>

          <div className="border border-gold/15 bg-white/[0.02] p-8 md:p-12">
            <div className="w-8 h-0.5 bg-gold opacity-50 mb-8" />
            <ReviewForm />
          </div>
        </div>
      </section>
    </>
  )
}

export default ReviewsPage