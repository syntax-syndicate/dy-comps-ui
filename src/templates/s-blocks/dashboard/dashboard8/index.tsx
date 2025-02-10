"use client";

import * as React from "react";
import {
  TrendingUp,
  Smartphone,
  Laptop,
  Tablet,
  Tv,
  Watch,
  Wifi,
  Users,
  ArrowUpRight,
} from "lucide-react";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
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
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const technologyAdoptionData = [
  {
    month: "January",
    desktop: 186,
    mobile: 80,
    tablet: 50,
    smartTV: 30,
    wearable: 20,
  },
  {
    month: "February",
    desktop: 305,
    mobile: 200,
    tablet: 80,
    smartTV: 45,
    wearable: 35,
  },
  {
    month: "March",
    desktop: 237,
    mobile: 120,
    tablet: 70,
    smartTV: 40,
    wearable: 30,
  },
  {
    month: "April",
    desktop: 273,
    mobile: 190,
    tablet: 90,
    smartTV: 55,
    wearable: 40,
  },
  {
    month: "May",
    desktop: 309,
    mobile: 230,
    tablet: 100,
    smartTV: 60,
    wearable: 45,
  },
  {
    month: "June",
    desktop: 314,
    mobile: 240,
    tablet: 110,
    smartTV: 65,
    wearable: 50,
  },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  tablet: {
    label: "Tablet",
    color: "hsl(var(--chart-3))",
  },
  smartTV: {
    label: "Smart TV",
    color: "hsl(var(--chart-4))",
  },
  wearable: {
    label: "Wearable",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

const ageGroupAdoptionData = [
  {
    name: "18-24",
    desktop: 70,
    mobile: 95,
    tablet: 60,
    smartTV: 40,
    wearable: 55,
  },
  {
    name: "25-34",
    desktop: 85,
    mobile: 90,
    tablet: 70,
    smartTV: 50,
    wearable: 60,
  },
  {
    name: "35-44",
    desktop: 90,
    mobile: 85,
    tablet: 75,
    smartTV: 60,
    wearable: 50,
  },
  {
    name: "45-54",
    desktop: 80,
    mobile: 70,
    tablet: 65,
    smartTV: 55,
    wearable: 35,
  },
  {
    name: "55+",
    desktop: 60,
    mobile: 50,
    tablet: 45,
    smartTV: 40,
    wearable: 20,
  },
];

const trendingTechnologies = [
  { name: "5G Networks", growth: 78, icon: Wifi },
  { name: "AI Assistants", growth: 62, icon: Smartphone },
  { name: "VR Headsets", growth: 45, icon: Tv },
  { name: "Smart Home Devices", growth: 56, icon: Laptop },
];

export default function TechTrendsDashboard() {
  const [selectedAgeGroup, setSelectedAgeGroup] = React.useState("all");

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              TechTrends Dashboard
            </h1>
            <p className="text-muted-foreground">
              Analyzing technology adoption across demographics
            </p>
          </div>
          <Button>
            <Users className="mr-2 size-4" />
            Generate Demographics Report
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(chartConfig).map(([key, value]) => (
            <Card key={key}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {value.label} Adoption
                </CardTitle>
                {key === "desktop" && (
                  <Laptop className="size-4 text-muted-foreground" />
                )}
                {key === "mobile" && (
                  <Smartphone className="size-4 text-muted-foreground" />
                )}
                {key === "tablet" && (
                  <Tablet className="size-4 text-muted-foreground" />
                )}
                {key === "smartTV" && (
                  <Tv className="size-4 text-muted-foreground" />
                )}
                {key === "wearable" && (
                  <Watch className="size-4 text-muted-foreground" />
                )}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {
                    technologyAdoptionData[5]
                      ? technologyAdoptionData[5][
                          key as keyof (typeof technologyAdoptionData)[0]
                        ]
                      : "N/A" // Or some other default value/fallback
                  }
                  %
                </div>
                <p className="text-xs text-muted-foreground">
                  <TrendingUp className="mr-1 inline-block size-3 text-primary" />
                  +{Math.floor(Math.random() * 10 + 1)}% from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader className="items-center pb-4">
            <CardTitle>Technology Adoption Trends</CardTitle>
            <CardDescription>
              Showing adoption rates across different technologies for the last
              6 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[350px]"
            >
              <RadarChart
                data={technologyAdoptionData}
                margin={{
                  top: 0,
                  right: 30,
                  left: 30,
                  bottom: 0,
                }}
              >
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <PolarAngleAxis dataKey="month" />
                <PolarGrid />
                {Object.keys(chartConfig).map((key) => (
                  <Radar
                    key={key}
                    name={chartConfig[key as keyof typeof chartConfig].label}
                    dataKey={key}
                    stroke={chartConfig[key as keyof typeof chartConfig].color}
                    fill={chartConfig[key as keyof typeof chartConfig].color}
                    fillOpacity={0.6}
                  />
                ))}
                <ChartLegend
                  className="mt-8"
                  content={<ChartLegendContent />}
                />
              </RadarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col gap-2 pt-4 text-sm">
            <div className="flex items-center gap-2 font-medium leading-none">
              Overall adoption trending up by 7.3% this month{" "}
              <TrendingUp className="size-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </CardFooter>
        </Card>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Age Group Technology Adoption</CardTitle>
              <CardDescription>
                Adoption rates across different age groups
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Select
                value={selectedAgeGroup}
                onValueChange={setSelectedAgeGroup}
              >
                <SelectTrigger className="mb-4 w-[180px]">
                  <SelectValue placeholder="Select age group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Age Groups</SelectItem>
                  {ageGroupAdoptionData.map((group) => (
                    <SelectItem key={group.name} value={group.name}>
                      {group.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={
                    selectedAgeGroup === "all"
                      ? ageGroupAdoptionData
                      : [
                          ageGroupAdoptionData.find(
                            (g) => g.name === selectedAgeGroup,
                          )!,
                        ]
                  }
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  {Object.keys(chartConfig).map((key) => (
                    <Bar
                      key={key}
                      dataKey={key}
                      name={chartConfig[key as keyof typeof chartConfig].label}
                      fill={chartConfig[key as keyof typeof chartConfig].color}
                    />
                  ))}
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Trending Technologies</CardTitle>
              <CardDescription>
                Fastest growing tech adoption in the last quarter
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {trendingTechnologies.map((tech) => (
                  <li
                    key={tech.name}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <tech.icon className="mr-2 size-4" />
                      <span>{tech.name}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2 font-bold">{tech.growth}%</span>
                      <ArrowUpRight className="size-4 text-green-500" />
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Trends
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
