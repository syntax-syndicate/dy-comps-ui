import Image from "next/image";
import { Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
export default function Feature118() {
  return (
    <section className="container mx-auto py-16">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="space-y-4">
            <Badge variant={"outline"}>About Us</Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Seamless Strategies to Shape Your Financial Destiny
            </h1>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="bg-card">
              <CardContent className="space-y-4 p-6">
                <div className="flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                  <Target className="size-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">Our Mission</h2>
                  <p className="text-sm text-muted-foreground">
                    Through a dedication to continuous learning, we foster a
                    dynamic workforce capable.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="space-y-4 p-6">
                <div className="flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                  <Eye className="size-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">Our Vision</h2>
                  <p className="text-sm text-muted-foreground">
                    We are committed to transforming the landscape by equipping
                    our team with the skills.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="text-muted-foreground">
            Learn actionable techniques and smart approaches that simplify
            financial management and empower you to shape your destiny. Whether
            you&apos;re looking to optimize investments, streamline budgeting,
            or plan for long-term goals.
          </p>
        </div>

        {/* Right Column - Image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-auto lg:h-full">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Team members working together at computers in a modern office setting"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
