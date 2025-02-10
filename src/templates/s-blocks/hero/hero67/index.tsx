import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Hero67() {
  return (
    <div className="w-full bg-background">
      <div className="container py-12 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl xl:text-6xl">
                Making earth cooler for people, nature, climate
              </h1>
              <p className="text-lg/relaxed text-muted-foreground">
                Protecting the planet and its natural resources for future
                generations, by reducing pollution, promoting sustainability,
                and conserving energy and resources.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-11 px-8">
                Donate now
              </Button>
              <Button variant="outline" size="lg" className="h-11 px-8">
                <Play className="mr-2 size-4" />
                Learn more
              </Button>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Partners and backers:
              </p>
              <div className="flex flex-wrap items-center gap-8">
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="Greenpeace"
                  width={120}
                  height={40}
                  className="object-contain"
                />
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="United Nations"
                  width={120}
                  height={40}
                  className="object-contain"
                />
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="WWF"
                  width={120}
                  height={40}
                  className="object-contain"
                />
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="Oxfam"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Carousel */}
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                      alt="People planting trees"
                      width={800}
                      height={600}
                      className="w-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                      alt="Environmental conservation"
                      width={800}
                      height={600}
                      className="w-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                      alt="Sustainable practices"
                      width={800}
                      height={600}
                      className="w-full object-cover"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
