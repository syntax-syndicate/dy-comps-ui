"use client";

import * as React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  MousePointer,
  Globe,
  Users,
  TrendingUp,
  DollarSign,
  Mail,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Ban,
  ShoppingCart,
  UserPlus,
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
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const dailySalesData = [
  { date: "2024-01-01", amount: 24500 },
  { date: "2024-01-02", amount: 26300 },
  { date: "2024-01-03", amount: 28450 },
  { date: "2024-01-04", amount: 27800 },
  { date: "2024-01-05", amount: 29100 },
  { date: "2024-01-06", amount: 28200 },
  { date: "2024-01-07", amount: 28450 },
];

const weeklyEarnings = [
  { day: "Mon", amount: 545 },
  { day: "Tue", amount: 426 },
  { day: "Wed", amount: 478 },
  { day: "Thu", amount: 380 },
  { day: "Fri", amount: 434 },
  { day: "Sat", amount: 412 },
  { day: "Sun", amount: 468 },
];

const countrySales = [
  { country: "United States", amount: 1999.0, change: "+23.4%", flag: "🇺🇸" },
  { country: "Brazil", amount: 539.0, change: "+20.1%", flag: "🇧🇷" },
  { country: "India", amount: 299.0, change: "-5%", flag: "🇮🇳" },
  { country: "Australia", amount: 599.0, change: "+10.9%", flag: "🇦🇺" },
  { country: "France", amount: 539.0, change: "+2.1%", flag: "🇫🇷" },
];

const salesBreakdown = [
  { name: "Direct Sales", value: 45 },
  { name: "Partner Sales", value: 30 },
  { name: "Online Store", value: 25 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const recentOrders = [
  { id: "#12345", customer: "John Doe", amount: 156.0, status: "Completed" },
  { id: "#12346", customer: "Jane Smith", amount: 243.0, status: "Processing" },
  {
    id: "#12347",
    customer: "Mike Johnson",
    amount: 378.0,
    status: "Completed",
  },
  {
    id: "#12348",
    customer: "Sarah Williams",
    amount: 587.0,
    status: "Processing",
  },
];

export default function AnalyticsDashboard() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-8 text-4xl font-bold">Website Analytics</h1>

      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Direct Traffic
            </CardTitle>
            <MousePointer className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">432</div>
            <div className="text-xs text-muted-foreground">
              +12.5% from last month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Page Views</CardTitle>
            <Globe className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.3K</div>
            <div className="text-xs text-muted-foreground">
              +8.2% from last month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Sessions
            </CardTitle>
            <Users className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.6K</div>
            <div className="text-xs text-muted-foreground">
              +5.3% from last month
            </div>
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
            <div className="text-2xl font-bold">8.5%</div>
            <div className="text-xs text-muted-foreground">
              +1.2% from last month
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <Tabs defaultValue="daily">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Sales Overview</CardTitle>
                <TabsList>
                  <TabsTrigger value="daily">Daily</TabsTrigger>
                  <TabsTrigger value="weekly">Weekly</TabsTrigger>
                </TabsList>
              </div>
            </CardHeader>
            <CardContent>
              <TabsContent value="daily">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={dailySalesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="amount"
                        stroke="#8884d8"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
              <TabsContent value="weekly">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyEarnings}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="amount" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <DollarSign className="size-4 text-muted-foreground" />
                  <div className="text-sm font-medium">Total Revenue</div>
                </div>
                <div className="font-bold">$42.5k</div>
              </div>
              <Progress value={62} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <div>62.2% Orders</div>
                <div>25.5% Visits</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="size-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Orders</span>
                </div>
                <div className="text-2xl font-bold">2,345</div>
                <div className="flex items-center text-xs text-green-500">
                  <ArrowUpRight className="size-4" />
                  +15.2% from last month
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <UserPlus className="size-4 text-muted-foreground" />
                  <span className="text-sm font-medium">New Customers</span>
                </div>
                <div className="text-2xl font-bold">432</div>
                <div className="flex items-center text-xs text-green-500">
                  <ArrowUpRight className="size-4" />
                  +8.4% from last month
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="font-medium">Sales Distribution</div>
              <div className="h-[150px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={salesBreakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {salesBreakdown.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value, name) => [value, name]}
                      contentStyle={{
                        background: "hsl(var(--background))",
                        border: "1px solid hsl(var(--border))",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {salesBreakdown.map((item, index) => (
                  <div key={item.name} className="flex items-center gap-1">
                    <div
                      className="size-2 rounded-full"
                      style={{ backgroundColor: COLORS[index] }}
                    />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <div className="text-sm font-medium">{order.customer}</div>
                    <div className="text-xs text-muted-foreground">
                      {order.id}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className={`size-2 rounded-full ${
                        order.status === "Completed"
                          ? "bg-green-500"
                          : "bg-yellow-500"
                      }`}
                    />
                    <div className="text-sm font-medium">
                      ${order.amount.toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Campaign Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Mail className="mr-2 size-4 text-muted-foreground" />
                  <div className="text-sm font-medium">Total Emails</div>
                  <div className="ml-auto">12,345</div>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="mr-2 size-4 text-green-500" />
                  <div className="text-sm font-medium">Opened</div>
                  <div className="ml-auto">8,734</div>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 size-4 text-yellow-500" />
                  <div className="text-sm font-medium">Pending</div>
                  <div className="ml-auto">490</div>
                </div>
                <div className="flex items-center">
                  <Ban className="mr-2 size-4 text-red-500" />
                  <div className="text-sm font-medium">Unsubscribed</div>
                  <div className="ml-auto">3,200</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sales by Countries</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Country</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Change</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {countrySales.map((country) => (
                <TableRow key={country.country}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{country.flag}</span>
                      {country.country}
                    </div>
                  </TableCell>
                  <TableCell>${country.amount.toFixed(2)}</TableCell>
                  <TableCell>
                    <span
                      className={
                        country.change.startsWith("+")
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {country.change}
                    </span>
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
