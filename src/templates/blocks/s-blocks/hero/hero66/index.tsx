import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero66() {
  return (
    <div className="w-full bg-background">
      <div className="container py-16">
        {/* Hero Section */}
        <div className="group relative mb-6 aspect-[21/9] w-full overflow-hidden rounded-lg">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Tech breakthrough image"
            className="object-cover brightness-75 transition-transform duration-300 group-hover:scale-105"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
          <div className="absolute inset-0 flex items-end p-6 md:p-12">
            <div className="space-y-4">
              <h1 className="max-w-xl text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
                AI Revolutionizes Data Analysis with New Algorithm
              </h1>
              <Button
                variant="outline"
                className="border/40 bg-background/30 backdrop-blur hover:bg-background/50"
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
        {/* Grid Section */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Card */}
          <div className="group relative aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="VR headset image"
              className="object-cover brightness-75 transition-transform duration-300 group-hover:scale-105"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
            <div className="absolute inset-0 flex items-end p-6">
              <div className="space-y-4">
                <h2 className="max-w-xl text-2xl font-bold tracking-tighter text-foreground md:text-3xl">
                  Immersive VR Experiences Gain Traction in Remote Collaboration
                </h2>
                <Button
                  variant="outline"
                  className="border/40 bg-background/30 backdrop-blur hover:bg-background/50"
                >
                  Explore Now
                </Button>
              </div>
            </div>
          </div>
          {/* Right Card */}
          <div className="group relative aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Quantum computer image"
              className="object-cover brightness-75 transition-transform duration-300 group-hover:scale-105"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
            <div className="absolute inset-0 flex items-end p-6">
              <div className="space-y-4">
                <h2 className="max-w-xl text-2xl font-bold tracking-tighter text-foreground md:text-3xl">
                  Quantum Computing Advances Promise Breakthroughs in Medicine
                </h2>
                <Button
                  variant="outline"
                  className="border/40 bg-background/30 backdrop-blur hover:bg-background/50"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
