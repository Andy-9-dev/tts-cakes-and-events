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

  const whatsappMessage = "Hi! 👋 I'd like to enquire about your services."
  const whatsappLink = getWhatsAppLink(whatsappMessage)

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-[#1A1A1A] shadow-lg' : 'bg-[#0F0F0F]'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex-shrink-0 flex items-center gap-2 group">
          <div className="relative w-10 h-10">
            <Image
              src={logoImage.src}
              alt={logoImage.alt}
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="hidden sm:inline font-heading font-bold text-lg text-[#F7F2EA] group-hover:text-[#E8493F] transition-colors">
            TTS Cakes
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#B8B2A7] hover:text-[#E8493F] transition-colors text-sm font-medium"
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
            className="flex items-center gap-2 bg-[#E8493F] hover:bg-[#d63930] text-[#F7F2EA] px-6 py-2 rounded-lg font-medium transition-colors text-sm"
          >
            <MessageCircle size={18} />
            Chat
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-[#1A1A1A] rounded-lg transition-colors text-[#F7F2EA]"
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
          className="md:hidden bg-[#1A1A1A] border-t border-[#2A2A2A] px-4 py-4 space-y-3"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-[#B8B2A7] hover:text-[#E8493F] transition-colors py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#E8493F] hover:bg-[#d63930] text-[#F7F2EA] px-4 py-3 rounded-lg font-medium transition-colors text-center mt-4"
            onClick={() => setIsOpen(false)}
          >
            Chat on WhatsApp
          </a>
        </motion.div>
      )}
    </header>
  )
}
