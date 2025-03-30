import { QuoteIcon } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { useTranslations } from 'next-intl'

export default function Quote() {
  const t = useTranslations('QuoteSection')

  return (
    <section className="bg-gold/5 py-12">
      <div className="container mx-auto max-w-3xl px-4 md:px-0">
        <AnimatedSection animation="scale">
          <div className="relative bg-[#f8f4ea] dark:bg-[#2d2a20] p-6 rounded-lg shadow-gold-md border border-gold/20">
            <div className="absolute top-0 left-0 -mt-6 ml-4 text-gold">
              <QuoteIcon className="h-8 w-8" />
            </div>
            <blockquote className="text-lg font-semibold text-gray-700 dark:text-gray-200 text-center">
              <p className="mb-4 italic">
                {t('quote')}
              </p>
              <footer className="text-sm text-gold">— {t('author')}</footer>
            </blockquote>
            <div className="absolute bottom-0 right-0 -mb-6 mr-4 text-gold">
              <QuoteIcon className="h-8 w-8 transform rotate-180" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}