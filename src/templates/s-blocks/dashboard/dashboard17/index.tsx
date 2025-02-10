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
  BookOpen,
  GraduationCap,
  Users,
  Trophy,
  MoreHorizontal,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

// Sample progress data
const progressData = Array.from({ length: 12 }, (_, i) => ({
  month: new Date(2024, i, 1).toISOString(),
  progress: Math.floor(Math.random() * 50) + 30,
}));

// Sample leaderboard data
const leaderboardData = [
  {
    name: "Liam Smith",
    score: "2850 pts",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Emma Brown",
    score: "2450 pts",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Noah Johnson",
    score: "1890 pts",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Olivia Davis",
    score: "1450 pts",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

// Sample popular courses
const popularCourses = [
  {
    name: "Introduction To React",
    category: "Web Development",
    rating: 4.8,
    progress: 75,
    icon: "⚛️",
  },
  {
    name: "Machine Learning Basics",
    category: "Data Science",
    rating: 4.9,
    progress: 60,
    icon: "🤖",
  },
  {
    name: "Digital Marketing Fundamentals",
    category: "Marketing",
    rating: 4.7,
    progress: 90,
    icon: "📊",
  },
  {
    name: "Python For Beginners",
    category: "Programming",
    rating: 4.6,
    progress: 45,
    icon: "🐍",
  },
  {
    name: "UX Design Principles",
    category: "Design",
    rating: 4.8,
    progress: 30,
    icon: "🎨",
  },
];

export default function AcademyDashboard() {
  return (
    <div className="container mx-auto py-6">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Hi, Andrew 👋</h1>
        <p className="text-muted-foreground">
          What do you want to learn today with your partner?
        </p>
        <Button className="mt-4">Explore Courses</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Learning Path */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Learning Path</CardTitle>
            <CardDescription>Full-Stack Developer</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={70} className="mb-2" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <div>Progress: 70.5%</div>
              <div>30 modules remaining</div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-primary/10 p-2">
                  <BookOpen className="size-4 text-primary" />
                </div>
                <div>
                  <div className="font-medium">30</div>
                  <div className="text-sm text-muted-foreground">
                    In Progress
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-primary/10 p-2">
                  <GraduationCap className="size-4 text-primary" />
                </div>
                <div>
                  <div className="font-medium">18</div>
                  <div className="text-sm text-muted-foreground">Completed</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leaderboard */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Leaderboard</CardTitle>
            <Button variant="ghost" size="icon">
              <Trophy className="size-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leaderboardData.map((user, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 text-sm font-medium">{i + 1}</div>
                  <Avatar>
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-medium">{user.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {user.score}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Success Rate */}
        <Card>
          <CardHeader>
            <CardTitle>Student Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2 text-3xl font-bold">88%</div>
            <Progress value={88} className="mb-2" />
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Users className="size-4 text-primary" />
                <div className="text-sm text-muted-foreground">
                  Total Students
                </div>
                <div className="font-medium">1500</div>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="size-4 text-primary" />
                <div className="text-sm text-muted-foreground">Passing</div>
                <div className="font-medium">1320</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Progress Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Course Progress by Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={progressData}>
                  <defs>
                    <linearGradient
                      id="progressGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor="hsl(var(--primary))"
                        stopOpacity={0.3}
                      />
                      <stop
                        offset="95%"
                        stopColor="hsl(var(--primary))"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value: string | number | Date) => {
                      const date = new Date(value);
                      if (isNaN(date.getTime())) {
                        return "Invalid Date";
                      }
                      return date.toLocaleDateString("en-US", {
                        month: "short",
                      });
                    }}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(var(--background))",
                      borderRadius: "8px",
                      border: "1px solid hsl(var(--border))",
                    }}
                    labelStyle={{ color: "hsl(var(--foreground))" }}
                    formatter={(value: number) => [`${value}%`, "Progress"]}
                    labelFormatter={(label: string | number | Date) => {
                      const date = new Date(label);
                      return date.toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      });
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="progress"
                    stroke="hsl(var(--primary))"
                    fill="url(#progressGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Popular Courses */}
      <Card className="mt-6">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Popular Courses</CardTitle>
          <Button variant="ghost" size="sm">
            View all
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {popularCourses.map((course, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="text-2xl">{course.icon}</div>
                <div className="min-w-0 flex-1">
                  <div className="truncate font-medium">{course.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {course.category}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  ⭐ {course.rating}
                </div>
                <Progress value={course.progress} className="w-20" />
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="size-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
