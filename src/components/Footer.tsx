'use client'

import Image from 'next/image'
import Link from 'next/link'
import { logoImage, siteConfig } from '@/data/site'

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
    <footer className="bg-[#0F0F0F] border-t border-[#2A2A2A] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 md:mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="#" className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src={logoImage.src}
                  alt={logoImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-heading font-bold text-lg text-[#F7F2EA]">
                TTS Cakes
              </span>
            </Link>
            <p className="text-[#B8B2A7] text-sm leading-relaxed">
              Premium cakes, catering, and event planning in Lagos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-[#F7F2EA] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#B8B2A7] hover:text-[#E8493F] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-[#F7F2EA] mb-4">
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
                    className="text-[#B8B2A7] hover:text-[#E8493F] transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading font-bold text-[#F7F2EA] mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#B8B2A7] hover:text-[#E8493F] transition-colors text-sm"
                >
                  <span>📸</span> Instagram
                </a>
              )}
              <a
                href={`tel:${siteConfig.contact.phoneNumbers[0]}`}
                className="flex items-center gap-2 text-[#B8B2A7] hover:text-[#E8493F] transition-colors text-sm"
              >
                <span>📱</span> Call Us
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 text-[#B8B2A7] hover:text-[#E8493F] transition-colors text-sm"
              >
                <span>✉️</span> Email
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2A2A2A] py-8">
          <p className="text-[#B8B2A7] text-center text-sm">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
