"use client";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Feature54() {
  const features = [
    {
      id: "feature-1",
      title: "Integration",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      subfeatures: [
        {
          title: "Effortless Setup",
          description:
            "Get up and running in minutes with our intuitive onboarding process. No headaches, just pure productivity.",
        },
        {
          title: "Universal Compatibility",
          description:
            "Works flawlessly with all your favorite tools and platforms. Stay connected without any disruptions.",
        },
        {
          title: "Adaptive Design",
          description:
            "Our system intelligently adapts to your workflows, ensuring a seamless experience regardless of your needs.",
        },
      ],
    },
    {
      id: "feature-2",
      title: "Automation",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      subfeatures: [
        {
          title: "Smart Task Management",
          description:
            "Let our AI prioritize your tasks and manage your schedule, freeing up your time for what truly matters.",
        },
        {
          title: "Predictive Insights",
          description:
            "Gain valuable insights into your performance and trends, allowing you to make data-driven decisions.",
        },
        {
          title: "Automated Workflows",
          description:
            "Automate repetitive processes and reduce errors, so you can focus on innovation and strategy.",
        },
      ],
    },
    {
      id: "feature-3",
      title: "Collaboration",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      subfeatures: [
        {
          title: "Real-Time Co-Editing",
          description:
            "Collaborate seamlessly with your team in real-time, making project management a breeze.",
        },
        {
          title: "Secure Communication",
          description:
            "Keep your conversations private and secure with our encrypted communication channels.",
        },
        {
          title: "Centralized Hub",
          description:
            "Access all project information and communications in one centralized hub, eliminating confusion and delays.",
        },
      ],
    },
    {
      id: "feature-4",
      title: "Security",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      subfeatures: [
        {
          title: "Robust Encryption",
          description:
            "Rest easy knowing your data is protected by the latest encryption standards, keeping your information safe and secure.",
        },
        {
          title: "Advanced Threat Detection",
          description:
            "Our system proactively detects and mitigates potential threats, ensuring the safety of your valuable assets.",
        },
        {
          title: "Regular Audits",
          description:
            "We conduct regular security audits to maintain the highest standards of data protection.",
        },
      ],
    },
    {
      id: "feature-5",
      title: "Performance",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      subfeatures: [
        {
          title: "Flexible Resources",
          description:
            "Scale your resources on demand to accommodate your growing needs. No limits to your growth.",
        },
        {
          title: "Optimized Infrastructure",
          description:
            "Our infrastructure is optimized for speed and performance, ensuring a smooth and responsive experience.",
        },
        {
          title: "Reliable Uptime",
          description:
            "Count on our reliable systems to keep you connected and productive with minimal downtime.",
        },
      ],
    },
  ];

  return (
    <section className="bg-background py-32 text-foreground">
      <div className="flex flex-col items-center gap-8 lg:px-16">
        <div className="container flex flex-col items-center">
          <h3 className="mb-2 max-w-3xl text-pretty text-center text-3xl font-semibold md:text-4xl lg:text-5xl">
            Unlock Your Potential with Our{" "}
            <span className="text-primary">Powerful Features</span>
          </h3>
          <p className="text-pretty text-center text-muted-foreground md:text-lg lg:max-w-3xl">
            Explore the possibilities and discover how our platform can
            transform the way you work.
          </p>
        </div>
        <div className="w-full text-center">
          <Tabs defaultValue="feature-1" className="w-full">
            <div className="container mb-6 flex min-w-fit flex-col items-center lg:mb-8">
              <TabsList className="h-10 w-fit">
                {features.map((feature) => (
                  <TabsTrigger key={feature.id} value={feature.id}>
                    {feature.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            <div className="container w-full lg:max-w-5xl">
              {features.map((feature) => (
                <TabsContent key={feature.id} value={feature.id}>
                  <div>
                    <div className="relative aspect-[1.67] w-full rounded-lg p-4">
                      <div className="absolute -inset-1.5 rounded-2xl bg-primary opacity-30 blur" />
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={1000}
                        height={600}
                        className="relative size-full rounded-lg object-cover object-center"
                      />
                    </div>
                    <div className="hidden grid-cols-3 gap-6 py-6 md:grid">
                      {feature.subfeatures.map((subfeature, index) => (
                        <div
                          key={index}
                          className="mt-4 flex flex-col rounded-lg border bg-accent p-4 text-left"
                        >
                          <p className="mb-2 text-xs font-semibold">
                            {subfeature.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {subfeature.description}
                          </p>
                        </div>
                      ))}
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
