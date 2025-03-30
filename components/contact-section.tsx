'use client'
import { useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Loader2, CheckCircle } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { useTranslations } from 'next-intl'
import emailjs from '@emailjs/browser'

export function ContactSection() {
  const t = useTranslations('ContactSection')
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      if (!formRef.current) return

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      setSubmitStatus('success')
      formRef.current.reset()
    } catch (error) {
      console.error('Failed to send message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-20 relative bg-luxury-pattern-2 before:content-[''] before:absolute before:inset-0 before:bg-white/80 dark:before:bg-gray-900/90 before:z-0"
    >
      <div className="section-content relative z-10">
        <AnimatedSection animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
            <p className="px-2 text-muted-foreground">
              {t('description')}
            </p>
            <div className="section-divider mx-auto"></div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection animation="fade-right" delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="golden-border golden-glow bg-[#f8f4ea] dark:bg-[#2d2a20]">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-semibold mb-2">{t('phoneTitle')}</h3>
                  <a href="https://wa.me/212627273910" className="hover:text-gold transition-colors" target="_blank" rel="noopener noreferrer">                    {t('phone1')}
                  </a>
                  <a href="tel:0522541908" className="text-muted-foreground hover:text-gold transition-colors">
                    {t('phone2')}
                  </a>
                </CardContent>
              </Card>

              <Card className="golden-border golden-glow bg-[#f8f4ea] dark:bg-[#2d2a20]">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-semibold mb-2">{t('emailTitle')}</h3>
                  <a
                    href="mailto:khaddari02@gmail.com"
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    khaddari02@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="golden-border golden-glow bg-[#f8f4ea] dark:bg-[#2d2a20]">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-semibold mb-2">{t('hoursTitle')}</h3>
                  <p className="text-muted-foreground">{t('weekdaysHours')}</p>
                  <p className="text-muted-foreground">{t('saturdayHours')}</p>
                </CardContent>
              </Card>

              <Card className="golden-border golden-glow bg-[#f8f4ea] dark:bg-[#2d2a20]">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-semibold mb-2">{t('addressTitle')}</h3>
                  <a
                    href="https://maps.google.com/maps/search/3%20Rue%20de%20Thann%2C%20Casablanca%2020000%2C%20Maroc/@33.58796557520017,-7.611025907099248,17z?hl=fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-gold transition-colors text-center"
                  >
                    {t('address')}
                  </a>
                </CardContent>
              </Card>
            </div>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="aspect-video w-full rounded-lg overflow-hidden border-2 border-gold/30 golden-glow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8864016689473!2d-7.613214724999999!3d33.587965575200174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM1JzE2LjciTiA3wrAzNic0MC4wIlc!5e0!3m2!1sfr!2sma!4v1616661234567!5m2!1sfr!2sma"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title={t('mapTitle')}
                ></iframe>
              </div>
            </AnimatedSection>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={300}>
            <Card className="golden-border golden-glow bg-[#f8f4ea] dark:bg-[#2d2a20]">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl font-semibold mb-6">{t('formTitle')}</h3>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="nom" className="text-sm font-medium">
                        {t('lastName')}
                      </label>
                      <Input
                        id="nom"
                        name="last_name"
                        placeholder={t('lastNamePlaceholder')}
                        required
                        className="border-gold/30 focus:border-gold focus:ring-gold/30"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="prenom" className="text-sm font-medium">
                        {t('firstName')}
                      </label>
                      <Input
                        id="prenom"
                        name="first_name"
                        placeholder={t('firstNamePlaceholder')}
                        required
                        className="border-gold/30 focus:border-gold focus:ring-gold/30"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      {t('email')}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t('emailPlaceholder')}
                      required
                      className="border-gold/30 focus:border-gold focus:ring-gold/30"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="telephone" className="text-sm font-medium">
                      {t('phone')}
                    </label>
                    <Input
                      id="telephone"
                      name="phone"
                      placeholder={t('phonePlaceholder')}
                      required
                      className="border-gold/30 focus:border-gold focus:ring-gold/30"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="sujet" className="text-sm font-medium">
                      {t('subject')}
                    </label>
                    <Input
                      id="sujet"
                      name="subject"
                      placeholder={t('subjectPlaceholder')}
                      required
                      className="border-gold/30 focus:border-gold focus:ring-gold/30"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      {t('message')}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t('messagePlaceholder')}
                      rows={5}
                      required
                      className="border-gold/30 focus:border-gold focus:ring-gold/30"
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="h-5 w-5" />
                      <p>{t('submitSuccess')}</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                      <p>{t('submitError')}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold hover:bg-gold-dark text-black hover:text-white animate-gold-pulse"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t('submitting')}
                      </>
                    ) : (
                      t('submit')
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}