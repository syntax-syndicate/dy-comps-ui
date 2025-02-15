import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, HandMetal } from "lucide-react";

export default function NewsletterSignup() {
  return (
    <div className="relative isolate overflow-hidden bg-background py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-foreground">
              Stay in the loop with our updates!
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Get the latest industry insights and exclusive content delivered
              straight to your inbox.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <Input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto bg-input"
                placeholder="Your email address"
              />
              <Button type="submit">Join Now</Button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <Card className="bg-card text-card-foreground">
              <CardContent className="p-6">
                <div className="w-max rounded-full bg-primary/10 p-2 ring-1 ring-primary/20">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <dt className="mt-4 text-base font-semibold text-foreground">
                  Regular Updates
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  Expect fresh articles and news delivered to you on a weekly
                  basis.
                </dd>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground">
              <CardContent className="p-6">
                <div className="w-max rounded-full bg-primary/10 p-2 ring-1 ring-primary/20">
                  <HandMetal className="h-6 w-6 text-primary" />
                </div>
                <dt className="mt-4 text-base font-semibold text-foreground">
                  Zero Tolerance for Spam
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  We respect your inbox and promise to only send relevant and
                  valuable content.
                </dd>
              </CardContent>
            </Card>
          </dl>
        </div>
      </div>
    </div>
  );
}
