import FacultyLayout from "@/components/FacultyLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ClipboardList, Calendar, AlertCircle } from "lucide-react"

export default function FacultyGradingPage() {
  const pendingGrades = [
    {
      id: 1,
      course: "CS101 - Introduction to Computer Science",
      assignment: "Midterm Exam",
      submissions: 45,
      dueDate: "2024-11-15",
      priority: "High"
    },
    {
      id: 2,
      course: "CS201 - Data Structures and Algorithms",
      assignment: "Programming Assignment 3",
      submissions: 38,
      dueDate: "2024-11-18",
      priority: "Medium"
    },
    {
      id: 3,
      course: "CS301 - Database Management Systems",
      assignment: "Project Proposal",
      submissions: 42,
      dueDate: "2024-11-20",
      priority: "Medium"
    },
    {
      id: 4,
      course: "CS401 - Software Engineering",
      assignment: "Team Project Phase 2",
      submissions: 35,
      dueDate: "2024-11-22",
      priority: "Low"
    },
    {
      id: 5,
      course: "CS501 - Artificial Intelligence",
      assignment: "Research Paper Review",
      submissions: 27,
      dueDate: "2024-11-25",
      priority: "Low"
    }
  ]

  return (
    <FacultyLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Grading</h1>
          <p className="text-muted-foreground mt-2">Review and grade student submissions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Pending Submissions</CardDescription>
              <CardTitle className="text-3xl">187</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Awaiting your review</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Graded This Week</CardDescription>
              <CardTitle className="text-3xl">56</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Average grade: 82%</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Due This Week</CardDescription>
              <CardTitle className="text-3xl">3</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Grading deadlines</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Pending Assignments</CardTitle>
            <CardDescription>Submissions waiting for your review</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {pendingGrades.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <ClipboardList className="h-4 w-4 text-muted-foreground" />
                    <h3 className="font-semibold">{item.assignment}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.course}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{item.submissions} submissions</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Due: {item.dueDate}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={item.priority === "High" ? "destructive" : "secondary"}>
                    {item.priority}
                  </Badge>
                  <Button>Grade Now</Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <CardTitle className="text-orange-900 dark:text-orange-100">Grading Reminders</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-orange-800 dark:text-orange-200 space-y-2">
            <p className="text-sm">• Midterm grades due by November 20th</p>
            <p className="text-sm">• Final project grading rubric needs to be published</p>
            <p className="text-sm">• 3 grade appeals pending review</p>
          </CardContent>
        </Card>
      </div>
    </FacultyLayout>
  )
}