import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Gift } from "lucide-react";

export default function Hero41() {
  const services = [
    {
      title: "Construction",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      title: "Financial Services",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      title: "Consulting",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      title: "Real Estate",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
  ];

  return (
    <div className="bg-background">
      <div className="container py-16">
        {/* Google Workspace Integration */}
        <div className="mb-16 flex items-center justify-center gap-2">
          <div className="flex items-center gap-2">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Gmail"
              width={24}
              height={24}
            />
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Google Drive"
              width={24}
              height={24}
            />
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Google Calendar"
              width={24}
              height={24}
            />
          </div>
          <span className="text-sm text-muted-foreground">
            Recommended for Google Workspace
          </span>
        </div>

        {/* Hero Content */}
        <div className="mb-16 space-y-8 text-center">
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Be there for your clients,
            <br />
            <span className="text-primary"> every step of the way</span>
            <span className="text-primary">.</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Try Copper free
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Gift className="size-4" />
              Get a demo
            </Button>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="mx-auto max-w-5xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/2"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="rounded-lg object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-black/10" />
                    <Badge
                      variant="secondary"
                      className="absolute bottom-4 left-4"
                    >
                      {service.title}
                    </Badge>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
