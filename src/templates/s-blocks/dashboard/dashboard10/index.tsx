"use client";

import * as React from "react";
import {
  Label,
  Pie,
  PieChart,
  Sector,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";
import { Laptop, Smartphone, Tablet, TrendingUp, Users } from "lucide-react";

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
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface DesktopDataItem {
  month: string;
  desktop: number;
  fill: string;
}

interface MobileDataItem {
  month: string;
  mobile: number;
  fill: string;
}

interface TabletDataItem {
  month: string;
  tablet: number;
  fill: string;
}

const desktopData: DesktopDataItem[] = [
  { month: "january", desktop: 186, fill: "var(--color-january)" },
  { month: "february", desktop: 305, fill: "var(--color-february)" },
  { month: "march", desktop: 237, fill: "var(--color-march)" },
  { month: "april", desktop: 173, fill: "var(--color-april)" },
  { month: "may", desktop: 209, fill: "var(--color-may)" },
];

const mobileData: MobileDataItem[] = [
  { month: "january", mobile: 120, fill: "var(--color-january)" },
  { month: "february", mobile: 180, fill: "var(--color-february)" },
  { month: "march", mobile: 195, fill: "var(--color-march)" },
  { month: "april", mobile: 210, fill: "var(--color-april)" },
  { month: "may", mobile: 250, fill: "var(--color-may)" },
];

const tabletData: TabletDataItem[] = [
  { month: "january", tablet: 80, fill: "var(--color-january)" },
  { month: "february", tablet: 95, fill: "var(--color-february)" },
  { month: "march", tablet: 110, fill: "var(--color-march)" },
  { month: "april", tablet: 125, fill: "var(--color-april)" },
  { month: "may", tablet: 140, fill: "var(--color-may)" },
];

interface TrendDataItem {
  month: string;
  desktop?: number;
  mobile?: number;
  tablet?: number;
}

const trendData: TrendDataItem[] = desktopData.map((item, index) => ({
  month: item.month,
  desktop: item.desktop,
  mobile: mobileData[index]?.mobile,
  tablet: tabletData[index]?.tablet,
}));

// Update ChartConfig to be more specific about the structure of each entry
interface SpecificChartConfig {
  label: string;
  color?: string;
}

const chartConfig: Record<string, SpecificChartConfig> = {
  visitors: {
    label: "Visitors",
  },
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
  january: {
    label: "January",
    color: "hsl(var(--chart-1))",
  },
  february: {
    label: "February",
    color: "hsl(var(--chart-2))",
  },
  march: {
    label: "March",
    color: "hsl(var(--chart-3))",
  },
  april: {
    label: "April",
    color: "hsl(var(--chart-4))",
  },
  may: {
    label: "May",
    color: "hsl(var(--chart-5))",
  },
};

// Define the possible values for activePlatform
type ActivePlatform = "desktop" | "mobile" | "tablet";

// Define a union type for the platform data
type PlatformData = DesktopDataItem[] | MobileDataItem[] | TabletDataItem[];

export default function TechTrendsAnalyticsDashboard() {
  const id = "pie-interactive";
  const [activeMonth, setActiveMonth] = React.useState(desktopData[0]?.month);
  const [activePlatform, setActivePlatform] =
    React.useState<ActivePlatform>("desktop");

  const activeIndex = React.useMemo(
    () => desktopData.findIndex((item) => item.month === activeMonth),
    [activeMonth],
  );
  const months = React.useMemo(() => desktopData.map((item) => item.month), []);

  const getPlatformData = (platform: ActivePlatform): PlatformData => {
    switch (platform) {
      case "desktop":
        return desktopData;
      case "mobile":
        return mobileData;
      case "tablet":
        return tabletData;
      default:
        return desktopData;
    }
  };

  const platformData = getPlatformData(activePlatform);

  const handlePlatformChange = (value: string) => {
    setActivePlatform(value as ActivePlatform);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              TechTrends Analytics Dashboard
            </h1>
            <p className="text-muted-foreground">
              Visualizing technology adoption across platforms
            </p>
          </div>
          <Button>
            <Users className="mr-2 size-4" />
            Generate Report
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Total Desktop Users",
              value: "1,110",
              icon: Laptop,
              trend: "+5.2%",
            },
            {
              title: "Total Mobile Users",
              value: "955",
              icon: Smartphone,
              trend: "+8.1%",
            },
            {
              title: "Total Tablet Users",
              value: "550",
              icon: Tablet,
              trend: "+3.7%",
            },
            {
              title: "Total Active Users",
              value: "2,615",
              icon: Users,
              trend: "+6.3%",
            },
          ].map((metric, index) => (
            <Card key={index} className={index === 6 ? "lg:col-start-2" : ""}>
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

        <div className="grid gap-8 md:grid-cols-2">
          <Card data-chart={id} className="flex flex-col">
            <ChartStyle id={id} config={chartConfig} />
            <CardHeader className="flex-row items-start space-y-0 pb-0">
              <div className="grid gap-1">
                <CardTitle>Platform Usage by Month</CardTitle>
                <CardDescription>January - May 2024</CardDescription>
              </div>
              <Select
                value={activePlatform}
                onValueChange={handlePlatformChange}
              >
                <SelectTrigger
                  className="ml-auto h-7 w-[130px] rounded-lg pl-2.5"
                  aria-label="Select a platform"
                >
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent align="end" className="rounded-xl">
                  {["desktop", "mobile", "tablet"].map((key) => {
                    const config = chartConfig[key];
                    return (
                      <SelectItem
                        key={key}
                        value={key}
                        className="rounded-lg [&_span]:flex"
                      >
                        <div className="flex items-center gap-2 text-xs">
                          <span
                            className="flex size-3 shrink-0 rounded-sm"
                            style={{
                              backgroundColor: config?.color,
                            }}
                          />
                          {config?.label}
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent className="flex flex-1 justify-center pb-0">
              <ChartContainer
                id={id}
                config={chartConfig}
                className="mx-auto aspect-square w-full max-w-[300px]"
              >
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={platformData}
                    dataKey={activePlatform}
                    nameKey="month"
                    innerRadius={60}
                    strokeWidth={5}
                    activeIndex={activeIndex}
                    activeShape={({
                      outerRadius = 0,
                      ...props
                    }: PieSectorDataItem) => (
                      <g>
                        <Sector {...props} outerRadius={outerRadius + 10} />
                        <Sector
                          {...props}
                          outerRadius={outerRadius + 25}
                          innerRadius={outerRadius + 12}
                        />
                      </g>
                    )}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (
                          viewBox &&
                          "cx" in viewBox &&
                          "cy" in viewBox &&
                          platformData[activeIndex]
                        ) {
                          const currentData = platformData[activeIndex];
                          let value: number | undefined;
                          if (
                            activePlatform === "desktop" &&
                            "desktop" in currentData
                          ) {
                            value = currentData.desktop;
                          } else if (
                            activePlatform === "mobile" &&
                            "mobile" in currentData
                          ) {
                            value = currentData.mobile;
                          } else if (
                            activePlatform === "tablet" &&
                            "tablet" in currentData
                          ) {
                            value = currentData.tablet;
                          }

                          return value !== undefined ? (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              <tspan
                                x={viewBox.cx}
                                y={viewBox.cy}
                                className="fill-foreground text-3xl font-bold"
                              >
                                {value.toLocaleString()}
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 24}
                                className="fill-muted-foreground"
                              >
                                Users
                              </tspan>
                            </text>
                          ) : null;
                        }
                        return null;
                      }}
                    />
                  </Pie>
                </PieChart>
              </ChartContainer>
            </CardContent>
            <CardFooter>
              <Select value={activeMonth} onValueChange={setActiveMonth}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select month" />
                </SelectTrigger>
                <SelectContent>
                  {months.map((month) => (
                    <SelectItem key={month} value={month}>
                      {chartConfig[month]?.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technology Adoption Trends</CardTitle>
              <CardDescription>
                Comparing desktop, mobile, and tablet usage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="desktop"
                    stroke={chartConfig.desktop?.color}
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="mobile"
                    stroke={chartConfig.mobile?.color}
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="tablet"
                    stroke={chartConfig.tablet?.color}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
