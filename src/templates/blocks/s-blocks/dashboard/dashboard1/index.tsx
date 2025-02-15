"use client";

import { TrendingUp, Headphones, Music, Users, Clock } from "lucide-react";

import type { LucideIcon } from "lucide-react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import type { ChartConfig } from "@/components/ui/chart";
import { Button } from "@/components/ui/button";

interface ChartDataPoint {
  browser: string;
  visitors: number;
  fill: string;
}

interface Stat {
  title: string;
  value: string;
  icon: LucideIcon;
}

interface Track {
  title: string;
  artist: string;
  streams: number;
  duration: string;
}

interface ChartConfiguration extends ChartConfig {
  visitors: {
    label: string;
  };
  listeners: {
    label: string;
    color: string;
  };
}

const chartData: ChartDataPoint[] = [
  { browser: "listeners", visitors: 1200, fill: "hsl(var(--primary))" },
];

const chartConfig: ChartConfiguration = {
  visitors: {
    label: "Visitors",
  },
  listeners: {
    label: "Listeners",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

const stats: Stat[] = [
  { title: "Total Streams", value: "14.2M", icon: Headphones },
  { title: "Tracks Available", value: "2.8M", icon: Music },
  { title: "Active Users", value: "820K", icon: Users },
  { title: "Avg. Listening Time", value: "2.5h", icon: Clock },
];

const topTracks: Track[] = [
  {
    title: "Midnight Serenade",
    artist: "Luna Echo",
    streams: 1234567,
    duration: "3:45",
  },
  {
    title: "Neon Dreams",
    artist: "The Voltage",
    streams: 987654,
    duration: "4:12",
  },
  {
    title: "Whispers in the Wind",
    artist: "Aria Skye",
    streams: 876543,
    duration: "3:58",
  },
  {
    title: "Quantum Beats",
    artist: "Neutron Flux",
    streams: 765432,
    duration: "3:30",
  },
];

interface LabelProps {
  viewBox: {
    cx: number;
    cy: number;
  };
}

export default function HarmonyHubDashboard(): JSX.Element {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Harmony Hub Dashboard
            </h1>
            <p className="text-muted-foreground/80">
              Monitor and analyze your music streaming platform&apos;s
              performance
            </p>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Generate Report
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="size-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="md:col-span-1">
            <CardHeader className="items-center pb-0">
              <CardTitle>Active Listeners</CardTitle>
              <CardDescription>
                Current number of users streaming music
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[300px]"
              >
                <RadialBarChart
                  data={chartData}
                  startAngle={0}
                  endAngle={250}
                  innerRadius={80}
                  outerRadius={110}
                >
                  <PolarGrid
                    gridType="circle"
                    radialLines={false}
                    stroke="none"
                    className="first:fill-muted last:fill-background"
                    polarRadius={[86, 74]}
                  />
                  <RadialBar
                    dataKey="visitors"
                    background
                    cornerRadius={10}
                    fill={chartData[0]?.fill}
                  />
                  <PolarRadiusAxis
                    tick={false}
                    tickLine={false}
                    axisLine={false}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              <tspan
                                x={viewBox.cx}
                                y={viewBox.cy}
                                className="fill-primary text-4xl font-bold"
                              >
                                {Math.round(chartData[0]?.visitors ?? 0)}
                                {(chartData[0]?.visitors ?? 0 >= 1000000)
                                  ? "M"
                                  : (chartData[0]?.visitors ?? 0 >= 1000)
                                    ? "K"
                                    : ""}
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy ?? 0) + 24}
                                className="fill-muted-foreground/80"
                              >
                                Listeners
                              </tspan>
                            </text>
                          );
                        }
                      }}
                    />
                  </PolarRadiusAxis>
                </RadialBarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
              <div className="flex items-center gap-2 font-medium leading-none text-foreground">
                Trending up by 12.3% compared to last month{" "}
                <TrendingUp className="size-4 text-primary" />
              </div>
              <div className="leading-none text-muted-foreground">
                Based on real-time streaming data
              </div>
            </CardFooter>
          </Card>

          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Top Tracks</CardTitle>
              <CardDescription>
                Most streamed songs in the last 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {topTracks.map((track, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">
                        {track.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {track.artist} • {track.streams.toLocaleString()}{" "}
                        streams • {track.duration}
                      </p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Headphones className="size-4" />
                      <span className="sr-only">Listen to {track.title}</span>
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                View All Top Tracks
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
