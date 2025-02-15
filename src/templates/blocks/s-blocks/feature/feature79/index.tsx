import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Effortless Collaboration: Connect and Work Seamlessly",
    link: "#",
  },
  {
    title: "Intuitive Interface: Simplifying Complex Tasks",
    link: "#",
  },
  {
    title: "Scalable Solutions: Grow With Your Needs",
    link: "#",
  },
];

export default function Feature79() {
  return (
    <section className="bg-background py-32 text-foreground">
      <div className="container flex flex-col items-center gap-16 sm:gap-20 md:gap-24 lg:px-16">
        <div className="text-center">
          <Badge className="mb-6" variant={"outline"}>
            Empowering Your Workflow
          </Badge>
          <h3 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            Explore Our Core Features
          </h3>
          <p className="text-muted-foreground lg:max-w-2xl lg:text-lg">
            Discover how our innovative tools can streamline your processes and
            elevate your team&apos;s performance with unmatched ease and
            efficiency.
          </p>
        </div>
        <div className="flex flex-col gap-y-12 md:col-span-2 md:grid md:grid-cols-2 md:gap-x-6 lg:gap-8">
          <a
            href="#"
            className="group text-clip rounded-t-xl transition-shadow hover:shadow-lg md:min-h-96 lg:min-h-[28rem] xl:min-h-[32rem]"
          >
            <div>
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Featured"
                width={800}
                height={450}
                className="aspect-[16/9] size-full rounded-t-lg object-cover object-center"
              />
            </div>
            <div className="rounded-b-lg bg-accent px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <p className="mb-6 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Featured
              </p>
              <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                Boost Your Productivity
              </h3>
              <p className="mb-8 text-muted-foreground lg:text-lg">
                Our comprehensive suite of features is designed to improve team
                collaboration, automate key processes, and ultimately boost your
                productivity.
              </p>
              <div className="flex items-center font-bold text-primary hover:underline">
                Learn More{" "}
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </a>
          <div className="flex flex-col justify-between gap-y-12 md:px-8 lg:px-10">
            {features.map((feature, index) => (
              <a
                key={index}
                href={feature.link}
                className="group flex flex-col justify-between gap-4 border p-8 md:flex-row md:items-center md:border-0 md:border-b md:px-0 md:py-10 lg:py-12"
              >
                <h3 className="mb-3 text-lg font-semibold md:mb-0 md:text-xl">
                  {feature.title}
                </h3>
                <div className="flex w-fit items-center rounded-lg border-0 transition-transform group-hover:translate-x-1 md:border md:px-6 md:py-3 md:group-hover:bg-primary md:group-hover:text-primary-foreground">
                  <ArrowRight className="size-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
