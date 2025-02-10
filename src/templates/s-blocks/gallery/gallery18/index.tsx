"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ImageItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const imageItems: ImageItem[] = [
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
    title: "Northern Lights",
    description: "Spectacular display of the Aurora Borealis",
    image:
      "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9ydGhlcm4lMjBsaWdodHN8ZW58MHx8MHx8fDA%3D",
    category: "Nature",
  },
  {
    id: 6,
    title: "Tropical Beach",
    description: "Idyllic tropical beach with crystal clear water",
    image:
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvcGljYWwlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Nature",
  },
  {
    id: 7,
    title: "Urban Skyline",
    description: "Modern city skyline at night",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eSUyMHNreWxpbmV8ZW58MHx8MHx8fDA%3D",
    category: "Urban",
  },
  {
    id: 8,
    title: "Waterfall",
    description: "Majestic waterfall cascading down rocky cliffs",
    image:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJmYWxsfGVufDB8fDB8fHww",
    category: "Nature",
  },
  {
    id: 9,
    title: "Ancient Ruins",
    description: "Historic ruins of an ancient civilization",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25vd3klMjBtb3VudGFpbnN8ZW58MHx8MHx8fDA%3D",
    category: "Architecture",
  },
  {
    id: 10,
    title: "Vibrant Market",
    description: "Colorful local market bustling with activity",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25vd3klMjBtb3VudGFpbnN8ZW58MHx8MHx8fDA%3D",
    category: "Urban",
  },
  {
    id: 11,
    title: "Snowy Mountains",
    description: "Majestic snow-capped mountain range",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25vd3klMjBtb3VudGFpbnN8ZW58MHx8MHx8fDA%3D",
    category: "Nature",
  },
  {
    id: 12,
    title: "Historic Cathedral",
    description: "Impressive architecture of a historic cathedral",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25vd3klMjBtb3VudGFpbnN8ZW58MHx8MHx8fDA%3D",
    category: "Architecture",
  },
];

export default function Gallery18() {
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);
  const [filter, setFilter] = React.useState("");
  const [category, setCategory] = React.useState<string | null>(null);

  // Changed this to use the index from the array not the id, since the state is an index
  const filteredImages = React.useMemo(() => {
    return imageItems.filter(
      (item) =>
        (category === null || item.category === category) &&
        (item.title.toLowerCase().includes(filter.toLowerCase()) ||
          item.description.toLowerCase().includes(filter.toLowerCase())),
    );
  }, [filter, category]);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  // Changed to be null coalescing operator
  const handlePrev = () => {
    setSelectedImage((prev) => {
      if (prev == null) return 0;
      return prev > 0 ? prev - 1 : filteredImages.length - 1;
    });
  };

  const handleNext = () => {
    setSelectedImage((prev) => {
      if (prev == null) return 0;
      return prev < filteredImages.length - 1 ? prev + 1 : 0;
    });
  };

  return (
    <section className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container mx-auto md:px-6">
        <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Advanced <span className="text-primary">Gallery</span>
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore our collection of stunning images with advanced filtering
            and navigation.
          </p>
        </div>
        <div className="mb-8 flex flex-col items-center justify-between space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <div className="w-full md:w-1/3">
            <Input
              id="filter"
              placeholder="Search images..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          <div className="flex space-x-2">
            <Button
              variant={category === null ? "default" : "outline"}
              onClick={() => setCategory(null)}
            >
              All
            </Button>
            <Button
              variant={category === "Nature" ? "default" : "outline"}
              onClick={() => setCategory("Nature")}
            >
              Nature
            </Button>
            <Button
              variant={category === "Urban" ? "default" : "outline"}
              onClick={() => setCategory("Urban")}
            >
              Urban
            </Button>
            <Button
              variant={category === "Architecture" ? "default" : "outline"}
              onClick={() => setCategory("Architecture")}
            >
              Architecture
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredImages.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-[3/2] cursor-pointer overflow-hidden rounded-lg"
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
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
      </div>
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="relative flex h-full w-full max-w-4xl items-center justify-center">
            <Image
              src={filteredImages[selectedImage]?.image ?? ""}
              alt={filteredImages[selectedImage]?.title ?? ""}
              layout="fill"
              objectFit="contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 text-white">
              <h3 className="mb-2 text-xl font-semibold">
                {filteredImages[selectedImage]?.title}
              </h3>
              <p>{filteredImages[selectedImage]?.description}</p>
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
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 transform text-white"
              onClick={handlePrev}
            >
              <ChevronLeft className="size-8" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 transform text-white"
              onClick={handleNext}
            >
              <ChevronRight className="size-8" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
