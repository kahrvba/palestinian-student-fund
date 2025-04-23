"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface NewsCardProps {
  title: string
  excerpt: string
  image: string
  href: string
}

export default function NewsCard({ title,excerpt, image, href }: NewsCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card className="w-[450px] h-[500px] overflow-hidden transition-all hover:shadow-lg border-2 border-primary/20 shadow-md dark:bg-black/80">
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
            <h3 className="text-2xl font-bold leading-tight line-clamp-2 break-words whitespace-normal hyphens-auto" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>{title}</h3>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <p className="text-base text-muted-foreground leading-relaxed line-clamp-4 whitespace-normal hyphens-auto" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>{excerpt}</p>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  )
}

