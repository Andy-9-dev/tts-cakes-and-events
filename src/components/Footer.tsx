'use client'

import Image from 'next/image'
import Link from 'next/link'
import { logoImage, siteConfig } from '@/data/site'
import { Share2, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-dark-bg text-white py-8 md:py-12 lg:py-16 border-t border-white/10" style={{ paddingBottom: 'max(2rem, calc(2rem + env(safe-area-inset-bottom)))' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8 lg:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="#" className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              {/* Circular Logo */}
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-white flex items-center justify-center border-2 border-white flex-shrink-0">
                <Image
                  src={logoImage.src}
                  alt={logoImage.alt}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <span className="font-heading font-bold text-base md:text-lg text-white">
                TTS
              </span>
            </Link>
            <p className="text-white/60 text-xs md:text-sm leading-relaxed break-words">
              Premium cakes, catering, and event planning in Lagos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-2 md:mb-4 text-sm md:text-base">
              Quick Links
            </h4>
            <ul className="space-y-1 md:space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-accent-coral transition-colors text-xs md:text-sm py-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white mb-2 md:mb-4 text-sm md:text-base">
              Services
            </h4>
            <ul className="space-y-1 md:space-y-2">
              {[
                'Custom Cakes',
                'Food & Catering',
                'Small Chops',
                'Event Planning',
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-white/60 hover:text-accent-coral transition-colors text-xs md:text-sm py-1 inline-block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading font-bold text-white mb-2 md:mb-4 text-sm md:text-base">
              Connect
            </h4>
            <div className="space-y-2 md:space-y-3">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-accent-coral transition-colors text-xs md:text-sm py-1 h-9 md:h-auto"
                >
                  <Share2 size={16} className="flex-shrink-0" />
                  <span className="break-words">Instagram</span>
                </a>
              )}
              <a
                href={`tel:${siteConfig.contact.phoneNumbers[0]}`}
                className="flex items-center gap-2 text-white/60 hover:text-accent-coral transition-colors text-xs md:text-sm py-1 h-9 md:h-auto"
              >
                <Phone size={16} className="flex-shrink-0" />
                <span className="break-all">Call us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-4 md:py-6 lg:py-8">
          <p className="text-white/60 text-center text-xs md:text-sm break-words">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
