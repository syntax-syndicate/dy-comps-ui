"use client";

import * as React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  ArrowUpRight,
  Clock,
  DollarSign,
  Users,
  Briefcase,
  AlertCircle,
  ChevronDown,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

// Sample data for the area chart
const projectData = Array.from({ length: 90 }, (_, i) => ({
  date: new Date(2024, 0, i + 1).toISOString().split("T")[0],
  mobile: Math.floor(Math.random() * 50) + 30,
  desktop: Math.floor(Math.random() * 40) + 20,
}));

const reminders = [
  {
    priority: "Low",
    time: "Today, 12:30",
    title: "Create a design training for beginners.",
    category: "Design Education",
  },
  {
    priority: "Medium",
    time: "Today, 10:00",
    title: "Have a meeting with the new design team.",
    category: "Meeting",
  },
  {
    priority: "High",
    time: "Tomorrow, 16:30",
    title: "Respond to customer support emails.",
    category: "Customer Support",
  },
];

const recentProjects = [
  {
    name: "Product Development",
    client: {
      name: "Kevin Hall",
      avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    startDate: "20/03/2024",
    deadline: "05/04/2024",
    status: "Active",
    progress: 30,
  },
  {
    name: "New Office Building",
    client: {
      name: "Kevin Hall",
      avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    startDate: "20/03/2024",
    deadline: "05/04/2024",
    status: "Cancel",
    progress: 60,
  },
];

const heroes = [
  {
    name: "JD",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "SA",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "RK",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "MK",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "JW",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "PK",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

const achievementData = [
  { year: 2024, projects: 57 },
  { year: 2023, projects: 29 },
  { year: 2025, projects: 35 },
];

export default function ProjectDashboard() {
  const [timeRange, setTimeRange] = React.useState("3months");

  return (
    <div className="container mx-auto py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Project Management</h1>
        <Button>
          Pick a date
          <ChevronDown className="ml-2 size-4" />
        </Button>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <div className="text-xs text-muted-foreground">
              +20.1% from last month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Projects
            </CardTitle>
            <Briefcase className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,423</div>
            <div className="text-xs text-muted-foreground">
              +8.2% from last month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Leads</CardTitle>
            <Users className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,423</div>
            <div className="text-xs text-muted-foreground">
              +5.3% from last month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Hours</CardTitle>
            <Clock className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">168h 40m</div>
            <div className="text-xs text-muted-foreground">
              +12.5% from last month
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-5">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Projects Overview</CardTitle>
              <p className="text-sm text-muted-foreground">
                Showing total visitors for the last 3 months
              </p>
            </div>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3months">Last 3 months</SelectItem>
                <SelectItem value="month">Last month</SelectItem>
                <SelectItem value="week">Last week</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={projectData}>
                  <defs>
                    <linearGradient
                      id="colorMobile"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#8884d8"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                    <linearGradient
                      id="colorDesktop"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#82ca9d"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value: string | number | Date) => {
                      const date = new Date(value);
                      return date.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      });
                    }}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}`}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(var(--background))",
                      borderRadius: "8px",
                      border: "1px solid hsl(var(--border))",
                    }}
                    labelStyle={{ color: "hsl(var(--foreground))" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="mobile"
                    stackId="1"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#colorMobile)"
                  />
                  <Area
                    type="monotone"
                    dataKey="desktop"
                    stackId="1"
                    stroke="#82ca9d"
                    fillOpacity={1}
                    fill="url(#colorDesktop)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Highlights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm">Avg. Client Rating</div>
                  <div className="font-bold">7.8/10</div>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm">Avg. Quotes</div>
                  <div className="font-bold">230</div>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm">Avg. Agent Earnings</div>
                  <div className="font-bold">$2,309</div>
                </div>
                <Progress value={82} className="h-2" />
              </div>
              <div>
                <div className="mb-2 text-sm font-medium">
                  Today&apos;s Heroes
                </div>
                <div className="flex -space-x-2">
                  {heroes.map((hero, i) => (
                    <Avatar key={i} className="border-2 border-background">
                      <AvatarImage src={hero.image} alt={hero.name} />
                      <AvatarFallback>{hero.name}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Reminders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {reminders.map((reminder, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-2 rounded-lg border p-4"
                >
                  <div className="flex items-center justify-between">
                    <Badge
                      variant={
                        reminder.priority === "High"
                          ? "destructive"
                          : reminder.priority === "Medium"
                            ? "default"
                            : "secondary"
                      }
                    >
                      {reminder.priority}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {reminder.time}
                    </span>
                  </div>
                  <div className="font-medium">{reminder.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {reminder.category}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Achievement by Year</CardTitle>
            <p className="text-sm text-muted-foreground">
              You completed more projects per day on average this year than last
              year.
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {achievementData.map((year) => (
                <div key={year.year} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-sm">
                    <div>{year.year}</div>
                    <div className="font-medium">{year.projects} projects</div>
                  </div>
                  <Progress
                    value={(year.projects / 60) * 100}
                    className="h-2"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead>
                <tr className="border-b">
                  <th className="h-12 px-4 text-left align-middle font-medium">
                    Project Name
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium">
                    Client Name
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium">
                    Start Date
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium">
                    Deadline
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium">
                    Status
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium">
                    Progress
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {recentProjects.map((project, i) => (
                  <tr key={i} className="border-b">
                    <td className="p-4 align-middle">{project.name}</td>
                    <td className="p-4 align-middle">
                      <div className="flex items-center gap-2">
                        <Avatar className="size-8">
                          <AvatarImage
                            src={project.client.avatar}
                            alt={project.client.avatar}
                          />
                          <AvatarFallback>
                            {project.client.name[0]}
                          </AvatarFallback>
                        </Avatar>
                        {project.client.name}
                      </div>
                    </td>
                    <td className="p-4 align-middle">{project.startDate}</td>
                    <td className="p-4 align-middle">{project.deadline}</td>
                    <td className="p-4 align-middle">
                      <Badge
                        variant={
                          project.status === "Active"
                            ? "default"
                            : "destructive"
                        }
                      >
                        {project.status}
                      </Badge>
                    </td>
                    <td className="p-4 align-middle">
                      <div className="flex items-center gap-2">
                        <Progress value={project.progress} className="h-2" />
                        <span className="text-sm font-medium">
                          {project.progress}%
                        </span>
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <Button variant="ghost" size="icon">
                        <ChevronDown className="size-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
