"use client";

import * as React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, Users, Globe, MousePointer, Clock } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import type { ChartConfig } from "@/components/ui/chart";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "@/components/ui/button";

// Generate 90 days of data
const chartData = Array.from({ length: 90 }, (_, i) => {
  const date = new Date(2024, 3, i + 1); // Start from April 1, 2024
  return {
    date: date.toISOString().split("T")[0],
    desktop: Math.floor(Math.random() * 500) + 100,
    mobile: Math.floor(Math.random() * 400) + 50,
  };
});

const chartConfig = {
  views: {
    label: "Page Views",
  },
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const bounceRateData = [
  { name: "Desktop", value: 35 },
  { name: "Mobile", value: 65 },
];

const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))"];

const sessionDurationData = Array.from({ length: 30 }, (_, i) => {
  return {
    date: (i + 1).toString(),
    desktop: (Math.random() * 2 + 4).toFixed(2),
    mobile: (Math.random() * 2 + 2).toFixed(2),
  };
});

// Define a type for the keys that can be used to access total
type TotalKeys = "desktop" | "mobile";

export default function DigitalPulseDashboard() {
  const [activeChart, setActiveChart] = React.useState<TotalKeys>("desktop");

  const total = React.useMemo(
    () => ({
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    [],
  );

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              DigitalPulse Dashboard
            </h1>
            <p className="text-muted-foreground">
              Real-time web analytics and insights
            </p>
          </div>
          <Button>
            <Globe className="mr-2 size-4" />
            Generate Full Report
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Total Visitors",
              value: (total.desktop + total.mobile).toLocaleString(),
              icon: Users,
              trend: "+8.1%",
            },
            {
              title: "Avg. Session Duration",
              value: "4m 32s",
              icon: Clock,
              trend: "+2.3%",
            },
            {
              title: "Bounce Rate",
              value: "32.8%",
              icon: MousePointer,
              trend: "-1.5%",
            },
            {
              title: "Conversion Rate",
              value: "3.6%",
              icon: TrendingUp,
              trend: "+0.8%",
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
                  {metric.trend} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
            <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
              <CardTitle>Visitor Traffic</CardTitle>
              <CardDescription>
                Showing total visitors for the last 3 months
              </CardDescription>
            </div>
            <div className="flex">
              {Object.keys(total).map((key) => {
                const chart = key as TotalKeys;
                return (
                  <button
                    key={chart}
                    data-active={activeChart === chart}
                    className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                    onClick={() => setActiveChart(chart)}
                  >
                    <span className="text-xs text-muted-foreground">
                      {chartConfig[chart].label}
                    </span>
                    <span className="text-lg font-bold leading-none sm:text-3xl">
                      {total[chart].toLocaleString()}
                    </span>
                  </button>
                );
              })}
            </div>
          </CardHeader>
          <CardContent className="px-2 sm:p-6">
            <ChartContainer
              config={chartConfig}
              className="aspect-auto h-[250px] w-full"
            >
              <BarChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={32}
                  tickFormatter={(value: string) => {
                    const date = new Date(value);
                    return date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                />
                <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      className="w-[150px]"
                      nameKey="views"
                      labelFormatter={(value: string) => {
                        return new Date(value).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        });
                      }}
                    />
                  }
                />
                <Bar
                  dataKey={activeChart}
                  fill={`var(--color-${activeChart})`}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Bounce Rate</CardTitle>
              <CardDescription>Desktop vs Mobile</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={bounceRateData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {bounceRateData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <ChartTooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Mobile users have a significantly higher bounce rate. Consider
                optimizing mobile experience.
              </p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Avg. Session Duration</CardTitle>
              <CardDescription>Last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={sessionDurationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <ChartTooltip />
                  <Line type="monotone" dataKey="desktop" stroke={COLORS[0]} />
                  <Line type="monotone" dataKey="mobile" stroke={COLORS[1]} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Desktop sessions consistently longer. Mobile engagement could be
                improved.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
