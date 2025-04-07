"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface NewsCardProps {
  title: string
  date: string
  excerpt: string
  image: string
  href: string
}

export default function NewsCard({ title, date, excerpt, image, href }: NewsCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
          <div className="aspect-video overflow-hidden">
            <motion.img
              src={image || "/placeholder.svg"}
              alt={title}
              className="h-full w-full object-cover"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <CardHeader className="p-4">
            <h3 className="line-clamp-2 text-xl font-bold">{title}</h3>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="line-clamp-3 text-muted-foreground">{excerpt}</p>
          </CardContent>
          <CardFooter className="flex items-center p-4 pt-0 text-sm text-muted-foreground">
            <Calendar className="mr-2 h-4 w-4" />
            {date}
          </CardFooter>
        </Card>
      </motion.div>
    </Link>
  )
}

