import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'

export default function Home() {
  return (
    <main className="bg-[#0F0F0F] min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <HowItWorks />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
