import ParentSidebar from "@/components/ParentSidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CreditCard, Download, Calendar, AlertCircle } from "lucide-react"

export default function ParentPaymentsPage() {
  const paymentHistory = [
    { id: "INV-2024-11", description: "Tuition - Fall 2024", amount: 2500, date: "2024-11-01", status: "Paid" },
    { id: "INV-2024-10", description: "Textbooks & Materials", amount: 450, date: "2024-10-15", status: "Paid" },
    { id: "INV-2024-09", description: "Lab Fees", amount: 200, date: "2024-09-20", status: "Paid" },
    { id: "INV-2024-08", description: "Registration Fee", amount: 150, date: "2024-08-25", status: "Paid" },
  ]

  const pendingCharges = [
    { description: "Spring Semester Deposit", amount: 500, dueDate: "2024-12-01" },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      <ParentSidebar />
      <main className="flex-1 lg:ml-64 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Fee Payment</h1>
            <p className="text-muted-foreground mt-2">Manage tuition payments and view payment history</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Current Balance</CardDescription>
                <CardTitle className="text-3xl">$450</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-orange-600">Payment due</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Paid This Year</CardDescription>
                <CardTitle className="text-3xl">$3,300</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">4 transactions</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Next Payment</CardDescription>
                <CardTitle className="text-xl">$500</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Due Dec 1, 2024</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Payment Method</CardDescription>
                <CardTitle className="text-lg">•••• 4242</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Visa ending in 4242</p>
              </CardContent>
            </Card>
          </div>

          {pendingCharges.length > 0 && (
            <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/20">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                  <CardTitle className="text-orange-900 dark:text-orange-100">Pending Charges</CardTitle>
                </div>
                <CardDescription className="text-orange-800 dark:text-orange-200">
                  Outstanding payments that require your attention
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {pendingCharges.map((charge, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 border border-orange-200 rounded-lg">
                    <div>
                      <p className="font-semibold">{charge.description}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                        <Calendar className="h-3 w-3" />
                        Due: {charge.dueDate}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold">${charge.amount}</span>
                      <Button>Pay Now</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle>Current Semester Breakdown</CardTitle>
              <CardDescription>Fall 2024 fees and charges</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between py-3 border-b">
                  <span className="text-muted-foreground">Tuition</span>
                  <span className="font-semibold">$2,500.00</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-muted-foreground">Textbooks & Materials</span>
                  <span className="font-semibold">$450.00</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-muted-foreground">Lab Fees</span>
                  <span className="font-semibold">$200.00</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-muted-foreground">Technology Fee</span>
                  <span className="font-semibold">$100.00</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-muted-foreground">Activity Fee</span>
                  <span className="font-semibold">$75.00</span>
                </div>
                <div className="flex justify-between py-4 text-lg font-bold">
                  <span>Total Semester Fees</span>
                  <span>$3,325.00</span>
                </div>
                <div className="flex justify-between py-3 text-green-600">
                  <span>Paid</span>
                  <span>-$2,875.00</span>
                </div>
                <div className="flex justify-between py-3 text-xl font-bold text-orange-600">
                  <span>Balance Due</span>
                  <span>$450.00</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Payment History</CardTitle>
                  <CardDescription>Your previous transactions</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {paymentHistory.map((payment) => (
                  <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <CreditCard className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{payment.description}</p>
                        <p className="text-sm text-muted-foreground">
                          {payment.id} • {payment.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-semibold">${payment.amount}</span>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {payment.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your saved payment methods</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-6 w-6 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Visa ending in 4242</p>
                    <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                  </div>
                  <Badge>Default</Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button variant="outline" size="sm">Remove</Button>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                <CreditCard className="h-4 w-4 mr-2" />
                Add New Payment Method
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
