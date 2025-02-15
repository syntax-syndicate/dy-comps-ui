import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="bg-background px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-12 text-4xl font-bold text-foreground">
          Hear From Our Customers
        </h2>

        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          <Card className="bg-card">
            <CardContent className="p-6">
              <blockquote className="space-y-4">
                <p className="text-lg text-card-foreground">
                  I just wanted to share a quick note and let you know that you
                  guys do a really good job. I&apos;m glad I decided to work
                  with you. It&apos;s really great how easy your websites are to
                  update and manage. I never have any problem at all.
                </p>
                <p className="text-lg text-card-foreground">
                  My new site is so much faster and easier to work with than my
                  old site. It used to take me an hour or more to update a page
                  and I would still sometimes screw things up.
                </p>
                <footer className="flex items-center gap-4 pt-4">
                  <div>
                    <p className="font-semibold text-foreground">
                      Andres Berlin
                    </p>
                    <p className="text-sm text-muted-foreground">
                      VP, Talent Management
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <Image
                        src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                        alt="Twitter Inc Logo"
                        width={24}
                        height={24}
                        className="rounded"
                      />
                      <span className="text-sm text-muted-foreground">
                        Twitter Inc.
                      </span>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </CardContent>
          </Card>

          <div className="relative aspect-square lg:aspect-auto">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Testimonial image"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 items-center justify-center gap-8 md:grid-cols-3 lg:grid-cols-6">
          {[
            {
              name: "Adidas",
              logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
            },
            {
              name: "MINI",
              logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
            },
            {
              name: "Chanel",
              logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
            },
            {
              name: "GS1",
              logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
            },
            {
              name: "Twitter",
              logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
            },
            {
              name: "Toyota",
              logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
            },
          ].map((brand) => (
            <div key={brand.name} className="flex items-center justify-center">
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={120}
                height={40}
                className="h-auto max-w-[120px] opacity-50 transition-opacity hover:opacity-75"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
