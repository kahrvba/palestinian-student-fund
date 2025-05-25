"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

const LoadingBar = () => {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 400) // Match the page transition duration

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1e7e34] to-[#34a853] z-50 origin-left"
        />
      )}
    </AnimatePresence>
  )
}

export default LoadingBar
