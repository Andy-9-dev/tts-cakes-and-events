'use client'

import Image from 'next/image'
import { getWhatsAppLink, galleryItems } from '@/data/site'
import { motion } from 'framer-motion'
import { MessageCircle, Eye } from 'lucide-react'

export default function Hero() {
  const heroImages = [
    'food-jollof-chicken-plantain',
    'smallchops-tray-puffpuff',
    'food-meat-skewers',
    'cake-oreo-drip',
  ]

  const whatsappMessage = "Hi! I'd like to order. Can you tell me about your services?"
  const whatsappLink = getWhatsAppLink(whatsappMessage)

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
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="hero" className="relative bg-[#0F0F0F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 md:space-y-8"
        >
          <motion.h1
            variants={itemVariants}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-[#F7F2EA]"
          >
            Cakes, Catering & Events{' '}
            <span className="text-[#E8493F]">Done Right</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-[#B8B2A7] text-lg md:text-xl max-w-md leading-relaxed"
          >
            Premium custom cakes, authentic Nigerian food, and professional event planning for every celebration.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#E8493F] hover:bg-[#d63930] text-[#F7F2EA] px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#E8493F]/20 text-base"
            >
              <MessageCircle size={20} />
              Order on WhatsApp
            </a>
            <a
              href="#gallery"
              className="flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] text-[#F7F2EA] px-8 py-4 rounded-xl font-semibold transition-all duration-200 border border-[#2A2A2A] text-base"
            >
              <Eye size={20} />
              See Our Work
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Image Collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 gap-4 md:gap-6 h-fit"
        >
          {heroImages.map((imageId, index) => {
            const item = galleryItems.find((i) => i.id === imageId)
            if (!item) return null

            return (
              <motion.div
                key={imageId}
                className={`relative rounded-2xl overflow-hidden shadow-lg ${
                  index === 0 || index === 3 ? 'md:col-span-1' : 'md:col-span-1'
                } ${index === 0 ? 'md:row-span-2' : ''}`}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full aspect-square md:aspect-auto">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
