import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { HandHelping, Users, Zap } from "lucide-react";

export default function Hero45() {
  return (
    <section className="py-32">
      <div className="container overflow-hidden">
        <div className="mb-20 flex flex-col items-center gap-6 text-center">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            Easy to use
          </div>
          <h1 className="text-4xl font-semibold lg:text-6xl">
            Where Scale
            <br /> meets Performance
          </h1>
        </div>
        <div className="relative mx-auto max-w-screen-lg">
          <img
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="placeholder"
            className="aspect-video max-h-[500px] w-full rounded-xl object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          <BackgroundDecoration />
        </div>
        <div className="mx-auto mt-10 flex max-w-screen-lg flex-col md:flex-row">
          <FeatureCard
            icon={<HandHelping className="h-auto w-5" />}
            title="Flexible Support"
            description="Benefit from around-the-clock assistance to keep your business running smoothly."
          />
          <Separator
            className="mx-6 hidden h-auto w-[2px] bg-gradient-to-b from-muted via-transparent to-muted md:block"
            orientation="vertical"
          />
          <FeatureCard
            icon={<Users className="h-auto w-5" />}
            title="Collaborative Tools"
            description="Enhance teamwork with tools designed to simplify project management and communication."
          />
          <Separator
            className="mx-6 hidden h-auto w-[2px] bg-gradient-to-b from-muted via-transparent to-muted md:block"
            orientation="vertical"
          />
          <FeatureCard
            icon={<Zap className="h-auto w-5" />}
            title="Lightning Fast Speed"
            description="Experience the fastest load times with our high performance servers."
          />
        </div>
      </div>
    </section>
  );
}

function BackgroundDecoration() {
  return (
    <>
      <div className="absolute -right-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
      <div className="absolute -left-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
    </>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex grow basis-0 flex-col rounded-md bg-background p-4">
      <div className="mb-6 flex size-10 items-center justify-center rounded-full bg-background drop-shadow-lg">
        {icon}
      </div>
      <h3 className="mb-2 font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
