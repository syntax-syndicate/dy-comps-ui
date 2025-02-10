import { Download, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero5() {
  return (
    <section className="container overflow-hidden py-32">
      <div className="">
        <div className="flex flex-col items-center justify-between gap-20 lg:flex-row">
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <h1 className="text-pretty text-4xl font-bold lg:max-w-md lg:text-7xl">
              Bold Features demand{" "}
              <span className="text-primary">attention.</span>
            </h1>
            <p className="max-w-xl text-xl font-medium text-muted-foreground lg:text-2xl">
              Shouting is sure to get you noticed.
            </p>
            <div className="flex w-full flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/download">
                  <Download className="mr-2 size-5" />
                  Primary Button
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
              >
                <Link href="/gallery">
                  <ImageIcon className="mr-2 size-5" />
                  Secondary Button
                </Link>
              </Button>
            </div>
          </div>
          <div className="w-full rounded-lg bg-accent p-6">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="placeholder hero"
              width={480}
              height={480}
              className="mx-auto aspect-square w-[40vw] rounded-md object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
