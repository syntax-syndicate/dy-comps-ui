import { Badge } from "@/components/ui/badge";
import {
  Lock,
  MessageCircle,
  Infinity,
  Text,
  Code,
  Upload,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Lock,
    title: "Uncompromising Security",
    description:
      "Rest easy knowing your data is fortified with our top-tier security measures, ensuring complete confidentiality and peace of mind.",
  },
  {
    icon: MessageCircle,
    title: "Round-the-Clock Assistance",
    description:
      "Our dedicated support team is at your service 24/7, ready to provide expert guidance and resolve any queries you may have.",
  },
  {
    icon: Infinity,
    title: "Boundless Exploration",
    description:
      "Enjoy unrestricted access to our full suite of features, empowering you to explore limitless possibilities and maximize your potential.",
  },
  {
    icon: Text,
    title: "Effortless Usability",
    description:
      "Experience a seamless and intuitive interface designed for ease of use, allowing you to accomplish tasks with minimal effort.",
  },
  {
    icon: Code,
    title: "Developer-Centric Design",
    description:
      "Crafted with developers in mind, our platform offers a robust and flexible foundation for building and scaling your projects.",
  },
  {
    icon: Upload,
    title: "Continuously Evolving",
    description:
      "Stay ahead of the curve with our commitment to continuous updates, ensuring you always have access to the latest features and improvements.",
  },
];

export default function FeatureSection() {
  return (
    <section className={cn("relative py-16 md:py-32")}>
      <div className="bg-grid-line absolute inset-0 z-0 opacity-10 dark:opacity-20" />
      <div className="container relative z-10">
        <Badge variant="outline" className="mb-4">
          Features
        </Badge>
        <h2 className="mb-6 text-3xl font-medium sm:text-4xl md:text-5xl">
          Experience the Difference
          <br />
          <span className="text-primary">
            Discover the Advantages of Our Platform
          </span>
        </h2>
        <div className="my-8 h-[1px] w-full bg-border md:my-16" />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between gap-6 rounded-lg border border-input bg-card p-8 shadow-md transition-all hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="flex w-full flex-col items-center justify-center gap-4 rounded-lg">
                  <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                    <feature.icon className="size-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium">{feature.title}</h3>
                </div>
              </div>
              <p className="text-center text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
