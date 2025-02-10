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
} from "recharts";
import {
  Bitcoin,
  Circle as Ethereum, // Replaced EclipseIcon with Circle for demonstration
  ArrowDownRight,
  Coins,
  DollarSign,
  Wallet,
  Gem,
  Droplet,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Expanded crypto price data with 15 coins
const cryptoPrices = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: 65123,
    change: "+4.8%",
    icon: Bitcoin,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: 3123,
    change: "+2.1%",
    icon: Ethereum,
  },
  {
    symbol: "BNB",
    name: "Binance Coin",
    price: 432,
    change: "+1.4%",
    icon: Coins,
  },
  { symbol: "SOL", name: "Solana", price: 142, change: "+8.7%", icon: Gem },
  {
    symbol: "ADA",
    name: "Cardano",
    price: 0.89,
    change: "-2.3%",
    icon: Droplet,
  },
  { symbol: "XRP", name: "Ripple", price: 0.76, change: "+1.2%", icon: Wallet },
  {
    symbol: "DOGE",
    name: "Dogecoin",
    price: 0.123,
    change: "+30%",
    icon: Coins,
  },
  { symbol: "DOT", name: "Polkadot", price: 18.45, change: "-1.5%", icon: Gem },
  {
    symbol: "AVAX",
    name: "Avalanche",
    price: 35.67,
    change: "-3.4%",
    icon: ArrowDownRight,
  },
  {
    symbol: "LINK",
    name: "Chainlink",
    price: 14.89,
    change: "+5.6%",
    icon: Wallet,
  },
  { symbol: "MATIC", name: "Polygon", price: 0.98, change: "+2.8%", icon: Gem },
  {
    symbol: "UNI",
    name: "Uniswap",
    price: 7.34,
    change: "-0.9%",
    icon: DollarSign,
  },
  { symbol: "ATOM", name: "Cosmos", price: 9.56, change: "+3.2%", icon: Gem },
  {
    symbol: "ALGO",
    name: "Algorand",
    price: 0.23,
    change: "+1.7%",
    icon: Coins,
  },
  {
    symbol: "FTM",
    name: "Fantom",
    price: 0.45,
    change: "+4.3%",
    icon: Droplet,
  },
];

// Sample wallet data
const wallets = [
  {
    name: "Bitcoin Wallet",
    balance: "4.434593 BTC",
    value: "289,234.52",
    symbol: "BTC",
    icon: Bitcoin,
  },
  {
    name: "Ethereum Wallet",
    balance: "4.434593 ETH",
    value: "22,724.12",
    symbol: "ETH",
    icon: Ethereum,
  },
];

// Sample transaction data for the chart
const transactionData = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(2024, 0, i + 1).toISOString().split("T")[0],
  received: Math.random() * 2,
  sent: Math.random() * 1.8,
  withdrawn: Math.random() * 1.5,
}));

// Sample recent activities
const recentActivities = [
  {
    type: "Buy",
    crypto: "Bitcoin",
    amount: "0.5384",
    symbol: "BTC",
    value: "3,965.99 USD",
    time: "11:34 PM",
    date: "Jan 12, 2024",
    icon: Bitcoin,
  },
  {
    type: "Buy",
    crypto: "Ethereum",
    amount: "0.5384",
    symbol: "ETH",
    value: "3,965.99 USD",
    time: "11:34 PM",
    date: "Jan 12, 2024",
    icon: Ethereum,
  },
];

export default function CryptoDashboard() {
  return (
    <div className="container mx-auto py-6">
      {/* Crypto Ticker Marquee */}
      <div className="mb-8 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          <div className="flex items-center gap-4">
            {cryptoPrices.concat(cryptoPrices).map((crypto, index) => (
              <Card
                key={`${crypto.symbol}-${index}`}
                className="mr-4 inline-flex w-fit items-center justify-between p-4"
              >
                <div className="flex items-center gap-2">
                  <crypto.icon className="size-5" />
                  <div>
                    <div className="font-medium">
                      ${crypto.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {crypto.symbol}
                    </div>
                  </div>
                </div>
                <Badge
                  variant={
                    crypto.change.startsWith("+") ? "default" : "destructive"
                  }
                  className="ml-2"
                >
                  {crypto.change}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">
          Welcome to Your Crypto Dashboard
        </h1>
        <p className="text-muted-foreground">
          Track your assets and market trends in real-time.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Overview Card */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$179,850.950</div>
            <div className="text-sm text-muted-foreground">
              Total Portfolio Value
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-medium">24h Change</div>
                <div className="text-2xl font-bold text-green-600">
                  +$7,234.21
                </div>
              </div>
              <div>
                <div className="text-sm font-medium">Transactions</div>
                <div className="text-2xl font-bold">34,405</div>
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
                  <label className="text-sm font-medium">Select Coin</label>
                  <Input placeholder="BTC" />
                </div>
                <div>
                  <label className="text-sm font-medium">Amount (USD)</label>
                  <Input placeholder="0.00" />
                </div>
                <Button className="w-full">Buy Now</Button>
              </TabsContent>
              <TabsContent value="sell" className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Select Coin</label>
                  <Input placeholder="BTC" />
                </div>
                <div>
                  <label className="text-sm font-medium">Amount (BTC)</label>
                  <Input placeholder="0.00" />
                </div>
                <Button className="w-full" variant="destructive">
                  Sell Now
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Full-width Chart */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Portfolio Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={transactionData}>
                <defs>
                  <linearGradient
                    id="colorReceived"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="colorSent" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient
                    id="colorWithdrawn"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#ffc658" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
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
                  tickFormatter={(value: number) => `$${value.toFixed(2)}`}
                />
                <Tooltip
                  contentStyle={{
                    background: "hsl(var(--background))",
                    borderRadius: "8px",
                    border: "1px solid hsl(var(--border))",
                  }}
                  labelStyle={{ color: "hsl(var(--foreground))" }}
                />
                <Area
                  type="monotone"
                  dataKey="received"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#colorReceived)"
                />
                <Area
                  type="monotone"
                  dataKey="sent"
                  stroke="#82ca9d"
                  fillOpacity={1}
                  fill="url(#colorSent)"
                />
                <Area
                  type="monotone"
                  dataKey="withdrawn"
                  stroke="#ffc658"
                  fillOpacity={1}
                  fill="url(#colorWithdrawn)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {/* Wallets */}
        <Card>
          <CardHeader>
            <CardTitle>Your Wallets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {wallets.map((wallet) => (
                <div
                  key={wallet.symbol}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="flex items-center gap-4">
                    <wallet.icon className="size-8" />
                    <div>
                      <div className="font-medium">{wallet.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {wallet.balance}
                      </div>
                    </div>
                  </div>
                  <div className="text-right font-medium">${wallet.value}</div>
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
                        {activity.type} {activity.crypto}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {activity.date} {activity.time}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">
                      {activity.amount} {activity.symbol}
                    </div>
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
