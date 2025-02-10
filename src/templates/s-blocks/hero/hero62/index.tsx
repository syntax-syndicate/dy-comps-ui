import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export default function Hero62() {
  return (
    <div className="w-full bg-background">
      <div className="container flex flex-col items-center px-4 py-12 text-center md:py-24">
        {/* Hero Content */}
        <div className="mx-auto max-w-3xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl xl:text-6xl">
            Your Dream Vacation
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            Here at DY-Comps TRAVEL we compare a wide range of destinations, flights
            and hotels to conjure up cheap holidays for you to enjoy, time and
            time again.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="h-11 px-8">
            Discover locations
          </Button>
          <Button size="lg" variant="outline" className="h-11 px-8">
            Start a trip request
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>

        {/* Trustpilot Reviews */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="size-8 overflow-hidden rounded-full border-2 border-background bg-muted"
              >
                <Image
                  src={`https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg`}
                  alt={`Reviewer ${i}`}
                  className="size-full object-cover"
                  width={32}
                  height={32}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Star className="size-5 fill-primary text-primary" />
            <span className="text-sm font-medium">Trustpilot</span>
          </div>
          <div className="text-sm text-muted-foreground">
            Rated Best Over{" "}
            <span className="font-medium text-foreground">15.7k</span> Reviews
          </div>
        </div>

        {/* Video Section */}
        <div className="relative mt-12 w-full max-w-4xl overflow-hidden rounded-lg bg-muted shadow-xl">
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/your-video-id"
              title="DY-Comps Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="border-0"
            />
          </div>
          <div className="absolute inset-0 rounded-t-lg shadow-[0_0_40px_8px_hsl(var(--primary)/0.4)]" />
        </div>
      </div>
    </div>
  );
}
