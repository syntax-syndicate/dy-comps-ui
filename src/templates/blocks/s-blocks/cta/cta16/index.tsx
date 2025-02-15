import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CallToAction16() {
  return (
    <section className="w-full bg-background py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr]">
          <div className="flex items-center justify-center">
            <Image
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-lg object-cover object-center sm:w-full"
              height="550"
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              width="550"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Transform Your Workflow
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Elevate your productivity, streamline collaboration, and achieve
                more with our innovative platform.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Start Free Trial</Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
