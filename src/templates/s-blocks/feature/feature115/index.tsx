import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github, Layout, Slack, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Feature115() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="mb-10 flex flex-col items-start gap-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Built for developers
          </h2>
          <Button asChild size={"lg"}>
            <Link href="/developers">Developer site</Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="rounded-lg border">
            <CardContent className="pt-6">
              <div className="mb-4">
                <Github className="size-12 rounded-full bg-accent p-2 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Sample apps</h3>
              <p className="text-muted-foreground">
                Get started from any of our production ready sample apps
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="/samples"
                className="inline-flex items-center text-primary hover:underline"
              >
                Browse sample apps
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </CardFooter>
          </Card>

          <Card className="rounded-lg border">
            <CardContent className="pt-6">
              <div className="mb-4">
                <Layout className="size-12 rounded-full bg-accent p-2 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Ask our docs</h3>
              <p className="text-muted-foreground">
                Browse, search, or talk to our documentation to find what we
                need
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="#"
                className="inline-flex items-center text-primary transition-colors hover:underline"
              >
                dycomps.oimmi.com
              </Link>
            </CardFooter>
          </Card>

          <Card className="rounded-lg border">
            <CardContent className="pt-6">
              <div className="mb-4">
                <Slack className="size-12 rounded-full bg-accent p-2 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Vespa Slack</h3>
              <p className="text-muted-foreground">
                Join hundreds of Vespa app developers on our Slack
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="/slack"
                className="inline-flex items-center text-primary hover:underline"
              >
                Vespa Slack
                <ArrowUpRight className="ml-1 size-4" />
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
