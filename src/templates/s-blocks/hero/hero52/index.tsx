import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Image from "next/image";

export default function Hero52() {
  return (
    <div className="w-full bg-background">
      <div className="container py-12 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl xl:text-6xl/none">
                Discover new product and best possibilities
              </h1>
              <p className="text-lg/relaxed text-muted-foreground">
                Here at DY-Comps we focus on markets where technology, innovation,
                and capital can unlock long-term value and drive economic
                growth.
              </p>
            </div>

            <div className="space-y-8">
              {/* Date Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="size-5 text-primary" />
                  <h2 className="text-xl font-semibold">28 November 2024</h2>
                </div>
                <p className="text-muted-foreground">
                  Join us at DY-Comps 2024 to understand what&apos;s next as the
                  global tech and startup ecosystem, rethinks the future of
                  everything.
                </p>
                <Button className="h-11 px-6" size="lg">
                  Conference
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
            </div>
          </div>

          {/* Right Column - Conference Image */}
          <div className="relative mx-auto w-full">
            <div className="aspect-[4/3] overflow-hidden rounded-lg bg-accent p-6">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Conference speaker presenting on stage"
                className="size-full rounded-lg object-cover"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-7xl flex-wrap items-center justify-between gap-6 dark:invert">
          <Image
            src="logos/nextjs.svg"
            alt="Next.js logo"
            className="h-8 opacity-50"
            width={64}
            height={64}
          />
          <Image
            src="/remix-logo.svg"
            alt="Remix logo"
            className="h-8 opacity-50"
            width={64}
            height={64}
          />
          <Image
            src="/logos/google-logo.svg"
            alt="Google logo"
            className="h-8 opacity-50"
            width={64}
            height={64}
          />
          <Image
            src="/logos/airbnb.svg"
            alt="Apple logo"
            className="h-8 opacity-50"
            width={64}
            height={64}
          />
        </div>
      </div>
    </div>
  );
}
