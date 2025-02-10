"use client";

import React from "react";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import {
  Activity,
  Droplet,
  Flame,
  Heart,
  TrendingUp,
  Utensils,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

// Expanded chart data for a week
const chartData = [
  { date: "2024-07-15", running: 450, swimming: 300, cycling: 200 },
  { date: "2024-07-16", running: 380, swimming: 420, cycling: 150 },
  { date: "2024-07-17", running: 520, swimming: 120, cycling: 300 },
  { date: "2024-07-18", running: 140, swimming: 550, cycling: 250 },
  { date: "2024-07-19", running: 600, swimming: 350, cycling: 100 },
  { date: "2024-07-20", running: 480, swimming: 400, cycling: 220 },
  { date: "2024-07-21", running: 510, swimming: 280, cycling: 180 },
];

const chartConfig = {
  running: {
    label: "Running",
    color: "hsl(var(--chart-1))",
  },
  swimming: {
    label: "Swimming",
    color: "hsl(var(--chart-2))",
  },
  cycling: {
    label: "Cycling",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

const weeklyGoals = [
  { activity: "Running", current: 3080, goal: 3500 },
  { activity: "Swimming", current: 2420, goal: 2800 },
  { activity: "Cycling", current: 1400, goal: 2000 },
];

const heartRateData = [
  { time: "00:00", rate: 62 },
  { time: "04:00", rate: 60 },
  { time: "08:00", rate: 75 },
  { time: "12:00", rate: 82 },
  { time: "16:00", rate: 78 },
  { time: "20:00", rate: 72 },
  { time: "23:59", rate: 65 },
];

export default function FitTrackDashboard() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              FitTrack Dashboard
            </h1>
            <p className="text-muted-foreground">
              Your personal fitness journey at a glance
            </p>
          </div>
          <Button>
            <Activity className="mr-2 size-4" />
            Start Workout
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Total Calories Burned",
              value: "2,543",
              icon: Flame,
              trend: "+8.1%",
            },
            {
              title: "Avg. Heart Rate",
              value: "72 bpm",
              icon: Heart,
              trend: "-2.3%",
            },
            {
              title: "Water Intake",
              value: "2.7L",
              icon: Droplet,
              trend: "+5.7%",
            },
            {
              title: "Protein Intake",
              value: "98g",
              icon: Utensils,
              trend: "+3.2%",
            },
          ].map((metric, index) => (
            <Card key={index}>
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
                  {metric.trend} from last week
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Activity Breakdown</CardTitle>
            <CardDescription>
              Calories burned through different activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <BarChart accessibilityLayer data={chartData} height={350}>
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      weekday: "short",
                    });
                  }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value} kcal`}
                />
                <Bar
                  dataKey="running"
                  stackId="a"
                  fill="var(--color-running)"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="swimming"
                  stackId="a"
                  fill="var(--color-swimming)"
                />
                <Bar
                  dataKey="cycling"
                  stackId="a"
                  fill="var(--color-cycling)"
                  radius={[0, 0, 4, 4]}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      hideLabel
                      className="w-[180px]"
                      formatter={(value, name, item, index) => (
                        <>
                          <div
                            className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-[--color-bg]"
                            style={
                              {
                                "--color-bg": `var(--color-${name})`,
                              } as React.CSSProperties
                            }
                          />
                          {chartConfig[name as keyof typeof chartConfig]
                            ?.label || name}
                          <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                            {value}
                            <span className="font-normal text-muted-foreground">
                              kcal
                            </span>
                          </div>
                          {index === 2 && (
                            <div className="mt-1.5 flex basis-full items-center border-t pt-1.5 text-xs font-medium text-foreground">
                              Total
                              <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                                {item.payload.running +
                                  item.payload.swimming +
                                  item.payload.cycling}
                                <span className="font-normal text-muted-foreground">
                                  kcal
                                </span>
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    />
                  }
                  cursor={false}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Goals Progress</CardTitle>
              <CardDescription>
                Track your progress towards weekly activity goals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyGoals.map((goal) => (
                  <div key={goal.activity} className="flex flex-col space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{goal.activity}</span>
                      <span>
                        {Math.round((goal.current / goal.goal) * 100)}%
                      </span>
                    </div>
                    <Progress value={(goal.current / goal.goal) * 100} />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{goal.current} kcal</span>
                      <span>{goal.goal} kcal</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Heart Rate Monitoring</CardTitle>
              <CardDescription>24-hour heart rate trend</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={heartRateData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="rate"
                    stroke="hsl(var(--primary))"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Average heart rate: 72 bpm
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
