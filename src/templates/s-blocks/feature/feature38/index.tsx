import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Code, Rocket, Layout } from "lucide-react";

export default function Feature38() {
  return (
    <section className="bg-background py-32 text-foreground">
      <div className="container mx-auto">
        <div className="flex w-full flex-col-reverse items-center justify-between gap-10 lg:flex-row">
          {/* Text Content Container - Fixed Width 50% */}
          <div className="lg:w-1/2">
            <span className="flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
              <Code className="size-6 text-primary" />
            </span>
            <h1 className="mb-6 mt-8 text-pretty text-2xl font-bold lg:text-4xl">
              Launch Your Online Presence Effortlessly
            </h1>
            <p className="mb-5 text-muted-foreground">
              Tired of complex website builders? Our intuitive platform empowers
              you to create a stunning, functional site in minutes. No coding
              experience required - just bring your vision, and we&apos;ll bring
              it to life.
            </p>
            <div className="flex gap-2">
              <Button size={"lg"}>Start Building Now</Button>
              <Button variant={"outline"} size={"lg"}>
                Start Building Now
              </Button>
            </div>

            <Separator className="my-7" />
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Code className="size-5 text-primary" />
                <p>Intuitive drag-and-drop interface.</p>
              </li>
              <li className="flex items-center gap-3">
                <Rocket className="size-5 text-primary" />
                <p>Lightning-fast setup and deployment.</p>
              </li>
              <li className="flex items-center gap-3">
                <Layout className="size-5 text-primary" />
                <p>Fully customizable and responsive designs.</p>
              </li>
            </ul>
          </div>

          {/* Image Container - Fixed Width 50% */}
          <div className="relative w-full lg:w-1/2">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="placeholder"
              width={512}
              height={384}
              className="h-auto w-full rounded-lg object-cover"
            />

            <div className="absolute bottom-4 left-4 max-w-80 rounded-lg bg-background p-6">
              <span className="text-xl">Expand your horizons</span> <br />
              <span className="mt-6 text-muted-foreground">
                {" "}
                Harness the power of intuitive design and smart automation to
                streamline your processes.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
