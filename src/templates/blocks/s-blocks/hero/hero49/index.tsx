"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Award, ArrowRight, Shield, TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
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

import type { ChartConfig } from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
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
} satisfies ChartConfig;

export default function InvestmentLandingPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="w-full bg-background text-foreground">
      <div className="container py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl">
                Empowering Global Innovation
              </h1>
              <p className="text-xl text-muted-foreground">
                At GrowthVest, we identify and nurture groundbreaking
                technologies that shape the future. Join us in fueling progress
                and creating sustainable value.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex max-w-md flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12"
                  required
                />
                <Button
                  type="submit"
                  className="h-12 bg-primary px-8 text-primary-foreground hover:bg-primary/90"
                >
                  Get Started
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Award className="size-5 text-primary" />
                  <span className="font-medium">Top-tier investments</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="size-5 text-primary" />
                  <span>Secure and compliant</span>
                </div>
              </div>
            </form>
          </div>

          {/* Right Column - Interactive Chart */}
          <div className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow">
            <Card>
              <CardHeader>
                <CardTitle>Investment Performance</CardTitle>
                <CardDescription>
                  Showing total investments for the last 6 months
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig}>
                  <AreaChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                      left: 12,
                      right: 12,
                    }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value: string) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="dot" />}
                    />
                    <Area
                      dataKey="mobile"
                      type="natural"
                      fill="var(--color-mobile)"
                      fillOpacity={0.4}
                      stroke="var(--color-mobile)"
                      stackId="a"
                    />
                    <Area
                      dataKey="desktop"
                      type="natural"
                      fill="var(--color-desktop)"
                      fillOpacity={0.4}
                      stroke="var(--color-desktop)"
                      stackId="a"
                    />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
              <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2 font-medium leading-none">
                      Trending up by 5.2% this month{" "}
                      <TrendingUp className="size-4" />
                    </div>
                    <div className="flex items-center gap-2 leading-none text-muted-foreground">
                      January - June 2024
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
