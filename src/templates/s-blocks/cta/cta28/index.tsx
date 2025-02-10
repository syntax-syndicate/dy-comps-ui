import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function CallToAction28() {
  return (
    <section className="bg-background py-16 text-foreground">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
          Get started with DY-Comps today
        </h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Connecting with your audience has never been easier with DY-Comps
          straightforward email marketing and automation tools.
        </p>
        <div className="mx-auto mb-4 flex max-w-md flex-col gap-3 sm:flex-row">
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-muted/50"
          />
          <Button className="sm:w-32">Subscribe</Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Instant signup. No credit card required.{" "}
          <Link href="#" className="text-primary hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
