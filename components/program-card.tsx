"use client"

import { useState, type ReactNode } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface ProgramCardProps {
  title: string
  description: string
  icon: ReactNode
  href: string
}

export default function ProgramCard({ title, description, icon, href }: ProgramCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card className="h-full transition-all hover:shadow-lg">
          <CardHeader className="p-6">
            <motion.div
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"
              animate={{
                scale: isHovered ? 1.1 : 1,
                backgroundColor: isHovered ? "rgba(var(--primary), 0.2)" : "rgba(var(--primary), 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              {icon}
            </motion.div>
            <h3 className="text-xl font-bold">{title}</h3>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <p className="text-muted-foreground">{description}</p>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <motion.div
              className="group inline-flex items-center text-sm font-medium text-primary"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              Learn More
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>
    </Link>
  )
}

