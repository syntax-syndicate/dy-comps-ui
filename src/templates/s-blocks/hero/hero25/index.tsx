import { Button } from "@/components/ui/button";
import { Rocket, Sparkles, Target } from "lucide-react";
import Image from "next/image";

// Define the interface for FeatureItem props
interface FeatureItemProps {
  icon: React.ElementType; // The icon component
  text: string; // Text for the feature item
}

export default function Hero25() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="container relative z-10">
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl" />

            <Image
              src="/icons/abstract.png"
              alt="Innovative Logo"
              width={128}
              height={128}
              className="relative mx-auto mb-5 w-20 dark:invert md:mb-6 md:w-28 lg:mb-7 lg:w-32"
            />
          </div>

          <h1 className="mt-4 text-balance text-4xl font-bold leading-tight lg:text-6xl">
            Ignite Your Team&apos;s Potential with Cutting-Edge Solutions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Empower your organization with our state-of-the-art platform
            designed to boost collaboration, streamline workflows, and drive
            unprecedented growth.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="group">
              Launch Your Journey
              <Rocket className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              Explore Features
              <Sparkles className="ml-2 size-4 transition-transform group-hover:rotate-12" />
            </Button>
          </div>
          <div className="mt-12">
            <ul className="inline-flex flex-wrap justify-center gap-6 rounded-lg bg-muted/50 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm lg:text-base">
              <FeatureItem icon={Rocket} text="Rapid Onboarding" />
              <FeatureItem icon={Sparkles} text="AI-Powered Insights" />
              <FeatureItem icon={Target} text="Goal Tracking" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// FeatureItem component with typed props
function FeatureItem({ icon: Icon, text }: FeatureItemProps) {
  return (
    <li className="flex items-center gap-2 whitespace-nowrap">
      <Icon className="size-5 text-primary" />
      {text}
    </li>
  );
}
