"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

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

interface ActivityGalleryProps {
  activity: Activity
}

export function ActivityGallery({ activity }: ActivityGalleryProps) {
  const [images, setImages] = useState<string[]>([])
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  // Map activity ID to folder name
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

  useEffect(() => {
    // Fetch images for the selected activity
    const fetchImages = async () => {
      setLoading(true)
      try {
        const folderName = getFolderName(activity.id)
        let imageList: string[] = []

        if (folderName === "one") {
          imageList = [
            "/one/PHOTO-2025-04-20-18-03-45.jpg",
            "/one/PHOTO-2025-04-20-18-03-46 2.jpg",
            "/one/PHOTO-2025-04-20-18-03-46 3.jpg",
            "/one/PHOTO-2025-04-20-18-03-46 4.jpg",
            "/one/PHOTO-2025-04-20-18-03-46.jpg",
            "/one/PHOTO-2025-04-20-18-03-47 2.jpg",
            "/one/PHOTO-2025-04-20-18-03-47 3.jpg",
            "/one/PHOTO-2025-04-20-18-03-47 4.jpg",
            "/one/PHOTO-2025-04-20-18-03-47 5.jpg",
            "/one/PHOTO-2025-04-20-18-03-47.jpg",
            "/one/PHOTO-2025-04-20-18-03-48 2.jpg",
            "/one/PHOTO-2025-04-20-18-03-48.jpg",
            "/one/VIDEO-2025-04-20-18-03-48.mp4"
          ]
        } else if (folderName === "two") {
          imageList = [
            "/two/PHOTO-2025-04-20-18-04-02 2.jpg",
            "/two/PHOTO-2025-04-20-18-04-02 3.jpg",
            "/two/PHOTO-2025-04-20-18-04-02 4.jpg",
            "/two/PHOTO-2025-04-20-18-04-02.jpg",
            "/two/PHOTO-2025-04-20-18-04-03 2.jpg",
            "/two/PHOTO-2025-04-20-18-04-03 3.jpg",
            "/two/PHOTO-2025-04-20-18-04-03 4.jpg",
            "/two/PHOTO-2025-04-20-18-04-03.jpg",
            "/two/PHOTO-2025-04-20-18-04-04 2.jpg",
            "/two/PHOTO-2025-04-20-18-04-04 3.jpg",
            "/two/PHOTO-2025-04-20-18-04-04 4.jpg",
            "/two/PHOTO-2025-04-20-18-04-04 5.jpg",
            "/two/PHOTO-2025-04-20-18-04-04.jpg",
            "/two/PHOTO-2025-04-20-18-04-05.jpg",
            "/two/VIDEO-2025-04-20-18-04-05 2.mp4",
            "/two/VIDEO-2025-04-20-18-04-05 3.mp4",
            "/two/VIDEO-2025-04-20-18-04-05.mp4",
            "/two/VIDEO-2025-04-20-18-04-06.mp4"
          ]
        } else if (folderName === "three") {
          imageList = [
            "/three/PHOTO-2025-04-20-18-04-17 2.jpg",
            "/three/PHOTO-2025-04-20-18-04-17.jpg",
            "/three/PHOTO-2025-04-20-18-04-18 2.jpg",
            "/three/PHOTO-2025-04-20-18-04-18 3.jpg",
            "/three/PHOTO-2025-04-20-18-04-18.jpg",
          ]
        } else if (folderName === "four") {
          imageList = [
            "/four/PHOTO-2025-04-26-22-18-22 2.jpg",
            "/four/PHOTO-2025-04-26-22-18-22 3.jpg",
            "/four/PHOTO-2025-04-26-22-18-22 4.jpg",
            "/four/PHOTO-2025-04-26-22-18-22 5.jpg",
            "/four/PHOTO-2025-04-26-22-18-22.jpg",
            "/four/VIDEO-2025-04-26-22-18-23.mp4"
          ]
        } else if (folderName === "five") {
          imageList = [
            "/five/DSC07404.jpg",
            "/five/DSC07413.jpg",
            "/five/DSC07417.jpg",
            "/five/DSC07427.jpg",
            "/five/DSC07431.jpg",
            "/five/DSC07433.jpg",
            "/five/DSC07462.jpg",
            "/five/DSC07469.jpg",
            "/five/DSC07478.jpg",
            "/five/DSC07485.jpg",
            "/five/DSC07489.jpg",
            "/five/DSC07508.jpg",
            "/five/DSC07509.jpg",
            "/five/DSC07513.jpg",
            "/five/DSC07522.jpg",
            "/five/DSC07538.jpg",
            "/five/DSC07542.jpg",
            "/five/DSC07548.jpg",
            "/five/VIDEO-2025-04-26-22-20-53.mp4"
          ]
        } else if (folderName === "six") {
          imageList = [
            "/six/PHOTO-2025-04-26-22-24-14 2.jpg",
            "/six/PHOTO-2025-04-26-22-24-14.jpg",
            "/six/PHOTO-2025-04-26-22-24-15.jpg",
            "/six/VIDEO-2025-04-26-22-24-15.mp4"
          ]
        }

        setImages(imageList)
        setSelectedImageIndex(0)
      } catch (error) {
        console.error("Error fetching images:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [activity.id])

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index)
  }

  // Add keyboard event handler for left/right arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrevImage()
      } else if (e.key === "ArrowRight") {
        handleNextImage()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <div className="space-y-8">
      {/* Activity Info */}
      <div className="space-y-6">
        <Badge className="bg-[hsl(120,61%,34%)]/10 text-[hsl(120,61%,34%)] text-base px-3 py-1.5">
          {activity.category}
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold">{activity.title}</h1>
        <div className="flex flex-wrap gap-4 text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="mr-2 h-5 w-5" />
            {activity.date}
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2 h-5 w-5" />
            {activity.location}
          </div>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {activity.full_description}
        </p>
      </div>

      {/* Image Gallery */}
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-400"></div>
        </div>
      ) : images.length === 0 ? (
        <div className="flex items-center justify-center h-64">
          <p>No images found for this activity.</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="relative">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              {images[selectedImageIndex]?.toLowerCase().endsWith('.mp4') ? (
                <video
                  src={images[selectedImageIndex]}
                  controls
                  className="w-full h-full object-cover"
                  autoPlay
                  controlsList="nodownload"
                  playsInline
                />
              ) : (
                <img
                  src={images[selectedImageIndex]}
                  alt={`${activity.title} image ${selectedImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              )}

              {/* Navigation buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full h-10 w-10"
                onClick={handlePrevImage}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full h-10 w-10"
                onClick={handleNextImage}
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* Image counter */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                <div className="bg-black/50 text-white px-3 py-1.5 rounded-full text-sm">
                  {selectedImageIndex + 1} / {images.length}
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
                  index === selectedImageIndex ? 'opacity-100' : 'opacity-40 hover:opacity-80'
                }`}
              >
                {image.toLowerCase().endsWith('.mp4') ? (
                  <div className="w-full h-full bg-black/50 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                ) : (
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 