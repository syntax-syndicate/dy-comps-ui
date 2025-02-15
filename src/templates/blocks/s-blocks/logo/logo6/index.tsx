"use client";

import Image from "next/image";

const logos = [
  {
    id: "logo-1",
    description: "Logo 1",
    image: "/logos/astro.svg",
  },
  {
    id: "logo-5",
    description: "Logo 5",
    image: "/logos/shadcn-ui.svg",
  },
  {
    id: "logo-6",
    description: "Logo 6",
    image: "/logos/supabase.svg",
  },

  {
    id: "logo-8",
    description: "Logo 8",
    image: "/logos/vercel.svg",
  },
];

export default function Logo6() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="mb-8 text-pretty text-2xl font-bold md:mb-0 md:w-1/3 lg:text-4xl">
            Trusted by these companies
          </h2>
          <div className="md:w-2/3">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
              {logos.map((logo) => (
                <div key={logo.id} className="flex items-center justify-center">
                  <Image
                    src={logo.image}
                    alt={logo.description}
                    width={200}
                    height={48}
                    className="h-12 w-auto dark:invert"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
