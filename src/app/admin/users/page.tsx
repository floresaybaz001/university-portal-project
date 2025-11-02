import AdminLayout from "@/components/AdminLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, UserPlus, Mail, Shield } from "lucide-react"

export default function AdminUsersPage() {
  const users = [
    { id: "STU001", name: "John Anderson", email: "john.anderson@university.edu", role: "Student", status: "Active", joinDate: "2023-09-01" },
    { id: "FAC789", name: "Dr. Jane Smith", email: "jane.smith@university.edu", role: "Faculty", status: "Active", joinDate: "2019-08-15" },
    { id: "STU002", name: "Emma Williams", email: "emma.williams@university.edu", role: "Student", status: "Active", joinDate: "2023-09-01" },
    { id: "ADM456", name: "Michael Johnson", email: "michael.johnson@university.edu", role: "Admin", status: "Active", joinDate: "2020-01-10" },
    { id: "PAR123", name: "Sarah Davis", email: "sarah.davis@gmail.com", role: "Parent", status: "Active", joinDate: "2023-09-15" },
    { id: "STU003", name: "Robert Brown", email: "robert.brown@university.edu", role: "Student", status: "Inactive", joinDate: "2022-09-01" },
  ]

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">User Management</h1>
            <p className="text-muted-foreground mt-2">Manage all platform users</p>
          </div>
          <Button>
            <UserPlus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total Users</CardDescription>
              <CardTitle className="text-3xl">3,417</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">All active accounts</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Students</CardDescription>
              <CardTitle className="text-3xl">2,847</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Enrolled students</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Faculty</CardDescription>
              <CardTitle className="text-3xl">285</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Teaching staff</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Parents</CardDescription>
              <CardTitle className="text-3xl">245</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Guardian accounts</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search users by name, email or ID..." 
              className="pl-10"
            />
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Users</CardTitle>
            <CardDescription>Complete list of platform users</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {users.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold">{user.name}</h3>
                      <Badge variant={user.status === "Active" ? "default" : "secondary"}>
                        {user.status}
                      </Badge>
                      <Badge variant="outline">{user.role}</Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        {user.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Shield className="h-3 w-3" />
                        ID: {user.id}
                      </span>
                      <span>Joined: {user.joinDate}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="outline" size="sm">View</Button>
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