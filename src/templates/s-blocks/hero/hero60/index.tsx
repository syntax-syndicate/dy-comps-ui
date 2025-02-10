import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const technologies = [
  { name: "Vue.js", logo: "vue.svg" },
  { name: "JavaScript", logo: "javascript.svg" },
  { name: "Angular", logo: "angular.svg" },
  { name: "Bootstrap", logo: "bootstrap.svg" },
];

export default function Hero60() {
  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      <div className="container py-32">
        <BackgroundGrid />
        <div className="mx-auto flex flex-col items-start">
          <div className="z-10 flex w-5/6 flex-col items-start gap-6 text-left">
            <Image
              src="/icons/abstract.png"
              alt="logo"
              className="h-16 dark:invert"
              width={64}
              height={64}
            />
            <Badge
              variant="secondary"
              className="bg-secondary text-secondary-foreground"
            >
              Framework Blocks
            </Badge>
            <div>
              <h1 className="mb-6 text-pretty text-5xl font-bold lg:text-7xl">
                Deconstruct your project with Blocks
              </h1>
              <p className="max-w-2xl text-xl text-muted-foreground">
                Simplify your development process by breaking down complex
                projects into manageable, reusable blocks. Our framework helps
                you focus on the essentials.
              </p>
            </div>
            <div className="mt-8 flex justify-start gap-4">
              <Button size="lg">
                Explore Blocks
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
            <div className="mt-20 flex w-full flex-col items-start gap-4">
              <p className="text-lg text-muted-foreground">
                Compatible with popular web technologies
              </p>
              <div className="flex flex-wrap items-center gap-6">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center rounded-full bg-secondary px-4 py-2"
                  >
                    <Image
                      src={`https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg`}
                      alt={`${tech.name} logo`}
                      className="mr-2 h-6"
                      width={24}
                      height={24}
                    />
                    <span className="text-sm font-medium text-secondary-foreground">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BackgroundGrid() {
  return (
    <div className="absolute inset-0 z-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2000 1500"
        className="h-full w-full"
      >
        <rect fill="hsl(var(--background))" width="2000" height="1500" />
        <defs>
          <radialGradient id="a" gradientUnits="objectBoundingBox">
            <stop offset="0" stopColor="hsl(var(--muted))" />
            <stop offset="1" stopColor="hsl(var(--background))" />
          </radialGradient>
          <linearGradient
            id="b"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="750"
            x2="1550"
            y2="750"
          >
            <stop offset="0" stopColor="hsl(var(--muted))" />
            <stop offset="1" stopColor="hsl(var(--background))" />
          </linearGradient>
        </defs>
        <path
          fill="url(#a)"
          d="M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z"
        />
        <g fill="hsl(var(--muted-foreground))" fillOpacity="0.05">
          <circle cx="500" cy="100" r="40" />
          <path d="M400 300 A100 100 0 0 1 600 300 A100 100 0 0 1 400 300" />
          <rect x="1100" y="100" width="100" height="100" />
          <polygon points="1500,300 1600,150 1700,300" />
          <circle cx="1800" cy="200" r="70" />
        </g>
      </svg>
    </div>
  );
}
