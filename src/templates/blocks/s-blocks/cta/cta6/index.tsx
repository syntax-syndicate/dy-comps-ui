import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Settings,
  Rocket,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="relative bg-background py-24">
      {/* New SVG Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-muted"
        >
          <path
            d="M0 400C0 400 300 100 720 100C1140 100 1440 400 1440 400V800H0V400Z"
            fill="currentColor"
            fillOpacity="0.05"
          />
          <circle
            cx="720"
            cy="400"
            r="300"
            stroke="currentColor"
            strokeOpacity="0.1"
            strokeWidth="2"
          />
          <line
            x1="0"
            y1="400"
            x2="1440"
            y2="400"
            stroke="currentColor"
            strokeOpacity="0.1"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-8 rounded-2xl border bg-card p-8 shadow-lg md:p-12 lg:grid-cols-2 lg:p-16">
          {/* Left Column */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl">
              Elevate Your Experience
              <span className="mt-4 block h-1.5 w-16 rounded-full bg-primary"></span>
            </h3>

            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                {
                  icon: <Zap className="size-5" />,
                  text: "Lightning Fast Performance",
                },
                {
                  icon: <Shield className="size-5" />,
                  text: "Enterprise-Grade Security",
                },
                {
                  icon: <Globe className="size-5" />,
                  text: "Global Accessibility",
                },
                {
                  icon: <Settings className="size-5" />,
                  text: "Customizable Solutions",
                },
                {
                  icon: <Rocket className="size-5" />,
                  text: "Rapid Deployment and Scalability",
                },
                {
                  icon: <TrendingUp className="size-5" />,
                  text: "Continuous Growth and Improvement",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 rounded-lg bg-muted/50 p-4 transition-colors hover:bg-muted"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 text-primary">
                    {item.icon}
                  </span>
                  <span className="text-base font-medium text-foreground">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center justify-center space-y-6 rounded-lg border bg-accent p-6">
            <Image
              src="/logo.svg"
              className=""
              width={200}
              height={200}
              alt=""
            />
            <Button className="group px-8 py-6 text-base font-medium hover:bg-primary/90">
              Get Started Today
              <ArrowRight className="ml-3 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <p className="text-center text-sm text-muted-foreground lg:text-right">
              Join thousands of satisfied users worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
