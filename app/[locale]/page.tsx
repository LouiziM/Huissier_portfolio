import { AboutSection } from "@/components/about-section"
import { BackToTop } from "@/components/back-to-top"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MissionsSection } from "@/components/missions-section"
import { ServicesSection } from "@/components/services-section"
import Quote from "@/components/quote"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <ServicesSection />
          <Quote />
          <MissionsSection />
          <AboutSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

