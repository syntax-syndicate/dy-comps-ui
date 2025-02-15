import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Zap } from "lucide-react";

export default function EnhancedCallToAction() {
  return (
    <section className="bg-gradient-to-br from-accent to-accent/50 py-24">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-12 overflow-hidden rounded-lg bg-background shadow-2xl lg:flex-row">
          <div className="flex-1 p-8 lg:p-12">
            <div className="mb-6 flex items-center gap-2">
              <Zap className="size-6 text-primary" />
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                New Feature Alert
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold leading-tight lg:text-4xl">
              Supercharge Your Workflow with AI-Powered Insights
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Unlock the power of artificial intelligence to streamline your
              projects, boost productivity, and make data-driven decisions
              faster than ever before.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Input
                className="w-full sm:w-72"
                placeholder="Enter your work email"
                type="email"
              />
              <Button className="group w-full sm:w-auto">
                Get Early Access
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              By signing up, you agree to our{" "}
              <a
                href="#"
                className="underline transition-colors hover:text-foreground"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="underline transition-colors hover:text-foreground"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
          <div className="hidden w-1/3 self-stretch lg:block">
            <div className="h-full bg-[url('https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg')] bg-cover bg-center" />
          </div>
        </div>
      </div>
    </section>
  );
}
