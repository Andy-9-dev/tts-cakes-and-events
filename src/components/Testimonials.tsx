'use client'

import { testimonials } from '@/data/site'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

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

  return (
    <section id="testimonials" className="bg-[#0F0F0F] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-[#F7F2EA] mb-4">
            Customer Love
          </h2>
          <p className="text-[#B8B2A7] text-lg md:text-xl">
            See what our clients have to say
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-[#1A1A1A] p-6 md:p-8 rounded-2xl border border-[#2A2A2A] hover:border-[#E8493F] transition-all duration-300 hover:shadow-lg hover:shadow-[#E8493F]/10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[#F5B335] text-[#F5B335]"
                  />
                ))}
              </div>

              {/* Message */}
              <p className="text-[#B8B2A7] text-base leading-relaxed mb-6 italic">
                "{testimonial.message}"
              </p>

              {/* Author */}
              <div>
                <p className="font-heading font-bold text-[#F7F2EA] text-base">
                  {testimonial.name}
                </p>
                <p className="text-[#E8493F] text-sm">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
