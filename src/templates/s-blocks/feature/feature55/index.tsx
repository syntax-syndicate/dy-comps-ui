import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Feature55() {
  return (
    <section className="bg-background py-32 text-foreground">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <Image
              src="/icons/abstract.png" // Replace with your logo path
              alt="Your Company Logo"
              width={100} // Adjust the width as needed
              height={100} // Adjust the height as needed
              className="mx-auto dark:invert" // Center logo
            />
          </div>
          <h3 className="my-6 text-pretty text-3xl font-semibold md:text-4xl lg:max-w-3xl lg:text-5xl">
            Discover the Core Essence
          </h3>
          <p className="mb-8 text-muted-foreground lg:max-w-3xl lg:text-lg">
            Uncover the power behind our platform, a carefully crafted space for
            your needs. Explore the unique experience and see how we can assist
            you in achieving your goals.
          </p>
          <div className="flex flex-row gap-4">
            <Button variant="outline">Explore Now</Button>
            <Button variant="secondary">Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
