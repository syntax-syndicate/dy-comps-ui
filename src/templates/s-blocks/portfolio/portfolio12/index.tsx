import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function PortfolioHero() {
  return (
    <div className="relative min-h-screen">
      {/* Decorative dots */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden"></div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,hsl(var(--primary)/20%),transparent_80%)]"></div>

      <div className="container relative mx-auto py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left column - Text content */}
          <div className="items mb-8 space-y-8 text-center sm:text-left">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              I have <span className="text-primary">Creative Design</span>{" "}
              Experience
            </h1>
            <Button size="lg">Hire Me Now</Button>
          </div>

          {/* Right column - Image */}
          <div className="relative">
            <div className="absolute right-0 top-1/2 -z-10 h-[120%] w-4/5 -translate-y-1/2 rounded-lg bg-primary" />
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Portfolio hero image"
              width={500}
              height={600}
              className="relative z-10 rounded-lg"
            />
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-24 grid border-separate grid-cols-1 gap-8 rounded-lg border md:grid-cols-3">
          <div className="border-b p-6 text-center sm:border-b-0 sm:border-r">
            <div className="text-4xl font-bold">80+</div>
            <div className="mt-2 text-muted-foreground">Satisfied clients</div>
          </div>
          <div className="border-b p-6 text-center sm:border-b-0 sm:border-r">
            <div className="text-4xl font-bold">200+</div>
            <div className="mt-2 text-muted-foreground">Projects completed</div>
          </div>
          <div className="border-r p-6 text-center">
            <div className="text-4xl font-bold">99+</div>
            <div className="mt-2 text-muted-foreground">Reviews given</div>
          </div>
        </div>

        {/* Why Hire Me section */}
        <div className="mt-32">
          <h2 className="mb-8 text-3xl font-bold">
            Why Hire Me For Your Next{" "}
            <span className="text-primary">Project</span>?
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 transition-colors hover:border-primary">
              <h3 className="mb-4 text-xl font-semibold">Visual Design</h3>
              <p className="text-muted-foreground">
                Creating stunning visual experiences that captivate and engage
                users.
              </p>
            </Card>
            <Card className="p-6 transition-colors hover:border-primary">
              <h3 className="mb-4 text-xl font-semibold">UX Research</h3>
              <p className="text-muted-foreground">
                Understanding user needs through comprehensive research and
                analysis.
              </p>
            </Card>
            <Card className="p-6 transition-colors hover:border-primary">
              <h3 className="mb-4 text-xl font-semibold">Design Prototype</h3>
              <p className="text-muted-foreground">
                Building interactive prototypes that bring ideas to life.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
