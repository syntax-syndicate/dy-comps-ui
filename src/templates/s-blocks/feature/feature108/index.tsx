import * as React from "react";
import { Zap, Pointer, LayoutTemplate, CreditCard, Gem } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
export default function Feature108() {
  const features = [
    {
      icon: Zap,
      title: "Amplify Impact",
      content: {
        badge: "Cutting-Edge Strategies",
        title: "Elevate your digital footprint.",
        description:
          "Uncover the latest web innovations that enable you to create compelling, high-performance sites that attract and convert.",
        buttonText: "View Offerings",
        secondaryButtonText: "Explore More",
        buttonIcon: CreditCard,
      },
    },
    {
      icon: Pointer,
      title: "Maximize Engagement",
      content: {
        badge: "Audience Connection",
        title: "Connect with your audience on a deeper level.",
        description:
          "Employ advanced engagement tactics that captivate users, fostering loyalty and repeat interactions.",
        buttonText: "Discover How",
        secondaryButtonText: "See in Action",
        buttonIcon: Pointer,
      },
    },
    {
      icon: LayoutTemplate,
      title: "Refine Aesthetics",
      content: {
        badge: "Design Excellence",
        title: "Design layouts that inspire and engage.",
        description:
          "Harness contemporary design philosophies to develop visually stunning layouts that create memorable user experiences.",
        buttonText: "Browse Styles",
        secondaryButtonText: "Get Inspired",
        buttonIcon: Gem,
      },
    },
  ];

  return (
    <section className="bg-background py-20">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-2">
            Premier Solutions
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
            Forge the Future
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Partner with us to architect impeccable web experiences.
          </p>
        </div>

        <Tabs defaultValue="tab-1" className="mt-12">
          <TabsList className="grid w-full grid-cols-3">
            {features.map((feature, index) => (
              <TabsTrigger
                key={index}
                value={`tab-${index + 1}`}
                className={cn(
                  "w-full data-[state=active]:bg-foreground/10 data-[state=active]:text-foreground",
                )}
              >
                <feature.icon className="mr-2 size-4" />
                {feature.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mt-8">
            {features.map((feature, index) => (
              <TabsContent key={index} value={`tab-${index + 1}`} className="">
                <div className="grid grid-cols-1 items-center gap-8 rounded-lg border bg-card p-8 shadow-md md:grid-cols-2">
                  <div className="space-y-4">
                    <Badge>{feature.content.badge}</Badge>
                    <h3 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
                      {feature.content.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.content.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <Button>
                        {feature.content.buttonText}
                        <feature.content.buttonIcon className="ml-2 size-4" />
                      </Button>
                      <Button variant="secondary">
                        {feature.content.secondaryButtonText}
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-lg">
                    <Image
                      src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                      alt="Feature illustration"
                      className="aspect-video h-auto w-full rounded-lg object-cover"
                      width={500}
                      height={300}
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
