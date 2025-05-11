"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import {Search,Filter,Calendar,MapPin,Users,ChevronLeft,ChevronRight,BookOpen,Presentation,Globe,Award,Handshake,Quote,Video} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import GSAPReveal from "@/components/gsap-reveal"
import { ActivityGallery } from "@/components/activity-gallery"
import ActivityGalleryHero from "@/components/activity-gallery-hero"
import { TestimonialVideoModal } from "@/components/testimonial-video-modal"
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

  // State for testimonial video modal
  const [isTestimonialVideoOpen, setIsTestimonialVideoOpen] = useState(false)
  const [testimonialVideoPath, setTestimonialVideoPath] = useState("")
  const [testimonialName, setTestimonialName] = useState("")
  const [testimonialDescription, setTestimonialDescription] = useState("")

  const handleViewGallery = (activity: typeof activitiesData[0]) => {
    setGalleryActivity(activity)
    setIsGalleryOpen(true)
  }

  const handleOpenTestimonialVideo = (name: string, videoFileName: string, description: string) => {
    setTestimonialName(name)
    setTestimonialVideoPath(`/testomenialVid/${videoFileName}`)
    setTestimonialDescription(description)
    setIsTestimonialVideoOpen(true)
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
    <main className="flex min-h-screen flex-col">
      {/* Activity Gallery Hero Section */}
      <ActivityGalleryHero
        activities={activitiesData}
        onViewGallery={scrollToActivityArchive}
      />

      {/* Gallery Modal for individual activities */}
      {galleryActivity && (
        <div className="container px-4 md:px-6 py-16">
          <ActivityGallery activity={galleryActivity} />
        </div>
      )}

      {/* Testimonial Video Modal */}
      <TestimonialVideoModal
        isOpen={isTestimonialVideoOpen}
        onClose={() => setIsTestimonialVideoOpen(false)}
        name={testimonialName}
        videoPath={testimonialVideoPath}
        description={testimonialDescription}
      />

      {/* Featured Activities */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[hsl(0,76%,40%)]/5 via-transparent to-[hsl(120,61%,34%)]/5 dark:from-[hsl(0,76%,40%)]/10 dark:via-black/80 dark:to-[hsl(120,61%,34%)]/10">
        <div className="container px-4 md:px-6">
          <GSAPReveal animation="slide-up">
            <div className="mb-16 text-center">
              <div className="inline-flex items-center rounded-lg bg-[hsl(120,61%,34%)]/10 px-4 py-2 text-base text-[hsl(120,61%,34%)]">
                <Award className="mr-2 h-5 w-5" />
                Featured Events
              </div>
              <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Highlighted Activities</h2>
              <p className="mx-auto mt-6 max-w-[800px] text-muted-foreground text-xl">
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
                    className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-[hsl(120,61%,34%)]/20 hover:border-[hsl(120,61%,34%)]/60 hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.title}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-8">
                      <div className="mb-4 flex items-center justify-between">
                        <Badge variant="outline" className="bg-[hsl(0,76%,40%)]/10 text-[hsl(0,76%,40%)] text-base px-3 py-1">
                          {activity.category}
                        </Badge>
                        <span className="text-base font-medium text-muted-foreground">{activity.year}</span>
                      </div>
                        <h3 className="mb-4 text-2xl font-bold line-clamp-2">{activity.title}</h3>
                      <div className="mb-6 flex flex-col space-y-2 text-base text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-3 h-5 w-5" />
                          {activity.date}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-3 h-5 w-5" />
                          {activity.location}
                        </div>
                      </div>
                        <p className="mb-6 line-clamp-2 text-muted-foreground text-lg">{activity.description}</p>
                        <Button className="w-full bg-[hsl(120,61%,34%)] text-white hover:bg-[hsl(120,61%,34%)]/90">
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
      <section className="py-16 md:py-24 bg-gradient-to-r from-[hsl(0,76%,40%)] via-black to-[hsl(120,61%,34%)] text-white">
        <div className="container px-4 md:px-6">
          <GSAPReveal animation="slide-up">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">Our Impact</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-white/90">
                The collective reach and influence of our activities and programs.
              </p>
            </div>
          </GSAPReveal>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            <GSAPReveal animation="fade" delay={0.1}>
              <div className="flex flex-col items-center text-center">
                <span className="text-5xl font-bold">7</span>
                <span className="mt-2 text-lg">Events & Activities</span>
              </div>
            </GSAPReveal>
            <GSAPReveal animation="fade" delay={0.2}>
              <div className="flex flex-col items-center text-center">
                <span className="text-5xl font-bold">1,620+</span>
                <span className="mt-2 text-lg">Participants</span>
              </div>
            </GSAPReveal>
            <GSAPReveal animation="fade" delay={0.3}>
              <div className="flex flex-col items-center text-center">
                <span className="text-5xl font-bold">5</span>
                <span className="mt-2 text-lg">City</span>
              </div>
            </GSAPReveal>
            <GSAPReveal animation="fade" delay={0.4}>
              <div className="flex flex-col items-center text-center">
                <span className="text-5xl font-bold">98%</span>
                <span className="mt-2 text-lg">Satisfaction Rate</span>
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
        className="py-16 md:py-24 bg-gradient-to-r from-[hsl(0,76%,40%)]/5 via-transparent to-[hsl(120,61%,34%)]/5 dark:from-[hsl(0,76%,40%)]/10 dark:via-black/80 dark:to-[hsl(120,61%,34%)]/10">
        <div className="container px-4 md:px-6">
          <GSAPReveal animation="slide-up">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center rounded-lg bg-[hsl(0,76%,40%)]/10 px-3 py-1 text-sm text-[hsl(0,76%,40%)]">
                <Calendar className="mr-1 h-4 w-4" />
                Past Events
              </div>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Activity Archive</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
                Browse through our complete history of events, workshops, and initiatives.
              </p>
            </div>
          </GSAPReveal>

          <div className="mx-auto max-w-5xl">
            {/* Search and Filter */}
            <GSAPReveal animation="fade">
              <div className="mb-8 grid gap-4 md:grid-cols-4">
                <div className="relative md:col-span-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search activities..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Activity Type" />
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
                <div className="flex items-center gap-2">
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger>
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((year) => (
                        <SelectItem key={year} value={year}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location}
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
                <TabsList className="grid w-full max-w-md grid-cols-2 bg-[hsl(0,76%,40%)]/5 dark:bg-[hsl(0,76%,40%)]/10">
                  <TabsTrigger
                    value="all"
                    className="data-[state=active]:bg-[hsl(120,61%,34%)] data-[state=active]:text-white"
                  >
                    All Activities
                  </TabsTrigger>
                  <TabsTrigger
                    value="featured"
                    className="data-[state=active]:bg-[hsl(120,61%,34%)] data-[state=active]:text-white"
                  >
                    Highlighted
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </GSAPReveal>

            {/* Activities Grid */}
            {paginatedActivities.length > 0 ? (
              <div className="space-y-6">
                {paginatedActivities.map((activity, index) => (
                  <GSAPReveal key={activity.id} animation="fade" delay={0.1 * index}>
                    <Link href={`/activities/${activity.id}`}>
                      <Card className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                      <div className="grid md:grid-cols-3">
                        <div className="aspect-video md:aspect-square overflow-hidden">
                          <img
                            src={activity.image || "/placeholder.svg"}
                            alt={activity.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="p-6 md:col-span-2">
                          <div className="mb-3 flex flex-wrap items-center gap-2">
                            <Badge variant="outline" className="bg-[hsl(120,61%,34%)]/10 text-[hsl(120,61%,34%)] flex items-center gap-1">
                              {getActivityIcon(activity.category)}
                              {activity.category}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{activity.year}</span>
                          </div>
                            <h3 className="mb-2 text-xl font-bold line-clamp-2">{activity.title}</h3>
                          <div className="mb-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="mr-2 h-4 w-4" />
                              {activity.date}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="mr-2 h-4 w-4" />
                              {activity.location}
                            </div>
                          </div>
                            <p className="mb-4 text-muted-foreground line-clamp-2">{activity.description}</p>
                            <Button className="bg-[hsl(120,61%,34%)] text-white hover:bg-[hsl(120,61%,34%)]/90">
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
              <div className="rounded-lg border border-dashed p-8 text-center">
                <p className="text-muted-foreground">No activities found matching your criteria.</p>
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
                      className={currentPage === index + 1 ? "bg-[hsl(120,61%,34%)] text-white hover:bg-[hsl(120,61%,34%)]/90" : ""}
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

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[hsl(0,76%,40%)]/5 via-transparent to-[hsl(120,61%,34%)]/5 dark:from-[hsl(0,76%,40%)]/10 dark:via-black/80 dark:to-[hsl(120,61%,34%)]/10">
        <div className="container px-4 md:px-6">
          <GSAPReveal animation="slide-up">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center rounded-lg bg-[hsl(0,76%,40%)]/10 px-3 py-1 text-sm text-[hsl(0,76%,40%)]">
                <Quote className="mr-1 h-4 w-4" />
                Student Voices
              </div>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Participant Testimonials</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
                Hear from students who have attended our events and activities.
              </p>
            </div>
          </GSAPReveal>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            <GSAPReveal animation="slide-up" delay={0.1}>
              <Card
                className="h-full cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleOpenTestimonialVideo(
                  "Tasnim mosa",
                  "moritania.mp4",
                  "The Annual Scholarship Conference was an incredible opportunity to connect with other students and learn about educational opportunities. I gained valuable insights that will help me in my academic journey."
                )}
              >
                <CardContent className="flex h-full flex-col justify-between p-6">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <Quote className="h-8 w-8 text-[hsl(120,61%,34%)]/40" />
                      <div className="bg-[hsl(120,61%,34%)] text-white px-3 py-2 rounded-md flex items-center shadow-md hover:bg-[hsl(120,61%,34%)]/90 transition-colors">
                        <Video className="h-5 w-5 mr-2" />
                        <span className="font-medium">Watch Video</span>
                      </div>
                    </div>
                    <p className="mb-4 italic text-muted-foreground">
                      "The Annual Scholarship Conference was an incredible opportunity to connect with other students and learn about educational opportunities. I gained valuable insights that will help me in my academic journey."
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Tasnim mosa</p>
                      <p className="text-sm text-muted-foreground">Master's Student, Environmental Engineering</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </GSAPReveal>

            <GSAPReveal animation="slide-up" delay={0.2}>
              <Card
                className="h-full cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleOpenTestimonialVideo(
                  "Hassan Albirok",
                  "hassan.mp4",
                  "The Cultural Exchange Festival was a highlight of my year. It gave me a chance to share my heritage with the local community and feel connected to our Palestinian roots."
                )}
              >
                <CardContent className="flex h-full flex-col justify-between p-6">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <Quote className="h-8 w-8 text-[hsl(0,76%,40%)]/40" />
                      <div className="bg-[hsl(120,61%,34%)] text-white px-3 py-2 rounded-md flex items-center shadow-md hover:bg-[hsl(120,61%,34%)]/90 transition-colors">
                        <Video className="h-5 w-5 mr-2" />
                        <span className="font-medium">Watch Video</span>
                      </div>
                    </div>
                    <p className="mb-4 italic text-muted-foreground">
                      "The Cultural Exchange Festival was a highlight of my year. It gave me a chance to share my heritage with the local community and feel connected to our Palestinian roots."
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Hassan Albirok</p>
                      <p className="text-sm text-muted-foreground">Bachelor's Student, Mechanical Engineering</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </GSAPReveal>

            <GSAPReveal animation="slide-up" delay={0.3}>
              <Card
                className="h-full cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleOpenTestimonialVideo(
                  "Atia Algadi",
                  "atia.mp4",
                  "The International Education Fair opened doors for me that I never thought possible. I was able to connect with universities from around the world and find scholarship opportunities that matched my academic goals."
                )}
              >
                <CardContent className="flex h-full flex-col justify-between p-6">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <Quote className="h-8 w-8 text-[hsl(120,61%,34%)]/40" />
                      <div className="bg-[hsl(120,61%,34%)] text-white px-3 py-2 rounded-md flex items-center shadow-md hover:bg-[hsl(120,61%,34%)]/90 transition-colors">
                        <Video className="h-5 w-5 mr-2" />
                        <span className="font-medium">Watch Video</span>
                      </div>
                    </div>
                    <p className="mb-4 italic text-muted-foreground">
                      "The International Education Fair opened doors for me that I never thought possible. I was able to connect with universities from around the world and find scholarship opportunities that matched my academic goals."
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Atia Algadi</p>
                      <p className="text-sm text-muted-foreground">PhD Student, Biochemistry</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </GSAPReveal>
            <GSAPReveal animation="slide-up" delay={0.4}>
              <Card
                className="h-full cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleOpenTestimonialVideo(
                  "Omer Qadih",
                  "omer.mp4",
                  "The International Education Fair opened doors for me that I never thought possible. I was able to connect with universities from around the world and find scholarship opportunities that matched my academic goals."
                )}
              >
                <CardContent className="flex h-full flex-col justify-between p-6">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <Quote className="h-8 w-8 text-[hsl(120,61%,34%)]/40" />
                      <div className="bg-[hsl(120,61%,34%)] text-white px-3 py-2 rounded-md flex items-center shadow-md hover:bg-[hsl(120,61%,34%)]/90 transition-colors">
                        <Video className="h-5 w-5 mr-2" />
                        <span className="font-medium">Watch Video</span>
                      </div>
                    </div>
                    <p className="mb-4 italic text-muted-foreground">
                      "The International Education Fair opened doors for me that I never thought possible. I was able to connect with universities from around the world and find scholarship opportunities that matched my academic goals."
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Omer Qadih</p>
                      <p className="text-sm text-muted-foreground">PhD Student, Biochemistry</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </GSAPReveal>
            <GSAPReveal animation="slide-up" delay={0.5}>
              <Card
                className="h-full cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleOpenTestimonialVideo(
                  "Mohammed Algodra",
                  "mohammed.mp4",
                  "The International Education Fair opened doors for me that I never thought possible. I was able to connect with universities from around the world and find scholarship opportunities that matched my academic goals."
                )}
              >
                <CardContent className="flex h-full flex-col justify-between p-6">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <Quote className="h-8 w-8 text-[hsl(120,61%,34%)]/40" />
                      <div className="bg-[hsl(120,61%,34%)] text-white px-3 py-2 rounded-md flex items-center shadow-md hover:bg-[hsl(120,61%,34%)]/90 transition-colors">
                        <Video className="h-5 w-5 mr-2" />
                        <span className="font-medium">Watch Video</span>
                      </div>
                    </div>
                    <p className="mb-4 italic text-muted-foreground">
                      "The International Education Fair opened doors for me that I never thought possible. I was able to connect with universities from around the world and find scholarship opportunities that matched my academic goals."
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Mohammed Algodra</p>
                      <p className="text-sm text-muted-foreground">PhD Student, Biochemistry</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* Upcoming Events CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[hsl(0,76%,40%)]/5 via-transparent to-[hsl(120,61%,34%)]/5 dark:from-[hsl(0,76%,40%)]/10 dark:via-black/80 dark:to-[hsl(120,61%,34%)]/10">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl rounded-lg bg-gradient-to-r from-[hsl(0,76%,40%)]/10 via-transparent to-[hsl(120,61%,34%)]/10 dark:from-[hsl(0,76%,40%)]/20 dark:via-black/80 dark:to-[hsl(120,61%,34%)]/20 p-8 text-center">
            <GSAPReveal animation="slide-up">
              <div className="inline-flex items-center rounded-lg bg-[hsl(120,61%,34%)]/10 px-3 py-1 text-sm text-[hsl(120,61%,34%)]">
                <Calendar className="mr-1 h-4 w-4" />
                Stay Connected
              </div>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Join Our Upcoming Events</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
                Stay connected with our community and participate in our upcoming workshops, seminars, and networking
                opportunities.
              </p>
              <div className="mt-6">
                <Link href="/contact">
                  <Button className="bg-[hsl(120,61%,34%)] text-white hover:bg-[hsl(120,61%,34%)]/90 dark:bg-[hsl(120,61%,34%)] dark:text-white dark:hover:bg-[hsl(120,61%,34%)]/90">Subscribe to Event Updates</Button>
                </Link>
              </div>
            </GSAPReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
