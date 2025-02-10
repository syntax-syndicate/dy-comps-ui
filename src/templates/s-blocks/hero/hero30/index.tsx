"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero30() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 overflow-hidden bg-muted">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 656"
          className="min-h-full min-w-full"
        >
          <defs>
            <filter id="blur1" x="-20%" y="-20%" width="140%" height="140%">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="180"
                result="effect1_foregroundBlur"
              />
            </filter>
            <pattern
              id="innerGrid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="hsl(var(--background))"
                strokeWidth="0.5"
                strokeOpacity="0.6"
              />
            </pattern>
            <pattern
              id="grid"
              width="160"
              height="160"
              patternUnits="userSpaceOnUse"
            >
              <rect width="160" height="160" fill="url(#innerGrid)" />
              <path
                d="M 70 80 H 90 M 80 70 V 90"
                fill="none"
                stroke="hsl(var(--background))"
                strokeWidth="1"
                strokeOpacity="0.3"
              />
            </pattern>
          </defs>
          <g filter="url(#blur1)">
            <rect width="1400" height="656" fill="hsl(var(--muted))" />
            <rect
              x="0"
              y="0"
              width="1400"
              height="656"
              fill="hsl(var(--primary)/0.1)"
            />
            <g transform="translate(1400, 656)">
              <path
                d="M-623.2 0C-611 -116.2 -598.9 -232.4 -539.7 -311.6C-480.5 -390.8 -374.3 -433.1 -276.5 -478.9C-178.7 -524.7 -89.4 -573.9 0 -623.2L0 0Z"
                fill="hsl(var(--background))"
              />
            </g>
            <g transform="translate(0, 0)">
              <path
                d="M623.2 0C606.6 108.6 590.1 217.1 539.7 311.6C489.3 406.1 405.1 486.5 309.5 536.1C213.9 585.7 107 604.4 0 623.2L0 0Z"
                fill="hsl(var(--background))"
              />
            </g>
          </g>
          <rect width="1400" height="900" fill="url(#grid)" />
        </svg>
      </div>
      <div className="container relative">
        <div className="grid items-center gap-8 lg:grid-cols-1">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-6 flex items-center justify-center rounded-full bg-primary/10 p-3">
              <Image src="/logo.svg" height={100} width={100} alt="logo" />
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-none tracking-tighter md:text-[7vw] lg:text-8xl">
              With our tools, you&apos;ll work{" "}
              <span className="text-primary">smarter, not harder.</span>
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              Unlock the potential of your data with our cutting-edge AI
              platform. Transform complex information into actionable
              strategies, boosting productivity and driving innovation across
              your organization.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Explore Features
              </Button>
              <Button size="lg" className="w-full sm:w-auto">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
