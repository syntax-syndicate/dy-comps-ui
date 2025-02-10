"use client";

import * as React from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const imageItems = [
  {
    id: 1,
    title: "Mountain Lake",
    description: "Serene mountain lake reflecting the surrounding peaks",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
    category: "Nature",
  },
  {
    id: 2,
    title: "Desert Sunset",
    description: "Vibrant sunset over sand dunes in the desert",
    image:
      "https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8ZGVzZXJ0fGVufDB8fDB8fHww",
    category: "Nature",
  },
  {
    id: 3,
    title: "Autumn Forest",
    description: "Colorful autumn foliage in a dense forest",
    image:
      "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF1dHVtbnxlbnwwfHwwfHx8MA%3D%3D",
    category: "Nature",
  },
  {
    id: 4,
    title: "Coastal Cliffs",
    description: "Dramatic coastal cliffs overlooking the ocean",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29hc3RhbCUyMGNsaWZmc3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Nature",
  },
  {
    id: 5,
    title: "Urban Skyline",
    description: "Modern city skyline at night",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eSUyMHNreWxpbmV8ZW58MHx8MHx8fDA%3D",
    category: "Urban",
  },
  {
    id: 6,
    title: "City Street",
    description: "Busy city street with pedestrians and traffic",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eSUyMHN0cmVldHxlbnwwfHwwfHx8MA%3D",
    category: "Urban",
  },
  {
    id: 7,
    title: "Modern Skyscraper",
    description: "Sleek and modern skyscraper reaching into the sky",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2t5c2NyYXBlcnxlbnwwfHwwfHx8MA%3D",
    category: "Architecture",
  },
  {
    id: 8,
    title: "Tropical Beach",
    description: "Idyllic tropical beach with crystal clear water",
    image:
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvcGljYWwlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Nature",
  },
  {
    id: 9,
    title: "Urban Park",
    description: "Lush green park in the middle of a bustling city",
    image:
      "https://images.unsplash.com/photo-1496328289142-9a47ef5b544b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXJiYW4lMjBwYXJrfGVufDB8fDB8fHww",
    category: "Urban",
  },
  {
    id: 10,
    title: "Mountain Range",
    description: "Majestic mountain range with snow-capped peaks",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjByYW5nZXxlbnwwfHwwfHx8MA%3D",
    category: "Nature",
  },
  {
    id: 11,
    title: "Modern Architecture",
    description: "Futuristic building with unique architectural design",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww",
    category: "Architecture",
  },
  {
    id: 12,
    title: "City Night Life",
    description: "Vibrant city street illuminated at night",
    image:
      "https://images.unsplash.com/photo-1519608425089-7f3bfa6f6bb8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eSUyMG5pZ2h0fGVufDB8fDB8fHww",
    category: "Urban",
  },
  {
    id: 13,
    title: "Waterfall",
    description: "Powerful waterfall cascading over rocky cliffs",
    image:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJmYWxsfGVufDB8fDB8fHww",
    category: "Nature",
  },
  {
    id: 14,
    title: "Bridge Architecture",
    description: "Impressive bridge showcasing engineering marvel",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJpZGdlfGVufDB8fDB8fHww",
    category: "Architecture",
  },
  {
    id: 15,
    title: "Urban Transportation",
    description: "Modern public transportation in a busy city",
    image:
      "https://images.unsplash.com/photo-1519395612667-3b754d7b9086?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXJiYW4lMjB0cmFuc3BvcnRhdGlvbnxlbnwwfHwwfHx8MA%3D",
    category: "Urban",
  },
  {
    id: 16,
    title: "Glass Skyscraper",
    description: "Towering glass skyscraper reflecting the sky",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2xhc3MlMjBza3lzY3JhcGVyfGVufDB8fDB8fHww",
    category: "Architecture",
  },
];

export default function Gallery19() {
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const categories = ["All", "Nature", "Urban", "Architecture"];

  return (
    <section className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container mx-auto md:px-6">
        <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            4x4 Tab <span className="text-primary">Gallery</span>
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore our collection of stunning images categorized by tabs in a
            4x4 grid layout.
          </p>
        </div>
        <Tabs defaultValue="All" className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-4">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {imageItems
                  .filter(
                    (item) => category === "All" || item.category === category,
                  )
                  .map((item, index) => (
                    <div
                      key={item.id}
                      className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg"
                      onClick={() => handleImageClick(index)}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 opacity-0 transition-opacity duration-300 group-hover:bg-opacity-50 group-hover:opacity-100">
                        <ZoomIn className="mb-2 size-10 text-white" />
                        <h3 className="mb-2 text-center text-xl font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="px-4 text-center text-sm text-white">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="relative flex h-full w-full max-w-4xl items-center justify-center">
            <Image
              src={imageItems[selectedImage]?.image ?? ""}
              alt={imageItems[selectedImage]?.title ?? ""}
              layout="fill"
              objectFit="contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 text-white">
              <h3 className="mb-2 text-xl font-semibold">
                {imageItems[selectedImage]?.title}
              </h3>
              <p>{imageItems[selectedImage]?.description}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 text-white"
              onClick={handleClose}
            >
              <X className="size-6" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
