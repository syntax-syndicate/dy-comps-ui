import {
  Rocket,
  Compass,
  Zap,
  Briefcase,
  BarChart2,
  Users,
  Cog,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function Feature105() {
  const steps: { icon: LucideIcon; label: string; imageUrl: string }[] = [
    {
      icon: Rocket,
      label: "Launch",
      imageUrl:
        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      icon: Compass,
      label: "Navigate",
      imageUrl:
        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      icon: Zap,
      label: "Energize",
      imageUrl:
        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      icon: Briefcase,
      label: "Organize",
      imageUrl:
        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      icon: BarChart2,
      label: "Analyze",
      imageUrl:
        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      icon: Users,
      label: "Collaborate",
      imageUrl:
        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      icon: Cog,
      label: "Optimize",
      imageUrl:
        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
  ];

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-screen-md flex-col items-center gap-4">
          <Badge
            variant="outline"
            className="flex items-center gap-1 px-2.5 py-1.5 text-sm"
          >
            <Rocket className="h-auto w-4" />
            Journey Milestones
          </Badge>
          <h2 className="text-center text-3xl font-semibold lg:text-4xl">
            Your Path to Success
          </h2>
          <p className="text-center text-muted-foreground lg:text-lg">
            Embark on a transformative journey with our innovative platform.
            We&apos;ve designed a step-by-step approach to help you reach new
            heights.
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-screen-xl">
          <Tabs defaultValue="tab-1" className="w-full">
            <TabsList className="mx-auto mb-10 flex w-fit justify-center gap-5 bg-background">
              {steps.map((step, index) => (
                <TabsTrigger
                  key={index}
                  value={`tab-${index + 1}`}
                  className="data- group flex flex-col items-center gap-1.5 border-b-2 border-transparent px-1 pb-3.5 transition-all duration-300 ease-in-out"
                >
                  <span className="flex size-16 items-center justify-center rounded-md bg-muted transition-all duration-300 ease-in-out group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground">
                    <step.icon className="w-7" />
                  </span>
                  <p className="text-sm text-muted-foreground">{step.label}</p>
                </TabsTrigger>
              ))}
            </TabsList>
            {steps.map((step, index) => (
              <TabsContent
                key={index}
                value={`tab-${index + 1}`}
                className="mt-5 h-[720px]"
              >
                {/* Use the Next.js Image component for dynamic images */}
                <Image
                  src={step.imageUrl} // Use the imageUrl from the steps array
                  alt={`${step.label} Step`}
                  className="h-full w-full rounded-lg border object-cover"
                  width={1280}
                  height={720}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
