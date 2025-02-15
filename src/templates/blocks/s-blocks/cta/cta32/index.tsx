import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { name: "A/B Testing", category: "development" },
  { name: "UX/UI design", category: "design" },
  { name: "Brand development", category: "marketing" },
  { name: "Front-end development", category: "development" },
  { name: "Craft CMS development", category: "development" },
  { name: "Copywriting", category: "content" },
  { name: "Graphic design", category: "design" },
  { name: "SEO", category: "marketing" },
];

export default function CallToAction32() {
  return (
    <div className="min-h-screen bg-background py-16 text-foreground">
      <div className="container mx-auto flex flex-col items-center gap-6 py-8">
        <div className="flex items-center gap-2">
          <Image src={"/logo.svg"} width={64} height={64} alt="test" />
          <span className="text-2xl font-bold">DY-Comps</span>
        </div>
        <div className="flex gap-6">
          <Button variant="link" asChild>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-primary"
            >
              Visit the website
              <ExternalLink className="size-4" />
            </Link>
          </Button>
          <Button variant="link" asChild>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-primary"
            >
              Let&apos;s work together →
            </Link>
          </Button>
        </div>
      </div>

      <div className="container mx-auto space-y-12">
        <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Dual monitor setup showing code and landscape"
            fill
            className="object-cover"
          />
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <section>
            <h2 className="mb-6 text-2xl font-bold">Overview</h2>
            <p className="mb-8 text-muted-foreground">
              Since 1984, DY-Comps has been serving up grab-and-go frozen daiquiris
              from its stores across the U.S. Its signature drinks, souvenir
              cups, and discounted refills have made DY-Comps synonymous with great
              music, good vibes, and starting the best party in town.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service, index) => (
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
                Come 2024, DY-Comps had expanded to over 40 locations. The
                brand&apos;s digital presence existed, but it lacked strategy.
                Although its target market of 21-30 year-olds was as engaged
                (and as loyal) as ever, the brand had outgrown its amateur look
                of the early &apos;00s and the family-owned business vibes. It
                needed to show it was a strong brand moving in a new direction -
                and it was heading there fast.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold">The challenge</h2>
              <p className="text-muted-foreground">
                DY-Comps&apos;s new website would set the tone for all future
                marketing initiatives, so the brand needed something to showcase
                its new identity as soon as possible. A tight timeline, paired
                with the fact that the new management team were still exploring
                how to shift the brand from what it used to be to what it needed
                to be, meant that working collaboratively was a must.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
