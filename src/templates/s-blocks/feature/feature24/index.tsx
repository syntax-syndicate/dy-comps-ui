import Image from "next/image";

export default function FeatureShowcase() {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:gap-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:w-1/2 lg:text-5xl">
            Accelerate your workflow{" "}
            <span className="text-primary">with our design system</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground md:w-1/2">
            Our meticulously crafted UI components empower developers and
            designers to create cohesive, scalable interfaces with unprecedented
            speed and consistency.
          </p>
        </div>
        <div className="relative mt-16 overflow-hidden">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Comprehensive view of the design system components"
            width={1200}
            height={384}
            className="h-96 w-full rounded-lg object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
