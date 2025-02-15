import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function About13() {
  return (
    <div className="bg-background">
      <div className="container grid grid-cols-1 gap-10 py-16 md:grid-cols-2">
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center space-y-8 py-12 md:py-24">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Capturing Love&apos;s
              <br />
              Timeless Moments in{" "}
              <span className="text-primary">Austin, Texas</span>
            </h1>
          </div>
          <Button className="group w-fit bg-primary px-6 py-3 text-lg">
            Book Your Session
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Right Column - Image */}
        <div className="relative order-first md:order-last">
          <div className="aspect-[3/4] w-full">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Portrait of a wedding photographer"
              width={600}
              height={800}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
