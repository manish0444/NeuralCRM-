import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

// Mock data for sentiment trends
const sentimentData = [
  { date: '2023-01-01', sentiment: 0.8 },
  { date: '2023-02-01', sentiment: 0.6 },
  { date: '2023-03-01', sentiment: 0.9 },
  { date: '2023-04-01', sentiment: 0.7 },
  { date: '2023-05-01', sentiment: 0.85 },
]

// Mock data for interaction log
const interactionLog = [
  { date: '2023-05-15', type: 'Email', sentiment: 'Positive' },
  { date: '2023-05-10', type: 'Call', sentiment: 'Neutral' },
  { date: '2023-05-05', type: 'Chat', sentiment: 'Negative' },
]

export default function CustomerProfile({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <Link href="/dashboard">
          <Button variant="ghost" className="pl-0">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-6">Customer Profile</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Customer Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Company:</strong> Acme Inc.</p>
            <p><strong>Email:</strong> john.doe@acme.com</p>
            <p><strong>Phone:</strong> (555) 123-4567</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>AI Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Purchase Likelihood:</strong> 85%</p>
            <p><strong>Churn Risk:</strong> Low</p>
            <p><strong>Recommended Action:</strong> Upsell premium features</p>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Sentiment Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={sentimentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sentiment" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Interaction Log</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Sentiment</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {interactionLog.map((interaction, index) => (
                <TableRow key={index}>
                  <TableCell>{interaction.date}</TableCell>
                  <TableCell>{interaction.type}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded ${
                      interaction.sentiment === 'Positive' ? 'bg-green-200 text-green-800' :
                      interaction.sentiment === 'Negative' ? 'bg-red-200 text-red-800' :
                      'bg-gray-200 text-gray-800'
                    }`}>
                      {interaction.sentiment}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

