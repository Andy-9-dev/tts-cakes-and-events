'use client'

import Image from 'next/image'
import { getWhatsAppLink, galleryItems } from '@/data/site'
import { motion } from 'framer-motion'
import { MessageCircle, Eye } from 'lucide-react'

export default function Hero() {
  const heroImages = [
    'event-wedding-cake-three-tier',
    'food-jollof-chicken-plantain',
    'cake-oreo-drip',
    'smallchops-boxed-bulk-order',
  ]

  const features = [
    'Custom cakes',
    'Small chops',
    'Event setup & decoration',
  ]

  const whatsappMessage = "Hi! I'd like to order. Can you tell me about your services?"
  const whatsappLink = getWhatsAppLink(whatsappMessage)

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="hero" className="relative bg-bg-cream overflow-hidden min-h-[100svh] lg:min-h-[80vh] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-4 md:space-y-6 lg:space-y-8 flex flex-col justify-center order-1 lg:order-none"
          >
            {/* Eyebrow Label */}
            <motion.div variants={itemVariants}>
              <span className="text-accent-coral uppercase text-xs md:text-sm font-semibold tracking-widest">
                Lagos · Cakes · Catering · Events
              </span>
            </motion.div>

            {/* Headline - fluid sizing */}
            <motion.h1
              variants={itemVariants}
              className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-text-charcoal break-words"
            >
              Cakes, catering & <span className="italic text-accent-coral">celebrations</span> done right
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-text-muted text-sm md:text-base lg:text-lg max-w-md leading-relaxed"
            >
              Premium custom cakes, authentic Nigerian food, and seamless event planning for every milestone.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-accent-coral hover:bg-accent-coral-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-200 hover:shadow-soft-md text-sm sm:text-base h-11 sm:h-auto whitespace-nowrap"
              >
                <MessageCircle size={18} className="flex-shrink-0" />
                <span className="hidden sm:inline">Order on WhatsApp</span>
                <span className="sm:hidden">Order</span>
              </a>
              <a
                href="#gallery"
                className="flex items-center justify-center gap-2 bg-bg-white hover:bg-bg-blush text-accent-coral-dark px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-200 border-2 border-accent-coral text-sm sm:text-base h-11 sm:h-auto whitespace-nowrap"
              >
                <Eye size={18} className="flex-shrink-0" />
                <span className="hidden sm:inline">See our work</span>
                <span className="sm:hidden">Gallery</span>
              </a>
            </motion.div>

            {/* Feature Chips */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 md:gap-3 pt-2 md:pt-4"
            >
              {features.map((feature) => (
                <span
                  key={feature}
                  className="bg-bg-blush text-text-charcoal px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium border border-accent-coral/20"
                >
                  {feature}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Image Collage - 2x2 Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6 order-2 lg:order-none"
          >
            {heroImages.map((imageId, index) => {
              const item = galleryItems.find((i) => i.id === imageId)
              if (!item) return null

              return (
                <motion.div
                  key={imageId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                  className="relative rounded-2xl overflow-hidden shadow-soft"
                >
                  <div className="relative w-full aspect-[4/5]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      priority={index < 2}
                      className="object-cover"
                      sizes="(max-width: 768px) 45vw, (max-width: 1024px) 25vw, 22vw"
                    />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
