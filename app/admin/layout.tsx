'use client'

import { useState } from 'react'
import Link from "next/link"
import { MountainIcon, LayoutDashboard, Users, Settings, LogOut, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className={cn(
        "bg-white p-4 shadow-md transition-all duration-300",
        sidebarOpen ? "w-64" : "w-20"
      )}>
        <div className="flex items-center mb-6">
          <MountainIcon className="h-6 w-6 text-purple-600" />
          {sidebarOpen && <span className="ml-2 text-xl font-bold">NeuralCRM</span>}
        </div>
        <nav className="space-y-2">
          <Link href="/admin" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100">
            <LayoutDashboard className="h-5 w-5 text-gray-500" />
            {sidebarOpen && <span>Dashboard</span>}
          </Link>
          <Link href="/admin/customers" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100">
            <Users className="h-5 w-5 text-gray-500" />
            {sidebarOpen && <span>Customers</span>}
          </Link>
          <Link href="/admin/settings" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100">
            <Settings className="h-5 w-5 text-gray-500" />
            {sidebarOpen && <span>Settings</span>}
          </Link>
        </nav>
        <div className="absolute bottom-4">
          <Button variant="ghost" className="flex items-center space-x-2">
            <LogOut className="h-5 w-5" />
            {sidebarOpen && <span>Logout</span>}
          </Button>
        </div>
      </aside>
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm h-16 flex items-center px-4">
          <Button variant="ghost" onClick={() => setSidebarOpen(!sidebarOpen)} className="mr-4">
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold">Admin Dashboard</h1>
        </header>
        <main className="flex-1 overflow-auto p-8">
          {children}
        </main>
      </div>
    </div>
  )
}

