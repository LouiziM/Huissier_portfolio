"use client"

import Link from "next/link"
import { useState } from "react"
import { useTranslations } from 'next-intl'

export function Footer() {
  const [showPhone, setShowPhone] = useState(false)
  const t = useTranslations('Footer')

  return (
    <footer className="bg-[#2d2d35] text-white pt-16 pb-0">
      <div className="container mx-auto px-4">
        {/* Contact Info Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#373743] p-4 flex justify-center items-center golden-border golden-glow slide-up">
            <div className="flex flex-col items-center text-center">
              <div className="text-primary mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h5 className="text-white text-lg font-medium mb-1">{t('officeTitle')}</h5>
              <p className="text-gray-300">{t('officeAddress')}</p>
            </div>
          </div>

          <div className="bg-[#373743] p-4 flex justify-center items-center golden-border golden-glow slide-up animation-delay-100">
            <div className="flex flex-col items-center text-center">
              <div className="text-primary mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h5 className="text-white text-lg font-medium mb-1">{t('emailTitle')}</h5>
              <p className="text-gray-300">khaddari02@gmail.com</p>
            </div>
          </div>

          <div className="bg-[#373743] p-4 flex justify-center items-center golden-border golden-glow slide-up animation-delay-200">
            <div className="flex flex-col items-center text-center">
              <div className="text-primary mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h5 className="text-white text-lg font-medium mb-1">{t('phoneTitle')}</h5>
              <a href="https://wa.me/212627273910" className="hover:text-gold transition-colors" target="_blank" rel="noopener noreferrer">
              
              <p className="text-gray-300">{t('phoneNumbers')}</p>
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="text-center md:text-left slide-up">
            <Link href="/" className="text-primary text-3xl font-bold mb-4 inline-block">
              KHADDARI ABDELMOUTTALIB
            </Link>
            <p className="text-gray-400 mb-6">
              {t('description')}
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/khaddari-abdelmottalib-70a45123b/?originalSubdomain=ma"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded flex items-center justify-center border border-gray-600 text-gray-400 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Popular Links */}
          <div className="text-center md:text-left slide-up animation-delay-100">
            <h4 className="text-primary text-xl font-medium mb-6">{t('popularLinks')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-primary mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href="#accueil" className="text-gray-300 hover:text-primary transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-primary mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href="#a-propos" className="text-gray-300 hover:text-primary transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-primary mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href="#services" className="text-gray-300 hover:text-primary transition-colors">
                  {t('services')}
                </Link>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-primary mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href="#missions" className="text-gray-300 hover:text-primary transition-colors">
                  {t('missions')}
                </Link>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-primary mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href="#contact" className="text-gray-300 hover:text-primary transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left slide-up animation-delay-200">
            <h4 className="text-primary text-xl font-medium mb-6">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-primary mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  {t('faq')}
                </Link>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-primary mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  {t('help')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-[#373743] py-4 px-4 mt-5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0 text-center md:text-left">
            {t('copyright')}
          </p>
          <div className="flex items-center justify-center">
            <p className="mr-10 text-gray-400">
              {t('designedBy')}{" "}
              <button
                onClick={() => setShowPhone(!showPhone)}
                className="text-primary font-semibold hover:underline cursor-pointer"
              >
                {showPhone ? t('devPhone') : t('devName')}
              </button>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}