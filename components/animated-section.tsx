"use client"

import type React from "react"

import { useIntersectionObserver } from "@/lib/use-intersection-observer"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale"
  delay?: number
  threshold?: number
  rootMargin?: string
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
  rootMargin = "-50px",
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
  })

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-up":
        return "translate-y-10 opacity-0"
      case "fade-down":
        return "translate-y-[-10px] opacity-0"
      case "fade-left":
        return "translate-x-[-10px] opacity-0"
      case "fade-right":
        return "translate-x-10 opacity-0"
      case "scale":
        return "scale-95 opacity-0"
      default:
        return "opacity-0"
    }
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ease-out ${className} ${
        isIntersecting ? "translate-y-0 translate-x-0 scale-100 opacity-100" : getAnimationClass()
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

