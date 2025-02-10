import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Puzzle, Rocket, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function FeatureSection() {
  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-center text-4xl font-bold tracking-tight lg:text-5xl">
            Supercharge Your Workflow with{" "}
            <span className="text-primary">Intelligent Tools</span>
          </h1>
          <p className="mb-12 text-center text-lg text-muted-foreground">
            Unlock the full potential of your team with our suite of advanced
            collaboration features.
          </p>
          <div className="mt-10 flex flex-col gap-8">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <CardContent className="flex flex-col justify-center p-6">
                  <Zap className="mb-4 size-10 text-primary" />
                  <h2 className="mb-2 text-2xl font-semibold">
                    AI-Powered Insights
                  </h2>
                  <p className="mb-4 text-base text-muted-foreground">
                    Harness the power of artificial intelligence to analyze your
                    projects, predict bottlenecks, and suggest optimizations in
                    real-time.
                  </p>
                  <Button variant="outline" className="w-fit">
                    Learn More <ArrowRight className="ml-2 size-4" />
                  </Button>
                </CardContent>
                <CardContent className="p-0">
                  <Image
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    alt="AI Insights Dashboard"
                    className="h-full w-full object-cover"
                    width={400}
                    height={300}
                  />
                </CardContent>
              </div>
            </Card>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="flex flex-col">
                <CardHeader>
                  <Puzzle className="mb-2 size-8 text-primary" />
                  <h3 className="text-xl font-semibold">Smart Integration</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Seamlessly connect with your favorite tools and automate
                    your workflow. Boost productivity across your entire tech
                    stack.
                  </p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button variant="ghost" className="w-full">
                    Explore Integrations <ArrowRight className="ml-2 size-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <Rocket className="mb-2 size-8 text-primary" />
                  <h3 className="text-xl font-semibold">Rapid Prototyping</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Turn ideas into interactive prototypes in minutes.
                    Collaborate in real-time and iterate faster than ever
                    before.
                  </p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button variant="ghost" className="w-full">
                    Start Prototyping <ArrowRight className="ml-2 size-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <Card className="bg-accent">
              <CardContent className="flex flex-col items-center justify-between p-6 md:flex-row">
                <div>
                  <h3 className="mb-2 text-2xl font-semibold">
                    Ready to revolutionize your workflow?
                  </h3>
                  <p>Join thousands of teams already using our platform.</p>
                </div>
                <Button variant="outline" className="mt-4 md:mt-0">
                  Get Started Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
