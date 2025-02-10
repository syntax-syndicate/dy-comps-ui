import { ChevronRight, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ResponsiveHero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-32">
      <div className="pointer-events-none absolute -inset-y-20 inset-x-0 bg-[radial-gradient(ellipse_60%_60%_at_35%_50%,hsl(var(--accent))_0%,transparent_80%)]"></div>
      <div className="pointer-events-none absolute -inset-y-20 inset-x-0 bg-[radial-gradient(hsl(var(--accent-foreground)/0.1)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_35%_50%,#000_0%,transparent_80%)]"></div>

      <div className="container relative">
        <div className="flex flex-col items-start gap-8 text-left lg:flex-row">
          <div className="flex-1">
            <Badge variant="outline" className="text-foreground">
              Innovative Coding
            </Badge>
            <h1 className="my-6 text-pretty text-3xl font-bold md:text-4xl lg:text-6xl">
              Unleash Your Coding Potential
            </h1>
            <p className="mb-8 max-w-3xl text-muted-foreground md:text-lg lg:text-xl">
              Dive into a world where creativity meets technology. Transform
              your ideas into groundbreaking solutions that redefine the digital
              landscape. It&apos;s time to code the future you envision.
            </p>
            <div className="flex w-full flex-col justify-start gap-4 sm:flex-row">
              <Button size="lg" className="group w-full sm:w-auto">
                Start Creating
                <ChevronRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Explore Features
              </Button>
            </div>
          </div>

          <div className="mt-8 w-full flex-1 lg:mt-0 lg:w-auto">
            <div className="relative">
              <div className="mx-auto h-auto w-full max-w-md rounded-lg border border-primary/20 bg-background/95 p-6 shadow-lg backdrop-blur-sm">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold text-primary">
                    Innovative Algorithm
                  </span>
                  <Code className="size-4 text-primary" />
                </div>
                <pre className="overflow-x-auto whitespace-pre-wrap break-words font-mono text-xs leading-normal">
                  <code>
                    {`function innovateCode(concepts) {
  return concepts
    .flatMap(concept => 
      concept.applications.map(app => ({
        ...app,
        innovation: app.complexity * concept.creativity,
        impact: app.scalability * concept.relevance
      }))
    )
    .filter(solution => 
      solution.innovation > 75 && 
      solution.impact > 85
    )
    .sort((a, b) => b.impact - a.impact);
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
