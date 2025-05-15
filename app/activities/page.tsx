"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import {Search,Filter,Calendar,MapPin,Users,ChevronLeft,ChevronRight,BookOpen,Presentation,Globe,Award,Handshake} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import GSAPReveal from "@/components/gsap-reveal"
import { ActivityGallery } from "@/components/activity-gallery"
import ActivityGalleryHero from "@/components/activity-gallery-hero"

import { activitiesData, type Activity } from "./data"

// Categories for filtering
const categories = [
  "All",
  "Conference",
  "Cultural Event",
  "Education Fair",
  "Workshop",
  "Seminar",
  "Networking"
]
const years = ["All", "2023", "2022", "2021"]
const locations = ["All", "İstanbul, Türkiye","Cairo, Eygpt" ,"Bishkek, Kyrgyzstan", "Kuala Lumpur, Malaysia","Nouakchott, mauritania"]

export default function ActivitiesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedYear, setSelectedYear] = useState("All")
  const [selectedLocation, setSelectedLocation] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const [activeTab, setActiveTab] = useState("all")
  const itemsPerPage = 6

  // State for individual activity gallery modals
  const [galleryActivity, setGalleryActivity] = useState<typeof activitiesData[0] | null>(null)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

  const handleViewGallery = (activity: typeof activitiesData[0]) => {
    setGalleryActivity(activity)
    setIsGalleryOpen(true)
  }

  const scrollToActivityArchive = () => {
    // @ts-ignore - we know this exists
    const archiveSection = window.activityArchiveRef;

    if (archiveSection) {
      // Set the active tab to "all" to show all activities
      setActiveTab("all")

      // Scroll to the archive section with GSAP animation
      gsap.to(window, {
        duration: 0.2,
        scrollTo: {
          y: archiveSection,
          offsetY: 40 // Add some offset to account for fixed headers
        },
        ease: "power2.inOut"
      });
    }
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

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

  // Filter activities based on search query, category, year, location, and tab
  const filteredActivities = activitiesData.filter((activity) => {
    const matchesSearch =
      activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.location.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory === "All" || activity.category === selectedCategory
    const matchesYear = selectedYear === "All" || activity.year.toString() === selectedYear
    const matchesLocation = selectedLocation === "All" || activity.location === selectedLocation

    const matchesTab = activeTab === "all" || (activeTab === "featured" && activity.featured)

    return matchesSearch && matchesCategory && matchesYear && matchesLocation && matchesTab
  })

  // Pagination
  const totalPages = Math.ceil(filteredActivities.length / itemsPerPage)
  const paginatedActivities = filteredActivities.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, selectedCategory, selectedYear, selectedLocation, activeTab])

  // Activity type icons
  const getActivityIcon = (category: string) => {
    switch (category) {
      case "Conference":
        return <Users className="h-5 w-5" />
      case "Workshop":
        return <BookOpen className="h-5 w-5" />
      case "Seminar":
        return <Presentation className="h-5 w-5" />
      case "Cultural Event":
        return <Globe className="h-5 w-5" />
      case "Networking":
        return <Handshake className="h-5 w-5" />
      case "Education Fair":
        return <Award className="h-5 w-5" />
      default:
        return <Calendar className="h-5 w-5" />
    }
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#f8faf8] dark:bg-gray-950">
      {/* Activity Gallery Hero Section */}
      <ActivityGalleryHero
        activities={activitiesData}
      />

      {/* Gallery Modal for individual activities */}
      {galleryActivity && (
        <div className="container px-4 md:px-6 py-16">
          <ActivityGallery activity={galleryActivity} />
        </div>
      )}



      {/* Featured Activities */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950 relative">
        <div className="absolute inset-0 bg-[#f8faf8]/70 dark:bg-gray-900/50"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <GSAPReveal animation="slide-up">
            <div className="mb-16 text-center">
              <div className="inline-flex items-center rounded-full bg-[#1e7e34]/10 dark:bg-[#1e7e34]/20 px-4 py-2 text-base text-[#1e7e34] shadow-sm">
                <Award className="mr-2 h-5 w-5" />
                Featured Events
              </div>
              <h2 className="mt-3 text-4xl font-bold sm:text-5xl text-gray-900 dark:text-white leading-tight">
                <span className="relative">
                  Highlighted Activities
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#1e7e34]/0 via-[#1e7e34]/80 to-[#1e7e34]/0"></span>
                </span>
              </h2>
              <p className="mx-auto mt-8 max-w-[800px] text-gray-600 dark:text-gray-300 text-xl">
                Our most impactful recent events and initiatives.
              </p>
            </div>
          </GSAPReveal>

          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-1 lg:grid-cols-3">
            {activitiesData
              .filter((activity) => activity.featured)
              .slice(0, 3)
              .map((activity, index) => (
                <GSAPReveal key={activity.id} animation="slide-up" delay={0.1 * index}>
                  <Link href={`/activities/${activity.id}`}>
                  <Card
                    className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:-translate-y-2 cursor-pointer group bg-white dark:bg-gray-900 rounded-xl"
                  >
                    <div className="aspect-video overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                      <img
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <Badge className="absolute top-4 left-4 z-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-[#1e7e34] border-0 shadow-md">
                        {activity.category}
                      </Badge>
                      <div className="absolute bottom-4 right-4 z-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                        {activity.year}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="mb-3 text-xl font-bold line-clamp-2 text-gray-900 dark:text-white group-hover:text-[#1e7e34] transition-colors">{activity.title}</h3>
                      <div className="mb-4 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center bg-[#e8f5e9] dark:bg-[#1e7e34]/20 px-3 py-1 rounded-full">
                          <Calendar className="mr-2 h-4 w-4 text-[#1e7e34]" />
                          {activity.date}
                        </div>
                        <div className="flex items-center bg-[#e8f5e9] dark:bg-[#1e7e34]/20 px-3 py-1 rounded-full">
                          <MapPin className="mr-2 h-4 w-4 text-[#1e7e34]" />
                          {activity.location}
                        </div>
                      </div>
                      <p className="mb-6 line-clamp-2 text-gray-600 dark:text-gray-300">{activity.description}</p>
                      <Button className="w-full bg-white dark:bg-gray-900 text-[#1e7e34] border border-[#1e7e34] hover:bg-[#1e7e34] hover:text-white transition-colors group-hover:bg-[#1e7e34] group-hover:text-white">
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                  </Link>
                </GSAPReveal>
              ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 md:py-24 bg-[#1e7e34]/5 dark:bg-[#1e7e34]/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#1e7e34]/0 via-[#1e7e34]/50 to-[#1e7e34]/0"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#1e7e34]/0 via-[#1e7e34]/50 to-[#1e7e34]/0"></div>
        <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-48 h-48 bg-[#1e7e34]/10 dark:bg-[#1e7e34]/20 rounded-full blur-3xl"></div>
        <div className="absolute -right-24 top-1/3 -translate-y-1/2 w-64 h-64 bg-[#1e7e34]/10 dark:bg-[#1e7e34]/20 rounded-full blur-3xl"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <GSAPReveal animation="slide-up">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold sm:text-5xl text-gray-900 dark:text-white mb-4">
                <span className="relative inline-block">
                  Our Impact
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#1e7e34]/0 via-[#1e7e34]/80 to-[#1e7e34]/0"></span>
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-gray-600 dark:text-gray-300 text-xl">
                The collective reach and influence of our activities and programs.
              </p>
            </div>
          </GSAPReveal>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            <GSAPReveal animation="fade" delay={0.1}>
              <div className="flex flex-col items-center justify-center text-center p-8 rounded-xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 h-full group">
                <div className="w-16 h-16 rounded-full bg-[#1e7e34]/10 dark:bg-[#1e7e34]/20 flex items-center justify-center mb-4 group-hover:bg-[#1e7e34]/20 dark:group-hover:bg-[#1e7e34]/30 transition-colors">
                  <Award className="h-8 w-8 text-[#1e7e34]" />
                </div>
                <span className="text-5xl font-bold text-[#1e7e34] mb-2">7</span>
                <span className="text-lg text-gray-700 dark:text-gray-300 font-medium">Events & Activities</span>
              </div>
            </GSAPReveal>
            <GSAPReveal animation="fade" delay={0.2}>
              <div className="flex flex-col items-center justify-center text-center p-8 rounded-xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 h-full group">
                <div className="w-16 h-16 rounded-full bg-[#1e7e34]/10 dark:bg-[#1e7e34]/20 flex items-center justify-center mb-4 group-hover:bg-[#1e7e34]/20 dark:group-hover:bg-[#1e7e34]/30 transition-colors">
                  <Users className="h-8 w-8 text-[#1e7e34]" />
                </div>
                <span className="text-5xl font-bold text-[#1e7e34] mb-2">1,620+</span>
                <span className="text-lg text-gray-700 dark:text-gray-300 font-medium">Participants</span>
              </div>
            </GSAPReveal>
            <GSAPReveal animation="fade" delay={0.3}>
              <div className="flex flex-col items-center justify-center text-center p-8 rounded-xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 h-full group">
                <div className="w-16 h-16 rounded-full bg-[#1e7e34]/10 dark:bg-[#1e7e34]/20 flex items-center justify-center mb-4 group-hover:bg-[#1e7e34]/20 dark:group-hover:bg-[#1e7e34]/30 transition-colors">
                  <MapPin className="h-8 w-8 text-[#1e7e34]" />
                </div>
                <span className="text-5xl font-bold text-[#1e7e34] mb-2">5</span>
                <span className="text-lg text-gray-700 dark:text-gray-300 font-medium">Cities</span>
              </div>
            </GSAPReveal>
            <GSAPReveal animation="fade" delay={0.4}>
              <div className="flex flex-col items-center justify-center text-center p-8 rounded-xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 h-full group">
                <div className="w-16 h-16 rounded-full bg-[#1e7e34]/10 dark:bg-[#1e7e34]/20 flex items-center justify-center mb-4 group-hover:bg-[#1e7e34]/20 dark:group-hover:bg-[#1e7e34]/30 transition-colors">
                  <Handshake className="h-8 w-8 text-[#1e7e34]" />
                </div>
                <span className="text-5xl font-bold text-[#1e7e34] mb-2">98%</span>
                <span className="text-lg text-gray-700 dark:text-gray-300 font-medium">Satisfaction Rate</span>
              </div>
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* All Activities */}
      <section
        ref={(el) => {
          if (el) {
            // @ts-ignore - we know this is an HTMLElement
            window.activityArchiveRef = el;
          }
        }}
        className="py-16 md:py-24 bg-white dark:bg-gray-950 relative">
        <div className="container px-4 md:px-6 relative z-10">
          <GSAPReveal animation="slide-up">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center rounded-full bg-[#1e7e34]/10 dark:bg-[#1e7e34]/20 px-4 py-2 text-sm text-[#1e7e34] shadow-sm">
                <Calendar className="mr-2 h-4 w-4" />
                Past Events
              </div>
              <h2 className="mt-3 text-3xl font-bold sm:text-5xl text-gray-900 dark:text-white mb-4">
                <span className="relative inline-block">
                  Activity Archive
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#1e7e34]/0 via-[#1e7e34]/80 to-[#1e7e34]/0"></span>
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-gray-600 dark:text-gray-300 text-xl">
                Browse through our complete history of events, workshops, and initiatives.
              </p>
            </div>
          </GSAPReveal>

          <div className="mx-auto max-w-5xl">
            {/* Search and Filter */}
            <GSAPReveal animation="fade">
              <div className="mb-10 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md">
                <div className="grid gap-6 md:grid-cols-4">
                  <div className="relative md:col-span-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#1e7e34]" />
                    <Input
                      placeholder="Search activities..."
                      className="pl-10 border-gray-200 dark:border-gray-700 focus:border-[#1e7e34] focus:ring-[#1e7e34]/10 rounded-lg dark:bg-gray-800 dark:text-gray-100"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4 text-[#1e7e34]" />
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="border-gray-200 dark:border-gray-700 focus:ring-[#1e7e34]/10 rounded-lg dark:bg-gray-800 dark:text-gray-100">
                        <SelectValue placeholder="Activity Type" />
                      </SelectTrigger>
                      <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                        {categories.map((category) => (
                          <SelectItem key={category} value={category} className="dark:text-gray-100 dark:focus:bg-gray-700">
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-2">
                    <Select value={selectedYear} onValueChange={setSelectedYear}>
                      <SelectTrigger className="border-gray-200 dark:border-gray-700 focus:ring-[#1e7e34]/10 rounded-lg dark:bg-gray-800 dark:text-gray-100">
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                        {years.map((year) => (
                          <SelectItem key={year} value={year} className="dark:text-gray-100 dark:focus:bg-gray-700">
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-2">
                    <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                      <SelectTrigger className="border-gray-200 dark:border-gray-700 focus:ring-[#1e7e34]/10 rounded-lg dark:bg-gray-800 dark:text-gray-100">
                        <SelectValue placeholder="Location" />
                      </SelectTrigger>
                      <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                        {locations.map((location) => (
                          <SelectItem key={location} value={location} className="dark:text-gray-100 dark:focus:bg-gray-700">
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </GSAPReveal>

            {/* Tabs */}
            <GSAPReveal animation="fade" delay={0.1}>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-10">
                <TabsList className="grid w-full max-w-md grid-cols-2 bg-[#e8f5e9] dark:bg-[#1e7e34]/20 p-1 rounded-full">
                  <TabsTrigger
                    value="all"
                    className="rounded-full data-[state=active]:bg-[#1e7e34] data-[state=active]:text-white"
                  >
                    All Activities
                  </TabsTrigger>
                  <TabsTrigger
                    value="featured"
                    className="rounded-full data-[state=active]:bg-[#1e7e34] data-[state=active]:text-white"
                  >
                    Highlighted
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </GSAPReveal>

            {/* Activities Grid */}
            {paginatedActivities.length > 0 ? (
              <div className="space-y-8">
                {paginatedActivities.map((activity, index) => (
                  <GSAPReveal key={activity.id} animation="fade" delay={0.1 * index}>
                    <Link href={`/activities/${activity.id}`}>
                      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 rounded-xl cursor-pointer group bg-white dark:bg-gray-900">
                      <div className="grid md:grid-cols-3">
                        <div className="aspect-video md:aspect-square overflow-hidden relative">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                          <img
                            src={activity.image || "/placeholder.svg"}
                            alt={activity.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6 md:col-span-2">
                          <div className="mb-3 flex flex-wrap items-center gap-3">
                            <Badge className="bg-[#e8f5e9] dark:bg-[#1e7e34]/20 text-[#1e7e34] border-0 flex items-center gap-1 px-3 py-1 rounded-full">
                              {getActivityIcon(activity.category)}
                              {activity.category}
                            </Badge>
                            <div className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">{activity.year}</div>
                          </div>
                            <h3 className="mb-3 text-xl font-bold line-clamp-2 text-gray-900 dark:text-white group-hover:text-[#1e7e34] transition-colors">{activity.title}</h3>
                          <div className="mb-4 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                            <div className="flex items-center bg-[#e8f5e9] dark:bg-[#1e7e34]/20 px-3 py-1 rounded-full">
                              <Calendar className="mr-2 h-4 w-4 text-[#1e7e34]" />
                              {activity.date}
                            </div>
                            <div className="flex items-center bg-[#e8f5e9] dark:bg-[#1e7e34]/20 px-3 py-1 rounded-full">
                              <MapPin className="mr-2 h-4 w-4 text-[#1e7e34]" />
                              {activity.location}
                            </div>
                          </div>
                            <p className="mb-5 text-gray-600 dark:text-gray-300 line-clamp-2">{activity.description}</p>
                            <Button className="bg-white dark:bg-gray-900 text-[#1e7e34] border border-[#1e7e34] hover:bg-[#1e7e34] hover:text-white transition-colors group-hover:bg-[#1e7e34] group-hover:text-white shadow-sm">
                              Read More
                            </Button>
                          </div>
                      </div>
                    </Card>
                    </Link>
                  </GSAPReveal>
                ))}
              </div>
            ) : (
              <div className="rounded-xl bg-white dark:bg-gray-900 p-12 text-center shadow-md">
                <div className="flex flex-col items-center justify-center">
                  <Search className="h-12 w-12 text-gray-300 dark:text-gray-600 mb-4" />
                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-2">No activities found matching your criteria.</p>
                  <p className="text-gray-500 dark:text-gray-400">Try adjusting your filters or search terms.</p>
                </div>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <GSAPReveal animation="fade" delay={0.2}>
                <div className="mt-12 flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-[#1e7e34]/5 dark:hover:bg-[#1e7e34]/20 hover:text-[#1e7e34] hover:border-[#1e7e34] rounded-full shadow-sm"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <Button
                      key={index}
                      variant={currentPage === index + 1 ? "default" : "outline"}
                      className={currentPage === index + 1
                        ? "bg-[#1e7e34] text-white hover:bg-[#1e7e34]/90 rounded-full shadow-sm"
                        : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-[#1e7e34]/5 dark:hover:bg-[#1e7e34]/20 hover:text-[#1e7e34] hover:border-[#1e7e34] rounded-full shadow-sm"}
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
                    className="border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-[#1e7e34]/5 dark:hover:bg-[#1e7e34]/20 hover:text-[#1e7e34] hover:border-[#1e7e34] rounded-full shadow-sm"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </GSAPReveal>
            )}
          </div>
        </div>
      </section>



      {/* Upcoming Events CTA */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="absolute inset-0 bg-[#f8faf8]/70"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-3xl rounded-xl bg-white p-10 text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#34a853]/30 via-[#34a853]/80 to-[#34a853]/30"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#34a853]/5 rounded-full"></div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#34a853]/5 rounded-full"></div>

            <GSAPReveal animation="slide-up">
              <div className="inline-flex items-center rounded-full bg-[#34a853]/10 px-4 py-2 text-sm text-[#34a853] shadow-sm mb-4">
                <Calendar className="mr-2 h-4 w-4" />
                Stay Connected
              </div>
              <h2 className="text-3xl font-bold sm:text-4xl text-gray-900 mb-4">Join Our Upcoming Events</h2>
              <p className="mx-auto mb-8 max-w-[700px] text-gray-600 text-lg">
                Stay connected with our community and participate in our upcoming workshops, seminars, and networking
                opportunities.
              </p>
              <div className="mt-8">
                <Link href="/contact">
                  <Button className="bg-[#34a853] text-white hover:bg-[#2d9249] px-8 py-6 text-lg font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    Subscribe to Event Updates
                  </Button>
                </Link>
              </div>
            </GSAPReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
