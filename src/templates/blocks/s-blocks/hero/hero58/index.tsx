"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, Zap, BarChart } from "lucide-react";

export default function Hero58() {
  return (
    <section id="hero" className="relative overflow-hidden bg-muted/95">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-background"></div>
      <Image
        src="https://images.unsplash.com/photo-1730326405868-e6e4ee2cb475?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Abstract background"
        fill
        priority
        className="absolute inset-0 -z-10 h-full w-full object-cover contrast-50 invert"
        sizes="100vw"
      />
      <div className="container relative z-[1] flex min-h-[calc(70vh-7.5rem)] flex-col justify-center py-12 text-center md:min-h-[calc(70vh-8.5rem)] md:py-24 lg:py-24">
        <h1 className="xxs:text-3xl flex items-center justify-center gap-4 text-2xl font-bold lg:text-[4rem]/[120%] 2xl:text-[72px]">
          <Search className="size-20 text-primary lg:h-16 lg:w-16" />
          AI Powered Search
        </h1>
        <p className="mt-8 text-xl font-normal text-muted-foreground md:mx-auto md:max-w-[42.125rem] lg:mt-[3.375rem] lg:text-2xl/[130%] 2xl:max-w-[50.125rem] 2xl:text-[20px]">
          Searchplex builds solutions to deliver accurate and relevant results
          in real-time, enhancing your search experience.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <Button size="lg" asChild className="w-[12.5rem]">
            <Link
              href="https://app.pinecone.io"
              className="flex items-center justify-center gap-2"
            >
              <Zap className="size-5" />
              Get Started
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="w-[12.5rem]">
            <Link
              href="/contact/"
              className="flex items-center justify-center gap-2"
            >
              <BarChart className="size-5" />
              Contact Sales
            </Link>
          </Button>
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-2">
            <Search className="size-6 text-primary" />
            <span className="text-lg font-semibold">Intelligent Search</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="size-6 text-primary" />
            <span className="text-lg font-semibold">Real-time Results</span>
          </div>
          <div className="flex items-center gap-2">
            <BarChart className="size-6 text-primary" />
            <span className="text-lg font-semibold">Advanced Analytics</span>
          </div>
        </div>
      </div>
    </section>
  );
}
