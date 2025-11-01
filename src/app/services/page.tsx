"use client"

import DashboardSidebar from "@/components/DashboardSidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  FileText, 
  CreditCard, 
  Calendar, 
  BookOpen, 
  Download,
  CheckCircle2,
  Clock,
  AlertCircle
} from "lucide-react"

export default function ServicesPage() {
  const transcriptRequests = [
    { id: 1, type: "Official Transcript", date: "Mar 10, 2024", status: "completed" },
    { id: 2, type: "Unofficial Transcript", date: "Mar 5, 2024", status: "completed" },
  ]

  const feeBreakdown = [
    { item: "Tuition - Fall 2024", amount: "$8,500", status: "paid" },
    { item: "Student Activities Fee", amount: "$250", status: "paid" },
    { item: "Health Services Fee", amount: "$150", status: "pending" },
    { item: "Technology Fee", amount: "$200", status: "pending" },
  ]

  const calendarEvents = [
    { date: "Apr 1, 2024", event: "Course Registration Opens", type: "important" },
    { date: "Apr 15, 2024", event: "Last Day to Drop Classes", type: "deadline" },
    { date: "May 10, 2024", event: "Final Exams Begin", type: "exam" },
    { date: "May 20, 2024", event: "Commencement Ceremony", type: "event" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      
      <main className="lg:ml-64 p-4 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold mb-2">Student Services</h1>
            <p className="text-muted-foreground">Access registration, transcripts, payments, and more</p>
          </div>

          <Tabs defaultValue="registration" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="registration">Registration</TabsTrigger>
              <TabsTrigger value="transcripts">Transcripts</TabsTrigger>
              <TabsTrigger value="payments">Fee Payment</TabsTrigger>
              <TabsTrigger value="calendar">Calendar</TabsTrigger>
            </TabsList>

            {/* Registration Tab */}
            <TabsContent value="registration" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Course Registration
                  </CardTitle>
                  <CardDescription>Register for upcoming semester courses</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-900 dark:text-blue-100">Registration Opens Soon</h4>
                        <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                          Fall 2024 registration opens on April 1, 2024 at 8:00 AM
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4">Search Available Courses</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="e.g., Computer Science" />
                      </div>
                      <div>
                        <Label htmlFor="course-number">Course Number</Label>
                        <Input id="course-number" placeholder="e.g., 101" />
                      </div>
                    </div>
                    <Button className="mt-4">Search Courses</Button>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4">Registration Status</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium">Current Credits</p>
                          <p className="text-sm text-muted-foreground">Spring 2024</p>
                        </div>
                        <Badge>18 Credits</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium">Registration Hold</p>
                          <p className="text-sm text-muted-foreground">Status</p>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          No Holds
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Transcripts Tab */}
            <TabsContent value="transcripts" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Request Official Transcript</CardTitle>
                    <CardDescription>Send official transcripts to institutions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="recipient-name">Recipient Name</Label>
                      <Input id="recipient-name" placeholder="Institution or employer name" />
                    </div>
                    <div>
                      <Label htmlFor="recipient-address">Mailing Address</Label>
                      <Input id="recipient-address" placeholder="Full address" />
                    </div>
                    <div>
                      <Label htmlFor="transcript-type">Transcript Type</Label>
                      <Input id="transcript-type" placeholder="Official/Unofficial" />
                    </div>
                    <div className="pt-2">
                      <p className="text-sm text-muted-foreground mb-2">Processing Fee: $15.00</p>
                      <Button className="w-full">Submit Request</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Download Unofficial Transcript</CardTitle>
                    <CardDescription>Get an immediate PDF copy</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-6 border-2 border-dashed rounded-lg text-center">
                      <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                      <h4 className="font-semibold mb-2">Unofficial Transcript</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Download your complete academic record as a PDF
                      </p>
                      <Button variant="outline" className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Download Now (Free)
                      </Button>
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium mb-2">Note:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Unofficial transcripts are not stamped or sealed</li>
                        <li>For official use, request an official transcript</li>
                        <li>Available immediately after download</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Transcript Request History</CardTitle>
                  <CardDescription>View your past transcript requests</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {transcriptRequests.map((request) => (
                      <div key={request.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">{request.type}</p>
                            <p className="text-sm text-muted-foreground">{request.date}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          {request.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Payments Tab */}
            <TabsContent value="payments" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Fee Summary
                  </CardTitle>
                  <CardDescription>Spring 2024 semester fees</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {feeBreakdown.map((fee, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{fee.item}</p>
                          <p className="text-sm text-muted-foreground">{fee.amount}</p>
                        </div>
                        {fee.status === "paid" ? (
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Paid
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                            <Clock className="h-3 w-3 mr-1" />
                            Pending
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <p className="text-sm text-muted-foreground">Total Balance Due</p>
                        <p className="text-3xl font-bold">$350.00</p>
                      </div>
                      <Badge variant="destructive" className="text-base px-4 py-2">Due Apr 15</Badge>
                    </div>
                    <Button className="w-full" size="lg">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Make Payment
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment History</CardTitle>
                  <CardDescription>View past transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Tuition Payment</p>
                        <p className="text-sm text-muted-foreground">Jan 15, 2024</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$8,500.00</p>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                          Completed
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Student Fees</p>
                        <p className="text-sm text-muted-foreground">Jan 15, 2024</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$250.00</p>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                          Completed
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Calendar Tab */}
            <TabsContent value="calendar" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Academic Calendar
                  </CardTitle>
                  <CardDescription>Important dates and deadlines for Spring 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {calendarEvents.map((event, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                        <div className="flex-shrink-0 w-16 text-center">
                          <p className="text-xs font-semibold text-muted-foreground uppercase">
                            {event.date.split(',')[0]}
                          </p>
                          <p className="text-2xl font-bold">
                            {event.date.split(' ')[1].replace(',', '')}
                          </p>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{event.event}</h4>
                          <Badge 
                            variant="outline" 
                            className={
                              event.type === "important" ? "bg-blue-50 text-blue-700 border-blue-200 mt-2" :
                              event.type === "deadline" ? "bg-red-50 text-red-700 border-red-200 mt-2" :
                              event.type === "exam" ? "bg-orange-50 text-orange-700 border-orange-200 mt-2" :
                              "bg-green-50 text-green-700 border-green-200 mt-2"
                            }
                          >
                            {event.type}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Spring Semester</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Start Date</span>
                        <span className="font-medium">Jan 15, 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">End Date</span>
                        <span className="font-medium">May 10, 2024</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Fall Registration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Opens</span>
                        <span className="font-medium">Apr 1, 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Closes</span>
                        <span className="font-medium">Aug 15, 2024</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Final Exams</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Start Date</span>
                        <span className="font-medium">May 10, 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">End Date</span>
                        <span className="font-medium">May 17, 2024</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
