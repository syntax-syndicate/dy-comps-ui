import Image from "next/image";

export default function Hero74() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <div className="container relative px-4 py-20">
        {/* Image Gallery */}
        <div className="relative mx-auto aspect-[16/9] w-full max-w-5xl">
          {/* Left Image */}
          <div className="absolute left-0 top-1/2 z-10 w-1/4 -translate-x-1/4 -translate-y-1/2 transform">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Ornate minarets with geometric patterns"
                fill
                className="rounded-lg object-cover shadow-2xl"
              />
            </div>
          </div>

          {/* Center Image */}
          <div className="relative h-full w-full">
            <Image
              src="https://images.unsplash.com/photo-1600262300216-f531931b5ab9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Majestic mosque at sunset"
              fill
              className="rounded-lg object-cover shadow-2xl"
            />
          </div>

          {/* Right Image */}
          <div className="absolute right-0 top-1/2 z-10 w-1/4 -translate-y-1/2 translate-x-1/4 transform">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Classical architectural details"
                fill
                className="rounded-lg object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="relative z-20 mt-12">
          <h1 className="text-center text-6xl font-bold tracking-wider text-foreground md:text-8xl">
            ARCHITECTURE
          </h1>
        </div>

        {/* Decorative gradient overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
    </section>
  );
}
