"use client"

import { useEffect } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Users, ArrowRight, GraduationCap, Heart, Globe, Award, Lightbulb, Handshake as HandshakeIcon, Target, Compass, BookOpen, Rocket } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import GSAPReveal from "@/components/gsap-reveal"
import GSAPTextReveal from "@/components/gsap-text-reveal"

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
      <section className="relative py-24 md:py-32 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/Flag_of_Palestine.svg"
            alt="Palestinian Flag"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <GSAPTextReveal element="h1" className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl drop-shadow-lg font-playfair">
              {t("about.hero.title")}
            </GSAPTextReveal>
            <GSAPReveal animation="fade" delay={0.3}>
              <p className="mt-6 text-l text-white drop-shadow-md">
                {t("about.hero.description")}
              </p>
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[hsl(0,76%,40%)]/5 via-transparent to-[hsl(120,61%,34%)]/5 dark:from-[hsl(0,76%,40%)]/10 dark:via-black/80 dark:to-[hsl(120,61%,34%)]/10">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <GSAPReveal animation="slide-up">
              <div className="inline-flex items-center rounded-lg bg-[hsl(120,61%,34%)]/10 px-3 py-1 text-sm text-[hsl(120,61%,34%)]">
                <Compass className="mr-1 h-4 w-4" />
                Our Purpose
              </div>
              <GSAPTextReveal element="h2" className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl">
                Mission & Vision
              </GSAPTextReveal>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
                Guided by our commitment to educational equity and empowerment for Palestinian students worldwide.
              </p>
            </GSAPReveal>
          </div>

          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
            {/* Mission Card */}
            <GSAPReveal animation="slide-right">
              <div className="relative overflow-hidden rounded-xl border border-[hsl(120,61%,34%)]/20 bg-white p-8 shadow-lg dark:bg-black/40 dark:backdrop-blur-sm">
                <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 transform rounded-full bg-[hsl(120,61%,34%)]/10"></div>

                <div className="relative">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(120,61%,34%)]/10">
                    <Target className="h-8 w-8 text-[hsl(120,61%,34%)]" />
                  </div>

                  <h3 className="text-2xl font-bold">{t("about.mission.title")}</h3>

                  <div className="mt-4 space-y-4">
                    <p className="text-muted-foreground">{t("about.mission.text")}</p>

                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-[hsl(120,61%,34%)]/10 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-[hsl(120,61%,34%)]"></div>
                        </div>
                        <span>Provide scholarships to talented Palestinian students</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-[hsl(120,61%,34%)]/10 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-[hsl(120,61%,34%)]"></div>
                        </div>
                        <span>Create educational opportunities through global partnerships</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-[hsl(120,61%,34%)]/10 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-[hsl(120,61%,34%)]"></div>
                        </div>
                        <span>Support academic and professional development</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </GSAPReveal>

            {/* Vision Card */}
            <GSAPReveal animation="slide-left">
              <div className="relative overflow-hidden rounded-xl border border-[hsl(0,76%,40%)]/20 bg-white p-8 shadow-lg dark:bg-black/40 dark:backdrop-blur-sm">
                <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 transform rounded-full bg-[hsl(0,76%,40%)]/10"></div>

                <div className="relative">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(0,76%,40%)]/10">
                    <Rocket className="h-8 w-8 text-[hsl(0,76%,40%)]" />
                  </div>

                  <h3 className="text-2xl font-bold">{t("about.vision.title")}</h3>

                  <div className="mt-4 space-y-4">
                    <p className="text-muted-foreground">{t("about.vision.text")}</p>

                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-[hsl(0,76%,40%)]/10 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-[hsl(0,76%,40%)]"></div>
                        </div>
                        <span>A world where every Palestinian student has access to quality education</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-[hsl(0,76%,40%)]/10 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-[hsl(0,76%,40%)]"></div>
                        </div>
                        <span>A global network of Palestinian scholars and professionals</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-[hsl(0,76%,40%)]/10 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-[hsl(0,76%,40%)]"></div>
                        </div>
                        <span>Educational empowerment as a path to community development</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </GSAPReveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-black">
             <div className="container px-4 md:px-6">
               <div className="flex flex-col items-center justify-center space-y-4 text-center">
                 <GSAPReveal animation="slide-up">
                   <div className="space-y-2">
                     <div className="inline-flex items-center rounded-lg bg-[hsl(120,61%,34%)]/10 px-3 py-1 text-sm text-[hsl(120,61%,34%)]">
                       <Users className="mr-1 h-4 w-4" />
                       {t("about.widgt")}
                     </div>
                     <GSAPTextReveal className="text-3xl font-bold sm:text-5xl">
                       {t("about.title")}
                     </GSAPTextReveal>
                     <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                       {t("about.subtitle")}
                     </p>
                   </div>
                 </GSAPReveal>

                 <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                   <GSAPReveal animation="slide-right" className="order-2 lg:order-1">
                     <div className="flex flex-col justify-center space-y-4 h-full">
                       <ul className="grid gap-6 flex-1">
                         <li>
                           <div className="flex gap-4 items-start">
                             <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[hsl(120,61%,34%)]/10 flex items-center justify-center">
                               <GraduationCap className="h-6 w-6 text-[hsl(120,61%,34%)]" />
                             </div>
                             <div>
                               <h3 className="text-xl font-bold">{t("about.identity")}</h3>
                               <p className="text-muted-foreground">{t("about.identity.desc")}</p>
                             </div>
                           </div>
                         </li>
                         <li>
                           <div className="flex gap-4 items-start">
                             <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[hsl(0,76%,40%)]/10 flex items-center justify-center">
                               <Heart className="h-6 w-6 text-[hsl(0,76%,40%)]" />
                             </div>
                             <div>
                               <h3 className="text-xl font-bold">{t("about.identity2")}</h3>
                               <p className="text-muted-foreground">{t("about.identity2.desc")}</p>
                             </div>
                           </div>
                         </li>
                         <li>
                           <div className="flex gap-4 items-start">
                             <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[hsl(120,61%,34%)]/10 flex items-center justify-center">
                               <Globe className="h-6 w-6 text-[hsl(120,61%,34%)]" />
                             </div>
                             <div>
                               <h3 className="text-xl font-bold">{t("about.identity3")}</h3>
                               <p className="text-muted-foreground">{t("about.identity3.desc")}</p>
                             </div>
                           </div>
                         </li>
                         <li>
                           <div className="flex gap-4 items-start">
                             <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[hsl(0,76%,40%)]/10 flex items-center justify-center">
                               <Award className="h-6 w-6 text-[hsl(0,76%,40%)]" />
                             </div>
                             <div>
                               <h3 className="text-xl font-bold">{t("about.identity4")}</h3>
                               <p className="text-muted-foreground">{t("about.identity4.desc")}</p>
                             </div>
                           </div>
                         </li>
                       </ul>
                     </div>
                   </GSAPReveal>

                   <GSAPReveal animation="slide-left" className="order-1 lg:order-2">
                     <div className="flex flex-col justify-center space-y-4 h-full">
                       <ul className="grid gap-6 flex-1">
                         <li>
                           <div className="flex gap-4 items-start">
                             <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[hsl(120,61%,34%)]/10 flex items-center justify-center">
                               <Lightbulb className="h-6 w-6 text-[hsl(120,61%,34%)]" />
                             </div>
                             <div>
                               <h3 className="text-xl font-bold">{t("about.identity5")}</h3>
                               <p className="text-muted-foreground">{t("about.identity5.desc")}</p>
                             </div>
                           </div>
                         </li>
                         <li>
                           <div className="flex gap-4 items-start">
                             <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[hsl(0,76%,40%)]/10 flex items-center justify-center">
                               <HandshakeIcon className="h-6 w-6 text-[hsl(0,76%,40%)]" />
                             </div>
                             <div>
                               <h3 className="text-xl font-bold">{t("about.identity6")}</h3>
                               <p className="text-muted-foreground">{t("about.identity6.desc")}</p>
                             </div>
                           </div>
                         </li>
                         <li>
                           <div className="flex gap-4 items-start">
                             <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[hsl(120,61%,34%)]/10 flex items-center justify-center">
                               <Users className="h-6 w-6 text-[hsl(120,61%,34%)]" />
                             </div>
                             <div>
                               <h3 className="text-xl font-bold">{t("about.identity7")}</h3>
                               <p className="text-muted-foreground">{t("about.identity7.desc")}</p>
                             </div>
                           </div>
                         </li>
                       </ul>
                     </div>
                   </GSAPReveal>
                 </div>
                 <div className="flex justify-center w-full mt-8">
              <Link href="/about">
                <Button
                  className="group bg-[hsl(120,61%,34%)] text-white hover:bg-[hsl(120,61%,34%)]/90 dark:bg-[hsl(120,61%,34%)] dark:text-white dark:hover:bg-[hsl(120,61%,34%)]/90"
                >
                  {t("about.cta")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Administrative Structure */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[hsl(0,76%,40%)]/10 via-transparent to-[hsl(120,61%,34%)]/10">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <GSAPReveal animation="slide-up">
                <div className="inline-flex items-center rounded-lg bg-[hsl(0,76%,40%)]/10 px-3 py-1 text-sm text-[hsl(0,76%,40%)]">
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
                      src="/s5.jpg?height=128&width=128"
                      alt={t("about.team.member1.name")}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{t("about.team.member1.name")}</h3>
                  <p className="text-[hsl(0,76%,40%)]">{t("about.team.member1.title")}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {t("about.team.member1.description")}
                  </p>
                </div>
              </GSAPReveal>

              <GSAPReveal animation="scale" delay={0.2}>
                <div className="text-center">
                  <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                    <img
                      src="/s5.jpg?height=128&width=128"
                      alt={t("about.team.member2.name")}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{t("about.team.member2.name")}</h3>
                  <p className="text-[hsl(120,61%,34%)]">{t("about.team.member2.title")}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {t("about.team.member2.description")}
                  </p>
                </div>
              </GSAPReveal>

              <GSAPReveal animation="scale" delay={0.3}>
                <div className="text-center">
                  <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                    <img
                      src="/s5.jpg?height=128&width=128"
                      alt={t("about.team.member3.name")}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{t("about.team.member3.name")}</h3>
                  <p className="text-[hsl(0,76%,40%)]">{t("about.team.member3.title")}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {t("about.team.member3.description")}
                  </p>
                </div>
              </GSAPReveal>
            </div>

            <GSAPReveal animation="fade" delay={0.4}>
              <div className="mt-12 text-center">
                <Link href="/about/team">
                  <Button
                    className="bg-[hsl(120,61%,34%)] text-white hover:bg-[hsl(120,61%,34%)]/90 dark:bg-[hsl(120,61%,34%)] dark:text-white dark:hover:bg-[hsl(120,61%,34%)]/90"
                  >
                    {t("about.team.viewAll")}
                  </Button>
                </Link>
              </div>
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[hsl(0,76%,40%)] via-black to-[hsl(120,61%,34%)] text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <GSAPReveal animation="slide-up">
                <div className="inline-flex items-center rounded-lg bg-white/20 px-3 py-1 text-sm text-white">
                  <HandshakeIcon className="mr-1 h-4 w-4" />
                  Collaborations
                </div>
                <GSAPTextReveal element="h2" className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                  Our Partners
                </GSAPTextReveal>
                <p className="mx-auto mt-4 max-w-[700px] text-gray-300">
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
                  <Button
                    className="bg-[hsl(120,61%,34%)] text-white hover:bg-[hsl(120,61%,34%)]/90 dark:bg-[hsl(120,61%,34%)] dark:text-white dark:hover:bg-[hsl(120,61%,34%)]/90"
                  >
                    Learn About Our Partnerships
                  </Button>
                </Link>
              </div>
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[hsl(0,76%,40%)] via-black to-[hsl(120,61%,34%)] text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <GSAPTextReveal element="h2" className="text-3xl font-bold tracking-tighter sm:text-4xl h-20">
              Join Our Mission
            </GSAPTextReveal>
            <GSAPReveal animation="fade" delay={0.2}>
              <p className="mt-4 text-xl text-white/90">
                Whether you're a student looking for support, a potential partner, or someone who wants to contribute to
                our cause, we'd love to hear from you.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-[hsl(120,61%,34%)] text-white hover:bg-[hsl(120,61%,34%)]/90 dark:bg-[hsl(120,61%,34%)] dark:text-white dark:hover:bg-[hsl(120,61%,34%)]/90"
                  >
                    Contact Us
                  </Button>
                </Link>
                <Link href="/donate">
                  <Button
                    size="lg"
                    className="bg-[hsl(120,61%,34%)] text-white hover:bg-[hsl(120,61%,34%)]/90 dark:bg-[hsl(120,61%,34%)] dark:text-white dark:hover:bg-[hsl(120,61%,34%)]/90"
                  >
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

