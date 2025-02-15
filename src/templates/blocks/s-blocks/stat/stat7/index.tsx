"use client";

import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowDown,
  ArrowUp,
  BarChart3,
  PieChart,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

export default function EnhancedWeeklyStats() {
  const [activeTab, setActiveTab] = useState("thisWeek");

  const stats = {
    thisWeek: [
      { label: "Work completed", value: 80.2, change: 10, increasing: true },
      { label: "Progress metric", value: 55.2, change: 29, increasing: false },
      {
        label: "Error rate",
        value: 20.1,
        change: 5,
        increasing: true,
        isNegative: true,
      },
    ],
    lastWeek: [
      { label: "Work completed", value: 70.2, change: 5, increasing: true },
      { label: "Progress metric", value: 84.2, change: 15, increasing: true },
      {
        label: "Error rate",
        value: 15.1,
        change: 2,
        increasing: false,
        isNegative: true,
      },
    ],
  };

  return (
    <div className="py-16">
      <Card className="mx-auto w-full max-w-4xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">
            Weekly Performance Dashboard
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Track your team&apos;s progress and identify areas for improvement
          </p>
        </CardHeader>
        <CardContent>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="mb-4 grid w-full grid-cols-2">
              <TabsTrigger value="thisWeek">This Week</TabsTrigger>
              <TabsTrigger value="lastWeek">Last Week</TabsTrigger>
            </TabsList>
            <TabsContent value="thisWeek" className="space-y-4">
              {stats.thisWeek.map((stat, index) => (
                <StatItem key={index} {...stat} />
              ))}
            </TabsContent>
            <TabsContent value="lastWeek" className="space-y-4">
              {stats.lastWeek.map((stat, index) => (
                <StatItem key={index} {...stat} />
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

interface StatItemProps {
  label: string;
  value: number;
  change: number;
  increasing: boolean;
  isNegative?: boolean;
}

function StatItem({
  label,
  value,
  change,
  increasing,
  isNegative = false,
}: StatItemProps) {
  const Icon = isNegative
    ? increasing
      ? TrendingUp
      : TrendingDown
    : increasing
      ? BarChart3
      : PieChart;
  const ArrowIcon = increasing ? ArrowUp : ArrowDown;

  return (
    <div className="bg-card-secondary rounded-lg p-4">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon className="size-5 text-muted-foreground" />
          <h3 className="font-medium">{label}</h3>
        </div>
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
            isNegative
              ? increasing
                ? "bg-destructive/10 text-destructive"
                : "bg-success/10 text-success"
              : increasing
                ? "bg-primary/10 text-primary"
                : "bg-secondary text-secondary-foreground"
          }`}
        >
          {value.toFixed(1)}%
        </span>
      </div>
      <Progress value={value} className="mb-2 h-2" />
      <div className="flex items-center justify-between text-sm">
        <p className="text-muted-foreground">
          {change}% {increasing ? "increase" : "decrease"}
        </p>
        <span
          className={`flex items-center space-x-1 ${
            isNegative
              ? increasing
                ? "text-destructive"
                : "text-success"
              : "text-primary"
          }`}
        >
          <ArrowIcon className="size-4" />
          <span>{change}%</span>
        </span>
      </div>
    </div>
  );
}
