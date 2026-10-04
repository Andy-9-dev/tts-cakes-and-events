import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import Videos from '@/components/Videos'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'

export default function Home() {
  return (
    <main className="bg-bg-cream min-h-screen">
      <Header />
      <Hero />
      <TrustStrip />
      <Services />
      <Gallery />
      <Videos />
      <HowItWorks />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
