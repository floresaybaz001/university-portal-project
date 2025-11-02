import FacultySidebar from "@/components/FacultySidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Clock, FileText } from "lucide-react"

export default function FacultyCoursesPage() {
  const courses = [
    {
      id: "CS101",
      name: "Introduction to Computer Science",
      students: 45,
      schedule: "Mon, Wed, Fri 9:00 AM",
      status: "Active",
      semester: "Fall 2024"
    },
    {
      id: "CS201",
      name: "Data Structures and Algorithms",
      students: 38,
      schedule: "Tue, Thu 2:00 PM",
      status: "Active",
      semester: "Fall 2024"
    },
    {
      id: "CS301",
      name: "Database Management Systems",
      students: 42,
      schedule: "Mon, Wed 11:00 AM",
      status: "Active",
      semester: "Fall 2024"
    },
    {
      id: "CS401",
      name: "Software Engineering",
      students: 35,
      schedule: "Tue, Thu 4:00 PM",
      status: "Active",
      semester: "Fall 2024"
    },
    {
      id: "CS501",
      name: "Artificial Intelligence",
      students: 27,
      schedule: "Fri 1:00 PM",
      status: "Active",
      semester: "Fall 2024"
    }
  ]

  return (
    <div className="flex min-h-screen bg-background">
      <FacultySidebar />
      <main className="flex-1 lg:ml-64 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold">My Courses</h1>
            <p className="text-muted-foreground mt-2">Manage your teaching courses and materials</p>
          </div>

          <div className="grid gap-6">
            {courses.map((course) => (
              <Card key={course.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-xl">{course.name}</CardTitle>
                      <CardDescription>Course ID: {course.id} • {course.semester}</CardDescription>
                    </div>
                    <Badge>{course.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{course.students} Students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{course.schedule}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      Course Materials
                    </Button>
                    <Button variant="outline" size="sm">
                      <Users className="h-4 w-4 mr-2" />
                      View Students
                    </Button>
                    <Button variant="outline" size="sm">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Assignments
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
