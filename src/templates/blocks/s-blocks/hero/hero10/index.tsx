import { ArrowDownRight, Cpu, TrendingUp, PlayCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const logos = [
  {
    src: "/logos/shadcn-ui.svg",
    alt: "Shadcn UI logo",
    height: "h-7",
  },
  {
    src: "/logos/vercel.svg",
    alt: "Vercel logo",
    height: "h-8",
  },
  {
    src: "/logos/react-icon.svg",
    alt: "React logo",
    height: "h-7",
  },
  {
    src: "/logos/supabase.svg",
    alt: "Supabase logo",
    height: "h-7",
  },
  {
    src: "/logos/tailwind.svg",
    alt: "Tailwind logo",
    height: "h-5",
  },
];

export default function Hero10() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute right-0 top-0 h-full w-3/4 overflow-hidden">
        <div className="absolute right-0 top-0 h-[141%] w-[141%] origin-top-right -rotate-45 transform bg-primary/10" />
      </div>
      <div className="container">
        <div className="mx-auto flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1920"
            height="1080"
            viewBox="0 0 1920 1080"
            fill="none"
            className="absolute inset-0 m-auto opacity-20 dark:invert lg:block"
          >
            {/* Background Rectangle */}
            <rect width="1920" height="1080" fill="#f2f2f2"></rect>

            {/* Horizontal Lines */}
            {Array.from({ length: 25 }, (_, i) => (
              <line
                key={`horizontal-${i}`}
                y1={20 + i * 40}
                x2="1920"
                y2={20 + i * 40}
                className="stroke-muted-foreground"
                stroke="#b0bec5"
                strokeWidth="0.8"
                strokeDasharray="5 5"
              />
            ))}

            {/* Vertical Lines */}
            {Array.from({ length: 45 }, (_, i) => (
              <line
                key={`vertical-${i}`}
                x1={20 + i * 40}
                y1="0"
                x2={20 + i * 40}
                y2="1080"
                className="stroke-muted-foreground"
                stroke="#b0bec5"
                strokeWidth="0.8"
                strokeDasharray="5 5"
              />
            ))}

            {/* Diagonal Lines from Top-Left to Bottom-Right */}
            {Array.from({ length: 30 }, (_, i) => (
              <line
                key={`diagonal-${i}`}
                x1={-200 + i * 100}
                y1="0"
                x2={200 + i * 100}
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

          <div className="z-10 mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
            <Badge variant="outline" className="text-foreground">
              AI-Powered Insights
              <ArrowDownRight className="ml-2 size-4" />
            </Badge>
            <div>
              <h1 className="mb-6 text-pretty text-4xl font-bold lg:text-7xl">
                Unlock the Future with{" "}
                <span className="text-primary">Intelligent AI Solutions</span>
              </h1>
              <p className="text-muted-foreground lg:text-xl">
                Transforming data into actionable insights. Streamline your
                workflow and enhance productivity with cutting-edge AI tools.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 rounded-lg border-2 border-primary bg-accent p-6 text-sm text-muted-foreground">
              <Cpu className="size-5 animate-pulse" />
              <p>
                Press <strong className="text-primary">ALT+F4</strong> to start
                your AI-powered journey
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <p className="text-center text-muted-foreground lg:text-left">
                Empowering the next generation of digital innovations
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8">
                {logos.map((logo, index) => (
                  <Image
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    width={100}
                    height={100}
                    className={`${logo.height} transition-transform hover:scale-110 dark:invert`}
                  />
                ))}
              </div>
            </div>
            <div className="mt-8 flex gap-2">
              <Button size="lg" className="gap-2">
                <PlayCircle className="size-5" />
                Watch Demo
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <TrendingUp className="size-5" />
                Features
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
