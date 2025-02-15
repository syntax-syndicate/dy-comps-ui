import Image from "next/image";

export default function Feature53() {
  const features = [
    { id: "01", name: "Next.js", logo: "logos/nextjs.svg" },
    { id: "02", name: "Shadcn/ui", logo: "/logos/shadcn-ui.svg" },
    { id: "03", name: "Tailwind", logo: "/logos/tailwind.svg" },
    { id: "04", name: "Vercel", logo: "/logos/vercel.svg" },
  ];

  return (
    <section className="py-32">
      <div className="container">
        <div className="grid overflow-hidden rounded-lg border bg-accent sm:grid-cols-2 md:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`border border-b border-l py-4 hover:bg-primary/20 ${
                index % 2 === 1 ? "border-r" : ""
              } md:even:border-r-0 md:[&:nth-child(4n)]:border-r`}
            >
              <div className="relative flex min-h-[150px] flex-col md:mx-4 lg:min-h-[280px] lg:pl-8">
                <Image
                  src={feature.logo}
                  alt={`${feature.name} logo`}
                  width={200}
                  height={200}
                  className="absolute inset-0 m-auto max-h-12 max-w-[60%] object-contain object-center pt-5 dark:invert md:max-w-[70%]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
