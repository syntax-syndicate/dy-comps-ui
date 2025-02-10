"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface GalleryImage {
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&h=600&fit=crop&q=80",
    alt: "Starry night over a mountain lake",
  },
  {
    src: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&h=600&fit=crop&q=80",
    alt: "Northern lights in a snowy forest",
  },
  {
    src: "https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?w=600&h=600&fit=crop&q=80",
    alt: "Milky Way over mountain peaks",
  },
  {
    src: "https://images.unsplash.com/photo-1436891620584-47fd0e565afb?w=600&h=600&fit=crop&q=80",
    alt: "Starry sky reflected in still water",
  },
  {
    src: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&h=600&fit=crop&q=80",
    alt: "Aurora borealis over snowy landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=600&h=600&fit=crop&q=80",
    alt: "Night sky full of stars over mountains",
  },
];

export default function SymmetricalGridGallery() {
  return (
    <div className="container mx-auto bg-background px-4 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Come Explore <span className="text-primary">Celestial Nights</span>
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {galleryImages.map((image, index) => (
          <GalleryItem key={index} image={image} />
        ))}
      </div>
    </div>
  );
}

function GalleryItem({ image }: { image: GalleryImage }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 hover:opacity-100">
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
