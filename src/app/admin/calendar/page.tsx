import AdminLayout from "@/components/AdminLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Plus, AlertCircle } from "lucide-react"

export default function AdminCalendarPage() {
  const events = [
    { id: 1, title: "Fall Semester Begins", date: "2024-09-01", type: "Semester", priority: "High" },
    { id: 2, title: "Last Day to Add/Drop Courses", date: "2024-09-15", type: "Deadline", priority: "High" },
    { id: 3, title: "Midterm Exams Week", date: "2024-10-14", type: "Exam", priority: "High" },
    { id: 4, title: "Fall Break", date: "2024-10-21", type: "Holiday", priority: "Medium" },
    { id: 5, title: "Registration for Spring Semester", date: "2024-11-01", type: "Registration", priority: "High" },
    { id: 6, title: "Thanksgiving Break", date: "2024-11-27", type: "Holiday", priority: "Medium" },
    { id: 7, title: "Last Day of Classes", date: "2024-12-10", type: "Semester", priority: "High" },
    { id: 8, title: "Final Exams Week", date: "2024-12-14", type: "Exam", priority: "High" },
    { id: 9, title: "Fall Semester Ends", date: "2024-12-20", type: "Semester", priority: "High" },
    { id: 10, title: "Spring Semester Begins", date: "2025-01-15", type: "Semester", priority: "High" },
  ]

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Academic Calendar</h1>
            <p className="text-muted-foreground mt-2">Manage important academic dates and events</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Event
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total Events</CardDescription>
              <CardTitle className="text-3xl">47</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">This academic year</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Upcoming Events</CardDescription>
              <CardTitle className="text-3xl">12</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Next 30 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Exam Periods</CardDescription>
              <CardTitle className="text-3xl">4</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">This semester</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Holidays</CardDescription>
              <CardTitle className="text-3xl">8</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Academic breaks</p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-blue-600" />
              <CardTitle className="text-blue-900 dark:text-blue-100">Important Reminders</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-blue-800 dark:text-blue-200 space-y-2">
            <p className="text-sm">• Spring semester registration opens November 1st</p>
            <p className="text-sm">• Final exam schedules must be published by November 15th</p>
            <p className="text-sm">• Grade submission deadline: December 23rd</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Academic Year Events</CardTitle>
            <CardDescription>Fall 2024 - Spring 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold">{event.title}</h3>
                        <Badge variant={event.priority === "High" ? "default" : "secondary"}>
                          {event.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="outline" size="sm" variant="ghost">Delete</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}