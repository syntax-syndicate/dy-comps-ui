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
    title: "Effortless Integration",
    description:
      "Seamlessly integrate our platform into your existing workflow. Experience a smooth transition with minimal disruption and maximum efficiency.",
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    title: "Advanced Analytics",
    description:
      "Gain deep insights into your data with our robust analytics suite. Make data-driven decisions with clear, actionable reports.",
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    title: "Personalized Experience",
    description:
      "Tailor the platform to meet your unique needs. Customize settings and features to create a truly personalized experience.",
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function FeatureShowcase() {
  return (
    <section className="bg-background py-32">
      <div className="container flex flex-col gap-16 lg:px-16">
        <div className="w-full rounded-lg bg-accent p-6">
          <h2 className="mb-3 text-xl font-semibold text-foreground md:mb-4 md:text-4xl lg:mb-6">
            Unlock Your Potential with Our Powerful Features
          </h2>
          <p className="mb-8 text-muted-foreground lg:text-lg">
            Discover a suite of features designed to elevate your productivity
            and simplify complex tasks. From seamless integrations to powerful
            analytics, we provide the tools you need to succeed.
          </p>
          <Link
            href="#"
            className="group flex items-center text-xs font-medium text-primary hover:underline md:text-base lg:text-lg"
          >
            Explore the Possibilities
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          <div className="flex flex-col overflow-hidden text-clip rounded-lg border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="lg:min-h-[28rem md:min-h-96 xl:min-h-[32rem]">
              <Image
                src={features[0]?.imageUrl ?? ""}
                alt={features[0]?.title ?? ""}
                width={800}
                height={450}
                className="aspect-[16/9 size-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <h3 className="mb-3 text-lg font-semibold text-foreground md:mb-4 md:text-2xl lg:mb-6">
                {features[0]?.title}
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                {features[0]?.description}
              </p>
            </div>
          </div>
          {features.slice(1).map((feature, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden text-clip rounded-lg border"
            >
              <div>
                <Image
                  src={feature.imageUrl}
                  alt={feature.title}
                  width={800}
                  height={450}
                  className="aspect-[16/9] size-full object-cover object-center"
                />
              </div>
              <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
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
