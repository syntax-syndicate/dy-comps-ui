import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero64() {
  return (
    <div className="w-full bg-background">
      <div className="container flex flex-col items-center px-4 py-12 text-center md:py-24">
        {/* Hero Content */}
        <div className="mx-auto max-w-3xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl xl:text-6xl">
            We invest in the world&apos;s potential
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            Here at DY-Comps we focus on markets where technology, innovation, and
            capital can unlock long-term value and drive economic growth.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="h-11 px-8">
            Free trial for 30 days
          </Button>
          <Button size="lg" variant="outline" className="h-11 px-8">
            Pricing & FAQ
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16 w-full max-w-5xl">
          <div className="overflow-hidden rounded-lg border bg-card shadow-xl">
            <div className="flex h-12 items-center border-b px-4">
              <div className="flex space-x-2">
                <div className="size-3 rounded-full bg-red-500" />
                <div className="size-3 rounded-full bg-yellow-500" />
                <div className="size-3 rounded-full bg-green-500" />
              </div>
            </div>
            <div className="aspect-[16/9] bg-muted p-4">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Analytics dashboard preview"
                className="size-full object-cover"
                width={1280}
                height={720}
              />
            </div>
          </div>
        </div>

        {/* Platform Logos */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
          <div className="text-lg font-semibold text-muted-foreground">
            YouTube
          </div>
          <div className="text-lg font-semibold text-muted-foreground">
            Product Hunt
          </div>
          <div className="text-lg font-semibold text-muted-foreground">
            reddit
          </div>
        </div>
      </div>
    </div>
  );
}
