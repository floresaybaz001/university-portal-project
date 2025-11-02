"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { 
  GraduationCap, 
  Moon,
  Sun,
  Key,
  LogOut,
  ChevronDown,
  Home,
  BookOpen,
  Users,
  ClipboardList,
  Calendar,
  FileText,
  UserCircle,
  SettingsIcon
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

const navItems = [
  { label: "Dashboard", href: "/faculty/dashboard", icon: Home },
  { label: "My Courses", href: "/faculty/courses", icon: BookOpen },
  { label: "Students", href: "/faculty/students", icon: Users },
  { label: "Grading", href: "/faculty/grading", icon: ClipboardList },
  { label: "Schedule", href: "/faculty/schedule", icon: Calendar },
  { label: "Resources", href: "/faculty/resources", icon: FileText },
  { label: "Profile", href: "/faculty/profile", icon: UserCircle },
  { label: "Settings", href: "/faculty/settings", icon: SettingsIcon },
]

export default function FacultyLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  const userData = {
    name: "Dr. Jane Smith",
    id: "FAC789012",
    email: "jane.smith@university.edu",
    department: "Computer Science",
    position: "Associate Professor"
  }

  const handleLogout = () => {
    router.push("/auth")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/faculty/dashboard" className="flex items-center gap-2">
            <div className="p-2 bg-primary rounded-lg">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-lg">UniPortal</h1>
              <p className="text-xs text-muted-foreground">Faculty Hub</p>
            </div>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
                  {userData.name.split(' ').map(n => n[0]).join('')}
                </div>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="px-2 py-1.5">
                <p className="text-sm font-medium">{userData.name}</p>
                <p className="text-xs text-muted-foreground">{userData.email}</p>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? (
                  <>
                    <Sun className="mr-2 h-4 w-4" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="mr-2 h-4 w-4" />
                    <span>Dark Mode</span>
                  </>
                )}
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Key className="mr-2 h-4 w-4" />
                <span>Change Password</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="text-destructive focus:text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="relative w-full h-64 bg-gradient-to-r from-blue-600 to-purple-600">
        <img 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/DSC_6533-1-1762092607263.jpg?width=8000&height=8000&resize=contain"
          alt="Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* User Profile Section */}
      <div className="relative -mt-16 pb-6 border-b bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-4">
            <div className="w-32 h-32 rounded-full border-4 border-background bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center shadow-xl">
              <span className="text-4xl font-bold text-white">{userData.name.split(' ').map(n => n[0]).join('')}</span>
            </div>
          </div>

          <div className="text-center space-y-1 mb-6">
            <p className="text-sm text-muted-foreground">{userData.id}</p>
            <h2 className="text-2xl font-bold">{userData.name}</h2>
            <p className="text-sm text-muted-foreground">{userData.position}</p>
            <p className="text-sm font-medium">{userData.department}</p>
          </div>

          <nav className="flex items-center justify-center">
            <div className="inline-flex gap-2 p-1 bg-muted rounded-full">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all",
                      isActive 
                        ? "bg-primary text-primary-foreground shadow-sm" 
                        : "hover:bg-background hover:text-foreground text-muted-foreground"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </nav>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}
