import { Check, Twitter, Facebook, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const features = [
  "High-quality Design",
  "All Essential Sections and Pages",
  "Crafted for SaaS and Software sites",
  "Fully Responsive",
  "Detailed Documentation",
  "Fully SEO friendly",
];

const pricingTiers = [
  {
    name: "Free Lite",
    price: "$0.00",
    description: "Personal use only",
    recommended: true,
  },
  {
    name: "Starter",
    price: "$19.00",
    description: "Single site",
  },
  {
    name: "Business",
    price: "$39.00",
    description: "Unlimited sites",
  },
  {
    name: "Extended",
    price: "$119.00",
    description: "For paying users",
  },
];

export default function Component() {
  return (
    <div className="container mx-auto py-16">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          {/* Main Content */}
          <div className="space-y-6">
            <Card className="border-0 shadow-none">
              <CardContent className="p-0">
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="SaaSwind Template Preview"
                  width={800}
                  height={400}
                  className="rounded-lg border bg-muted"
                />
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h1 className="text-3xl font-bold">
                SaaSwind - Tailwind CSS SaaS Web Template
              </h1>
              <p className="text-muted-foreground">
                SaaSwind is a powerful Tailwind CSS website template for SaaS,
                web apps, software websites, and other similar websites. It
                boasts all the essential sections to launch your SaaS website
                with style and sophistication.
              </p>
              <p className="text-muted-foreground">
                The design is well-thought-out and will look great not only on
                desktop screens, but also on mobile screens. But that&apos;s not
                all! It comes with a bunch of cool features that will take your
                website to the next level.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Template Features</h2>
              <ul className="grid gap-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Badge variant="secondary">Tailwind</Badge>
                <Badge variant="secondary">Startup</Badge>
                <Badge variant="secondary">SaaS</Badge>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  Share this post:
                </span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Linkedin className="size-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Twitter className="size-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Facebook className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Download Details */}
          <Card>
            <CardHeader>
              <CardTitle>Download Details</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="free" className="space-y-4">
                {pricingTiers.map((tier) => (
                  <label
                    key={tier.name}
                    className={`flex cursor-pointer items-center justify-between rounded-lg border p-4 ${
                      tier.recommended ? "border-primary bg-primary/5" : ""
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="font-medium">
                        {tier.name} - {tier.price}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {tier.description}
                      </div>
                    </div>
                    <RadioGroupItem
                      value={tier.name.toLowerCase()}
                      className="border-primary"
                    />
                  </label>
                ))}
              </RadioGroup>
              <div className="mt-6 space-y-4">
                <Button className="w-full">Purchase Now</Button>
                <Button variant="secondary" className="w-full">
                  Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Template Information */}
          <Card>
            <CardHeader>
              <CardTitle>Template Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Released on:</span>
                  <span>Nov 30, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Last Updated on:
                  </span>
                  <span>Dec 13, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Built with:</span>
                  <Link href="#" className="text-primary hover:underline">
                    Tailwind
                  </Link>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Version:</span>
                  <span>1.0</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
