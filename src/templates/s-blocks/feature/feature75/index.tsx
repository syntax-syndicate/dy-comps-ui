import { ArrowRight } from "lucide-react";

const features = [
  {
    tagLine: "Boost Productivity",
    description:
      "Streamline your tasks and achieve more with our intuitive platform. Experience a significant boost in your overall productivity.",
  },
  {
    tagLine: "Enhance Collaboration",
    description:
      "Work seamlessly with your team using our robust collaboration tools. Share ideas and feedback effortlessly, driving collective success.",
  },
];

export default function Feature75() {
  return (
    <section className="bg-background py-32 text-foreground">
      <div className="container grid gap-y-12 md:grid-cols-12 md:gap-x-6 md:gap-y-0">
        <div className="md:col-span-6 lg:col-span-5">
          <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            Transform Your Workflow with Key Features
          </h2>
          <p className="mb-8 text-muted-foreground lg:text-lg">
            Explore our key features designed to streamline your daily
            operations and enhance your team&apos;s capabilities. From
            productivity boosts to collaborative tools, we provide everything
            you need to succeed.
          </p>
        </div>
        <div className="grid gap-y-5 md:col-span-6 md:gap-y-[1.875rem] lg:col-start-7">
          {features.map((feature, index) => (
            <a
              key={index}
              href="#"
              className="group flex flex-col justify-center text-clip rounded-lg bg-accent px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12"
            >
              <p className="mb-3 text-xs font-medium uppercase tracking-wider">
                {feature.tagLine}
              </p>
              <p className="mb-12 font-semibold text-muted-foreground lg:text-xl">
                {feature.description}
              </p>
              <div className="flex w-fit items-center gap-4 rounded-md border border-primary px-6 py-4 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                Learn more
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
