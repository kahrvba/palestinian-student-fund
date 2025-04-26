"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { VisuallyHidden } from "@/components/ui/visually-hidden"

interface ActivityGalleryModalProps {
  isOpen: boolean
  onClose: () => void
  activityId: number
  activityTitle: string
}

export function ActivityGalleryModal({
  isOpen,
  onClose,
  activityId,
  activityTitle,
}: ActivityGalleryModalProps) {
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
    if (isOpen) {
      // Fetch images for the selected activity
      const fetchImages = async () => {
        setLoading(true)
        try {
          const folderName = getFolderName(activityId)

          // In a real app, you would fetch this from an API
          // For now, we'll simulate it by hardcoding the image paths based on the folder structure
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
              "two/VIDEO-2025-04-20-18-04-05.mp4",
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
    }
  }, [isOpen, activityId])

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index)
  }

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === "ArrowLeft") {
        handlePrevImage()
      } else if (e.key === "ArrowRight") {
        handleNextImage()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-7xl w-[95vw] max-h-[95vh] p-0 bg-transparent border-none shadow-none overflow-hidden">
        <DialogTitle>
          <VisuallyHidden>{activityTitle} Gallery</VisuallyHidden>
        </DialogTitle>
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        ) : images.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-white">No images found for this activity.</p>
          </div>
        ) : (
          <div className="relative h-full">
            {/* Main image/video viewer */}
            <div className="relative h-full flex items-center justify-center">
              {images[selectedImageIndex]?.toLowerCase().endsWith('.mp4') ? (
                <div className="relative w-full max-w-4xl mb-16">
                  <video
                    src={images[selectedImageIndex]}
                    controls
                    className="w-full max-h-[75vh]"
                    autoPlay
                    controlsList="nodownload"
                    playsInline
                  />
                </div>
              ) : (
                <div className="mb-16">
                  <img
                    src={images[selectedImageIndex]}
                    alt={`${activityTitle} image ${selectedImageIndex + 1}`}
                    className="max-h-[75vh] max-w-full object-contain"
                  />
                </div>
              )}

              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white rounded-full z-50"
                onClick={onClose}
                aria-label="Close gallery"
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full h-12 w-12"
                onClick={handlePrevImage}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full h-12 w-12"
                onClick={handleNextImage}
                aria-label="Next image"
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              {/* Image counter - positioned above thumbnails */}
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-2 z-50">
                <div className="bg-black/50 text-white px-3 py-1.5 rounded-full text-sm">
                  {selectedImageIndex + 1} / {images.length}
                </div>
              </div>
            </div>

            {/* Thumbnails - always visible at a fixed position */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4 overflow-x-auto bg-gradient-to-t from-black/70 to-transparent z-50">
              <div className="flex gap-2 max-w-full">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer rounded-md overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index
                        ? "border-white scale-110"
                        : "border-transparent opacity-70"
                    }`}
                    onClick={() => handleThumbnailClick(index)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View image ${index + 1} of ${images.length}`}
                    aria-current={selectedImageIndex === index ? "true" : "false"}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleThumbnailClick(index);
                        e.preventDefault();
                      }
                    }}
                  >
                    <div className="relative h-14 w-20">
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                      {image.toLowerCase().endsWith('.mp4') && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                          <Play className="h-6 w-6 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
