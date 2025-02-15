import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Feature16() {
  return (
    <section className="py-32">
      <div className="container">
        <Card className="flex flex-col justify-between md:flex-row">
          <CardContent className="p-6">
            <div className="mb-6 flex items-center gap-4">
              <span className="flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 text-primary">
                <Sparkles className="size-6" />
              </span>
              <h4 className="text-2xl font-bold">Seamless Integrations</h4>
            </div>
            <p className="text-muted-foreground">
              Connect your favorite tools and streamline your workflows. Our
              platform integrates with a wide range of apps to boost your
              productivity and enhance your experience.
            </p>
            <Button className="mt-8" size={"lg"}>
              Explore Integrations
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </CardContent>
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Integration illustration"
            className="aspect-video object-cover sm:rounded-r-lg md:max-w-96"
            width={384}
            height={384}
          />
        </Card>
      </div>
    </section>
  );
}
