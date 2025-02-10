"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface GalleryImage {
  src: string;
  alt: string;
  featured?: boolean;
}

const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=800&fit=crop&q=80",
    alt: "Misty mountains at dawn",
    featured: true,
  },
  {
    src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&h=400&fit=crop&q=80",
    alt: "Sunlight streaming through a dense forest",
  },
  {
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=400&fit=crop&q=80",
    alt: "Autumn road through a colorful forest",
  },
  {
    src: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400&h=400&fit=crop&q=80",
    alt: "Snowy mountain peaks under a clear blue sky",
  },
  {
    src: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=400&h=400&fit=crop&q=80",
    alt: "Green hills under a dramatic cloudy sky",
  },
  {
    src: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=400&h=400&fit=crop&q=80",
    alt: "Reflection of mountains in a crystal clear lake",
  },
  {
    src: "https://images.unsplash.com/photo-1439853949127-fa647821eba0?w=400&h=400&fit=crop&q=80",
    alt: "Powerful waterfall cascading down rocky cliffs",
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=400&fit=crop&q=80",
    alt: "Sunset over a calm lake with mountains in the background",
  },
  {
    src: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=400&h=400&fit=crop&q=80",
    alt: "Aerial view of a colorful autumn forest",
  },
];

export default function AsymmetricalSquareGallery() {
  return (
    <div className="container mx-auto bg-background px-4 py-16">
      <h2 className="mb-12 text-center text-3xl font-bold">
        Nature&apos;s <span className="text-primary">Asymmetry</span>
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <GalleryItem key={index} image={image} index={index} />
        ))}
      </div>
    </div>
  );
}

function GalleryItem({ image }: { image: GalleryImage; index: number }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          className={`relative cursor-pointer overflow-hidden ${
            image.featured ? "col-span-2 row-span-2" : ""
          }`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative aspect-square h-full w-full overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/60 to-transparent p-4 opacity-0 transition-opacity duration-300 hover:opacity-100">
            <p className="text-sm font-medium text-white">{image.alt}</p>
          </div>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="max-w-3xl bg-background/95 backdrop-blur-sm">
        <div className="relative aspect-square w-full">
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
        <p className="mt-2 text-center text-sm text-primary">{image.alt}</p>
      </DialogContent>
    </Dialog>
  );
}
