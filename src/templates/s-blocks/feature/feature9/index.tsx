import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Feature9() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col items-center gap-4 text-center">
          <Image
            alt="logo"
            className="aspect-square rounded-lg object-cover object-center"
            height="150"
            src="/logo.svg"
            width="150"
          />
          <Badge variant="outline" className="text-foreground">
            Unveiling Our Latest Innovation
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
            Experience the Future of Efficiency
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Revolutionize your operations and unlock unprecedented levels of
            productivity with our cutting-edge feature.
          </p>
        </div>
        <div className="mx-auto mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Efficiency */}
          <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
            <CardContent className="flex h-full flex-col justify-between p-6">
              <div className="space-y-4">
                <Badge variant="outline" className="text-foreground">
                  Boost Efficiency
                </Badge>
                <h3 className="text-2xl font-bold text-foreground">
                  Accelerated Workflows
                </h3>
                <p className="text-muted-foreground">
                  Harness the power of intuitive design and smart automation to
                  streamline your processes and reclaim valuable time.
                </p>
              </div>
              <CardFooter className="p-0 pt-4">
                <Button className="w-full">
                  Discover How
                  <ChevronRight className="ml-2 size-4" />
                </Button>
              </CardFooter>
            </CardContent>
          </Card>

          {/* Image Centerpiece */}
          <div className="relative flex items-center justify-center sm:col-span-2 lg:col-span-1">
            <Image
              alt="Feature illustration"
              className="aspect-square rounded-lg object-cover object-center shadow-lg"
              height="400"
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              width="400"
            />
            <div className="absolute bottom-4 left-4 max-w-80 rounded-lg bg-background p-6">
              Harness the power of intuitive design and smart automation to
              streamline your processes.
            </div>
          </div>

          {/* Card 2: Integration */}
          <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
            <CardContent className="flex h-full flex-col justify-between p-6">
              <div className="space-y-4">
                <Badge variant="outline" className="text-foreground">
                  Unified Ecosystem
                </Badge>
                <h3 className="text-2xl font-bold text-foreground">
                  Boundless Connectivity
                </h3>
                <p className="text-muted-foreground">
                  Effortlessly integrate with your preferred tools and
                  platforms, creating a seamless and interconnected digital
                  environment.
                </p>
              </div>
              <CardFooter className="p-0 pt-4">
                <Button className="w-full">
                  Uncover Integrations
                  <ChevronRight className="ml-2 size-4" />
                </Button>
              </CardFooter>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
