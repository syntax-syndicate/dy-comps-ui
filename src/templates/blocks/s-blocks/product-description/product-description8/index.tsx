"use client";

import Image from "next/image";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const features = [
  {
    title: "Brilliant 4.5K Retina display",
    description:
      "See it all in sharp, glorious detail on the immersive 24-inch 4.5K Retina display. The P3 wide color gamut brings what you're watching to life in over a billion colors. Images shine with a brilliant 500 nits of brightness.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    title: "M1 chip. Power to the max.",
    description:
      "The Apple M1 chip delivers incredible performance with an 8-core CPU and 8-core GPU. It's not just fast — it's the most powerful chip Apple has ever made for a Mac.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    title: "1080p FaceTime HD camera",
    description:
      "A larger sensor that captures more light. And the advanced image signal processor (ISP) of M1 greatly improves image quality. So from collaborating with coworkers to catching up with friends and family, you'll always look your best.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    title: "Studio-quality mics",
    description:
      "The studio-quality three-mic array is designed to reduce feedback, so conversations flow more naturally and you interrupt each other less. And beamforming technology helps the mics ignore background noise.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function ProductDescription() {
  const [currentFeature, setCurrentFeature] = useState(0);

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentFeature((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section className="bg-background py-8 text-foreground md:py-16">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">iMac M1 (2024)</h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Power and beauty, redefined. Experience the next generation of
            computing with the iMac M1.
          </p>
        </div>

        <div className="mb-16">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={
                features[currentFeature]?.image ||
                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              }
              alt={features[currentFeature]?.title ?? ""}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <Button variant="outline" size="icon" onClick={prevFeature}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextFeature}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-2xl font-semibold">
              {features[currentFeature]?.title}
            </h3>
            <p className="mt-2 text-muted-foreground">
              {features[currentFeature]?.description}
            </p>
          </div>
        </div>

        <Card className="mb-16">
          <CardContent className="p-6">
            <h2 className="mb-4 text-2xl font-semibold">Overview</h2>
            <div className="space-y-4">
              <p>
                The iMac &quot;M1&quot; 8-Core CPU/8-Core GPU/4 USB-C Shaped
                Ports (2024) model features a 5-nm Apple M1 processor with 8
                cores (4 performance cores and 4 efficiency cores), an 8-core
                GPU, a 16-core Neural Engine, 8 GB of onboard RAM, and a 1 TB
                onboard SSD.
              </p>
              <p>
                This all is housed in a wafer thin aluminum case with flat edges
                that includes a 23.5&quot; 4480x2520, 218 PPI, LED-backlit,
                &quot;True&#13; Tone&quot; widescreen &quot;Retina 4.5K&quot;
                display mounted on a svelte&#13; aluminum stand. This specific
                model is offered in the a two-tone Blue color.
              </p>
              <p>
                Connectivity includes two Thunderbolt / USB 4 ports and two USB
                3 ports (all with a USB-C connector), a 3.5 mm headphone jack
                conveniently mounted on the left edge of the display, Wi-Fi 6
                (802.11ax), and Bluetooth 5.0.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-16">
          <CardContent className="p-6">
            <h2 className="mb-4 text-2xl font-semibold">Key Specifications</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold">Display</h4>
                <p className="text-sm text-muted-foreground">
                  24-inch 4.5K Retina display, 4480x2520 resolution at 218
                  pixels per inch with support for 1 billion colours, 500 nits
                  brightness, Wide colour (P3), True Tone technology
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Processor</h4>
                <p className="text-sm text-muted-foreground">
                  Apple M1 chip, 8-core CPU with 4 performance cores and 4
                  efficiency cores, 7-core GPU
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Camera</h4>
                <p className="text-sm text-muted-foreground">
                  1080p FaceTime HD camera with M1 image signal processor
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Wireless</h4>
                <p className="text-sm text-muted-foreground">
                  Wi‑Fi 6 (802.11ax), Bluetooth 5.0 wireless technology
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Size and Weight</h4>
                <p className="text-sm text-muted-foreground">
                  Height: 46.1 cm (18.1 inches)
                  <br />
                  Width: 54.7 cm (21.5 inches)
                  <br />
                  Depth: 14.7 cm (5.8 inches)
                  <br />
                  Weight: 4.46 kg (9.83 pounds)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-16">
          <CardContent className="p-6">
            <h2 className="mb-4 text-2xl font-semibold">
              What&apos;s in the Box
            </h2>
            <ul className="list-inside list-disc space-y-2">
              <li>iMac</li>
              <li>Magic Keyboard</li>
              <li>Magic Mouse</li>
              <li>143W power adapter</li>
              <li>Power lead (2m)</li>
              <li>USB-C to Lightning Cable</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-2xl font-semibold">Technical Details</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Specification</TableHead>
                  <TableHead>Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Display</TableCell>
                  <TableCell>
                    24-inch 4.5K Retina display, 4480x2520 resolution at 218
                    pixels per inch, 500 nits brightness, Wide colour (P3), True
                    Tone technology
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Processor</TableCell>
                  <TableCell>
                    Apple M1 chip, 8-core CPU with 4 performance cores and 4
                    efficiency cores, 8-core GPU, 16-core Neural Engine
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Memory</TableCell>
                  <TableCell>8 GB unified memory</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Storage</TableCell>
                  <TableCell>1 TB SSD</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Camera</TableCell>
                  <TableCell>
                    1080p FaceTime HD camera with M1 image signal processor
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Audio</TableCell>
                  <TableCell>
                    High-fidelity six-speaker system with force-cancelling
                    woofers, Wide stereo sound, Support for spatial audio when
                    playing music or video with Dolby Atmos, Studio-quality
                    three-mic array with high signal-to-noise ratio and
                    directional beamforming
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Connections</TableCell>
                  <TableCell>
                    Two Thunderbolt / USB 4 ports, Two USB 3 ports, 3.5 mm
                    headphone jack, Gigabit Ethernet
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Wireless</TableCell>
                  <TableCell>Wi-Fi 6 (802.11ax), Bluetooth 5.0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Size</TableCell>
                  <TableCell>
                    Height: 46.1 cm (18.1 inches), Width: 54.7 cm (21.5 inches),
                    Depth: 14.7 cm (5.8 inches)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Weight</TableCell>
                  <TableCell>4.46 kg (9.83 pounds)</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
