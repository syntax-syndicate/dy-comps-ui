import { Button } from "@/components/ui/button";
import { Leaf, Home, Zap, Recycle, ArrowRight } from "lucide-react";
import Image from "next/image";

// Define the interface for FeatureCard props
interface FeatureCardProps {
  icon: React.ElementType; // The icon component
  title: string; // Title of the feature
  description: string; // Description of the feature
}

export default function Hero24() {
  return (
    <section className="bg-gradient-to-b from-background to-secondary py-32">
      <div className="container">
        <div className="text-center">
          <Image
            src="/icons/abstract.png"
            alt="EcoSmart Logo"
            width={128}
            height={128}
            className="mx-auto mb-5 w-16 dark:invert md:mb-6 md:w-24 lg:mb-7 lg:w-32"
          />
          <span className="mb-3 text-sm tracking-widest text-muted-foreground md:text-base">
            ECO-LIVING
          </span>
          <h1 className="mt-4 text-balance text-4xl font-semibold lg:text-6xl">
            Transform Your Home into{" "}
            <span className="text-primary">a Sustainable Smart Oasis</span>
          </h1>
          <div className="flex items-center justify-center gap-2">
            <Button className="mt-8" size="lg">
              Go Green Today
              <Leaf className="ml-2 size-4" />
            </Button>
            <Button variant={"outline"} className="mt-8" size="lg">
              Learn More
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border bg-muted md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={Home}
            title="Smart Energy Management"
            description="Optimize your home's energy consumption with AI-driven insights."
          />
          <FeatureCard
            icon={Zap}
            title="Renewable Integration"
            description="Seamlessly integrate solar and wind power into your home system."
          />
          <FeatureCard
            icon={Recycle}
            title="Waste Reduction"
            description="Intelligent recycling and composting solutions for a zero-waste lifestyle."
          />
          <FeatureCard
            icon={Leaf}
            title="Green Living Assistance"
            description="AI-powered tips and tricks to maintain an eco-friendly household."
          />
        </div>
      </div>
    </section>
  );
}

// FeatureCard component with typed props
function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-3 bg-background p-5 md:gap-6">
      <Icon className="size-6 shrink-0 text-primary" />
      <div>
        <h2 className="text-sm font-semibold md:text-base">{title}</h2>
        <p className="text-sm text-muted-foreground md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
