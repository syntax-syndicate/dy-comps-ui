"use client";

import { TrendingUp, Leaf, Recycle, Droplet, Wind } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

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
  { month: "January", ecoProducts: 186, standardProducts: 80 },
  { month: "February", ecoProducts: 305, standardProducts: 200 },
  { month: "March", ecoProducts: 237, standardProducts: 120 },
  { month: "April", ecoProducts: 273, standardProducts: 190 },
  { month: "May", ecoProducts: 309, standardProducts: 130 },
  { month: "June", ecoProducts: 314, standardProducts: 140 },
];

const chartConfig = {
  ecoProducts: {
    label: "Eco-Friendly Products",
    color: "hsl(var(--chart-1))",
  },
  standardProducts: {
    label: "Standard Products",
    color: "hsl(var(--chart-2))",
  },
} satisfies Record<string, { label: string; color: string }>; // Corrected ChartConfig type

const ecoStats = [
  { title: "Carbon Offset", value: "1,250 tons", icon: Leaf },
  { title: "Recycled Materials", value: "78%", icon: Recycle },
  { title: "Water Saved", value: "2.3M gallons", icon: Droplet },
  { title: "Renewable Energy", value: "92%", icon: Wind },
];

export default function GreenWaveDashboard() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              GreenWave Dashboard
            </h1>
            <p className="text-muted-foreground">
              Monitor and analyze your eco-friendly product impact
            </p>
          </div>
          <Button>Generate Sustainability Report</Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {ecoStats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="size-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Product Sales Comparison</CardTitle>
            <CardDescription>
              Eco-friendly vs Standard Product Sales for the Last 6 Months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: -20,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => {
                    if (typeof value === "string") {
                      return value.slice(0, 3);
                    }
                    return String(value); // added to handle other types
                  }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickCount={5}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <Area
                  dataKey="standardProducts"
                  type="natural"
                  fill="var(--color-standardProducts)"
                  fillOpacity={0.4}
                  stroke="var(--color-standardProducts)"
                  stackId="a"
                />
                <Area
                  dataKey="ecoProducts"
                  type="natural"
                  fill="var(--color-ecoProducts)"
                  fillOpacity={0.4}
                  stroke="var(--color-ecoProducts)"
                  stackId="a"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
          <CardFooter>
            <div className="flex w-full items-start gap-2 text-sm">
              <div className="grid gap-2">
                <div className="flex items-center gap-2 font-medium leading-none">
                  Eco-friendly products trending up by 8.7% this month{" "}
                  <TrendingUp className="size-4 text-primary" />
                </div>
                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                  January - June 2024
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Top Eco-Friendly Products</CardTitle>
              <CardDescription>
                Best-selling sustainable items this month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  { name: "Bamboo Toothbrush Set", sales: 12453, rating: 4.8 },
                  { name: "Reusable Water Bottle", sales: 10234, rating: 4.9 },
                  { name: "Organic Cotton Tote Bag", sales: 9876, rating: 4.7 },
                  { name: "Solar-Powered Charger", sales: 8765, rating: 4.6 },
                ].map((product, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {product.sales.toLocaleString()} sales •{" "}
                        {product.rating} rating
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Products
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sustainability Goals</CardTitle>
              <CardDescription>
                Progress towards our environmental targets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  { goal: "100% Renewable Energy", progress: 92, target: 100 },
                  { goal: "Zero Waste to Landfill", progress: 87, target: 100 },
                  {
                    goal: "Carbon Neutral Operations",
                    progress: 78,
                    target: 100,
                  },
                  { goal: "Sustainable Packaging", progress: 95, target: 100 },
                ].map((goal, index) => (
                  <li key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{goal.goal}</p>
                      <p className="text-sm font-medium">{goal.progress}%</p>
                    </div>
                    <div className="h-2 w-full bg-secondary">
                      <div
                        className="h-full bg-primary"
                        style={{
                          width: `${(goal.progress / goal.target) * 100}%`,
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Update Goals
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
