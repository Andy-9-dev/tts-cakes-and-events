'use client'

import Image from 'next/image'
import { getWhatsAppLink, galleryItems } from '@/data/site'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  cta: string
  message: string
  index: number
}

export default function ServiceCard({
  title,
  description,
  image,
  cta,
  message,
  index,
}: ServiceCardProps) {
  // Special case: Event Planning uses a placeholder
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
      className="group bg-[#1A1A1A] rounded-2xl overflow-hidden border border-[#2A2A2A] hover:border-[#E8493F] transition-all duration-300 h-full flex flex-col hover:shadow-xl hover:shadow-[#E8493F]/10"
    >
      {/* Image Container */}
      <div className="relative w-full h-48 md:h-64 bg-[#0F0F0F] overflow-hidden">
        {isEventPlanning ? (
          // Placeholder for events
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] p-8 text-center">
            <div className="text-4xl font-heading font-bold text-[#E8493F] mb-2">✨</div>
            <p className="text-[#B8B2A7] text-sm">Event setup & decoration photos coming soon</p>
          </div>
        ) : imageData ? (
          <Image
            src={imageData.src}
            alt={imageData.alt}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : null}
      </div>

      {/* Content */}
      <div className="flex-1 p-6 md:p-8 flex flex-col">
        <h3 className="font-heading font-bold text-2xl md:text-3xl text-[#F7F2EA] mb-3 group-hover:text-[#E8493F] transition-colors">
          {title}
        </h3>

        <p className="text-[#B8B2A7] text-sm md:text-base leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {/* CTA Link */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#E8493F] hover:bg-[#d63930] text-[#F7F2EA] px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#E8493F]/30 w-full text-sm md:text-base mt-auto"
        >
          <MessageCircle size={18} />
          {cta}
        </a>
      </div>
    </motion.div>
  )
}
