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
import NewsCard from "@/components/news-card"

// Mock news data
const newsData = [
  {
    id: 1,
    title: "Interviews for the first phase of the Nabd Al Hayat grant continue",
    date: "May 5, 2025",
    excerpt: "Ongoing interviews to select 100 Gaza students for the Nabd al-Hayat scholarship program. Partnership between Isnad Foundation and Alkhidmat Europe.",
    image: "/placeholder.svg?height=200&width=300",
    href: "/news/nabd-al-hayat-grant-interviews",
    category: "Scholarships",
    featured: true,
  },
  {
    id: 2,
    title: "Interviews for the First Phase of the Nabd al-Hayat Scholarship",
    date: "May 5, 2023",
    excerpt: "First interviews for the Nabd al-Hayat Scholarship began in Istanbul. The program supports Palestinian medical students with grants and educational resources.",
    image: "/placeholder.svg?height=200&width=300",
    href: "/news/nabd-al-hayat-scholarship-interviews",
    category: "Scholarships",
    featured: true,
  },
  {
    id: 3,
    title: "Partnership with Istanbul University",
    date: "May 28, 2023",
    excerpt: "We're excited to announce our new partnership with Istanbul University to provide more opportunities.",
    image: "/placeholder.svg?height=200&width=300",
    href: "/news/istanbul-university-partnership",
    category: "Partnerships",
    featured: true,
  },
  {
    id: 4,
    title: "Annual Conference Success",
    date: "April 10, 2023",
    excerpt: "Our annual conference brought together students, educators, and partners from around the world.",
    image: "/placeholder.svg?height=200&width=300",
    href: "/news/annual-conference",
    category: "Events",
    featured: false,
  },
  {
    id: 5,
    title: "Student Success Story: Layla's Journey",
    date: "March 22, 2023",
    excerpt: "Read about Layla's inspiring journey from Gaza to completing her PhD in Environmental Science.",
    image: "/placeholder.svg?height=200&width=300",
    href: "/news/student-success-layla",
    category: "Success Stories",
    featured: false,
  },
  {
    id: 6,
    title: "New Research Grant Opportunities",
    date: "February 15, 2023",
    excerpt: "Announcing new research grant opportunities for Palestinian scholars in STEM fields.",
    image: "/placeholder.svg?height=200&width=300",
    href: "/news/research-grant-opportunities",
    category: "Grants",
    featured: false,
  },
  {
    id: 7,
    title: "Educational Workshop Series Announced",
    date: "January 30, 2023",
    excerpt: "Join our upcoming workshop series on academic writing, research methodologies, and career development.",
    image: "/placeholder.svg?height=200&width=300",
    href: "/news/workshop-series",
    category: "Events",
    featured: false,
  },
  {
    id: 8,
    title: "Foundation Expands Support to Lebanon",
    date: "December 12, 2022",
    excerpt: "Our foundation is expanding its support programs to reach Palestinian students in Lebanon.",
    image: "/placeholder.svg?height=200&width=300",
    href: "/news/lebanon-expansion",
    category: "Announcements",
    featured: true,
  },
  {
    id: 9,
    title: "Year-End Impact Report Released",
    date: "December 5, 2022",
    excerpt: "Our 2022 Impact Report shows significant growth in student support and program effectiveness.",
    image: "/placeholder.svg?height=200&width=300",
    href: "/news/impact-report-2022",
    category: "Reports",
    featured: false,
  },
  {
    id: 10,
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
      <section className="relative py-24 md:py-32 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/Flag_of_Palestine.svg"
            alt="Palestinian Flag"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <GSAPTextReveal element="h1" className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl drop-shadow-lg font-playfair">
              Latest News
            </GSAPTextReveal>
            <GSAPReveal animation="fade" delay={0.3}>
              <p className="mt-6 text-xl text-white drop-shadow-md">
                Stay informed about our recent initiatives, announcements, and success stories.
              </p>
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[hsl(0,76%,40%)]/5 via-transparent to-[hsl(120,61%,34%)]/5 dark:from-[hsl(0,76%,40%)]/10 dark:via-black/80 dark:to-[hsl(120,61%,34%)]/10">
        <div className="container px-4 md:px-6">
          <GSAPReveal animation="slide-up">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center rounded-lg bg-[hsl(120,61%,34%)]/10 px-3 py-1 text-sm text-[hsl(120,61%,34%)]">
                <Filter className="mr-1 h-4 w-4" />
                Featured
              </div>
              <h2 className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl text-black dark:text-white">Featured Stories</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
                Highlighting our most important updates and announcements.
              </p>
            </div>
          </GSAPReveal>

          <div className="mx-auto grid max-w-10xl gap-x-16 gap-y-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">
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
      <section className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="container px-4 md:px-6">
          <GSAPReveal animation="slide-up">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center rounded-lg bg-[hsl(0,76%,40%)]/10 px-3 py-1 text-sm text-[hsl(0,76%,40%)]">
                <Calendar className="mr-1 h-4 w-4" />
                Archive
              </div>
              <h2 className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl text-black dark:text-white">News Archive</h2>
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
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[hsl(0,76%,40%)] dark:text-[hsl(0,76%,50%)]" />
                  <Input
                    placeholder="Search news..."
                    className="pl-10 border-[hsl(120,61%,34%)]/20 focus-visible:ring-[hsl(120,61%,34%)] dark:border-[hsl(120,61%,34%)]/30"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-[hsl(120,61%,34%)] dark:text-[hsl(120,61%,44%)]" />
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="border-[hsl(120,61%,34%)]/20 focus:ring-[hsl(120,61%,34%)] dark:border-[hsl(120,61%,34%)]/30">
                      <SelectValue placeholder="Filter by category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem
                          key={category}
                          value={category}
                          className="focus:bg-[hsl(120,61%,34%)]/10 focus:text-[hsl(120,61%,34%)] dark:focus:bg-[hsl(120,61%,34%)]/20 dark:focus:text-[hsl(120,61%,44%)]"
                        >
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
                <TabsList className="grid w-full max-w-md grid-cols-3 bg-[hsl(0,76%,40%)]/5 dark:bg-[hsl(0,76%,40%)]/10">
                  <TabsTrigger
                    value="all"
                    className="data-[state=active]:bg-[hsl(120,61%,34%)] data-[state=active]:text-white"
                  >
                    All News
                  </TabsTrigger>
                  <TabsTrigger
                    value="featured"
                    className="data-[state=active]:bg-[hsl(120,61%,34%)] data-[state=active]:text-white"
                  >
                    Featured
                  </TabsTrigger>
                  <TabsTrigger
                    value="recent"
                    className="data-[state=active]:bg-[hsl(120,61%,34%)] data-[state=active]:text-white"
                  >
                    Recent
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </GSAPReveal>

            {/* News Grid */}
            {paginatedNews.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {paginatedNews.map((news, index) => (
                  <GSAPReveal key={news.id} animation="fade" delay={0.1 * index}>
                    <div className="group relative overflow-hidden rounded-lg border-2 border-[hsl(120,61%,34%)]/20 bg-card transition-all hover:shadow-md dark:bg-black/80 dark:border-[hsl(120,61%,34%)]/30">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={news.image || "/placeholder.svg"}
                          alt={news.title}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <Badge variant="outline" className="bg-[hsl(0,76%,40%)]/10 text-[hsl(0,76%,40%)] dark:bg-[hsl(0,76%,40%)]/20 dark:text-[hsl(0,76%,50%)]">
                            {news.category}
                          </Badge>
                          <div className="flex items-center text-sm text-[hsl(0,76%,40%)] dark:text-[hsl(0,76%,50%)]">
                            <Calendar className="mr-1 h-3 w-3" />
                            {news.date}
                          </div>
                        </div>
                        <h3 className="mb-2 line-clamp-2 text-xl font-bold text-black dark:text-white">{news.title}</h3>
                        <p className="mb-4 line-clamp-3 text-muted-foreground">{news.excerpt}</p>
                        <a
                          href={news.href}
                          className="inline-flex items-center text-sm font-medium text-[hsl(120,61%,34%)] hover:underline dark:text-[hsl(120,61%,44%)]"
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
              <div className="rounded-lg border-2 border-dashed border-[hsl(0,76%,40%)]/20 dark:border-[hsl(0,76%,40%)]/30 p-8 text-center">
                <p className="text-[hsl(0,76%,40%)] dark:text-[hsl(0,76%,50%)]">No news articles found matching your criteria.</p>
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
                    className="border-[hsl(120,61%,34%)]/30 hover:bg-[hsl(120,61%,34%)]/10 hover:text-[hsl(120,61%,34%)] dark:border-[hsl(120,61%,34%)]/30 dark:hover:bg-[hsl(120,61%,34%)]/20 dark:hover:text-[hsl(120,61%,44%)]"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <Button
                      key={index}
                      variant={currentPage === index + 1 ? "default" : "outline"}
                      size="icon"
                      onClick={() => setCurrentPage(index + 1)}
                      className={currentPage === index + 1
                        ? "bg-[hsl(120,61%,34%)] text-white hover:bg-[hsl(120,61%,34%)]/90 dark:bg-[hsl(120,61%,34%)] dark:text-white dark:hover:bg-[hsl(120,61%,34%)]/90"
                        : "border-[hsl(120,61%,34%)]/30 hover:bg-[hsl(120,61%,34%)]/10 hover:text-[hsl(120,61%,34%)] dark:border-[hsl(120,61%,34%)]/30 dark:hover:bg-[hsl(120,61%,34%)]/20 dark:hover:text-[hsl(120,61%,44%)]"
                      }
                    >
                      {index + 1}
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="border-[hsl(120,61%,34%)]/30 hover:bg-[hsl(120,61%,34%)]/10 hover:text-[hsl(120,61%,34%)] dark:border-[hsl(120,61%,34%)]/30 dark:hover:bg-[hsl(120,61%,34%)]/20 dark:hover:text-[hsl(120,61%,44%)]"
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
      <section className="py-16 md:py-24 bg-gradient-to-r from-[hsl(0,76%,40%)] via-black to-[hsl(120,61%,34%)] text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <GSAPReveal animation="slide-up">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Stay Updated</h2>
              <p className="mt-4 text-xl text-white/90">
                Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-xs bg-white/10 text-white placeholder:text-white/70 border-white/20"
                />
                <Button className="bg-[hsl(120,61%,34%)] text-white hover:bg-[hsl(120,61%,34%)]/90 dark:bg-[hsl(120,61%,34%)] dark:text-white dark:hover:bg-[hsl(120,61%,34%)]/90">Subscribe</Button>
              </div>
              <p className="mt-4 text-sm text-white/70">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </GSAPReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
