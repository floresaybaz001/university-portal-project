import AdminLayout from "@/components/AdminLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, Megaphone, Calendar, Eye } from "lucide-react"

export default function AdminAnnouncementsPage() {
  const announcements = [
    { 
      id: 1, 
      title: "Fall Semester Registration Now Open", 
      content: "Students can now register for Fall 2025 courses. Priority registration begins November 1st based on credit hours.",
      date: "2024-10-28", 
      author: "Admin Office",
      audience: "All Students",
      status: "Published",
      views: 1247
    },
    { 
      id: 2, 
      title: "Campus Facility Maintenance Notice", 
      content: "The main library will be closed for maintenance from November 5-7. Digital resources remain available 24/7.",
      date: "2024-10-25", 
      author: "Facilities Management",
      audience: "Everyone",
      status: "Published",
      views: 892
    },
    { 
      id: 3, 
      title: "New Research Grant Opportunities", 
      content: "Faculty members are invited to apply for the annual research grant program. Application deadline: December 15th.",
      date: "2024-10-22", 
      author: "Research Office",
      audience: "Faculty",
      status: "Published",
      views: 234
    },
    { 
      id: 4, 
      title: "Upcoming Parent-Teacher Conference", 
      content: "Schedule your conference appointments through the parent portal. Conferences will be held November 15-16.",
      date: "2024-10-20", 
      author: "Academic Affairs",
      audience: "Parents",
      status: "Published",
      views: 456
    },
    { 
      id: 5, 
      title: "Holiday Break Schedule Announcement", 
      content: "Classes resume on January 15th, 2025. Campus offices will operate on reduced hours during the break.",
      date: "2024-10-18", 
      author: "Admin Office",
      audience: "Everyone",
      status: "Scheduled",
      views: 0
    },
  ]

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Announcements</h1>
            <p className="text-muted-foreground mt-2">Manage system-wide announcements and notifications</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Announcement
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total Announcements</CardDescription>
              <CardTitle className="text-3xl">87</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">All time</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Published</CardDescription>
              <CardTitle className="text-3xl">52</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Currently active</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Scheduled</CardDescription>
              <CardTitle className="text-3xl">8</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Future posts</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total Views</CardDescription>
              <CardTitle className="text-3xl">12.5K</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Announcements</CardTitle>
            <CardDescription>Manage your published and scheduled posts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3">
                        <Megaphone className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold text-lg">{announcement.title}</h3>
                        <Badge variant={announcement.status === "Published" ? "default" : "secondary"}>
                          {announcement.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground pl-8">{announcement.content}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground pl-8">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {announcement.date}
                        </span>
                        <span>By {announcement.author}</span>
                        <span>Audience: {announcement.audience}</span>
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {announcement.views} views
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm">Delete</Button>
                    </div>
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