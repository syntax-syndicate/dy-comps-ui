"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, Zap, Brain, Rocket, Sparkles, X } from "lucide-react";

function PulseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

export default function HeroAIPoweredProductivity() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="bg-gradient-to-b from-background to-secondary/20 py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <a
            href="#"
            className="group mb-6 inline-flex items-center justify-center gap-2 rounded-full border bg-muted px-3 py-2 text-sm font-medium transition-colors hover:border-primary hover:bg-muted/80"
          >
            <Badge
              variant="secondary"
              className="bg-primary text-primary-foreground"
            >
              BETA
            </Badge>
            <span>Experience the Future of Work</span>
            <Sparkles className="size-4 transition-transform group-hover:rotate-12" />
          </a>
          <h1 className="mx-auto mb-6 max-w-5xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Supercharge Your Workflow with AI
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground">
            Our AI-powered platform empowers your team to
            <FeatureIcon icon={Brain} text="Think Smarter," />
            <FeatureIcon icon={Zap} text="Work Faster," />
            and
            <FeatureIcon icon={Rocket} text="Achieve More." />
            Start your journey into the future of productivity today.
          </p>
          <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Start Free Trial
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg">
                  Watch Demo
                  <PulseIcon className="ml-2 size-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px]">
                <div className="relative aspect-video">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
                    title="Product Demo Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <p className="text-sm text-muted-foreground">
            No credit card required. 14-day free trial for all premium features.
          </p>
        </div>
      </div>
    </section>
  );
}

function FeatureIcon({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) {
  return (
    <span className="mx-1 inline-flex items-center font-semibold text-primary">
      <Icon className="mr-1 size-5" />
      {text}
    </span>
  );
}
