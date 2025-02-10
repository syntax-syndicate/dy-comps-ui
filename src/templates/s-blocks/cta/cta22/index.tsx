import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction22() {
  return (
    <section className="w-full bg-accent py-16">
      <div className="container flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Start building knowledgeable AI now
          </h2>
          <p className="text-lg text-accent-foreground/80 md:text-xl">
            Create your first index for free, then upgrade and{" "}
            <Link
              href="/pricing"
              className="underline underline-offset-4 hover:text-accent-foreground"
            >
              pay as you go
            </Link>{" "}
            when you&apos;re ready to scale, or{" "}
            <Link
              href="/sales"
              className="underline underline-offset-4 hover:text-accent-foreground"
            >
              talk to sales
            </Link>
            .
          </p>
        </div>
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
}
