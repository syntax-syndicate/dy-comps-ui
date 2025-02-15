import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero27() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 md:gap-20 lg:flex-row lg:items-end">
          <div className="lg:max-w-auto max-w-lg space-y-4 lg:mb-4 lg:w-2/5">
            <Image
              src={"/logo.svg"}
              height={100}
              width={100}
              alt="logo"
              className="rounded-lg bg-accent"
            />

            <p className="text-xl font-bold md:text-4xl">
              STREAMLINE
              <br />
              YOUR DESIGNS.
              <br />
            </p>

            <Button size="lg" className="mt-6">
              Get Started
            </Button>
          </div>
          <h1 className="text-6xl font-bold leading-none tracking-tighter md:text-[8vw] lg:w-3/5 2xl:text-9xl">
            JOIN
            <br />
            THE BLOCK
            <br />
            <span className="text-primary underline">REVOLUTION.</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
