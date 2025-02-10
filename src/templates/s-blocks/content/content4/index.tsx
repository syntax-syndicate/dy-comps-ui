import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function Content4() {
  return (
    <section className="bg-background py-20">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-4 text-base font-medium">
            Our Story
          </Badge>
          <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl">
            Empowering Distributed Teams to Thrive
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We&apos;re on a mission to revolutionize how remote teams
            collaborate and achieve success in today&apos;s dynamic work
            environment.
          </p>
        </div>

        <div className="mt-16 space-y-12 md:mt-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Vision
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  We envision a future where geographical boundaries don&apos;t
                  limit talent or collaboration. Our platform is designed to
                  empower remote teams with the tools they need to connect,
                  communicate, and create—seamlessly and efficiently.
                </p>
                <p className="text-lg">
                  We believe that the right technology can unlock the full
                  potential of remote work, fostering innovation and driving
                  exceptional results. We&apos;re committed to building that
                  technology and making it accessible to teams of all sizes.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Team collaboration"
                width={1280}
                height={800}
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center rounded-xl border-2 border-primary bg-gradient-to-t from-primary/80 via-primary/0 to-primary/0 p-8"></div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Impact by the Numbers
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <h3 className="text-4xl font-bold tracking-tighter text-foreground">
                  $200M+
                </h3>
                <p className="text-sm text-muted-foreground">Funding Secured</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold tracking-tighter text-foreground">
                  50K+
                </h3>
                <p className="text-sm text-muted-foreground">
                  Businesses Powered
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold tracking-tighter text-foreground">
                  2.5M+
                </h3>
                <p className="text-sm text-muted-foreground">
                  Partnerships Forged
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold tracking-tighter text-foreground">
                  500M+
                </h3>
                <p className="text-sm text-muted-foreground">
                  Opportunities Created
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
