"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Menu, X, Globe, MoonIcon, SunIcon, Linkedin } from "lucide-react"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useRouter, usePathname } from "@/i18n/navigation"
import { useTranslations } from 'next-intl'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('Header')

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const LocaleSwitcher = () => {
    const [isPending, startTransition] = useState(false)

    const onSelectChange = (nextLocale: string) => {
      startTransition(true)
      router.replace(pathname, { locale: nextLocale })
    }

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            disabled={isPending}
            className="w-10 h-10 flex items-center justify-center border border-gold rounded-sm text-gold hover:bg-gold hover:text-black transition-colors dark:border-gold dark:text-gold dark:hover:bg-gold dark:hover:text-black"
          >
            <Globe className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => onSelectChange("fr")}>
            <span className="mr-2">🇫🇷</span> {t('french')}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSelectChange("ar")}>
            <span className="mr-2">🇲🇦</span> {t('arabic')}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSelectChange("en")}>
            <span className="mr-2">🇺🇸</span> {t('english')}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <header
      className={`relative z-50 flex flex-col md:flex-row transition-all duration-300 ${isScrolled ? "shadow-gold-md bg-white/95 backdrop-blur-sm dark:bg-gray-900/95" : ""
        }`}
    >
      {/* Left side with logo */}
      <div className="bg-[#2d2d35] w-full md:w-[280px] lg:w-[342px] h-[80px] md:h-[150px] flex items-center justify-between px-4 md:justify-center">
        <div className="flex flex-col items-center md:items-start">
          <Link
            href="/"
            className="text-gold text-xl md:text-2xl lg:text-3xl font-bold text-gold-gradient animate-text-shimmer"
          >
            KHADDARI ABDELMOTTALIB
          </Link>
          <span className="text-xs md:text-sm text-gold-light italic font-serif tracking-wider">
            {t('jobTitle')}
          </span>
        </div>

        {/* Mobile icons container */}
        <div className="flex items-center gap-2 md:hidden">
          <LocaleSwitcher />
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-8 h-8 flex items-center justify-center border border-gold rounded-sm text-gold hover:bg-gold hover:text-black transition-colors"
              aria-label={t('toggleTheme')}
            >
              {theme === "dark" ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
            </button>
          )}



          {/* Mobile menu button */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="w-8 h-8 flex items-center justify-center border-2 border-gold rounded-sm text-gold hover:bg-gold hover:text-black transition-colors animate-border-glow">
                <Menu className="h-4 w-4" />
                <span className="sr-only">{t('menu')}</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full p-0">
              <div className="flex flex-col h-full bg-[#2d2d35] text-white">
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                  <Link href="/" className="flex flex-col">
                    <span className="text-xl font-bold text-gold-gradient animate-text-shimmer">
                      KHADDARI ABDELMOTTALIB
                    </span>
                    <span className="text-xs text-gold-light italic font-serif">{t('jobTitle')}</span>
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:text-gold">
                      <div className="!w-16 !h-16 mr-8">
                        <X className="w-full h-full" />
                      </div>
                      <span className="sr-only">{t('close')}</span>
                    </Button>
                  </SheetClose>
                </div>

                {/* Contact info in mobile menu */}
                <div className="p-4 border-b border-gray-700/50">
                  <div className="flex items-center gap-2 mb-2 text-sm text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gold"
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
                    <a href="mailto:khaddari02@gmail.com" className="hover:text-gold transition-colors">
                      khaddari02@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gold"
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
                    <a href="https://wa.me/212627273910" className="hover:text-gold transition-colors" target="_blank" rel="noopener noreferrer">
                      {t('phone')}
                    </a>
                  </div>
                </div>

                <nav className="flex flex-col gap-1 p-4 flex-grow">
                  <Link
                    href="#accueil"
                    className="text-lg font-extrabold p-4 hover:bg-gold hover:text-black transition-colors rounded animate-fade-in-right"
                    style={{ animationDelay: "100ms" }}
                  >
                    {t('home')}
                  </Link>
                  <Link
                    href="#a-propos"
                    className="text-lg font-extrabold p-4 hover:bg-gold hover:text-black transition-colors rounded animate-fade-in-right"
                    style={{ animationDelay: "200ms" }}
                  >
                    {t('about')}
                  </Link>
                  <Link
                    href="#services"
                    className="text-lg font-extrabold p-4 hover:bg-gold hover:text-black transition-colors rounded animate-fade-in-right"
                    style={{ animationDelay: "300ms" }}
                  >
                    {t('services')}
                  </Link>
                  <Link
                    href="#missions"
                    className="text-lg font-extrabold p-4 hover:bg-gold hover:text-black transition-colors rounded animate-fade-in-right"
                    style={{ animationDelay: "400ms" }}
                  >
                    {t('missions')}
                  </Link>
                  <Link
                    href="#contact"
                    className="text-lg font-extrabold p-4 hover:bg-gold hover:text-black transition-colors rounded animate-fade-in-right"
                    style={{ animationDelay: "500ms" }}
                  >
                    {t('contact')}
                  </Link>
                </nav>

                {/* Social icons in mobile menu */}
                <div className="flex justify-center gap-4 p-4 border-t border-gray-700/50">
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center border border-gold rounded-sm text-gold hover:bg-gold hover:text-black transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>

                <div className="p-4 border-t border-gray-700">
                  <Button className="w-full bg-gold hover:bg-gold-dark text-black hover:text-white text-base font-bold py-3 animate-gold-pulse">
                    {t('quoteRequest')}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Right side with content */}
      <div className="flex-1 bg-white dark:bg-gray-900">
        {/* Top bar with contact info and social - hidden on mobile */}
        <div className="hidden md:flex border-b border-gray-200 dark:border-gray-800 py-2 md:py-3 px-4 md:px-6 flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left w-full sm:w-auto">
            <a
              href="mailto:khaddari02@gmail.com"
              className="flex items-center gap-2 text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-gold transition-colors group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="min-h-6  min-w-6 md:h-5 md:w-5 text-gold group-hover:animate-float"
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
              <span>khaddari02@gmail.com</span>
            </a>
            <a href="https://wa.me/212627273910" className="flex items-center gap-2 text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-gold transition-colors group" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="min-h-6  min-w-6  md:h-5 md:w-5 text-gold group-hover:animate-float"
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
              <span>{t('phone')}</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <LocaleSwitcher />

            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-10 h-10 flex items-center justify-center border border-gold rounded-sm text-gold hover:bg-gold hover:text-black transition-colors"
                aria-label={t('toggleTheme')}
              >
                {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
              </button>
            )}
            <a
              href="https://www.linkedin.com/in/khaddari-abdelmottalib-70a45123b/?originalSubdomain=ma"
              className="w-10 h-10 flex items-center justify-center border border-gold rounded-sm text-gold hover:bg-gold hover:text-black transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Navigation menu */}
        <div className="hidden md:block">
          <div className="flex justify-between items-center px-4 md:px-6 h-[60px] md:h-[76px]">
            <nav className="hidden sm:flex items-center gap-4 xl:gap-8">
              <Link
                href="#accueil"
                className="text-base xl:text-lg font-extrabold hover:text-gold transition-colors relative group"
              >
                {t('home')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#a-propos"
                className="text-base xl:text-lg font-extrabold hover:text-gold transition-colors relative group"
              >
                {t('about')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#services"
                className="text-base xl:text-lg font-extrabold hover:text-gold transition-colors relative group"
              >
                {t('services')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#missions"
                className="text-base xl:text-lg font-extrabold hover:text-gold transition-colors relative group"
              >
                {t('missions')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#contact"
                className="text-base xl:text-lg font-extrabold hover:text-gold transition-colors relative group"
              >
                {t('contact')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            <div className="hidden lg:block">
              <Button className="bg-gold hover:bg-gold-dark text-black hover:text-white font-extrabold rounded-md px-6 py-3 h-auto text-base transition-colors shadow-gold-md hover:shadow-gold-lg animate-gold-pulse">
                {t('quoteRequest')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}