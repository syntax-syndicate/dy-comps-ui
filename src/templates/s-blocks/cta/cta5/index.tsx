import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Zap, Shield, Rocket } from "lucide-react";

export default function CallToAction5() {
  return (
    <section className="py-32">
      <div className="max-w-full overflow-hidden border border-y bg-accent pt-10 md:pt-16 lg:pt-20">
        <div className="container relative flex flex-col md:flex-row md:space-x-12">
          <div className="mb-72 md:mb-28 md:w-2/3 lg:shrink-0 xl:mb-20 xl:w-1/2">
            <h3 className="mb-3 text-4xl font-semibold md:mb-4 md:text-5xl lg:mb-6">
              Discover our powerful features
            </h3>
            <p className="mb-8 text-muted-foreground lg:text-lg">
              Unlock the potential of your projects with our innovative tools.
              From lightning-fast performance to rock-solid security, we&apos;ve
              got you covered.
            </p>
            <Button className="group">
              Explore Features
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="absolute bottom-0 right-1/2 mr-6 h-min w-[110%] max-w-md translate-x-1/2 md:-right-36 md:mr-0 md:w-3/4 md:max-w-xl md:translate-x-0 lg:mt-auto xl:relative xl:right-0 xl:size-full xl:max-w-full">
            <div className="relative aspect-[8/5] size-full min-h-64">
              <div className="absolute right-0 top-0 z-40 flex aspect-[3/5] w-3/5 -translate-x-[24%] translate-y-[24%] -rotate-[30deg] justify-center overflow-hidden bg-background shadow-lg shadow-foreground/20 md:max-xl:-translate-x-[8%] md:max-xl:translate-y-[16%]">
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="Performance"
                  width={300}
                  height={500}
                  className="h-full w-full object-cover"
                />
                <Zap className="absolute bottom-4 right-4 size-8 text-yellow-500" />
              </div>
              <div className="absolute right-0 top-0 z-40 flex aspect-[3/5] w-3/5 -translate-x-[16%] translate-y-[8%] -rotate-[15deg] justify-center overflow-hidden bg-background shadow-xl shadow-foreground/20 md:max-xl:-translate-x-[6%] md:max-xl:translate-y-[6%]">
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="Security"
                  width={300}
                  height={500}
                  className="h-full w-full object-cover"
                />
                <Shield className="absolute bottom-4 right-4 size-8 text-green-500" />
              </div>
              <div className="absolute right-0 top-0 z-40 flex aspect-[3/5] w-3/5 items-center justify-center overflow-hidden bg-background shadow-2xl shadow-foreground/20">
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="Innovation"
                  width={300}
                  height={500}
                  className="h-full w-full object-cover"
                />
                <Rocket className="absolute bottom-4 right-4 size-8 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
