import { PersonStanding, Timer, Zap, ZoomIn } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export default function Feature10() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <p className="text-xl font-semibold text-primary">
          Partner with us and discover...
        </p>
        <h2 className="text-3xl font-medium lg:text-4xl">
          A Smarter Approach to Website Creation
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          <FeatureCard
            icon={Timer}
            title="Unleash Efficiency"
            description="Reclaim your time and streamline your workflow with our intuitive platform and powerful tools."
          />
          <FeatureCard
            icon={Zap}
            title="Pioneering Solutions"
            description="Embrace the future with our cutting-edge features and a commitment to constant improvement."
          />
          <FeatureCard
            icon={ZoomIn}
            title="Exceptional Crafting"
            description="Experience superior quality in every detail, from elegant design to robust functionality."
          />
          <FeatureCard
            icon={PersonStanding}
            title="Inclusive by Design"
            description="Create a welcoming online experience for all with our inherent accessibility features and best practices."
          />
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="relative flex gap-3 rounded-lg border transition-all duration-200 hover:border hover:border-primary md:block md:border-l md:p-5">
      <span className="mb-8 flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 text-accent-foreground">
        <Icon className="size-6 text-primary md:size-6" />
      </span>
      <div>
        <h3 className="font-medium text-foreground md:mb-2 md:text-xl">
          {title}
          <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"></span>
        </h3>
        <p className="text-sm text-muted-foreground md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
