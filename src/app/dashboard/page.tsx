"use client"

import DashboardSidebar from "@/components/DashboardSidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calendar, Bell, TrendingUp, Award, Clock, FileText, CreditCard } from "lucide-react"

export default function DashboardPage() {
  const announcements = [
    { id: 1, title: "Final Exams Schedule Released", date: "2 hours ago", type: "urgent" },
    { id: 2, title: "Library Hours Extended During Finals", date: "1 day ago", type: "info" },
    { id: 3, title: "Guest Lecture: AI in Medicine", date: "2 days ago", type: "event" },
  ]

  const upcomingClasses = [
    { id: 1, course: "Computer Science 101", time: "10:00 AM", room: "Room 204" },
    { id: 2, course: "Mathematics 201", time: "2:00 PM", room: "Room 105" },
    { id: 3, course: "Physics Lab", time: "4:00 PM", room: "Lab 3" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      
      <main className="lg:ml-64 p-4 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
            <p className="text-muted-foreground">Here's what's happening with your academics today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Current GPA</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.85</div>
                <p className="text-xs text-muted-foreground">+0.15 from last semester</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">6</div>
                <p className="text-xs text-muted-foreground">18 credit hours</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Assignments Due</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">This week</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Completed Credits</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">84</div>
                <p className="text-xs text-muted-foreground">36 credits remaining</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Announcements */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="h-5 w-5" />
                      Recent Announcements
                    </CardTitle>
                    <CardDescription>Stay updated with campus news</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm">View All</Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0">
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-medium text-sm">{announcement.title}</h4>
                        <Badge variant={announcement.type === "urgent" ? "destructive" : "secondary"} className="text-xs">
                          {announcement.type}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{announcement.date}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Today's Schedule */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Today's Schedule
                    </CardTitle>
                    <CardDescription>Your classes for today</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm">Full Schedule</Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingClasses.map((classItem) => (
                  <div key={classItem.id} className="flex items-center gap-4 p-3 bg-muted rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">{classItem.course}</h4>
                      <p className="text-sm text-muted-foreground">{classItem.room}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-sm">{classItem.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Frequently accessed services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Button variant="outline" className="h-auto flex-col gap-2 p-4">
                  <BookOpen className="h-6 w-6" />
                  <span>Course Registration</span>
                </Button>
                <Button variant="outline" className="h-auto flex-col gap-2 p-4">
                  <FileText className="h-6 w-6" />
                  <span>Request Transcript</span>
                </Button>
                <Button variant="outline" className="h-auto flex-col gap-2 p-4">
                  <CreditCard className="h-6 w-6" />
                  <span>Pay Fees</span>
                </Button>
                <Button variant="outline" className="h-auto flex-col gap-2 p-4">
                  <Calendar className="h-6 w-6" />
                  <span>View Calendar</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}