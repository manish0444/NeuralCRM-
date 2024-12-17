import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const customers = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", company: "Tech Innovators", status: "Active" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", company: "Global Solutions", status: "Inactive" },
  { id: 3, name: "Carol Williams", email: "carol@example.com", company: "Eco Friendly Co.", status: "Active" },
  { id: 4, name: "David Brown", email: "david@example.com", company: "Finance Experts", status: "Active" },
  { id: 5, name: "Eva Martinez", email: "eva@example.com", company: "Creative Designs", status: "Active" },
]

export default function CustomersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Customers</h1>
      <Card>
        <CardHeader>
          <CardTitle>Customer List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-4">
            <Input className="w-64" placeholder="Search customers..." />
            <Button>Add Customer</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.company}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      customer.status === 'Active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                    }`}>
                      {customer.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">View</Button>
                    <Button variant="ghost" size="sm">Edit</Button>
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

