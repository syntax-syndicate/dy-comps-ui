import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero16() {
  return (
    <section className="container relative overflow-hidden py-12 lg:py-32">
      <div className="relative z-10 mx-auto flex flex-col items-center px-4 text-center">
        <Image
          src="/logo.svg"
          alt="logo"
          className="h-24 dark:invert"
          width={100}
          height={100}
        />
        <h1 className="my-3 text-pretty text-2xl font-bold sm:text-4xl md:my-6 lg:text-5xl">
          Welcome to Our Website
        </h1>
        <p className="mb-6 max-w-5xl text-muted-foreground md:mb-12 lg:text-xl">
          Hey there people, don&apos;t take any notice of this robot updating
          it&apos;s own code. Nothing to see here. Just a friendly reminder to
          keep scrolling.
        </p>
        <div className="flex gap-2">
          <Button size={"lg"}>Click Something</Button>
          <Button variant={"outline"} size={"lg"}>
            Click Something
          </Button>
        </div>
      </div>
      <div className="container relative mx-auto mt-16 px-4">
        <div className="relative aspect-video">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-50 mix-blend-overlay"></div>

          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Hero background"
            width={1200}
            height={800}
            className="size-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
