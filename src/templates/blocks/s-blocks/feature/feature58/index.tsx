import Image from "next/image";
import { Cloud, Star, Bolt } from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "Seamless Integration",
    description:
      "Effortlessly connect our platform with your existing tools and workflows for a smooth and efficient experience.",
  },
  {
    icon: Star,
    title: "Exceptional Performance",
    description:
      "Experience lightning-fast speeds and unwavering reliability, ensuring your tasks are completed swiftly and effectively.",
  },
  {
    icon: Bolt,
    title: "Dynamic Customization",
    description:
      "Tailor the platform to your exact needs with a range of flexible options and personalized settings.",
  },
];

export default function Feature58() {
  return (
    <section className="bg-background py-16 text-foreground">
      <div className="container mx-auto">
        <div className="rounded-lg border bg-accent p-6 md:grid md:grid-cols-2 md:gap-x-20">
          {/* Image Container */}
          <div className="relative order-2 mb-8 flex justify-center md:mb-0 lg:justify-start">
            <div className="w-full max-w-[350px] md:max-w-full">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="placeholder"
                width={480}
                height={400}
                className="size-full rounded-md object-cover object-center"
              />
            </div>
          </div>
          {/* Features List */}
          <ul className="order-1 flex flex-col justify-center gap-y-8">
            {features.map((feature, index) => (
              <li key={index} className="flex gap-4">
                <div className="mt-1 flex size-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                  <feature.icon className="size-6 shrink-0 text-primary lg:size-6" />
                </div>
                <div>
                  <div className="mb-3 h-5 text-sm font-semibold text-accent-foreground md:text-base">
                    {feature.title}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground md:text-base">
                    {feature.description}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
