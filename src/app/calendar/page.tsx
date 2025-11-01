"use client"

import DashboardSidebar from "@/components/DashboardSidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

export default function CalendarPage() {
  const calendarEvents = [
    { date: "Apr 1, 2024", event: "Course Registration Opens", type: "important" },
    { date: "Apr 15, 2024", event: "Last Day to Drop Classes", type: "deadline" },
    { date: "May 1, 2024", event: "Spring Break Begins", type: "event" },
    { date: "May 10, 2024", event: "Final Exams Begin", type: "exam" },
    { date: "May 17, 2024", event: "Final Exams End", type: "exam" },
    { date: "May 20, 2024", event: "Commencement Ceremony", type: "event" },
    { date: "Jun 1, 2024", event: "Summer Session Begins", type: "important" },
    { date: "Aug 15, 2024", event: "Fall Registration Closes", type: "deadline" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      
      <main className="lg:ml-64 p-4 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold mb-2">Academic Calendar</h1>
            <p className="text-muted-foreground">Important dates and deadlines for the academic year</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Spring 2024 Calendar
              </CardTitle>
              <CardDescription>Key academic dates and deadlines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {calendarEvents.map((event, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex-shrink-0 w-16 text-center">
                      <p className="text-xs font-semibold text-muted-foreground uppercase">
                        {event.date.split(',')[0]}
                      </p>
                      <p className="text-2xl font-bold">
                        {event.date.split(' ')[1].replace(',', '')}
                      </p>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{event.event}</h4>
                      <Badge 
                        variant="outline" 
                        className={
                          event.type === "important" ? "bg-blue-50 text-blue-700 border-blue-200 mt-2" :
                          event.type === "deadline" ? "bg-red-50 text-red-700 border-red-200 mt-2" :
                          event.type === "exam" ? "bg-orange-50 text-orange-700 border-orange-200 mt-2" :
                          "bg-green-50 text-green-700 border-green-200 mt-2"
                        }
                      >
                        {event.type}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Spring Semester</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Start Date</span>
                    <span className="font-medium">Jan 15, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">End Date</span>
                    <span className="font-medium">May 10, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">16 weeks</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Fall Registration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Opens</span>
                    <span className="font-medium">Apr 1, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Closes</span>
                    <span className="font-medium">Aug 15, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Priority</span>
                    <span className="font-medium">By Year</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Final Exams</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Start Date</span>
                    <span className="font-medium">May 10, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">End Date</span>
                    <span className="font-medium">May 17, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">1 week</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
