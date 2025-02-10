"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SalesCard() {
  return (
    <div className="container flex justify-center py-16">
      <Card className="w-full max-w-sm bg-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Sales Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex items-center text-sm text-muted-foreground">
              <span className="text-emerald-500">+20.1%</span>
              <span className="ml-1">from last month</span>
            </div>
            <div className="text-3xl font-bold">$42.5k</div>
          </div>

          <div className="space-y-2">
            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
              <div className="flex h-full">
                <div
                  className="h-full bg-emerald-500"
                  style={{ width: "62.2%" }}
                />
                <div className="h-full bg-primary" style={{ width: "25.5%" }} />
              </div>
            </div>

            <div className="flex justify-between text-sm">
              <div className="flex items-center">
                <div className="mr-2 size-2 rounded-full bg-emerald-500" />
                <span className="text-muted-foreground">62.2% Orders</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 size-2 rounded-full bg-primary" />
                <span className="text-muted-foreground">25.5% Visits</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
