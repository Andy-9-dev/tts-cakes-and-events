'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { getWhatsAppLink, siteConfig } from '@/data/site'
import { motion, AnimatePresence } from 'framer-motion'

interface QuickOption {
  label: string
  message: string
}

const quickOptions: QuickOption[] = [
  {
    label: '🎂 Order a cake',
    message: "Hi, I'd like to order a custom cake. My event date is...",
  },
  {
    label: '🍗 Order food / catering',
    message: "Hi, I'd like to order food for my event. I'm interested in...",
  },
  {
    label: '🥘 Small chops for an event',
    message: "Hi, I'd like to order small chops for my event. I need...",
  },
  {
    label: '✨ Plan an event',
    message: "Hi, I need help planning and decorating my event. The date is...",
  },
  {
    label: '❓ Ask a question',
    message: "Hi! I have a question about your services...",
  },
]

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show widget after page loads
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const defaultMessage = "Hi! 👋 What can we help you with today?"
  const defaultLink = getWhatsAppLink(defaultMessage)

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-40"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="w-16 h-16 bg-[#25D366] hover:bg-[#1fa857] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200"
              aria-label="Open WhatsApp chat"
            >
              {isOpen ? (
                <X size={28} />
              ) : (
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <MessageCircle size={28} />
                </motion.div>
              )}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && isVisible && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 z-30 md:hidden"
            />

            {/* Popup Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="fixed bottom-24 right-6 z-40 bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl shadow-2xl max-w-xs w-full md:max-w-sm overflow-hidden"
            >
              {/* Header */}
              <div className="bg-[#25D366] p-4 text-white">
                <p className="font-heading font-bold text-lg">TTS Cakes & Events</p>
                <p className="text-sm opacity-90">Usually replies instantly</p>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
                {/* Greeting */}
                <div className="mb-4 p-3 bg-[#0F0F0F] rounded-lg">
                  <p className="text-[#B8B2A7] text-sm leading-relaxed">
                    Hi! 👋 What can we help you with today?
                  </p>
                </div>

                {/* Quick Options */}
                <div className="space-y-2">
                  {quickOptions.map((option, index) => (
                    <a
                      key={index}
                      href={getWhatsAppLink(option.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-left p-3 bg-[#0F0F0F] hover:bg-[#2A2A2A] border border-[#2A2A2A] rounded-lg text-[#F7F2EA] hover:text-[#E8493F] transition-all duration-200 text-sm font-medium group"
                    >
                      <span className="group-hover:translate-x-1 inline-block transition-transform">
                        {option.label}
                      </span>
                    </a>
                  ))}
                </div>

                {/* Or direct message */}
                <div className="pt-2 border-t border-[#2A2A2A] mt-4">
                  <a
                    href={defaultLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1fa857] text-white p-3 rounded-lg font-semibold transition-colors text-sm"
                  >
                    <Send size={16} />
                    Send Message
                  </a>
                </div>
              </div>

              {/* Footer Info */}
              <div className="bg-[#0F0F0F] px-4 py-3 border-t border-[#2A2A2A] text-center">
                <p className="text-[#B8B2A7] text-xs">
                  {siteConfig.contact.location}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
