import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function Component() {
  return (
    <section className="py-32">
      <div className="container">
        {/* Header */}
        <div className="mb-12 space-y-4 text-center">
          <div className="text-sm text-primary">Pricing</div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Pricing that grows with you
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Choose an affordable plan that&apos;s packed with the best features
            for engaging your audience, creating customer loyalty, and driving
            sales.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Hobby Plan */}
          <Card>
            <CardHeader>
              <CardTitle>Hobby</CardTitle>
              <CardDescription>
                The essentials to provide your best work for clients.
              </CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$19</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">Buy plan</Button>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span>5 products</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span>Up to 1,000 subscribers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span>Basic analytics</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Freelancer Plan */}
          <Card>
            <CardHeader>
              <CardTitle>Freelancer</CardTitle>
              <CardDescription>
                The essentials to provide your best work for clients.
              </CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">Buy plan</Button>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span>5 products</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span>Up to 1,000 subscribers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span>48-hour support response time</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Startup Plan */}
          <Card className="border-primary">
            <CardHeader>
              <CardTitle>Startup</CardTitle>
              <CardDescription>
                A plan that scales with your rapidly growing business.
              </CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$59</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full" variant="default">
                Buy plan
              </Button>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span>25 products</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span>Up to 10,000 subscribers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span>24-hour support response time</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span>Marketing automations</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Enterprise Plan */}
          <Card>
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>
                Dedicated support and infrastructure for your company.
              </CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">Buy plan</Button>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span>Unlimited products</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span>Unlimited subscribers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span>1-hour, dedicated support response time</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span>Marketing automations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span>Custom reporting tools</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Logos */}
        <div className="mt-20 grid grid-cols-2 items-center justify-items-center gap-8 opacity-75 md:grid-cols-5">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Transistor"
            width={100}
            height={32}
            className="h-8 w-auto"
          />
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Reform"
            width={100}
            height={32}
            className="h-8 w-auto"
          />
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Tuple"
            width={100}
            height={32}
            className="h-8 w-auto"
          />
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="SavvyCal"
            width={100}
            height={32}
            className="h-8 w-auto"
          />
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Statamic"
            width={100}
            height={32}
            className="h-8 w-auto"
          />
        </div>
      </div>
    </section>
  );
}
