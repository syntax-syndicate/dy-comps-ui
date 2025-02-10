import { ArrowDownRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Hero78() {
  return (
    <div className="container flex items-center py-32">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div className="space-y-8">
          <Card className="bg-secondary/20">
            <CardContent className="space-y-4 p-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                New goals require new knowledge
              </h1>
              <p className="max-w-[600px] text-lg text-muted-foreground">
                We have created an e-learning platform that allows teams to
                find, share, and use the knowledge they need to achieve their
                goals.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Person using laptop"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex aspect-square items-center justify-center rounded-lg bg-primary">
              <ArrowDownRight className="size-12 text-primary-foreground" />
            </div>
          </div>
        </div>

        <div className="relative">
          {/* iPhone Mockup */}
          <div className="relative mx-auto w-[320px]">
            <div className="absolute inset-0 rounded-[3rem] bg-foreground shadow-2xl" />
            <div className="relative min-h-[640px] overflow-hidden rounded-[2.8rem] border-[8px] border-foreground bg-background">
              {/* Notch */}
              <div className="absolute inset-x-0 top-0 flex h-6 justify-center bg-foreground">
                <div className="h-full w-40 rounded-b-2xl bg-foreground" />
              </div>

              {/* App Content */}
              <div className="px-4 pt-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-2 w-8 rounded bg-muted" />
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-4 rounded bg-muted" />
                      <div className="h-2 w-4 rounded bg-muted" />
                      <div className="h-2 w-4 rounded bg-muted" />
                    </div>
                  </div>

                  <Card className="bg-primary">
                    <CardContent className="space-y-2 p-4">
                      <p className="font-medium text-primary-foreground">
                        A new approach to marketing
                      </p>
                      <div className="flex items-center gap-2 text-xs text-primary-foreground/80">
                        <span>15 min</span>
                        <span>•</span>
                        <span>8.4</span>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-2 gap-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className="relative aspect-square overflow-hidden rounded-lg bg-muted"
                      >
                        <Image
                          src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                          alt={`Team member ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between px-4 pt-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground"
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
