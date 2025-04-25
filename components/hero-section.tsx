"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import GSAPTextReveal from "@/components/gsap-text-reveal"
import { useLanguage } from "@/components/language-provider"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const scrollY = window.scrollY
      const opacity = Math.max(1 - scrollY / 500, 0.2)
      const translateY = scrollY * 0.3

      containerRef.current.style.opacity = opacity.toString()
      containerRef.current.style.transform = `translateY(${translateY}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-gradient-to-b from-emerald-900 to-emerald-700 text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30" />
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Students studying"
          className="h-full w-full object-cover"
        />
      </div>

      <div
        ref={containerRef}
        className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center md:px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl space-y-6"
        >
          <GSAPTextReveal
            element="h1"
            className="hero-title text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg min-h-[1.2em] leading-[1.2] overflow-visible"
          >
            {t("hero.title")}
          </GSAPTextReveal>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto max-w-[700px] text-xl text-gray-200 md:text-2xl"
          >
            Providing scholarships, university admissions assistance, and academic support to help Palestinian students
            achieve their educational dreams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Link href="/apply">
              <Button size="lg" className="bg-white text-emerald-800 hover:bg-gray-100">
                Apply for Scholarship
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/programs">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Explore Programs
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

