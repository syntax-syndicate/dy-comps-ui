import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

const features = [
  "Unlimited projects and tasks",
  "Unlimited users and collaborators",
  "100GB of storage",
  "Priority support and assistance",
  "Custom domain and branding",
  "Advanced analytics and reporting",
  "Customization options and flexibility",
  "Unlimited integrations and connections",
  "Free setup and onboarding",
  "Free updates and upgrades",
  "Custom design and layout",
  "Dedicated account manager",
  "Exclusive access to beta features",
  "Team collaboration tools",
  "Monthly performance reviews",
];

export default function PremiumPlanPricing() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-10 md:flex-row">
          {/* Left Column: Text Content and Image */}
          <div className="flex w-full flex-col justify-between md:w-1/2 lg:w-2/3">
            <div>
              <h2 className="mb-4 text-balance text-4xl font-bold md:text-5xl">
                Elevate Your Workflow with Our Premium Plan
              </h2>
              <p className="mb-4 text-lg text-muted-foreground">
                Experience the ultimate productivity boost with our premium
                plan. Gain access to cutting-edge features, dedicated support,
                and unparalleled customization to elevate your projects.
              </p>
              <Button variant="outline" size="lg">
                Get Started
              </Button>
            </div>
            {/* Image at the bottom left */}
            <div className="mt-10 flex h-full items-center justify-center rounded-lg bg-accent p-6">
              <Image
                src="/logo.svg"
                alt="Premium Plan Illustration"
                width={400}
                height={400}
                className="rounded-lg bg-background object-cover"
              />
            </div>
          </div>

          {/* Right Column: Pricing Card */}
          <Card className="w-full md:w-1/2 lg:w-1/3">
            <CardContent className="p-8">
              <p className="text-5xl font-bold">
                $199 <span className="text-lg text-muted-foreground">/mo</span>
              </p>
              <ul className="mt-6 space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="mr-2 size-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
