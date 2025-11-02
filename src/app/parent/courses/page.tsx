import ParentLayout from "@/components/ParentLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, User, Clock } from "lucide-react"

export default function ParentCoursesPage() {
  const courses = [
    {
      code: "MATH301",
      name: "Advanced Calculus",
      instructor: "Dr. Robert Wilson",
      schedule: "Mon, Wed, Fri 9:00 AM",
      grade: "A",
      percentage: 92,
      credits: 4
    },
    {
      code: "ENG201",
      name: "English Literature",
      instructor: "Prof. Jennifer Adams",
      schedule: "Tue, Thu 11:00 AM",
      grade: "B+",
      percentage: 87,
      credits: 3
    },
    {
      code: "CS202",
      name: "Data Structures",
      instructor: "Dr. Jane Smith",
      schedule: "Mon, Wed 2:00 PM",
      grade: "A",
      percentage: 95,
      credits: 4
    },
    {
      code: "PHYS201",
      name: "Physics II",
      instructor: "Dr. Michael Brown",
      schedule: "Tue, Thu 9:00 AM",
      grade: "B",
      percentage: 84,
      credits: 4
    },
    {
      code: "HIST101",
      name: "World History",
      instructor: "Prof. Sarah Davis",
      schedule: "Wed, Fri 1:00 PM",
      grade: "A-",
      percentage: 90,
      credits: 3
    },
    {
      code: "SPAN201",
      name: "Spanish II",
      instructor: "Prof. Maria Garcia",
      schedule: "Mon, Wed, Fri 11:00 AM",
      grade: "B+",
      percentage: 88,
      credits: 3
    }
  ]

  return (
    <ParentLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Courses & Grades</h1>
          <p className="text-muted-foreground mt-2">View your child's enrolled courses and current grades</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Current Courses</CardDescription>
              <CardTitle className="text-3xl">6</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Fall 2024 semester</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Semester GPA</CardDescription>
              <CardTitle className="text-3xl">3.85</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-green-600">Above average</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Credit Hours</CardDescription>
              <CardTitle className="text-3xl">21</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Full-time student</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Highest Grade</CardDescription>
              <CardTitle className="text-3xl">95%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Data Structures</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Enrolled Courses</CardTitle>
            <CardDescription>Current semester course load and performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {courses.map((course) => (
                <div key={course.code} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold text-lg">{course.name}</h3>
                        <Badge 
                          variant={
                            course.percentage >= 90 ? "default" : 
                            course.percentage >= 80 ? "secondary" : 
                            "outline"
                          }
                        >
                          {course.grade}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground pl-8">
                        {course.code} • {course.credits} Credits
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">{course.percentage}%</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground pl-8">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{course.instructor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{course.schedule}</span>
                    </div>
                  </div>

                  <div className="mt-3 pl-8">
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          course.percentage >= 90 ? "bg-green-500" : 
                          course.percentage >= 80 ? "bg-blue-500" : 
                          "bg-yellow-500"
                        }`}
                        style={{ width: `${course.percentage}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex gap-2 mt-3 pl-8">
                    <Button variant="outline" size="sm">View Assignments</Button>
                    <Button variant="outline" size="sm">Contact Instructor</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </ParentLayout>
  )
}