import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, ArrowUpRight } from "lucide-react";

export default function CallToAction1() {
  return (
    <section className="py-24">
      <div className="container">
        <Card className="overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <CardContent className="flex-1 p-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                  <Zap className="size-6 text-primary" />
                </span>
                <h3 className="text-3xl font-bold">Boost Your Productivity</h3>
              </div>
              <p className="mb-6 text-lg text-muted-foreground">
                Unlock your team&apos;s full potential with our cutting-edge
                collaboration tools. Streamline workflows, enhance
                communication, and achieve more together.
              </p>
              <Button size="lg" className="group">
                Start Free Trial
                <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Button>
            </CardContent>
            <div className="flex-1 bg-muted p-8">
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-2">
                  <svg
                    className="size-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Real-time collaboration features
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="size-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Advanced project management tools
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="size-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Customizable workflows and integrations
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="size-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  24/7 priority customer support
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
