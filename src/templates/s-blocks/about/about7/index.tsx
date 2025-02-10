import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About7() {
  return (
    <div className="bg-background py-16 text-foreground">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col items-center gap-6 py-8">
          <div className="flex flex-col items-center gap-2">
            <Image src="/logo.svg" height={100} width={100} alt="logo" />
            <span className="max-w-4xl text-center text-7xl font-bold">
              Welcome to the <span className="text-primary">BlockParty.</span>
            </span>
          </div>
          <div className="flex gap-6">
            <Button variant="link" asChild>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-primary"
              >
                Join the party
                <ExternalLink className="size-4" />
              </Link>
            </Button>
            <Button variant="link" asChild>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-primary"
              >
                Let&apos;s celebrate together →
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Vibrant street party with people dancing and colorful decorations"
            fill
            className="object-cover"
          />
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <section className="rounded-lg bg-accent p-6">
            <h2 className="mb-6 text-2xl font-bold">Overview</h2>
            <p className="mb-8 text-muted-foreground">
              Since 2015, BlockParty has been revolutionizing the way
              communities come together to celebrate. Our innovative block party
              planning platform, festive decoration kits, and neighborhood
              engagement tools have made BlockParty synonymous with
              unforgettable street festivals, strengthened community bonds, and
              creating the best local celebrations in town.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { name: "Event Planning", category: "services" },
                { name: "Decoration Kits", category: "products" },
                { name: "Community Engagement", category: "social" },
                { name: "Local Vendor Network", category: "partnerships" },
                { name: "Permit Assistance", category: "legal" },
                { name: "Entertainment Booking", category: "services" },
                {
                  name: "Sustainability Initiatives",
                  category: "eco-friendly",
                },
                { name: "Block Party App", category: "technology" },
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="size-2 rounded-full bg-primary" />
                  <span>{service.name}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Background</h2>
              <p className="text-muted-foreground">
                By 2023, BlockParty had facilitated over 5,000 neighborhood
                celebrations across the country. While our reputation for
                bringing communities together was strong, our digital presence
                needed a refresh. Although our target market of community-minded
                individuals aged 25-45 was as engaged (and as enthusiastic) as
                ever, we had outgrown our simple website and basic social media
                approach.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold">The challenge</h2>
              <p className="text-muted-foreground">
                BlockParty&apos;s new website would set the foundation for all
                future community engagement initiatives, so we needed a platform
                that could showcase our expanded services and vision as soon as
                possible. A tight timeline, coupled with our commitment to
                representing the diverse communities we serve, meant that
                collaborative input from our network of local organizers was
                crucial.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
