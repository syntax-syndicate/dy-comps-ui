import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function Hero68() {
  return (
    <div className="w-full bg-background">
      <div className="container py-12 md:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl xl:text-6xl">
                Designing Interfaces: A User-Centered Approach
              </h1>
              <p className="text-lg/relaxed text-muted-foreground">
                This book covers the latest design principles and techniques,
                including responsive design, mobile interface design, and user
                research methodologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-11 px-8">
                Buy now for $99
              </Button>
              <Button variant="outline" size="lg" className="group h-11 px-8">
                Free preview
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <Avatar key={i} className="border-2 border-background">
                    <AvatarImage
                      src={`https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg`}
                    />
                  </Avatar>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="size-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold">5.0</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Rated Best Over{" "}
                <span className="font-medium text-foreground">15.7k</span>{" "}
                Reviews
              </div>
            </div>
          </div>

          {/* Right Column - Book Cover */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="Designing Interfaces: A User-Centered Approach"
                  width={480}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
