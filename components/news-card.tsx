"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface NewsCardProps {
  title: string
  excerpt: string
  image: string
  href: string
  date?: string
}

export default function NewsCard({ title, excerpt, image, href, date }: NewsCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="w-full max-w-[1000px] h-[550px] overflow-hidden transition-all hover:shadow-lg border-2 border-[hsl(120,61%,34%)]/20 shadow-md dark:bg-black/80 dark:border-[hsl(120,61%,34%)]/30 flex flex-col">
        <Link href={href}>
          <div className="h-[220px] overflow-hidden">
            <motion.img
              src={image || "/placeholder.svg"}
              alt={title}
              className="h-full w-full object-cover"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </Link>
        <CardHeader className="p-6">
          <Link href={href}>
            <h3 className="text-2xl font-bold leading-tight line-clamp-2 break-words whitespace-normal hyphens-auto text-black dark:text-white hover:text-[hsl(120,61%,34%)] transition-colors" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>{title}</h3>
          </Link>
          {date && (
            <p className="text-sm text-[hsl(0,76%,40%)] dark:text-[hsl(0,76%,50%)] mt-1">{date}</p>
          )}
        </CardHeader>
        <CardContent className="p-6 pt-0 pb-2 flex-grow">
          <p className="text-base text-muted-foreground leading-relaxed line-clamp-2 whitespace-normal hyphens-auto" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>{excerpt}</p>
        </CardContent>
        <CardFooter className="p-6 pt-4 pb-6 mt-auto">
          <Link href={href} className="w-full">
            <Button className="w-full h-12 bg-white text-[hsl(120,61%,34%)] border-2 border-[hsl(120,61%,34%)] hover:bg-[hsl(120,61%,34%)] hover:text-white transition-colors group dark:bg-gray-900 text-base font-medium">
              <span>Read More</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

