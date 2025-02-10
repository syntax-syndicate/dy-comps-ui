import { Button } from "@/components/ui/button";
import { BrainCircuit, FlaskConical, Scale, Users } from "lucide-react";

interface CapabilityProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Capability: React.FC<CapabilityProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="group relative rounded-xl border bg-card p-6 transition-all hover:scale-[1.02] hover:shadow-lg">
    <div className="mb-4 flex size-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary transition-all group-hover:scale-[1.05]">
      {icon}
    </div>
    <h4 className="mb-2 text-xl font-semibold text-foreground">{title}</h4>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const capabilities: CapabilityProps[] = [
  {
    icon: <BrainCircuit className="size-6" />,
    title: "Intelligent Insights",
    description:
      "Unlock actionable insights from your data to drive smarter decisions.",
  },
  {
    icon: <Scale className="size-6" />,
    title: "Performance Metrics",
    description:
      "Dive deep into key metrics to understand the 'why' behind performance.",
  },
  {
    icon: <FlaskConical className="size-6" />,
    title: "Experiment Validation",
    description:
      "Confirm your experiment results with real-time data and analysis.",
  },
  {
    icon: <Users className="size-6" />,
    title: "Unified Teamwork",
    description:
      "Facilitate seamless collaboration by sharing insights across your team.",
  },
];

export default function Feature94() {
  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold text-foreground">
            Elevate Your Workflow
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Empower every decision with clarity and precision.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability, index) => (
            <Capability key={index} {...capability} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button variant="outline" size="lg">
            Explore All Capabilities
          </Button>
        </div>
      </div>
    </section>
  );
}
