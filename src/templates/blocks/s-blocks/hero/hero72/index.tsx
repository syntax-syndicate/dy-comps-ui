import Image from "next/image";

export default function Hero72() {
  return (
    <div className="container relative flex min-h-screen flex-col items-center gap-8 py-8 md:py-12 lg:flex-row">
      <div className="flex flex-col items-start space-y-4 lg:w-1/2">
        <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm">
          <a href="#" className="text-primary hover:text-primary/80">
            Checkout updates
            <span className="ml-2 text-primary">»</span>
          </a>
        </div>

        <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl">
          Experience Life <br />
          from home
        </h1>

        <p className="text-lg text-muted-foreground">
          The best experiences, without leaving your home. VR provides
          everything you need to stay sane and safe during the pandemic
        </p>

        <button className="bg-primary px-8 py-3 font-medium text-primary-foreground hover:bg-primary/90">
          Take me home
        </button>
      </div>

      <div className="lg:w-1/2">
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-4">
            <div className="overflow-hidden">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Mountain view"
                className="h-full w-full rounded-lg object-cover"
                width={300}
                height={400}
              />
            </div>
            <div className="overflow-hidden">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Pool jumping"
                className="h-full w-full rounded-lg object-cover"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="overflow-hidden">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Hiking couple"
                className="h-full w-full rounded-lg object-cover"
                width={300}
                height={300}
              />
            </div>
            <div className="overflow-hidden">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Friends socializing"
                className="h-full w-full rounded-lg object-cover"
                width={300}
                height={200}
              />
            </div>
            <div className="overflow-hidden">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Park pathway"
                className="h-full w-full rounded-lg object-cover"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
