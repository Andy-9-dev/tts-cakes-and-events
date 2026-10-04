'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, MessageCircle } from 'lucide-react'
import { getWhatsAppLink, logoImage } from '@/data/site'
import { motion } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  const whatsappMessage = "Hi! I'd like to enquire about your services."
  const whatsappLink = getWhatsAppLink(whatsappMessage)

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-bg-white shadow-soft'
          : 'bg-bg-cream'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo - Circular */}
        <Link href="#" className="flex-shrink-0 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-text-charcoal flex items-center justify-center border-2 border-text-charcoal">
            <Image
              src={logoImage.src}
              alt={logoImage.alt}
              fill
              className="object-cover"
              priority
              sizes="48px"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-text-muted hover:text-accent-coral-dark transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent-coral hover:bg-accent-coral-dark text-white px-6 py-2 rounded-full font-medium transition-colors text-sm"
          >
            <MessageCircle size={18} />
            Chat
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-bg-blush rounded-lg transition-colors text-text-charcoal"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-bg-white border-t border-bg-blush px-4 py-4 space-y-3"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-text-muted hover:text-accent-coral-dark transition-colors py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-accent-coral hover:bg-accent-coral-dark text-white px-4 py-3 rounded-full font-medium transition-colors text-center mt-4"
            onClick={() => setIsOpen(false)}
          >
            Chat on WhatsApp
          </a>
        </motion.div>
      )}
    </header>
  )
}
