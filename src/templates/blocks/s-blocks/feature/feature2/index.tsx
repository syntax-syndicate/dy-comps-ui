"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Zap, Play } from "lucide-react";
import Image from "next/image";

export default function Feature2() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="py-24">
      <div className="container mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Astronaut floating in space with a laptop"
            className="max-h-96 w-full rounded-md object-cover"
            height={600}
            width={800}
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
              <Zap className="size-6 text-primary" />
            </span>
            <h2 className="mb-4 mt-6 text-3xl font-bold lg:text-4xl">
              Electrify Your Space Adventure
            </h2>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg">
              Buckle up, space cadets! Our website is charged with more energy
              than a supernova. We&apos;ve harnessed the power of a thousand
              quasars to bring you a user experience that&apos;s out of this
              world!
            </p>
            <div className="flex w-full flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Play className="mr-2 size-4" />
                    Watch Cosmic Demo
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
              <Button className="w-full sm:w-auto">
                Initiate Launch Sequence
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
