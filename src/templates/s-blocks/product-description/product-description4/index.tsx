"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

export default function ProductSpecs() {
  return (
    <div className="container bg-background py-16 text-foreground">
      {/* Hero Section */}
      <div className="relative mb-8 h-[50vh] w-full lg:h-[70vh]">
        <Image
          src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
          alt="iMac Hero"
          fill
          className="rounded-lg object-cover"
          priority
        />

        <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8 lg:p-12">
          <div className="mx-auto w-full max-w-4xl">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              iMac 24" with M1
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
              Power, beauty, and simplicity all in one incredible desktop
              computer
            </p>
          </div>
        </div>
      </div>

      {/* Specs Content */}
      <div className="p-4">
        <Tabs defaultValue="description" className="mx-auto max-w-4xl">
          <TabsList className="mb-4">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="questions">Questions</TabsTrigger>
            <TabsTrigger value="highlights">Highlights</TabsTrigger>
          </TabsList>

          <TabsContent value="description">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  The iMac "M1" 8-Core CPU/8-Core GPU/4 USB-C Shaped Ports (2024
                  model) features a 5-nm Apple M1 processor with 8 cores (4
                  performance cores and 4 efficiency cores), an 8-core GPU, a
                  16-core Neural Engine, 8 GB of onboard RAM, and a 1 TB onboard
                  SSD.
                </p>
                <p className="text-muted-foreground">
                  This all is housed in a wafer thin aluminum case with flat
                  edges that includes a 23.5/4K/2560x2520, 218 PPI, LED-backlit,
                  "True Tone" widescreen "Retina 4.5K" display mounted on a
                  svelte aluminum stand. This specific model is offered in the a
                  two-tone blue color. It also has an integrated 1080p FaceTime
                  HD camera, a "studio-quality three-mic array" and a
                  "high-fidelity six-speaker system" that supports Spatial Audio
                  with Dolby Atmos.
                </p>
              </div>

              <div className="grid gap-8">
                <SpecSection
                  title="Display"
                  specs={[
                    { label: "Screen Type", value: "light" },
                    { label: "Diagonal", value: "24 inches" },
                    { label: "Resolution", value: "4480x2520" },
                    { label: "Format", value: "4k" },
                  ]}
                />

                <SpecSection
                  title="Processor"
                  specs={[
                    { label: "Processor Type", value: "Apple M3" },
                    { label: "Model", value: "M3" },
                    { label: "Physical cores", value: "8" },
                    { label: "Virtual Cores", value: "16" },
                    { label: "Technology", value: "5nm" },
                  ]}
                />

                <SpecSection
                  title="RAM memory"
                  specs={[
                    { label: "Memory", value: "8GB" },
                    { label: "Maximum memory", value: "64GB" },
                  ]}
                />

                <SpecSection
                  title="Storage"
                  specs={[{ label: "Capacity", value: "512GB" }]}
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">
                  Brilliant 4.5K Retina display:
                </h3>
                <p className="text-muted-foreground">
                  See the big picture and all the details—See it all in sharp,
                  glorious detail on the immersive 24‑inch 4.5K Retina display.
                  the P3 wide color gamut brings what you're watching to life in
                  over a billion colors. Images shine with a brilliant 500 nits
                  of brightness.
                </p>
                <p className="text-muted-foreground">
                  A larger sensor that captures more light. And the advanced
                  image signal processor (ISP) of M1 greatly improves image
                  quality. So from collaborating with coworkers to catching up
                  with friends and family, you'll always look your best. And
                  True Tone technology automatically adjusts the color
                  temperature of your display to the ambient light of your
                  environment, for a more natural viewing experience.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews">
            <Card>
              <CardContent className="p-4">
                <p className="text-muted-foreground">Reviews coming soon.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="questions">
            <Card>
              <CardContent className="p-4">
                <p className="text-muted-foreground">
                  Questions and answers will appear here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="highlights">
            <Card>
              <CardContent className="p-4">
                <p className="text-muted-foreground">
                  Product highlights will be displayed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

interface SpecSectionProps {
  title: string;
  specs: {
    label: string;
    value: string;
  }[];
}

function SpecSection({ title, specs }: SpecSectionProps) {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">{title}</h2>
      <Card>
        <CardContent className="p-0">
          <div className="divide-y divide-border">
            {specs.map((spec, index) => (
              <div
                key={index}
                className="grid grid-cols-2 px-4 py-3 hover:bg-muted/50"
              >
                <span className="text-muted-foreground">{spec.label}</span>
                <span className="text-foreground">{spec.value}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
