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
    id: "logo-7",
    description: "Logo 7",
    image: "/logos/tailwind.svg",
  },
  {
    id: "logo-8",
    description: "Logo 8",
    image: "/logos/vercel.svg",
  },
];

export default function Logo9() {
  return (
    <div className="w-full bg-accent py-16">
      <div className="container">
        <div className="flex">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center justify-center px-8"
            >
              <Image
                src={logo.image}
                alt={logo.description}
                width={140}
                height={40}
                className="h-8 w-auto dark:invert"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
