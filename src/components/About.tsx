'use client'

import Image from 'next/image'
import { galleryItems } from '@/data/site'
import { motion } from 'framer-motion'

export default function About() {
  // Use the first food image as the about image
  const aboutImage = galleryItems.find((item) => item.id === 'food-jollof-chicken-plantain')

  return (
    <section id="about" className="bg-[#0F0F0F] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Image with Scalloped Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 md:order-1"
          >
            {/* Scalloped frame effect using SVG */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M 50,0 Q 50,20 70,20 Q 90,20 90,0 Q 110,0 110,20 Q 110,40 130,40 Q 150,40 150,20 Q 170,20 170,0 Q 190,0 190,20 Q 190,40 210,40 Q 230,40 230,20 Q 250,20 250,0 Q 270,0 270,20 Q 270,40 290,40 Q 310,40 310,20 Q 330,20 330,0 Q 350,0 350,20 Q 350,40 370,40 L 400,40 L 400,0 L 0,0 L 0,40 L 30,40 Q 50,40 50,20"
                fill="none"
                stroke="#E8493F"
                strokeWidth="2"
                opacity="0.3"
              />
            </svg>

            {/* Image Container */}
            {aboutImage && (
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden border-2 border-[#E8493F]/30 shadow-2xl">
                <Image
                  src={aboutImage.src}
                  alt={aboutImage.alt}
                  fill
                  className="object-cover"
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
            className="order-1 md:order-2"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-[#F7F2EA] mb-4">
              About <span className="text-[#E8493F]">TTS</span>
            </h2>

            <p className="text-[#B8B2A7] text-lg leading-relaxed mb-6">
              TTS Cakes and Events was founded with a simple belief: every celebration deserves to be special. We're passionate about creating experiences that leave lasting memories.
            </p>

            <p className="text-[#B8B2A7] text-lg leading-relaxed mb-6">
              From our kitchen to your table, we use only premium ingredients and proven recipes. Whether it's a custom cake tailored to your vision, authentic Nigerian food prepared with love, or a fully managed event setup, we bring professionalism and creativity to every project.
            </p>

            <p className="text-[#B8B2A7] text-lg leading-relaxed">
              Based in Lagos, we serve clients across the city and surrounding areas. We're committed to making your celebration unforgettable.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-[#2A2A2A]">
              {[
                { number: '500+', label: 'Happy Clients' },
                { number: '1000+', label: 'Events Managed' },
                { number: '100%', label: 'Satisfaction' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <p className="font-heading font-bold text-2xl md:text-3xl text-[#E8493F]">
                    {stat.number}
                  </p>
                  <p className="text-[#B8B2A7] text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
