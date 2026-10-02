'use client'

import { services } from '@/data/site'
import ServiceCard from './ServiceCard'
import { motion } from 'framer-motion'

export default function Services() {
  return (
    <section id="services" className="bg-[#0F0F0F] py-16 md:py-24">
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
            Our Services
          </h2>
          <p className="text-[#B8B2A7] text-lg md:text-xl max-w-2xl mx-auto">
            Everything you need for your celebration, from cakes to full event management
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              cta={service.cta}
              message={service.message}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
