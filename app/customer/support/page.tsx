import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const supportTickets = [
  { id: 1, subject: "Login Issues", status: "Open", date: "2023-05-15" },
  { id: 2, subject: "Billing Question", status: "Closed", date: "2023-05-10" },
  { id: 3, subject: "Feature Request", status: "In Progress", date: "2023-05-05" },
]

export default function SupportPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Support</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Submit a Ticket</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Brief description of your issue" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Provide details about your issue" />
              </div>
              <Button type="submit">Submit Ticket</Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subject</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {supportTickets.map((ticket) => (
                  <TableRow key={ticket.id}>
                    <TableCell>{ticket.subject}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        ticket.status === 'Open' ? 'bg-green-200 text-green-800' :
                        ticket.status === 'Closed' ? 'bg-red-200 text-red-800' :
                        'bg-yellow-200 text-yellow-800'
                      }`}>
                        {ticket.status}
                      </span>
                    </TableCell>
                    <TableCell>{ticket.date}</TableCell>
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

