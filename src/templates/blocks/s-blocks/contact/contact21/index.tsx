"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function Contact21() {
  return (
    <div className="container mx-auto py-12">
      <div className="mx-auto max-w-6xl space-y-16">
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Get in touch</h2>
            <p className="mt-4 text-muted-foreground">
              Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 font-semibold">Collaborate</h3>
                <div className="space-y-2">
                  <a
                    href="mailto:collaborate@example.com"
                    className="block text-primary hover:underline"
                  >
                    collaborate@example.com
                  </a>
                  <a
                    href="tel:+15559052345"
                    className="block text-muted-foreground hover:text-foreground"
                  >
                    +1 (555) 905-2345
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 font-semibold">Press</h3>
                <div className="space-y-2">
                  <a
                    href="mailto:press@example.com"
                    className="block text-primary hover:underline"
                  >
                    press@example.com
                  </a>
                  <a
                    href="tel:+15559053456"
                    className="block text-muted-foreground hover:text-foreground"
                  >
                    +1 (555) 905-3456
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 font-semibold">Join our team</h3>
                <div className="space-y-2">
                  <a
                    href="mailto:careers@example.com"
                    className="block text-primary hover:underline"
                  >
                    careers@example.com
                  </a>
                  <a
                    href="tel:+15559054567"
                    className="block text-muted-foreground hover:text-foreground"
                  >
                    +1 (555) 905-4567
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 font-semibold">Say hello</h3>
                <div className="space-y-2">
                  <a
                    href="mailto:hello@example.com"
                    className="block text-primary hover:underline"
                  >
                    hello@example.com
                  </a>
                  <a
                    href="tel:+15559055678"
                    className="block text-muted-foreground hover:text-foreground"
                  >
                    +1 (555) 905-5678
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Locations</h2>
            <p className="mt-4 text-muted-foreground">
              Consequat sunt cillum cillum elit sint. Qui occaecat nisi in ipsum
              commodo.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 font-semibold">Los Angeles</h3>
                <address className="not-italic text-muted-foreground">
                  4556 Brendan Ferry
                  <br />
                  Los Angeles, CA 90210
                </address>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 font-semibold">New York</h3>
                <address className="not-italic text-muted-foreground">
                  886 Walter Street
                  <br />
                  New York, NY 12345
                </address>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 font-semibold">Toronto</h3>
                <address className="not-italic text-muted-foreground">
                  7363 Cynthia Pass
                  <br />
                  Toronto, ON N3Y 4H8
                </address>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 font-semibold">Chicago</h3>
                <address className="not-italic text-muted-foreground">
                  726 Mavis Island
                  <br />
                  Chicago, IL 60601
                </address>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
