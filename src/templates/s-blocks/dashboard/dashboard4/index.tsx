"use client";

import {
  TrendingUp,
  GraduationCap,
  Users,
  Clock,
  BookOpen,
  Award,
} from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const engagementData = [
  { month: "January", desktop: 186, mobile: 124 },
  { month: "February", desktop: 305, mobile: 192 },
  { month: "March", desktop: 237, mobile: 178 },
  { month: "April", desktop: 273, mobile: 210 },
  { month: "May", desktop: 309, mobile: 245 },
  { month: "June", desktop: 314, mobile: 267 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--primary))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--secondary))",
  },
} satisfies Record<string, { label: string; color: string }>;

const performanceMetrics = [
  { title: "Total Students", value: "12,543", icon: Users, trend: "+8.1%" },
  { title: "Avg. Study Time", value: "3.2h/day", icon: Clock, trend: "+12.3%" },
  { title: "Courses Completed", value: "1,287", icon: Award, trend: "+5.7%" },
  { title: "Active Courses", value: "42", icon: BookOpen, trend: "+2.4%" },
];

export default function EduPeakDashboard() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              EduPeak Dashboard
            </h1>
            <p className="text-muted-foreground">
              Insights into student engagement and course performance
            </p>
          </div>
          <Button>
            <GraduationCap className="mr-2 size-4" />
            Generate Learning Report
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {performanceMetrics.map((metric) => (
            <Card key={metric.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {metric.title}
                </CardTitle>
                <metric.icon className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-xs text-muted-foreground">
                  <TrendingUp className="mr-1 inline-block size-3 text-primary" />
                  {metric.trend} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Student Engagement</CardTitle>
            <CardDescription>
              Desktop vs Mobile Usage (January - June 2024)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart
                  accessibilityLayer
                  data={engagementData}
                  margin={{
                    top: 5,
                    right: 10,
                    left: 10,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) =>
                      typeof value === "string"
                        ? value.slice(0, 3)
                        : String(value)
                    }
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => `${value}k`}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent />}
                  />
                  <Line
                    type="monotone"
                    dataKey="desktop"
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="mobile"
                    stroke="var(--color-mobile)"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="flex gap-2 font-medium leading-none">
              Mobile usage trending up by 15.2% this month{" "}
              <TrendingUp className="size-4 text-primary" />
            </div>
            <div className="leading-none text-muted-foreground">
              Desktop remains primary, but mobile is growing faster
            </div>
          </CardFooter>
        </Card>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Courses</CardTitle>
              <CardDescription>
                Based on student completion rates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  {
                    name: "Introduction to Data Science",
                    completion: 92,
                    students: 1543,
                  },
                  {
                    name: "Web Development Bootcamp",
                    completion: 88,
                    students: 2102,
                  },
                  {
                    name: "Machine Learning Fundamentals",
                    completion: 85,
                    students: 1287,
                  },
                  {
                    name: "Digital Marketing Essentials",
                    completion: 83,
                    students: 1876,
                  },
                ].map((course, index) => (
                  <li key={index} className="flex items-center">
                    <div className="flex-1">
                      <p className="font-medium">{course.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {course.students} enrolled
                      </p>
                    </div>
                    <div className="ml-4 w-24 text-right">
                      <p className="font-medium">{course.completion}%</p>
                      <Progress value={course.completion} className="h-2" />
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Courses
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Student Feedback</CardTitle>
              <CardDescription>
                Recent course ratings and comments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  {
                    name: "Alex M.",
                    course: "Web Development Bootcamp",
                    rating: 5,
                    comment:
                      "Excellent course! Very comprehensive and practical.",
                  },
                  {
                    name: "Sarah L.",
                    course: "Digital Marketing Essentials",
                    rating: 4,
                    comment:
                      "Great content, but could use more real-world examples.",
                  },
                  {
                    name: "John D.",
                    course: "Machine Learning Fundamentals",
                    rating: 5,
                    comment:
                      "Challenging but rewarding. The projects were fantastic.",
                  },
                ].map((feedback, index) => (
                  <li
                    key={index}
                    className="border-b pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{feedback.name}</p>
                      <div className="flex">
                        {Array.from({ length: feedback.rating }, (_, i) => (
                          <Award key={i} className={`size-4 text-primary`} />
                        ))}
                        {Array.from({ length: 5 - feedback.rating }, (_, i) => (
                          <Award
                            key={i + feedback.rating}
                            className={`size-4 text-muted-foreground`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {feedback.course}
                    </p>
                    <p className="mt-1 text-sm">{feedback.comment}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Feedback
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
