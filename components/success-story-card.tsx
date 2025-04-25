"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

interface SuccessStoryCardProps {
  name: string
  degree: string
  university: string
  quote: string
  image: string
}

export default function SuccessStoryCard({ name, degree, university, quote, image }: SuccessStoryCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="h-full overflow-hidden backdrop-blur-sm bg-gradient-to-r from-[hsl(0,76%,40%)]/80 via-black/80 to-[hsl(120,61%,34%)]/80 border-white/20 text-white">
        <div className="flex flex-col md:flex-row">
          <div className="aspect-square w-full overflow-hidden md:w-1/3">
            <motion.img
              src={image || "/placeholder.svg"}
              alt={name}
              className="h-full w-full object-cover"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <CardContent className="flex flex-1 flex-col justify-between p-6">
            <div className="mb-4">
              <QuoteIcon className="mb-2 h-8 w-8 text-white opacity-50" />
              <p className="italic text-white/90">{quote}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{name}</h3>
              <p className="text-[hsl(120,61%,70%)]">{degree}</p>
              <p className="text-sm text-white/70">{university}</p>
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  )
}

