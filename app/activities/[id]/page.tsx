"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Users, BookOpen, Presentation, Globe, Handshake, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ActivityGallery } from "@/components/activity-gallery"
import { activitiesData, type Activity } from "@/app/activities/data"

export default function ActivityPage() {
  const params = useParams()
  const activityId = parseInt(params.id as string)
  const activity = activitiesData.find((a: Activity) => a.id === activityId)

  if (!activity) {
    return (
      <div className="container px-4 md:px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Activity Not Found</h1>
          <p className="mt-4 text-muted-foreground">The activity you're looking for doesn't exist.</p>
          <Link href="/activities">
            <Button className="mt-6">Return to Activities</Button>
          </Link>
        </div>
      </div>
    )
  }

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
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={activity.image || "/placeholder.svg"}
            alt={activity.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        <div className="container relative h-full px-4 md:px-6">
          <div className="flex h-full flex-col justify-end pb-16">
            <Link href="/activities">
              <Button variant="ghost" className="mb-8 w-fit text-white hover:bg-white/20">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Activities
              </Button>
            </Link>
            <div className="space-y-4">
              <Badge variant="outline" className="bg-[hsl(120,61%,34%)]/10 text-[hsl(120,61%,34%)] text-base px-3 py-1">
                {getActivityIcon(activity.category)}
                {activity.category}
              </Badge>
              <h1 className="text-4xl font-bold text-white sm:text-5xl">{activity.title}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            {/* Gallery Section */}
            <div className="mb-16">
              <ActivityGallery activity={activity} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 