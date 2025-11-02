import AdminSidebar from "@/components/AdminSidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, Database, Bell, Lock } from "lucide-react"

export default function AdminSettingsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />
      <main className="flex-1 lg:ml-64 p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold">System Settings</h1>
            <p className="text-muted-foreground mt-2">Configure platform-wide settings and preferences</p>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <CardTitle>Security Settings</CardTitle>
              </div>
              <CardDescription>Manage system security and access controls</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">Require 2FA for all admin accounts</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto-Lock Sessions</Label>
                  <p className="text-sm text-muted-foreground">Lock inactive sessions after 30 minutes</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>IP Whitelist</Label>
                  <p className="text-sm text-muted-foreground">Restrict admin access to specific IPs</p>
                </div>
                <Switch />
              </div>

              <div className="space-y-2 pt-2">
                <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                <Input id="session-timeout" type="number" defaultValue="30" className="max-w-xs" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                <CardTitle>System Configuration</CardTitle>
              </div>
              <CardDescription>General platform settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="university-name">University Name</Label>
                <Input id="university-name" defaultValue="University Portal" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="admin-email">System Admin Email</Label>
                <Input id="admin-email" type="email" defaultValue="admin@university.edu" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="support-email">Support Email</Label>
                <Input id="support-email" type="email" defaultValue="support@university.edu" />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="space-y-0.5">
                  <Label>Maintenance Mode</Label>
                  <p className="text-sm text-muted-foreground">Take the platform offline for maintenance</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                <CardTitle>Notification Settings</CardTitle>
              </div>
              <CardDescription>Configure system notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Send email notifications to users</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>System Alerts</Label>
                  <p className="text-sm text-muted-foreground">Notify admins of critical system events</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Daily Reports</Label>
                  <p className="text-sm text-muted-foreground">Send daily activity summary to admins</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                <CardTitle>Data & Privacy</CardTitle>
              </div>
              <CardDescription>Manage data retention and privacy settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Data Encryption</Label>
                  <p className="text-sm text-muted-foreground">Encrypt sensitive data at rest</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Audit Logging</Label>
                  <p className="text-sm text-muted-foreground">Log all admin actions</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="space-y-2 pt-2">
                <Label htmlFor="data-retention">Data Retention Period (days)</Label>
                <Input id="data-retention" type="number" defaultValue="365" className="max-w-xs" />
              </div>

              <Button variant="destructive" className="mt-4">
                Delete All Historical Data
              </Button>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button size="lg">Save All Settings</Button>
            <Button variant="outline" size="lg">Reset to Defaults</Button>
          </div>
        </div>
      </main>
    </div>
  )
}
