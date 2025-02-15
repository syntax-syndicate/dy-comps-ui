"use client";

import Image from "next/image";
import { Palette, Layers, Box, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const components = [
  { value: "20+", label: "UI Components" },
  { value: "5", label: "Color Schemes" },
  { value: "100%", label: "Customizable" },
  { value: "A11Y", label: "Accessibility" },
];

export default function ComponentShowcase() {
  return (
    <section className="bg-background py-12 text-foreground sm:py-16 md:py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3 lg:items-center lg:gap-12">
          <div className="lg:col-span-2">
            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              {components.map((component, index) => (
                <Card
                  key={index}
                  className="flex flex-col justify-between border p-4 transition-colors hover:border-primary sm:p-6"
                >
                  <div className="mb-2 text-3xl font-bold text-foreground sm:text-4xl">
                    {component.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {component.label}
                  </div>
                </Card>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a href="#" className="group relative overflow-hidden">
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="Light Theme"
                  width={400}
                  height={300}
                  className="h-48 w-full rounded-lg object-cover sm:h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent">
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <h3 className="mb-1 text-lg font-semibold text-foreground sm:mb-2 sm:text-xl">
                        Light Theme
                      </h3>
                      <p className="text-xs text-muted-foreground sm:text-sm">
                        Clean and crisp interface
                      </p>
                    </div>
                    <Palette className="size-5 text-primary transition-transform group-hover:translate-x-1 sm:h-6 sm:w-6" />
                  </div>
                </div>
              </a>
              <a href="#" className="group relative overflow-hidden">
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="Dark Theme"
                  width={400}
                  height={300}
                  className="h-48 w-full rounded-lg object-cover sm:h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent">
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <h3 className="mb-1 text-lg font-semibold text-foreground sm:mb-2 sm:text-xl">
                        Dark Theme
                      </h3>
                      <p className="text-xs text-muted-foreground sm:text-sm">
                        Sleek and modern aesthetics
                      </p>
                    </div>
                    <Layers className="size-5 text-primary transition-transform group-hover:translate-x-1 sm:h-6 sm:w-6" />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="mt-8 flex h-full flex-col rounded-lg border border-primary/10 bg-muted p-4 text-left sm:p-6 lg:mt-0">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Themed UI Library
              </h2>
              <p className="text-sm text-muted-foreground sm:text-base">
                Elevate your web applications with our beautifully crafted,
                fully customizable UI components. Built on top of shadcn/ui, our
                library offers a perfect blend of aesthetics and functionality.
              </p>
              <p className="text-sm text-muted-foreground sm:text-base">
                Enjoy seamless integration, responsive designs, and
                accessibility out of the box. Our components are designed to
                adapt to your brand&apos;s unique style while maintaining
                consistency across your application.
              </p>
              <p className="text-sm text-muted-foreground sm:text-base">
                With support for both light and dark modes, and easy theming
                options, you can create stunning interfaces that stand out.
              </p>
            </div>

            <div className="mt-auto flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                variant="default"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
              >
                <Box className="size-4" />
                Components
              </Button>
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground sm:w-auto"
              >
                <Sparkles className="size-4" />
                Theme Creator
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
