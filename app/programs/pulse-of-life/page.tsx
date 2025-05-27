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
  Mail
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import GSAPReveal from "@/components/gsap-reveal"
import GSAPTextReveal from "@/components/gsap-text-reveal"
import Image from "next/image"
import StatsCounter from "@/components/stats-counter"

export default function PulseOfLifePage() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-green-50 via-white to-red-50 dark:from-black dark:via-gray-900 dark:to-green-950">
      {/* Header Section */}
      <section className="relative py-20 md:py-28 flex flex-col items-center text-center bg-white/80 dark:bg-black/80 shadow-lg">
        <div className="mb-6">
          <Image src="/Flag_of_Palestine.svg" alt="Palestinian Flag" width={80} height={80} className="mx-auto mb-2" />
          <GSAPTextReveal element="h1" className="text-4xl md:text-5xl font-extrabold text-red-700 font-sora drop-shadow-lg">
            Pulse of Life Scholarship Program
          </GSAPTextReveal>
          <p className="mt-2 text-lg md:text-xl text-gray-700 dark:text-gray-200 font-medium">The Health of Palestine... Our Responsibility</p>
        </div>
        <div className="flex justify-center gap-8 mt-8 mb-4">
          <StatsCounter number={1000} label="Scholarships" />
          <StatsCounter number={5} label="Years" />
          <StatsCounter number={3} label="Support Pillars" />
        </div>
        <div className="max-w-2xl mx-auto mt-4">
          <h2 className="text-xl font-bold text-green-700 mb-2 flex items-center justify-center gap-2"><span>About the Program</span></h2>
          <p className="text-gray-800 dark:text-gray-100 text-base md:text-lg text-center">
            <span className="font-semibold text-green-800">"Pulse of Life"</span> is a bold national initiative launched by the Isnad Foundation, aiming to <span className="font-bold">provide 1,000 full scholarships in medicine and health sciences</span> to Palestinian students inside and outside Palestine—especially in rare and critical specializations. The program is designed to run over a <span className="font-bold">period of 5 years</span>.
          </p>
          <div className="flex justify-center mt-6">
            <a href="https://forms.gle/your-form-link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-red-500 text-white font-bold rounded-full shadow-lg hover:from-red-600 hover:to-green-500 transition-colors duration-300 text-lg">
              <UserPlus size={22} className="-ml-1" /> Apply Now
            </a>
          </div>
        </div>
      </section>



      {/* Why Pulse of Life Section */}
      <section className="py-16 px-4 md:px-0 bg-gradient-to-r from-green-100/40 via-white to-red-100/40 dark:from-green-900/30 dark:via-black dark:to-red-900/30">
        <div className="max-w-7xl mx-auto">
          <GSAPTextReveal element="h2" className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-10">Why Pulse of Life?</GSAPTextReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <GSAPReveal animation="slide-up"><div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center h-full min-h-[340px] min-w-[250px] w-full justify-start hover:scale-105 transition-transform duration-300">
              <Stethoscope className="text-green-700 mb-2" size={32} />
              <span className="text-3xl font-bold text-red-700 mb-2">01</span>
              <h3 className="text-xl font-bold tracking-wide text-center text-green-800 dark:text-green-300 mb-2 border-b-2 border-green-600 pb-1 uppercase">Shortage of Medical Personnel</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center">There is a critical lack of qualified medical and healthcare professionals, which limits service delivery and reduces the quality of care in health institutions.</p>
            </div></GSAPReveal>
            <GSAPReveal animation="slide-up" delay={0.1}><div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center h-full min-h-[340px] min-w-[250px] w-full justify-start hover:scale-105 transition-transform duration-300">
              <Microscope className="text-green-700 mb-2" size={32} />
              <span className="text-3xl font-bold text-red-700 mb-2">02</span>
              <h3 className="text-xl font-bold tracking-wide text-center text-green-800 dark:text-green-300 mb-2 border-b-2 border-green-600 pb-1 uppercase">Lack of Specialized Fields</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center">The local healthcare system suffers from a shortage of specialists in key medical fields, further straining the Ministry of Health and limiting advanced care options.</p>
            </div></GSAPReveal>
            <GSAPReveal animation="slide-up" delay={0.2}><div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center h-full min-h-[340px] min-w-[250px] w-full justify-start hover:scale-105 transition-transform duration-300">
              <Hospital className="text-green-700 mb-2" size={32} />
              <span className="text-3xl font-bold text-red-700 mb-2">03</span>
              <h3 className="text-xl font-bold tracking-wide text-center text-green-800 dark:text-green-300 mb-2 border-b-2 border-green-600 pb-1 uppercase">Shortage in Hospital Capacity</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center">A lack of hospital beds and essential resources means many patients cannot receive timely care, leading to higher mortality rates and overwhelming existing facilities.</p>
            </div></GSAPReveal>
            <GSAPReveal animation="slide-up" delay={0.3}><div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center h-full min-h-[340px] min-w-[250px] w-full justify-start hover:scale-105 transition-transform duration-300">
              <Home className="text-green-700 mb-2" size={32} />
              <span className="text-3xl font-bold text-red-700 mb-2">04</span>
              <h3 className="text-xl font-bold tracking-wide text-center text-green-800 dark:text-green-300 mb-2 border-b-2 border-green-600 pb-1 uppercase">Poor Healthcare Infrastructure</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center">Many medical devices are out of service, and essential resources to run healthcare facilities efficiently are missing, making it difficult to provide adequate care.</p>
            </div></GSAPReveal>
            <GSAPReveal animation="slide-up" delay={0.4}><div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center h-full min-h-[340px] min-w-[250px] w-full justify-start hover:scale-105 transition-transform duration-300">
              <Target className="text-green-700 mb-2" size={32} />
              <span className="text-3xl font-bold text-red-700 mb-2">05</span>
              <h3 className="text-xl font-bold tracking-wide text-center text-green-800 dark:text-green-300 mb-2 border-b-2 border-green-600 pb-1 uppercase">Impact of the Israeli Occupation</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center">Since 2023, ongoing Israeli attacks have destroyed numerous health facilities, severely limiting the ability to deliver services and reducing the overall capacity of the healthcare system.</p>
            </div></GSAPReveal>
          </div>
        </div>
      </section>



      {/* Goals Section */}
      <section className="py-16 px-4 md:px-0 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto">
          <GSAPTextReveal element="h2" className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-8">Our Goals</GSAPTextReveal>
          <ul className="space-y-4 text-lg text-gray-800 dark:text-gray-100 font-medium mb-8">
            <li className="flex items-center gap-3"><UserPlus className="text-green-700" size={24} /><span>Train <span className="font-bold">1,000 students in medicine and health sciences</span> through full scholarships.</span></li>
            <li className="flex items-center gap-3"><Stethoscope className="text-green-700" size={24} /><span>Support local healthcare by integrating graduates into the system.</span></li>
            <li className="flex items-center gap-3"><Home className="text-green-700" size={24} /><span>Reach underserved areas through mobile clinics and awareness efforts.</span></li>
          </ul>
          <div className="bg-green-50 dark:bg-green-900/30 rounded-xl shadow p-6">
            <h3 className="text-xl font-bold text-green-800 mb-4 text-center flex items-center justify-center gap-2">Pulse of Life Scholarship offers financial support through three main pillars</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GSAPReveal animation="scale"><div className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-lg shadow p-5 hover:scale-105 transition-transform duration-300">
                <Image src="/scholer.png" alt="Medical Education" width={60} height={60} className="mb-2" />
                <p className="text-center text-gray-700 dark:text-gray-200 text-base">Covers the cost of medical and health sciences education, with an average annual support of <span className="font-bold">$5,600</span> per student.</p>
              </div></GSAPReveal>
              <GSAPReveal animation="scale" delay={0.1}><div className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-lg shadow p-5 hover:scale-105 transition-transform duration-300">
                <Image src="/secondCard.png" alt="Monthly Financial Assistance" width={60} height={60} className="mb-2" />
                <p className="text-center text-gray-700 dark:text-gray-200 text-base">Monthly financial assistance averaging <span className="font-bold">$200</span> to support essential housing and living expenses for the student, totaling <span className="font-bold">$2,400 annually</span>.</p>
              </div></GSAPReveal>
              <GSAPReveal animation="scale" delay={0.2}><div className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-lg shadow p-5 hover:scale-105 transition-transform duration-300">
                <Image src="/apple-touch-icon-precomposed.png" alt="Device Support" width={60} height={60} className="mb-2" />
                <p className="text-center text-gray-700 dark:text-gray-200 text-base">A one-time grant of <span className="font-bold">$300</span> to cover the cost of a laptop, tablet, or smartphone based on the student's academic needs.</p>
              </div></GSAPReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 px-4 md:px-0 bg-gradient-to-r from-green-100/40 via-white to-red-100/40 dark:from-green-900/30 dark:via-black dark:to-red-900/30">
        <div className="max-w-5xl mx-auto">
          <GSAPTextReveal element="h2" className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-10">Requirements</GSAPTextReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GSAPReveal animation="slide-up"><div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center min-h-[180px] justify-center hover:scale-105 transition-transform duration-300">
              <Globe className="text-green-700 mb-2" size={32} />
              <h3 className="text-lg font-bold text-center text-green-800 dark:text-green-300 mb-1">Palestinian Nationality</h3>
            </div></GSAPReveal>
            <GSAPReveal animation="slide-up" delay={0.1}><div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center min-h-[180px] justify-center hover:scale-105 transition-transform duration-300">
              <GraduationCap className="text-green-700 mb-2" size={32} />
              <h3 className="text-lg font-bold text-center text-green-800 dark:text-green-300 mb-1">High School Average ≥ 90%</h3>
            </div></GSAPReveal>
            <GSAPReveal animation="slide-up" delay={0.2}><div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center min-h-[180px] justify-center hover:scale-105 transition-transform duration-300">
              <Award className="text-green-700 mb-2" size={32} />
              <h3 className="text-lg font-bold text-center text-green-800 dark:text-green-300 mb-1">GPA 3.00+</h3>
            </div></GSAPReveal>
            <GSAPReveal animation="slide-up" delay={0.3}><div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center min-h-[180px] justify-center hover:scale-105 transition-transform duration-300">
              <BookOpen className="text-green-700 mb-2" size={32} />
              <h3 className="text-lg font-bold text-center text-green-800 dark:text-green-300 mb-1">English Proficiency Preferred</h3>
            </div></GSAPReveal>
          </div>
        </div>
      </section>

      {/* Fields of Study Section */}
      <section className="py-16 px-4 md:px-0 bg-white dark:bg-black">
        <div className="max-w-5xl mx-auto">
          <GSAPTextReveal element="h2" className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-10">Fields of Study</GSAPTextReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <GSAPReveal animation="slide-up"><div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center min-h-[180px] justify-center hover:scale-105 transition-transform duration-300">
              <Stethoscope className="text-green-700 mb-2" size={32} />
              <h3 className="text-lg font-bold text-center text-green-800 dark:text-green-300 mb-1">Human Medicine</h3>
            </div></GSAPReveal>
            <GSAPReveal animation="slide-up" delay={0.1}><div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center min-h-[180px] justify-center hover:scale-105 transition-transform duration-300">
              <BookOpen className="text-green-700 mb-2" size={32} />
              <h3 className="text-lg font-bold text-center text-green-800 dark:text-green-300 mb-1">Dentistry</h3>
            </div></GSAPReveal>
            <GSAPReveal animation="slide-up" delay={0.2}><div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center min-h-[180px] justify-center hover:scale-105 transition-transform duration-300">
              <Microscope className="text-green-700 mb-2" size={32} />
              <h3 className="text-lg font-bold text-center text-green-800 dark:text-green-300 mb-1">Pharmacy</h3>
            </div></GSAPReveal>
            <GSAPReveal animation="slide-up" delay={0.3}><div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center min-h-[180px] justify-center hover:scale-105 transition-transform duration-300">
              <UserPlus className="text-green-700 mb-2" size={32} />
              <h3 className="text-lg font-bold text-center text-green-800 dark:text-green-300 mb-1">Allied Health Professions</h3>
            </div></GSAPReveal>
            <GSAPReveal animation="slide-up" delay={0.4}><div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center min-h-[180px] justify-center hover:scale-105 transition-transform duration-300">
              <Home className="text-green-700 mb-2" size={32} />
              <h3 className="text-lg font-bold text-center text-green-800 dark:text-green-300 mb-1">Nursing</h3>
            </div></GSAPReveal>
          </div>
        </div>

        <div className="flex justify-center my-8">
          <a href="https://forms.gle/your-form-link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-red-500 text-white font-bold rounded-full shadow-lg hover:from-red-600 hover:to-green-500 transition-colors duration-300 text-xl">
            <UserPlus size={26} className="-ml-1" /> Apply Now
          </a>
        </div>
      </section>



      {/* Contact Section */}
      <section className="py-10 bg-gradient-to-r from-green-100/40 via-white to-red-100/40 dark:from-green-900/30 dark:via-black dark:to-red-900/30">
        <div className="max-w-2xl mx-auto text-center">
          <GSAPTextReveal element="h3" className="text-xl font-bold text-green-800 mb-2">Contact Us</GSAPTextReveal>
          <p className="text-gray-700 dark:text-gray-200 mb-4">For more information, reach out to us:</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-lg">
            <a href="mailto:Palestinian.pssf@gmail.com" className="flex items-center gap-2 text-green-700 hover:underline"><Mail className="text-green-700" size={22} /> Palestinian.pssf@gmail.com</a>
            <span className="hidden md:inline-block text-gray-400">|</span>
            <a href="tel:+90539430726" className="flex items-center gap-2 text-green-700 hover:underline"><Phone className="text-green-700" size={22} /> +90 539 430 07 26</a>
          </div>
        </div>

        <div className="flex justify-center my-8">
          <a href="https://forms.gle/your-form-link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-red-500 text-white font-bold rounded-full shadow-lg hover:from-red-600 hover:to-green-500 transition-colors duration-300 text-xl">
            <UserPlus size={26} className="-ml-1" /> Apply Now
          </a>
        </div>
      </section>
    </main>
  );
}
