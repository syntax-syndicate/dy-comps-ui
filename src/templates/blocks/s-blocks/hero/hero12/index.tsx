import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const technologies = [
  { name: "Shadcn UI", logo: "shadcn-ui-small.svg" },
  { name: "TypeScript", logo: "typescript-small.svg" },
  { name: "React", logo: "react-icon.svg" },
  { name: "Tailwind CSS", logo: "tailwind-small.svg" },
];

export default function Hero12() {
  return (
    <section className="relative overflow-hidden bg-background bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-24 md:py-32">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="z-10 flex flex-col items-center gap-8 text-center">
            {/* Logo */}
            <Image
              src="/logo.svg"
              alt="logo"
              className="h-24 dark:invert"
              width={100}
              height={100}
            />

            {/* Badge */}
            <Badge
              variant="outline"
              className="border-primary/20 bg-primary/10 text-primary hover:bg-primary/20"
            >
              Themed UI Components
            </Badge>

            {/* Heading and Description */}
            <div className="max-w-4xl">
              <h1 className="mb-6 text-pretty text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Kickstart Your Project with{" "}
                <span className="text-primary">Styled Building Blocks</span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Embark on your development journey,{" "}
                <span className="font-medium text-primary">
                  where challenges are part of the process
                </span>
                , but so are the resources to help you navigate.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex w-full flex-col justify-center gap-4 sm:flex-row sm:gap-6">
              <Button size="lg">Explore Components</Button>
              <Button size="lg" variant="outline" className="group">
                Dive Deeper
                <ExternalLink className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Technology Logos */}
            <div className="mt-8 flex flex-col items-center gap-4">
              <p className="text-sm text-muted-foreground">
                Powered by cutting-edge open-source tools
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {technologies.map((tech) => (
                  <a
                    key={tech.name}
                    href="#"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "group relative flex items-center gap-2 overflow-hidden border-muted/20 bg-background px-4 py-2 hover:bg-accent/50",
                    )}
                  >
                    <Image
                      src={`/logos/${tech.logo}`}
                      alt={`${tech.name} logo`}
                      width={24}
                      height={24}
                      className="size-6 saturate-200 transition-all group-hover:saturate-100 dark:invert"
                    />
                    <span className="text-sm font-medium text-foreground">
                      {tech.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
