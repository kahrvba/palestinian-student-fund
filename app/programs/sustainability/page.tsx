"use client"

import {
  Leaf,
  Zap,
  Sprout,
  Wind,
  Sun,
  Droplets,
  Globe,
  GraduationCap,
  Award,
  BookOpen,
  Mail,
  Phone,
  UserPlus,
  TreePine,
  Recycle,
  Waves
} from "lucide-react"
import GSAPReveal from "@/components/gsap-reveal"
import GSAPTextReveal from "@/components/gsap-text-reveal"
import Image from "next/image"
import StatsCounter from "@/components/stats-counter"

export default function SustainabilityScholarshipPage() {

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-green-50 via-emerald-50 to-white dark:from-green-950 dark:via-emerald-900 dark:to-black">
      {/* Nature/Sustainability-themed Header Section */}
      <section className="relative py-20 md:py-28 flex flex-col items-center text-center bg-gradient-to-r from-green-400/10 via-emerald-500/10 to-green-600/10 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-green-800/20 shadow-lg border-b-4 border-green-500">
        <div className="mb-6">
          <div className="relative mb-4">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl">
              <TreePine size={48} className="text-white animate-pulse" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Leaf size={16} className="text-green-500 animate-bounce" />
            </div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Recycle size={16} className="text-emerald-500 animate-spin" />
            </div>
          </div>
          <GSAPTextReveal element="h1" className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-sora drop-shadow-lg">
            Sustainability
          </GSAPTextReveal>
          <GSAPTextReveal element="h2" className="text-2xl md:text-3xl font-bold text-emerald-700 dark:text-emerald-400 mt-2">
            Green Future Scholarship Program
          </GSAPTextReveal>
          <p className="mt-4 text-lg md:text-xl text-green-800 dark:text-green-300 font-medium max-w-2xl mx-auto">
            🌱 Building Palestine's Green Future 🌍
          </p>
        </div>
        <div className="flex justify-center gap-8 mt-8 mb-4">
          <StatsCounter number={200} label="Scholarships" />
          <StatsCounter number={3} label="Key Fields" />
          <StatsCounter number={5} label="Years" />
        </div>
        <div className="max-w-2xl mx-auto mt-4">
          <h2 className="text-xl font-bold text-emerald-700 mb-2 flex items-center justify-center gap-2">
            <Leaf className="text-green-500 animate-bounce" size={28} />
            <span>About the Green Program</span>
            <TreePine className="text-emerald-500 animate-pulse" size={28} />
          </h2>
          <p className="text-gray-800 dark:text-gray-100 text-base md:text-lg text-center">
            <span className="font-semibold text-emerald-800">"Sustainability"</span> is a specialized graduate scholarship program designed to <span className="font-bold text-green-700">provide 200 full scholarships in energy and agricultural engineering</span> to Palestinian students. The program aims to ensure energy independence and food security in Palestine through advanced education and research.
          </p>
          <div className="flex justify-center mt-6">
            <a href="https://forms.gle/your-form-link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full shadow-xl hover:from-emerald-600 hover:to-green-500 transition-all duration-300 text-lg hover:scale-105 hover:shadow-2xl">
              <TreePine size={22} className="-ml-1 animate-pulse" /> Apply for Green Scholarship
            </a>
          </div>
        </div>
      </section>



      {/* Mission Section */}
      <section className="py-16 px-4 md:px-0 bg-gradient-to-r from-green-100/40 via-white to-emerald-100/40 dark:from-green-900/30 dark:via-black dark:to-emerald-900/30">
        <div className="max-w-7xl mx-auto">
          <GSAPTextReveal element="h2" className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-10">Our Mission</GSAPTextReveal>
          <div className="max-w-4xl mx-auto text-center mb-8">
            <p className="text-lg text-gray-800 dark:text-gray-100 font-medium mb-4">
              Developing Palestinian expertise in <span className="font-bold text-green-700">energy, environmental, and agricultural fields</span> to ensure <span className="font-bold text-emerald-700">energy independence and food security</span> in Palestine through advanced education and research.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GSAPReveal animation="scale"><div className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-xl shadow p-6 hover:scale-105 transition-transform duration-300">
              <Zap className="text-green-700 mb-3" size={40} />
              <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-2">Energy Independence</h3>
              <p className="text-center text-gray-700 dark:text-gray-200 text-base">Develop renewable energy infrastructure and smart grid systems for sustainable electricity generation.</p>
            </div></GSAPReveal>
            <GSAPReveal animation="scale" delay={0.1}><div className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-xl shadow p-6 hover:scale-105 transition-transform duration-300">
              <Sprout className="text-emerald-700 mb-3" size={40} />
              <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-300 mb-2">Food Security</h3>
              <p className="text-center text-gray-700 dark:text-gray-200 text-base">Implement advanced agricultural technologies and sustainable farming practices for higher yields.</p>
            </div></GSAPReveal>
          </div>
        </div>
      </section>



      {/* Fields of Study Section */}
      <section className="py-16 px-4 md:px-0 bg-white dark:bg-black">
        <div className="max-w-5xl mx-auto">
          <GSAPTextReveal element="h2" className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-10">Fields of Study</GSAPTextReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GSAPReveal animation="slide-up"><div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col items-center min-h-[300px] justify-center hover:scale-105 transition-transform duration-300">
              <Zap className="text-yellow-600 mb-4" size={48} />
              <h3 className="text-xl font-bold text-center text-yellow-700 dark:text-yellow-300 mb-4">Energy Engineering</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center mb-4">
                Advanced studies in power systems, grid management, and energy infrastructure development for sustainable electricity generation.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Power Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Smart Grids</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Energy Storage</span>
                </div>
              </div>
            </div></GSAPReveal>
            <GSAPReveal animation="slide-up" delay={0.1}><div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col items-center min-h-[300px] justify-center hover:scale-105 transition-transform duration-300">
              <Sun className="text-green-600 mb-4" size={48} />
              <h3 className="text-xl font-bold text-center text-green-700 dark:text-green-300 mb-4">Renewable Energy</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center mb-4">
                Specialization in solar, wind, and other renewable energy technologies to reduce dependence on fossil fuels.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Solar Energy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Wind Power</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Biomass</span>
                </div>
              </div>
            </div></GSAPReveal>
            <GSAPReveal animation="slide-up" delay={0.2}><div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col items-center min-h-[300px] justify-center hover:scale-105 transition-transform duration-300">
              <Sprout className="text-emerald-600 mb-4" size={48} />
              <h3 className="text-xl font-bold text-center text-emerald-700 dark:text-emerald-300 mb-4">Agricultural Engineering</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center mb-4">
                Innovation in farming technology, irrigation systems, and sustainable agriculture practices to enhance food security.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Precision Farming</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Irrigation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Hydroponics</span>
                </div>
              </div>
            </div></GSAPReveal>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 px-4 md:px-0 bg-gradient-to-r from-green-100/40 via-white to-emerald-100/40 dark:from-green-900/30 dark:via-black dark:to-emerald-900/30">
        <div className="max-w-5xl mx-auto">
          <GSAPTextReveal element="h2" className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-10">Requirements</GSAPTextReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GSAPReveal animation="slide-up"><div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center min-h-[180px] justify-center hover:scale-105 transition-transform duration-300">
              <Globe className="text-green-700 mb-2" size={32} />
              <h3 className="text-lg font-bold text-center text-green-800 dark:text-green-300 mb-1">Palestinian Nationality</h3>
            </div></GSAPReveal>
            <GSAPReveal animation="slide-up" delay={0.1}><div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center min-h-[180px] justify-center hover:scale-105 transition-transform duration-300">
              <GraduationCap className="text-green-700 mb-2" size={32} />
              <h3 className="text-lg font-bold text-center text-green-800 dark:text-green-300 mb-1">Bachelor's Degree</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">In engineering or related field</p>
            </div></GSAPReveal>
            <GSAPReveal animation="slide-up" delay={0.2}><div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center min-h-[180px] justify-center hover:scale-105 transition-transform duration-300">
              <Award className="text-green-700 mb-2" size={32} />
              <h3 className="text-lg font-bold text-center text-green-800 dark:text-green-300 mb-1">GPA 3.0+</h3>
            </div></GSAPReveal>
            <GSAPReveal animation="slide-up" delay={0.3}><div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 flex flex-col items-center min-h-[180px] justify-center hover:scale-105 transition-transform duration-300">
              <BookOpen className="text-green-700 mb-2" size={32} />
              <h3 className="text-lg font-bold text-center text-green-800 dark:text-green-300 mb-1">Language Proficiency</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">English or program language</p>
            </div></GSAPReveal>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section className="py-10 bg-gradient-to-r from-green-100/40 via-white to-emerald-100/40 dark:from-green-900/30 dark:via-black dark:to-emerald-900/30">
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
          <a href="https://forms.gle/your-form-link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold rounded-full shadow-lg hover:from-emerald-600 hover:to-green-500 transition-colors duration-300 text-xl">
            <UserPlus size={26} className="-ml-1" /> Apply Now
          </a>
        </div>
      </section>
    </main>
  );
}
