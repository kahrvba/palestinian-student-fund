"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import GSAPReveal from "@/components/gsap-reveal"

interface Activity {
  id: number
  title: string
  date: string
  location: string
  description: string
  full_description: string
  image: string
  category: string
  featured: boolean
  year: number
}

interface ActivityGalleryHeroProps {
  activities: Activity[]
}

export default function ActivityGalleryHero({ activities }: ActivityGalleryHeroProps) {
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0)

  const currentActivity = activities[currentActivityIndex]

  const handlePrevActivity = () => {
    setCurrentActivityIndex((prev) => (prev === 0 ? activities.length - 1 : prev - 1))
  }

  const handleNextActivity = () => {
    setCurrentActivityIndex((prev) => (prev === activities.length - 1 ? 0 : prev + 1))
  }

  // Get folder name based on activity ID
  const getFolderName = (id: number) => {
    switch (id) {
      case 1:
        return "one"
      case 2:
        return "two"
      case 3:
        return "three"
        case 4:
        return "four"
      case 5:
        return "five"
      case 6:
        return "six"
      default:
        return ""
    }
  }

  // Get preview images for the current activity
  const getPreviewImages = (activityId: number) => {
    const folderName = getFolderName(activityId)

    if (folderName === "one") {
      return [
        "/one/PHOTO-2025-04-20-18-03-45.jpg",

      ]
    } else if (folderName === "two") {
      return [
        "/two/PHOTO-2025-04-20-18-04-03.jpg",

      ]
    } else if (folderName === "three") {
      return [
        "/three/PHOTO-2025-04-20-18-04-17 2.jpg",

      ]
    } else if (folderName === "four") {
      return [
        "/four/PHOTO-2025-04-26-22-18-22 2.jpg",

      ]
    } else if (folderName === "five") {
      return [
        "/five/DSC07404.jpg",

      ]
    } else if (folderName === "six") {
      return [
        "/six/PHOTO-2025-04-26-22-24-14 2.jpg",

      ]
    }

    return []
  }

  const previewImages = getPreviewImages(currentActivity.id)

  return (
    <section className="relative py-24 md:py-32 overflow-hidden dark:bg-gray-950">
      {/* Creative background with multiple gradients and patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e8f5e9] via-white to-[#e8f5e9] z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#1e7e34_1px,transparent_1px)] bg-[size:20px_20px] opacity-[0.07] z-0"></div>

      {/* Colorful gradient overlays */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#1e7e34]/20 via-transparent to-transparent z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-[#1e7e34]/20 via-transparent to-transparent z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#1e7e34]/20 via-[#1e7e34] to-[#1e7e34]/20"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1e7e34]/20 via-[#1e7e34]/40 to-[#1e7e34]/20"></div>

      {/* Decorative blobs */}
      <div className="absolute -left-32 top-1/3 w-64 h-64 bg-gradient-to-br from-[#1e7e34]/40 to-[#1e7e34]/30 rounded-full blur-3xl z-0"></div>
      <div className="absolute -right-32 bottom-1/3 w-80 h-80 bg-gradient-to-tr from-[#1e7e34]/50 to-[#1e7e34]/30 rounded-full blur-3xl z-0"></div>

      {/* Accent elements */}
      <div className="absolute top-16 left-16 w-8 h-8 rounded-full bg-[#1e7e34]/20 animate-pulse"></div>
      <div className="absolute bottom-16 right-16 w-6 h-6 rounded-full bg-[#1e7e34]/30"></div>
      <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-[#1e7e34]/40"></div>

      {/* Geometric accents */}
      <div className="absolute top-1/2 left-8 w-16 h-1 bg-[#1e7e34]/30 rounded-full transform -rotate-45"></div>
      <div className="absolute bottom-1/3 right-8 w-24 h-1 bg-[#1e7e34]/20 rounded-full transform rotate-45"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-12 md:grid-cols-5 items-center">
          {/* Activity Info */}
          <GSAPReveal animation="slide-up" className="md:col-span-2">
            <Link href={`/activities/${currentActivity.id}`}>
              <div
                className="space-y-4 cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`View ${currentActivity.title} details`}
              >
                <div className="relative inline-block">
                  <Badge className="bg-gradient-to-r from-[#1e7e34] to-[#166328] text-white hover:from-[#1e7e34] hover:to-[#166328] text-sm px-4 py-1.5 shadow-lg rounded-full transform transition-transform hover:scale-105">
                    {currentActivity.category}
                  </Badge>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-[#1e7e34] animate-pulse"></div>
                </div>

                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                  <span className="relative inline-block">
                    {currentActivity.title}
                    <span className="absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1e7e34]/0 via-[#1e7e34] to-[#1e7e34]/0 dark:from-[#1e7e34]/0 dark:via-[#1e7e34] dark:to-[#1e7e34]/0"></span>
                  </span>
                </h1>

                <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed backdrop-blur-sm bg-white/30 dark:bg-gray-800/50 p-4 rounded-lg border-l-4 border-[#1e7e34] dark:border-[#1e7e34]">
                  {currentActivity.description}
                </p>

                <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-300 mt-4 text-sm">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-[#e8f5e9] to-white/80 dark:from-[#1e7e34]/20 dark:to-gray-800/80 px-3 py-2 rounded-xl shadow-md border border-[#1e7e34] dark:border-[#1e7e34]/50 backdrop-blur-sm">
                    <span className="font-semibold text-[#1e7e34] dark:text-[#1e7e34] flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Date:
                    </span>
                    {currentActivity.date}
                  </div>
                  <div className="flex items-center gap-2 bg-gradient-to-r from-[#e8f5e9] to-white/80 dark:from-[#1e7e34]/20 dark:to-gray-800/80 px-3 py-2 rounded-xl shadow-md border border-[#1e7e34] dark:border-[#1e7e34]/50 backdrop-blur-sm">
                    <span className="font-semibold text-[#1e7e34] dark:text-[#1e7e34] flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Location:
                    </span>
                    {currentActivity.location}
                  </div>
                </div>

                <Button className="mt-3 bg-white dark:bg-gray-900 text-[#1e7e34] border border-[#1e7e34] hover:bg-[#1e7e34] hover:text-white transition-colors shadow-sm text-sm px-4 py-1 h-auto">
                  Read More
                </Button>
              </div>
            </Link>
          </GSAPReveal>

          {/* Gallery Preview */}
          <GSAPReveal animation="slide-up" delay={0.2} className="md:col-span-3">
            <div className="relative">
              <Link href={`/activities/${currentActivity.id}`}>
                <div className="overflow-hidden rounded-2xl cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 group relative"
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${currentActivity.title} details`}
                >
                  {/* Decorative frame */}
                  <div className="absolute inset-0 border-4 border-[#1e7e34]/20 rounded-2xl z-20 group-hover:border-[#1e7e34]/40 transition-colors"></div>

                  {/* Decorative corner accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#1e7e34] rounded-tl-2xl z-20"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#1e7e34] rounded-br-2xl z-20"></div>
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-[#1e7e34]/60 rounded-tr-2xl z-20"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-[#1e7e34]/60 rounded-bl-2xl z-20"></div>

                  {/* Image overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e7e34]/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/40 backdrop-blur-sm z-20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-white/40 backdrop-blur-sm z-20 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <img
                    src={previewImages[0]}
                    alt={`${currentActivity.title} preview`}
                    className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute bottom-6 right-6 bg-gradient-to-r from-[#1e7e34] to-[#166328] text-white px-5 py-2.5 rounded-full shadow-lg text-sm font-medium flex items-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Read More</span>
                  </div>
                </div>
              </Link>

              {/* Navigation buttons */}
              <div className="absolute -bottom-14 right-0 flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-2 border-[#1e7e34] text-[#1e7e34] hover:bg-gradient-to-r hover:from-[#1e7e34] hover:to-[#166328] hover:text-white shadow-md rounded-full transition-all duration-300 transform hover:-translate-y-1"
                  onClick={handlePrevActivity}
                  aria-label="Previous activity"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-2 border-[#1e7e34] text-[#1e7e34] hover:bg-gradient-to-r hover:from-[#1e7e34] hover:to-[#166328] hover:text-white shadow-md rounded-full transition-all duration-300 transform hover:-translate-y-1"
                  onClick={handleNextActivity}
                  aria-label="Next activity"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </GSAPReveal>
        </div>
      </div>

      {/* We no longer need the gallery modal as we're linking directly to activity pages */}
    </section>
  )
}
