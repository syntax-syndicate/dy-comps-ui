import { ArrowUpRight } from "lucide-react";

interface Award {
  year: string;
  title: string;
  description: string;
}

export default function Award3() {
  const awards: Award[] = [
    {
      year: "2014",
      title: "Business Award",
      description:
        "Physical space is often conceived in three linear dimensions",
    },
    {
      year: "2016",
      title: "Design Award",
      description:
        "Maxwell's equations—the foundation of classical electromagnetism",
    },
    {
      year: "2017",
      title: "Best Renovation",
      description:
        "The long barrow was built on land previously inhabited in the Mesolithic",
    },
    {
      year: "2018",
      title: "Innovation Award",
      description:
        "Physiological respiration involves the mechanisms that ensure that",
    },
    {
      year: "2019",
      title: "Landscape Design",
      description:
        "Maxwell's equations—the foundation of classical electromagnetism",
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <p className="text-base text-muted-foreground">
            Awards & Recognitions
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Our Awards
          </h1>
        </div>
        <div className="divide-y">
          {awards.map((award) => (
            <a
              key={award.year}
              href="#"
              className="group grid grid-cols-[80px_1fr_32px] items-center gap-8 py-8 transition-colors hover:bg-muted/50"
            >
              <span className="ml-2 rounded-full border p-2 text-center text-sm font-bold text-primary">
                {award.year}
              </span>
              <div className="space-y-1">
                <h2 className="text-xl font-semibold tracking-tight">
                  {award.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {award.description}
                </p>
              </div>
              <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
