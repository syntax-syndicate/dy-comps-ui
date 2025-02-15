import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export default function CallToAction4() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex w-full flex-col overflow-hidden rounded-lg border bg-accent lg:flex-row lg:items-stretch">
          <div className="relative w-full shrink-0 self-stretch lg:w-1/2">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Feature illustration"
              className="h-full w-full object-cover"
              width={600}
              height={600}
            />
            <div className="absolute bottom-4 left-4 flex items-center space-x-2 rounded-full bg-background/80 px-4 py-2 backdrop-blur-sm">
              <Star className="size-5 text-yellow-400" />
              <span className="text-sm font-medium">Featured</span>
            </div>
          </div>
          <div className="flex w-full shrink-0 flex-col justify-center px-6 py-8 md:p-10 lg:w-1/2 lg:px-16">
            <h3 className="mb-4 text-3xl font-bold leading-tight md:text-4xl lg:mb-6">
              Revolutionize Your Workflow
            </h3>
            <p className="mb-8 text-muted-foreground lg:text-lg">
              Experience a paradigm shift in productivity with our cutting-edge
              feature. Streamline your processes, enhance collaboration, and
              achieve unprecedented efficiency in your daily operations.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button className="group">
                Get Started Now
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
