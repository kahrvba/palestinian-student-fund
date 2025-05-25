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
  ArrowRight,
  UserPlus,
  CalendarCheck,
  Stethoscope,
  Hospital,
  Microscope,
  Home,
  Phone,
  Mail,
  Star,
  TrendingUp,
  Shield,
  Zap,
  Brain,
  Eye,
  Building
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import GSAPReveal from "@/components/gsap-reveal"
import GSAPTextReveal from "@/components/gsap-text-reveal"
import Image from "next/image"
import StatsCounter from "@/components/stats-counter"

export default function PalestinianTalentedScholarshipPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-black dark:via-gray-900 dark:to-green-950">
      {/* Header Section */}
      <section className="relative py-20 md:py-28 flex flex-col items-center text-center bg-white/80 dark:bg-black/80 shadow-lg">
        <div className="mb-6">
          <Image src="/Flag_of_Palestine.svg" alt="Palestinian Flag" width={80} height={80} className="mx-auto mb-2" />
          <GSAPTextReveal element="h1" className="text-4xl md:text-5xl font-extrabold text-red-700 font-playfair drop-shadow-lg">
            Palestinian Talented Student Scholarship Program
          </GSAPTextReveal>
          <p className="mt-2 text-lg md:text-xl text-gray-700 dark:text-gray-200 font-medium">Supporting Palestinian Talent: Our Collective Responsibility</p>
        </div>
        <div className="flex justify-center gap-8 mt-8 mb-4">
          <StatsCounter number={1000} label="Scholarships" />
          <StatsCounter number={8} label="Support Areas" />
          <StatsCounter number={3} label="Financial Pillars" />
        </div>
        <div className="max-w-3xl mx-auto bg-white/90 dark:bg-gray-900/80 rounded-xl shadow p-6 mt-4">
          <h2 className="text-xl font-bold text-green-700 mb-2 flex items-center justify-center gap-2">
            <Star className="text-blue-600" size={28} />
            <span>About the Program</span>
          </h2>
          <p className="text-gray-800 dark:text-gray-100 text-base md:text-lg">
            The <span className="font-semibold text-green-800">"Palestinian Talented Student Scholarship Program"</span> is a national
            initiative launched by the Isnad Foundation, offering <span className="font-bold">1,000 scholarships</span> to outstanding students within Palestine across various
            academic fields. The program is designed to <span className="font-bold">develop exceptional leaders</span> across different academic fields
            and enable youth to achieve their full potential and serve society.
          </p>
          <div className="flex justify-center mt-6">
            <a href="https://forms.gle/your-form-link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-500 text-white font-bold rounded-full shadow-lg hover:from-blue-600 hover:to-green-500 transition-colors duration-300 text-lg">
              <UserPlus size={22} className="-ml-1" /> Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* Why Support Palestinian Talent Section */}
      <section className="py-16 px-4 md:px-0 bg-gradient-to-r from-green-100/40 via-white to-blue-100/40 dark:from-green-900/30 dark:via-black dark:to-blue-900/30">
        <div className="max-w-7xl mx-auto">
          <GSAPTextReveal element="h2" className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-10">Why Support Palestinian Talent?</GSAPTextReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <GSAPReveal animation="slide-up">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center h-full min-h-[300px] justify-start hover:scale-105 transition-transform duration-300">
                <BookOpen className="text-green-700 mb-2" size={32} />
                <h3 className="text-lg font-bold tracking-wide text-center text-green-800 dark:text-green-300 mb-2 border-b-2 border-green-600 pb-1 uppercase">Lack of Specialized Programs</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm text-center">There are no comprehensive national programs that support outstanding students and help them realize their potential in academic excellence and innovative projects.</p>
              </div>
            </GSAPReveal>

            <GSAPReveal animation="slide-up" delay={0.1}>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center h-full min-h-[300px] justify-start hover:scale-105 transition-transform duration-300">
                <TrendingUp className="text-green-700 mb-2" size={32} />
                <h3 className="text-lg font-bold tracking-wide text-center text-green-800 dark:text-green-300 mb-2 border-b-2 border-green-600 pb-1 uppercase">Deprivation of an Appropriate Educational Environment</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm text-center">Due to the lack of educational infrastructure in Palestine, many students are unable to access the resources and tools they need for development and academic success.</p>
              </div>
            </GSAPReveal>

            <GSAPReveal animation="slide-up" delay={0.2}>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center h-full min-h-[300px] justify-start hover:scale-105 transition-transform duration-300">
                <Users className="text-green-700 mb-2" size={32} />
                <h3 className="text-lg font-bold tracking-wide text-center text-green-800 dark:text-green-300 mb-2 border-b-2 border-green-600 pb-1 uppercase">Brain Drain and Early Talent Loss</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm text-center">The absence of early support mechanisms for exceptional students leads to the loss of many talented individuals who could have contributed to their communities.</p>
              </div>
            </GSAPReveal>

            <GSAPReveal animation="slide-up" delay={0.3}>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center h-full min-h-[300px] justify-start hover:scale-105 transition-transform duration-300">
                <Shield className="text-green-700 mb-2" size={32} />
                <h3 className="text-lg font-bold tracking-wide text-center text-green-800 dark:text-green-300 mb-2 border-b-2 border-green-600 pb-1 uppercase">Lack of Talent Development Programs</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm text-center">Gifted Palestinian students often lack access to specialized programs that can nurture their talents and help them develop their skills and contribute to society.</p>
              </div>
            </GSAPReveal>

            <GSAPReveal animation="slide-up" delay={0.4}>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center h-full min-h-[300px] justify-start hover:scale-105 transition-transform duration-300">
                <Eye className="text-green-700 mb-2" size={32} />
                <h3 className="text-lg font-bold tracking-wide text-center text-green-800 dark:text-green-300 mb-2 border-b-2 border-green-600 pb-1 uppercase">Occupation Practices Negatively Affect Well-being and Educational Opportunities</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm text-center">The ongoing occupation has a negative impact on the psychological and educational well-being of students. The constant stress and uncertainty make it difficult to focus on educational goals.</p>
              </div>
            </GSAPReveal>

            <GSAPReveal animation="slide-up" delay={0.5}>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center h-full min-h-[300px] justify-start hover:scale-105 transition-transform duration-300">
                <DollarSign className="text-green-700 mb-2" size={32} />
                <h3 className="text-lg font-bold tracking-wide text-center text-green-800 dark:text-green-300 mb-2 border-b-2 border-green-600 pb-1 uppercase">Challenging Economic Conditions Limit Access to Higher Education</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm text-center">Financial constraints and challenging economic conditions prevent many Palestinian students from pursuing higher education and achieving their dreams.</p>
              </div>
            </GSAPReveal>

            <GSAPReveal animation="slide-up" delay={0.6}>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center h-full min-h-[300px] justify-start hover:scale-105 transition-transform duration-300">
                <Brain className="text-green-700 mb-2" size={32} />
                <h3 className="text-lg font-bold tracking-wide text-center text-green-800 dark:text-green-300 mb-2 border-b-2 border-green-600 pb-1 uppercase">Outstanding Achievement is Difficult to Achieve Without Marginalized Support</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm text-center">To achieve outstanding results, students need comprehensive support that includes financial assistance, mentorship, and access to advanced educational resources.</p>
              </div>
            </GSAPReveal>

            <GSAPReveal animation="slide-up" delay={0.7}>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center h-full min-h-[300px] justify-start hover:scale-105 transition-transform duration-300">
                <Building className="text-green-700 mb-2" size={32} />
                <h3 className="text-lg font-bold tracking-wide text-center text-green-800 dark:text-green-300 mb-2 border-b-2 border-green-600 pb-1 uppercase">Limited Access to Quality Educational Infrastructure</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm text-center">Many Palestinian students lack access to modern educational facilities, advanced laboratories, and cutting-edge technology that are essential for academic excellence and innovation.</p>
              </div>
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-16 px-4 md:px-0 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto">
          <GSAPTextReveal element="h2" className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-8">Our Goals</GSAPTextReveal>
          <ul className="space-y-4 text-lg text-gray-800 dark:text-gray-100 font-medium mb-8">
            <li className="flex items-center gap-3">
              <Award className="text-green-700" size={24} />
              <span>Award <span className="font-bold">1,000 full scholarships</span> to outstanding Palestinian students</span>
            </li>
            <li className="flex items-center gap-3">
              <Users className="text-green-700" size={24} />
              <span>Develop exceptional leaders across different academic fields</span>
            </li>
            <li className="flex items-center gap-3">
              <Target className="text-green-700" size={24} />
              <span>Enable youth to achieve their full potential and serve society</span>
            </li>
          </ul>

          <div className="bg-green-50 dark:bg-green-900/30 rounded-xl shadow p-6">
            <h3 className="text-xl font-bold text-green-800 mb-4 text-center flex items-center justify-center gap-2">
              <Star className="text-blue-600" size={24} />
              Palestinian Talented Scholarship offers financial support through three main pillars
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GSAPReveal animation="scale">
                <div className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-lg shadow p-5 hover:scale-105 transition-transform duration-300">
                  <Image src="/scholer.png" alt="Medical Education" width={60} height={60} className="mb-2" />
                  <p className="text-center text-gray-700 dark:text-gray-200 text-base">
                    Covers the cost of medical and health science education at a yearly rate of <span className="font-bold">$2,500</span>
                    to support students' basic needs such as housing, food, and transportation.
                  </p>
                </div>
              </GSAPReveal>

              <GSAPReveal animation="scale" delay={0.1}>
                <div className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-lg shadow p-5 hover:scale-105 transition-transform duration-300">
                  <Image src="/secondCard.png" alt="Monthly Financial Assistance" width={60} height={60} className="mb-2" />
                  <p className="text-center text-gray-700 dark:text-gray-200 text-base">
                    Monthly financial aid of <span className="font-bold">$200</span> to support students'
                    basic needs such as housing, food, and transportation, totaling <span className="font-bold">$2,400 per year</span>.
                  </p>
                </div>
              </GSAPReveal>

              <GSAPReveal animation="scale" delay={0.2}>
                <div className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-lg shadow p-5 hover:scale-105 transition-transform duration-300">
                  <Image src="/apple-touch-icon-precomposed.png" alt="Device Support" width={60} height={60} className="mb-2" />
                  <p className="text-center text-gray-700 dark:text-gray-200 text-base">
                    A one-time grant of <span className="font-bold">$300</span> to cover the cost of a laptop,
                    tablet, or smartphone based on the student's needs.
                  </p>
                </div>
              </GSAPReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 px-4 md:px-0 bg-gradient-to-r from-green-100/40 via-white to-blue-100/40 dark:from-green-900/30 dark:via-black dark:to-blue-900/30">
        <div className="max-w-5xl mx-auto">
          <GSAPTextReveal element="h2" className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-10">Requirements</GSAPTextReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GSAPReveal animation="slide-up">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center min-h-[180px] justify-center hover:scale-105 transition-transform duration-300">
                <Globe className="text-green-700 mb-2" size={32} />
                <h3 className="text-lg font-bold text-center text-green-800 dark:text-green-300 mb-1">Palestinian Nationality</h3>
              </div>
            </GSAPReveal>
            <GSAPReveal animation="slide-up" delay={0.1}>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center min-h-[180px] justify-center hover:scale-105 transition-transform duration-300">
                <GraduationCap className="text-green-700 mb-2" size={32} />
                <h3 className="text-lg font-bold text-center text-green-800 dark:text-green-300 mb-1">High School Average ≥ 90%</h3>
              </div>
            </GSAPReveal>
            <GSAPReveal animation="slide-up" delay={0.2}>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center min-h-[180px] justify-center hover:scale-105 transition-transform duration-300">
                <Award className="text-green-700 mb-2" size={32} />
                <h3 className="text-lg font-bold text-center text-green-800 dark:text-green-300 mb-1">GPA 3.00+</h3>
              </div>
            </GSAPReveal>
            <GSAPReveal animation="slide-up" delay={0.3}>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center min-h-[180px] justify-center hover:scale-105 transition-transform duration-300">
                <BookOpen className="text-green-700 mb-2" size={32} />
                <h3 className="text-lg font-bold text-center text-green-800 dark:text-green-300 mb-1">English Proficiency Preferred</h3>
              </div>
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* Fields of Study Section */}
      <section className="py-16 px-4 md:px-0 bg-white dark:bg-black">
        <div className="max-w-5xl mx-auto">
          <GSAPTextReveal element="h2" className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-10">Fields of Study</GSAPTextReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <GSAPReveal animation="slide-up">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center min-h-[180px] justify-center hover:scale-105 transition-transform duration-300">
                <Briefcase className="text-green-700 mb-2" size={32} />
                <h3 className="text-lg font-bold text-center text-green-800 dark:text-green-300 mb-1">Business Administration</h3>
              </div>
            </GSAPReveal>
            <GSAPReveal animation="slide-up" delay={0.1}>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center min-h-[180px] justify-center hover:scale-105 transition-transform duration-300">
                <Lightbulb className="text-green-700 mb-2" size={32} />
                <h3 className="text-lg font-bold text-center text-green-800 dark:text-green-300 mb-1">Engineering</h3>
              </div>
            </GSAPReveal>
            <GSAPReveal animation="slide-up" delay={0.2}>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center min-h-[180px] justify-center hover:scale-105 transition-transform duration-300">
                <BookOpen className="text-green-700 mb-2" size={32} />
                <h3 className="text-lg font-bold text-center text-green-800 dark:text-green-300 mb-1">Education</h3>
              </div>
            </GSAPReveal>
            <GSAPReveal animation="slide-up" delay={0.3}>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center min-h-[180px] justify-center hover:scale-105 transition-transform duration-300">
                <Users className="text-green-700 mb-2" size={32} />
                <h3 className="text-lg font-bold text-center text-green-800 dark:text-green-300 mb-1">Social Sciences</h3>
              </div>
            </GSAPReveal>
            <GSAPReveal animation="slide-up" delay={0.4}>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center min-h-[180px] justify-center hover:scale-105 transition-transform duration-300">
                <Target className="text-green-700 mb-2" size={32} />
                <h3 className="text-lg font-bold text-center text-green-800 dark:text-green-300 mb-1">Computer Science</h3>
              </div>
            </GSAPReveal>
            <GSAPReveal animation="slide-up" delay={0.5}>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center min-h-[180px] justify-center hover:scale-105 transition-transform duration-300">
                <Globe className="text-green-700 mb-2" size={32} />
                <h3 className="text-lg font-bold text-center text-green-800 dark:text-green-300 mb-1">International Relations</h3>
              </div>
            </GSAPReveal>
            <GSAPReveal animation="slide-up" delay={0.6}>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center min-h-[180px] justify-center hover:scale-105 transition-transform duration-300">
                <DollarSign className="text-green-700 mb-2" size={32} />
                <h3 className="text-lg font-bold text-center text-green-800 dark:text-green-300 mb-1">Economics</h3>
              </div>
            </GSAPReveal>
            <GSAPReveal animation="slide-up" delay={0.7}>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center min-h-[180px] justify-center hover:scale-105 transition-transform duration-300">
                <CheckSquare className="text-green-700 mb-2" size={32} />
                <h3 className="text-lg font-bold text-center text-green-800 dark:text-green-300 mb-1">Law</h3>
              </div>
            </GSAPReveal>
            <GSAPReveal animation="slide-up" delay={0.8}>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center min-h-[180px] justify-center hover:scale-105 transition-transform duration-300">
                <Brain className="text-green-700 mb-2" size={32} />
                <h3 className="text-lg font-bold text-center text-green-800 dark:text-green-300 mb-1">Psychology</h3>
              </div>
            </GSAPReveal>
            <GSAPReveal animation="slide-up" delay={0.9}>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center min-h-[180px] justify-center hover:scale-105 transition-transform duration-300">
                <Calendar className="text-green-700 mb-2" size={32} />
                <h3 className="text-lg font-bold text-center text-green-800 dark:text-green-300 mb-1">Media & Communications</h3>
              </div>
            </GSAPReveal>
          </div>
        </div>

        <div className="flex justify-center my-8">
          <a href="https://forms.gle/your-form-link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-500 text-white font-bold rounded-full shadow-lg hover:from-blue-600 hover:to-green-500 transition-colors duration-300 text-xl">
            <UserPlus size={26} className="-ml-1" /> Apply Now
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 bg-gradient-to-r from-green-100/40 via-white to-blue-100/40 dark:from-green-900/30 dark:via-black dark:to-blue-900/30">
        <div className="max-w-2xl mx-auto text-center">
          <GSAPTextReveal element="h3" className="text-xl font-bold text-green-800 mb-2">Contact Us</GSAPTextReveal>
          <p className="text-gray-700 dark:text-gray-200 mb-4">For more information, reach out to us:</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-lg">
            <a href="mailto:Palestinian.pssf@gmail.com" className="flex items-center gap-2 text-green-700 hover:underline">
              <Mail className="text-green-700" size={22} /> Palestinian.pssf@gmail.com
            </a>
            <span className="hidden md:inline-block text-gray-400">|</span>
            <a href="tel:+90539430726" className="flex items-center gap-2 text-green-700 hover:underline">
              <Phone className="text-green-700" size={22} /> +90 539 430 07 26
            </a>
          </div>
        </div>

        <div className="flex justify-center my-8">
          <a href="https://forms.gle/your-form-link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-500 text-white font-bold rounded-full shadow-lg hover:from-blue-600 hover:to-green-500 transition-colors duration-300 text-xl">
            <UserPlus size={26} className="-ml-1" /> Apply Now
          </a>
        </div>
      </section>
    </main>
  );
}
