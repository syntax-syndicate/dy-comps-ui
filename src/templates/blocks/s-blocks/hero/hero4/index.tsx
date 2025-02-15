import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero4() {
  return (
    <section className="py-32">
      <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="flex justify-end">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="placeholder hero"
            width={800}
            height={800}
            className="max-h-[600px] w-full rounded-md object-cover lg:max-h-[800px]"
          />
        </div>
        <div className="flex flex-col items-center text-center lg:max-w-3xl lg:items-start lg:text-left">
          <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl xl:text-7xl">
            <span className="text-primary">Themeable Tailwinds Blocks</span>{" "}
            with ShadcnUI Design System
          </h1>
          <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
            With these themeable blocks, you can make your site look amazing
            without breaking a sweat. Go ahead, copy-paste your way to glory—no
            one has to know it wasn&apos;t all your idea.
          </p>

          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            <Button size={"lg"} className="w-full sm:w-auto">
              Sign Up
            </Button>
            <Button size={"lg"} variant="outline" className="w-full sm:w-auto">
              Get Started
              <ArrowDownRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
