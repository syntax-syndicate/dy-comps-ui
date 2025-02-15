import { Rocket, Users, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Define the props interface for StatCard
interface StatCardProps {
  icon: LucideIcon;
  value: string;
  description: string;
}

export default function UpdatedStatsSection() {
  return (
    <section className="w-full bg-gradient-to-b from-background to-primary/10 py-24">
      <div className="container">
        <h2 className="mb-10 max-w-[37rem] text-2xl font-bold sm:text-4xl md:mb-16 lg:text-5xl lg:leading-[4rem]">
          Driving Innovation with Impressive Results
        </h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          <StatCard
            icon={Rocket}
            value="98%"
            description="Faster Time-to-Market"
          />
          <StatCard
            icon={Users}
            value="10M+"
            description="Active Global Users"
          />
          <StatCard icon={Globe} value="150+" description="Countries Served" />
        </div>
      </div>
    </section>
  );
}

// StatCard component with typed props
function StatCard({ icon: Icon, value, description }: StatCardProps) {
  return (
    <div className="flex items-center space-x-4 rounded-lg border border-primary/10 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg">
      <Icon className="size-12 text-primary" />
      <div>
        <p className="text-4xl font-bold text-foreground">{value}</p>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
