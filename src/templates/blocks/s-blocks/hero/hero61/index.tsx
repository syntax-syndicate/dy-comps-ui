import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, Layout, BarChart3 } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full bg-background">
      {/* Announcement Banner */}
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
              DY-Comps Themed Blocks v2.0 is here! See what&apos;s new
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl xl:text-6xl/none">
                Boost Your DY-Comps Rankings with Themed Blocks
              </h1>
              <p className="text-lg/relaxed text-muted-foreground">
                DY-Comps Themed Blocks helps you create SEO-optimized content
                structures that drive organic traffic and improve your search
                engine rankings.
              </p>
            </div>

            <div className="flex max-w-md gap-2">
              <Input
                type="text"
                placeholder="Enter your target keyword..."
                className="h-12 bg-muted/50"
              />
              <Button className="h-12 px-8">Generate</Button>
            </div>

            {/* Features Grid */}
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="space-y-3">
                <div className="inline-flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <Search className="size-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  SEO-Optimized
                </h3>
                <p className="text-sm text-muted-foreground">
                  Create content structures that search engines love and rank
                  highly.
                </p>
              </div>
              <div className="space-y-3">
                <div className="inline-flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <Layout className="size-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Themed Blocks
                </h3>
                <p className="text-sm text-muted-foreground">
                  Organize your content into cohesive, topic-focused blocks for
                  better relevance.
                </p>
              </div>
              <div className="space-y-3">
                <div className="inline-flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <BarChart3 className="size-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Rank Tracking
                </h3>
                <p className="text-sm text-muted-foreground">
                  Monitor your DY-Comps positions and track improvements over time.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Mockups */}
          <div className="relative mx-auto grid w-full max-w-[500px] grid-cols-2 gap-4">
            <div className="rounded-lg bg-muted p-4 shadow-lg">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="DY-Comps ranking chart"
                className="w-full"
                width={300}
                height={200}
              />
            </div>
            <div className="rounded-lg bg-muted p-4 shadow-lg">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Keyword research tool"
                className="w-full"
                width={300}
                height={200}
              />
            </div>
            <div className="col-span-2 rounded-lg bg-muted p-4 shadow-lg">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Content block editor"
                className="w-full"
                width={600}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
