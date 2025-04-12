"use client"

import { useState, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Search, Filter, Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GSAPReveal from "@/components/gsap-reveal"
import GSAPTextReveal from "@/components/gsap-text-reveal"
import ParallaxSection from "@/components/parallax-section"
import NewsCard from "@/components/news-card"

// Mock news data
const newsData = [
  {
    id: 1,
    title: "New Scholarship Program Launched",
    date: "June 15, 2023",
    excerpt: "Announcing our new scholarship program for undergraduate students in engineering and medical fields.",
    image: "/placeholder.svg?height=200&width=300",
    href: "/news/new-scholarship-program",
    category: "Scholarships",
    featured: true,
  },
  {
    id: 2,
    title: "Partnership with Istanbul University",
    date: "May 28, 2023",
    excerpt: "We're excited to announce our new partnership with Istanbul University to provide more opportunities.",
    image: "/placeholder.svg?height=200&width=300",
    href: "/news/istanbul-university-partnership",
    category: "Partnerships",
    featured: true,
  },
  {
    id: 3,
    title: "Annual Conference Success",
    date: "April 10, 2023",
    excerpt: "Our annual conference brought together students, educators, and partners from around the world.",
    image: "/placeholder.svg?height=200&width=300",
    href: "/news/annual-conference",
    category: "Events",
    featured: false,
  },
  {
    id: 4,
    title: "Student Success Story: Layla's Journey",
    date: "March 22, 2023",
    excerpt: "Read about Layla's inspiring journey from Gaza to completing her PhD in Environmental Science.",
    image: "/placeholder.svg?height=200&width=300",
    href: "/news/student-success-layla",
    category: "Success Stories",
    featured: false,
  },
  {
    id: 5,
    title: "New Research Grant Opportunities",
    date: "February 15, 2023",
    excerpt: "Announcing new research grant opportunities for Palestinian scholars in STEM fields.",
    image: "/placeholder.svg?height=200&width=300",
    href: "/news/research-grant-opportunities",
    category: "Grants",
    featured: false,
  },
  {
    id: 6,
    title: "Educational Workshop Series Announced",
    date: "January 30, 2023",
    excerpt: "Join our upcoming workshop series on academic writing, research methodologies, and career development.",
    image: "/placeholder.svg?height=200&width=300",
    href: "/news/workshop-series",
    category: "Events",
    featured: false,
  },
  {
    id: 7,
    title: "Foundation Expands Support to Lebanon",
    date: "December 12, 2022",
    excerpt: "Our foundation is expanding its support programs to reach Palestinian students in Lebanon.",
    image: "/placeholder.svg?height=200&width=300",
    href: "/news/lebanon-expansion",
    category: "Announcements",
    featured: true,
  },
  {
    id: 8,
    title: "Year-End Impact Report Released",
    date: "December 5, 2022",
    excerpt: "Our 2022 Impact Report shows significant growth in student support and program effectiveness.",
    image: "/placeholder.svg?height=200&width=300",
    href: "/news/impact-report-2022",
    category: "Reports",
    featured: false,
  },
  {
    id: 9,
    title: "New Board Members Appointed",
    date: "November 18, 2022",
    excerpt: "We welcome three new distinguished members to our Board of Directors.",
    image: "/placeholder.svg?height=200&width=300",
    href: "/news/new-board-members",
    category: "Announcements",
    featured: false,
  },
]

// Categories for filtering
const categories = [
  "All",
  "Scholarships",
  "Partnerships",
  "Events",
  "Success Stories",
  "Grants",
  "Announcements",
  "Reports",
]

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const [activeTab, setActiveTab] = useState("all")
  const itemsPerPage = 6

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Initialize progress bar
    const progressBar = document.querySelector(".progress-bar")
    if (progressBar) {
      gsap.to(progressBar, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  // Filter news based on search query, category, and tab
  const filteredNews = newsData.filter((news) => {
    const matchesSearch =
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory === "All" || news.category === selectedCategory

    const matchesTab =
      activeTab === "all" ||
      (activeTab === "featured" && news.featured) ||
      (activeTab === "recent" && new Date(news.date).getTime() > Date.now() - 90 * 24 * 60 * 60 * 1000) // Last 90 days

    return matchesSearch && matchesCategory && matchesTab
  })

  // Pagination
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage)
  const paginatedNews = filteredNews.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, selectedCategory, activeTab])

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <ParallaxSection backgroundImage="/placeholder.svg?height=600&width=1200" className="py-24 md:py-32 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <GSAPTextReveal element="h1" className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Latest News
            </GSAPTextReveal>
            <GSAPReveal animation="fade" delay={0.3}>
              <p className="mt-6 text-xl text-gray-200">
                Stay informed about our recent initiatives, announcements, and success stories.
              </p>
            </GSAPReveal>
          </div>
        </div>
      </ParallaxSection>

      {/* Featured News */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <GSAPReveal animation="slide-up">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Stories</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
                Highlighting our most important updates and announcements.
              </p>
            </div>
          </GSAPReveal>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsData
              .filter((news) => news.featured)
              .slice(0, 3)
              .map((news, index) => (
                <GSAPReveal key={news.id} animation="slide-up" delay={0.1 * index}>
                  <NewsCard
                    title={news.title}
                    date={news.date}
                    excerpt={news.excerpt}
                    image={news.image}
                    href={news.href}
                  />
                </GSAPReveal>
              ))}
          </div>
        </div>
      </section>

      {/* News Archive */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <GSAPReveal animation="slide-up">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">News Archive</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
                Browse our complete collection of news, updates, and announcements.
              </p>
            </div>
          </GSAPReveal>

          <div className="mx-auto max-w-5xl">
            {/* Search and Filter */}
            <GSAPReveal animation="fade">
              <div className="mb-8 grid gap-4 md:grid-cols-3">
                <div className="relative md:col-span-2">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search news..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </GSAPReveal>

            {/* Tabs */}
            <GSAPReveal animation="fade" delay={0.1}>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="all">All News</TabsTrigger>
                  <TabsTrigger value="featured">Featured</TabsTrigger>
                  <TabsTrigger value="recent">Recent</TabsTrigger>
                </TabsList>
              </Tabs>
            </GSAPReveal>

            {/* News Grid */}
            {paginatedNews.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {paginatedNews.map((news, index) => (
                  <GSAPReveal key={news.id} animation="fade" delay={0.1 * index}>
                    <div className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={news.image || "/placeholder.svg"}
                          alt={news.title}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <Badge variant="outline" className="bg-primary/10 text-primary">
                            {news.category}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-3 w-3" />
                            {news.date}
                          </div>
                        </div>
                        <h3 className="mb-2 line-clamp-2 text-xl font-bold">{news.title}</h3>
                        <p className="mb-4 line-clamp-3 text-muted-foreground">{news.excerpt}</p>
                        <a
                          href={news.href}
                          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                        >
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </GSAPReveal>
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-dashed p-8 text-center">
                <p className="text-muted-foreground">No news articles found matching your criteria.</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <GSAPReveal animation="fade" delay={0.2}>
                <div className="mt-8 flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <Button
                      key={index}
                      variant={currentPage === index + 1 ? "default" : "outline"}
                      size="icon"
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </GSAPReveal>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <GSAPReveal animation="slide-up">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Stay Updated</h2>
              <p className="mt-4 text-xl text-primary-foreground/90">
                Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-xs bg-white/10 text-white placeholder:text-white/70"
                />
                <Button className="bg-white text-primary hover:bg-gray-100">Subscribe</Button>
              </div>
              <p className="mt-4 text-sm text-primary-foreground/70">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </GSAPReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
