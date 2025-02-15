import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const features = [
  {
    title: "Seamless Integration for Enhanced Workflow",
    description:
      "Experience a frictionless connection with your existing tools. Our system smoothly integrates, allowing for a cohesive and efficient workflow, minimizing disruptions and maximizing productivity.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    title: "Unparalleled Customization to Meet Unique Needs",
    description:
      "Tailor the platform to your exact specifications. With our robust customization options, you can adapt the interface, features, and functionalities to perfectly align with your individual requirements and operational style.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    title: "Advanced Analytics for Data-Driven Decisions",
    description:
      "Unlock the power of your data. Our advanced analytics suite provides comprehensive insights, enabling you to make informed, strategic decisions based on real-time performance metrics and trends.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function Feature78() {
  return (
    <section className="bg-background py-32 text-foreground">
      <div className="flex flex-col gap-12 md:gap-16">
        <div className="container">
          <div className="w-full rounded-lg bg-accent p-6">
            <h2 className="mb-5 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-10">
              Explore a New Era of Efficiency and Innovation.
            </h2>
            <a
              href="#"
              className="group flex items-center text-xs text-primary hover:underline md:text-base lg:text-lg"
            >
              Book a demo
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
        <div>
          <Tabs defaultValue="feature-1" className="w-full">
            <div className="relative">
              <div className="container overflow-auto">
                <TabsList>
                  {features.map((feature, index) => (
                    <TabsTrigger key={index} value={`feature-${index + 1}`}>
                      Feature {index + 1}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--background))_0%,transparent_10%,transparent_90%,hsl(var(--background))_100%)] md:hidden"></div>
            </div>
            <div className="container">
              {features.map((feature, index) => (
                <TabsContent key={index} value={`feature-${index + 1}`}>
                  <div className="mt-12 flex flex-col md:col-span-2 md:mt-20 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
                    <div className="text-clip rounded-3xl md:min-h-96 lg:min-h-[28rem] xl:min-h-[32rem]">
                      <Image
                        src={feature.image}
                        alt={`Feature ${index + 1}`}
                        width={800}
                        height={600}
                        className="aspect-[16/9] size-full rounded-lg object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col justify-center py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                      <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground lg:text-lg">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
