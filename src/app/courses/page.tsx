"use client";

import StudentLayout from "@/components/StudentLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BookOpen, Download, FileText, Video, CheckCircle2, RefreshCw } from "lucide-react";

export default function CoursesPage() {
  const courses = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    instructor: "Dr. Sarah Johnson",
    credits: 3,
    grade: "A",
    equivalentGrade: "1.00",
    remark: "Passed",
    progress: 85,
    schedule: "MWF 10:00-11:00 AM",
    room: "Room 204"
  },
  {
    id: 2,
    code: "MATH201",
    name: "Calculus II",
    instructor: "Prof. Michael Chen",
    credits: 4,
    grade: "A-",
    equivalentGrade: "1.25",
    remark: "Passed",
    progress: 78,
    schedule: "TTh 2:00-3:30 PM",
    room: "Room 105"
  },
  {
    id: 3,
    code: "PHYS150",
    name: "Physics Laboratory",
    instructor: "Dr. Emily Rodriguez",
    credits: 2,
    grade: "B+",
    equivalentGrade: "1.75",
    remark: "Passed",
    progress: 92,
    schedule: "W 4:00-6:00 PM",
    room: "Lab 3"
  },
  {
    id: 4,
    code: "ENG200",
    name: "Technical Writing",
    instructor: "Prof. James Wilson",
    credits: 3,
    grade: "A",
    equivalentGrade: "1.00",
    remark: "Passed",
    progress: 70,
    schedule: "TTh 9:00-10:30 AM",
    room: "Room 310"
  }];


  const materials = [
  { type: "pdf", name: "Lecture Notes - Week 10", size: "2.4 MB" },
  { type: "video", name: "Recorded Lecture - Arrays", size: "145 MB" },
  { type: "pdf", name: "Assignment 5", size: "890 KB" },
  { type: "pdf", name: "Study Guide - Midterm", size: "1.2 MB" }];


  const assignments = [
  { name: "Programming Assignment 5", due: "Due in 3 days", status: "pending" },
  { name: "Midterm Exam", due: "Due in 1 week", status: "pending" },
  { name: "Lab Report 4", due: "Submitted", status: "completed" }];


  return (
    <StudentLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">My Courses</h1>
          <p className="text-muted-foreground">Manage your enrolled courses, grades, and materials</p>
        </div>

        <Tabs defaultValue="enrolled" className="space-y-6">
          <TabsList>
            <TabsTrigger value="enrolled">Enrolled Courses</TabsTrigger>
            <TabsTrigger value="schedule">Class Schedule</TabsTrigger>
            <TabsTrigger value="grades">Grades</TabsTrigger>
          </TabsList>

          {/* Enrolled Courses Tab */}
          <TabsContent value="enrolled" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {courses.map((course) =>
              <Card key={course.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <BookOpen className="h-5 w-5" />
                          {course.code}
                        </CardTitle>
                        <CardDescription className="mt-1">{course.name}</CardDescription>
                      </div>
                      <Badge variant="secondary">{course.credits} Credits</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Instructor</p>
                      <p className="font-medium">{course.instructor}</p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Course Progress</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} />
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">View Materials</Button>
                      <Button size="sm" variant="outline" className="flex-1">Assignments</Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Course Materials Section */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Course Materials</CardTitle>
                <CardDescription>Latest uploads across all courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {materials.map((material, index) =>
                  <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-3">
                        {material.type === "pdf" ?
                      <FileText className="h-5 w-5 text-red-500" /> :
                      <Video className="h-5 w-5 text-blue-500" />
                      }
                        <div>
                          <p className="font-medium text-sm">{material.name}</p>
                          <p className="text-xs text-muted-foreground">{material.size}</p>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Class Schedule Tab */}
          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Class Schedule</CardTitle>
                <CardDescription>Your class timings and locations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courses.map((course) =>
                  <div key={course.id} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-bold">{course.code} - {course.name}</h4>
                          <p className="text-sm text-muted-foreground">{course.instructor}</p>
                        </div>
                        <Badge>{course.credits} Credits</Badge>
                      </div>
                      <div className="flex gap-6 text-sm mt-3">
                        <div>
                          <p className="text-muted-foreground">Schedule</p>
                          <p className="font-medium">{course.schedule}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Location</p>
                          <p className="font-medium">{course.room}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Grades Tab */}
          <TabsContent value="grades" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Current Semester</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold">3.85</div>
                    <p className="text-sm text-muted-foreground mt-1">GPA</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cumulative</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold">3.78</div>
                    <p className="text-sm text-muted-foreground mt-1">Overall GPA</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Credits Earned</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold">84</div>
                    <p className="text-sm text-muted-foreground mt-1">Total Credits</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Course Grades</CardTitle>
                <CardDescription>Current semester performance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Header Controls Section */}
                <div className="flex flex-wrap items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="flex-1 min-w-[200px]">
                    <Select defaultValue="1st-sem-2025-2026">
                      <SelectTrigger>
                        <SelectValue placeholder="Select academic period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1st-sem-2025-2026">1st Semester 2025–2026</SelectItem>
                        <SelectItem value="2nd-sem-2024-2025">2nd Semester 2024–2025</SelectItem>
                        <SelectItem value="1st-sem-2024-2025">1st Semester 2024–2025</SelectItem>
                        <SelectItem value="2nd-sem-2023-2024">2nd Semester 2023–2024</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button variant="outline" size="default" className="gap-2">
                    <RefreshCw className="h-4 w-4" />
                    Refresh
                  </Button>
                  <Button variant="default" size="default" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download Report of Grades (PDF)
                  </Button>
                </div>

                {/* Report of Grades Table */}
                <div className="border rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="font-semibold">Course Code</TableHead>
                        <TableHead className="font-semibold">Course Name</TableHead>
                        <TableHead className="font-semibold">Instructor</TableHead>
                        <TableHead className="font-semibold text-center">Final Grade</TableHead>
                        <TableHead className="font-semibold text-center">Equivalent Grade</TableHead>
                        <TableHead className="font-semibold text-center">Units</TableHead>
                        <TableHead className="font-semibold text-center">Remark</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {courses.map((course) => (
                        <TableRow key={course.id}>
                          <TableCell className="font-medium">{course.code}</TableCell>
                          <TableCell>{course.name}</TableCell>
                          <TableCell>{course.instructor}</TableCell>
                          <TableCell className="text-center">
                            <Badge variant={course.grade.startsWith("A") ? "default" : "secondary"}>
                              {course.grade}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-center font-medium">{course.equivalentGrade}</TableCell>
                          <TableCell className="text-center">{course.credits}</TableCell>
                          <TableCell className="text-center">
                            <span className="text-green-600 dark:text-green-400 font-medium">
                              {course.remark}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Assignments */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Assignments</CardTitle>
                <CardDescription>Track your pending work</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {assignments.map((assignment, index) =>
                  <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-3">
                        {assignment.status === "completed" ?
                      <CheckCircle2 className="h-5 w-5 text-green-500" /> :
                      <FileText className="h-5 w-5 text-orange-500" />
                      }
                        <div>
                          <p className="font-medium text-sm">{assignment.name}</p>
                          <p className="text-xs text-muted-foreground">{assignment.due}</p>
                        </div>
                      </div>
                      {assignment.status === "completed" ?
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Completed
                        </Badge> :
                    <Button size="sm">Submit</Button>
                    }
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </StudentLayout>
  );
}