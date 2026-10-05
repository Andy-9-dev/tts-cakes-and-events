'use client'

import { getWhatsAppLink, siteConfig } from '@/data/site'
import { motion } from 'framer-motion'
import { MessageCircle, MapPin, Phone, Share2 } from 'lucide-react'

export default function Contact() {
  const whatsappMessage = "Hi! I'd like to enquire about your services."
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
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="bg-dark-bg py-12 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-accent-coral rounded-2xl p-6 md:p-8 lg:p-12 text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-3 md:mb-4">
            Ready to celebrate?
          </h2>
          <p className="text-white/90 text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-2xl mx-auto break-words">
            Let's make your occasion unforgettable. Get in touch with us on WhatsApp.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-accent-coral px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-bg-blush transition-colors shadow-soft-md h-11 md:h-auto"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Contact Info Grid - 1 col mobile, 3 lg */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
          {/* Phone Numbers */}
          <motion.div
            variants={itemVariants}
            className="bg-bg-cream/10 backdrop-blur p-4 md:p-6 lg:p-8 rounded-2xl border border-white/10"
          >
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <Phone className="text-accent-coral flex-shrink-0" size={20} />
              <h3 className="font-heading font-bold text-white text-base md:text-lg">
                Phone
              </h3>
            </div>
            <div className="space-y-2">
              {siteConfig.contact.phoneNumbers.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone}`}
                  className="flex items-center justify-center w-full bg-accent-coral hover:bg-accent-coral-dark text-white font-semibold transition-colors text-sm md:text-base py-3 px-3 rounded-full h-11 md:h-auto md:py-2 break-all"
                >
                  {phone}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="bg-bg-cream/10 backdrop-blur p-4 md:p-6 lg:p-8 rounded-2xl border border-white/10"
          >
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <MapPin className="text-accent-coral flex-shrink-0" size={20} />
              <h3 className="font-heading font-bold text-white text-base md:text-lg">
                Location
              </h3>
            </div>
            <p className="text-white/80 leading-relaxed text-xs md:text-sm lg:text-base break-words">
              {siteConfig.contact.location}
            </p>
            {/* TODO for delivery areas */}
            <p className="text-accent-gold text-xs md:text-sm font-semibold mt-2 md:mt-3 break-words">
              {siteConfig.contact.deliveryAreas}
            </p>
          </motion.div>

          {/* Social */}
          <motion.div
            variants={itemVariants}
            className="bg-bg-cream/10 backdrop-blur p-4 md:p-6 lg:p-8 rounded-2xl border border-white/10"
          >
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <Share2 className="text-accent-coral flex-shrink-0" size={20} />
              <h3 className="font-heading font-bold text-white text-base md:text-lg">
                Follow us
              </h3>
            </div>
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-accent-coral hover:bg-accent-coral-dark text-white font-semibold transition-colors text-sm md:text-base py-3 px-3 rounded-full h-11 md:h-auto md:py-2"
              >
                <Share2 size={16} />
                Instagram
              </a>
            )}
            <p className="text-white/60 text-xs md:text-sm mt-2 md:mt-3 break-words">
              Check our latest work and updates
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
