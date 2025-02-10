import { ArrowRight, Zap, Globe, Puzzle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-8 rounded-lg bg-accent p-6 md:flex-row lg:px-20 lg:py-16">
          <div className="w-full">
            <h4 className="mb-1 text-2xl font-bold md:text-3xl">
              Supercharge Your Workflow
            </h4>
            <p className="text-muted-foreground">
              Unlock the full potential of your projects with our seamless
              integrations. Connect, automate, and accelerate your development
              process like never before.
            </p>
            <Button
              className="group relative mt-8 overflow-hidden px-6 py-3"
              variant="default"
            >
              <span className="relative z-10">Explore Integrations</span>
              <ArrowRight className="relative z-10 ml-2 size-4 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-primary opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-10"></div>
            </Button>
          </div>
          <div className="w-full">
            <ul className="space-y-4 text-sm font-medium sm:text-base lg:text-lg">
              <li className="flex items-center transition-transform duration-300 ease-in-out hover:translate-x-2">
                <Zap className="mr-4 size-6 text-primary" />
                <span>Lightning-fast API connections</span>
              </li>
              <li className="flex items-center transition-transform duration-300 ease-in-out hover:translate-x-2">
                <Eye className="mr-4 size-6 text-primary" />
                <span>Observe errors with advanced reporting</span>
              </li>
              <li className="flex items-center transition-transform duration-300 ease-in-out hover:translate-x-2">
                <Globe className="mr-4 size-6 text-primary" />
                <span>Global ecosystem compatibility</span>
              </li>
              <li className="flex items-center transition-transform duration-300 ease-in-out hover:translate-x-2">
                <Puzzle className="mr-4 size-6 text-primary" />
                <span>Customizable integration modules</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
