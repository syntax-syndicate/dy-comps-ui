"use client";

import * as React from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const imageItems = [
  {
    id: 1,
    title: "Underwater Serenity",
    description: "A vibrant coral reef teeming with marine life",
    image:
      "https://images.unsplash.com/photo-1461280360983-bd93eaa5051b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXh0cmVtZSUyMHNwb3J0c3xlbnwwfHwwfHx8MA%3D%3D",
    aspectRatio: "portrait",
  },
  {
    id: 2,
    title: "Urban Skyline",
    description: "A modern cityscape at twilight",
    image:
      "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eSUyMGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    aspectRatio: "landscape",
  },
  {
    id: 3,
    title: "Culinary Delight",
    description: "An artfully plated gourmet dish",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3VsaW5hcnl8ZW58MHx8MHx8fDA%3D",
    aspectRatio: "portrait",
  },
  {
    id: 4,
    title: "Extreme Sports",
    description: "A snowboarder mid-jump on a snowy mountain",
    image:
      "https://images.unsplash.com/photo-1461280360983-bd93eaa5051b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXh0cmVtZSUyMHNwb3J0c3xlbnwwfHwwfHx8MA%3D%3D",
    aspectRatio: "landscape",
  },
  {
    id: 5,
    title: "Mountain Majesty",
    description: "A breathtaking view of snow-capped peaks",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
    aspectRatio: "landscape",
  },
];

export default function Gallery7() {
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <section className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container mx-auto md:px-6">
        <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Mixed Size <span className="text-primary">Image Gallery</span>
          </h2>
          <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore our collection of stunning images in an engaging masonry
            layout.
          </p>
        </div>
        <div className="grid auto-rows-[200px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {imageItems.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "group relative cursor-pointer overflow-hidden rounded-lg",
                item.aspectRatio === "portrait" ? "row-span-2" : "",
                index === 0 ? "md:col-span-2" : "",
              )}
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ZoomIn className="mb-4 size-12 text-white" />
                <h3 className="mb-2 text-center text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-center text-sm text-white">
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
              src={imageItems[selectedImage]?.image ?? ""}
              alt={imageItems[selectedImage]?.title ?? ""}
              layout="fill"
              objectFit="contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 text-white">
              <h3 className="mb-2 text-xl font-semibold">
                {imageItems[selectedImage]?.title}
              </h3>
              <p>{imageItems[selectedImage]?.description ?? ""}</p>
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
