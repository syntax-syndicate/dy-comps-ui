import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MessageCircle, Bug, Terminal } from "lucide-react";

export default function Component() {
  return (
    <div className="container mx-auto py-12">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="mb-3 text-3xl font-bold tracking-tight">
          Contact sales
        </h1>
        <p className="text-muted-foreground">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>

      <div className="mx-auto max-w-2xl space-y-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                <MessageCircle className="size-6 text-primary-foreground" />
              </div>
              <div className="space-y-2">
                <h2 className="font-semibold">Sales support</h2>
                <p className="text-muted-foreground">
                  Ut cursus est ut amet. Lobortis eget egestas leo vitae eget
                  porttitor risus blandit. Nunc a in lorem vel iaculis
                  porttitor.
                </p>
                <Button variant="link" className="h-auto p-0 font-semibold">
                  Contact us
                  <ArrowRight className="ml-1 size-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                <Bug className="size-6 text-primary-foreground" />
              </div>
              <div className="space-y-2">
                <h2 className="font-semibold">Bug reports</h2>
                <p className="text-muted-foreground">
                  Expedita qui non ut quia ipsum voluptatum ipsam pariatur.
                  Culpa vitae ipsum minus eius vero quo quibusdam.
                </p>
                <Button variant="link" className="h-auto p-0 font-semibold">
                  Report a bug
                  <ArrowRight className="ml-1 size-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                <Terminal className="size-6 text-primary-foreground" />
              </div>
              <div className="space-y-2">
                <h2 className="font-semibold">Technical support</h2>
                <p className="text-muted-foreground">
                  Sint aut modi porro consequatur architecto commodi qui
                  consequatur. Dignissimos adipisci minima.
                </p>
                <Button variant="link" className="h-auto p-0 font-semibold">
                  Join our Discord
                  <ArrowRight className="ml-1 size-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
