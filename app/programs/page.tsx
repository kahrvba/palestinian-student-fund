"use client"

import { useEffect } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  GraduationCap,
  Award,
  BookOpen,
  Lightbulb,
  Globe,
  Users,
  Calendar,
  Clock,
  CheckSquare,
  DollarSign,
  Briefcase,
  Target,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import GSAPReveal from "@/components/gsap-reveal"
import GSAPTextReveal from "@/components/gsap-text-reveal"

export default function ProgramsPage() {
  // Using DOM manipulation for interactive elements instead of React state

  // Animation setup
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

    // Add hover animations for scholarship cards
    const cards = document.querySelectorAll(".scholarship-card")
    cards.forEach(card => {
      const icon = card.querySelector(".card-icon")
      const tl = gsap.timeline({ paused: true })

      tl.to(icon, {
        y: -10,
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out"
      })

      card.addEventListener("mouseenter", () => tl.play())
      card.addEventListener("mouseleave", () => tl.reverse())
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col">
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
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
            <GSAPTextReveal element="h1" className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl drop-shadow-lg font-playfair h-20">
              Our Programs
            </GSAPTextReveal>
            <GSAPReveal animation="fade" delay={0.3}>
              <p className="mt-6 text-xl text-white drop-shadow-md font-playfair">
                Discover our comprehensive range of educational support programs designed to empower Palestinian
                students at every academic level.
              </p>
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[hsl(0,76%,40%)]/5 via-transparent to-[hsl(120,61%,34%)]/5 dark:from-[hsl(0,76%,40%)]/10 dark:via-black/80 dark:to-[hsl(120,61%,34%)]/10">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-20xl">
            <Tabs defaultValue="undergraduate" className="w-full">
              <GSAPReveal animation="fade">
                <div className="mb-8 flex justify-center">
                  <TabsList className="grid w-full max-w-md grid-cols-3 bg-[hsl(0,76%,40%)]/5 dark:bg-[hsl(0,76%,40%)]/10">
                    <TabsTrigger
                      value="undergraduate"
                      className="data-[state=active]:bg-[hsl(120,61%,34%)] data-[state=active]:text-white"
                    >
                      Undergraduate
                    </TabsTrigger>
                    <TabsTrigger
                      value="graduate"
                      className="data-[state=active]:bg-[hsl(120,61%,34%)] data-[state=active]:text-white"
                    >
                      Graduate
                    </TabsTrigger>
                    <TabsTrigger
                      value="research"
                      className="data-[state=active]:bg-[hsl(120,61%,34%)] data-[state=active]:text-white"
                    >
                      Research
                    </TabsTrigger>
                  </TabsList>
                </div>
              </GSAPReveal>

              <TabsContent value="undergraduate" className="space-y-8">
                <GSAPReveal animation="fade">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(120,61%,34%)]/10">
                      <GraduationCap className="h-8 w-8 text-[hsl(120,61%,34%)]" />
                    </div>
                    <h2 className="text-3xl font-bold">Undergraduate Programs</h2>
                    <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
                      Supporting bachelor's degree students across various disciplines with financial aid, mentorship,
                      and academic resources.
                    </p>
                  </div>
                </GSAPReveal>

                <div className="grid gap-10 md:grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto" id="undergraduate-scholarships">
                  <GSAPReveal animation="slide-up" delay={0.1} className="h-full">
                    <div className="group relative h-full overflow-hidden rounded-xl transition-all duration-500 hover:shadow-2xl">
                      {/* Background gradient with animation */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,76%,40%)] via-black to-[hsl(120,61%,34%)] opacity-90 transition-all duration-700 group-hover:opacity-100"></div>

                      {/* Animated pattern overlay */}
                      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-10 mix-blend-overlay transition-all duration-700 group-hover:opacity-20"></div>

                      {/* Content container */}
                      <div className="relative z-10 p-8 text-white h-full flex flex-col">
                        {/* Header with icon */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20 card-icon">
                            <Award className="h-8 w-8 text-white transition-all duration-500 group-hover:text-[hsl(120,61%,34%)]" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold font-playfair tracking-tight">Pulse of Life Scholarship</h3>
                            <p className="text-white/80 text-sm">Excellence Scholarship</p>
                          </div>
                        </div>

                        {/* Main description */}
                        <div className="mb-4 border-l-4 border-[hsl(120,61%,34%)] pl-4 py-2">
                          <p className="text-white/90">
                            A bold national initiative launched by Isnad Foundation, aiming to empower 1,000 palestinian students with scholarships, both inside and outside palestine
                          </p>
                          <div className="mt-4 space-y-3">
                            <h4 className="text-white font-medium text-sm uppercase tracking-wider">Scholarship Goals</h4>
                            <div className="grid grid-cols-1 gap-3">
                              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:translate-x-1 hover:shadow-lg">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(120,61%,34%)]/20">
                                  <Lightbulb className="h-4 w-4 text-[hsl(120,61%,34%)]" />
                                </div>
                                <div>
                                  <p className="text-white/90 text-sm">Qualifing distinguished palestinian medical cadres who contribute to the renaissance of the society</p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:translate-x-1 hover:shadow-lg">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(120,61%,34%)]/20">
                                  <Globe className="h-4 w-4 text-[hsl(120,61%,34%)]" />
                                </div>
                                <div>
                                  <p className="text-white/90 text-sm">Embracing, nurturing, and guiding outstanding students</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:translate-x-1 hover:shadow-lg">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(120,61%,34%)]/20">
                                  <Globe className="h-4 w-4 text-[hsl(120,61%,34%)]" />
                                </div>
                                <div>
                                  <p className="text-white/90 text-sm">Promoting scientific research that serves the community</p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:translate-x-1 hover:shadow-lg">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(120,61%,34%)]/20">
                                  <Users className="h-4 w-4 text-[hsl(120,61%,34%)]" />
                                </div>
                                <div>
                                  <p className="text-white/90 text-sm">sponsoring 1,000 palestinian students in medical colleges</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Details grid */}
                        <div className="grid grid-cols-2 gap-6 mb-8">
                          <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-5 w-5 text-[hsl(120,61%,34%)]" />
                              <span className="font-medium">Duration</span>
                            </div>
                            <p className="text-white/80 text-sm">4 years (full degree)</p>
                          </div>

                          <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                            <div className="flex items-center gap-2">
                              <Clock className="h-5 w-5 text-[hsl(120,61%,34%)]" />
                              <span className="font-medium">Deadline</span>
                            </div>
                            <p className="text-white/80 text-sm">March 15 (annual)</p>
                          </div>

                          <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                              <div className="flex items-center gap-2">
                              <CheckSquare className="h-5 w-5 text-[hsl(120,61%,34%)]" />
                              <span className="font-medium">Requirments</span>
                            </div>
                            <ul className="mt-2 space-y-2">
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(120,61%,34%)]"></div>
                                <span className="text-white/80 text-sm">Palestinian nationality</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-3 rounded-full bg-[hsl(120,61%,34%)]"></div>
                                <span className="text-white/80 text-sm">hight school average of 90% or higher</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(120,61%,34%)]"></div>
                                <span className="text-white/80 text-sm">GPA 3.00+</span>
                              </li>
                              <li className="flex items-start gap-2 mt-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(120,61%,34%)] mt-2"></div>
                                <span className="text-white/80 text-sm">English language proficiency is preferred</span>
                              </li>
                            </ul>
                          </div>

                          <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                            <div className="flex items-center gap-2">
                              <Target className="h-5 w-5 text-[hsl(120,61%,34%)]" />
                              <span className="font-medium">Fields of Study</span>
                            </div>
                            <ul className="mt-2 space-y-2">
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(120,61%,34%)]"></div>
                                <span className="text-white/80 text-sm">Human Medicine</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(120,61%,34%)]"></div>
                                <span className="text-white/80 text-sm">Dentistry</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(120,61%,34%)]"></div>
                                <span className="text-white/80 text-sm">Pharmacy</span>
                              </li>
                              <li className="flex items-start gap-2 mt-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(120,61%,34%)] mt-2"></div>
                                <span className="text-white/80 text-sm">Allied Health Professions</span>
                              </li>
                              <li className="flex items-start gap-2 mt-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(120,61%,34%)] mt-2"></div>
                                <span className="text-white/80 text-sm">Nursing</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="mt-auto grid grid-cols-2 gap-4">
                          <Link href="/apply" className="group/btn">
                            <Button className="w-full bg-black text-white hover:bg-[hsl(120,61%,34%)] hover:text-white transition-all duration-300 group-hover/btn:shadow-lg">
                              Apply Now
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                            </Button>
                          </Link>
                          <Link href="/donate" className="group/btn">
                            <Button className="w-full bg-[hsl(0,76%,40%)] text-white hover:bg-[hsl(120,61%,34%)] hover:text-white transition-all duration-300 group-hover/btn:shadow-lg">
                              Donate Now
                              <DollarSign className="ml-2 h-4 w-4 transition-all group-hover/btn:scale-110" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </GSAPReveal>

                  <GSAPReveal animation="slide-up" delay={0.2} className="h-full">
                    <div className="group relative h-full overflow-hidden rounded-xl transition-all duration-500 hover:shadow-2xl">
                      {/* Background gradient with animation */}
                      <div className="absolute inset-0 bg-gradient-to-bl from-[hsl(120,61%,34%)] via-black to-[hsl(0,76%,40%)] opacity-90 transition-all duration-700 group-hover:opacity-100"></div>

                      {/* Animated pattern overlay */}
                      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-10 mix-blend-overlay transition-all duration-700 group-hover:opacity-20"></div>

                      {/* Content container */}
                      <div className="relative z-10 p-8 text-white h-full flex flex-col">
                        {/* Header with icon */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20 card-icon">
                            <GraduationCap className="h-8 w-8 text-white transition-all duration-500 group-hover:text-[hsl(0,76%,40%)]" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold font-playfair tracking-tight">Palestinian Talented Scholarship</h3>
                            <p className="text-white/80 text-sm">Excellence Scholarship</p>
                          </div>
                        </div>

                        {/* Main description */}
                        <div className="mb-4 border-l-4 border-[hsl(0,76%,40%)] pl-4 py-2">
                          <p className="text-white/90">
                              A program dedticated to outstanding students who gradute with honors in various academic fields. The program aims to create a supportive enviroment for 1,000 execeptonal palastinian students
                          </p>
                          <div className="mt-4 space-y-3">
                            <h4 className="text-white font-medium text-sm uppercase tracking-wider">Scholarship Goals</h4>
                            <div className="grid grid-cols-1 gap-3">
                              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:translate-x-1 hover:shadow-lg">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(0,76%,40%)]/20">
                                  <Target className="h-4 w-4 text-[hsl(0,76%,40%)]" />
                                </div>
                                <div>
                                  <p className="text-white/90 text-sm">Developing scientific leadership competencies that contribute to the advancment of society.</p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:translate-x-1 hover:shadow-lg">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(0,76%,40%)]/20">
                                  <Briefcase className="h-4 w-4 text-[hsl(0,76%,40%)]" />
                                </div>
                                <div>
                                  <p className="text-white/90 text-sm">Providing society with scientific cadres holding specialized specializations and prestigious certificates</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:translate-x-1 hover:shadow-lg">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(0,76%,40%)]/20">
                                  <Briefcase className="h-4 w-4 text-[hsl(0,76%,40%)]" />
                                </div>
                                <div>
                                  <p className="text-white/90 text-sm">providing a nurturing enviroment for distinguished palestinian students</p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:translate-x-1 hover:shadow-lg">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(0,76%,40%)]/20">
                                  <BookOpen className="h-4 w-4 text-[hsl(0,76%,40%)]" />
                                </div>
                                <div>
                                  <p className="text-white/90 text-sm">Sponsoring 1,000 academically distinguished palestinian students</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Details grid */}
                        <div className="grid grid-cols-2 gap-6 mb-8">
                          <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-5 w-5 text-[hsl(0,76%,40%)]" />
                              <span className="font-medium">Duration</span>
                            </div>
                            <p className="text-white/80 text-sm">1-4 years (Full degree)</p>
                          </div>

                          <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                            <div className="flex items-center gap-2">
                              <Clock className="h-5 w-5 text-[hsl(0,76%,40%)]" />
                              <span className="font-medium">Deadline</span>
                            </div>
                            <p className="text-white/80 text-sm">June 30 (annual)</p>
                          </div>

                          <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                              <div className="flex items-center gap-2">
                              <CheckSquare className="h-5 w-5 text-[hsl(0,76%,40%)]" />
                              <span className="font-medium">Requirments</span>
                            </div>
                            <ul className="mt-2 space-y-2">
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(0,76%,40%)]"></div>
                                <span className="text-white/80 text-sm">Palestinian nationality</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-3 rounded-full bg-[hsl(0,76%,40%)]"></div>
                                <span className="text-white/80 text-sm">hight school average of 90% or higher</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(0,76%,40%)]"></div>
                                <span className="text-white/80 text-sm">GPA 3.00+</span>
                              </li>
                              <li className="flex items-start gap-2 mt-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(0,76%,40%)] mt-2"></div>
                                <span className="text-white/80 text-sm">English language proficiency is preferred</span>
                              </li>
                            </ul>
                          </div>

                          <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                            <div className="flex items-center gap-2">
                              <Target className="h-5 w-5 text-[hsl(0,76%,40%)]" />
                              <span className="font-medium">Fields of Study</span>
                            </div>
                            <ul className="mt-2 space-y-2">
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(0,76%,40%)]"></div>
                                <span className="text-white/80 text-sm">All specialties except medical specialties</span>
                              </li>
                             
                            </ul>
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="mt-auto grid grid-cols-2 gap-4">
                          <Link href="/apply" className="group/btn">
                            <Button className="w-full bg-black text-white hover:bg-[hsl(120,61%,34%)] hover:text-white transition-all duration-300 group-hover/btn:shadow-lg">
                              Apply Now
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                            </Button>
                          </Link>
                          <Link href="/donate" className="group/btn">
                            <Button className="w-full bg-[hsl(0,76%,40%)] text-white hover:bg-[hsl(120,61%,34%)] hover:text-white transition-all duration-300 group-hover/btn:shadow-lg">
                              Donate Now
                              <DollarSign className="ml-2 h-4 w-4 transition-all group-hover/btn:scale-110" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </GSAPReveal>
                </div>

                <GSAPReveal animation="fade" delay={0.4}>
                  <div className="text-center mt-8">
                    <div className="mb-4 text-center">
                      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Our undergraduate scholarships are designed to empower Palestinian students to achieve their academic dreams and build a brighter future.
                      </p>
                    </div>
                    <Link href="/apply">
                      <Button size="lg" className="bg-[hsl(120,61%,34%)] text-white hover:bg-[hsl(120,61%,34%)]/90 dark:bg-[hsl(120,61%,34%)] dark:text-white dark:hover:bg-[hsl(120,61%,34%)]/90">
                        Apply for Undergraduate Programs
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </GSAPReveal>
              </TabsContent>

              <TabsContent value="graduate" className="space-y-8">
                <GSAPReveal animation="fade">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(120,61%,34%)]/10">
                      <GraduationCap className="h-8 w-8 text-[hsl(120,61%,34%)]" />
                    </div>
                    <h2 className="text-3xl font-bold">graduate Programs</h2>
                    <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
                      Supporting master's and PHD degree students across various disciplines with financial aid, mentorship,
                      and academic resources.
                    </p>
                  </div>
                </GSAPReveal>

                <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 max-w-30xl mx-auto justify-center items-center" id="graduate-scholarships">
                  <GSAPReveal animation="slide-up" delay={0.1} className="h-full w-full">
                    <div className="group relative h-full w-full overflow-hidden rounded-xl transition-all duration-500 hover:shadow-2xl">
                      {/* Background gradient with animation */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,76%,40%)] via-black to-[hsl(120,61%,34%)] opacity-90 transition-all duration-700 group-hover:opacity-100"></div>

                      {/* Animated pattern overlay */}
                      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-10 mix-blend-overlay transition-all duration-700 group-hover:opacity-20"></div>

                      {/* Content container */}
                      <div className="relative z-10 p-6 md:p-8 text-white h-full flex flex-col">
                        {/* Header with icon */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20 card-icon">
                            <Award className="h-8 w-8 text-white transition-all duration-500 group-hover:text-[hsl(120,61%,34%)]" />
                          </div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold font-playfair tracking-tight">Sustainability Scholarship</h3>
                            <p className="text-white/80 text-sm">Excellence Scholarship</p>
                          </div>
                        </div>


                        {/* Main description */}
                        <div className="mb-4 border-l-4 border-[hsl(120,61%,34%)] pl-4 py-2">
                          <p className="text-white/90">
                          Provides 200 master's and doctoral scholarships in energy engineering, renewable energy, and agricultural engineering. The goal is to develop Palestinian expertise in energy, environmental, and agricultural fields to ensure energy independence and food security in Palestine.
                          </p>
                          <div className="mt-4 space-y-3">
                            <h4 className="text-white font-medium text-sm uppercase tracking-wider">Scholarship Goals</h4>
                            <div className="grid grid-cols-1 gap-3">
                              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:translate-x-1 hover:shadow-lg">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(120,61%,34%)]/20">
                                  <Lightbulb className="h-4 w-4 text-[hsl(120,61%,34%)]" />
                                </div>
                                <div>
                                  <p className="text-white/90 text-sm">Qualifing distinguished palestinian medical cadres who contribute to the renaissance of the society</p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:translate-x-1 hover:shadow-lg">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(120,61%,34%)]/20">
                                  <Globe className="h-4 w-4 text-[hsl(120,61%,34%)]" />
                                </div>
                                <div>
                                  <p className="text-white/90 text-sm">Embracing, nurturing, and guiding outstanding students</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:translate-x-1 hover:shadow-lg">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(120,61%,34%)]/20">
                                  <Globe className="h-4 w-4 text-[hsl(120,61%,34%)]" />
                                </div>
                                <div>
                                  <p className="text-white/90 text-sm">Promoting scientific research that serves the community</p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:translate-x-1 hover:shadow-lg">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(120,61%,34%)]/20">
                                  <Users className="h-4 w-4 text-[hsl(120,61%,34%)]" />
                                </div>
                                <div>
                                  <p className="text-white/90 text-sm">sponsoring 1,000 palestinian students in medical colleges</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Details grid */}
                        <div className="grid grid-cols-2 gap-6 mb-8">
                          <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-5 w-5 text-[hsl(120,61%,34%)]" />
                              <span className="font-medium">Duration</span>
                            </div>
                            <p className="text-white/80 text-sm">2 years (full degree)</p>
                          </div>

                          <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                            <div className="flex items-center gap-2">
                              <Clock className="h-5 w-5 text-[hsl(120,61%,34%)]" />
                              <span className="font-medium">Deadline</span>
                            </div>
                            <p className="text-white/80 text-sm">March 15 (annual)</p>
                          </div>

                          <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                              <div className="flex items-center gap-2">
                              <CheckSquare className="h-5 w-5 text-[hsl(120,61%,34%)]" />
                              <span className="font-medium">Requirments</span>
                            </div>
                            <ul className="mt-2 space-y-2">
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(120,61%,34%)]"></div>
                                <span className="text-white/80 text-sm">Palestinian nationality</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-3 rounded-full bg-[hsl(120,61%,34%)]"></div>
                                <span className="text-white/80 text-sm">hight school average of 90% or higher</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(120,61%,34%)]"></div>
                                <span className="text-white/80 text-sm">GPA 3.00+</span>
                              </li>
                              <li className="flex items-start gap-2 mt-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(120,61%,34%)] mt-2"></div>
                                <span className="text-white/80 text-sm">Fluencey in english </span>
                              </li>
                            </ul>
                          </div>

                          <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                            <div className="flex items-center gap-2">
                              <Target className="h-5 w-5 text-[hsl(120,61%,34%)]" />
                              <span className="font-medium">Fields of Study</span>
                            </div>
                            <ul className="mt-2 space-y-2">
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(120,61%,34%)]"></div>
                                <span className="text-white/80 text-sm">Human Medicine</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(120,61%,34%)]"></div>
                                <span className="text-white/80 text-sm">Dentistry</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(120,61%,34%)]"></div>
                                <span className="text-white/80 text-sm">Pharmacy</span>
                              </li>
                              <li className="flex items-start gap-2 mt-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(120,61%,34%)] mt-2"></div>
                                <span className="text-white/80 text-sm">Allied Health Professions</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="mt-auto grid grid-cols-2 gap-4">
                          <Link href="/apply" className="group/btn">
                            <Button className="w-full bg-black text-white hover:bg-[hsl(120,61%,34%)] hover:text-white transition-all duration-300 group-hover/btn:shadow-lg">
                              Apply Now
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                            </Button>
                          </Link>
                          <Link href="/donate" className="group/btn">
                            <Button className="w-full bg-[hsl(0,76%,40%)] text-white hover:bg-[hsl(120,61%,34%)] hover:text-white transition-all duration-300 group-hover/btn:shadow-lg">
                              Donate Now
                              <DollarSign className="ml-2 h-4 w-4 transition-all group-hover/btn:scale-110" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </GSAPReveal>

                  <GSAPReveal animation="slide-up" delay={0.2} className="h-full w-full">
                    <div className="group relative h-full w-full overflow-hidden rounded-xl transition-all duration-500 hover:shadow-2xl">
                      {/* Background gradient with animation */}
                      <div className="absolute inset-0 bg-gradient-to-bl from-[hsl(120,61%,34%)] via-black to-[hsl(0,76%,40%)] opacity-90 transition-all duration-700 group-hover:opacity-100"></div>

                      {/* Animated pattern overlay */}
                      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-10 mix-blend-overlay transition-all duration-700 group-hover:opacity-20"></div>

                      {/* Content container */}
                      <div className="relative z-10 p-6 md:p-8 text-white h-full flex flex-col">
                        {/* Header with icon */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20 card-icon">
                            <GraduationCap className="h-8 w-8 text-white transition-all duration-500 group-hover:text-[hsl(0,76%,40%)]" />
                          </div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold font-playfair tracking-tight">Justice for Palestine Program</h3>
                            <p className="text-white/80 text-sm">Excellence Scholarship</p>
                          </div>
                        </div>

                        {/* Main description */}
                        <div className="mb-4 border-l-4 border-[hsl(0,76%,40%)] pl-4 py-2">
                          <p className="text-white/90">
                          Provides 200 master's and doctoral scholarships in political science and international relations, aiming to prepare qualified Palestinian professionals for political, diplomatic, international, and crisis management roles, enabling them to advocate for Palestine globally.
                          </p>
                          <div className="mt-4 space-y-3">
                            <h4 className="text-white font-medium text-sm uppercase tracking-wider">Scholarship Goals</h4>
                            <div className="grid grid-cols-1 gap-3">
                              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:translate-x-1 hover:shadow-lg">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(0,76%,40%)]/20">
                                  <Target className="h-4 w-4 text-[hsl(0,76%,40%)]" />
                                </div>
                                <div>
                                  <p className="text-white/90 text-sm">Developing scientific leadership competencies that contribute to the advancment of society.</p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:translate-x-1 hover:shadow-lg">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(0,76%,40%)]/20">
                                  <Briefcase className="h-4 w-4 text-[hsl(0,76%,40%)]" />
                                </div>
                                <div>
                                  <p className="text-white/90 text-sm">Providing society with scientific cadres holding specialized specializations and prestigious certificates</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:translate-x-1 hover:shadow-lg">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(0,76%,40%)]/20">
                                  <Briefcase className="h-4 w-4 text-[hsl(0,76%,40%)]" />
                                </div>
                                <div>
                                  <p className="text-white/90 text-sm">providing a nurturing enviroment for distinguished palestinian students</p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:translate-x-1 hover:shadow-lg">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(0,76%,40%)]/20">
                                  <BookOpen className="h-4 w-4 text-[hsl(0,76%,40%)]" />
                                </div>
                                <div>
                                  <p className="text-white/90 text-sm">Sponsoring 1,000 academically distinguished palestinian students</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Details grid */}
                        <div className="grid grid-cols-2 gap-6 mb-8">
                          <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-5 w-5 text-[hsl(0,76%,40%)]" />
                              <span className="font-medium">Duration</span>
                            </div>
                            <p className="text-white/80 text-sm">2 years (Full degree)</p>
                          </div>

                          <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                            <div className="flex items-center gap-2">
                              <Clock className="h-5 w-5 text-[hsl(0,76%,40%)]" />
                              <span className="font-medium">Deadline</span>
                            </div>
                            <p className="text-white/80 text-sm">June 30 (annual)</p>
                          </div>

                          <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                              <div className="flex items-center gap-2">
                              <CheckSquare className="h-5 w-5 text-[hsl(0,76%,40%)]" />
                              <span className="font-medium">Requirments</span>
                            </div>
                            <ul className="mt-2 space-y-2">
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(0,76%,40%)]"></div>
                                <span className="text-white/80 text-sm">Palestinian nationality</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-3 rounded-full bg-[hsl(0,76%,40%)]"></div>
                                <span className="text-white/80 text-sm">hight school average of 90% or higher</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(0,76%,40%)]"></div>
                                <span className="text-white/80 text-sm">GPA 3.00+</span>
                              </li>
                              <li className="flex items-start gap-2 mt-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(0,76%,40%)] mt-2"></div>
                                <span className="text-white/80 text-sm">Fluencey in english </span>
                              </li>
                            </ul>
                          </div>

                          <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                            <div className="flex items-center gap-2">
                              <Target className="h-5 w-5 text-[hsl(0,76%,40%)]" />
                              <span className="font-medium">Fields of Study</span>
                            </div>
                            <ul className="mt-2 space-y-2">
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(0,76%,40%)]"></div>
                                <span className="text-white/80 text-sm">Human Medicine</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(0,76%,40%)]"></div>
                                <span className="text-white/80 text-sm">Dentistry</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(0,76%,40%)]"></div>
                                <span className="text-white/80 text-sm">Pharmacy</span>
                              </li>
                              <li className="flex items-start gap-2 mt-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(0,76%,40%)] mt-2"></div>
                                <span className="text-white/80 text-sm">Allied Health Professions</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="mt-auto grid grid-cols-2 gap-4">
                          <Link href="/apply" className="group/btn">
                            <Button className="w-full bg-black text-white hover:bg-[hsl(120,61%,34%)] hover:text-white transition-all duration-300 group-hover/btn:shadow-lg">
                              Apply Now
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                            </Button>
                          </Link>
                          <Link href="/donate" className="group/btn">
                            <Button className="w-full bg-[hsl(0,76%,40%)] text-white hover:bg-[hsl(120,61%,34%)] hover:text-white transition-all duration-300 group-hover/btn:shadow-lg">
                              Donate Now
                              <DollarSign className="ml-2 h-4 w-4 transition-all group-hover/btn:scale-110" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </GSAPReveal>

                  <GSAPReveal animation="slide-up" delay={0.2} className="h-full w-full">
                    <div className="group relative h-full w-full overflow-hidden rounded-xl transition-all duration-500 hover:shadow-2xl">
                      {/* Background gradient with animation */}
                      <div className="absolute inset-0 bg-gradient-to-bl from-[hsl(120,61%,34%)] via-black to-[hsl(0,76%,40%)] opacity-90 transition-all duration-700 group-hover:opacity-100"></div>

                      {/* Animated pattern overlay */}
                      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-10 mix-blend-overlay transition-all duration-700 group-hover:opacity-20"></div>

                      {/* Content container */}
                      <div className="relative z-10 p-6 md:p-8 text-white h-full flex flex-col">
                        {/* Header with icon */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20 card-icon">
                            <GraduationCap className="h-8 w-8 text-white transition-all duration-500 group-hover:text-[hsl(0,76%,40%)]" />
                          </div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold font-playfair tracking-tight">Ibn Khaldun Scholarship Program</h3>
                            <p className="text-white/80 text-sm">Excellence Scholarship</p>
                          </div>
                        </div>

                        {/* Main description */}
                        <div className="mb-4 border-l-4 border-[hsl(30,76%,40%)] pl-4 py-2">
                          <p className="text-white/90">
                          Provides 200 master's and doctoral scholarships in political science and international relations, aiming to prepare qualified Palestinian professionals for political, diplomatic, international, and crisis management roles, enabling them to advocate for Palestine globally.

                          </p>
                          <div className="mt-4 space-y-3">
                            <h4 className="text-white font-medium text-sm uppercase tracking-wider">Scholarship Goals</h4>
                            <div className="grid grid-cols-1 gap-3">
                              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:translate-x-1 hover:shadow-lg">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(0,76%,40%)]/20">
                                  <Target className="h-4 w-4 text-[hsl(30,76%,40%)]" />
                                </div>
                                <div>
                                  <p className="text-white/90 text-sm">Developing scientific leadership competencies that contribute to the advancment of society.</p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:translate-x-1 hover:shadow-lg">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(0,76%,40%)]/20">
                                  <Briefcase className="h-4 w-4 text-[hsl(30,76%,40%)]" />
                                </div>
                                <div>
                                  <p className="text-white/90 text-sm">Providing society with scientific cadres holding specialized specializations and prestigious certificates</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:translate-x-1 hover:shadow-lg">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(0,76%,40%)]/20">
                                  <Briefcase className="h-4 w-4 text-[hsl(30,76%,40%)]" />
                                </div>
                                <div>
                                  <p className="text-white/90 text-sm">providing a nurturing enviroment for distinguished palestinian students</p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:translate-x-1 hover:shadow-lg">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(0,76%,40%)]/20">
                                  <BookOpen className="h-4 w-4 text-[hsl(30,76%,40%)]" />
                                </div>
                                <div>
                                  <p className="text-white/90 text-sm">Sponsoring 1,000 academically distinguished palestinian students</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Details grid */}
                        <div className="grid grid-cols-2 gap-6 mb-8">
                          <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-5 w-5 text-[hsl(30,76%,40%)]" />
                              <span className="font-medium">Duration</span>
                            </div>
                            <p className="text-white/80 text-sm">2 years (Full degree)</p>
                          </div>

                          <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                            <div className="flex items-center gap-2">
                              <Clock className="h-5 w-5 text-[hsl(30,76%,40%)]" />
                              <span className="font-medium">Deadline</span>
                            </div>
                            <p className="text-white/80 text-sm">April 30 (annual)</p>
                          </div>

                          <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                              <div className="flex items-center gap-2">
                              <CheckSquare className="h-5 w-5 text-[hsl(30,76%,40%)]" />
                              <span className="font-medium">Requirments</span>
                            </div>
                            <ul className="mt-2 space-y-2">
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(30,76%,40%)]"></div>
                                <span className="text-white/80 text-sm">Palestinian nationality</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-3 rounded-full bg-[hsl(30,76%,40%)]"></div>
                                <span className="text-white/80 text-sm">hight school average of 90% or higher</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(30,76%,40%)]"></div>
                                <span className="text-white/80 text-sm">GPA 3.00+</span>
                              </li>
                              <li className="flex items-start gap-2 mt-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(30,76%,40%)] mt-2"></div>
                                <span className="text-white/80 text-sm">Fluencey in english </span>
                              </li>
                            </ul>
                          </div>

                          <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                            <div className="flex items-center gap-2">
                              <Target className="h-5 w-5 text-[hsl(30,76%,40%)]" />
                              <span className="font-medium">Fields of Study</span>
                            </div>
                            <ul className="mt-2 space-y-2">
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(30,76%,40%)]"></div>
                                <span className="text-white/80 text-sm">Human Medicine</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(30,76%,40%)]"></div>
                                <span className="text-white/80 text-sm">Dentistry</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(30,76%,40%)]"></div>
                                <span className="text-white/80 text-sm">Pharmacy</span>
                              </li>
                              <li className="flex items-start gap-2 mt-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(30,76%,40%)] mt-2"></div>
                                <span className="text-white/80 text-sm">Allied Health Professions</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="mt-auto grid grid-cols-2 gap-4">
                          <Link href="/apply" className="group/btn">
                            <Button className="w-full bg-black text-white hover:bg-[hsl(120,61%,34%)] hover:text-white transition-all duration-300 group-hover/btn:shadow-lg">
                              Apply Now
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                            </Button>
                          </Link>
                          <Link href="/donate" className="group/btn">
                            <Button className="w-full bg-[hsl(0,76%,40%)] text-white hover:bg-[hsl(120,61%,34%)] hover:text-white transition-all duration-300 group-hover/btn:shadow-lg">
                              Donate Now
                              <DollarSign className="ml-2 h-4 w-4 transition-all group-hover/btn:scale-110" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </GSAPReveal>
                </div>

                <GSAPReveal animation="fade" delay={0.4}>
                  <div className="text-center mt-8">
                    <div className="mb-4 text-center">
                      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Our undergraduate scholarships are designed to empower Palestinian students to achieve their academic dreams and build a brighter future.
                      </p>
                    </div>
                    <Link href="/apply">
                      <Button size="lg" className="bg-[hsl(120,61%,34%)] text-white hover:bg-[hsl(120,61%,34%)]/90 dark:bg-[hsl(120,61%,34%)] dark:text-white dark:hover:bg-[hsl(120,61%,34%)]/90">
                        Apply for graduate Programs
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>

                </GSAPReveal>

              </TabsContent>

              <TabsContent value="research" className="space-y-8">
                <GSAPReveal animation="fade">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(120,61%,34%)]/10">
                      <BookOpen className="h-8 w-8 text-[hsl(120,61%,34%)]" />
                    </div>
                    <h2 className="text-3xl font-bold">Research Programs</h2>
                    <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
                      Supporting innovative research projects led by Palestinian scholars that address critical
                      challenges and contribute to knowledge advancement.
                    </p>
                  </div>
                </GSAPReveal>

                <div className="grid gap-10 md:grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto" id="research-scholarships">
                  <GSAPReveal animation="slide-up" delay={0.1} className="h-full">
                    <div className="group relative h-full overflow-hidden rounded-xl transition-all duration-500 hover:shadow-2xl">
                      {/* Background gradient with animation */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,76%,40%)] via-black to-[hsl(120,61%,34%)] opacity-90 transition-all duration-700 group-hover:opacity-100"></div>

                      {/* Animated pattern overlay */}
                      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-10 mix-blend-overlay transition-all duration-700 group-hover:opacity-20"></div>

                      {/* Content container */}
                      <div className="relative z-10 p-8 text-white h-full flex flex-col">
                        {/* Header with icon */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20 card-icon">
                            <BookOpen className="h-8 w-8 text-white transition-all duration-500 group-hover:text-[hsl(120,61%,34%)]" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold font-playfair tracking-tight">Research Innovation Grant</h3>
                            <p className="text-white/80 text-sm">Advanced Research Funding</p>
                          </div>
                        </div>

                        {/* Main description */}
                        <div className="mb-4 border-l-4 border-[hsl(120,61%,34%)] pl-4 py-2">
                          <p className="text-white/90">
                            Supports groundbreaking research projects led by Palestinian scholars addressing critical challenges in healthcare, technology, and sustainable development.
                          </p>
                          <div className="mt-4 space-y-3">
                            <h4 className="text-white font-medium text-sm uppercase tracking-wider">Research Focus Areas</h4>
                            <div className="grid grid-cols-1 gap-3">
                              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:translate-x-1 hover:shadow-lg">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(120,61%,34%)]/20">
                                  <Lightbulb className="h-4 w-4 text-[hsl(120,61%,34%)]" />
                                </div>
                                <div>
                                  <p className="text-white/90 text-sm">Medical innovations and healthcare solutions for conflict zones</p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:translate-x-1 hover:shadow-lg">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(120,61%,34%)]/20">
                                  <Globe className="h-4 w-4 text-[hsl(120,61%,34%)]" />
                                </div>
                                <div>
                                  <p className="text-white/90 text-sm">Sustainable energy and water solutions for Palestine</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Details grid */}
                        <div className="grid grid-cols-2 gap-6 mb-8">
                          <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-5 w-5 text-[hsl(120,61%,34%)]" />
                              <span className="font-medium">Duration</span>
                            </div>
                            <p className="text-white/80 text-sm">1-3 years</p>
                          </div>

                          <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                            <div className="flex items-center gap-2">
                              <Clock className="h-5 w-5 text-[hsl(120,61%,34%)]" />
                              <span className="font-medium">Deadline</span>
                            </div>
                            <p className="text-white/80 text-sm">September 30 (annual)</p>
                          </div>

                          <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                              <div className="flex items-center gap-2">
                              <CheckSquare className="h-5 w-5 text-[hsl(120,61%,34%)]" />
                              <span className="font-medium">Requirements</span>
                            </div>
                            <ul className="mt-2 space-y-2">
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(120,61%,34%)]"></div>
                                <span className="text-white/80 text-sm">Palestinian researcher</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(120,61%,34%)]"></div>
                                <span className="text-white/80 text-sm">PhD or equivalent</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(120,61%,34%)]"></div>
                                <span className="text-white/80 text-sm">Detailed research proposal</span>
                              </li>
                            </ul>
                          </div>

                          <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                            <div className="flex items-center gap-2">
                              <Target className="h-5 w-5 text-[hsl(120,61%,34%)]" />
                              <span className="font-medium">Funding Covers</span>
                            </div>
                            <ul className="mt-2 space-y-2">
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(120,61%,34%)]"></div>
                                <span className="text-white/80 text-sm">Research equipment</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(120,61%,34%)]"></div>
                                <span className="text-white/80 text-sm">Staff salaries</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(120,61%,34%)]"></div>
                                <span className="text-white/80 text-sm">Publication costs</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="mt-auto grid grid-cols-2 gap-4">
                          <Link href="/apply" className="group/btn">
                            <Button className="w-full bg-black text-white hover:bg-[hsl(120,61%,34%)] hover:text-white transition-all duration-300 group-hover/btn:shadow-lg">
                              Apply Now
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                            </Button>
                          </Link>
                          <Link href="/donate" className="group/btn">
                            <Button className="w-full bg-[hsl(0,76%,40%)] text-white hover:bg-[hsl(120,61%,34%)] hover:text-white transition-all duration-300 group-hover/btn:shadow-lg">
                              Support Research
                              <DollarSign className="ml-2 h-4 w-4 transition-all group-hover/btn:scale-110" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </GSAPReveal>

                  <GSAPReveal animation="slide-up" delay={0.2} className="h-full">
                    <div className="group relative h-full overflow-hidden rounded-xl transition-all duration-500 hover:shadow-2xl">
                      {/* Background gradient with animation */}
                      <div className="absolute inset-0 bg-gradient-to-bl from-[hsl(120,61%,34%)] via-black to-[hsl(0,76%,40%)] opacity-90 transition-all duration-700 group-hover:opacity-100"></div>

                      {/* Animated pattern overlay */}
                      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-10 mix-blend-overlay transition-all duration-700 group-hover:opacity-20"></div>

                      {/* Content container */}
                      <div className="relative z-10 p-8 text-white h-full flex flex-col">
                        {/* Header with icon */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20 card-icon">
                            <Briefcase className="h-8 w-8 text-white transition-all duration-500 group-hover:text-[hsl(0,76%,40%)]" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold font-playfair tracking-tight">Collaborative Research Initiative</h3>
                            <p className="text-white/80 text-sm">International Partnership Program</p>
                          </div>
                        </div>

                        {/* Main description */}
                        <div className="mb-4 border-l-4 border-[hsl(0,76%,40%)] pl-4 py-2">
                          <p className="text-white/90">
                            Facilitates research partnerships between Palestinian scholars and international institutions to foster knowledge exchange and build global academic networks.
                          </p>
                          <div className="mt-4 space-y-3">
                            <h4 className="text-white font-medium text-sm uppercase tracking-wider">Program Benefits</h4>
                            <div className="grid grid-cols-1 gap-3">
                              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:translate-x-1 hover:shadow-lg">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(0,76%,40%)]/20">
                                  <Target className="h-4 w-4 text-[hsl(0,76%,40%)]" />
                                </div>
                                <div>
                                  <p className="text-white/90 text-sm">Access to international research facilities and resources</p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:translate-x-1 hover:shadow-lg">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(0,76%,40%)]/20">
                                  <Users className="h-4 w-4 text-[hsl(0,76%,40%)]" />
                                </div>
                                <div>
                                  <p className="text-white/90 text-sm">Joint publication opportunities in high-impact journals</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Details grid */}
                        <div className="grid grid-cols-2 gap-6 mb-8">
                          <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-5 w-5 text-[hsl(0,76%,40%)]" />
                              <span className="font-medium">Duration</span>
                            </div>
                            <p className="text-white/80 text-sm">2-4 years</p>
                          </div>

                          <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                            <div className="flex items-center gap-2">
                              <Clock className="h-5 w-5 text-[hsl(0,76%,40%)]" />
                              <span className="font-medium">Deadline</span>
                            </div>
                            <p className="text-white/80 text-sm">October 15 (annual)</p>
                          </div>

                          <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                              <div className="flex items-center gap-2">
                              <CheckSquare className="h-5 w-5 text-[hsl(0,76%,40%)]" />
                              <span className="font-medium">Requirements</span>
                            </div>
                            <ul className="mt-2 space-y-2">
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(0,76%,40%)]"></div>
                                <span className="text-white/80 text-sm">Palestinian researcher</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(0,76%,40%)]"></div>
                                <span className="text-white/80 text-sm">Partnership agreement</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(0,76%,40%)]"></div>
                                <span className="text-white/80 text-sm">Joint research proposal</span>
                              </li>
                            </ul>
                          </div>

                          <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                            <div className="flex items-center gap-2">
                              <Target className="h-5 w-5 text-[hsl(0,76%,40%)]" />
                              <span className="font-medium">Research Areas</span>
                            </div>
                            <ul className="mt-2 space-y-2">
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(0,76%,40%)]"></div>
                                <span className="text-white/80 text-sm">Technology & Innovation</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(0,76%,40%)]"></div>
                                <span className="text-white/80 text-sm">Public Health</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[hsl(0,76%,40%)]"></div>
                                <span className="text-white/80 text-sm">Sustainable Development</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="mt-auto grid grid-cols-2 gap-4">
                          <Link href="/apply" className="group/btn">
                            <Button className="w-full bg-black text-white hover:bg-[hsl(120,61%,34%)] hover:text-white transition-all duration-300 group-hover/btn:shadow-lg">
                              Apply Now
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                            </Button>
                          </Link>
                          <Link href="/donate" className="group/btn">
                            <Button className="w-full bg-[hsl(0,76%,40%)] text-white hover:bg-[hsl(120,61%,34%)] hover:text-white transition-all duration-300 group-hover/btn:shadow-lg">
                              Support Research
                              <DollarSign className="ml-2 h-4 w-4 transition-all group-hover/btn:scale-110" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </GSAPReveal>
                </div>

                <GSAPReveal animation="fade" delay={0.4}>
                  <div className="text-center mt-8">
                    <div className="mb-4 text-center">
                      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Our research programs aim to advance knowledge and develop solutions to challenges facing Palestinian communities.
                      </p>
                    </div>
                    <Link href="/apply">
                      <Button size="lg" className="bg-[hsl(120,61%,34%)] text-white hover:bg-[hsl(120,61%,34%)]/90 dark:bg-[hsl(120,61%,34%)] dark:text-white dark:hover:bg-[hsl(120,61%,34%)]/90">
                        Apply for Research Programs
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </GSAPReveal>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[hsl(0,76%,40%)]/5 via-transparent to-[hsl(120,61%,34%)]/5 dark:from-[hsl(0,76%,40%)]/10 dark:via-black/80 dark:to-[hsl(120,61%,34%)]/10">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <GSAPReveal animation="slide-up">
                <div className="inline-flex items-center rounded-lg bg-[hsl(120,61%,34%)]/10 px-3 py-1 text-sm text-[hsl(120,61%,34%)]">
                  <Lightbulb className="mr-1 h-4 w-4" />
                  Key Benefits
                </div>
                <h2 className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl">Program Features</h2>
                <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
                  All our programs include comprehensive support beyond financial assistance to ensure student success
                  and well-being.
                </p>
              </GSAPReveal>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <GSAPReveal animation="scale" delay={0.1} className="h-full">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(120,61%,34%)]/10">
                    <Users className="h-6 w-6 text-[hsl(120,61%,34%)]" />
                  </div>
                  <h3 className="text-xl font-bold">Mentorship</h3>
                  <p className="mt-2 text-muted-foreground">
                    One-on-one guidance from experienced academics and professionals in your field of study.
                  </p>
                </div>
              </GSAPReveal>

              <GSAPReveal animation="scale" delay={0.2} className="h-full">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(0,76%,40%)]/10">
                    <Globe className="h-6 w-6 text-[hsl(0,76%,40%)]" />
                  </div>
                  <h3 className="text-xl font-bold">Cultural Integration</h3>
                  <p className="mt-2 text-muted-foreground">
                    Support services to help students adapt to new environments and cultural contexts.
                  </p>
                </div>
              </GSAPReveal>

              <GSAPReveal animation="scale" delay={0.3} className="h-full">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black/10 dark:bg-white/10">
                    <Lightbulb className="h-6 w-6 text-black dark:text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Career Development</h3>
                  <p className="mt-2 text-muted-foreground">
                    Workshops, networking events, and resources to prepare for successful career paths.
                  </p>
                </div>
              </GSAPReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Application */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[hsl(0,76%,40%)]/5 via-transparent to-[hsl(120,61%,34%)]/5 dark:from-[hsl(0,76%,40%)]/10 dark:via-black/80 dark:to-[hsl(120,61%,34%)]/10">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <GSAPReveal animation="slide-up">
                <div className="inline-flex items-center rounded-lg bg-[hsl(0,76%,40%)]/10 px-3 py-1 text-sm text-[hsl(0,76%,40%)]">
                  <Users className="mr-1 h-4 w-4" />
                  Application Guide
                </div>
                <h2 className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl">Eligibility & Application</h2>
                <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
                  Learn about our application process and eligibility requirements for our programs.
                </p>
              </GSAPReveal>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              <GSAPReveal animation="slide-right">
                <div>
                  <h3 className="mb-4 text-2xl font-bold">Eligibility Criteria</h3>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Palestinian nationality or heritage (documentation required)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Strong academic record (specific GPA requirements vary by program)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Demonstrated financial need</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>English proficiency (or language of instruction at target institution)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Commitment to community service and giving back</span>
                    </li>
                  </ul>
                </div>
              </GSAPReveal>

              <GSAPReveal animation="slide-left">
                <div>
                  <h3 className="mb-4 text-2xl font-bold">Application Process</h3>
                  <ol className="space-y-4 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2 font-bold text-primary">1.</span>
                      <span>Create an account on our online application portal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 font-bold text-primary">2.</span>
                      <span>Complete the application form with personal and academic information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 font-bold text-primary">3.</span>
                      <span>Upload required documents (transcripts, ID, recommendation letters)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 font-bold text-primary">4.</span>
                      <span>Submit a personal statement and/or research proposal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 font-bold text-primary">5.</span>
                      <span>Participate in an interview (for shortlisted candidates)</span>
                    </li>
                  </ol>
                </div>
              </GSAPReveal>
            </div>

            <GSAPReveal animation="fade" delay={0.4}>
              <div className="mt-12 text-center">
                <Link href="/apply">
                  <Button
                    size="lg"
                    className="bg-[hsl(120,61%,34%)] text-white hover:bg-[hsl(120,61%,34%)]/90 dark:bg-[hsl(120,61%,34%)] dark:text-white dark:hover:bg-[hsl(120,61%,34%)]/90"
                  >
                    Start Your Application
                  </Button>
                </Link>
              </div>
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[hsl(0,76%,40%)]/5 via-transparent to-[hsl(120,61%,34%)]/5 dark:from-[hsl(0,76%,40%)]/10 dark:via-black/80 dark:to-[hsl(120,61%,34%)]/10">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <GSAPReveal animation="slide-up">
                <div className="inline-flex items-center rounded-lg bg-[hsl(120,61%,34%)]/10 px-3 py-1 text-sm text-[hsl(120,61%,34%)]">
                  <Lightbulb className="mr-1 h-4 w-4" />
                  Common Questions
                </div>
                <h2 className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              </GSAPReveal>
            </div>

            <div className="space-y-6">
              <GSAPReveal animation="slide-up" delay={0.1}>
                <div className="rounded-lg border p-6">
                  <h3 className="text-lg font-bold">When are the application deadlines?</h3>
                  <p className="mt-2 text-muted-foreground">
                    Application deadlines vary by program. Please refer to the specific program details for the most
                    current deadlines. Generally, undergraduate applications are due in March, graduate applications in
                    January, and research grants in September.
                  </p>
                </div>
              </GSAPReveal>

              <GSAPReveal animation="slide-up" delay={0.2}>
                <div className="rounded-lg border p-6">
                  <h3 className="text-lg font-bold">Can I apply for multiple programs?</h3>
                  <p className="mt-2 text-muted-foreground">
                    Yes, you may apply for multiple programs, but you must submit separate applications for each program
                    and meet all respective eligibility requirements.
                  </p>
                </div>
              </GSAPReveal>

              <GSAPReveal animation="slide-up" delay={0.3}>
                <div className="rounded-lg border p-6">
                  <h3 className="text-lg font-bold">How competitive are the scholarships?</h3>
                  <p className="mt-2 text-muted-foreground">
                    Our programs are highly competitive. We typically receive hundreds of applications for each funding
                    cycle. Selection is based on academic merit, financial need, and alignment with our foundation's
                    mission and values.
                  </p>
                </div>
              </GSAPReveal>

              <GSAPReveal animation="slide-up" delay={0.4}>
                <div className="rounded-lg border p-6">
                  <h3 className="text-lg font-bold">What support is provided beyond financial assistance?</h3>
                  <p className="mt-2 text-muted-foreground">
                    We provide comprehensive support including mentorship, cultural integration assistance, career
                    development resources, networking opportunities, and ongoing academic advising.
                  </p>
                </div>
              </GSAPReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[hsl(0,76%,40%)] via-black to-[hsl(120,61%,34%)] text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <GSAPReveal animation="slide-up">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Begin Your Journey?</h2>
              <p className="mt-4 text-xl text-white/90">
                Take the first step toward your educational goals by applying to our programs today.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/apply">
                  <Button
                    size="lg"
                    className="bg-[hsl(120,61%,34%)] text-white hover:bg-[hsl(120,61%,34%)]/90 dark:bg-[hsl(120,61%,34%)] dark:text-white dark:hover:bg-[hsl(120,61%,34%)]/90"
                  >
                    Apply Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-[hsl(120,61%,34%)] text-white hover:bg-[hsl(120,61%,34%)]/90 dark:bg-[hsl(120,61%,34%)] dark:text-white dark:hover:bg-[hsl(120,61%,34%)]/90"
                  >
                    Contact Our Team
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

