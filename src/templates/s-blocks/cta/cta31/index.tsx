import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Check,
  ArrowRight,
  Smartphone,
  TrendingUp,
  DatabaseZap,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function CallToAction31() {
  const features = [
    "Real-time expense tracking",
    "Smart budget forecasting",
    "Cross-platform synchronization",
  ];

  const bottomFeatures = [
    "AI-powered financial insights",
    "Customizable savings goals",
    "Multi-currency support",
    "Automated bill reminders",
    "Investment tracking",
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Top Section */}
      <section className="container mx-auto py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="flex gap-6">
              <Button variant="outline" className="gap-2">
                <Smartphone className="h-4 w-4" />
                Mobile First Design
              </Button>
              <Button variant="outline" className="gap-2">
                <TrendingUp className="h-4 w-4" />
                98% Satisfaction
              </Button>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center rounded-lg bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <DatabaseZap className="mr-2 h-4 w-4" />
                New: AI Financial Assistant
              </div>
              <h1 className="text-4xl font-bold tracking-tight [text-wrap:balance]">
                Transform Your Financial Future with
                <span className="text-primary"> DY-Comps Finance</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Intelligent money management that adapts to your lifestyle,
                helping you save smarter and invest wiser.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-primary/10 p-1.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{feature}</p>
                    <p className="text-sm text-muted-foreground">
                      {index === 0 && "Instant transaction categorization"}
                      {index === 1 && "Predictive budget modeling"}
                      {index === 2 && "Seamless device integration"}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button className="gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="gap-2">
                Watch Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-play"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent" />
            <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Financial app interface"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* Bottom Section */}
      <section className="container mx-auto py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="grid gap-6">
            <Card className="p-6 transition-colors hover:border-primary/50">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground">
                    Active Users
                  </div>
                  <div className="text-3xl font-bold">286K</div>
                </div>
                <div className="flex items-center gap-1 text-emerald-500">
                  <TrendingUp className="h-4 w-4" />
                  <span className="font-medium">+24%</span>
                </div>
              </div>
              <div className="mt-4 h-2 rounded-full bg-primary/20">
                <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-primary to-emerald-500" />
              </div>
            </Card>

            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="p-6 transition-colors hover:border-primary/50">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Avg. Savings
                    </div>
                    <div className="text-2xl font-bold">$1,240</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 transition-colors hover:border-primary/50">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                      <path d="M12 18V6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Portfolio Growth
                    </div>
                    <div className="text-2xl font-bold">+18.4%</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight [text-wrap:balance]">
              Your Financial Ecosystem,
              <span className="text-primary"> Perfected</span>
            </h2>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                DY-Comps Finance combines cutting-edge technology with financial
                expertise to deliver unparalleled money management solutions.
              </p>

              <ul className="grid gap-4 sm:grid-cols-2">
                {bottomFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-primary/10 p-1.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button className="gap-2">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="gap-2">
                Enterprise Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
