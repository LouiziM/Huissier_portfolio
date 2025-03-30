import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { useTranslations } from 'next-intl'

export function AboutSection() {
  const t = useTranslations('AboutSection')
  
  return (
    <section id="a-propos" className="py-20 bg-secondary/50">
      <div className="section-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-right">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/80 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-1 w-24 h-24 bg-primary/80 rounded-lg"></div>
              <div className="relative aspect-square max-w-md mx-auto lg:mx-0 overflow-hidden rounded-lg shadow-lg golden-border animate-border-glow bg-[#f8f4ea] dark:bg-[#2d2a20]">
                <Image
                  src="/abdo.jpeg?height=600&width=600"
                  alt={t('imageAlt')}
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={200}>
            <h2 className="px-2 text-3xl md:text-4xl font-bold mb-6">{t('title')}</h2>
            <div className="section-divider w-24 mx-0 mb-6"></div>

            <p className="px-2 text-muted-foreground mb-4">
              {t('description1')}
            </p>

            <p className="px-2 text-muted-foreground mb-6">
              {t('description2')}
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}