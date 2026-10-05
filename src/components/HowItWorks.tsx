'use client'

import { howItWorks } from '@/data/site'
import { motion } from 'framer-motion'

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="how-it-works" className="bg-bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-text-charcoal mb-3 md:mb-4">
            How it works
          </h2>
          <p className="text-text-muted text-sm md:text-lg lg:text-xl">
            Four simple steps to bring your celebration to life
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
        >
          {howItWorks.map((step) => (
            <motion.div
              key={step.step}
              variants={itemVariants}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-6 left-6 w-11 h-11 md:w-12 md:h-12 bg-accent-coral rounded-full flex items-center justify-center z-10">
                <span className="font-heading font-bold text-white text-lg md:text-xl">
                  {step.step}
                </span>
              </div>

              {/* Card */}
              <div className="bg-bg-cream p-4 md:p-6 lg:p-8 rounded-2xl border border-bg-blush mt-2 min-h-full">
                <h3 className="font-heading font-bold text-lg md:text-xl text-text-charcoal mb-2 md:mb-3 pt-3">
                  {step.title}
                </h3>
                <p className="text-text-muted text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
