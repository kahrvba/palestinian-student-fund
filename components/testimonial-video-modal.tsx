"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { VisuallyHidden } from "@/components/ui/visually-hidden"

interface TestimonialVideoModalProps {
  isOpen: boolean
  onClose: () => void
  name: string
  videoPath: string
}

export function TestimonialVideoModal({
  isOpen,
  onClose,
  name,
  videoPath,
}: TestimonialVideoModalProps) {
  // Add keyboard event handler for Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[95vh] p-6 bg-white dark:bg-gray-900 overflow-auto">
        <DialogTitle>
          <VisuallyHidden>{name}'s Testimonial</VisuallyHidden>
        </DialogTitle>

        <div className="relative h-[60vh] flex items-center justify-center">
          <video
            src={videoPath}
            controls
            className="w-full h-full rounded-lg object-contain"
            autoPlay
            controlsList="nodownload"
            playsInline
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
