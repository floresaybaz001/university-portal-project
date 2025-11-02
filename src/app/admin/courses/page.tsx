import AdminSidebar from "@/components/AdminSidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, Plus, Users, BookOpen } from "lucide-react"

export default function AdminCoursesPage() {
  const courses = [
    { id: "CS101", name: "Introduction to Computer Science", instructor: "Dr. Jane Smith", students: 45, capacity: 50, status: "Active", semester: "Fall 2024" },
    { id: "CS201", name: "Data Structures and Algorithms", instructor: "Dr. Jane Smith", students: 38, capacity: 40, status: "Active", semester: "Fall 2024" },
    { id: "MATH101", name: "Calculus I", instructor: "Prof. Robert Wilson", students: 60, capacity: 60, status: "Full", semester: "Fall 2024" },
    { id: "ENG101", name: "English Composition", instructor: "Dr. Sarah Johnson", students: 35, capacity: 40, status: "Active", semester: "Fall 2024" },
    { id: "PHYS101", name: "Physics I", instructor: "Dr. Michael Brown", students: 42, capacity: 45, status: "Active", semester: "Fall 2024" },
    { id: "CHEM101", name: "General Chemistry", instructor: "Prof. Emily Davis", students: 48, capacity: 50, status: "Active", semester: "Fall 2024" },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />
      <main className="flex-1 lg:ml-64 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Course Management</h1>
              <p className="text-muted-foreground mt-2">Manage courses and curriculum</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Course
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Total Courses</CardDescription>
                <CardTitle className="text-3xl">348</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">All semesters</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Active Courses</CardDescription>
                <CardTitle className="text-3xl">156</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Current semester</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Full Courses</CardDescription>
                <CardTitle className="text-3xl">23</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">At capacity</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Total Enrollment</CardDescription>
                <CardTitle className="text-3xl">4,521</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Students enrolled</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search courses by name or code..." 
                className="pl-10"
              />
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>All Courses</CardTitle>
              <CardDescription>Current semester courses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {courses.map((course) => (
                  <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold">{course.name}</h3>
                        <Badge variant={course.status === "Full" ? "destructive" : "default"}>
                          {course.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <BookOpen className="h-3 w-3" />
                          {course.id}
                        </span>
                        <span>Instructor: {course.instructor}</span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {course.students}/{course.capacity} students
                        </span>
                        <span>{course.semester}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm">View</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
