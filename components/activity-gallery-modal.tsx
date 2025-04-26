"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
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
      case 4:
        return "two"
      case 7:
        return "three"
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
            ]
          } else if (folderName === "three") {
            imageList = [
              "/three/PHOTO-2025-04-20-18-04-17 2.jpg",
              "/three/PHOTO-2025-04-20-18-04-17.jpg",
              "/three/PHOTO-2025-04-20-18-04-18 2.jpg",
              "/three/PHOTO-2025-04-20-18-04-18 3.jpg",
              "/three/PHOTO-2025-04-20-18-04-18.jpg",
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
            {/* Main image viewer */}
            <div className="relative h-full flex items-center justify-center">
              <img
                src={images[selectedImageIndex]}
                alt={`${activityTitle} image ${selectedImageIndex + 1}`}
                className="max-h-[85vh] max-w-full object-contain"
              />

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

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1.5 rounded-full text-sm">
                {selectedImageIndex + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4 overflow-x-auto bg-gradient-to-t from-black/70 to-transparent">
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
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="h-14 w-20 object-cover"
                    />
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
