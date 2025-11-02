import FacultySidebar from "@/components/FacultySidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Upload, Folder } from "lucide-react"

export default function FacultyResourcesPage() {
  const resources = [
    {
      category: "Course Materials",
      items: [
        { name: "CS101 Syllabus Fall 2024", type: "PDF", size: "2.5 MB", date: "2024-09-01" },
        { name: "Lecture Slides - Week 1-5", type: "ZIP", size: "45.2 MB", date: "2024-10-15" },
        { name: "Programming Assignment Templates", type: "ZIP", size: "5.8 MB", date: "2024-09-15" }
      ]
    },
    {
      category: "Exam Resources",
      items: [
        { name: "Midterm Exam Questions", type: "PDF", size: "1.2 MB", date: "2024-10-20" },
        { name: "Answer Keys - Practice Tests", type: "PDF", size: "850 KB", date: "2024-10-18" },
        { name: "Grading Rubrics", type: "PDF", size: "500 KB", date: "2024-09-10" }
      ]
    },
    {
      category: "Teaching Materials",
      items: [
        { name: "Lab Exercise Instructions", type: "PDF", size: "3.4 MB", date: "2024-09-20" },
        { name: "Video Lectures", type: "Folder", size: "1.2 GB", date: "2024-10-01" },
        { name: "Reference Materials", type: "ZIP", size: "25.5 MB", date: "2024-09-05" }
      ]
    }
  ]

  return (
    <div className="flex min-h-screen bg-background">
      <FacultySidebar />
      <main className="flex-1 lg:ml-64 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Resources</h1>
              <p className="text-muted-foreground mt-2">Manage your teaching materials and documents</p>
            </div>
            <Button>
              <Upload className="h-4 w-4 mr-2" />
              Upload Resource
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Total Files</CardDescription>
                <CardTitle className="text-3xl">127</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Across all courses</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Storage Used</CardDescription>
                <CardTitle className="text-3xl">2.8 GB</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Of 10 GB available</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Recent Uploads</CardDescription>
                <CardTitle className="text-3xl">12</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">This month</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {resources.map((category) => (
              <Card key={category.category}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Folder className="h-5 w-5" />
                    {category.category}
                  </CardTitle>
                  <CardDescription>{category.items.length} items</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {category.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent transition-colors">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.type} • {item.size} • Uploaded {item.date}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
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
