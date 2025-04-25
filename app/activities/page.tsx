"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Search,
  Filter,
  Calendar,
  MapPin,
  Users,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  BookOpen,
  Presentation,
  Globe,
  Award,
  Handshake,
  Quote,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import GSAPReveal from "@/components/gsap-reveal"
import GSAPTextReveal from "@/components/gsap-text-reveal"

// Mock activities data
const activitiesData = [
  {
    id: 1,
    title: "Annual Scholarship Conference 2023",
    date: "June 15-17, 2023",
    location: "Istanbul, Turkey",
    description:
      "Our flagship annual conference bringing together scholarship recipients, educators, and partners to discuss educational opportunities and challenges for Palestinian students.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Conference",
    featured: true,
    year: 2023,
    participants: 250,
    highlights: [
      "Keynote speech by Dr. Amina Mohammed, Deputy Secretary-General of the United Nations",
      "Panel discussions on higher education access in conflict zones",
      "Networking sessions connecting students with potential employers",
      "Presentation of research by scholarship recipients",
    ],
  },
  {
    id: 2,
    title: "Research Methodology Workshop",
    date: "May 10-12, 2023",
    location: "Ankara, Turkey",
    description:
      "A three-day intensive workshop on research methodologies for graduate students, covering qualitative and quantitative approaches, academic writing, and publication strategies.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Workshop",
    featured: false,
    year: 2023,
    participants: 45,
    highlights: [
      "Hands-on training in statistical analysis software",
      "One-on-one consultations with experienced researchers",
      "Peer review sessions for ongoing research projects",
      "Resources for academic publishing in international journals",
    ],
  },
  {
    id: 3,
    title: "Career Development Seminar Series",
    date: "April 5-26, 2023",
    location: "Online",
    description:
      "A series of weekly online seminars focused on career development skills, including resume building, interview preparation, networking, and professional communication.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Seminar",
    featured: false,
    year: 2023,
    participants: 120,
    highlights: [
      "Resume and cover letter workshops with personalized feedback",
      "Mock interviews with industry professionals",
      "Networking strategies for international job markets",
      "Special sessions on work visa requirements in different countries",
    ],
  },
  {
    id: 4,
    title: "Cultural Exchange Festival",
    date: "March 18, 2023",
    location: "Istanbul, Turkey",
    description:
      "A day-long festival celebrating Palestinian culture and fostering connections between scholarship recipients and the local community through food, music, art, and educational exhibits.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Cultural Event",
    featured: true,
    year: 2023,
    participants: 350,
    highlights: [
      "Traditional Palestinian cuisine prepared by student volunteers",
      "Music and dance performances showcasing cultural heritage",
      "Art exhibition featuring works by Palestinian students",
      "Educational booths about Palestinian history and geography",
    ],
  },
  {
    id: 5,
    title: "Academic Writing Retreat",
    date: "February 10-12, 2023",
    location: "Bursa, Turkey",
    description:
      "A weekend retreat focused on academic writing skills, providing a quiet environment for students to work on their theses, dissertations, and research papers with guidance from writing coaches.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Workshop",
    featured: false,
    year: 2023,
    participants: 30,
    highlights: [
      "Structured writing sessions with dedicated quiet time",
      "One-on-one consultations with academic writing experts",
      "Peer feedback groups organized by discipline",
      "Sessions on overcoming writer's block and maintaining productivity",
    ],
  },
  {
    id: 6,
    title: "Alumni Networking Dinner",
    date: "December 10, 2022",
    location: "Istanbul, Turkey",
    description:
      "An evening gathering bringing together program alumni, current scholarship recipients, and foundation partners to foster connections and celebrate achievements.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Networking",
    featured: false,
    year: 2022,
    participants: 85,
    highlights: [
      "Recognition ceremony for outstanding alumni achievements",
      "Structured networking activities to connect students with professionals",
      "Announcement of new mentorship program initiatives",
      "Testimonials from alumni about their post-graduation journeys",
    ],
  },
  {
    id: 7,
    title: "International Education Fair",
    date: "November 5-6, 2022",
    location: "Istanbul, Turkey",
    description:
      "A two-day education fair connecting Palestinian students with representatives from universities across Turkey and Europe, providing information about admission requirements, programs, and scholarship opportunities.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Education Fair",
    featured: true,
    year: 2022,
    participants: 500,
    highlights: [
      "Representatives from over 30 universities and educational institutions",
      "Workshops on university application processes",
      "Information sessions about scholarship opportunities",
      "One-on-one consultations with academic advisors",
    ],
  },
  {
    id: 8,
    title: "Language Learning Bootcamp",
    date: "October 1-22, 2022",
    location: "Ankara, Turkey",
    description:
      "An intensive three-week language program designed to help new scholarship recipients improve their Turkish language skills before beginning their academic programs.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Language Program",
    featured: false,
    year: 2022,
    participants: 40,
    highlights: [
      "Immersive language learning with native speakers",
      "Cultural excursions to practice language in real-world settings",
      "Academic vocabulary focus tailored to different fields of study",
      "Language exchange partnerships with local students",
    ],
  },
  {
    id: 9,
    title: "Annual Scholarship Conference 2022",
    date: "June 18-20, 2022",
    location: "Istanbul, Turkey",
    description:
      "Our 2022 annual conference focused on 'Education as Empowerment,' bringing together stakeholders to discuss the transformative power of educational access for marginalized communities.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Conference",
    featured: false,
    year: 2022,
    participants: 220,
    highlights: [
      "Keynote address by prominent education advocate Dr. Hanan Ashrawi",
      "Launch of new scholarship initiatives for undergraduate students",
      "Research presentation competition with prizes for outstanding work",
      "Alumni panel on post-graduation impact and community service",
    ],
  },
  {
    id: 10,
    title: "Mental Health & Wellbeing Workshop",
    date: "May 14, 2022",
    location: "Online",
    description:
      "A day-long workshop addressing the mental health challenges faced by students studying abroad, providing coping strategies, resources, and community support networks.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Workshop",
    featured: false,
    year: 2022,
    participants: 75,
    highlights: [
      "Sessions led by mental health professionals specializing in expatriate experiences",
      "Stress management and mindfulness techniques",
      "Discussion groups on cultural adjustment and homesickness",
      "Resources for ongoing mental health support in multiple languages",
    ],
  },
  {
    id: 11,
    title: "Research Symposium",
    date: "April 8-9, 2022",
    location: "Istanbul, Turkey",
    description:
      "A two-day symposium showcasing research conducted by Palestinian graduate students across various disciplines, with feedback from faculty and industry experts.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Symposium",
    featured: false,
    year: 2022,
    participants: 60,
    highlights: [
      "Oral and poster presentations of original research",
      "Interdisciplinary discussion panels",
      "Publication opportunities in partner academic journals",
      "Awards for outstanding research contributions",
    ],
  },
  {
    id: 12,
    title: "Community Service Initiative",
    date: "March 12, 2022",
    location: "Istanbul, Turkey",
    description:
      "A day of community service organized by scholarship recipients, focusing on educational support for refugee children in Istanbul through tutoring, educational games, and resource distribution.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Community Service",
    featured: false,
    year: 2022,
    participants: 50,
    highlights: [
      "One-on-one tutoring in mathematics, science, and languages",
      "Distribution of school supplies and educational materials",
      "Recreational activities promoting teamwork and cultural exchange",
      "Ongoing mentorship program establishment",
    ],
  },
]

// Categories for filtering
const categories = [
  "All",
  "Conference",
  "Workshop",
  "Seminar",
  "Cultural Event",
  "Networking",
  "Education Fair",
  "Language Program",
  "Symposium",
  "Community Service",
]
const years = ["All", "2023", "2022", "2021", "2020"]
const locations = ["All", "Istanbul, Turkey", "Ankara, Turkey", "Bursa, Turkey", "Online"]

export default function ActivitiesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedYear, setSelectedYear] = useState("All")
  const [selectedLocation, setSelectedLocation] = useState("All")
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
            <GSAPTextReveal element="h1" className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl drop-shadow-lg">
              Previous Activities
            </GSAPTextReveal>
            <GSAPReveal animation="fade" delay={0.3}>
              <p className="mt-6 text-xl text-white drop-shadow-md">
                Explore our past events, workshops, conferences, and initiatives that have supported Palestinian
                students in their educational journeys.
              </p>
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* Featured Activities */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[hsl(0,76%,40%)]/5 via-transparent to-[hsl(120,61%,34%)]/5 dark:from-[hsl(0,76%,40%)]/10 dark:via-black/80 dark:to-[hsl(120,61%,34%)]/10">
        <div className="container px-4 md:px-6">
          <GSAPReveal animation="slide-up">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center rounded-lg bg-[hsl(120,61%,34%)]/10 px-3 py-1 text-sm text-[hsl(120,61%,34%)]">
                <Award className="mr-1 h-4 w-4" />
                Featured Events
              </div>
              <h2 className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl">Highlighted Activities</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
                Our most impactful recent events and initiatives.
              </p>
            </div>
          </GSAPReveal>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {activitiesData
              .filter((activity) => activity.featured)
              .slice(0, 3)
              .map((activity, index) => (
                <GSAPReveal key={activity.id} animation="slide-up" delay={0.1 * index}>
                  <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-3 flex items-center justify-between">
                        <Badge variant="outline" className="bg-[hsl(0,76%,40%)]/10 text-[hsl(0,76%,40%)]">
                          {activity.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{activity.year}</span>
                      </div>
                      <h3 className="mb-2 text-xl font-bold">{activity.title}</h3>
                      <div className="mb-4 flex flex-col space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4" />
                          {activity.date}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4" />
                          {activity.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="mr-2 h-4 w-4" />
                          {activity.participants} Participants
                        </div>
                      </div>
                      <p className="line-clamp-3 text-muted-foreground">{activity.description}</p>
                    </CardContent>
                  </Card>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Impact</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-white/90">
                The collective reach and influence of our activities and programs.
              </p>
            </div>
          </GSAPReveal>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            <GSAPReveal animation="fade" delay={0.1}>
              <div className="flex flex-col items-center text-center">
                <span className="text-5xl font-bold">45+</span>
                <span className="mt-2 text-lg">Events & Activities</span>
              </div>
            </GSAPReveal>
            <GSAPReveal animation="fade" delay={0.2}>
              <div className="flex flex-col items-center text-center">
                <span className="text-5xl font-bold">2,500+</span>
                <span className="mt-2 text-lg">Participants</span>
              </div>
            </GSAPReveal>
            <GSAPReveal animation="fade" delay={0.3}>
              <div className="flex flex-col items-center text-center">
                <span className="text-5xl font-bold">12</span>
                <span className="mt-2 text-lg">Cities</span>
              </div>
            </GSAPReveal>
            <GSAPReveal animation="fade" delay={0.4}>
              <div className="flex flex-col items-center text-center">
                <span className="text-5xl font-bold">95%</span>
                <span className="mt-2 text-lg">Satisfaction Rate</span>
              </div>
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* All Activities */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[hsl(0,76%,40%)]/5 via-transparent to-[hsl(120,61%,34%)]/5 dark:from-[hsl(0,76%,40%)]/10 dark:via-black/80 dark:to-[hsl(120,61%,34%)]/10">
        <div className="container px-4 md:px-6">
          <GSAPReveal animation="slide-up">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center rounded-lg bg-[hsl(0,76%,40%)]/10 px-3 py-1 text-sm text-[hsl(0,76%,40%)]">
                <Calendar className="mr-1 h-4 w-4" />
                Past Events
              </div>
              <h2 className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl">Activity Archive</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
                Browse through our complete history of events, workshops, and initiatives.
              </p>
            </div>
          </GSAPReveal>

          <div className="mx-auto max-w-5xl">
            {/* Search and Filter */}
            <GSAPReveal animation="fade">
              <div className="mb-8 grid gap-4 md:grid-cols-4">
                <div className="relative md:col-span-2">
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
                    <Card className="overflow-hidden hover:shadow-md transition-shadow">
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
                          <h3 className="mb-2 text-xl font-bold">{activity.title}</h3>
                          <div className="mb-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="mr-2 h-4 w-4" />
                              {activity.date}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="mr-2 h-4 w-4" />
                              {activity.location}
                            </div>
                            <div className="flex items-center">
                              <Users className="mr-2 h-4 w-4" />
                              {activity.participants} Participants
                            </div>
                          </div>
                          <p className="mb-4 text-muted-foreground">{activity.description}</p>
                          <div className="space-y-2">
                            <h4 className="font-medium">Highlights:</h4>
                            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                              {activity.highlights.slice(0, 2).map((highlight, i) => (
                                <li key={i}>{highlight}</li>
                              ))}
                              {activity.highlights.length > 2 && (
                                <li className="list-none">
                                  <span className="flex items-center text-primary">
                                    +{activity.highlights.length - 2} more
                                    <ArrowRight className="ml-1 h-3 w-3" />
                                  </span>
                                </li>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Card>
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

      {/* Photo Gallery */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[hsl(0,76%,40%)]/5 via-transparent to-[hsl(120,61%,34%)]/5 dark:from-[hsl(0,76%,40%)]/10 dark:via-black/80 dark:to-[hsl(120,61%,34%)]/10">
        <div className="container px-4 md:px-6">
          <GSAPReveal animation="slide-up">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center rounded-lg bg-[hsl(120,61%,34%)]/10 px-3 py-1 text-sm text-[hsl(120,61%,34%)]">
                <Globe className="mr-1 h-4 w-4" />
                Visual Memories
              </div>
              <h2 className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl">Activity Gallery</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
                Visual highlights from our past events and activities.
              </p>
            </div>
          </GSAPReveal>

          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <GSAPReveal key={index} animation="fade" delay={0.05 * index}>
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={`/placeholder.svg?height=300&width=300&text=Event+Photo+${index + 1}`}
                      alt={`Event photo ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </GSAPReveal>
              ))}
            </div>
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
              <h2 className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl">Participant Testimonials</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
                Hear from students who have attended our events and activities.
              </p>
            </div>
          </GSAPReveal>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            <GSAPReveal animation="slide-up" delay={0.1}>
              <Card className="h-full">
                <CardContent className="flex h-full flex-col justify-between p-6">
                  <div>
                    <Quote className="mb-4 h-8 w-8 text-[hsl(120,61%,34%)]/40" />
                    <p className="mb-4 italic text-muted-foreground">
                      "The research methodology workshop transformed my approach to my thesis. The personalized feedback
                      from experienced researchers was invaluable."
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Leila Hamdan</p>
                    <p className="text-sm text-muted-foreground">Master's Student, Environmental Engineering</p>
                  </div>
                </CardContent>
              </Card>
            </GSAPReveal>

            <GSAPReveal animation="slide-up" delay={0.2}>
              <Card className="h-full">
                <CardContent className="flex h-full flex-col justify-between p-6">
                  <div>
                    <Quote className="mb-4 h-8 w-8 text-[hsl(0,76%,40%)]/40" />
                    <p className="mb-4 italic text-muted-foreground">
                      "The Annual Scholarship Conference was an incredible networking opportunity. I connected with
                      mentors who have helped guide my academic journey and career path."
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Omar Khalidi</p>
                    <p className="text-sm text-muted-foreground">Bachelor's Student, Mechanical Engineering</p>
                  </div>
                </CardContent>
              </Card>
            </GSAPReveal>

            <GSAPReveal animation="slide-up" delay={0.3}>
              <Card className="h-full">
                <CardContent className="flex h-full flex-col justify-between p-6">
                  <div>
                    <Quote className="mb-4 h-8 w-8 text-[hsl(120,61%,34%)]/40" />
                    <p className="mb-4 italic text-muted-foreground">
                      "The cultural exchange festival was a highlight of my year. It gave me a chance to share my
                      heritage with the local community and feel connected to home while studying abroad."
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Nour Al-Jabari</p>
                    <p className="text-sm text-muted-foreground">PhD Student, Biochemistry</p>
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
              <h2 className="mt-2 text-2xl font-bold tracking-tighter sm:text-3xl">Join Our Upcoming Events</h2>
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
