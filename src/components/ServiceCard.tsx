'use client'

import Image from 'next/image'
import { getWhatsAppLink, galleryItems } from '@/data/site'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  message: string
  index: number
}

export default function ServiceCard({
  title,
  description,
  image,
  message,
  index,
}: ServiceCardProps) {
  const isEventPlanning = image === 'event-placeholder'
  const imageData = !isEventPlanning
    ? galleryItems.find((item) => item.id === image)
    : null

  const whatsappLink = getWhatsAppLink(message)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-50px' }}
      className="group bg-bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-md transition-all duration-300 h-full flex flex-col"
    >
      {/* Image Container */}
      <div className="relative w-full h-40 sm:h-48 md:h-56 bg-bg-blush overflow-hidden">
        {isEventPlanning ? (
          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
            <div className="text-4xl mb-2">✨</div>
            <p className="text-text-muted text-sm">Event setup & decoration</p>
          </div>
        ) : imageData ? (
          <Image
            src={imageData.src}
            alt={imageData.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : null}
      </div>

      {/* Content */}
      <div className="flex-1 p-6 md:p-8 flex flex-col">
        <h3 className="font-heading font-bold text-2xl md:text-3xl text-text-charcoal mb-3">
          {title}
        </h3>

        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {/* CTA Link */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-accent-coral hover:bg-accent-coral-dark text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 hover:shadow-soft-md w-full text-sm md:text-base mt-auto"
        >
          <MessageCircle size={18} />
          Enquire on WhatsApp
        </a>
      </div>
    </motion.div>
  )
}
