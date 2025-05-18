"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Quote, Video } from "lucide-react"
import GSAPReveal from "@/components/gsap-reveal"
import { TestimonialVideoModal } from "@/components/testimonial-video-modal"
import { studentTestimonials, publicFigureTestimonials } from "./data"

function TestimonialsContent() {
  const searchParams = useSearchParams()
  const typeParam = searchParams.get('type')
  
  // State for testimonial video modal
  const [isTestimonialVideoOpen, setIsTestimonialVideoOpen] = useState(false)
  const [testimonialVideoPath, setTestimonialVideoPath] = useState("")
  const [testimonialName, setTestimonialName] = useState("")
  const [testimonialDescription, setTestimonialDescription] = useState("")

  const handleOpenTestimonialVideo = (name: string, videoFileName: string, description: string) => {
    setTestimonialName(name)
    setTestimonialVideoPath(`/testomenialVid/${videoFileName}`)
    setTestimonialDescription(description)
    setIsTestimonialVideoOpen(true)
  }

  // Determine which testimonials to show based on URL parameter
  const testimonials = typeParam === 'influencers' ? publicFigureTestimonials : studentTestimonials
  const title = typeParam === 'influencers' ? 'Public Figures' : 'Student Voices'

  return (
    <main className="flex min-h-screen flex-col bg-[#f8faf8] dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#1e7e34] to-[#f8faf8] dark:from-[#1e7e34] dark:to-gray-950 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Voices of Our Community
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Hear directly from {typeParam === 'influencers' ? 'public figures' : 'students'} about their experiences and the impact of our programs.
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

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#1e7e34]/0 via-[#1e7e34]/50 to-[#1e7e34]/0"></div>
        <div className="absolute -left-24 bottom-1/3 w-48 h-48 bg-[#1e7e34]/10 rounded-full blur-3xl"></div>
        <div className="absolute -right-24 top-1/4 w-64 h-64 bg-[#1e7e34]/10 rounded-full blur-3xl"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <GSAPReveal animation="slide-up">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center rounded-full bg-[#1e7e34]/10 px-4 py-2 text-sm text-[#1e7e34] shadow-sm">
                <Quote className="mr-2 h-4 w-4" />
                {title}
              </div>
              <h2 className="mt-3 text-3xl font-bold sm:text-5xl text-gray-900 dark:text-white mb-4">
                <span className="relative inline-block">
                  {typeParam === 'influencers' ? 'Public Figure Testimonials' : 'Student Testimonials'}
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#1e7e34]/0 via-[#1e7e34]/80 to-[#1e7e34]/0"></span>
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-gray-600 dark:text-gray-300 text-xl mb-8">
                Hear from {typeParam === 'influencers' ? 'community leaders' : 'students'} about their experiences and the impact of our programs.
              </p>
            </div>
          </GSAPReveal>

          {/* Testimonials Grid */}
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <GSAPReveal key={testimonial.id} animation="slide-up" delay={0.1 * index}>
                <div
                  className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  onClick={() => handleOpenTestimonialVideo(
                    testimonial.name,
                    testimonial.videoFileName,
                    testimonial.quote
                  )}
                >
                  {/* Video background */}
                  <div className="absolute inset-0 w-full h-full">
                    <video
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      autoPlay
                    >
                      <source src={`/testomenialVid/${testimonial.videoFileName}`} type="video/mp4" />
                    </video>

                    {/* Gradient overlay - made darker and more consistent */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-[#1e7e34]/80 to-black/50 opacity-95"></div>
                  </div>

                  {/* Content container */}
                  <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 text-white">
                    {/* Play button */}
                    <div className="flex justify-end">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg">
                        <Video className="h-5 w-5 text-white" />
                      </div>
                    </div>

                    {/* Quote and info */}
                    <div className="mt-auto">
                      <div className="mb-4">
                        <Quote className="mb-2 h-8 w-8 text-white/30" />
                        <p className="text-white/90 text-lg font-medium leading-relaxed line-clamp-3">
                          "{testimonial.quote}"
                        </p>
                      </div>

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
                </div>
              </GSAPReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

// Loading component
function TestimonialsLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8faf8] dark:bg-gray-950">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  )
}

// Main component with Suspense
export default function TestimonialsPage() {
  return (
    <Suspense fallback={<TestimonialsLoading />}>
      <TestimonialsContent />
    </Suspense>
  )
}
