'use client'

import { howItWorks } from '@/data/site'
import { motion } from 'framer-motion'

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="how-it-works" className="bg-[#0F0F0F] py-16 md:py-24">
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
            How It Works
          </h2>
          <p className="text-[#B8B2A7] text-lg md:text-xl">
            Simple steps to bring your celebration to life
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {howItWorks.map((step) => (
            <motion.div
              key={step.step}
              variants={itemVariants}
              className="relative"
            >
              {/* Step Number Background */}
              <div className="absolute -top-4 left-0 w-12 h-12 bg-[#E8493F] rounded-full flex items-center justify-center">
                <span className="font-heading font-bold text-[#F7F2EA] text-xl">
                  {step.step}
                </span>
              </div>

              {/* Card */}
              <div className="bg-[#1A1A1A] p-6 md:p-8 rounded-2xl border border-[#2A2A2A] mt-6 min-h-full hover:border-[#E8493F] transition-colors duration-300">
                <h3 className="font-heading font-bold text-2xl text-[#F7F2EA] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#B8B2A7] text-base leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (desktop only) */}
              {step.step < howItWorks.length && (
                <div className="hidden lg:block absolute top-16 -right-[calc(100%+1rem)] w-[calc(100%+2rem)] h-0.5 bg-gradient-to-r from-[#E8493F] to-transparent opacity-30" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
