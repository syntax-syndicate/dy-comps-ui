import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Twitter, ArrowRight } from "lucide-react";

export default function Contact29() {
  return (
    <div className="container mx-auto py-12">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr,2fr]">
        <div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Let&apos;s connect
          </h2>
          <p className="text-muted-foreground">
            We&apos;re here to help and answer any question you might have,
            <br />
            We look forward to hearing from you.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <Card className="border-0 shadow-none">
            <CardContent className="space-y-4 p-6">
              <div className="flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                <Globe className="size-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  Join our community
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <Button
                  variant="link"
                  className="h-auto p-0 font-medium"
                  asChild
                >
                  <a href="#" className="flex items-center">
                    Join our Discord
                    <ArrowRight className="ml-1 size-4" />
                  </a>
                </Button>
              </div>
              sss
            </CardContent>
          </Card>

          <Card className="border-0 shadow-none">
            <CardContent className="space-y-4 p-6">
              <div className="flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                <Twitter className="size-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  Follow us on Twitter
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <Button
                  variant="link"
                  className="h-auto p-0 font-medium"
                  asChild
                >
                  <a href="#" className="flex items-center">
                    Send us DMs
                    <ArrowRight className="ml-1 size-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
