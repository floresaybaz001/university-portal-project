import ParentLayout from "@/components/ParentLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ParentProgressPage() {
  const progress = [
    { subject: "Mathematics", current: 92, previous: 88, trend: "up" },
    { subject: "English Literature", current: 87, previous: 89, trend: "down" },
    { subject: "Computer Science", current: 95, previous: 93, trend: "up" },
    { subject: "Physics", current: 84, previous: 86, trend: "down" },
    { subject: "History", current: 90, previous: 87, trend: "up" },
    { subject: "Spanish", current: 88, previous: 88, trend: "stable" },
  ]

  const achievements = [
    { title: "Honor Roll", date: "Fall 2024", description: "Achieved GPA above 3.5" },
    { title: "Math Competition - 2nd Place", date: "October 2024", description: "Regional mathematics competition" },
    { title: "Perfect Attendance", date: "September 2024", description: "No absences or tardies" },
  ]

  return (
    <ParentLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Academic Progress</h1>
          <p className="text-muted-foreground mt-2">Track your child's academic performance and achievements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Overall GPA</CardDescription>
              <CardTitle className="text-3xl">3.85</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 text-sm text-green-600">
                <TrendingUp className="h-4 w-4" />
                <span>+0.12 from last semester</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Class Rank</CardDescription>
              <CardTitle className="text-3xl">15/245</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Top 6% of class</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Credits Earned</CardDescription>
              <CardTitle className="text-3xl">42</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Of 120 required</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Attendance Rate</CardDescription>
              <CardTitle className="text-3xl">96%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-green-600">Excellent attendance</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Subject Performance</CardTitle>
            <CardDescription>Current grades compared to previous semester</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {progress.map((item) => (
                <div key={item.subject} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-medium">{item.subject}</span>
                      {item.trend === "up" && (
                        <span className="flex items-center gap-1 text-sm text-green-600">
                          <TrendingUp className="h-4 w-4" />
                          +{item.current - item.previous}
                        </span>
                      )}
                      {item.trend === "down" && (
                        <span className="flex items-center gap-1 text-sm text-red-600">
                          <TrendingDown className="h-4 w-4" />
                          {item.current - item.previous}
                        </span>
                      )}
                    </div>
                    <span className="text-lg font-semibold">{item.current}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        item.current >= 90 ? "bg-green-500" : 
                        item.current >= 80 ? "bg-blue-500" : 
                        "bg-yellow-500"
                      }`}
                      style={{ width: `${item.current}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Previous: {item.previous}%</span>
                    <span>Current: {item.current}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Recent Achievements
              </CardTitle>
              <CardDescription>Notable accomplishments this year</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>
                      <p className="text-xs text-muted-foreground mt-2">{achievement.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Academic Goals</CardTitle>
              <CardDescription>Progress toward set objectives</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Maintain 3.8+ GPA</span>
                  <span className="text-green-600 font-medium">Achieved ✓</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: "100%" }} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Complete AP Courses</span>
                  <span className="font-medium">3/4</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: "75%" }} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Volunteer Hours</span>
                  <span className="font-medium">38/50</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: "76%" }} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>College Applications</span>
                  <span className="font-medium">0/6</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500" style={{ width: "0%" }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ParentLayout>
  )
}