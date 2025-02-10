import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NewsletterSignup() {
  return (
    <section className="bg-background text-foreground">
      <div className="container mx-auto py-8 lg:py-16">
        <Card className="bg-card text-card-foreground">
          <CardContent className="items-center justify-between p-6 lg:flex lg:gap-24 lg:p-12">
            <div className="w-full lg:w-3/4">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Join Our Mailing List
              </h2>
              <p className="font-light text-muted-foreground sm:text-xl">
                Be the first to know about our product advancements, key
                updates, and special offers. Sign up with your email to stay
                informed.
              </p>
            </div>
            <div className="mt-6 w-full lg:mt-0 lg:w-1/4">
              <form action="#" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="sr-only">
                    Email address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="email"
                      placeholder="Your email here"
                      type="email"
                      required
                      className="pl-10"
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  Subscribe Now
                </Button>
                <p className="text-sm text-muted-foreground">
                  Your data privacy matters.{" "}
                  <a
                    href="#"
                    className="font-medium text-primary hover:underline"
                  >
                    See our Privacy Guidelines
                  </a>
                  .
                </p>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
