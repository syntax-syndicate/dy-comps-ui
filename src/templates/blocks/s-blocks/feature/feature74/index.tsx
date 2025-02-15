import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  imageUrl: string;
}

const features: Feature[] = [
  {
    title: "Intelligent Automation",
    description:
      "Automate repetitive tasks and optimize your workflow with our intelligent automation features. Free up your time and resources to focus on what truly matters.",
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    title: "Collaborative Workspaces",
    description:
      "Enhance teamwork and communication with our collaborative workspaces. Share files, ideas, and feedback in real-time, fostering a more connected and productive team environment.",
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function Feature74() {
  return (
    <section className="bg-background py-32">
      <div className="container flex flex-col gap-16 lg:px-16">
        <div className="w-full rounded-lg bg-accent p-6">
          <h2 className="mb-3 text-xl font-semibold text-foreground md:mb-4 md:text-4xl lg:mb-6">
            Elevate Your Operations With Cutting-Edge Features
          </h2>
          <p className="mb-8 text-muted-foreground lg:text-lg">
            Explore a suite of powerful features designed to transform how you
            work. From intelligent automation to collaborative tools, we empower
            you to achieve more with less effort.
          </p>
          <Link
            href="#"
            className="group flex items-center text-xs font-medium text-primary hover:underline md:text-base lg:text-lg"
          >
            Discover the Possibilities
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex rounded-lg ${
                index % 2 === 0 ? "flex-col" : "flex-col-reverse"
              } text-clip border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8`}
            >
              <div
                className={`md:min-h-96 lg:min-h-[28rem] xl:min-h-[32rem] ${
                  index % 2 === 0 ? "order-first" : "order-last"
                }`}
              >
                <Image
                  src={feature.imageUrl}
                  alt={feature.title}
                  width={800}
                  height={450}
                  className="aspect-[16/9 size-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h3 className="mb-3 text-lg font-semibold text-foreground md:mb-4 md:text-2xl lg:mb-6">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground lg:text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
