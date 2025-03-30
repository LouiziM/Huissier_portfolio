import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { useTranslations } from 'next-intl'

export function HeroSection() {
  const t = useTranslations('HeroSection')

  return (
    <section
      id="accueil"
      className="relative pb-20 md:pb-32 overflow-hidden pt-0 md:pt-10"
      style={{
        backgroundImage: "url('/bureau.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b  to-background/20 pointer-events-none"></div>
      <div className="container relative z-10 px-4 sm:px-6 pt-10">
        <AnimatedSection animation="fade-down">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="block text-outline-gold !text-black">
                {t('titleLine1')}
              </span>
              <span className="text-gold-gradient animate-text-shimmer">
                {t('titleLine2')}
              </span>
            </h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-6 animate-border-glow"></div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <p className="text-white sm:text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto px-4 sm:px-0 text-center">
            {t('description')}
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={400}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="#contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-gold-light via-gold to-gold-dark py-6 px-8 text-lg font-bold text-black shadow-gold-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-gold-xl dark:text-white dark:from-gold dark:via-gold-light dark:to-gold"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gold/20 via-transparent to-gold/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              <span className="relative flex items-center justify-center">
                {t('appointmentButton')}
                <span className="ml-2 h-1.5 w-1.5 rounded-full bg-black dark:bg-white animate-pulse"></span>
              </span>
              <span className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-gold-light to-transparent transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
            </Link>

            <Link
              href="#services"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border-2 border-white py-6 px-8 text-lg font-bold text-white transition-all duration-300 ease-out hover:bg-white hover:text-black dark:border-white dark:text-white dark:hover:text-black"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-0"></span>
              <span className="relative flex items-center">
                {t('servicesButton')}
                <ChevronRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute -bottom-0.5 right-0 h-0.5 w-0 bg-white transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
            </Link>
          </div>
        </AnimatedSection>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}