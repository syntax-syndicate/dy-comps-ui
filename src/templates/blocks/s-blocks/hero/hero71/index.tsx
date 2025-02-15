import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, BarChart3, Lock, Settings } from "lucide-react";
import Image from "next/image";

export default function Hero71() {
  return (
    <div className="w-full bg-background">
      {/* New Banner */}
      <div className="border/40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container">
          <div className="flex h-14 items-center justify-start">
            <Button
              variant="link"
              className="flex items-center gap-2 text-sm text-primary hover:text-primary/90"
            >
              <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                New
              </span>
              DY-Comps is out! See what&apos;s new
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-12 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl xl:text-6xl/none">
                We invest in the world&apos;s potential
              </h1>
              <p className="text-lg/relaxed text-muted-foreground">
                Here at DY-Comps we focus on markets where innovation can unlock
                long-term value and drive economic growth.
              </p>
            </div>

            <div className="flex max-w-md gap-2">
              <Input
                type="text"
                placeholder="Search Mockups, Logos..."
                className="h-12 bg-muted/50"
              />
              <Button className="h-12 px-8">Search</Button>
            </div>

            {/* Features Grid */}
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="space-y-3">
                <div className="inline-flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                  <Settings className="size-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Customizable Categories
                </h3>
                <p className="text-sm text-muted-foreground">
                  Host code that you don&apos;t want to share with the world in
                  private.
                </p>
              </div>
              <div className="space-y-3">
                <div className="inline-flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                  <Lock className="size-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Private repos
                </h3>
                <p className="text-sm text-muted-foreground">
                  Host code that you don&apos;t want to share with the world in
                  private.
                </p>
              </div>
              <div className="space-y-3">
                <div className="inline-flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                  <BarChart3 className="size-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Tracking Saving Rate
                </h3>
                <p className="text-sm text-muted-foreground">
                  Host code that you don&apos;t want to share with the world in
                  private.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Mockups */}
          <div className="relative mx-auto grid w-full max-w-[500px] grid-cols-2 gap-4">
            <div className="rounded-lg bg-muted p-4 shadow-2xl">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Bar chart statistics"
                className="w-full"
                height={200}
                width={300}
              />
            </div>
            <div className="rounded-lg bg-muted p-4 shadow-2xl">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Calendar widget"
                className="w-full"
                height={200}
                width={300}
              />
            </div>
            <div className="col-span-2 rounded-lg bg-muted p-4 shadow-2xl">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Line graph analytics"
                className="w-full"
                height={200}
                width={600}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
