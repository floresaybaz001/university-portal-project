"use client"

import ParentLayout from "@/components/ParentLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, BookOpen, Clock, Award, Calendar, Bell, CreditCard, AlertCircle } from "lucide-react"

export default function ParentDashboardPage() {
  const upcomingEvents = [
    { id: 1, event: "Parent-Teacher Conference", date: "Dec 15, 2024", time: "3:00 PM" },
    { id: 2, event: "Final Exams Begin", date: "Dec 18, 2024", time: "All Day" },
    { id: 3, event: "Winter Break Starts", date: "Dec 22, 2024", time: "All Day" },
  ]

  const recentAnnouncements = [
    { id: 1, title: "Mid-semester progress reports available", priority: "high", time: "2 hours ago" },
    { id: 2, title: "School holiday schedule updated", priority: "medium", time: "1 day ago" },
    { id: 3, title: "Fee payment reminder", priority: "high", time: "2 days ago" },
  ]

  return (
    <ParentLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome, Sarah Johnson!</h1>
          <p className="text-muted-foreground">Monitor Emily's academic progress and activities.</p>
        </div>

        {/* Child Overview Card */}
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">Emily Johnson</CardTitle>
                <CardDescription className="text-base">Student ID: STU123456 • Grade 10</CardDescription>
              </div>
              <Button>View Full Profile</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="text-center p-4 bg-card rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Current GPA</p>
                <p className="text-2xl font-bold">3.85</p>
              </div>
              <div className="text-center p-4 bg-card rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Attendance</p>
                <p className="text-2xl font-bold">96%</p>
              </div>
              <div className="text-center p-4 bg-card rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Active Courses</p>
                <p className="text-2xl font-bold">6</p>
              </div>
              <div className="text-center p-4 bg-card rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Balance Due</p>
                <p className="text-2xl font-bold">$450</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Academic Performance</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Excellent</div>
              <p className="text-xs text-muted-foreground">+0.15 GPA improvement</p>
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
              <CardTitle className="text-sm font-medium">Latest Grade</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">A</div>
              <p className="text-xs text-muted-foreground">Mathematics exam</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Achievements</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">This semester</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Upcoming Events
                  </CardTitle>
                  <CardDescription>Important dates and activities</CardDescription>
                </div>
                <Button variant="ghost" size="sm">View Calendar</Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-center gap-4 p-3 bg-muted rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium">{event.event}</h4>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-sm">{event.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Announcements */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Recent Announcements
                  </CardTitle>
                  <CardDescription>School notifications</CardDescription>
                </div>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentAnnouncements.map((announcement) => (
                <div key={announcement.id} className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0">
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-medium text-sm">{announcement.title}</h4>
                      <Badge 
                        variant={announcement.priority === "high" ? "destructive" : "secondary"}
                        className="text-xs"
                      >
                        {announcement.priority}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{announcement.time}</p>
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
            <CardDescription>Common parent portal tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Button variant="outline" className="h-auto flex-col gap-2 p-4">
                <TrendingUp className="h-6 w-6" />
                <span>View Progress</span>
              </Button>
              <Button variant="outline" className="h-auto flex-col gap-2 p-4">
                <BookOpen className="h-6 w-6" />
                <span>Grades & Courses</span>
              </Button>
              <Button variant="outline" className="h-auto flex-col gap-2 p-4">
                <CreditCard className="h-6 w-6" />
                <span>Pay Fees</span>
              </Button>
              <Button variant="outline" className="h-auto flex-col gap-2 p-4">
                <Bell className="h-6 w-6" />
                <span>Notifications</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Alert Banner */}
        <Card className="border-destructive/50 bg-destructive/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-destructive" />
              <div className="flex-1">
                <h4 className="font-medium">Fee Payment Due</h4>
                <p className="text-sm text-muted-foreground">Semester fees of $450 are due by December 15, 2024</p>
              </div>
              <Button variant="destructive">Pay Now</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </ParentLayout>
  )
}