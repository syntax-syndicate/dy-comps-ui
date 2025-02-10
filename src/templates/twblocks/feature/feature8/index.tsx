import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Feature8 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 items-end justify-end gap-10 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-4">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-regular text-left text-xl tracking-tighter md:text-3xl lg:max-w-xl lg:text-5xl">
              This is the start of something new
            </h2>
            <p className="max-w-xl text-left text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-sm">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p>
          </div>
        </div>
        <div className="w-full max-w-full px-6">
          <Carousel>
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="flex aspect-video items-center justify-center rounded-md bg-muted p-6">
                    <span className="text-sm">
                      Platform Screenshot {index + 1}
                    </span>
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
  </div>
);


export default Feature8;
