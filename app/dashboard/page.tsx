import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowUpRight, ArrowDownRight, DollarSign, Users, Activity, TrendingUp } from 'lucide-react'

// Mock data for KPI cards
const kpiData = [
  { title: "Total Sales", value: "$1,234,567", change: "+12%", icon: DollarSign },
  { title: "Lead Conversion Rate", value: "24%", change: "+3%", icon: TrendingUp },
  { title: "Customer Satisfaction", value: "4.8/5", change: "+0.2", icon: Activity },
  { title: "Active Users", value: "12,345", change: "+5%", icon: Users },
]

// Mock data for sales trend
const salesTrendData = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 5000 },
  { month: 'Apr', sales: 4500 },
  { month: 'May', sales: 6000 },
  { month: 'Jun', sales: 5500 },
]

// Mock data for churn prediction
const churnPredictionData = [
  { category: 'Low Risk', value: 60 },
  { category: 'Medium Risk', value: 30 },
  { category: 'High Risk', value: 10 },
]

// Mock data for recent customers
const recentCustomers = [
  { id: 1, name: "Alice Johnson", company: "Tech Innovators", status: "Active" },
  { id: 2, name: "Bob Smith", company: "Global Solutions", status: "At Risk" },
  { id: 3, name: "Carol Williams", company: "Eco Friendly Co.", status: "New" },
  { id: 4, name: "David Brown", company: "Finance Experts", status: "Active" },
  { id: 5, name: "Eva Martinez", company: "Creative Designs", status: "Inactive" },
]

export default function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((kpi, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
              <kpi.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <p className="text-xs text-muted-foreground">
                {kpi.change.startsWith('+') ? (
                  <ArrowUpRight className="inline mr-1 h-4 w-4 text-green-500" />
                ) : (
                  <ArrowDownRight className="inline mr-1 h-4 w-4 text-red-500" />
                )}
                {kpi.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Sales Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Churn Prediction</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={churnPredictionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 mt-4">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>AI Insights</CardTitle>
            <CardDescription>Top 5 customers to engage today</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>Acme Corp - High upsell potential for new product line</li>
              <li>TechGiant Inc - At risk of churn, schedule urgent check-in</li>
              <li>Global Traders - Ready for contract renewal, prepare offer</li>
              <li>InnovateTech - Showing interest in premium features, demo needed</li>
              <li>MegaRetail - Expansion opportunity, set up strategy meeting</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentCustomers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>{customer.company}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        customer.status === 'Active' ? 'bg-green-200 text-green-800' :
                        customer.status === 'At Risk' ? 'bg-red-200 text-red-800' :
                        customer.status === 'New' ? 'bg-blue-200 text-blue-800' :
                        'bg-gray-200 text-gray-800'
                      }`}>
                        {customer.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Link href={`/customers/${customer.id}`}>
                        <Button variant="ghost" size="sm">View</Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

