import type { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/sections/Hero'
import HowItWorks from '@/components/sections/HowItWorks'
import Overview from '@/components/sections/Overview'
import Reminders from '@/components/sections/Reminders'
import Proof from '@/components/sections/Proof'
import Roles from '@/components/sections/Roles'
import Privacy from '@/components/sections/Privacy'
import Faq from '@/components/sections/Faq'
import FinalCta from '@/components/sections/FinalCta'
import Offer from '@/components/sections/Offer'
import Footer from '@/components/sections/Footer'
import VideoDialog from '@/components/video/VideoDialog'
import CurlObserver from '@/components/motion/CurlObserver'
import LinkOpenPing from '@/components/LinkOpenPing'
import posterHero from '@/assets/poster-hero.jpg'

// Naslov i opis dolaze iz layouta, ovde samo kanonska adresa
export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <HowItWorks />
        <Overview />
        <Reminders />
        <Proof />
        <Roles />
        <Privacy />
        <Faq />
        <FinalCta />
        <Offer />
      </main>
      <Footer />
      <VideoDialog src="/media/pratiplati-video.mp4" poster={posterHero.src} />
      <CurlObserver />
      <LinkOpenPing />
    </>
  )
}
