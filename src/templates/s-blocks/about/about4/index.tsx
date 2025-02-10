import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function About4() {
  return (
    <section className="py-24">
      <div className="container flex flex-col gap-12">
        {/* Header Section */}
        <div className="mx-auto flex max-w-screen-md flex-col gap-6 pb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Welcome to the Jungle{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Hear Us Rumble
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Meet our team, discover our values, and learn how we balance work,
            life, and everything in between.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-4 rounded-xl bg-muted/50 p-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg transition-transform hover:scale-[1.02]"
            >
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt={`Team member ${index + 1}`}
                width={400}
                height={400}
                className="aspect-square w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Vision & Founders Section */}
        <div className="mx-auto grid w-full max-w-screen-xl gap-12 md:grid-cols-2">
          {/* Vision Section */}
          <div className="space-y-6 rounded-xl border bg-card p-8">
            <h2 className="text-3xl font-semibold tracking-tight">
              Our <span className="text-primary">Vision</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                For years, building custom software has remained challenging.
                Today, visual builders exist, but tailored solutions still
                require technical expertise and significant time investment.
              </p>
              <p>
                This challenge affects both businesses and individuals. What if
                you could create custom software without writing code? What if
                you could build your own tools effortlessly?
              </p>
              <p>
                Our platform makes this possible! Design layouts and create
                functionality—no coding required. We believe everyone should be
                empowered to build their own solutions, regardless of technical
                background.
              </p>
            </div>
          </div>

          {/* Founders Section */}
          <div className="space-y-12">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <Image
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    alt={`Founder ${index + 1}`}
                    width={400}
                    height={400}
                    className="aspect-square w-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="space-y-6 rounded-xl border bg-card p-8">
              <h2 className="text-3xl font-semibold tracking-tight">
                Our <span className="text-primary">Founders</span>
              </h2>
              <p className="text-muted-foreground">
                [Company Name] was founded by three visionaries who recognized
                the need for more accessible web tools. Combining expertise in
                software development, UX design, and business strategy, they
                created a platform that empowers users to build solutions
                effortlessly.
              </p>
              <Button asChild className="mt-4">
                <Link href="/about-founders">Meet the Founders</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-auto flex w-full flex-col items-center justify-between gap-6 rounded-xl bg-muted p-8 text-center md:flex-row md:text-left">
          <h3 className="text-2xl font-semibold">Learn More About Our Team</h3>
          <Button size="lg" variant="outline">
            Meet the Team
          </Button>
        </div>
      </div>
    </section>
  );
}
