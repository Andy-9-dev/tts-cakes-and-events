'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { galleryItems, getWhatsAppLink } from '@/data/site'
import Lightbox from './Lightbox'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeFilter, setActiveFilter] = useState<string>('All')

  // Get unique categories
  const categories = ['All', ...new Set(galleryItems.map((item) => item.categoryTag))]

  // Filter items
  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') return galleryItems
    return galleryItems.filter((item) => item.categoryTag === activeFilter)
  }, [activeFilter])

  // Get selected image details
  const imageDetails = selectedImage ? galleryItems.find((i) => i.id === selectedImage) : null

  // Navigation helpers
  const currentIndex = filteredItems.findIndex((i) => i.id === selectedImage)
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
    setSelectedImage(filteredItems[prevIndex].id)
  }
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % filteredItems.length
    setSelectedImage(filteredItems[nextIndex].id)
  }

  const whatsappMessage = "Hi! I'd like to order. Can you tell me more about this?"
  const whatsappLink = getWhatsAppLink(whatsappMessage)

  return (
    <section id="gallery" className="bg-bg-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-text-charcoal mb-4">
            Our gallery
          </h2>
          <p className="text-text-muted text-lg md:text-xl">
            Explore our beautiful creations
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center mb-12 md:mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                activeFilter === category
                  ? 'bg-accent-coral text-white'
                  : 'bg-bg-white text-text-charcoal hover:bg-bg-blush border border-bg-blush'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              layout
              className={`group relative overflow-hidden rounded-2xl cursor-pointer h-72 md:h-80 ${
                index % 5 === 0 ? 'md:col-span-2 md:row-span-2 md:h-full' : ''
              }`}
            >
              {/* Image */}
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex flex-col items-end justify-end p-4">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full">
                  <p className="text-white font-semibold text-sm md:text-base truncate mb-2">
                    {item.alt}
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 bg-accent-coral hover:bg-accent-coral-dark text-white px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-colors"
                  >
                    <MessageCircle size={14} />
                    Order
                  </a>
                </div>
              </div>

              {/* Click to view */}
              <button
                onClick={() => setSelectedImage(item.id)}
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"
                aria-label={`View ${item.alt}`}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        image={imageDetails || null}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  )
}
