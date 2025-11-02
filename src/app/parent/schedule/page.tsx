import ParentSidebar from "@/components/ParentSidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Bell } from "lucide-react"

export default function ParentSchedulePage() {
  const schedule = [
    {
      day: "Monday",
      classes: [
        { time: "9:00 AM - 9:50 AM", subject: "Mathematics", room: "Room 301", teacher: "Dr. Wilson" },
        { time: "10:00 AM - 10:50 AM", subject: "English", room: "Room 205", teacher: "Prof. Adams" },
        { time: "11:00 AM - 11:50 AM", subject: "Spanish", room: "Room 108", teacher: "Prof. Garcia" },
        { time: "1:00 PM - 1:50 PM", subject: "History", room: "Room 402", teacher: "Prof. Davis" },
        { time: "2:00 PM - 2:50 PM", subject: "Computer Science", room: "Lab 101", teacher: "Dr. Smith" }
      ]
    },
    {
      day: "Tuesday",
      classes: [
        { time: "9:00 AM - 9:50 AM", subject: "Physics", room: "Lab 201", teacher: "Dr. Brown" },
        { time: "11:00 AM - 11:50 AM", subject: "English", room: "Room 205", teacher: "Prof. Adams" },
        { time: "2:00 PM - 2:50 PM", subject: "Physical Education", room: "Gym", teacher: "Coach Martinez" }
      ]
    },
    {
      day: "Wednesday",
      classes: [
        { time: "9:00 AM - 9:50 AM", subject: "Mathematics", room: "Room 301", teacher: "Dr. Wilson" },
        { time: "10:00 AM - 10:50 AM", subject: "English", room: "Room 205", teacher: "Prof. Adams" },
        { time: "11:00 AM - 11:50 AM", subject: "Spanish", room: "Room 108", teacher: "Prof. Garcia" },
        { time: "1:00 PM - 1:50 PM", subject: "Computer Science", room: "Lab 101", teacher: "Dr. Smith" }
      ]
    },
    {
      day: "Thursday",
      classes: [
        { time: "9:00 AM - 9:50 AM", subject: "Physics", room: "Lab 201", teacher: "Dr. Brown" },
        { time: "11:00 AM - 11:50 AM", subject: "English", room: "Room 205", teacher: "Prof. Adams" },
        { time: "1:00 PM - 1:50 PM", subject: "History", room: "Room 402", teacher: "Prof. Davis" },
        { time: "2:00 PM - 2:50 PM", subject: "Physical Education", room: "Gym", teacher: "Coach Martinez" }
      ]
    },
    {
      day: "Friday",
      classes: [
        { time: "9:00 AM - 9:50 AM", subject: "Mathematics", room: "Room 301", teacher: "Dr. Wilson" },
        { time: "11:00 AM - 11:50 AM", subject: "Spanish", room: "Room 108", teacher: "Prof. Garcia" },
        { time: "1:00 PM - 1:50 PM", subject: "Computer Science", room: "Lab 101", teacher: "Dr. Smith" }
      ]
    }
  ]

  const upcomingEvents = [
    { title: "Parent-Teacher Conference", date: "2024-11-15", time: "3:00 PM", location: "Room 205" },
    { title: "Math Exam", date: "2024-11-18", time: "9:00 AM", location: "Room 301" },
    { title: "Science Fair", date: "2024-11-22", time: "10:00 AM", location: "Main Auditorium" },
    { title: "History Project Due", date: "2024-11-25", time: "11:50 AM", location: "Room 402" },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      <ParentSidebar />
      <main className="flex-1 lg:ml-64 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Schedule & Events</h1>
            <p className="text-muted-foreground mt-2">View your child's class schedule and upcoming events</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Classes Per Week</CardDescription>
                <CardTitle className="text-3xl">24</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Across 6 subjects</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Upcoming Events</CardDescription>
                <CardTitle className="text-3xl">4</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Next 30 days</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Next Class</CardDescription>
                <CardTitle className="text-xl">Mathematics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Monday 9:00 AM</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Important dates and deadlines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                        <Bell className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{event.title}</h3>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {event.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {event.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {event.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Weekly Class Schedule</h2>
            {schedule.map((day) => (
              <Card key={day.day}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    {day.day}
                  </CardTitle>
                  <CardDescription>{day.classes.length} classes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {day.classes.map((classItem, index) => (
                    <div key={index} className="flex items-start justify-between p-4 border rounded-lg">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <Badge>{classItem.subject}</Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {classItem.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {classItem.room}
                          </span>
                          <span>Teacher: {classItem.teacher}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
