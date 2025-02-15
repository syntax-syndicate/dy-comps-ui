import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code2, Palette, Sparkles } from "lucide-react";

const features = [
  {
    title: "Effortless Integration",
    description:
      "Quickly integrate pre-built components into your project with a simple copy and paste. Get a head start on your development and focus on what matters most.",
    icon: Code2,
    isNew: true,
  },
  {
    title: "Tailored to Your Vision",
    description:
      "Enjoy complete control over every aspect of your UI. Modify colors, typography, and layout to match your unique design language and brand identity perfectly.",
    icon: Palette,
    isNew: false,
  },
];

export default function Feature28() {
  return (
    <section className="relative overflow-hidden bg-accent md:py-32">
      <div className="absolute left-0 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/50 via-primary/20 to-transparent blur-[100px] dark:from-primary/50 dark:via-primary/30"></div>
      <div className="absolute right-0 top-0 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/50 via-secondary/20 to-transparent blur-[100px] dark:from-secondary/50 dark:via-secondary/30"></div>
      <div className="container">
        <div className="mx-auto">
          <h2 className="font-heading mb-10 text-center text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Craft Stunning UI <span className="text-primary">Effortlessly</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="rounded-lg border bg-card p-6 shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl dark:bg-background"
                >
                  <div className="mb-4 flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="mb-2 flex items-center gap-2 font-semibold">
                    <h3 className="text-lg font-bold">{feature.title}</h3>
                    {feature.isNew && (
                      <Badge variant="default">
                        <Sparkles className="mr-1 size-3" /> New
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                  <a
                    href="#"
                    className="group mt-4 flex w-max items-center gap-2 font-medium text-primary hover:underline"
                  >
                    Explore
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
