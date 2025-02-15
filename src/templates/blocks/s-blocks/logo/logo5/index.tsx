import Image from "next/image";

const partners = [
  { name: "Partner 1", url: "/logos/astro.svg", href: "https://astro.build/" },
  {
    name: "Partner 2",
    url: "logos/nextjs.svg",
    href: "https://nextjs.org/",
  },
  { name: "Partner 3", url: "/logos/vercel.svg", href: "https://vercel.com/" },
  { name: "Partner 4", url: "/logos/shadcn-ui.svg", href: "#" },
  { name: "Partner 5", url: "/logos/supabase.svg", href: "#" },
  { name: "Partner 6", url: "/logos/tailwind.svg", href: "#" },
];

export default function LogoGrid() {
  return (
    <section className="bg-background p-6">
      <h2 className="mb-6 text-center text-2xl font-bold text-foreground">
        Our Trusted Partners
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {partners.map((partner, index) => (
          <div key={index} className="flex items-center justify-center">
            <a
              href={partner.href}
              className="flex h-20 w-40 items-center justify-center rounded-md bg-secondary p-4 transition-colors hover:bg-secondary/80"
              aria-label={`Visit ${partner.name}'s website`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative h-full w-full">
                <Image
                  src={partner.url}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain p-2 dark:invert"
                  unoptimized={partner.url.startsWith("#")}
                />
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
