import Image from "next/image";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Effortless Integration",
    description:
      "Seamlessly integrate our platform into your existing workflow. Experience a smooth transition with minimal disruption and maximum efficiency.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    title: "Advanced Analytics",
    description:
      "Gain deep insights into your data with our robust analytics suite. Make data-driven decisions with clear, actionable reports.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    title: "Personalized Experience",
    description:
      "Tailor the platform to meet your unique needs. Customize settings and features to create a truly personalized experience.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    title: "Secure & Reliable",
    description:
      "Rest assured knowing your data is safe with our state-of-the-art security measures. Enjoy a reliable platform with consistent performance.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function Feature72() {
  return (
    <section className="bg-background py-32 text-foreground">
      <div className="container flex flex-col gap-16 lg:px-16">
        <div className="w-full rounded-lg bg-accent p-6">
          <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            Unlock Your Potential with Our Powerful Features
          </h2>
          <p className="mb-8 text-muted-foreground lg:text-lg">
            Discover a suite of features designed to elevate your productivity
            and simplify complex tasks. From seamless integrations to powerful
            analytics, we provide the tools you need to succeed.
          </p>
          <a
            href="#"
            className="group flex items-center text-xs font-medium text-primary hover:underline md:text-base lg:text-lg"
          >
            Explore the Possibilities
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden text-clip rounded-lg border"
            >
              <div>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={400}
                  height={225}
                  className="aspect-[16/9] size-full object-cover object-center"
                />
              </div>
              <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
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
