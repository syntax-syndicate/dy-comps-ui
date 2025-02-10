import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function EnhancedCallToAction() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center rounded-lg bg-accent px-6 py-16 text-center shadow-lg">
          <h3 className="mb-3 max-w-3xl text-3xl font-bold tracking-tight md:mb-4 md:text-4xl lg:mb-6">
            Elevate Your Experience
          </h3>
          <p className="mb-8 max-w-2xl text-muted-foreground lg:text-lg">
            Discover innovative solutions tailored to your needs. Join us in
            shaping the future of technology and design.
          </p>
          <div className="w-full md:max-w-lg">
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Input placeholder="Enter your email" />
              <Button className="transition-transform hover:scale-105">
                Get Started
              </Button>
            </div>
            <p className="mt-3 text-center text-sm text-muted-foreground">
              By subscribing, you agree to our{" "}
              <a
                href="#"
                className="underline transition-colors hover:text-foreground"
              >
                Terms & Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
