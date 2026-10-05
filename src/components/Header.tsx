'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, MessageCircle } from 'lucide-react'
import { getWhatsAppLink, logoImage } from '@/data/site'
import { motion } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      // Add padding to account for scrollbar
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`
      }
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [isOpen])

  // Close menu on Esc key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen])

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        const isMenuButton = (e.target as HTMLElement).closest('button[aria-label="Toggle menu"]')
        if (!isMenuButton && isOpen) {
          setIsOpen(false)
        }
      }
    }
    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  }, [isOpen])

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
      style={{
        paddingTop: 'max(1rem, env(safe-area-inset-top))',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo - Circular, min 40px */}
        <Link href="#" className="flex-shrink-0 group">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-text-charcoal flex items-center justify-center border-2 border-text-charcoal">
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
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-text-muted hover:text-accent-coral-dark transition-colors text-sm font-medium py-2 px-1"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button - Desktop and Mobile */}
        <div className="flex items-center gap-2">
          {/* Desktop full button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-accent-coral hover:bg-accent-coral-dark text-white px-5 sm:px-6 py-2 rounded-full font-medium transition-colors text-sm h-10 sm:h-auto"
          >
            <MessageCircle size={18} />
            <span className="hidden sm:inline">Chat</span>
          </a>

          {/* Mobile icon-only button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden flex items-center justify-center w-11 h-11 bg-accent-coral hover:bg-accent-coral-dark text-white rounded-full transition-colors"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={20} />
          </a>

          {/* Mobile Menu Button - 44x44 minimum tap target */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center hover:bg-bg-blush rounded-lg transition-colors text-text-charcoal -mr-1"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden bg-bg-white border-t border-bg-blush px-4 py-4 space-y-1"
          style={{
            paddingBottom: 'max(1rem, env(safe-area-inset-bottom))',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-text-muted hover:text-accent-coral-dark transition-colors py-3 px-3 font-medium rounded-lg hover:bg-bg-blush"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-accent-coral hover:bg-accent-coral-dark text-white px-4 py-3 rounded-full font-medium transition-colors text-center mt-4 h-11 flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            Chat on WhatsApp
          </a>
        </motion.div>
      )}
    </header>
  )
}
