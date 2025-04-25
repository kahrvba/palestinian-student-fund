"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, GraduationCap, Users, BookOpen, Award, Calendar, MessageSquare } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import GSAPReveal from "@/components/gsap-reveal"
import GSAPTextReveal from "@/components/gsap-text-reveal"
import ParallaxSection from "@/components/parallax-section"
import ProgramCard from "@/components/program-card"
import SuccessStoryCard from "@/components/success-story-card"
import StatsCounter from "@/components/stats-counter"
import ScrollingCards from "@/components/scrolling-cards"

export default function Home() {
  const { t } = useLanguage()
  const heroRef = useRef<HTMLDivElement>(null)
  const [isAnyCardHovered, setIsAnyCardHovered] = useState(false)

  // Create cards data array for the ScrollingCards component
  const cardsData = [
    {
      title: t("card1.title"),
      excerpt: t("Card1.desc"),
      image: "/scholer.png?height=400&width=600",
      href: "/news/new-scholarship-program"
    },
    {
      title: t("Card2.title"),
      excerpt: t("Card2.desc"),
      image: "/secondCard.png",
      href: "/news/istanbul-university-partnership"
    },
    {
      title: t("Card3.title"),
      excerpt: t("Card3.desc"),
      image: "/thirdCard.png?height=400&width=600",
      href: "/news/annual-conference"
    },
    {
      title: t("Card4.title"),
      excerpt: t("Card4.desc"),
      image: "/fourCard.png?height=400&width=600",
      href: "/news/annual-conference"
    },
    {
      title: t("Card5.title"),
      excerpt: t("Card5.desc"),
      image: "/fifthCard.png?height=400&width=600",
      href: "/news/annual-conferece"
    }
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Initialize progress bar
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

    // Hero section parallax and fade effects
    if (heroRef.current) {
      const heroImages = heroRef.current.querySelectorAll(".hero-image")
      const heroContent = heroRef.current.querySelector(".hero-content")

      gsap.to(heroImages, {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })

      gsap.to(heroContent, {
        y: 50,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "center center",
          end: "bottom top",
          scrub: true,
        },
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center"
      >
        <div className="absolute inset-0 z-0 hero-image">
          <img
            src="/Flag_of_Palestine.svg"
            alt="Palestinian Flag"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="container relative z-10 hero-content">
          <div className="max-w-4xl mx-auto text-center space-y-6 text-white">
            <GSAPTextReveal
              element="h1"
              className="hero-title text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg min-h-[1.2em] leading-[1.2] overflow-visible"
            >
              {t("hero.title")}
            </GSAPTextReveal>

            <GSAPReveal animation="fade" delay={0.5}>
              <p className="mx-auto max-w-[700px] text-xl text-white md:text-2xl drop-shadow-md">{t("hero.subtitle")}</p>
            </GSAPReveal>

            <GSAPReveal animation="fade" delay={0.8}>
              <div className="flex justify-center gap-4 mt-8">
                <Button size="lg" className="bg-[hsl(120,61%,34%)] hover:bg-[hsl(120,61%,30%)] text-white">
                  {t("hero.cta.apply") || "Apply for Scholarship"}
                </Button>
                <Button size="lg" className="bg-[hsl(120,61%,34%)] hover:bg-[hsl(120,61%,30%)] text-white">
                  {t("hero.cta.explore") || "Explore Programs"}
                </Button>
              </div>
            </GSAPReveal>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>


      {/* Latest News Section */}
      <section className="py-12 md:py-16 bg-white dark:bg-black">
        <div className="container px-4 md:px-6 mb-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <GSAPReveal animation="slide-up">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  <BookOpen className="mr-1 h-4 w-4" />
                  {t("work.badget")}
                </div>
                <GSAPTextReveal className="text-3xl font-bold sm:text-5xl h-20">{t("work.title")}</GSAPTextReveal>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("work.subtitle")}
                </p>
              </div>
            </GSAPReveal>
          </div>
        </div>

        {/* Full-width scrolling section */}
        <ScrollingCards
          cards={cardsData}
          isAnyCardHovered={isAnyCardHovered}
          onHoverChange={setIsAnyCardHovered}
        />

        <div className="container px-4 md:px-6 mt-8">
          <GSAPReveal animation="fade" delay={0.4}>
            <div className="flex justify-center">
              <Link href="/news">
                <Button variant="outline" className="group">
                  View All News
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </GSAPReveal>
        </div>
      </section>

      {/* Our Programs Section */}
      <section className="py-16 md:py-24 dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <GSAPReveal animation="slide-up">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  <GraduationCap className="mr-1 h-4 w-4" />
                  Educational Opportunities
                </div>
                <GSAPTextReveal className="text-3xl font-bold sm:text-5xl h-20">
                  Our Programs
                </GSAPTextReveal>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our comprehensive range of educational support programs designed to empower Palestinian
                  students.
                </p>
              </div>
            </GSAPReveal>

            <div className="mx-auto grid max-w-5xl gap-8 pt-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <GSAPReveal animation="scale" delay={0.1} className="h-full">
                <ProgramCard
                  title="Undergraduate Programs"
                  description="Full and partial scholarships for bachelor's degrees across various disciplines."
                  icon={<GraduationCap className="h-10 w-10 text-primary" />}
                  href="/programs/undergraduate"
                />
              </GSAPReveal>

              <GSAPReveal animation="scale" delay={0.2} className="h-full">
                <ProgramCard
                  title="Graduate Programs"
                  description="Master's and PhD funding opportunities with research support and mentorship."
                  icon={<Award className="h-10 w-10 text-primary" />}
                  href="/programs/graduate"
                />
              </GSAPReveal>

              <GSAPReveal animation="scale" delay={0.3} className="h-full">
                <ProgramCard
                  title="Research Programs"
                  description="Funding for innovative research projects with global impact potential."
                  icon={<BookOpen className="h-10 w-10 text-primary" />}
                  href="/programs/research"
                />
              </GSAPReveal>
            </div>

            <GSAPReveal animation="fade" delay={0.4}>
              <div className="flex justify-center pt-8">
                <Link href="/programs">
                  <Button variant="outline" className="group">
                    Explore All Programs
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <ParallaxSection backgroundImage="/s3.png?height=1080&width=1920" className="py-16 md:py-24 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <GSAPReveal animation="slide-up">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-lg bg-white/20 px-3 py-1 text-sm text-white">
                  <Users className="mr-1 h-4 w-4" />
                  Student Achievements
                </div>
                <GSAPTextReveal className="text-3xl font-bold sm:text-5xl text-white">
                  Success Stories
                </GSAPTextReveal>
                <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet some of our remarkable students who have achieved their educational dreams with our support.
                </p>
              </div>
            </GSAPReveal>

            <div className="mx-auto grid max-w-5xl gap-8 pt-12 sm:grid-cols-2 md:gap-12">
              <GSAPReveal animation="slide-right">
                <SuccessStoryCard
                  name="Ahmed Hassan"
                  degree="PhD in Computer Science"
                  university="Istanbul Technical University"
                  quote="The support from the Palestinian Student Fund transformed my academic journey and opened doors I never thought possible."
                  image="/s1.png?height=300&width=300"
                />
              </GSAPReveal>

              <GSAPReveal animation="slide-left">
                <SuccessStoryCard
                  name="Layla Mahmoud"
                  degree="Master's in Public Health"
                  university="Ankara University"
                  quote="Thanks to the scholarship program, I was able to pursue my dream of working in healthcare policy to help communities in need."
                  image="/s2.png?height=300&width=300"
                />
              </GSAPReveal>
            </div>

            <GSAPReveal animation="fade" delay={0.4}>
              <div className="flex justify-center pt-8">
                <Link href="/success-stories">
                  <Button variant="outline" className="border-white text-white hover:bg-white/20 group">
                    Read More Success Stories
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </GSAPReveal>
          </div>
        </div>
      </ParallaxSection>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[hsl(0,76%,40%)] via-black to-[hsl(120,61%,34%)] text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <GSAPReveal animation="fade" delay={0.1}>
              <StatsCounter number={500} label="Scholarships Awarded" />
            </GSAPReveal>
            <GSAPReveal animation="fade" delay={0.2}>
              <StatsCounter number={35} label="Partner Universities" />
            </GSAPReveal>
            <GSAPReveal animation="fade" delay={0.3}>
              <StatsCounter number={12} label="Countries Reached" />
            </GSAPReveal>
            <GSAPReveal animation="fade" delay={0.4}>
              <StatsCounter number={95} label="Graduation Rate %" />
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* Apply for Grants CTA */}
      <section className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <GSAPReveal animation="slide-up">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-lg bg-secondary/10 px-3 py-1 text-sm text-secondary">
                  <Calendar className="mr-1 h-4 w-4" />
                  Applications Open
                </div>
                <GSAPTextReveal className="text-3xl font-bold sm:text-5xl h-20">
                  Apply for Grants
                </GSAPTextReveal>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take the first step toward your educational journey with our comprehensive grant programs.
                </p>
              </div>
            </GSAPReveal>

            <GSAPReveal animation="slide-up" delay={0.3}>
              <div className="mx-auto max-w-3xl pt-8">
                <Link href="/apply">
                  <Button size="lg" className="group bg-secondary hover:bg-secondary/90 text-white">
                    Start Your Application
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <p className="mt-4 text-sm text-muted-foreground">Next application deadline: September 30, 2025</p>
              </div>
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* Contact Us Preview */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-primary/10 dark:from-black dark:to-primary/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <GSAPReveal animation="slide-up">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  <MessageSquare className="mr-1 h-4 w-4" />
                  Get in Touch
                </div>
                <GSAPTextReveal className="text-3xl font-bold sm:text-5xl">Contact Us</GSAPTextReveal>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions? Our team is here to help you with any inquiries about our programs and application
                  process.
                </p>
              </div>
            </GSAPReveal>

            <GSAPReveal animation="fade" delay={0.3}>
              <div className="flex justify-center pt-8 gap-4">
                <Link href="/contact">
                  <Button size="lg" className="group bg-primary hover:bg-primary/90 text-white">
                    Contact Our Team
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </GSAPReveal>
          </div>
        </div>
      </section>
    </>
  )
}

