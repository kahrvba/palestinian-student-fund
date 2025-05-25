"use client"

import Link from "next/link"
import { Users, ArrowRight, GraduationCap, Globe, Award, Lightbulb, Handshake as HandshakeIcon, Target, Compass, BookOpen, Rocket } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/cover2.png"
            alt="Hero Cover"
            className="h-full w-full object-cover object-center"
          />
        </div>
        {/* Page Indicator */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-10">
          <div className="bg-white/10 backdrop-blur-md rounded-lg px-3 py-2 sm:px-4 sm:py-2 border border-white/20">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#1e7e34]"></div>
              <span className="text-white text-xs sm:text-sm font-medium">Who Are We</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-lg bg-[#1e7e34]/10 px-3 py-1 text-sm text-[#1e7e34]">
              <Compass className="mr-1 h-4 w-4" />
              Our Purpose
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl">
              Mission & Vision
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
              Guided by our commitment to educational equity and empowerment for Palestinian students worldwide.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
            {/* Mission Card */}
            <div className="relative overflow-hidden rounded-xl border border-[#1e7e34]/20 bg-white p-8 shadow-lg dark:bg-gray-900">
              <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 transform rounded-full bg-[#1e7e34]/10"></div>

              <div className="relative">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#1e7e34]/10">
                  <Target className="h-8 w-8 text-[#1e7e34]" />
                </div>

                <h3 className="text-2xl font-bold">{t("about.mission.title")}</h3>

                <div className="mt-4 space-y-4">
                  <p className="text-muted-foreground">{t("about.mission.text")}</p>

                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-[#1e7e34]/10 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-[#1e7e34]"></div>
                      </div>
                      <span>Provide scholarships to talented Palestinian students</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-[#1e7e34]/10 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-[#1e7e34]"></div>
                      </div>
                      <span>Create educational opportunities through global partnerships</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-[#1e7e34]/10 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-[#1e7e34]"></div>
                      </div>
                      <span>Support academic and professional development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="relative overflow-hidden rounded-xl border border-[#1e7e34]/20 bg-white p-8 shadow-lg dark:bg-gray-900">
              <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 transform rounded-full bg-[#1e7e34]/10"></div>

              <div className="relative">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#1e7e34]/10">
                  <Rocket className="h-8 w-8 text-[#1e7e34]" />
                </div>

                <h3 className="text-2xl font-bold">{t("about.vision.title")}</h3>

                <div className="mt-4 space-y-4">
                  <p className="text-muted-foreground">{t("about.vision.text")}</p>

                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-[#1e7e34]/10 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-[#1e7e34]"></div>
                      </div>
                      <span>A world where every Palestinian student has access to quality education</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-[#1e7e34]/10 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-[#1e7e34]"></div>
                      </div>
                      <span>A global network of Palestinian scholars and professionals</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-[#1e7e34]/10 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-[#1e7e34]"></div>
                      </div>
                      <span>Educational empowerment as a path to community development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
             <div className="container px-4 md:px-6">
               <div className="flex flex-col items-center justify-center space-y-4 text-center">
                 <div className="space-y-2">
                   <div className="inline-flex items-center rounded-lg bg-[#1e7e34]/10 px-3 py-1 text-sm text-[#1e7e34]">
                     <Users className="mr-1 h-4 w-4" />
                     {t("about.widgt")}
                   </div>
                   <h2 className="text-3xl font-bold sm:text-5xl">
                     {t("about.title")}
                   </h2>
                   <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                     {t("about.subtitle")}
                   </p>
                 </div>

                 <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                   <div className="flex flex-col justify-center space-y-4 h-full order-2 lg:order-1">
                     <ul className="grid gap-6 flex-1">
                       <li>
                         <div className="flex gap-4 items-start">
                           <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1e7e34]/10 flex items-center justify-center">
                             <GraduationCap className="h-6 w-6 text-[#1e7e34]" />
                           </div>
                           <div>
                             <h3 className="text-xl font-bold">{t("about.identity")}</h3>
                             <p className="text-muted-foreground">{t("about.identity.desc")}</p>
                           </div>
                         </div>
                       </li>
                       <li>
                         <div className="flex gap-4 items-start">
                           <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1e7e34]/10 flex items-center justify-center">
                             <Target className="h-6 w-6 text-[#1e7e34]" />
                           </div>
                           <div>
                             <h3 className="text-xl font-bold">{t("about.identity2")}</h3>
                             <p className="text-muted-foreground">{t("about.identity2.desc")}</p>
                           </div>
                         </div>
                       </li>
                       <li>
                         <div className="flex gap-4 items-start">
                           <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1e7e34]/10 flex items-center justify-center">
                             <Globe className="h-6 w-6 text-[#1e7e34]" />
                           </div>
                           <div>
                             <h3 className="text-xl font-bold">{t("about.identity3")}</h3>
                             <p className="text-muted-foreground">{t("about.identity3.desc")}</p>
                           </div>
                         </div>
                       </li>
                       <li>
                         <div className="flex gap-4 items-start">
                           <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1e7e34]/10 flex items-center justify-center">
                             <Award className="h-6 w-6 text-[#1e7e34]" />
                           </div>
                           <div>
                             <h3 className="text-xl font-bold">{t("about.identity4")}</h3>
                             <p className="text-muted-foreground">{t("about.identity4.desc")}</p>
                           </div>
                         </div>
                       </li>
                     </ul>
                   </div>

                   <div className="flex flex-col justify-center space-y-4 h-full order-1 lg:order-2">
                     <ul className="grid gap-6 flex-1">
                       <li>
                         <div className="flex gap-4 items-start">
                           <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1e7e34]/10 flex items-center justify-center">
                             <Lightbulb className="h-6 w-6 text-[#1e7e34]" />
                           </div>
                           <div>
                             <h3 className="text-xl font-bold">{t("about.identity5")}</h3>
                             <p className="text-muted-foreground">{t("about.identity5.desc")}</p>
                           </div>
                         </div>
                       </li>
                       <li>
                         <div className="flex gap-4 items-start">
                           <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1e7e34]/10 flex items-center justify-center">
                             <HandshakeIcon className="h-6 w-6 text-[#1e7e34]" />
                           </div>
                           <div>
                             <h3 className="text-xl font-bold">{t("about.identity6")}</h3>
                             <p className="text-muted-foreground">{t("about.identity6.desc")}</p>
                           </div>
                         </div>
                       </li>
                       <li>
                         <div className="flex gap-4 items-start">
                           <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1e7e34]/10 flex items-center justify-center">
                             <Users className="h-6 w-6 text-[#1e7e34]" />
                           </div>
                           <div>
                             <h3 className="text-xl font-bold">{t("about.identity7")}</h3>
                             <p className="text-muted-foreground">{t("about.identity7.desc")}</p>
                           </div>
                         </div>
                       </li>
                     </ul>
                   </div>
                 </div>
                 <div className="flex justify-center w-full mt-8">
              <Link href="/about">
                <Button
                  className="group bg-[#1e7e34] text-white hover:bg-[#1e7e34]/90 dark:bg-[#1e7e34] dark:text-white dark:hover:bg-[#1e7e34]/90"
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
      <section className="py-16 md:py-24 bg-[#f8faf8] dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center rounded-lg bg-[#1e7e34]/10 px-3 py-1 text-sm text-[#1e7e34]">
                <Users className="mr-1 h-4 w-4" />
                {t("about.team.tag")}
              </div>
              <h2 className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl">
                {t("about.team.title")}
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                  <img
                    src="/s5.jpg?height=128&width=128"
                    alt={t("about.team.member1.name")}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{t("about.team.member1.name")}</h3>
                <p className="text-[#1e7e34]">{t("about.team.member1.title")}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t("about.team.member1.description")}
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                  <img
                    src="/s5.jpg?height=128&width=128"
                    alt={t("about.team.member2.name")}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{t("about.team.member2.name")}</h3>
                <p className="text-[#1e7e34]">{t("about.team.member2.title")}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t("about.team.member2.description")}
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                  <img
                    src="/s5.jpg?height=128&width=128"
                    alt={t("about.team.member3.name")}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{t("about.team.member3.name")}</h3>
                <p className="text-[#1e7e34]">{t("about.team.member3.title")}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t("about.team.member3.description")}
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/about/team">
                <Button
                  className="bg-[#1e7e34] text-white hover:bg-[#1e7e34]/90 dark:bg-[#1e7e34] dark:text-white dark:hover:bg-[#1e7e34]/90"
                >
                  {t("about.team.viewAll")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950 text-black dark:text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center rounded-lg bg-[#1e7e34]/10 px-3 py-1 text-sm text-[#1e7e34]">
                <HandshakeIcon className="mr-1 h-4 w-4" />
                Collaborations
              </div>
              <h2 className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl text-black dark:text-white">
                Our Partners
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
                We collaborate with universities, educational institutions, and organizations worldwide to expand
                opportunities for Palestinian students.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
              <div className="flex flex-col items-center justify-between text-center h-full p-4 rounded-lg transition-all duration-300 hover:bg-[#1e7e34]/5 dark:hover:bg-[#1e7e34]/10 hover:shadow-md">
                <div className="flex items-center justify-center h-32 mb-4">
                  <img src="/partners/p1.jpg" alt="Milli Gençlik Kulübü" className="max-h-32 w-auto object-contain" />
                </div>
                <p className="font-medium text-black dark:text-white text-sm md:text-base">Milli Gençlik Kulübü</p>
              </div>
              <div className="flex flex-col items-center justify-between text-center h-full p-4 rounded-lg transition-all duration-300 hover:bg-[#1e7e34]/5 dark:hover:bg-[#1e7e34]/10 hover:shadow-md">
                <div className="flex items-center justify-center h-32 mb-4">
                  <img src="/partners/p2.png" alt="YediHilal" className="max-h-32 w-auto object-contain" />
                </div>
                <p className="font-medium text-black dark:text-white text-sm md:text-base">YediHilal</p>
              </div>
              <div className="flex flex-col items-center justify-between text-center h-full p-4 rounded-lg transition-all duration-300 hover:bg-[#1e7e34]/5 dark:hover:bg-[#1e7e34]/10 hover:shadow-md">
                <div className="flex items-center justify-center h-32 mb-4">
                  <img src="/partners/p3.jpeg" alt="Hüdayi Vakfı" className="max-h-32 w-auto object-contain" />
                </div>
                <p className="font-medium text-black dark:text-white text-sm md:text-base">Hüdayi Vakfı</p>
              </div>
              <div className="flex flex-col items-center justify-between text-center h-full p-4 rounded-lg transition-all duration-300 hover:bg-[#1e7e34]/5 dark:hover:bg-[#1e7e34]/10 hover:shadow-md">
                <div className="flex items-center justify-center h-32 mb-4">
                  <img src="/partners/p4.png" alt="Khidhumaiy" className="max-h-32 w-auto object-contain" />
                </div>
                <p className="font-medium text-black dark:text-white text-sm md:text-base">Khidhumaiy</p>
              </div>
              <div className="flex flex-col items-center justify-between text-center h-full p-4 rounded-lg transition-all duration-300 hover:bg-[#1e7e34]/5 dark:hover:bg-[#1e7e34]/10 hover:shadow-md">
                <div className="flex items-center justify-center h-32 mb-4">
                  <img src="/partners/p5.png" alt="FEDERATION OF INTERNATIONAL STUDENT ASSOCIATIONS" className="max-h-32 w-auto object-contain" />
                </div>
                <p className="font-medium text-black dark:text-white text-xs md:text-sm">FEDERATION OF INTERNATIONAL STUDENT ASSOCIATIONS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="absolute inset-0 bg-[#f8faf8]/70"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-3xl rounded-xl bg-white p-10 text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1e7e34]/30 via-[#1e7e34]/80 to-[#1e7e34]/30"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#1e7e34]/5 rounded-full"></div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#1e7e34]/5 rounded-full"></div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 dark:text-white relative z-10">
              Join Our Mission
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 relative z-10">
              Whether you're a student looking for support, a potential partner, or someone who wants to contribute to
              our cause, we'd love to hear from you.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center relative z-10">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#1e7e34] text-white hover:bg-[#1e7e34]/90 dark:bg-[#1e7e34] dark:text-white dark:hover:bg-[#1e7e34]/90"
                >
                  Contact Us
                </Button>
              </Link>
              <Link href="/donate">
                <Button
                  size="lg"
                  className="bg-white text-[#1e7e34] border-2 border-[#1e7e34] hover:bg-[#1e7e34] hover:text-white dark:bg-gray-900 dark:text-[#1e7e34] dark:border-[#1e7e34] dark:hover:bg-[#1e7e34] dark:hover:text-white"
                >
                  Support Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

