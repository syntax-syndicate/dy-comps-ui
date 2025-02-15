import { ArrowRight, ChevronRight, File, Book, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CallToAction2() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 rounded-lg border p-6 shadow-sm lg:grid-cols-2 lg:px-20 lg:py-16">
          <div>
            <h4 className="mb-2 text-2xl font-bold lg:text-4xl">
              Power Up Your Workflow
            </h4>
            <p className="text-muted-foreground">
              Unleash the full potential of your operations with our seamless
              integrations. Experience a connected ecosystem that simplifies
              complex tasks and amplifies your results.
            </p>
            <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row">
              <Button>
                Start Exploring
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button variant={"outline"}>Talk to Our Team</Button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="flex items-center justify-between gap-2 rounded-lg border bg-card px-6 py-4 text-card-foreground shadow-none hover:bg-accent"
            >
              <div className="flex items-start gap-2">
                <File className="size-4" />
                <div>
                  <h5 className="mb-2 font-medium leading-4">
                    Dive into Documentation
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    Find comprehensive guides and API references.
                  </p>
                </div>
              </div>
              <ChevronRight className="size-6" />
            </a>
            <a
              href="#"
              className="flex items-center justify-between gap-2 rounded-lg border bg-card px-6 py-4 text-card-foreground shadow-none hover:bg-accent"
            >
              <div className="flex items-start gap-2">
                <Book className="size-4" />
                <div>
                  <h5 className="mb-2 font-medium leading-4">
                    Your Onboarding Journey
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    Step-by-step guides to get you started.
                  </p>
                </div>
              </div>
              <ChevronRight className="size-6" />
            </a>
            <a
              href="#"
              className="flex items-center justify-between gap-2 rounded-lg border bg-card px-6 py-4 text-card-foreground shadow-none hover:bg-accent"
            >
              <div className="flex items-start gap-2">
                <Code className="size-4" />
                <div>
                  <h5 className="mb-2 font-medium leading-4">API Reference</h5>
                  <p className="text-sm text-muted-foreground">
                    Explore our API endpoints and SDKs.
                  </p>
                </div>
              </div>
              <ChevronRight className="size-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
