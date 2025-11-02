import ParentLayout from "@/components/ParentLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bell, CheckCircle, AlertCircle, Info, Calendar } from "lucide-react"

export default function ParentNotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: "alert",
      title: "Fee Payment Due",
      message: "Spring semester deposit of $500 is due by December 1st, 2024",
      date: "2024-11-01",
      time: "2:30 PM",
      read: false
    },
    {
      id: 2,
      type: "info",
      title: "Parent-Teacher Conference Scheduled",
      message: "Your conference with Prof. Adams has been scheduled for November 15th at 3:00 PM",
      date: "2024-10-30",
      time: "10:15 AM",
      read: false
    },
    {
      id: 3,
      type: "success",
      title: "Excellent Performance",
      message: "Emily received an A on her Computer Science midterm exam",
      date: "2024-10-28",
      time: "4:45 PM",
      read: true
    },
    {
      id: 4,
      type: "info",
      title: "School Event Reminder",
      message: "Science Fair on November 22nd at 10:00 AM in the Main Auditorium",
      date: "2024-10-25",
      time: "9:00 AM",
      read: true
    },
    {
      id: 5,
      type: "alert",
      title: "Assignment Reminder",
      message: "History project due on November 25th",
      date: "2024-10-22",
      time: "11:30 AM",
      read: true
    },
    {
      id: 6,
      type: "success",
      title: "Perfect Attendance",
      message: "Emily maintained perfect attendance for October 2024",
      date: "2024-10-20",
      time: "8:00 AM",
      read: true
    },
    {
      id: 7,
      type: "info",
      title: "Grade Update",
      message: "New grades have been posted for Mathematics and English courses",
      date: "2024-10-18",
      time: "3:20 PM",
      read: true
    },
    {
      id: 8,
      type: "info",
      title: "Schedule Change",
      message: "Physics class moved to Lab 202 for this week",
      date: "2024-10-15",
      time: "7:45 AM",
      read: true
    }
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "alert":
        return <AlertCircle className="h-5 w-5 text-orange-600" />
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      default:
        return <Info className="h-5 w-5 text-blue-600" />
    }
  }

  const getBgColor = (type: string) => {
    switch (type) {
      case "alert":
        return "bg-orange-50 dark:bg-orange-950/20"
      case "success":
        return "bg-green-50 dark:bg-green-950/20"
      default:
        return "bg-blue-50 dark:bg-blue-950/20"
    }
  }

  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <ParentLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Notifications</h1>
            <p className="text-muted-foreground mt-2">Stay updated on your child's academic activities</p>
          </div>
          <Button variant="outline">
            Mark All as Read
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Unread</CardDescription>
              <CardTitle className="text-3xl">{unreadCount}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">New notifications</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>This Week</CardDescription>
              <CardTitle className="text-3xl">5</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Recent updates</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total</CardDescription>
              <CardTitle className="text-3xl">{notifications.length}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">All notifications</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              All Notifications
            </CardTitle>
            <CardDescription>Recent updates and alerts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {notifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className={`p-4 border rounded-lg ${!notification.read ? 'bg-accent' : ''}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-full ${getBgColor(notification.type)}`}>
                      {getIcon(notification.type)}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{notification.title}</h3>
                            {!notification.read && (
                              <Badge variant="default" className="text-xs">New</Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{notification.message}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {notification.date} at {notification.time}
                        </p>
                        {!notification.read && (
                          <Button variant="ghost" size="sm">
                            Mark as Read
                          </Button>
                        )}
                      </div>
                    </div>
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