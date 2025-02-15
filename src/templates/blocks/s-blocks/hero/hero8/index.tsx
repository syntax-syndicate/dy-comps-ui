import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero8() {
  return (
    <section className="py-32">
      <div className="overflow-hidden border-b border-muted">
        <div className="container">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <div className="z-10 items-center text-center">
              <Image
                src="/logo.svg"
                alt="logo"
                width={100}
                height={100}
                className="mx-auto mb-6 aspect-square object-cover dark:invert"
              />
              <h1 className="mb-10 text-balance text-5xl font-bold tracking-tight lg:text-8xl">
                Craft your next{" "}
                <span className="text-primary">AI innovation</span> using Blocks
              </h1>
              <p className="mx-auto max-w-screen-md text-muted-foreground lg:text-2xl">
                In the landscape of 2024, integrating AI into your startup is
                more than a trend—it&apos;s a necessity. Leverage the power of
                AI to{" "}
                <span className="font-semibold text-primary">
                  amplify your impact and skyrocket your growth!
                </span>
              </p>
              <div className="mt-16 flex w-full flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" className="group">
                  Launch your project
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="group">
                  Explore features
                  <Sparkles className="ml-2 size-5 transition-transform group-hover:rotate-12" />
                </Button>
              </div>
            </div>
          </div>

          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="placeholder"
            height={800}
            width={1200}
            className="mx-auto mt-24 max-h-[700px] w-full max-w-6xl rounded-t-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
