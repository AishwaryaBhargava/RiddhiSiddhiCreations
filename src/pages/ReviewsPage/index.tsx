import { motion } from 'framer-motion'
import SEO from '../../components/ui/SEO'
import PageHeader from '../../components/ui/PageHeader'
import SectionHeading from '../../components/ui/SectionHeading'
import { testimonials } from '../../data/testimonials'
import ReviewCard from '../../components/reviews/ReviewCard'
import ReviewForm from '../../components/reviews/ReviewForm'

function ReviewsPage() {
  const approved = testimonials.filter((t) => t.rating >= 4)

  return (
    <>
      <SEO
        title="Client Reviews"
        description="Read real reviews from happy clients of Riddhi Siddhi Creations. Bridal mehndi, festival henna, baby showers, and more. Share your own experience with Siddhi."
      />
      <PageHeader
        overline="Client Love"
        title="Client Reviews"
        intro="Every review is from a real client, personally read and approved by Siddhi."
      />

      {/* Reviews grid */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          {approved.length === 0 ? (
            <p className="font-cormorant italic text-henna text-lg text-center py-16">
              Reviews coming soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* Review form */}
      <section className="py-20 px-6 bg-sage-50 border-t border-sage/40">
        <div className="max-w-2xl mx-auto">
          <SectionHeading overline="Been a Client?" title="Share Your Experience" className="mb-10" />
          <div className="rounded-2xl bg-cream border border-marigold-600/40 shadow-[0_14px_36px_rgba(107,58,30,0.10)] p-8 md:p-12">
            <ReviewForm />
          </div>
        </div>
      </section>
    </>
  )
}

export default ReviewsPage
