import {
  Component,
  Code2 as Code,
  Paintbrush,
  Move,
  Rocket,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Elegant & Reusable Components",
    description:
      "DY Comps provides beautifully crafted React components that are reusable, customizable, and optimized for modern web development.",
    icon: Component,
  },
  {
    title: "Next.js & TypeScript",
    description:
      "Built with Next.js and TypeScript, ensuring high performance, scalability, and type safety for a seamless development experience.",
    icon: Code,
  },
  {
    title: "ShadCN & Tailwind CSS",
    description:
      "Leverage the power of ShadCN and Tailwind CSS for a consistent, minimal, and highly customizable UI design.",
    icon: Paintbrush,
  },
  {
    title: "Framer Motion",
    description:
      "Enhance user experience with fluid and performant animations using Framer Motion, making interactions visually appealing.",
    icon: Move,
  },
  {
    title: "Easy to Use",
    description:
      "Designed for seamless integration, clear documentation, and an intuitive API, making it effortless for developers to build and scale.",
    icon: Rocket,
  },
  {
    title: "Open Source",
    description:
      "Join the vibrant community! Collaborate, contribute, and unlock endless possibilities together.",
    icon: Users,
  },
];

function Feature() {
  return (
    <section
      id="features"
      className="container grid gap-6 py-16 md:gap-8 lg:py-32"
    >
      <h2 className="font-heading mx-auto text-center text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
        Features
      </h2>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {features.map(({ title, description, icon: Icon }, i) => (
          <div
            key={i}
            className="animated-box relative overflow-hidden rounded-lg border bg-background p-2"
          >
            <div className="flex min-h-[180px] flex-col justify-start rounded-md p-6">
              <Icon className="mb-3 h-8 w-8" />
              <div className="space-y-2">
                <h3 className="font-bold">{title}</h3>
                <p className="text-sm">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Feature;
