import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Feature103() {
  const features = [
    {
      title: "Seamless Updates & Reversions",
      description:
        "Gain complete insight into your deployment configurations and live performance.",
      href: "#",
    },
    {
      title: "Effortless Rollbacks",
      description: "Quickly revert to previous versions for smooth recovery.",
      href: "#",
    },
    {
      title: "Configuration Insights",
      description:
        "Monitor and evaluate your system settings for optimal performance.",
      href: "#",
    },
    {
      title: "Automated Monitoring",
      description: "Leverage automated tracking to detect issues instantly.",
      href: "#",
    },
    {
      title: "Performance Metrics",
      description:
        "Analyze detailed metrics to fine-tune your application's efficiency.",
      href: "#",
    },
  ];

  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-3">
          <Badge variant="outline" className="w-fit">
            CORE CAPABILITIES
          </Badge>
          <h2 className="text-2xl md:text-4xl">Discover our advanced tools</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <a
              key={index}
              href={feature.href}
              className="group flex flex-col gap-4 rounded-lg border p-6 hover:border-primary hover:bg-accent"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-medium">{feature.title}</h3>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full border group-hover:bg-primary">
                  <ArrowRight className="h-auto w-4" />
                </span>
              </div>
              <p className="text-muted-foreground">{feature.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
