"use client"

import FacultyLayout from "@/components/FacultyLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, ClipboardList, Calendar, Award, TrendingUp } from "lucide-react"

export default function FacultyDashboardPage() {
  const upcomingClasses = [
    { id: 1, course: "Computer Science 101", time: "10:00 AM", room: "Room 204", students: 45 },
    { id: 2, course: "Data Structures", time: "2:00 PM", room: "Room 105", students: 38 },
    { id: 3, course: "Algorithm Design", time: "4:00 PM", room: "Lab 3", students: 30 },
  ]

  const pendingGrading = [
    { id: 1, assignment: "Midterm Exam - CS101", course: "Computer Science 101", submissions: 42 },
    { id: 2, assignment: "Project 2 - Data Structures", course: "Data Structures", submissions: 35 },
    { id: 3, assignment: "Quiz 3 - Algorithms", course: "Algorithm Design", submissions: 28 },
  ]

  return (
    <FacultyLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome back, Dr. Smith!</h1>
          <p className="text-muted-foreground">Here's your teaching overview for today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">This semester</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">187</div>
              <p className="text-xs text-muted-foreground">Across all courses</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pending Grading</CardTitle>
              <ClipboardList className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">105</div>
              <p className="text-xs text-muted-foreground">Assignments to review</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Avg Class Rating</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.7</div>
              <p className="text-xs text-muted-foreground">Out of 5.0</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Today's Schedule */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Today's Classes
                  </CardTitle>
                  <CardDescription>Your teaching schedule for today</CardDescription>
                </div>
                <Button variant="ghost" size="sm">Full Schedule</Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingClasses.map((classItem) => (
                <div key={classItem.id} className="flex items-center gap-4 p-3 bg-muted rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium">{classItem.course}</h4>
                    <p className="text-sm text-muted-foreground">{classItem.room} • {classItem.students} students</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-sm">{classItem.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Pending Grading */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <ClipboardList className="h-5 w-5" />
                    Pending Grading
                  </CardTitle>
                  <CardDescription>Assignments awaiting review</CardDescription>
                </div>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {pendingGrading.map((item) => (
                <div key={item.id} className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0">
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-medium text-sm">{item.assignment}</h4>
                      <Badge variant="secondary">{item.submissions} submissions</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{item.course}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently accessed faculty tools</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Button variant="outline" className="h-auto flex-col gap-2 p-4">
                <ClipboardList className="h-6 w-6" />
                <span>Grade Assignments</span>
              </Button>
              <Button variant="outline" className="h-auto flex-col gap-2 p-4">
                <Users className="h-6 w-6" />
                <span>View Students</span>
              </Button>
              <Button variant="outline" className="h-auto flex-col gap-2 p-4">
                <BookOpen className="h-6 w-6" />
                <span>Course Materials</span>
              </Button>
              <Button variant="outline" className="h-auto flex-col gap-2 p-4">
                <TrendingUp className="h-6 w-6" />
                <span>View Analytics</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </FacultyLayout>
  )
}