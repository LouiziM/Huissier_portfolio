import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { useTranslations } from 'next-intl'

export function MissionsSection() {
  const t = useTranslations('MissionsSection')
  
  const missions = [
    {
      title: t('missions.efficiency.title'),
      description: t('missions.efficiency.description'),
    },
    {
      title: t('missions.confidentiality.title'),
      description: t('missions.confidentiality.description'),
    },
    {
      title: t('missions.professionalism.title'),
      description: t('missions.professionalism.description'),
    },
    {
      title: t('missions.accessibility.title'),
      description: t('missions.accessibility.description'),
    },
  ]

  return (
    <section id="missions" className="py-20 relative">
      <div className="section-content relative z-10">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('description')}
            </p>
            <div className="section-divider mx-auto"></div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {missions.map((mission, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <Card className="golden-border golden-glow bg-[#f8f4ea] dark:bg-[#2d2a20]">
                <CardContent className="p-6 flex items-start">
                  <CheckCircle className="h-6 w-6 text-gold mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{mission.title}</h3>
                    <p className="text-muted-foreground">{mission.description}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={500}>
          <div className="mt-12 p-6 bg-[#f8f4ea] dark:bg-[#2d2a20] rounded-lg border border-gold/20">
            <p className="text-center text-lg font-medium">
              {t('commitment')}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}