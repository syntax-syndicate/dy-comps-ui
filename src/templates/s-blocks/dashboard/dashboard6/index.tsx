"use client";
import type { ReactNode } from "react";
import {
  useState,
  createContext,
  useContext,
  type PropsWithChildren,
  type FC,
} from "react";
import {
  TrendingUp,
  Activity,
  Heart,
  Flame,
  Droplet,
  Moon,
  ChevronRight,
} from "lucide-react";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { type TooltipProps } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

// Define the ChartConfig type using Record
type ChartConfig = Record<string, { label: string; color: string }>;

const fitnessData = [
  { category: "Cardio", score: 80 },
  { category: "Strength", score: 65 },
  { category: "Flexibility", score: 70 },
  { category: "Balance", score: 75 },
  { category: "Endurance", score: 85 },
  { category: "Recovery", score: 60 },
];

const chartConfig: ChartConfig = {
  score: {
    label: "Fitness Score",
    color: "hsl(var(--primary))",
  },
};

const weeklyProgressData = [
  { day: "Mon", calories: 350, steps: 8000 },
  { day: "Tue", calories: 400, steps: 10000 },
  { day: "Wed", calories: 300, steps: 7000 },
  { day: "Thu", calories: 450, steps: 12000 },
  { day: "Fri", calories: 380, steps: 9000 },
  { day: "Sat", calories: 500, steps: 15000 },
  { day: "Sun", calories: 420, steps: 11000 },
];

const healthMetrics = [
  { title: "Daily Steps", value: "10,234", icon: Activity, trend: "+8.1%" },
  { title: "Avg. Heart Rate", value: "72 bpm", icon: Heart, trend: "-2.3%" },
  { title: "Calories Burned", value: "2,867", icon: Flame, trend: "+12.5%" },
  { title: "Water Intake", value: "2.5L", icon: Droplet, trend: "+5.7%" },
];

type ChartContextType = {
  config: ChartConfig;
};

const ChartContext = createContext<ChartContextType | null>(null);

export const ChartContainer: FC<
  PropsWithChildren<{
    config: ChartConfig;
    className?: string;
  }>
> = ({ config, className, children }) => {
  return (
    <ChartContext.Provider value={{ config }}>
      <div className={className}>{children}</div>
    </ChartContext.Provider>
  );
};

export function useChart() {
  const context = useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

interface PayloadItem {
  payload: Record<string, unknown>;
}

interface ChartTooltipContentProps {
  label?: string;
  payload?: PayloadItem[];
}

export const ChartTooltip: FC<
  TooltipProps<number | string, string> & {
    children?: ReactNode;
  }
> = ({ children }) => {
  return (
    <div className="rounded-md border bg-popover p-2 text-popover-foreground shadow-md">
      <div className="space-y-1">{children}</div>
    </div>
  );
};

export const ChartTooltipContent: FC<ChartTooltipContentProps> = ({
  label,
  payload,
}) => {
  const { config } = useChart();
  const data = payload?.[0]?.payload;

  return (
    <div className="space-y-1">
      {label && <div className="font-bold">{label}</div>}
      {data &&
        Object.entries(data).map(([key, value]) => {
          const fieldConfig = config[key];

          if (!fieldConfig) {
            return null;
          }

          return (
            <div key={key} className="flex items-center gap-2">
              <div
                className="size-2 rounded-full"
                style={{
                  backgroundColor: fieldConfig.color,
                }}
              />
              <div className="text-sm">
                {fieldConfig.label}:{" "}
                <span className="font-bold">{value as string}</span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default function FitTrackDashboard() {
  const [selectedMetric, setSelectedMetric] = useState("calories");

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
              FitTrack Dashboard
            </h1>
            <p className="text-muted-foreground">
              Your personal fitness and wellness tracker
            </p>
          </div>
          <Button>
            <Activity className="mr-2 size-4" />
            Start Workout
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {healthMetrics.map((metric) => (
            <Card key={metric.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {metric.title}
                </CardTitle>
                <metric.icon className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold md:text-2xl">
                  {metric.value}
                </div>
                <p className="text-xs text-muted-foreground">
                  <TrendingUp className="mr-1 inline-block size-3 text-primary" />
                  {metric.trend} from last week
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader className="items-center">
              <CardTitle>Fitness Balance</CardTitle>
              <CardDescription>
                Your performance across different fitness categories
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-0">
              <ChartContainer config={chartConfig}>
                <ResponsiveContainer width="100%" height={250}>
                  <RadarChart data={fitnessData} outerRadius="80%">
                    <PolarGrid />
                    <PolarAngleAxis
                      dataKey="category"
                      tick={{ fontSize: 12 }}
                    />
                    <Radar
                      name="Score"
                      dataKey="score"
                      stroke="var(--color-score)"
                      fill="var(--color-score)"
                      fillOpacity={0.6}
                      dot={{
                        r: 4,
                        fillOpacity: 1,
                      }}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent />}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
              <div className="flex items-center gap-2 font-medium leading-none">
                Overall fitness score improved by 5.2%{" "}
                <TrendingUp className="size-4" />
              </div>
              <div className="flex items-center gap-2 leading-none text-muted-foreground">
                Focus on improving flexibility this week
              </div>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Weekly Progress</CardTitle>
              <CardDescription>Calories burned and steps taken</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-4 flex items-center justify-between">
                <div className="space-x-2">
                  <Button
                    variant={
                      selectedMetric === "calories" ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedMetric("calories")}
                  >
                    Calories
                  </Button>
                  <Button
                    variant={selectedMetric === "steps" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedMetric("steps")}
                  >
                    Steps
                  </Button>
                </div>
              </div>
              <ChartContainer
                config={{
                  [selectedMetric]: {
                    label:
                      selectedMetric === "calories"
                        ? "Calories Burned"
                        : "Steps Taken",
                    color: "hsl(var(--primary))",
                  },
                }}
              >
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={weeklyProgressData}>
                      <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "hsl(var(--muted-foreground))" }}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "hsl(var(--muted-foreground))" }}
                        width={40}
                      />
                      <ChartTooltip
                        content={<ChartTooltipContent />}
                        cursor={{
                          stroke: "hsl(var(--muted-foreground))",
                          strokeWidth: 1,
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey={selectedMetric}
                        strokeWidth={3}
                        dot={false}
                        activeDot={{
                          r: 8,
                          style: { fill: "hsl(var(--primary))", opacity: 0.8 },
                        }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </ChartContainer>
            </CardContent>
            <CardFooter>
              <div className="flex w-full items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {selectedMetric === "calories"
                    ? "Highest burn on Saturday"
                    : "Most steps on Saturday"}
                </span>
                <Button variant="outline" size="sm">
                  View Details
                  <ChevronRight className="ml-2 size-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sleep Analysis</CardTitle>
            <CardDescription>
              Your sleep patterns for the past week
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { day: "Monday", duration: "7h 30m", quality: 85 },
                { day: "Tuesday", duration: "6h 45m", quality: 70 },
                { day: "Wednesday", duration: "8h 15m", quality: 90 },
                { day: "Thursday", duration: "7h 00m", quality: 75 },
                { day: "Friday", duration: "7h 45m", quality: 80 },
                { day: "Saturday", duration: "9h 00m", quality: 95 },
                { day: "Sunday", duration: "8h 30m", quality: 88 },
              ].map((sleep, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-36">
                    <p className="font-medium">{sleep.day}</p>
                    <p className="text-sm text-muted-foreground">
                      {sleep.duration}
                    </p>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center">
                      <Progress value={sleep.quality} className="h-2" />
                      <span className="ml-2 text-sm font-medium">
                        {sleep.quality}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex w-full items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Average sleep quality: 83%
              </span>
              <Button variant="outline" size="sm">
                Improve Sleep
                <Moon className="ml-2 size-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
