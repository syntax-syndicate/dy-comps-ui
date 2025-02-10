import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { AppWindow, Puzzle, Zap, Wrench, Workflow, Search } from "lucide-react";

export default function FeatureSection() {
  return (
    <section className="py-32 dark:bg-background">
      <div className="container max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <h2 className="text-3xl font-bold md:w-1/2">
            <span className="text-primary">Unlock</span> Your Workflow&apos;s
            Potential
          </h2>
          <p className="text-muted-foreground md:w-1/2">
            Dive into our curated selection of tools. Designed for seamless
            integration and peak performance, we empower you to create,
            innovate, and excel effortlessly.
          </p>
        </div>
        <div className="mt-11 flex flex-col gap-6 md:flex-row">
          <div className="flex w-full flex-col gap-6 md:w-1/2">
            <Card className="order-1 md:order-2">
              <div className="relative">
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="Visual representation of seamless integrations across various platforms"
                  width={400}
                  height={200}
                  className="aspect-video w-full rounded-t-lg object-cover"
                />
                <div className="absolute right-4 top-4 rounded-full bg-accent p-2">
                  <Puzzle className="size-5 text-primary" />
                </div>
              </div>
              <CardContent className="p-6">
                <p className="mb-1 font-medium">Seamless Integrations</p>
                <p className="text-muted-foreground">
                  Connect all your essential tools and watch your workflow
                  flourish.
                </p>
              </CardContent>
            </Card>
            <Card className="order-3">
              <CardContent className="p-6">
                <p className="mb-1 flex items-center gap-2 font-medium">
                  <Zap className="size-5 text-primary" /> Performance Boosters
                </p>
                <p className="text-muted-foreground">
                  Supercharge your workflow with tools designed for maximum
                  efficiency.
                </p>
              </CardContent>
            </Card>
            <Card className="order-4">
              <CardContent className="p-6">
                <p className="mb-1 flex items-center gap-2 font-medium">
                  <Wrench className="size-5 text-primary" /> Versatile Utilities
                </p>
                <p className="text-muted-foreground">
                  Simplify complex tasks with our suite of powerful utilities,
                  from automation to organization, we have you covered.
                </p>
              </CardContent>
            </Card>
            <Card className="order-6">
              <CardContent className="p-6">
                <p className="mb-1 flex items-center gap-2 font-medium">
                  <Search className="size-5 text-primary" /> Intelligent Search
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary"
                  >
                    Coming soon
                  </Badge>
                </p>
                <p className="text-muted-foreground">
                  Experience the future of search with AI-powered precision.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex w-full flex-col gap-6 md:w-1/2">
            <Card className="order-2 md:order-1">
              <CardContent className="p-6">
                <p className="mb-1 flex items-center gap-2 font-medium">
                  <AppWindow className="size-5 text-primary" /> Purpose-Built
                  Apps
                </p>
                <p className="text-muted-foreground">
                  Enhance your work with our selection of applications, made to
                  optimize.
                </p>
              </CardContent>
            </Card>
            <Card className="order-5">
              <div className="relative">
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="Diagram showcasing the ecosystem of integrated tools and platforms"
                  width={400}
                  height={200}
                  className="aspect-video w-full rounded-t-lg object-cover"
                />
                <div className="absolute right-4 top-4 rounded-full bg-accent p-2">
                  <Workflow className="size-5 text-primary" />
                </div>
              </div>
              <CardContent className="p-6">
                <p className="mb-1 font-medium">Connected Ecosystem</p>
                <p className="text-muted-foreground">
                  Explore the possibilities with our vast ecosystem.
                </p>
              </CardContent>
            </Card>
            <Card className="order-7">
              <CardContent className="p-6">
                <p className="mb-1 flex items-center gap-2 font-medium">
                  <Workflow className="size-5 text-primary" /> Workflow
                  Automation
                </p>
                <p className="text-muted-foreground">
                  Automate the tedious and focus on what truly matters.
                </p>
              </CardContent>
            </Card>
            <Card className="order-8">
              <CardContent className="p-6">
                <p className="mb-1 flex items-center gap-2 font-medium">
                  <Zap className="size-5 text-primary" /> Advanced Features
                </p>
                <p className="text-muted-foreground">
                  Push the boundaries of what&apos;s possible with features
                  built to give you a competitive advantage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
