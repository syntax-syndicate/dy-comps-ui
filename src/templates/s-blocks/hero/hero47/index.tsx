import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, ArrowRight, Search, BarChart, Zap } from "lucide-react";

export default function ThemedHero() {
  return (
    <div className="w-full bg-background">
      <div className="container py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl xl:text-6xl/none">
                Dominate Search Results with DY-Comps Themed Blocks
              </h1>
              <p className="text-lg text-muted-foreground">
                Our innovative DY-Comps themed blocks system empowers you to create
                content that ranks higher, engages users, and drives organic
                traffic to your website.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex max-w-md flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 bg-muted/50"
                />
                <Button className="h-12 bg-primary px-8 text-primary-foreground hover:bg-primary/90">
                  Get Started
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-primary">
                  <Star className="size-4 fill-primary" />
                  <span className="font-medium">4.9/5 User Rating</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Zap className="size-4" />
                  Instant SEO Boost
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="aspect-video overflow-hidden rounded-lg bg-muted shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/3KtWfp0UopM"
              title="DY-Comps Themed Blocks - Revolutionize Your SEO Strategy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full border-0 object-cover"
            />
          </div>
        </div>

        {/* Feature Blocks */}
        <div className="mt-16 md:mt-24">
          <h2 className="mb-8 text-center text-2xl font-semibold text-foreground">
            Why Choose DY-Comps Themed Blocks?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <Search className="size-8 text-primary" />,
                title: "SEO Optimized",
                description:
                  "Our blocks are designed with search engines in mind, helping your content rank higher.",
              },
              {
                icon: <BarChart className="size-8 text-primary" />,
                title: "Increased Engagement",
                description:
                  "Engage your audience with visually appealing and informative content blocks.",
              },
              {
                icon: <Zap className="size-8 text-primary" />,
                title: "Quick Implementation",
                description:
                  "Easily integrate our DY-Comps themed blocks into your existing content strategy.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg bg-muted/50 p-6 text-center transition-colors hover:bg-primary/10"
              >
                {feature.icon}
                <h3 className="mb-2 mt-4 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
