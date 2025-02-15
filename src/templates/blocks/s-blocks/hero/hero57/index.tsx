import { Button } from "@/components/ui/button";
import { Rocket, Shield, Lightbulb, Target, Sparkles } from "lucide-react";
import type { ComponentType } from "react";

// Define the interface for the FeatureCard props
interface FeatureCardProps {
  icon: ComponentType<{ className?: string }>; // The icon is a Lucide React component
  title: string;
  description: string;
}

export default function Component() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-primary/10">
      <div className="container relative">
        <div className="relative flex flex-col items-center justify-center overflow-hidden bg-background/60 p-6 shadow-xl backdrop-blur-sm md:p-10 lg:p-20">
          <h1 className="relative mx-auto mb-8 max-w-3xl text-center text-4xl font-bold tracking-tight md:mb-10 md:text-6xl md:leading-tight">
            Revolutionize Your
            <span className="text-primary"> Workflow </span>
            with
            <Rocket className="mx-2 mb-1 inline-block h-auto w-8 text-primary md:mx-4 md:mb-3 md:w-14" />
            NovaTech
          </h1>

          {/* Feature Cards */}
          <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={Shield}
              title="Secure"
              description="Bank-level encryption"
            />
            <FeatureCard
              icon={Lightbulb}
              title="Innovative"
              description="Cutting-edge AI solutions"
            />
            <FeatureCard
              icon={Target}
              title="Precise"
              description="Tailored to your needs"
            />
            <FeatureCard
              icon={Sparkles}
              title="Efficient"
              description="Boost productivity by 300%"
            />
          </div>

          <p className="mx-auto mb-10 max-w-screen-md text-center text-lg font-medium text-muted-foreground md:text-xl">
            NovaTech empowers businesses to streamline operations, enhance
            decision-making, and drive growth through our state-of-the-art
            AI-powered platform.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pb-8 pt-4">
            <Button size="lg" className="h-12 px-8 text-lg font-semibold">
              Start Your Free Trial
            </Button>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              Trusted by{" "}
              <span className="font-semibold text-foreground">
                500+ Fortune 1000 companies
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Apply the FeatureCardProps interface to the FeatureCard component
function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-background/80 p-4 shadow-md">
      <Icon className="mb-2 size-10 text-primary" />
      <h3 className="mb-1 text-lg font-semibold">{title}</h3>
      <p className="text-center text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
