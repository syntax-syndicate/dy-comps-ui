import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Rocket } from "lucide-react";

export default function Hero53() {
  return (
    <section className="relative py-32">
      <div className="container">
        <InnovateBackgroundPattern />
        <h1 className="text-5xl font-bold md:text-6xl lg:text-8xl">
          Revolutionizing Code Upkeep for Peak{" "}
          <span className="text-primary underline">Performance.</span>
        </h1>
        <div className="mt-8 flex flex-col-reverse gap-8 md:mt-10 md:flex-row md:items-center">
          <div className="flex flex-col gap-5">
            <Button className="sm:w-fit">
              Join the Waitlist <Rocket className="ml-2 size-4" />
            </Button>
            <div className="flex items-center gap-2">
              <PioneerAvatars />
              <p className="text-xs">
                Endorsed by over 3,000 pioneering developers.
              </p>
            </div>
          </div>
          <p className="max-w-lg text-xl text-muted-foreground">
            We empower developers with AI-driven tools to automate bug
            detection, generate comprehensive documentation, and centralize
            project insights.
          </p>
        </div>
      </div>
    </section>
  );
}

function InnovateBackgroundPattern() {
  return (
    <div className="absolute inset-0 -z-10 size-full bg-[conic-gradient(from_90deg_at_50%_50%,_#E2E8F0,_#888888,_#E2E8F0,_#888888,_#E2E8F0)] opacity-20 [background-size:20px_20px]"></div>
  );
}

function PioneerAvatars() {
  return (
    <span className="inline-flex items-center -space-x-2">
      <Avatar className="size-7 border-2 border-white">
        <AvatarImage
          src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
          alt="Innovator 1"
        />
        <AvatarFallback>I1</AvatarFallback>
      </Avatar>
      <Avatar className="size-7 border-2 border-white">
        <AvatarImage
          src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
          alt="Innovator 2"
        />
        <AvatarFallback>I2</AvatarFallback>
      </Avatar>
      <Avatar className="size-7 border-2 border-white">
        <AvatarImage
          src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
          alt="Innovator 3"
        />
        <AvatarFallback>I3</AvatarFallback>
      </Avatar>
    </span>
  );
}
