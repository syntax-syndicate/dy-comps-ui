import {
  Cloud,
  Star,
  Bolt,
  MessagesSquare,
  Rocket,
  Building,
} from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "Scalable Cloud Infrastructure",
    description:
      "Leverage our robust cloud infrastructure that grows with your business. Enjoy reliability and performance at any scale.",
  },
  {
    icon: Star,
    title: "Intuitive User Interface",
    description:
      "Navigate our platform with ease. Designed for simplicity and efficiency, our UI makes complex tasks feel effortless.",
  },
  {
    icon: Bolt,
    title: "Lightning-Fast Performance",
    description:
      "Experience rapid processing and instant responses with our optimized platform. We've built for speed without compromising reliability.",
  },
  {
    icon: MessagesSquare,
    title: "Real-Time Collaboration",
    description:
      "Connect with your team in real-time, share insights, and work together seamlessly. Improve productivity and enhance teamwork.",
  },
  {
    icon: Rocket,
    title: "Rapid Deployment",
    description:
      "Launch your projects quickly and efficiently. Our streamlined deployment process gets you up and running in no time.",
  },
  {
    icon: Building,
    title: "Enterprise-Grade Security",
    description:
      "Benefit from enterprise-level security measures, ensuring your data and applications are always protected. We prioritize your security.",
  },
];

export default function Feature67() {
  return (
    <section className="bg-background py-32 text-foreground">
      <div className="container flex flex-col items-start gap-8 lg:gap-12 lg:px-16 xl:flex-row xl:gap-32">
        <h3 className="lg:max-w-1/3 text-3xl font-semibold md:shrink-0 md:text-4xl lg:max-w-3xl lg:text-5xl">
          Feature group
        </h3>
        <div className="grid w-full gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex rounded-lg border bg-accent p-6 md:p-8"
            >
              <feature.icon className="mr-3 size-5 shrink-0 text-primary lg:mr-6 lg:size-6" />
              <div>
                <div className="mb-3 h-5 text-sm font-semibold text-accent-foreground md:text-base">
                  {feature.title}
                </div>
                <div className="text-sm font-medium text-muted-foreground md:text-base">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
