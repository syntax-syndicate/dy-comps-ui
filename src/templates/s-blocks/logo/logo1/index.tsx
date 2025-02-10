import Image from "next/image";

const partners = [
  { name: "Partner 1", url: "/logos/astro.svg", href: "https://astro.build/" },

  { name: "Partner 3", url: "/logos/vercel.svg", href: "https://vercel.com/" },
  { name: "Partner 4", url: "/logos/shadcn-ui.svg", href: "#" },
  { name: "Partner 5", url: "/logos/supabase.svg", href: "#" },
  { name: "Partner 6", url: "/logos/tailwind.svg", href: "#" },
];

export default function LogoGridSection() {
  return (
    <section className="bg-background px-4 py-24 text-foreground">
      <div className="container mx-auto max-w-[1200px]">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Part of the developer-favorite AI stack
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Use Pinecone with your favorite cloud provider, data sources,
            models, frameworks, and more.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-lg bg-secondary p-4 transition-transform hover:scale-105"
            >
              <a
                href={partner.href}
                className="absolute inset-0 flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${partner.name}'s website`}
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

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center text-lg font-medium text-primary hover:underline"
          >
            Explore integrations
            <svg
              className="ml-2 size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
