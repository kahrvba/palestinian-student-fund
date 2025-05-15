"use client"

import { useState } from "react"
import { Quote, Video, Users, GraduationCap } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GSAPReveal from "@/components/gsap-reveal"
import { TestimonialVideoModal } from "@/components/testimonial-video-modal"
import { studentTestimonials, publicFigureTestimonials } from "./data"

export default function TestimonialsPage() {
  // State for testimonial video modal
  const [isTestimonialVideoOpen, setIsTestimonialVideoOpen] = useState(false)
  const [testimonialVideoPath, setTestimonialVideoPath] = useState("")
  const [testimonialName, setTestimonialName] = useState("")
  const [testimonialDescription, setTestimonialDescription] = useState("")
  const [activeTab, setActiveTab] = useState("students")

  const handleOpenTestimonialVideo = (name: string, videoFileName: string, description: string) => {
    setTestimonialName(name)
    setTestimonialVideoPath(`/testomenialVid/${videoFileName}`)
    setTestimonialDescription(description)
    setIsTestimonialVideoOpen(true)
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#f8faf8] dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#1e7e34] to-[#f8faf8] dark:from-[#1e7e34] dark:to-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern-light.svg')] dark:bg-[url('/pattern-dark.svg')] opacity-10"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Voices of Our Community
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Hear directly from students and public figures about their experiences and the impact of our programs.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Video Modal */}
      <TestimonialVideoModal
        isOpen={isTestimonialVideoOpen}
        onClose={() => setIsTestimonialVideoOpen(false)}
        name={testimonialName}
        videoPath={testimonialVideoPath}
        description={testimonialDescription}
      />

      {/* Testimonials Section with Tabs */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#1e7e34]/0 via-[#1e7e34]/50 to-[#1e7e34]/0"></div>
        <div className="absolute -left-24 bottom-1/3 w-48 h-48 bg-[#1e7e34]/10 rounded-full blur-3xl"></div>
        <div className="absolute -right-24 top-1/4 w-64 h-64 bg-[#1e7e34]/10 rounded-full blur-3xl"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <GSAPReveal animation="slide-up">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center rounded-full bg-[#1e7e34]/10 px-4 py-2 text-sm text-[#1e7e34] shadow-sm">
                <Quote className="mr-2 h-4 w-4" />
                Testimonials
              </div>
              <h2 className="mt-3 text-3xl font-bold sm:text-5xl text-gray-900 dark:text-white mb-4">
                <span className="relative inline-block">
                  Voices of Our Community
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#1e7e34]/0 via-[#1e7e34]/80 to-[#1e7e34]/0"></span>
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-gray-600 dark:text-gray-300 text-xl mb-8">
                Hear from students and community leaders about their experiences and the impact of our programs.
              </p>
            </div>
          </GSAPReveal>

          {/* Tabs */}
          <GSAPReveal animation="fade" delay={0.1}>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-[#e8f5e9] dark:bg-[#1e7e34]/20 p-1 rounded-full">
                <TabsTrigger
                  value="students"
                  className="rounded-full data-[state=active]:bg-[#1e7e34] data-[state=active]:text-white flex items-center justify-center"
                >
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Student Testimonials
                </TabsTrigger>
                <TabsTrigger
                  value="public-figures"
                  className="rounded-full data-[state=active]:bg-[#1e7e34] data-[state=active]:text-white flex items-center justify-center"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Public Figures
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </GSAPReveal>

          {/* Student Testimonials Tab Content */}
          {activeTab === "students" && (
            <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-3">
              {studentTestimonials.map((testimonial, index) => (
                <GSAPReveal key={testimonial.id} animation="slide-up" delay={0.1 * index}>
                  <div
                    className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                    onClick={() => handleOpenTestimonialVideo(
                      testimonial.name,
                      testimonial.videoFileName,
                      testimonial.quote
                    )}
                  >
                    {/* Full-screen video background */}
                    <div className="absolute inset-0 w-full h-full z-0">
                      <video
                        className="w-full h-full object-cover scale-110 transition-transform duration-10000 ease-in-out group-hover:scale-100"
                        poster={`/testomenialVid/thumbnails/${testimonial.videoFileName.replace('.mp4', '.jpg')}`}
                        muted
                        loop
                        playsInline
                        autoPlay
                      >
                        <source src={`/testomenialVid/${testimonial.videoFileName}`} type="video/mp4" />
                      </video>

                      {/* Gradient overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1e7e34] via-[#1e7e34]/70 to-transparent opacity-90 z-10"></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10"></div>

                      {/* Animated pattern overlay */}
                      <div className="absolute inset-0 bg-[url('/pattern-light.svg')] opacity-5 z-10 group-hover:opacity-10 transition-opacity duration-700"></div>
                    </div>

                    {/* Content container */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 text-white">
                      {/* Top section with play button */}
                      <div className="flex justify-end items-start">
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg transform rotate-0 group-hover:rotate-90 transition-transform duration-500">
                          <Video className="h-5 w-5 text-white" />
                        </div>
                      </div>

                      {/* Bottom section with quote and info */}
                      <div className="mt-auto">
                        {/* Quote */}
                        <div className="mb-4 relative">
                          <Quote className="absolute -left-2 -top-4 h-8 w-8 text-white/30" />
                          <p className="text-white/90 text-lg font-medium leading-relaxed line-clamp-3 pl-6">
                            "{testimonial.quote}"
                          </p>
                        </div>

                        {/* Person info */}
                        <div className="flex items-center pt-4 border-t border-white/20">
                          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mr-4 text-white font-bold text-lg border border-white/20">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-white text-lg">{testimonial.name}</p>
                            <p className="text-white/70">{testimonial.role}, {testimonial.organization}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Interactive elements */}
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#1e7e34] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform duration-500 z-30">
                      <div className="bg-white/20 backdrop-blur-md p-5 rounded-full shadow-xl border border-white/30">
                        <Video className="h-10 w-10 text-white" />
                      </div>
                    </div>
                  </div>
                </GSAPReveal>
              ))}
            </div>
          )}

          {/* Public Figures Tab Content */}
          {activeTab === "public-figures" && (
            <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-3">
              {publicFigureTestimonials.map((testimonial, index) => (
                <GSAPReveal key={testimonial.id} animation="slide-up" delay={0.1 * index}>
                  <div
                    className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                    onClick={() => handleOpenTestimonialVideo(
                      testimonial.name,
                      testimonial.videoFileName,
                      testimonial.quote
                    )}
                  >
                    {/* Full-screen video background */}
                    <div className="absolute inset-0 w-full h-full z-0">
                      <video
                        className="w-full h-full object-cover scale-110 transition-transform duration-10000 ease-in-out group-hover:scale-100"
                        poster={`/testomenialVid/thumbnails/${testimonial.videoFileName.replace('.mp4', '.jpg')}`}
                        muted
                        loop
                        playsInline
                        autoPlay
                      >
                        <source src={`/testomenialVid/${testimonial.videoFileName}`} type="video/mp4" />
                      </video>

                      {/* Gradient overlays - slightly different color for public figures */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1e7e34] via-[#1e7e34]/60 to-transparent opacity-90 z-10"></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10"></div>

                      {/* Animated pattern overlay */}
                      <div className="absolute inset-0 bg-[url('/pattern-light.svg')] opacity-5 z-10 group-hover:opacity-10 transition-opacity duration-700"></div>
                    </div>

                    {/* Content container */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 text-white">
                      {/* Top section with play button */}
                      <div className="flex justify-end items-start">
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg transform rotate-0 group-hover:rotate-90 transition-transform duration-500">
                          <Video className="h-5 w-5 text-white" />
                        </div>
                      </div>

                      {/* Bottom section with quote and info */}
                      <div className="mt-auto">
                        {/* Quote */}
                        <div className="mb-4 relative">
                          <Quote className="absolute -left-2 -top-4 h-8 w-8 text-white/30" />
                          <p className="text-white/90 text-lg font-medium leading-relaxed line-clamp-3 pl-6">
                            "{testimonial.quote}"
                          </p>
                        </div>

                        {/* Person info */}
                        <div className="flex items-center pt-4 border-t border-white/20">
                          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mr-4 text-white font-bold text-lg border border-white/20">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-white text-lg">{testimonial.name}</p>
                            <p className="text-white/70">{testimonial.role}, {testimonial.organization}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Interactive elements */}
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#1e7e34] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform duration-500 z-30">
                      <div className="bg-white/20 backdrop-blur-md p-5 rounded-full shadow-xl border border-white/30">
                        <Video className="h-10 w-10 text-white" />
                      </div>
                    </div>
                  </div>
                </GSAPReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
