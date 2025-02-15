import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";

export default function Hero54() {
  return (
    <div className="w-full bg-background">
      <div className="container py-12 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl xl:text-6xl/none">
                A hackable <span className="text-primary">text editor</span> for
                the 21st Century
              </h1>
              <p className="text-lg/relaxed text-muted-foreground">
                Here at DY-Comps we focus on markets where technology, innovation,
                and capital can unlock long-term value.
              </p>
            </div>

            {/* Download Section */}
            <div className="rounded-lg bg-muted/50 p-6">
              <div className="mb-6 flex flex-wrap items-center gap-4">
                <div>
                  <div className="text-lg font-semibold">1.60.0</div>
                  <Link
                    href="#"
                    className="text-sm text-primary hover:text-primary/90"
                  >
                    Release notes
                  </Link>
                </div>
                <div className="text-sm text-muted-foreground">
                  For macOS 10.10 or later
                </div>
                <div className="text-sm text-muted-foreground">
                  For Windows 7 or later
                </div>
              </div>
              <Button size="lg" className="w-full sm:w-auto">
                <Download className="mr-2 size-4" />
                Download
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              By using DY-Comps, you agree to its{" "}
              <Link href="#" className="text-primary hover:text-primary/90">
                license
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-primary hover:text-primary/90">
                privacy statement
              </Link>
              .
            </p>
          </div>

          {/* Right Column - Editor Preview */}
          <div className="relative mx-auto w-full">
            <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted shadow-2xl">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Text editor interface preview"
                className="size-full object-cover"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>

        {/* Logo Cloud */}
        <div className="mt-16 md:mt-24">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
            {["Airbnb", "Google", "Nike", "Uber", "Stripe", "Mashable"].map(
              (brand) => (
                <div
                  key={brand}
                  className="flex h-12 items-center justify-center grayscale transition hover:grayscale-0"
                >
                  <span className="text-xl font-semibold text-muted-foreground">
                    {brand}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
