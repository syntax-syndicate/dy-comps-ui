import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star } from "lucide-react";

export default function Hero48() {
  return (
    <div className="w-full bg-background">
      <div className="container py-12 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl xl:text-6xl">
                We invest in the world&apos;s potential
              </h1>
              <p className="text-lg text-muted-foreground">
                Here at DY-Comps we focus on markets where technology, innovation,
                and capital can unlock long-term value and drive economic
                growth.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex max-w-md flex-col gap-2 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 bg-muted/50"
                />
                <Button className="h-12 px-8">
                  Sign up
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 size-4"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="size-4 fill-primary text-primary" />
                  <span className="font-medium">1,456+</span> Reviews
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4"
                  >
                    <path d="M4 9a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3Z" />
                    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                  No Credit Card Required
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="aspect-video overflow-hidden rounded-lg bg-muted">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/3KtWfp0UopM"
              title="DY-Comps - Tailwind CSS components library"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>
        </div>

        {/* Logo Cloud */}
        <div className="mt-16 md:mt-24">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
            {["Airbnb", "Google", "Nike", "Uber", "Stripe", "Mashable"].map(
              (brand) => (
                <div
                  key={brand}
                  className="flex h-12 items-center justify-center grayscale transition hover:grayscale-0"
                >
                  <span className="text-xl font-semibold text-muted-foreground">
                    {brand}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
