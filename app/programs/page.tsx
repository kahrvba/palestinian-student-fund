"use client"

import { useEffect } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { GraduationCap, Award, BookOpen, Lightbulb, Globe, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import GSAPReveal from "@/components/gsap-reveal"
import GSAPTextReveal from "@/components/gsap-text-reveal"

export default function ProgramsPage() {
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
            <GSAPTextReveal element="h1" className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl drop-shadow-lg">
              Our Programs
            </GSAPTextReveal>
            <GSAPReveal animation="fade" delay={0.3}>
              <p className="mt-6 text-xl text-white drop-shadow-md">
                Discover our comprehensive range of educational support programs designed to empower Palestinian
                students at every academic level.
              </p>
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
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

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <GSAPReveal animation="slide-up" delay={0.1} className="h-full">
                    <Card className="flex flex-col h-full">
                      <CardHeader>
                        <CardTitle>Full Scholarships</CardTitle>
                        <CardDescription>Comprehensive financial support</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground">
                          Covering tuition fees, accommodation, living expenses, and travel costs for outstanding
                          students with financial need.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                          <li>• Duration: 4 years</li>
                          <li>• Application deadline: March 15</li>
                          <li>• Requirements: Academic excellence</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </GSAPReveal>

                  <GSAPReveal animation="slide-up" delay={0.2} className="h-full">
                    <Card className="flex flex-col h-full">
                      <CardHeader>
                        <CardTitle>Partial Scholarships</CardTitle>
                        <CardDescription>Targeted financial assistance</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground">
                          Covering tuition fees or living expenses for promising students who demonstrate academic
                          potential and financial need.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                          <li>• Duration: 1-4 years</li>
                          <li>• Application deadline: April 30</li>
                          <li>• Requirements: Good academic standing</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </GSAPReveal>

                  <GSAPReveal animation="slide-up" delay={0.3} className="h-full">
                    <Card className="flex flex-col h-full">
                      <CardHeader>
                        <CardTitle>Summer Programs</CardTitle>
                        <CardDescription>Intensive learning opportunities</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground">
                          Short-term programs focusing on specific skills, language acquisition, or cultural exchange
                          during summer breaks.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                          <li>• Duration: 4-8 weeks</li>
                          <li>• Application deadline: February 28</li>
                          <li>• Requirements: Varies by program</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </GSAPReveal>
                </div>

                <GSAPReveal animation="fade" delay={0.4}>
                  <div className="text-center">
                    <Link href="/apply">
                      <Button className="bg-[hsl(120,61%,34%)] text-white hover:bg-[hsl(120,61%,34%)]/90 dark:bg-[hsl(120,61%,34%)] dark:text-white dark:hover:bg-[hsl(120,61%,34%)]/90">Apply for Undergraduate Programs</Button>
                    </Link>
                  </div>
                </GSAPReveal>
              </TabsContent>

              <TabsContent value="graduate" className="space-y-8">
                <GSAPReveal animation="fade">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(0,76%,40%)]/10">
                      <Award className="h-8 w-8 text-[hsl(0,76%,40%)]" />
                    </div>
                    <h2 className="text-3xl font-bold">Graduate Programs</h2>
                    <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
                      Supporting master's and doctoral students with funding, research opportunities, and professional
                      development resources.
                    </p>
                  </div>
                </GSAPReveal>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <GSAPReveal animation="slide-up" delay={0.1} className="h-full">
                    <Card className="flex flex-col h-full">
                      <CardHeader>
                        <CardTitle>Master's Scholarships</CardTitle>
                        <CardDescription>Advanced degree support</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground">
                          Financial support for Palestinian students pursuing master's degrees in priority fields
                          including engineering, medicine, and education.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                          <li>• Duration: 1-2 years</li>
                          <li>• Application deadline: January 15</li>
                          <li>• Requirements: Bachelor's degree with honors</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </GSAPReveal>

                  <GSAPReveal animation="slide-up" delay={0.2} className="h-full">
                    <Card className="flex flex-col h-full">
                      <CardHeader>
                        <CardTitle>PhD Fellowships</CardTitle>
                        <CardDescription>Doctoral research funding</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground">
                          Comprehensive support for doctoral candidates conducting innovative research with potential
                          impact for Palestinian communities.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                          <li>• Duration: 3-5 years</li>
                          <li>• Application deadline: December 1</li>
                          <li>• Requirements: Master's degree, research proposal</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </GSAPReveal>

                  <GSAPReveal animation="slide-up" delay={0.3} className="h-full">
                    <Card className="flex flex-col h-full">
                      <CardHeader>
                        <CardTitle>Professional Development</CardTitle>
                        <CardDescription>Career advancement support</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground">
                          Grants for professional certifications, specialized training, and career development
                          opportunities for graduate students.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                          <li>• Duration: Varies</li>
                          <li>• Application deadline: Rolling basis</li>
                          <li>• Requirements: Current graduate enrollment</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </GSAPReveal>
                </div>

                <GSAPReveal animation="fade" delay={0.4}>
                  <div className="text-center">
                    <Link href="/apply">
                      <Button className="bg-[hsl(120,61%,34%)] text-white hover:bg-[hsl(120,61%,34%)]/90 dark:bg-[hsl(120,61%,34%)] dark:text-white dark:hover:bg-[hsl(120,61%,34%)]/90">Apply for Graduate Programs</Button>
                    </Link>
                  </div>
                </GSAPReveal>
              </TabsContent>

              <TabsContent value="research" className="space-y-8">
                <GSAPReveal animation="fade">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-black/10 dark:bg-white/10">
                      <BookOpen className="h-8 w-8 text-black dark:text-white" />
                    </div>
                    <h2 className="text-3xl font-bold">Research Programs</h2>
                    <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
                      Supporting innovative research projects led by Palestinian scholars that address critical
                      challenges and contribute to knowledge advancement.
                    </p>
                  </div>
                </GSAPReveal>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <GSAPReveal animation="slide-up" delay={0.1} className="h-full">
                    <Card className="flex flex-col h-full">
                      <CardHeader>
                        <CardTitle>Research Grants</CardTitle>
                        <CardDescription>Project-based funding</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground">
                          Financial support for specific research projects with clear objectives, methodologies, and
                          potential for impact.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                          <li>• Duration: 1-3 years</li>
                          <li>• Application deadline: September 30</li>
                          <li>• Requirements: Detailed research proposal</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </GSAPReveal>

                  <GSAPReveal animation="slide-up" delay={0.2} className="h-full">
                    <Card className="flex flex-col h-full">
                      <CardHeader>
                        <CardTitle>Collaborative Research</CardTitle>
                        <CardDescription>Partnership initiatives</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground">
                          Support for research collaborations between Palestinian scholars and international research
                          institutions or universities.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                          <li>• Duration: 2-4 years</li>
                          <li>• Application deadline: October 15</li>
                          <li>• Requirements: Partnership agreement</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </GSAPReveal>

                  <GSAPReveal animation="slide-up" delay={0.3} className="h-full">
                    <Card className="flex flex-col h-full">
                      <CardHeader>
                        <CardTitle>Publication Support</CardTitle>
                        <CardDescription>Academic dissemination</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground">
                          Funding for journal publication fees, conference presentations, and other forms of research
                          dissemination.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                          <li>• Duration: Varies</li>
                          <li>• Application deadline: Rolling basis</li>
                          <li>• Requirements: Accepted manuscript or conference</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </GSAPReveal>
                </div>

                <GSAPReveal animation="fade" delay={0.4}>
                  <div className="text-center">
                    <Link href="/apply">
                      <Button className="bg-[hsl(120,61%,34%)] text-white hover:bg-[hsl(120,61%,34%)]/90 dark:bg-[hsl(120,61%,34%)] dark:text-white dark:hover:bg-[hsl(120,61%,34%)]/90">Apply for Research Programs</Button>
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
      <section className="py-16 md:py-24 bg-white dark:bg-black">
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

