import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About26() {
  return (
    <section className="container mx-auto py-16">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted lg:w-1/2">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Vintage typewriter ready to craft our story"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col justify-center lg:w-1/2">
          <div className="space-y-6 rounded-lg bg-accent p-8">
            <div className="space-y-4">
              <Image
                src="/icons/abstract.png"
                width={150}
                height={150}
                alt="Company Logo"
                className="dark:invert"
              />
              <h2 className="text-sm font-medium uppercase tracking-wider text-primary">
                Our Story Unfolds
              </h2>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <span className="text-primary">
                  Crafting Digital Narratives
                </span>
                <br /> One Keystroke at a Time
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              In the realm of pixels and code, we&apos;re the wordsmiths of the
              digital age. Our vintage typewriter may have evolved into sleek
              keyboards, but our passion for crafting compelling stories remains
              unchanged.
            </p>

            <Button>Click Here To Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
