import FacultySidebar from "@/components/FacultySidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Calendar, Award } from "lucide-react"

export default function FacultyProfilePage() {
  return (
    <div className="flex min-h-screen bg-background">
      <FacultySidebar />
      <main className="flex-1 lg:ml-64 p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold">My Profile</h1>
            <p className="text-muted-foreground mt-2">Manage your faculty information and credentials</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Your basic profile details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Jane" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Smith" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="title">Academic Title</Label>
                <Input id="title" defaultValue="Associate Professor" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Input id="department" defaultValue="Computer Science" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Biography</Label>
                <Textarea 
                  id="bio" 
                  rows={4}
                  defaultValue="Dr. Jane Smith is an Associate Professor in the Computer Science Department with over 15 years of teaching experience. Her research interests include artificial intelligence, machine learning, and data science."
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>How students and colleagues can reach you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <Input id="email" type="email" defaultValue="jane.smith@university.edu" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <Input id="phone" type="tel" defaultValue="(555) 987-6543" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="office">Office Location</Label>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <Input id="office" defaultValue="Faculty Wing, Office 210" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="officeHours">Office Hours</Label>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <Input id="officeHours" defaultValue="Monday & Friday 2:00 PM - 4:00 PM" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Academic Credentials</CardTitle>
              <CardDescription>Your qualifications and achievements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Education</Label>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 p-3 border rounded-lg">
                    <Award className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Ph.D. in Computer Science</p>
                      <p className="text-sm text-muted-foreground">Stanford University, 2009</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 border rounded-lg">
                    <Award className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">M.S. in Computer Science</p>
                      <p className="text-sm text-muted-foreground">MIT, 2005</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 border rounded-lg">
                    <Award className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">B.S. in Computer Engineering</p>
                      <p className="text-sm text-muted-foreground">UC Berkeley, 2003</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="research">Research Interests</Label>
                <Textarea 
                  id="research" 
                  rows={3}
                  defaultValue="Artificial Intelligence, Machine Learning, Natural Language Processing, Computer Vision"
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button>Save Changes</Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </div>
      </main>
    </div>
  )
}
