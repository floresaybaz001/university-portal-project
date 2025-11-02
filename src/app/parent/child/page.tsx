import ParentLayout from "@/components/ParentLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { User, Mail, Phone, Calendar, MapPin, GraduationCap } from "lucide-react"

export default function ParentChildPage() {
  return (
    <ParentLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Child Profile</h1>
          <p className="text-muted-foreground mt-2">View your child's information and academic details</p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <CardTitle className="text-2xl">Emily Johnson</CardTitle>
                <CardDescription>Student ID: STU789456</CardDescription>
              </div>
              <Badge className="text-base px-3 py-1">Active</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Grade Level</p>
                    <p className="font-medium">10th Grade</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Date of Birth</p>
                    <p className="font-medium">March 15, 2008</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Major</p>
                    <p className="font-medium">Computer Science</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">emily.johnson@university.edu</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">(555) 234-5678</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Homeroom</p>
                    <p className="font-medium">Room 305, Science Building</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Academic Overview</CardTitle>
            <CardDescription>Current semester performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 border rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Current GPA</p>
                <p className="text-3xl font-bold">3.85</p>
                <p className="text-sm text-green-600 mt-1">Above average</p>
              </div>
              
              <div className="p-4 border rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Attendance</p>
                <p className="text-3xl font-bold">96%</p>
                <p className="text-sm text-green-600 mt-1">Excellent</p>
              </div>

              <div className="p-4 border rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Current Courses</p>
                <p className="text-3xl font-bold">6</p>
                <p className="text-sm text-muted-foreground mt-1">Full-time student</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Guardian Information</CardTitle>
            <CardDescription>Primary contact details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-sm text-muted-foreground">Primary Guardian</Label>
                <p className="font-medium">Sarah Johnson</p>
              </div>

              <div className="space-y-2">
                <Label className="text-sm text-muted-foreground">Relationship</Label>
                <p className="font-medium">Mother</p>
              </div>

              <div className="space-y-2">
                <Label className="text-sm text-muted-foreground">Email</Label>
                <p className="font-medium">sarah.johnson@gmail.com</p>
              </div>

              <div className="space-y-2">
                <Label className="text-sm text-muted-foreground">Phone</Label>
                <p className="font-medium">(555) 123-4567</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Emergency Contacts</CardTitle>
            <CardDescription>Additional contacts on file</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">David Johnson</p>
                  <p className="text-sm text-muted-foreground">Father • (555) 234-5678</p>
                </div>
                <Badge variant="outline">Secondary</Badge>
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Margaret Wilson</p>
                  <p className="text-sm text-muted-foreground">Grandmother • (555) 345-6789</p>
                </div>
                <Badge variant="outline">Emergency</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button>Edit Profile</Button>
          <Button variant="outline">Contact Advisor</Button>
        </div>
      </div>
    </ParentLayout>
  )
}

function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return <label className={className}>{children}</label>
}