import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero11() {
  return (
    <section className="border-y py-24 md:py-32">
      <div className="container max-w-7xl">
        {/* Header Section */}
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          <div className="z-10 flex flex-col items-center gap-8 text-center">
            <Image
              src="/logo.svg"
              alt="logo"
              width={100}
              height={100}
              className="mb-6 aspect-square object-cover dark:invert"
            />
            <div>
              <h1 className="mb-4 text-pretty text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Build your Next Project Quickly with{" "}
                <span className="text-primary">Themed Block Library</span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Why waste time coding when you can let AI churn out perfect
                lines of code while you sip coffee and pretend to understand it
                all? Welcome to coding 2024.
              </p>
            </div>
            <div className="flex w-full flex-col justify-center gap-4 sm:flex-row sm:gap-6">
              <Button size="lg">Get started now</Button>
              <Button size="lg" variant="outline" className="group">
                Learn More
                <ChevronRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="container relative mt-20 w-full">
          <div className="overflow-hidden rounded-lg border border-muted/20 shadow-lg">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="placeholder"
              width={1200}
              height={800}
              className="relative size-full max-h-[500px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
