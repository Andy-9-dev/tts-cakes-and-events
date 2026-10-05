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
    label: 'Order a cake',
    message: "Hi, I'd like to order a custom cake. My event date is...",
  },
  {
    label: 'Order food / catering',
    message: "Hi, I'd like to order food for my event. I'm interested in...",
  },
  {
    label: 'Small chops for an event',
    message: "Hi, I'd like to order small chops for my event. I need...",
  },
  {
    label: 'Plan an event',
    message: "Hi, I need help planning and decorating my event. The date is...",
  },
  {
    label: 'Ask a question',
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

  const defaultMessage = "Hi! What can we help you with today?"
  const defaultLink = getWhatsAppLink(defaultMessage)

  return (
    <>
      {/* Floating Button - 56px with safe area */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed z-40"
            style={{
              bottom: 'max(1.5rem, calc(1.5rem + env(safe-area-inset-bottom)))',
              right: 'max(1.5rem, calc(1.5rem + env(safe-area-inset-right)))',
            }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="w-14 h-14 sm:w-16 sm:h-16 bg-accent-coral hover:bg-accent-coral-dark text-white rounded-full flex items-center justify-center shadow-soft-md hover:shadow-soft transition-all duration-200"
              aria-label="Open WhatsApp chat"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X size={24} className="sm:w-7 sm:h-7" />
              ) : (
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <MessageCircle size={24} className="sm:w-7 sm:h-7" />
                </motion.div>
              )}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Popup - Bottom sheet on mobile, floating card on sm+ */}
      <AnimatePresence>
        {isOpen && isVisible && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 z-30"
            />

            {/* Popup Panel - Bottom sheet on mobile */}
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="fixed bottom-0 sm:bottom-24 right-0 sm:right-6 z-40 bg-bg-white border-t sm:border-2 sm:border-accent-coral rounded-t-3xl sm:rounded-2xl shadow-soft-md max-w-full sm:max-w-xs sm:w-full w-full sm:max-h-96 h-[70svh] sm:h-auto overflow-hidden"
              style={{
                paddingBottom: 'env(safe-area-inset-bottom)',
              }}
            >
              {/* Handle bar on mobile */}
              <div className="sm:hidden h-1 bg-bg-blush rounded-full w-12 mx-auto mt-2 mb-2"></div>

              {/* Header */}
              <div className="bg-accent-coral p-3 sm:p-4 text-white sticky top-0">
                <p className="font-heading font-bold text-base sm:text-lg">TTS Cakes & Events</p>
                <p className="text-xs sm:text-sm opacity-90">We reply instantly</p>
              </div>

              {/* Content - Scrollable */}
              <div className="p-3 sm:p-4 space-y-2 sm:space-y-3 max-h-[calc(70svh-140px)] sm:max-h-96 overflow-y-auto">
                {/* Greeting */}
                <div className="mb-2 sm:mb-4 p-2 sm:p-3 bg-bg-blush rounded-lg">
                  <p className="text-text-charcoal text-xs sm:text-sm leading-relaxed">
                    Hi! What can we help you with today?
                  </p>
                </div>

                {/* Quick Options */}
                <div className="space-y-1 sm:space-y-2">
                  {quickOptions.map((option, index) => (
                    <a
                      key={index}
                      href={getWhatsAppLink(option.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-left p-2 sm:p-3 bg-bg-cream hover:bg-bg-blush border border-bg-blush rounded-lg text-text-charcoal hover:text-accent-coral transition-all duration-200 text-xs sm:text-sm font-medium group h-11 sm:h-auto flex items-center"
                    >
                      <span className="group-hover:translate-x-1 inline-block transition-transform truncate">
                        {option.label}
                      </span>
                    </a>
                  ))}
                </div>

                {/* Or direct message */}
                <div className="pt-2 sm:pt-2 border-t border-bg-blush mt-2 sm:mt-4">
                  <a
                    href={defaultLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-accent-coral hover:bg-accent-coral-dark text-white p-2 sm:p-3 rounded-lg font-semibold transition-colors text-xs sm:text-sm h-11 sm:h-auto"
                  >
                    <Send size={16} />
                    Send Message
                  </a>
                </div>
              </div>

              {/* Footer Info */}
              <div className="bg-bg-cream px-3 sm:px-4 py-2 sm:py-3 border-t border-bg-blush text-center hidden sm:block">
                <p className="text-text-muted text-xs break-words">
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
