"use client"

import StudentLayout from "@/components/StudentLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  CreditCard, 
  CheckCircle2,
  Clock,
  Download
} from "lucide-react"

export default function PaymentsPage() {
  const feeBreakdown = [
    { item: "Tuition - Spring 2024", amount: "$8,500", status: "paid" },
    { item: "Student Activities Fee", amount: "$250", status: "paid" },
    { item: "Health Services Fee", amount: "$150", status: "pending" },
    { item: "Technology Fee", amount: "$200", status: "pending" },
  ]

  const paymentHistory = [
    { description: "Tuition Payment", date: "Jan 15, 2024", amount: "$8,500.00", status: "completed" },
    { description: "Student Fees", date: "Jan 15, 2024", amount: "$250.00", status: "completed" },
    { description: "Housing Deposit", date: "Dec 1, 2023", amount: "$500.00", status: "completed" },
    { description: "Application Fee", date: "Nov 15, 2023", amount: "$75.00", status: "completed" },
  ]

  return (
    <StudentLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Fee Payment</h1>
          <p className="text-muted-foreground">Manage your tuition and fees</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Fee Summary - Spring 2024
            </CardTitle>
            <CardDescription>Current semester charges and balance</CardDescription>
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
            <CardDescription>View all past transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {paymentHistory.map((payment, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium">{payment.description}</p>
                    <p className="text-sm text-muted-foreground">{payment.date}</p>
                  </div>
                  <div className="text-right flex items-center gap-3">
                    <div>
                      <p className="font-medium">{payment.amount}</p>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                        Completed
                      </Badge>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Total Paid This Year</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold">$9,325.00</div>
                <p className="text-sm text-muted-foreground mt-1">2024 Academic Year</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Outstanding Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">$350.00</div>
                <p className="text-sm text-muted-foreground mt-1">Due April 15, 2024</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Payment Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold">Active</div>
                <p className="text-sm text-muted-foreground mt-1">Monthly installments</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </StudentLayout>
  )
}