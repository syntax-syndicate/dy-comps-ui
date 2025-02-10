import { ArrowRight } from "lucide-react";

export default function StatsMetrics() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      {/* Decorative background element */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-1/4 -top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-1/4 -right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="mb-16 flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">
            Platform Performance
            <span className="text-primary"> Insights</span>
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Ensuring stability and scalability for all users, our platform
            continues to exceed expectations and drive innovation.
          </p>
          <a
            href="#"
            className="group inline-flex items-center gap-2 px-4 py-2 font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Read the full impact report
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              value: "250%+",
              description: "average growth in user engagement",
            },
            {
              value: "$2.5m",
              description: "annual savings per enterprise partner",
            },
            {
              value: "200+",
              description: "integrations with top industry platforms",
            },
            {
              value: "99.9%",
              description: "customer satisfaction over the last year",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 rounded-lg bg-card p-6 shadow-lg transition-transform hover:scale-105"
            >
              <div className="text-5xl font-bold">{stat.value}</div>
              <p className="text-center text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
