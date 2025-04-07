"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"
import { gsap } from "gsap"

interface StatsCounterProps {
  number: number
  label: string
}

export default function StatsCounter({ number, label }: StatsCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    const start = 0
    const duration = 2

    gsap.to(ref.current, {
      duration,
      onUpdate: () => {
        const progress = gsap.getProperty(ref.current, "progress") || 0
        setCount(Math.floor(number * (progress as number)))
      },
      progress: 1,
      ease: "power2.out",
    })

    return () => {
      gsap.killTweensOf(ref.current)
    }
  }, [isInView, number])

  return (
    <div ref={ref} className="flex flex-col items-center justify-center text-center">
      <span className="text-5xl font-bold">{count}</span>
      <span className="mt-2 text-lg">{label}</span>
    </div>
  )
}

