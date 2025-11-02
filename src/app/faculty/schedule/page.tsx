import FacultySidebar from "@/components/FacultySidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"

export default function FacultySchedulePage() {
  const schedule = [
    {
      day: "Monday",
      classes: [
        { time: "9:00 AM - 10:30 AM", course: "CS101", room: "Room 301", building: "Science Building" },
        { time: "11:00 AM - 12:30 PM", course: "CS301", room: "Room 405", building: "Tech Center" },
        { time: "2:00 PM - 3:00 PM", course: "Office Hours", room: "Office 210", building: "Faculty Wing" }
      ]
    },
    {
      day: "Tuesday",
      classes: [
        { time: "2:00 PM - 3:30 PM", course: "CS201", room: "Room 302", building: "Science Building" },
        { time: "4:00 PM - 5:30 PM", course: "CS401", room: "Room 501", building: "Tech Center" }
      ]
    },
    {
      day: "Wednesday",
      classes: [
        { time: "9:00 AM - 10:30 AM", course: "CS101", room: "Room 301", building: "Science Building" },
        { time: "11:00 AM - 12:30 PM", course: "CS301", room: "Room 405", building: "Tech Center" },
        { time: "3:00 PM - 4:00 PM", course: "Faculty Meeting", room: "Conference Room", building: "Admin Building" }
      ]
    },
    {
      day: "Thursday",
      classes: [
        { time: "2:00 PM - 3:30 PM", course: "CS201", room: "Room 302", building: "Science Building" },
        { time: "4:00 PM - 5:30 PM", course: "CS401", room: "Room 501", building: "Tech Center" }
      ]
    },
    {
      day: "Friday",
      classes: [
        { time: "9:00 AM - 10:30 AM", course: "CS101", room: "Room 301", building: "Science Building" },
        { time: "1:00 PM - 2:30 PM", course: "CS501", room: "Lab 101", building: "AI Research Center" },
        { time: "3:00 PM - 5:00 PM", course: "Office Hours", room: "Office 210", building: "Faculty Wing" }
      ]
    }
  ]

  return (
    <div className="flex min-h-screen bg-background">
      <FacultySidebar />
      <main className="flex-1 lg:ml-64 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Teaching Schedule</h1>
            <p className="text-muted-foreground mt-2">Your weekly class schedule and appointments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Classes This Week</CardDescription>
                <CardTitle className="text-3xl">15</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Including office hours</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Office Hours</CardDescription>
                <CardTitle className="text-3xl">6</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Hours per week</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Upcoming Meetings</CardDescription>
                <CardTitle className="text-3xl">2</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Faculty meetings scheduled</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {schedule.map((day) => (
              <Card key={day.day}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    {day.day}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {day.classes.map((classItem, index) => (
                    <div key={index} className="flex items-start justify-between p-4 border rounded-lg">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge>{classItem.course}</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {classItem.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {classItem.room}, {classItem.building}
                          </span>
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
