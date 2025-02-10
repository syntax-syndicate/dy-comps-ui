"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Rocket, Play } from "lucide-react";
import Image from "next/image";

export default function Feature1() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
              <Rocket className="size-6 text-primary" />
            </span>
            <h1 className="my-6 text-pretty text-3xl font-bold lg:text-4xl">
              Welcome to Our Intergalactic Website
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg">
              Greetings, Earthlings! We come in peace... and with a stellar
              website. Prepare for launch into a world of digital wonders!
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto"
                    size="lg"
                  >
                    <Play className="mr-2 size-4" />
                    Watch Space Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[800px]">
                  <div className="relative aspect-video">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full rounded-md"
                    />
                  </div>
                </DialogContent>
              </Dialog>
              <Button className="w-full sm:w-auto" size="lg">
                Launch Experience
              </Button>
            </div>
          </div>
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Futuristic spaceship orbiting a planet"
            className="max-h-96 w-full rounded-md object-cover"
            height={800}
            width={800}
          />
        </div>
      </div>
    </section>
  );
}
