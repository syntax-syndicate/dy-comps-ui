"use client";

import { TrendingUp, Globe, Users, Clock, Zap, BarChart3 } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { useState, useEffect } from "react";

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

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies Record<string, { label: string; color?: string }>;

const performanceMetrics = [
  { title: "Total Visitors", value: "1.2M", icon: Users },
  { title: "Avg. Session Duration", value: "4m 32s", icon: Clock },
  { title: "Bounce Rate", value: "32.8%", icon: BarChart3 },
  { title: "Page Load Time", value: "1.4s", icon: Zap },
];

export default function TechPulseDashboard() {
  const [browserPerformance, setBrowserPerformance] = useState<
    Record<string, string>
  >({});

  useEffect(() => {
    const performanceData: Record<string, string> = {};
    Object.keys(chartConfig)
      .slice(1)
      .forEach((key) => {
        performanceData[key] = `${(Math.random() * 5).toFixed(2)}s`;
      });
    setBrowserPerformance(performanceData);
  }, []);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              TechPulse Dashboard
            </h1>
            <p className="text-muted-foreground">
              Browser analytics and performance insights
            </p>
          </div>
          <Button>
            <Globe className="mr-2 size-4" />
            Generate Global Report
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
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Browser Usage Distribution</CardTitle>
              <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <BarChart
                  accessibilityLayer
                  data={chartData}
                  layout="vertical"
                  margin={{
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                  }}
                >
                  <YAxis
                    dataKey="browser"
                    type="category"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) =>
                      chartConfig[value as keyof typeof chartConfig]?.label
                    }
                  />
                  <XAxis dataKey="visitors" type="number" hide />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Bar dataKey="visitors" layout="vertical" radius={5} />
                </BarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
              <div className="flex gap-2 font-medium leading-none">
                Chrome trending up by 5.2% this month{" "}
                <TrendingUp className="size-4 text-primary" />
              </div>
              <div className="leading-none text-muted-foreground">
                Based on total visitors for the last 6 months
              </div>
            </CardFooter>
          </Card>

          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Browser Performance Comparison</CardTitle>
              <CardDescription>Average metrics across browsers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(chartConfig)
                  .slice(1)
                  .map(([key, value]) => (
                    <div key={key} className="flex items-center">
                      <div className="w-[100px] flex-shrink-0">
                        <div className="font-medium">{value.label}</div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center">
                          <div className="h-2 w-full rounded-full bg-secondary">
                            {"color" in value ? (
                              <div
                                className="h-full rounded-full"
                                style={{
                                  width: `${Math.random() * 100}%`,
                                  backgroundColor: value.color,
                                }}
                              />
                            ) : (
                              <div
                                className="h-full rounded-full"
                                style={{
                                  width: `${Math.random() * 100}%`,
                                  backgroundColor: "gray",
                                }}
                              />
                            )}
                          </div>
                          <span className="ml-2 text-sm">
                            {browserPerformance[key]}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Detailed Performance Report
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Browser Updates</CardTitle>
            <CardDescription>Latest versions and key features</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  browser: "Chrome",
                  version: "91.0.4472.124",
                  feature: "Enhanced privacy controls",
                },
                {
                  browser: "Safari",
                  version: "14.1.1",
                  feature: "Improved tab management",
                },
                {
                  browser: "Firefox",
                  version: "89.0.2",
                  feature: "New UI design",
                },
                {
                  browser: "Edge",
                  version: "91.0.864.59",
                  feature: "Vertical tabs",
                },
                {
                  browser: "Opera",
                  version: "77.0.4054.277",
                  feature: "Built-in VPN",
                },
                {
                  browser: "Brave",
                  version: "1.26.74",
                  feature: "Enhanced ad-blocking",
                },
              ].map((item) => (
                <Card
                  key={item.browser}
                  className="flex flex-col justify-between"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{item.browser}</CardTitle>
                    <CardDescription>Version {item.version}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{item.feature}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Browser Updates
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
