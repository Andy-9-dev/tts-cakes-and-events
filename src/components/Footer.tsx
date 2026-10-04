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
    <footer className="bg-dark-bg text-white py-12 md:py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 md:mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="#" className="flex items-center gap-3 mb-4">
              {/* Circular Logo */}
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center border-2 border-white">
                <Image
                  src={logoImage.src}
                  alt={logoImage.alt}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <span className="font-heading font-bold text-lg text-white">
                TTS
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Premium cakes, catering, and event planning in Lagos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-accent-coral transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                'Custom Cakes',
                'Food & Catering',
                'Small Chops',
                'Event Planning',
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-white/60 hover:text-accent-coral transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-accent-coral transition-colors text-sm"
                >
                  <Share2 size={16} />
                  Instagram
                </a>
              )}
              <a
                href={`tel:${siteConfig.contact.phoneNumbers[0]}`}
                className="flex items-center gap-2 text-white/60 hover:text-accent-coral transition-colors text-sm"
              >
                <Phone size={16} />
                Call us
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          <p className="text-white/60 text-center text-sm">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
