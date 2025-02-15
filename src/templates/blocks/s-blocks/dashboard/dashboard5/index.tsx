"use client";

import {
  TrendingUp,
  Shield,
  AlertTriangle,
  Clock,
  Activity,
  Lock,
  Eye,
} from "lucide-react";
import {
  Label,
  Pie,
  PieChart,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
//import { Progress } from "@/components/ui/progress";

const threatData = [
  { threat: "malware", incidents: 275, fill: "var(--color-malware)" },
  { threat: "phishing", incidents: 200, fill: "var(--color-phishing)" },
  { threat: "ddos", incidents: 187, fill: "var(--color-ddos)" },
  { threat: "insider", incidents: 173, fill: "var(--color-insider)" },
  { threat: "other", incidents: 90, fill: "var(--color-other)" },
];

const threatConfig = {
  incidents: {
    label: "Incidents",
  },
  malware: {
    label: "Malware",
    color: "hsl(var(--chart-1))",
  },
  phishing: {
    label: "Phishing",
    color: "hsl(var(--chart-2))",
  },
  ddos: {
    label: "DDoS",
    color: "hsl(var(--chart-3))",
  },
  insider: {
    label: "Insider Threats",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies Record<string, { label: string; color?: string }>;

const networkActivityData = [
  { time: "00:00", traffic: 2400 },
  { time: "04:00", traffic: 1398 },
  { time: "08:00", traffic: 9800 },
  { time: "12:00", traffic: 3908 },
  { time: "16:00", traffic: 4800 },
  { time: "20:00", traffic: 3800 },
  { time: "23:59", traffic: 4300 },
];

const securityMetrics = [
  {
    title: "Threats Detected",
    value: "1,287",
    icon: AlertTriangle,
    trend: "+8.1%",
  },
  { title: "Avg. Response Time", value: "3.2m", icon: Clock, trend: "-12.3%" },
  { title: "Network Uptime", value: "99.99%", icon: Activity, trend: "+0.01%" },
  { title: "Encrypted Traffic", value: "94%", icon: Lock, trend: "+2.4%" },
];

export default function CyberShieldDashboard() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              CyberShield Dashboard
            </h1>
            <p className="text-muted-foreground">
              Real-time cybersecurity monitoring and analysis
            </p>
          </div>
          <Button>
            <Shield className="mr-2 size-4" />
            Generate Security Report
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {securityMetrics.map((metric) => (
            <Card key={metric.title}>
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
          <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
              <CardTitle>Threat Distribution</CardTitle>
              <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
              <ChartContainer
                config={threatConfig}
                className="mx-auto aspect-square max-h-[250px]"
              >
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={threatData}
                    dataKey="incidents"
                    nameKey="threat"
                    innerRadius={60}
                    strokeWidth={5}
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
                                className="fill-foreground text-3xl font-bold"
                              >
                                {threatData
                                  .reduce(
                                    (acc, curr) => acc + curr.incidents,
                                    0,
                                  )
                                  .toLocaleString()}
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy ?? 0) + 24}
                                className="fill-muted-foreground"
                              >
                                Total Incidents
                              </tspan>
                            </text>
                          );
                        }
                      }}
                    />
                  </Pie>
                </PieChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
              <div className="flex items-center gap-2 font-medium leading-none">
                Malware incidents up by 5.2% this month{" "}
                <TrendingUp className="size-4" />
              </div>
              <div className="leading-none text-muted-foreground">
                Click on segments for detailed threat information
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Network Activity</CardTitle>
              <CardDescription>24-hour traffic overview</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={networkActivityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="traffic"
                    stroke="hsl(var(--primary))"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
            <CardFooter>
              <div className="flex w-full items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Peak traffic at 08:00
                </span>
                <Button variant="outline" size="sm">
                  <Eye className="mr-2 size-4" />
                  View Details
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Security Alerts</CardTitle>
            <CardDescription>
              Latest detected threats and anomalies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {[
                {
                  type: "Malware Detected",
                  details: "Trojan found on workstation WS-042",
                  severity: "High",
                  time: "10 minutes ago",
                },
                {
                  type: "Suspicious Login",
                  details: "Multiple failed attempts from IP 192.168.1.105",
                  severity: "Medium",
                  time: "25 minutes ago",
                },
                {
                  type: "Data Exfiltration Attempt",
                  details: "Unusual outbound traffic detected",
                  severity: "High",
                  time: "1 hour ago",
                },
                {
                  type: "Firewall Rule Violation",
                  details: "Attempted connection to blocked IP range",
                  severity: "Low",
                  time: "2 hours ago",
                },
              ].map((alert, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between border-b pb-2 last:border-b-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium">{alert.type}</p>
                    <p className="text-sm text-muted-foreground">
                      {alert.details}
                    </p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${
                        alert.severity === "High"
                          ? "bg-red-100 text-red-800"
                          : alert.severity === "Medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                      }`}
                    >
                      {alert.severity}
                    </span>
                    <p className="text-xs text-muted-foreground">
                      {alert.time}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Alerts
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
