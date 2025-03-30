import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, FileText, Gavel, FileCheck, FileSearch, UserCheck } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { useTranslations } from 'next-intl'

export function ServicesSection() {
  const t = useTranslations('ServicesSection')

  const services = [
    {
      title: t('services.actService.title'),
      description: t('services.actService.description'),
      icon: <FileText className="h-10 w-10 text-gold" />,
    },
    {
      title: t('services.judgmentExecution.title'),
      description: t('services.judgmentExecution.description'),
      icon: <Gavel className="h-10 w-10 text-gold" />,
    },
    {
      title: t('services.observations.title'),
      description: t('services.observations.description'),
      icon: <FileCheck className="h-10 w-10 text-gold" />,
    },
    {
      title: t('services.debtRecovery.title'),
      description: t('services.debtRecovery.description'),
      icon: <Scale className="h-10 w-10 text-gold" />,
    },
    {
      title: t('services.legalDrafting.title'),
      description: t('services.legalDrafting.description'),
      icon: <FileSearch className="h-10 w-10 text-gold" />,
    },
    {
      title: t('services.legalAdvice.title'),
      description: t('services.legalAdvice.description'),
      icon: <UserCheck className="h-10 w-10 text-gold" />,
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('description')}
            </p>
            <div className="w-24 h-1 bg-gold mx-auto mt-6 animate-border-glow"></div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <Card className="border-2 border-gold/30 hover:border-gold/70 shadow-gold-md hover:shadow-gold-lg transition-all duration-300 bg-[#f8f4ea] dark:bg-[#2d2a20]">
                <CardHeader className="flex flex-col items-center text-center pb-2">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:animate-float">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}