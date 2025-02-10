"use client";

import * as React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const galleryItems = [
  {
    id: 1,
    title: "Serene Landscapes",
    description: "Capturing the beauty of nature in its purest form.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    title: "Urban Exploration",
    description: "Discovering hidden gems in the heart of the city.",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXJiYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "Abstract Visions",
    description: "Exploring the boundaries of form and color.",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    title: "Portraits of Life",
    description: "Capturing the essence of humanity in a single frame.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    title: "Wildlife Wonders",
    description: "Showcasing the diversity and beauty of the animal kingdom.",
    image:
      "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2lsZGxpZmV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    title: "Architectural Marvels",
    description: "Exploring the intersection of form and function in design.",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww",
  },
];

export default function Gallery8() {
  return (
    <section className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Tall Masonry <span className="text-primary">Gallery</span>
          </h2>
          <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore our collection of stunning visuals in this interactive tall
            masonry layout.
          </p>
        </div>
        <div className="mx-auto max-w-5xl py-12">
          <div className="grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={cn(
                  "relative overflow-hidden shadow-md transition-shadow hover:shadow-lg",
                  index % 3 === 0 || index === 2 ? "row-span-2" : "",
                )}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="h-full w-full p-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-end bg-black bg-opacity-40 p-4 opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <h3 className="text-lg font-semibold text-white">
                          {item.title}
                        </h3>
                      </div>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[625px]">
                    <DialogHeader>
                      <DialogTitle>{item.title}</DialogTitle>
                      <DialogDescription>{item.description}</DialogDescription>
                    </DialogHeader>
                    <div className="relative mt-4 aspect-[4/5]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
