import Image from "next/image";
import { Users, Rocket, Globe, Award, Cpu, ChartBar } from "lucide-react";

export default function AboutSection() {
  const milestones = [
    {
      icon: Users,
      description:
        "Founded in 2010 with a small team of passionate innovators dedicated to solving complex business challenges.",
    },
    {
      icon: Rocket,
      description:
        "Launched our flagship product in 2015, revolutionizing the industry with cutting-edge AI-driven solutions.",
    },
    {
      icon: Globe,
      description:
        "Expanded globally in 2018, establishing offices in 5 countries and serving clients across 3 continents.",
    },
    {
      icon: Award,
      description:
        "Recognized as industry leaders in 2023, with multiple awards for innovation and customer satisfaction.",
    },
    {
      icon: Cpu,
      description:
        "Developed proprietary AI algorithms in 2020, enhancing our product capabilities and delivering unparalleled performance.",
    },
  ];

  return (
    <section className="bg-background py-12 md:py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b pb-6 md:grid-cols-2 md:gap-16">
          {/* Left Column: Text and Milestones */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About <span className="text-primary">TechNova</span>
              </h1>
              <p className="text-base text-muted-foreground sm:text-lg">
                At TechNova, we&apos;re on a mission to transform businesses
                through innovative technology solutions. Our journey is defined
                by continuous growth, relentless innovation, and a commitment to
                excellence. From humble beginnings to global recognition, we
                strive to empower organizations with the tools they need to
                thrive in a rapidly evolving digital landscape.
              </p>
            </div>

            <div className="relative space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex gap-4">
                  <div className="relative">
                    <div className="flex size-12 items-center justify-center overflow-hidden rounded-full border-2 border-primary/30 bg-primary/10 sm:size-12">
                      <milestone.icon className="size-5 text-primary sm:size-6" />
                    </div>
                    {index !== milestones.length - 1 && (
                      <div className="absolute left-1/2 top-12 h-12 w-px -translate-x-1/2 bg-primary/30 sm:top-12 sm:h-10" />
                    )}
                  </div>
                  <div className="flex-1 pt-1 sm:pt-2">
                    <p className="text-sm text-muted-foreground sm:text-base">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="TechNova team collaborating"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute bottom-4 left-4 flex flex-col rounded-lg bg-background p-4 shadow-lg sm:bottom-6 sm:left-6 sm:p-6">
                <span className="text-lg font-semibold sm:text-xl">
                  Innovation at Its Core
                </span>
                <span className="max-w-80 text-sm text-muted-foreground sm:text-base">
                  Our team of experts is dedicated to pushing the boundaries of
                  technology, delivering solutions that drive real-world impact.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
