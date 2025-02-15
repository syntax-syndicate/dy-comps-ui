import { PlayCircle, WandSparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero13() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 py-24 md:py-32">
      {/* Background Grid */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1920"
        height="1080"
        viewBox="0 0 1920 1080"
        fill="none"
        className="absolute inset-0 m-auto opacity-20 dark:invert lg:block"
      >
        <rect width="1920" height="1080" fill="transparent"></rect>
        {Array.from({ length: 27 }, (_, i) => i).map((i) => (
          <line
            key={`horizontal-${i}`}
            y1={i * 40}
            x2="1920"
            y2={i * 40}
            className="stroke-muted-foreground"
            stroke="#b0bec5"
            strokeWidth="0.8"
            strokeDasharray="5 5"
          />
        ))}

        {Array.from({ length: 48 }, (_, i) => i).map((i) => (
          <line
            key={`vertical-${i}`}
            x1={i * 40}
            y1="0"
            x2={i * 40}
            y2="1080"
            className="stroke-muted-foreground"
            stroke="#b0bec5"
            strokeWidth="0.8"
            strokeDasharray="5 5"
          />
        ))}

        {Array.from({ length: 54 }, (_, i) => i).map((i) => (
          <line
            key={`diagonal-${i}`}
            x1={-1080 + i * 60}
            y1="0"
            x2={i * 60}
            y2="1080"
            stroke="#cfd8dc"
            strokeWidth="0.5"
            strokeDasharray="4 4"
          />
        ))}
        <defs>
          <clipPath id="clip0">
            <rect width="1920" height="1080" fill="#000000"></rect>
          </clipPath>
        </defs>
      </svg>

      {/* Content */}
      <div className="container relative">
        {/* Badge */}
        <Badge
          variant="outline"
          className="group mb-6 flex w-fit items-center gap-2 border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 lg:mb-10"
        >
          <WandSparkles className="size-4" />
          <span className="truncate whitespace-nowrap">
            Put some catchy text here to capture your audience&apos;s attention.
          </span>
        </Badge>

        {/* Heading */}
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-8xl">
          With our tools, you&apos;ll work{" "}
          <span className="text-primary">smarter, not harder.</span>
        </h1>

        {/* Description */}
        <p className="mb-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Use this UI Block Kit to start building modern beautiful websites.{" "}
          <span className="font-medium text-primary">
            With over 850 components to choose from
          </span>
          , you&apos;ll have all the pieces you need to build a
          professional-looking website.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Button size="lg" className="w-full sm:w-auto">
            Get a demo
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group w-full bg-background/80 backdrop-blur-sm sm:w-auto"
          >
            <PlayCircle className="mr-2 size-4 transition-transform group-hover:translate-x-1" />
            Watch video
          </Button>
        </div>
      </div>
    </section>
  );
}
