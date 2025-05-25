"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { ReactNode, useEffect, useState } from "react"

interface PageTransitionProps {
  children: ReactNode
}

// Define page order for navigation direction detection
const pageOrder = [
  "/",
  "/about",
  "/news",
  "/programs",
  "/success-stories",
  "/apply",
  "/activities",
  "/testimonials",
  "/contact"
]

const getPageIndex = (path: string) => {
  // Handle dynamic routes and subpages
  const basePath = path.split('/')[1] ? `/${path.split('/')[1]}` : "/"
  return pageOrder.indexOf(basePath)
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname()
  const [previousPath, setPreviousPath] = useState<string>("")
  const [direction, setDirection] = useState<"forward" | "backward" | "none">("none")

  useEffect(() => {
    if (previousPath) {
      const currentIndex = getPageIndex(pathname)
      const previousIndex = getPageIndex(previousPath)

      if (currentIndex > previousIndex) {
        setDirection("forward")
      } else if (currentIndex < previousIndex) {
        setDirection("backward")
      } else {
        setDirection("none")
      }
    }
    setPreviousPath(pathname)
  }, [pathname, previousPath])

  const pageVariants = {
    initial: (direction: string) => ({
      opacity: 0,
      x: direction === "forward" ? 300 : direction === "backward" ? -300 : 0,
      scale: 0.95,
    }),
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: (direction: string) => ({
      opacity: 0,
      x: direction === "forward" ? -300 : direction === "backward" ? 300 : 0,
      scale: 1.05,
    }),
  }

  const pageTransition = {
    type: "tween",
    ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth feel
    duration: 0.4,
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        custom={direction}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition
