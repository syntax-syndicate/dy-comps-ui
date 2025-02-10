"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  MessageCircleMore,
  Blocks,
  Users,
  Workflow,
  LayoutPanelTop,
  Fingerprint,
} from "lucide-react";
import Image from "next/image";

export default function Feature52() {
  const [activeTab, setActiveTab] = useState("feature-1");

  const features = [
    { id: "feature-1", title: "Communication", icon: MessageCircleMore },
    { id: "feature-2", title: "Integrations", icon: Blocks },
    { id: "feature-3", title: "Collaboration", icon: Users },
    { id: "feature-4", title: "Automation", icon: Workflow },
    { id: "feature-5", title: "Customization", icon: LayoutPanelTop },
    { id: "feature-6", title: "Security", icon: Fingerprint },
  ];

  return (
    <section className="py-24">
      <div className="container max-w-5xl px-4">
        <Tabs
          defaultValue="feature-1"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid h-auto grid-cols-2 gap-2 bg-muted sm:grid-cols-3 md:flex">
            {features.map((feature) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className="flex flex-col items-center gap-2 p-3 data-[state=active]:bg-background lg:p-4"
              >
                <feature.icon className="size-8 text-primary lg:h-10 lg:w-10" />
                <span className="text-sm font-semibold lg:text-base">
                  {feature.title}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
          {features.map((feature) => (
            <TabsContent key={feature.id} value={feature.id} className="mt-4">
              <div className="aspect-video w-full overflow-hidden rounded-md">
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt={`${feature.title} feature`}
                  width={800}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
