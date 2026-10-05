'use client'

import Image from 'next/image'
import { galleryItems } from '@/data/site'
import { motion } from 'framer-motion'

export default function About() {
  // Use event image for about section
  const aboutImage = galleryItems.find((item) => item.id === 'event-wedding-cake-chef')

  return (
    <section id="about" className="bg-bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left: Image with Rounded Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            {aboutImage && (
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-soft-md max-w-md mx-auto md:mx-0">
                <Image
                  src={aboutImage.src}
                  alt={aboutImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 space-y-4 md:space-y-6"
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-text-charcoal">
              About <span className="italic text-accent-coral">us</span>
            </h2>

            <p className="text-text-muted text-sm md:text-base lg:text-lg leading-relaxed break-words">
              We believe every celebration deserves to be special. Our team is passionate about creating memorable experiences through premium cakes, authentic Nigerian food, and seamless event coordination.
            </p>

            <p className="text-text-muted text-sm md:text-base lg:text-lg leading-relaxed break-words">
              From our kitchen to your table, we use only the finest ingredients and proven recipes. Whether you're ordering a custom cake, catering for a corporate event, or planning a complete celebration, we bring professionalism, creativity, and warmth to every project.
            </p>

            {/* TODO: add owner's real story once provided */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
