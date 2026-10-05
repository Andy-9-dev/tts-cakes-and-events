import type { Metadata, Viewport } from 'next'
import { Fraunces, DM_Sans } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/data/site'

// Load fonts
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.metaDescription,
  keywords: siteConfig.seo.keywords,
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  // TODO: Update with real domain when available
  // metadataBase: new URL('https://ttscakes.com'),
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    // TODO: Update with real domain
    // url: 'https://ttscakes.com',
    title: siteConfig.seo.title,
    description: siteConfig.seo.metaDescription,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.title,
    description: siteConfig.seo.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <head>
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'LocalBusiness',
              name: siteConfig.name,
              description: siteConfig.description,
              image: 'https://ttscakes.com/images/logo.webp',
              url: 'https://ttscakes.com',
              telephone: siteConfig.contact.phoneNumbers[0],
              priceRange: '₦₦₦',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Lordreign Plaza beside First Bank, Ayobo Road',
                addressLocality: 'Lagos',
                addressCountry: 'NG',
              },
              areaServed: {
                '@type': 'City',
                name: 'Lagos',
              },
              sameAs: [siteConfig.social.instagram].filter(Boolean),
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
