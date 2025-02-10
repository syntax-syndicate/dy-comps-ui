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
];

export default function Logo4() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-4 text-4xl font-bold tracking-tight">
          Our Trusted Partners
        </h2>
        <p className="mb-12 text-xl text-muted-foreground">
          We&apos;re proud to work with these amazing companies
        </p>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex aspect-square items-center justify-center rounded-lg bg-muted p-6"
            >
              <a
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-full w-full"
                aria-label={`Visit ${partner.name}'s website`}
              >
                <Image
                  src={partner.url}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain p-2 dark:invert"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
