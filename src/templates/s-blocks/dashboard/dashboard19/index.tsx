"use client";

import * as React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  LineChart,
  Line,
  Legend,
} from "recharts";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  StoreIcon as Stock,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Coins,
  DollarSign,
  Wallet,
  TrendingUp,
  BarChart,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Sample stock data (expanded to 15 stocks)
const stockPrices = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 175.0,
    change: "+1.2%",
    icon: Stock,
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corp.",
    price: 330.0,
    change: "-0.5%",
    icon: Stock,
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 2700.0,
    change: "+0.8%",
    icon: Stock,
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: 3200.0,
    change: "+2.3%",
    icon: Stock,
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    price: 750.0,
    change: "-1.8%",
    icon: Stock,
  },
  {
    symbol: "FB",
    name: "Meta Platforms Inc.",
    price: 340.0,
    change: "+0.9%",
    icon: Stock,
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corp.",
    price: 550.0,
    change: "+3.5%",
    icon: Stock,
  },
  {
    symbol: "JPM",
    name: "JPMorgan Chase & Co.",
    price: 160.0,
    change: "-0.2%",
    icon: Stock,
  },
  {
    symbol: "V",
    name: "Visa Inc.",
    price: 230.0,
    change: "+0.7%",
    icon: Stock,
  },
  {
    symbol: "WMT",
    name: "Walmart Inc.",
    price: 140.0,
    change: "+0.4%",
    icon: Stock,
  },
  {
    symbol: "JNJ",
    name: "Johnson & Johnson",
    price: 170.0,
    change: "-0.3%",
    icon: Stock,
  },
  {
    symbol: "PG",
    name: "Procter & Gamble Co.",
    price: 145.0,
    change: "+0.6%",
    icon: Stock,
  },
  {
    symbol: "MA",
    name: "Mastercard Inc.",
    price: 350.0,
    change: "+1.1%",
    icon: Stock,
  },
  {
    symbol: "KO",
    name: "Coca-Cola Co.",
    price: 60.0,
    change: "-0.7%",
    icon: Stock,
  },
  {
    symbol: "DIS",
    name: "Walt Disney Co.",
    price: 175.0,
    change: "+2.0%",
    icon: Stock,
  },
];

// Sample portfolio data
const portfolio = [
  {
    name: "Apple Inc.",
    shares: 10,
    value: 1750.0,
    symbol: "AAPL",
    icon: Stock,
  },
  {
    name: "Microsoft Corp.",
    shares: 5,
    value: 1650.0,
    symbol: "MSFT",
    icon: Stock,
  },
  {
    name: "Amazon.com Inc.",
    shares: 2,
    value: 6400.0,
    symbol: "AMZN",
    icon: Stock,
  },
  { name: "Tesla Inc.", shares: 8, value: 6000.0, symbol: "TSLA", icon: Stock },
  {
    name: "NVIDIA Corp.",
    shares: 15,
    value: 8250.0,
    symbol: "NVDA",
    icon: Stock,
  },
];

// Function to generate historical stock data
const generateHistoricalData = (
  days: number,
  stock: (typeof stockPrices)[0],
) => {
  let price = stock.price;
  const data = Array.from({ length: days }, (_, i) => {
    const change = (Math.random() - 0.5) * price * 0.03; // up to 3% daily change
    price += change;
    const date = new Date(2024, 0, i + 1); // starting from Jan 1, 2024
    return {
      date: date.toISOString().split("T")[0],
      symbol: stock.symbol,
      price: price > 0.01 ? price : 0.01, // Ensure price doesn&apos;t go too low
    };
  });
  return data;
};

// Generate historical data for each stock
const historicalData = stockPrices.reduce(
  (acc, stock) => {
    const data = generateHistoricalData(30, stock);
    if (data && data.length > 0) {
      acc[stock.symbol] = data.map((item) => ({
        date: item.date ? item.date : "",
        symbol: item.symbol,
        price: item.price,
      }));
    }

    return acc;
  },
  {} as Record<string, { date: string; symbol: string; price: number }[]>,
);

// Sample recent activities
const recentActivities = [
  {
    type: "Buy",
    stock: "Apple Inc.",
    amount: "10 Shares",
    symbol: "AAPL",
    value: "1,750.00 USD",
    time: "11:34 PM",
    date: "Jan 12, 2024",
    icon: Stock,
  },
  {
    type: "Sell",
    stock: "Tesla Inc.",
    amount: "5 Shares",
    symbol: "TSLA",
    value: "3,750.00 USD",
    time: "09:15 AM",
    date: "Jan 11, 2024",
    icon: Stock,
  },
  {
    type: "Buy",
    stock: "NVIDIA Corp.",
    amount: "3 Shares",
    symbol: "NVDA",
    value: "1,650.00 USD",
    time: "02:45 PM",
    date: "Jan 10, 2024",
    icon: Stock,
  },
  {
    type: "Sell",
    stock: "Microsoft Corp.",
    amount: "8 Shares",
    symbol: "MSFT",
    value: "2,640.00 USD",
    time: "10:30 AM",
    date: "Jan 09, 2024",
    icon: Stock,
  },
  {
    type: "Buy",
    stock: "Amazon.com Inc.",
    amount: "2 Shares",
    symbol: "AMZN",
    value: "6,400.00 USD",
    time: "03:20 PM",
    date: "Jan 08, 2024",
    icon: Stock,
  },
];

const chartConfig = {
  price: {
    label: "Stock Price",
    color: "hsl(var(--primary))",
  },
  volume: {
    label: "Volume",
    color: "hsl(var(--secondary))",
  },
} satisfies ChartConfig;

export default function EnhancedStockDashboard() {
  const [selectedStock, setSelectedStock] = React.useState("AAPL");
  const [timeRange, setTimeRange] = React.useState("1m");

  const filteredData = historicalData[selectedStock]?.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-01-30");
    let daysToSubtract = 30;
    if (timeRange === "1w") {
      daysToSubtract = 7;
    } else if (timeRange === "3m") {
      daysToSubtract = 90;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  const latestPrice = filteredData?.[filteredData.length - 1]?.price;
  const previousPrice = filteredData?.[filteredData.length - 2]?.price;
  let priceChange = 0;
  let priceChangePercentage = 0;

  if (latestPrice !== undefined && previousPrice !== undefined) {
    priceChange = latestPrice - previousPrice;
    priceChangePercentage = (priceChange / previousPrice) * 100;
  }

  const totalPortfolioValue = portfolio.reduce(
    (sum, stock) => sum + stock.value,
    0,
  );

  return (
    <div className="container mx-auto py-6">
      {/* Stock Ticker Marquee */}
      <div className="mb-8 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          <div className="flex items-center gap-4">
            {stockPrices.concat(stockPrices).map((stock, index) => (
              <Card
                key={`${stock.symbol}-${index}`}
                className="mr-4 inline-flex w-fit items-center justify-between p-4"
              >
                <div className="flex items-center gap-2">
                  <stock.icon className="size-5" />
                  <div>
                    <div className="font-medium">{stock.symbol}</div>
                    <div className="text-sm text-muted-foreground">
                      {stock.name}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">
                    ${stock.price.toLocaleString()}
                  </div>
                  <Badge
                    variant={
                      stock.change.startsWith("+") ? "default" : "destructive"
                    }
                    className="ml-2"
                  >
                    {stock.change}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">
          Welcome to Your Stock Dashboard
        </h1>
        <p className="text-muted-foreground">
          Track your investments and market trends in real-time.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Portfolio Overview Card */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Portfolio Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              ${totalPortfolioValue.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">
              Total Portfolio Value
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-medium">Today&apos;s Change</div>
                <div className="text-2xl font-bold text-green-600">
                  +$125.50
                </div>
              </div>
              <div>
                <div className="text-sm font-medium">Total Gain/Loss</div>
                <div className="text-2xl font-bold">+$450.00</div>
              </div>
              <div>
                <div className="text-sm font-medium">Number of Holdings</div>
                <div className="text-2xl font-bold">{portfolio.length}</div>
              </div>
              <div>
                <div className="text-sm font-medium">
                  Day&apos;s Volume Traded
                </div>
                <div className="text-2xl font-bold">12,450</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Trade Card */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Trade</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="buy">
              <TabsList className="w-full">
                <TabsTrigger value="buy" className="flex-1">
                  Buy
                </TabsTrigger>
                <TabsTrigger value="sell" className="flex-1">
                  Sell
                </TabsTrigger>
              </TabsList>
              <TabsContent value="buy" className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Stock Symbol</label>
                  <Input placeholder="AAPL" />
                </div>
                <div>
                  <label className="text-sm font-medium">Quantity</label>
                  <Input placeholder="0" type="number" min="1" />
                </div>
                <Button className="w-full">Execute Buy</Button>
              </TabsContent>
              <TabsContent value="sell" className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Stock Symbol</label>
                  <Input placeholder="AAPL" />
                </div>
                <div>
                  <label className="text-sm font-medium">Quantity</label>
                  <Input placeholder="0" type="number" min="1" />
                </div>
                <Button className="w-full" variant="destructive">
                  Execute Sell
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Stock Price Chart */}
      <Card className="mt-6">
        <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
          <div className="grid flex-1 gap-1 text-center sm:text-left">
            <CardTitle>Stock Price Chart</CardTitle>
            <CardDescription>Historical stock price data</CardDescription>
          </div>
          <Select value={selectedStock} onValueChange={setSelectedStock}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a stock" />
            </SelectTrigger>
            <SelectContent>
              {stockPrices.map((stock) => (
                <SelectItem key={stock.symbol} value={stock.symbol}>
                  {stock.symbol} - {stock.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[160px] rounded-lg sm:ml-auto">
              <SelectValue placeholder="Last month" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="1w" className="rounded-lg">
                Last week
              </SelectItem>
              <SelectItem value="1m" className="rounded-lg">
                Last month
              </SelectItem>
              <SelectItem value="3m" className="rounded-lg">
                Last 3 months
              </SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[350px] w-full"
          >
            <AreaChart data={filteredData}>
              <defs>
                <linearGradient id="fillStock" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value: string | number | Date) => {
                  const date = new Date(value);
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  });
                }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                domain={["dataMin", "dataMax"]}
                tickFormatter={(value: number) => `$${value.toFixed(2)}`}
              />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    labelFormatter={(value: string | number | Date) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      });
                    }}
                    indicator="dot"
                  />
                }
              />
              <Area
                type="monotone"
                dataKey="price"
                stroke="hsl(var(--primary))"
                fill="url(#fillStock)"
              />
              <ChartLegend content={<ChartLegendContent />} />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {/* Portfolio */}
        <Card>
          <CardHeader>
            <CardTitle>Your Portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {portfolio.map((stock) => (
                <div
                  key={stock.symbol}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="flex items-center gap-4">
                    <stock.icon className="size-8" />
                    <div>
                      <div className="font-medium">{stock.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {stock.shares} Shares
                      </div>
                    </div>
                  </div>
                  <div className="text-right font-medium">
                    ${stock.value.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <activity.icon className="size-8" />
                    <div>
                      <div className="font-medium">
                        {activity.type} {activity.stock}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {activity.date} {activity.time}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{activity.amount}</div>
                    <div className="text-sm text-muted-foreground">
                      {activity.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

//REMEMBER TO ADD:

// module.exports = {

//   theme: {
//     extend: {
//       animation: {
//         marquee: "marquee 35s linear infinite",

//       },
//       keyframes: {
//         marquee: {
//           "0%": { transform: "translateX(0%)" },
//           "100%": { transform: "translateX(-100%)" },
//         },

//       },
//     },
//   },
// };
