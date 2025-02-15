"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero59() {
  return (
    <section className="relative w-full overflow-hidden py-32">
      <Image
        src="https://images.unsplash.com/photo-1531030874896-fdef6826f2f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Mountain reflected in a lake at dusk"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/80" />
      <div className="container relative z-10 mx-auto flex h-full flex-col justify-end px-8">
        <div className="max-w-3xl space-y-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Streamline,{" "}
            <span className="text-primary">
              optimize and enhance business processes
            </span>{" "}
            with the world&apos;s most scalable AI platform.
          </h1>
          <p className="text-xl text-foreground md:text-2xl">
            AI + data, online. At any scale.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <Link href="/trial">Start your free trial</Link>
            </Button>
            <Button variant={"secondary"} size="lg" asChild>
              <Link href="/solutions">Our solutions</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
