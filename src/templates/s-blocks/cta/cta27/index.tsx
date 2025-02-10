import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function CallToAction27() {
  const cards = [
    {
      icon: "⚪",
      text: "Explore DY-Comps and take your marketplace to the next level.",
    },
    {
      icon: "🎨",
      text: "Get started with our Figma Design System",
    },
    {
      icon: "🎯",
      text: "Learn how to market your business on Themesberg.",
    },
    {
      icon: "⚡",
      text: "Start coding with the most popular utility-first framework",
    },
  ];

  return (
    <section className="bg-background py-16 text-foreground">
      <div className="container mx-auto max-w-5xl px-4">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
          We didn&apos;t reinvent the wheel
        </h1>
        <div className="mb-12 space-y-4">
          <p className="text-lg text-muted-foreground">
            Track work across the enterprise through an open, collaborative
            platform. Link issues across Jira and ingest data from other
            software development tools, so your IT support and operations teams
            have richer contextual information to rapidly respond to requests,
            incidents, and changes.
          </p>
          <p className="text-lg text-muted-foreground">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions. Accelerate critical development work,
            eliminate toil, and deploy changes with ease.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="group flex items-center gap-4 p-4 transition-colors hover:bg-accent"
            >
              <span className="text-xl" role="img" aria-hidden="true">
                {card.icon}
              </span>
              <span className="flex-grow text-sm text-muted-foreground group-hover:text-accent-foreground">
                {card.text}
              </span>
              <ArrowRight className="size-5 text-muted-foreground/50 transition-colors group-hover:text-accent-foreground" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
