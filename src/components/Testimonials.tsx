'use client'

import { testimonials } from '@/data/site'
import { motion } from 'framer-motion'

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  // Only show first 2 testimonials
  const displayTestimonials = testimonials.slice(0, 2)

  return (
    <section className="bg-bg-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-text-charcoal mb-4">
            What our clients say
          </h2>
        </motion.div>

        {/* Testimonials Grid - exactly 2 cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto"
        >
          {displayTestimonials.map((testimonial) => {
            // Check if name is still a placeholder
            const isPlaceholder = testimonial.name.includes('[')

            return (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className="bg-bg-white p-6 md:p-8 rounded-2xl shadow-soft hover:shadow-soft-md transition-all duration-300"
              >
                {/* Quote */}
                <p className="text-text-charcoal text-base md:text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Name and Detail - hidden if placeholder */}
                {!isPlaceholder && (
                  <div>
                    <p className="font-heading font-bold text-text-charcoal text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-accent-coral-dark text-sm">
                      {testimonial.detail}
                    </p>
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
