"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import GSAPReveal from "@/components/gsap-reveal"
import { ActivityGalleryModal } from "@/components/activity-gallery-modal"
import { VisuallyHidden } from "@/components/ui/visually-hidden"

interface Activity {
  id: number
  title: string
  date: string
  location: string
  description: string
  image: string
  category: string
  featured: boolean
  year: number
  highlights: string[]
}

interface ActivityGalleryHeroProps {
  activities: Activity[]
}

export default function ActivityGalleryHero({ activities }: ActivityGalleryHeroProps) {
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0)
  const [galleryOpen, setGalleryOpen] = useState(false)

  const currentActivity = activities[currentActivityIndex]

  const handlePrevActivity = () => {
    setCurrentActivityIndex((prev) => (prev === 0 ? activities.length - 1 : prev - 1))
  }

  const handleNextActivity = () => {
    setCurrentActivityIndex((prev) => (prev === activities.length - 1 ? 0 : prev + 1))
  }

  const handleViewGallery = () => {
    setGalleryOpen(true)
  }

  // Get folder name based on activity ID
  const getFolderName = (id: number) => {
    switch (id) {
      case 1:
        return "one"
      case 4:
        return "two"
      case 7:
        return "three"
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
        "/one/PHOTO-2025-04-20-18-03-46 2.jpg",
        "/one/PHOTO-2025-04-20-18-03-47 5.jpg",
      ]
    } else if (folderName === "two") {
      return [
        "/two/PHOTO-2025-04-20-18-04-03.jpg",
        "/two/PHOTO-2025-04-20-18-04-02 3.jpg",
        "/two/PHOTO-2025-04-20-18-04-04 5.jpg",
      ]
    } else if (folderName === "three") {
      return [
        "/three/PHOTO-2025-04-20-18-04-17.jpg",
        "/three/PHOTO-2025-04-20-18-04-18.jpg",
        "/three/PHOTO-2025-04-20-18-04-18 3.jpg",
      ]
    }

    return []
  }

  const previewImages = getPreviewImages(currentActivity.id)

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-r from-[hsl(0,76%,40%)] via-black to-[hsl(120,61%,34%)] text-white overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Activity Info */}
          <GSAPReveal animation="slide-up">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white hover:bg-white/30 text-base px-3 py-1.5">
                {currentActivity.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                {currentActivity.title}
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                {currentActivity.description}
              </p>
              <div className="flex flex-wrap gap-4 text-white/80">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Date:</span> {currentActivity.date}
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Location:</span> {currentActivity.location}
                </div>
              </div>
              <div className="pt-4">
                <Button
                  onClick={handleViewGallery}
                  className="bg-white text-[hsl(0,76%,40%)] hover:bg-white/90 text-lg px-6 py-6 h-auto"
                  size="lg"
                >
                  <ImageIcon className="mr-2 h-5 w-5" />
                  View Full Gallery
                </Button>
              </div>
            </div>
          </GSAPReveal>

          {/* Gallery Preview */}
          <GSAPReveal animation="slide-up" delay={0.2}>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <div
                    className="overflow-hidden rounded-lg cursor-pointer"
                    onClick={handleViewGallery}
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${currentActivity.title} gallery`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleViewGallery();
                        e.preventDefault();
                      }
                    }}
                  >
                    <img
                      src={previewImages[0]}
                      alt={`${currentActivity.title} preview`}
                      className="w-full aspect-video object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
                <div>
                  <div
                    className="overflow-hidden rounded-lg cursor-pointer"
                    onClick={handleViewGallery}
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${currentActivity.title} gallery`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleViewGallery();
                        e.preventDefault();
                      }
                    }}
                  >
                    <img
                      src={previewImages[1]}
                      alt={`${currentActivity.title} preview`}
                      className="w-full aspect-square object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
                <div>
                  <div
                    className="overflow-hidden rounded-lg cursor-pointer"
                    onClick={handleViewGallery}
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${currentActivity.title} gallery`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleViewGallery();
                        e.preventDefault();
                      }
                    }}
                  >
                    <img
                      src={previewImages[2]}
                      alt={`${currentActivity.title} preview`}
                      className="w-full aspect-square object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="absolute -bottom-12 right-0 flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
                  onClick={handlePrevActivity}
                  aria-label="Previous activity"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
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

      {/* Gallery Modal */}
      <ActivityGalleryModal
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        activityId={currentActivity.id}
        activityTitle={currentActivity.title}
      />
    </section>
  )
}
