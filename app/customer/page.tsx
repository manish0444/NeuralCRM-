import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data for usage statistics
const usageData = [
  { date: '2023-01-01', usage: 50 },
  { date: '2023-02-01', usage: 60 },
  { date: '2023-03-01', usage: 75 },
  { date: '2023-04-01', usage: 65 },
  { date: '2023-05-01', usage: 80 },
]

// Mock data for recent activities
const recentActivities = [
  { date: '2023-05-15', action: 'Logged in', details: 'From IP 192.168.1.1' },
  { date: '2023-05-14', action: 'Updated profile', details: 'Changed email address' },
  { date: '2023-05-13', action: 'Submitted support ticket', details: 'Ticket #12345' },
  { date: '2023-05-12', action: 'Made payment', details: '$99.00 for Pro Plan' },
]

export default function CustomerDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Customer Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Account Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Email:</strong> john.doe@example.com</p>
            <p><strong>Plan:</strong> Professional</p>
            <p><strong>Next Billing Date:</strong> June 1, 2023</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Usage Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={usageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="usage" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>AI Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>Explore our new feature: Advanced Analytics</li>
              <li>Consider upgrading to Enterprise plan for unlimited access</li>
              <li>Schedule a demo of our latest AI-powered tools</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentActivities.map((activity, index) => (
                <TableRow key={index}>
                  <TableCell>{activity.date}</TableCell>
                  <TableCell>{activity.action}</TableCell>
                  <TableCell>{activity.details}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

