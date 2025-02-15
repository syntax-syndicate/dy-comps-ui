import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CallToAction15() {
  return (
    <section className="w-full bg-background py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Revolutionize Your Workflow
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Streamline your tasks, boost productivity, and achieve your
                goals with our cutting-edge platform.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-lg object-cover object-center sm:w-full lg:order-last"
              height="550"
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              width="550"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
