import { ListChecks } from "lucide-react";

export default function Feature99() {
  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="lg:flex lg:items-center lg:gap-24">
          <div className="mt-8 lg:mt-0">
            <h2 className="mb-8 text-4xl font-bold text-foreground lg:text-5xl">
              Your Fast-Track Onboarding
            </h2>
            <div className="grid gap-10 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Connect Your Systems",
                  description:
                    "Seamlessly integrate with over 40 platforms to centralize your data in minutes.",
                },
                {
                  step: "02",
                  title: "Automate Team Sync",
                  description:
                    "Effortlessly sync your employee data and start gaining insights immediately.",
                },
                {
                  step: "03",
                  title: "Unlock Team Potential",
                  description:
                    "Analyze trends, manage effectively, and make data-driven decisions, solo or as a team.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 rounded-lg border border-muted bg-card p-6"
                >
                  <div className="flex size-12 items-center justify-center rounded-full border border-primary bg-primary/10">
                    <span className="text-3xl font-bold text-primary">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 flex items-center justify-start gap-4 text-muted-foreground">
          <ListChecks className="size-5" />
          <p className="text-sm">
            Explore over 100+ integrations and features to elevate your
            workflow.
          </p>
        </div>
      </div>
    </section>
  );
}
