import { Badge } from "@/components/ui/badge";
import { HandHelping, Users } from "lucide-react";

export default function Feature83() {
  return (
    <section className="bg-background py-32 text-foreground">
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative order-2 grid gap-6 sm:grid-cols-2 lg:order-none">
            <div className="flex flex-col rounded-xl border border-accent bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-6 flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                <HandHelping className="h-auto w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Dedicated Support</h3>
              <p className="text-sm text-muted-foreground">
                Rely on our expert support team available around the clock,
                ensuring your operations run smoothly at all times.
              </p>
            </div>
            <div className="flex flex-col rounded-xl border border-accent bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-6 flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                <Users className="h-auto w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Team Collaboration</h3>
              <p className="text-sm text-muted-foreground">
                Boost your team&apos;s productivity with our seamlessly
                integrated collaboration tools designed to streamline project
                execution.
              </p>
            </div>

            <div className="absolute -bottom-28 -z-10 size-full opacity-25 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
          </div>
          <div className="order-1 mx-auto flex max-w-screen-md flex-col items-center gap-5 text-center lg:order-none lg:items-start lg:text-left">
            <Badge variant="outline" className="w-fit">
              Core Benefits
            </Badge>
            <h2 className="text-4xl font-bold">
              Streamlined Solutions for Modern Businesses
            </h2>
            <p className="text-lg text-muted-foreground">
              Experience the ease of managing all your core business needs—from
              finances to team communication—within one powerfully integrated
              platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
