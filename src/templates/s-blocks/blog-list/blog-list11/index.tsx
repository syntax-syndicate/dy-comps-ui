import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function BlogList11() {
  const webinars = [
    {
      title:
        "Engaging Talent, Embracing Change: Uncover the Value of an Employer of Record",
      categories: ["Webinar", "Employer of record"],
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      title: "The Future of Work: Navigating Global Talent Acquisition",
      categories: ["Webinar", "Remote Work"],
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
  ];

  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-semibold text-foreground md:text-5xl lg:text-6xl">
            Webinars
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Explore our latest insights and expert discussions on key industry
            topics
          </p>
        </div>
        <div className="space-y-16 md:space-y-24">
          {webinars.map((webinar, index) => (
            <Link key={index} href="#" className="group block">
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div
                  className={`order-2 md:order-${index % 2 === 0 ? "1" : "2"}`}
                >
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                      {webinar.categories.map((category, catIndex) => (
                        <span
                          key={catIndex}
                          className="bg-primary/10 px-2 py-1 text-primary"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-foreground md:text-2xl lg:text-3xl">
                    {webinar.title}
                  </h3>
                  <div className="flex items-center text-primary">
                    <span className="font-semibold">Read more</span>
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
                <div
                  className={`order-1 md:order-${index % 2 === 0 ? "2" : "1"}`}
                >
                  <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={webinar.image}
                      alt={`${webinar.title} thumbnail`}
                      width={1280}
                      height={720}
                      className="h-full w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
