"use client";

import * as React from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import {
  Users,
  DollarSign,
  TrendingUp,
  Mail,
  Phone,
  Share2,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle2,
  Clock,
  XCircle,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const leadsData = [
  { source: "Social", value: 275, color: "#FF8042" },
  { source: "Email", value: 200, color: "#00C49F" },
  { source: "Call", value: 287, color: "#0088FE" },
  { source: "Others", value: 173, color: "#FFBB28" },
];

const countryData = [
  { country: "China", users: 430, bounceRate: "5.9%" },
  { country: "United States", users: 435, bounceRate: "3%" },
  { country: "Russia", users: 982, bounceRate: "4.8%" },
  { country: "Indonesia", users: 542, bounceRate: "2.3%" },
  { country: "India", users: 742, bounceRate: "5%" },
];

const leadsTableData = [
  {
    id: 1,
    status: "Success",
    email: "smith@example.com",
    amount: 316.0,
    date: "2024-01-15",
  },
  {
    id: 2,
    status: "Processing",
    email: "johnson@example.com",
    amount: 242.0,
    date: "2024-01-14",
  },
  {
    id: 3,
    status: "Success",
    email: "williams@example.com",
    amount: 837.0,
    date: "2024-01-14",
  },
  {
    id: 4,
    status: "Failed",
    email: "brown@example.com",
    amount: 874.0,
    date: "2024-01-13",
  },
  {
    id: 5,
    status: "Success",
    email: "davis@example.com",
    amount: 721.0,
    date: "2024-01-13",
  },
];

export default function CRMDashboard() {
  const [timeRange, setTimeRange] = React.useState("7d");

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Success":
        return <CheckCircle2 className="size-4 text-green-500" />;
      case "Processing":
        return <Clock className="size-4 text-yellow-500" />;
      case "Failed":
        return <XCircle className="size-4 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">CRM Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your customer relationships
          </p>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="90d">Last 90 days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Customers
            </CardTitle>
            <Users className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">102,890</div>
            <p className="text-xs text-muted-foreground">
              <ArrowUpRight className="mr-1 inline size-4 text-green-500" />
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$56,562</div>
            <p className="text-xs text-muted-foreground">
              <ArrowUpRight className="mr-1 inline size-4 text-green-500" />
              +24.2% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Conversion Rate
            </CardTitle>
            <TrendingUp className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15.20%</div>
            <p className="text-xs text-muted-foreground">
              <ArrowDownRight className="mr-1 inline size-4 text-red-500" />
              -2.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Leads by Source</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={leadsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({ source, value }) => `${source}: ${value}`}
                >
                  {leadsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Top Countries</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Country</TableHead>
                  <TableHead>Users</TableHead>
                  <TableHead>Bounce Rate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {countryData.map((row) => (
                  <TableRow key={row.country}>
                    <TableCell>{row.country}</TableCell>
                    <TableCell>{row.users}</TableCell>
                    <TableCell>{row.bounceRate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Leads</CardTitle>
            <Input className="w-[200px]" placeholder="Search leads..." />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Status</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leadsTableData.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(lead.status)}
                      <span>{lead.status}</span>
                    </div>
                  </TableCell>
                  <TableCell>{lead.email}</TableCell>
                  <TableCell>${lead.amount.toFixed(2)}</TableCell>
                  <TableCell>{lead.date}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="size-8 p-0">
                          <MoreHorizontal className="size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Lead</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
