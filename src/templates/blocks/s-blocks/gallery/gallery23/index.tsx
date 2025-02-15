"use client";

import * as React from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&q=80",
    alt: "Scenic mountain landscape with a lake",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=600&fit=crop&q=80",
    alt: "Forest with sunlight streaming through trees",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop&q=80",
    alt: "Autumn forest with colorful leaves",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop&q=80",
    alt: "Sunset over mountains and water",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&q=80",
    alt: "Lush green forest with a small stream",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop&q=80",
    alt: "Mountain lake with clear reflections",
    width: 800,
    height: 600,
  },
];

export default function Gallery23() {
  return (
    <div className="container mx-auto py-16">
      <h2 className="mb-8 text-3xl font-bold">
        Come Explore <span className="text-primary">Nature&apos;s Gallery</span>
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {galleryImages.map((image, index) => (
          <GalleryItem key={index} image={image} index={index} />
        ))}
      </div>
    </div>
  );
}

function GalleryItem({ image, index }: { image: GalleryImage; index: number }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={cn(
            "group relative cursor-pointer overflow-hidden rounded-lg transition-all hover:shadow-xl",
            index === 3 && "md:col-span-2 md:row-span-2",
          )}
        >
          <div className="aspect-square md:aspect-auto md:h-full">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/60 to-background/0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-sm font-medium text-white">{image.alt}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="h-full w-full object-contain"
        />
      </DialogContent>
    </Dialog>
  );
}
