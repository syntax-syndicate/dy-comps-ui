import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Award8() {
  return (
    <section className="container mx-auto py-16">
      <div className="rounded-lg border bg-card p-8 shadow-sm">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">
              Our certifications say it all.
            </h2>
            <p className="text-muted-foreground">
              In non libero bibendum odio pellentesque ullamcorper. Aenean
              condimentum, dolor commodo pulvinar bibendum.
            </p>
            <Button variant="default" className="group">
              Get in touch
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-lg bg-accent p-4">
                <div className="h-full w-full bg-[url('https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg')] bg-contain bg-center bg-no-repeat" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
