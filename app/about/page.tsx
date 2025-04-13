"use client"

import { useEffect } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Users, Building, Handshake } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import GSAPReveal from "@/components/gsap-reveal"
import GSAPTextReveal from "@/components/gsap-text-reveal"
import ParallaxSection from "@/components/parallax-section"

export default function AboutPage() {
  const { t } = useLanguage()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const progressBar = document.querySelector(".progress-bar")
    if (progressBar) {
      gsap.to(progressBar, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <ParallaxSection backgroundImage="/placeholder.svg?height=600&width=1200" className="py-24 md:py-32 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <GSAPTextReveal element="h1" className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              {t("about.hero.title")}
            </GSAPTextReveal>
            <GSAPReveal animation="fade" delay={0.3}>
              <p className="mt-6 text-l text-gray-200">
                {t("about.hero.description")}
              </p>
            </GSAPReveal>
          </div>
        </div>
      </ParallaxSection>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-9xl gap-12 lg:grid-cols-2">
            <GSAPReveal animation="slide-right">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  {t("about.mission.tag")}
                </div>
                <h2 className="text-3xl font-bold">{t("about.mission.title")}</h2>
                <p className="text-muted-foreground">{t("about.mission.text")}</p>
              </div>
            </GSAPReveal>

            <GSAPReveal animation="slide-left">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  {t("about.vision.tag")}
                </div>
                <h2 className="text-3xl font-bold">{t("about.vision.title")}</h2>
                <p className="text-muted-foreground">{t("about.vision.text")}</p>
              </div>
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* Foundation Identity */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <GSAPReveal animation="slide-up">
                <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  <Building className="mr-1 h-4 w-4" />
                  {t("about.foundation.tag")}
                </div>
                <GSAPTextReveal element="h2" className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl">
                  {t("about.foundation.title")}
                </GSAPTextReveal>
              </GSAPReveal>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              <GSAPReveal animation="slide-right">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Foundation headquarters"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </GSAPReveal>

              <GSAPReveal animation="slide-left">
                <div className="space-y-4">
                  <p className="text-muted-foreground">{t("about.foundation.text1")}</p>
                  <p className="text-muted-foreground">{t("about.foundation.text2")}</p>
                  <p className="text-muted-foreground">{t("about.foundation.text3")}</p>
                </div>
              </GSAPReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Administrative Structure */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <GSAPReveal animation="slide-up">
                <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  <Users className="mr-1 h-4 w-4" />
                  {t("about.team.tag")}
                </div>
                <GSAPTextReveal element="h2" className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl">
                  {t("about.team.title")}
                </GSAPTextReveal>
              </GSAPReveal>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              <GSAPReveal animation="scale" delay={0.1}>
                <div className="text-center">
                  <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=128&width=128"
                      alt={t("about.team.member1.name")}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{t("about.team.member1.name")}</h3>
                  <p className="text-primary">{t("about.team.member1.title")}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {t("about.team.member1.description")}
                  </p>
                </div>
              </GSAPReveal>

              <GSAPReveal animation="scale" delay={0.2}>
                <div className="text-center">
                  <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=128&width=128"
                      alt={t("about.team.member2.name")}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{t("about.team.member2.name")}</h3>
                  <p className="text-primary">{t("about.team.member2.title")}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {t("about.team.member2.description")}
                  </p>
                </div>
              </GSAPReveal>

              <GSAPReveal animation="scale" delay={0.3}>
                <div className="text-center">
                  <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=128&width=128"
                      alt={t("about.team.member3.name")}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{t("about.team.member3.name")}</h3>
                  <p className="text-primary">{t("about.team.member3.title")}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {t("about.team.member3.description")}
                  </p>
                </div>
              </GSAPReveal>
            </div>

            <GSAPReveal animation="fade" delay={0.4}>
              <div className="mt-12 text-center">
                <Link href="/about/team">
                  <Button variant="outline">{t("about.team.viewAll")}</Button>
                </Link>
              </div>
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <GSAPReveal animation="slide-up">
                <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  <Handshake className="mr-1 h-4 w-4" />
                  Collaborations
                </div>
                <GSAPTextReveal element="h2" className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Partners
                </GSAPTextReveal>
                <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
                  We collaborate with universities, educational institutions, and organizations worldwide to expand
                  opportunities for Palestinian students.
                </p>
              </GSAPReveal>
            </div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <GSAPReveal key={i} animation="fade" delay={0.1 * i}>
                  <div className="flex items-center justify-center p-4">
                    <img src="/placeholder-logo.svg" alt={`Partner ${i + 1}`} className="max-h-16 w-auto" />
                  </div>
                </GSAPReveal>
              ))}
            </div>

            <GSAPReveal animation="fade" delay={0.4}>
              <div className="mt-12 text-center">
                <Link href="/about/partners">
                  <Button variant="outline">Learn About Our Partnerships</Button>
                </Link>
              </div>
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <GSAPTextReveal element="h2" className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Join Our Mission
            </GSAPTextReveal>
            <GSAPReveal animation="fade" delay={0.2}>
              <p className="mt-4 text-xl text-primary-foreground/90">
                Whether you're a student looking for support, a potential partner, or someone who wants to contribute to
                our cause, we'd love to hear from you.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/donate">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Support Our Work
                  </Button>
                </Link>
              </div>
            </GSAPReveal>
          </div>
        </div>
      </section>
    </main>
  )
}

