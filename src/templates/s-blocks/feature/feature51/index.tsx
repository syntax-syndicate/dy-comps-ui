import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircleMore, Lightbulb, ListChecks } from "lucide-react";

export default function Feature51() {
  const features = [
    {
      id: "feature-1",
      title: "Get Started",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: <MessageCircleMore className="size-8" />,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      id: "feature-2",
      title: "Get Ideas",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: <Lightbulb className="size-8" />,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      id: "feature-3",
      title: "Build",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: <ListChecks className="size-8" />,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
  ];

  return (
    <section className="bg-background py-16 text-foreground">
      <div className="container mx-auto max-w-5xl">
        <Tabs defaultValue="feature-1">
          <TabsList className="flex h-auto w-full flex-col gap-2 bg-background md:flex-row">
            {features.map((feature) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className="flex w-full flex-col items-start justify-start gap-1 whitespace-normal rounded-md border p-4 text-left hover:border-primary/40 data-[state=active]:border-primary"
              >
                <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                  <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {feature.icon}
                  </span>
                  <p className="text-lg font-semibold md:text-2xl lg:text-xl">
                    {feature.title}
                  </p>
                </div>
                <p className="font-normal text-muted-foreground md:block">
                  {feature.description}
                </p>
              </TabsTrigger>
            ))}
          </TabsList>
          {features.map((feature) => (
            <TabsContent key={feature.id} value={feature.id}>
              <Image
                src={feature.image}
                alt={feature.title}
                width={800}
                height={400}
                className="aspect-video w-full rounded-md object-cover px-1"
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
