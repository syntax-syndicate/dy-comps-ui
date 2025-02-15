import { Button } from "@/components/ui/button";
import {
  Cloud,
  Server,
  Shield,
  Zap,
  Database,
  Globe,
  Code,
  BarChart,
} from "lucide-react";

export default function CloudNexusHero() {
  return (
    <section className="relative overflow-hidden py-32">
      <BackgroundDecoration />
      <div className="container relative">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <CloudFeatures />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Transform Your Business with CloudNexus
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              Discover unmatched cloud solutions that drive your enterprise
              forward. From adaptive infrastructure to state-of-the-art
              security, CloudNexus delivers the next evolution of cloud
              computing.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button variant="default" className="w-full sm:w-auto">
                Start Free Trial
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                Explore Solutions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BackgroundDecoration() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-muted">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1920"
        height="1080"
        viewBox="0 0 1920 1080"
        fill="none"
        className="absolute inset-0 m-auto opacity-20 dark:invert lg:block"
      >
        <rect width="1920" height="1080" fill="#f2f2f2"></rect>

        {/* Replace spread syntax with Array.from */}
        {Array.from({ length: 27 }).map((_, i) => (
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

        {Array.from({ length: 48 }).map((_, i) => (
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

        {Array.from({ length: 54 }).map((_, i) => (
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
    </div>
  );
}

function CloudFeatures() {
  const features = [
    { title: "Adaptive Compute", icon: Server },
    { title: "Quantum-Safe Storage", icon: Shield },
    { title: "Hyper Networking", icon: Zap },
    { title: "AI Orchestration", icon: Cloud },
    { title: "Global Edge Network", icon: Globe },
    { title: "Serverless Platform", icon: Code },
    { title: "Distributed Database", icon: Database },
    { title: "Real-time Analytics", icon: BarChart },
    { title: "Resilient Backup", icon: Shield },
    { title: "Container Ecosystem", icon: Cloud },
    { title: "Edge Intelligence", icon: Zap },
    { title: "IoT Fabric", icon: Cloud },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {features.map((feature, index) => (
        <FeatureCard key={index} title={feature.title} Icon={feature.icon} />
      ))}
    </div>
  );
}

function FeatureCard({
  title,
  Icon,
}: {
  title: string;
  Icon: React.ElementType;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-background bg-background p-4 text-center shadow transition-colors hover:text-accent-foreground">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
        <Icon className="size-5 text-primary" />
      </div>
      <div className="text-sm font-medium">{title}</div>
      <div className="text-xs text-muted-foreground">
        Advanced cloud solution
      </div>
    </div>
  );
}
