import FacultySidebar from "@/components/FacultySidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, Mail, Phone } from "lucide-react"

export default function FacultyStudentsPage() {
  const students = [
    {
      id: "STU001",
      name: "John Anderson",
      email: "john.anderson@university.edu",
      phone: "(555) 123-4567",
      courses: ["CS101", "CS201"],
      gpa: 3.85,
      status: "Active"
    },
    {
      id: "STU002",
      name: "Emma Williams",
      email: "emma.williams@university.edu",
      phone: "(555) 234-5678",
      courses: ["CS101", "CS301"],
      gpa: 3.92,
      status: "Active"
    },
    {
      id: "STU003",
      name: "Michael Brown",
      email: "michael.brown@university.edu",
      phone: "(555) 345-6789",
      courses: ["CS201", "CS401"],
      gpa: 3.67,
      status: "Active"
    },
    {
      id: "STU004",
      name: "Sophia Davis",
      email: "sophia.davis@university.edu",
      phone: "(555) 456-7890",
      courses: ["CS301", "CS501"],
      gpa: 3.95,
      status: "Active"
    },
    {
      id: "STU005",
      name: "James Wilson",
      email: "james.wilson@university.edu",
      phone: "(555) 567-8901",
      courses: ["CS101", "CS401"],
      gpa: 3.78,
      status: "Active"
    }
  ]

  return (
    <div className="flex min-h-screen bg-background">
      <FacultySidebar />
      <main className="flex-1 lg:ml-64 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Students</h1>
            <p className="text-muted-foreground mt-2">View and manage your students</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search students by name or ID..." 
                className="pl-10"
              />
            </div>
          </div>

          <div className="grid gap-4">
            {students.map((student) => (
              <Card key={student.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle>{student.name}</CardTitle>
                      <CardDescription>Student ID: {student.id}</CardDescription>
                    </div>
                    <Badge>{student.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{student.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{student.phone}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium">GPA: </span>
                      <span className="text-sm">{student.gpa}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Courses: </span>
                      <span className="text-sm">{student.courses.join(", ")}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm">View Profile</Button>
                    <Button variant="outline" size="sm">Send Message</Button>
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
