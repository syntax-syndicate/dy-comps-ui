import { Button } from "@/components/ui/button";
import { CuboidIcon as Cube } from "lucide-react";

export default function Hero28() {
  return (
    <div className="relative flex min-h-[50vh] items-center justify-center overflow-hidden py-32">
      <div className="pointer-events-none absolute -inset-y-20 inset-x-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,hsl(var(--accent))_0%,transparent_80%)]"></div>
      <div className="pointer-events-none absolute -inset-y-20 inset-x-0 bg-[radial-gradient(hsl(var(--accent-foreground)/0.1)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_0%,transparent_80%)]"></div>
      {/* Decorative elements */}
      <div className="absolute left-16 top-16">
        <Cube className="size-8 text-primary" />
      </div>
      <div className="absolute right-16 top-16">
        <Cube className="size-8 rotate-45 text-primary" />
      </div>
      <div className="absolute bottom-16 left-24">
        <Cube className="size-8 -rotate-12 text-primary" />
      </div>
      <div className="absolute bottom-16 right-24">
        <Cube className="size-8 rotate-12 text-primary" />
      </div>
      {/* Main content */}
      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Discover the Future of Innovation
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          Join us on a journey to redefine possibilities. Our cutting-edge
          solutions are designed to empower, inspire, and transform.
        </p>
        <div className="mx-auto flex items-center justify-center gap-2">
          <Button size="lg">Get Started</Button>
          <Button variant={"outline"} size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
