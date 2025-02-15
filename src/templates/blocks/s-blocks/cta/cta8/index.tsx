import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CallToAction8() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center rounded-lg border-4 border-primary p-8 text-center shadow-lg lg:p-16">
          <h3 className="mb-3 max-w-3xl text-2xl font-bold uppercase tracking-wide md:mb-4 md:text-4xl lg:mb-6">
            Revolutionize Your Workflow
          </h3>
          <p className="mb-8 max-w-3xl italic text-muted-foreground lg:text-lg">
            Unlock the power of seamless collaboration and skyrocket your
            team&apos;s productivity. Don&apos;t let outdated tools hold you
            back—embrace the future of work today!
          </p>
          <div className="flex w-full flex-col justify-center gap-4 sm:flex-row">
            <Button
              variant="outline"
              className="group w-full transition-all duration-300 ease-in-out sm:w-auto"
            >
              <span className="group-hover:mr-2">Explore Features</span>
              <ArrowRight
                className="ml-2 hidden group-hover:inline-block"
                size={16}
              />
            </Button>
            <Button className="relative w-full overflow-hidden transition-all duration-300 ease-in-out sm:w-auto">
              <span className="relative z-10">Start Free Trial</span>
              <span className="absolute inset-0 origin-left scale-x-0 transform bg-primary-foreground transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
