'use client'

import { services } from '@/data/site'
import ServiceCard from './ServiceCard'
import { motion } from 'framer-motion'

export default function Services() {
  return (
    <section id="services" className="bg-bg-cream py-12 md:py-16 lg:py-24">
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
            Our services
          </h2>
          <p className="text-text-muted text-sm md:text-lg lg:text-xl max-w-2xl mx-auto">
            Everything you need, from cakes to complete event coordination
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              message={service.message}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
