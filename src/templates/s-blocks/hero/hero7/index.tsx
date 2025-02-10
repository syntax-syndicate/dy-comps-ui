import React from "react";
import { FaRobot } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Hero7 = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container px-4 text-center">
        <div className="mx-auto flex max-w-screen-lg flex-col items-center gap-4 md:gap-6">
          <div className="rounded-full border-4 border-primary/30 bg-primary/10 p-4 md:p-6">
            <FaRobot className="size-12 md:size-16" />
          </div>

          <h1 className="text-2xl font-extrabold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            AI-Powered Components for Seamless Development
          </h1>
          <p className="text-balance text-sm text-muted-foreground sm:text-base md:text-lg lg:text-xl">
            Explore a collection of components crafted with{" "}
            <span className="font-semibold text-primary">
              shadcn, Tailwind, and React
            </span>
            , ready to plug into your AI projects and streamline your
            development workflow.
          </p>
        </div>
        <div className="mx-auto mt-6 flex w-full flex-col items-center justify-center gap-4 sm:flex-row md:mt-10">
          <Button size="lg" className="w-full sm:w-auto">
            Explore AI Components
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero7;
