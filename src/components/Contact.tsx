'use client'

import { getWhatsAppLink, siteConfig } from '@/data/site'
import { motion } from 'framer-motion'
import { MessageCircle, MapPin, Phone } from 'lucide-react'

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
    <section id="contact" className="bg-[#1A1A1A] py-16 md:py-24 border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#E8493F] to-[#d63930] rounded-2xl p-8 md:p-12 text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#F7F2EA] mb-4">
            Ready to Plan Your Event?
          </h2>
          <p className="text-[#F7F2EA]/90 text-lg mb-8 max-w-2xl mx-auto">
            Tap the button below and chat with us on WhatsApp. We're ready to help!
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#E8493F] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#F7F2EA] transition-colors shadow-lg hover:shadow-xl"
          >
            <MessageCircle size={24} />
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Contact Info Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {/* Phone Numbers */}
          <motion.div
            variants={itemVariants}
            className="bg-[#0F0F0F] p-6 md:p-8 rounded-2xl border border-[#2A2A2A] hover:border-[#E8493F] transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <Phone className="text-[#E8493F]" size={24} />
              <h3 className="font-heading font-bold text-[#F7F2EA] text-lg">
                Phone
              </h3>
            </div>
            <div className="space-y-2">
              {siteConfig.contact.phoneNumbers.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone}`}
                  className="block text-[#E8493F] hover:text-[#F5B335] font-semibold transition-colors text-base"
                >
                  {phone}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="bg-[#0F0F0F] p-6 md:p-8 rounded-2xl border border-[#2A2A2A] hover:border-[#E8493F] transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="text-[#E8493F]" size={24} />
              <h3 className="font-heading font-bold text-[#F7F2EA] text-lg">
                Location
              </h3>
            </div>
            <p className="text-[#B8B2A7] leading-relaxed">
              {siteConfig.contact.location}
            </p>
            <p className="text-[#E8493F] text-sm font-semibold mt-3">
              {siteConfig.contact.deliveryAreas}
            </p>
          </motion.div>

          {/* Social */}
          <motion.div
            variants={itemVariants}
            className="bg-[#0F0F0F] p-6 md:p-8 rounded-2xl border border-[#2A2A2A] hover:border-[#E8493F] transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="text-[#E8493F]" size={24} />
              <h3 className="font-heading font-bold text-[#F7F2EA] text-lg">
                Follow Us
              </h3>
            </div>
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#E8493F] hover:text-[#F5B335] font-semibold transition-colors"
              >
                <span>📸 Instagram</span>
              </a>
            )}
            <p className="text-[#B8B2A7] text-sm mt-3">
              Check our latest work and updates
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
