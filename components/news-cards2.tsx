"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

interface NewsCardProps {
  title: string
  excerpt: string
  image: string
  date?: string
  isAnyCardHovered?: boolean
  onHoverChange?: (isHovered: boolean) => void
}

export default function NewsCards2({
  title,
  excerpt,
  image,
  date,
  isAnyCardHovered = false,
  onHoverChange
}: NewsCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { language } = useLanguage()
  const isRTL = language === "ar"

  const handleMouseEnter = () => {
    setIsHovered(true)
    onHoverChange?.(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    onHoverChange?.(false)
  }

  return (

      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ direction: isRTL ? 'rtl' : 'ltr' }}
      >
        <Card
          className={`w-[500px] h-[500px] overflow-hidden transition-all hover:shadow-lg border-2 border-[#1e7e34]/20 shadow-md dark:bg-gray-900 dark:border-[#1e7e34]/30 ${
            isAnyCardHovered && !isHovered ? 'blur-[2px] opacity-50' : ''
          }`}
        >
          <div className="h-[240px] overflow-hidden">
            <motion.img
              src={image || "/placeholder.svg"}
              alt={title}
              className="h-full w-full object-cover"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <CardHeader className="p-6">
            <h3 className="text-2xl font-bold leading-tight line-clamp-2 break-words whitespace-normal hyphens-auto text-black dark:text-white" style={{ wordWrap: 'break-word', overflowWrap: 'break-word', textAlign: isRTL ? 'right' : 'left' }}>{title}</h3>
            {date && (
              <p className="text-sm text-[#1e7e34] dark:text-[#1e7e34] mt-1" style={{ textAlign: isRTL ? 'right' : 'left' }}>{date}</p>
            )}
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <p className="text-base text-muted-foreground leading-relaxed line-clamp-4 whitespace-normal hyphens-auto" style={{ wordWrap: 'break-word', overflowWrap: 'break-word', textAlign: isRTL ? 'right' : 'left' }}>{excerpt}</p>
          </CardContent>
        </Card>
      </motion.div>
  )
}

