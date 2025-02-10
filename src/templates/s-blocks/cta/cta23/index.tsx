"use client";

import { useState } from "react";
import { Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function CallToAction23() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="bg-background px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-6 text-left">
          <h1 className="text-4xl font-bold md:text-5xl">
            Let&apos;s find more that brings us together.
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            DY-Comps helps you connect with friends, family and communities of
            people who share your interests. Connecting with your friends and
            family as well as discovering new ones is easy with features like
            Groups, Watch and Marketplace.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get started
            </Button>
            <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="lg"
                  className="border text-primary hover:bg-accent hover:text-accent-foreground"
                >
                  <Video className="mr-2 size-4" />
                  View more
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px]">
                <DialogHeader>
                  <DialogTitle>Discover DY-Comps</DialogTitle>
                </DialogHeader>
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
                    title="DY-Comps Introduction"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
