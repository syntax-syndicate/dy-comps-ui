"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnalyticsCard() {
  return (
    <div className="container flex justify-center py-16">
      <Card className="w-full max-w-md bg-card">
        <CardHeader className="pb-2">
          <CardTitle>Website Analytics</CardTitle>
          <p className="text-sm">
            Total <span className="text-emerald-500">20.5%</span> Conversion
            Rate
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-accent/50 p-3">
              <div className="text-xl font-semibold">432</div>
              <div className="text-sm text-muted-foreground">Direct</div>
            </div>
            <div className="rounded-lg bg-accent/50 p-3">
              <div className="text-xl font-semibold">216</div>
              <div className="text-sm text-muted-foreground">Organic</div>
            </div>
            <div className="rounded-lg bg-accent/50 p-3">
              <div className="text-xl font-semibold">29x</div>
              <div className="text-sm text-muted-foreground">Sessions</div>
            </div>
            <div className="rounded-lg bg-accent/50 p-3">
              <div className="text-xl font-semibold">2.3K</div>
              <div className="text-sm text-muted-foreground">Page Views</div>
            </div>
            <div className="rounded-lg bg-accent/50 p-3">
              <div className="text-xl font-semibold">1.6K</div>
              <div className="text-sm text-muted-foreground">Leads</div>
            </div>
            <div className="rounded-lg bg-accent/50 p-3">
              <div className="text-xl font-semibold">8%</div>
              <div className="text-sm text-muted-foreground">Conversions</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
