import { Button } from "@/components/ui/button";
import { Sparkles, Handshake } from "lucide-react";
import Image from "next/image";

export default function Hero50() {
  return (
    <section className="py-32">
      <div className="container flex flex-col gap-7 text-center">
        <a
          href="#"
          className="group mx-auto mb-3 w-fit gap-3 rounded-full border px-5 py-2 text-sm"
        >
          <Sparkles className="inline-block size-4 text-primary" />
          <span className="mr-1 font-medium">
            Unlock your Performance Advantage!
          </span>
          <span className="text-muted-foreground">
            <span className="font-medium text-primary">Insights Bonus</span> per
            Action
          </span>
          <Handshake className="ml-1 inline-block size-4 text-primary" />
        </a>
        <h1 className="mx-auto max-w-4xl text-balance text-4xl font-bold lg:text-6xl">
          Orchestrating <span className="text-primary">Client Harmony</span> &{" "}
          <span className="text-primary">Growth Trajectories</span>
        </h1>
        <p className="mx-auto max-w-4xl text-muted-foreground lg:text-xl">
          Elevate your business with a unified client experience. Talkbase
          streamlines cross-departmental alignment, ensuring every interaction
          contributes to measurable business success and rapid growth cycles.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" className="h-11 px-8">
            Begin Your Ascent
          </Button>
          <Button variant="secondary" size="lg" className="h-11 px-8">
            Request Strategic Preview
          </Button>
        </div>
      </div>
      <div className="relative px-8">
        <div className="absolute inset-0 top-1/2 size-full bg-gradient-to-b from-muted to-transparent to-50%" />
        <div className="relative mx-auto max-w-screen-lg">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Main dashboard"
            width={1200}
            height={580}
            className="shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06) mt-20 max-h-[580px] w-full rounded-lg object-cover"
            priority
          />
          <div className="absolute inset-0 rounded-t-lg shadow-[0_0_40px_8px_hsl(var(--primary)/0.4)]" />
        </div>
      </div>
    </section>
  );
}
