import {
  ZoomIn,
  BarChart,
  CircleHelp,
  WandSparkles,
  Layers,
  BatteryCharging,
} from "lucide-react";

export default function Feature43() {
  const reasons = [
    {
      title: "Quality",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
      icon: <ZoomIn className="size-6" />,
    },
    {
      title: "Experience",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
      icon: <BarChart className="size-6" />,
    },
    {
      title: "Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
      icon: <CircleHelp className="size-6" />,
    },
    {
      title: "Innovation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
      icon: <WandSparkles className="size-6" />,
    },
    {
      title: "Results",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
      icon: <Layers className="size-6" />,
    },
    {
      title: "Efficiency",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
      icon: <BatteryCharging className="size-6" />,
    },
  ];

  return (
    <section className="bg-background py-32 text-foreground">
      <div className="container mx-auto">
        <div className="mb-10 md:mb-20">
          <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
            Why Work With Us?
          </h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <div key={i} className="flex flex-col">
              <div className="mb-5 flex size-12 items-center justify-center rounded-full border-2 border-primary/50 bg-primary/10 text-primary">
                {reason.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
