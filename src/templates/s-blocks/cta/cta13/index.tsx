import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CallToAction() {
  return (
    <section className="py-32">
      <div className="container">
        <div
          className={cn(
            "flex items-center justify-center rounded-lg border bg-cover bg-center px-8 py-20 text-center md:p-20",
            "bg-gradient-to-br from-primary/50 to-secondary/50",
          )}
        >
          <div className="mx-auto max-w-screen-md">
            <h1 className="mb-6 text-balance text-3xl font-bold md:text-5xl">
              Start building your websites faster
            </h1>
            <p className="mb-4 text-lg font-medium text-primary">
              Unleash the power of effortless web creation.
            </p>
            <p className="font-semibold text-muted-foreground md:text-lg">
              Try our tools and services to build your website faster. Start
              with a 14-day free trial. No credit card required. No setup fees.
              Cancel anytime.
            </p>
            <div className="mt-11 flex flex-col justify-center gap-2 sm:flex-row">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
