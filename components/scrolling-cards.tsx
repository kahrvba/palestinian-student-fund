"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/components/language-provider"
import NewsCards2 from "@/components/news-cards2"

interface ScrollingCardsProps {
  cards: {
    title: string
    excerpt: string
    image: string
  }[]
  isAnyCardHovered: boolean
  onHoverChange: (isHovered: boolean) => void
}

export default function ScrollingCards({ cards, isAnyCardHovered, onHoverChange }: ScrollingCardsProps) {
  const { language } = useLanguage()
  const isRTL = language === "ar"
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Use a custom animation with JavaScript instead of CSS animation
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let animationId: number
    let position = 0
    const totalWidth = container.scrollWidth / 2
    const speed = 1.5 // Adjust speed as needed

    const animate = () => {
      // For RTL, we move in the opposite direction
      if (isRTL) {
        position += speed
        if (position >= totalWidth) {
          position = 0
        }
      } else {
        position -= speed
        if (position <= -totalWidth) {
          position = 0
        }
      }

      container.style.transform = `translateX(${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Pause animation on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId)
    }

    const handleMouseLeave = () => {
      animate()
    }

    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isRTL])

  return (
    <div className="w-screen overflow-hidden py-8">
      <div
        ref={scrollContainerRef}
        className="flex whitespace-nowrap"
        style={{
          willChange: 'transform',
          direction: isRTL ? 'rtl' : 'ltr',
          textAlign: isRTL ? 'right' : 'left'
        }}
      >
        {/* First set of cards */}
        <div className="flex gap-8 pr-8">
          {cards.map((card, index) => (
            <div key={`first-${index}`}>
              <NewsCards2
                title={card.title}
                excerpt={card.excerpt}
                image={card.image}
                isAnyCardHovered={isAnyCardHovered}
                onHoverChange={onHoverChange}
              />
            </div>
          ))}
        </div>

        {/* Duplicate set of cards to ensure seamless looping */}
        <div className="flex gap-8 pl-8">
          {cards.map((card, index) => (
            <div key={`second-${index}`}>
              <NewsCards2
                title={card.title}
                excerpt={card.excerpt}
                image={card.image}
                isAnyCardHovered={isAnyCardHovered}
                onHoverChange={onHoverChange}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
