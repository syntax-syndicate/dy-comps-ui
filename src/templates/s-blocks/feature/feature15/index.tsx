import { CircleCheckBig } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const features = [
  {
    title: "Secure Payments",
    description:
      "Ensure safe and reliable transactions for your customers with our advanced payment processing system.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    benefits: [
      "Secure payment gateway integration with Stripe",
      "SSL encryption for secure transactions",
    ],
  },
  {
    title: "Automated Invoicing",
    description:
      "Streamline your billing process with our automated invoicing feature, saving you time and reducing errors.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    benefits: [
      "Automated invoicing for easy billing",
      "Customizable invoice templates",
    ],
  },
];

export default function Feature15() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="space-y-10 rounded-lg md:px-4">
          {features.map((feature, index) => (
            <Card key={index} className="grid rounded-lg border md:grid-cols-2">
              <div className="flex flex-col px-6 py-8 lg:px-8 lg:py-12 xl:px-12 xl:py-20">
                <h3 className="mb-3 text-2xl font-medium text-foreground sm:mb-5 md:text-3xl lg:text-4xl">
                  {feature.title}
                </h3>
                <div className="mb-8 text-sm text-muted-foreground sm:mb-10 md:text-base">
                  {feature.description}
                </div>
                <ul className="mt-auto space-y-2 sm:space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex gap-x-3">
                      <CircleCheckBig className="mt-0.5 size-4 shrink-0 text-primary sm:mt-1" />
                      <p className="text-sm text-foreground md:text-base">
                        {benefit}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative order-first max-h-80 overflow-hidden rounded-r-lg md:order-last md:max-h-[500px]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={500}
                  height={500}
                  className="h-full w-full rounded-r-lg object-cover"
                />
                <span className="absolute left-5 top-5 flex size-6 items-center justify-center rounded-sm bg-primary font-mono text-xs text-primary-foreground md:left-10 md:top-10">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
