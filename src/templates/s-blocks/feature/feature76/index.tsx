import { Cloud, Star, Bolt, MessagesSquare } from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "Elastic Infrastructure",
    description:
      "Automatically scale resources to meet demand spikes without performance degradation",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Star,
    title: "Five-Nines Reliability",
    description:
      "Guaranteed 99.999% uptime with multi-region failover and zero-downtime deployments",
    gradient: "from-purple-500 to-fuchsia-500",
  },
  {
    icon: Bolt,
    title: "Sub-100ms Latency",
    description:
      "Globally distributed edge network delivering lightning-fast response times",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: MessagesSquare,
    title: "24/7 Priority Support",
    description:
      "Enterprise-grade SLAs with dedicated technical account managers",
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function Feature76() {
  return (
    <section className="relative bg-background py-32 text-foreground">
      <div className="container relative z-10">
        <div className="mb-20 space-y-6 text-center">
          <h2 className="text-4xl font-bold tracking-tight [text-wrap:balance] md:text-5xl">
            <span className="bg-gradient-to-r from-primary to-[#00D4FF] bg-clip-text text-transparent">
              Enterprise-Grade Foundation
            </span>
            <br />
            For Modern Applications
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Built for mission-critical workloads with security and performance
            at scale
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border bg-card/50 p-8 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="mb-6">
                <div className="relative inline-flex">
                  <div
                    className={`flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} p-2.5`}
                  >
                    <feature.icon className="size-8" />
                  </div>
                </div>
              </div>

              <h3 className="mb-3 text-xl font-semibold tracking-tight">
                {feature.title}
              </h3>
              <p className="text-muted-foreground [text-wrap:balance]">
                {feature.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                <span>Learn more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-0 transition-all group-hover:opacity-100"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="mx-auto max-w-xl text-muted-foreground">
            Trusted by scaling startups and Fortune 500 companies to power their
            most demanding workloads
          </p>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />
      </div>
    </section>
  );
}
