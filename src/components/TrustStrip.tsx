'use client'

import { motion } from 'framer-motion'
import { Cake, UtensilsCrossed, Package, Sparkles } from 'lucide-react'

const trustItems = [
  {
    icon: Cake,
    title: 'Custom cake designs',
    description: 'Tailored to your vision',
  },
  {
    icon: UtensilsCrossed,
    title: 'Food & catering',
    description: 'Authentic Nigerian cuisine',
  },
  {
    icon: Package,
    title: 'Small chops for any crowd',
    description: 'From intimate to grand',
  },
  {
    icon: Sparkles,
    title: 'Event setup & decoration',
    description: 'Professional coordination',
  },
]

export default function TrustStrip() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="bg-bg-white py-12 md:py-16 border-y border-bg-blush">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {trustItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-bg-blush flex items-center justify-center mb-4">
                  <Icon className="text-accent-coral" size={28} />
                </div>
                <h3 className="font-heading font-semibold text-text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-text-muted text-sm">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
