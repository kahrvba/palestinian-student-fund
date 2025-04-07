"use client"

import { useRef, useEffect, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface GSAPRevealProps {
  children: ReactNode
  animation?: "fade" | "slide-up" | "slide-left" | "slide-right" | "scale"
  delay?: number
  duration?: number
  threshold?: number
  className?: string
}

export default function GSAPReveal({
  children,
  animation = "fade",
  delay = 0,
  duration = 0.8,
  threshold = 0.2,
  className = "",
}: GSAPRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const element = ref.current
    if (!element) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: `top bottom-=${threshold * 100}%`,
        toggleActions: "play none none none",
      },
    })

    switch (animation) {
      case "fade":
        tl.fromTo(element, { opacity: 0 }, { opacity: 1, duration, delay })
        break
      case "slide-up":
        tl.fromTo(element, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration, delay })
        break
      case "slide-left":
        tl.fromTo(element, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration, delay })
        break
      case "slide-right":
        tl.fromTo(element, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration, delay })
        break
      case "scale":
        tl.fromTo(element, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration, delay })
        break
    }

    return () => {
      if (tl) tl.kill()
    }
  }, [animation, delay, duration, threshold])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

