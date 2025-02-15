import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Droplet, Sun, Wind, Leaf } from "lucide-react";

export default function EcoHomeSolutions() {
  return (
    <section className="bg-gradient-to-br from-accent/20 to-background py-32">
      <div className="container">
        <div className="mx-auto grid gap-10 md:grid-cols-12">
          <div className="order-1 md:col-span-7 lg:col-span-7">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="relative aspect-square overflow-hidden rounded-lg border">
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="Solar panel installation"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h4 className="text-lg font-semibold text-white">
                    Solar Energy
                  </h4>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg border">
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="Water conservation system"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h4 className="text-lg font-semibold text-white">
                    Water Conservation
                  </h4>
                </div>
              </div>
              <div className="relative col-span-2 aspect-video overflow-hidden rounded-lg border">
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="Smart home energy management"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h4 className="text-lg font-semibold text-white">
                    Smart Energy Management
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="order-2 flex flex-col justify-between md:col-span-5 lg:col-span-5">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                Eco-Friendly Living
              </p>
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Transform Your Home into an Eco Paradise
              </h2>
              <p className="mb-6 text-muted-foreground">
                Embrace sustainable living with our cutting-edge eco-friendly
                home solutions. Reduce your carbon footprint and save on energy
                costs while creating a healthier living environment.
              </p>
            </div>
            <div className="mb-8 grid gap-6 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              {[
                {
                  icon: Sun,
                  title: "Solar Power",
                  description: "Harness the sun's energy for electricity",
                },
                {
                  icon: Droplet,
                  title: "Water Saving",
                  description: "Efficient water management systems",
                },
                {
                  icon: Wind,
                  title: "Natural Ventilation",
                  description: "Improve air quality and reduce energy use",
                },
                {
                  icon: Leaf,
                  title: "Green Materials",
                  description: "Eco-friendly construction materials",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="size-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mb-8 rounded-lg bg-accent p-6">
              <h3 className="mb-4 text-xl font-semibold">
                What Our Clients Say
              </h3>
              <blockquote className="mb-4 italic text-muted-foreground">
                &quot;Transforming our home with eco-friendly solutions was the
                best decision we&apos;ve made.&quot;
              </blockquote>
              <p className="font-medium">- Sarah & Tom, Homeowners</p>
            </div>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              Explore Eco Solutions
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
