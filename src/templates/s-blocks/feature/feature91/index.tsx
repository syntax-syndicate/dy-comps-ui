import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  Code2,
  Database,
  LifeBuoy,
  Network,
  Lock,
  LayoutDashboard,
  Users,
} from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col rounded-xl border bg-card p-6 shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl">
    <div className="mb-4 flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
      {icon}
    </div>
    <h3 className="mb-3 text-xl font-semibold text-foreground">{title}</h3>
    <p className="flex-1 text-muted-foreground">{description}</p>
  </div>
);

export default function TeamSolutionsFeatures() {
  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="mx-auto text-center">
          <h2 className="mx-auto max-w-3xl text-5xl font-extrabold text-foreground">
            Unlock your potential with solutions for every role
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Explore how our platform empowers every team member to excel with
            tailored tools and unmatched capabilities.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-3">
                <LayoutDashboard className="size-7 text-primary" />
                <h3 className="text-3xl font-semibold text-foreground">
                  For Solution Architects
                </h3>
              </div>
              <p className="text-lg text-muted-foreground">
                Design and deploy with precision. Our platform equips you with
                the tools to create robust, scalable, and effective
                integrations.
              </p>
              <Link
                href="#"
                className="flex items-center gap-2 font-medium text-primary hover:underline"
              >
                Discover Architect Tools <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <FeatureCard
                icon={<Cpu className="size-7 text-primary" />}
                title="Rapid Integration Deployment"
                description="Leverage intuitive tools and APIs for quick and efficient integration setup."
              />
              <FeatureCard
                icon={<Code2 className="size-7 text-primary" />}
                title="Feature Amplification"
                description="Enhance your product's core offerings without compromising focus or deadlines."
              />
              <FeatureCard
                icon={<LifeBuoy className="size-7 text-primary" />}
                title="Elevated User Satisfaction"
                description="Craft finely-tuned solutions that boost user engagement and loyalty."
              />
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-3">
                <Users className="size-7 text-primary" />
                <h3 className="text-3xl font-semibold text-foreground">
                  For Engineering Teams
                </h3>
              </div>
              <p className="text-lg text-muted-foreground">
                Build smarter, not harder. Our platform provides a solid
                foundation with the flexibility to innovate and customize.
              </p>
              <Link
                href="#"
                className="flex items-center gap-2 font-medium text-primary hover:underline"
              >
                Explore Engineering Resources
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <FeatureCard
                icon={<Database className="size-7 text-primary" />}
                title="Turnkey Infrastructure"
                description="Utilize our ready-made infrastructure to jumpstart your projects and save valuable time."
              />
              <FeatureCard
                icon={<Network className="size-7 text-primary" />}
                title="Dynamic Scalability"
                description="Scale your operations seamlessly to meet the growing demands of your user base."
              />
              <FeatureCard
                icon={<Lock className="size-7 text-primary" />}
                title="Uncompromising Security"
                description="Build with confidence on a secure, compliant platform with top-tier data protection."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
