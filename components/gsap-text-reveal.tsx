"use client"

import { useRef, useEffect, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface GSAPTextRevealProps {
  children: ReactNode
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
  delay?: number
  duration?: number
  threshold?: number
  className?: string
}

export default function GSAPTextReveal({
  children,
  element: Element = "h2",
  delay = 0,
  duration = 0.8,
  threshold = 0.2,
  className = "",
}: GSAPTextRevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const element = ref.current
    if (!element) return

    // Create a simple reveal animation without SplitText
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: `top bottom-=${threshold * 100}%`,
        toggleActions: "play none none none",
      },
    })

    // Set initial state
    gsap.set(element, {
      opacity: 0,
      y: 20,
    })

    // Animate to revealed state
    tl.to(element, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: "power2.out",
    })

    return () => {
      if (tl) tl.kill()
    }
  }, [children, delay, duration, threshold])

  return (
    <Element ref={ref} className={`${className} overflow-hidden`}>
      {children}
    </Element>
  )
}

