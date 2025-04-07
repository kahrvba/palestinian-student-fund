"use client"

import { useRef, useEffect, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface ParallaxSectionProps {
  children: ReactNode
  backgroundImage: string
  overlayColor?: string
  overlayOpacity?: number
  speed?: number
  className?: string
}

export default function ParallaxSection({
  children,
  backgroundImage,
  overlayColor = "#000",
  overlayOpacity = 0.4,
  speed = 0.2,
  className = "",
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const background = backgroundRef.current

    if (!section || !background) return

    gsap.to(background, {
      y: `${speed * 100}%`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [speed])

  return (
    <div ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      <div
        ref={backgroundRef}
        className="absolute inset-0 w-full h-full -translate-y-[10%]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundColor: overlayColor,
          opacity: overlayOpacity,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

