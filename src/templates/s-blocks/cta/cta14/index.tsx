import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CallToAction14() {
  return (
    <section className="bg-secondary/50 py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Boost Your Productivity Today
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Join thousands of satisfied users and take your workflow to the
              next level with our innovative tools.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-4">
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="#start-trial">Start Free Trial</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link href="#learn-more">Learn More</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              No credit card required. Start your 14-day free trial today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
