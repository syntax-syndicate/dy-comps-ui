import React from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialShowcase() {
  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-background py-24 sm:py-32">
      <div className="container">
        <div className="flex flex-col items-start gap-12 sm:flex-row sm:items-center sm:justify-between sm:gap-16">
          <div className="flex flex-1 flex-col items-start text-left">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Voices of Success
            </h2>
            <p className="mb-8 max-w-2xl text-muted-foreground sm:text-lg">
              Discover how our innovative solutions have transformed businesses
              across industries. Our clients&apos; success stories speak volumes
              about our commitment to excellence and cutting-edge technology.
            </p>
            <Button variant="default">Explore Case Studies</Button>
          </div>
          <div className="flex flex-col gap-8 sm:flex-row lg:gap-12">
            <CompanyRating name="TechNova" rating={4.9} />
            <CompanyRating name="EcoSmart" rating={4.8} />
          </div>
        </div>
      </div>
      <TestimonialGrid />
      <div className="pointer-events-none absolute bottom-0 left-0 hidden w-full from-background to-transparent sm:block sm:h-48 sm:bg-gradient-to-t"></div>
    </section>
  );
}

function CompanyRating({ name, rating }: { name: string; rating: number }) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={`https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg`}
        alt={`${name} logo`}
        width={120}
        height={24}
        className="mb-4 dark:invert"
      />
      <div className="flex items-center gap-2">
        <div className="text-sm font-semibold text-foreground">
          {rating.toFixed(1)}
        </div>
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-4 fill-primary text-primary" />
          ))}
        </div>
      </div>
    </div>
  );
}

function TestimonialGrid() {
  const testimonials = [
    {
      text: "The AI-powered analytics platform revolutionized our decision-making process. We've seen a 40% increase in operational efficiency since implementation.",
      name: "Sarah Chen",
      company: "InnovateTech Solutions",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      text: "Integrating this solution was seamless. Our team's productivity skyrocketed, and we're now able to deliver projects 30% faster.",
      name: "Marcus Rodriguez",
      company: "Agile Dynamics",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      text: "The customer support team is exceptional. They've been instrumental in helping us leverage the full potential of the platform.",
      name: "Aisha Patel",
      company: "Global Synergy Corp",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      text: "This product has given us a competitive edge in the market. Our client satisfaction rates have never been higher.",
      name: "Liam O'Connor",
      company: "Precision Systems",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      text: "The scalability of the platform is impressive. It's grown with our business, from startup to enterprise, without missing a beat.",
      name: "Elena Volkov",
      company: "Quantum Innovations",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      text: "We've cut our data processing time by 60% and improved accuracy by 35%. The ROI has been phenomenal.",
      name: "Jamal Washington",
      company: "DataDrive Analytics",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      text: "The AI recommendations have helped us uncover insights we never knew existed in our data. It's been a game-changer for our strategy.",
      name: "Yuki Tanaka",
      company: "FutureTech Industries",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      text: "Our cybersecurity posture has never been stronger. The real-time threat detection has saved us from several potential breaches.",
      name: "Olivia Greenwood",
      company: "SecureNet Solutions",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      text: "The platform's flexibility allowed us to create custom workflows that perfectly fit our unique business processes.",
      name: "Rafael Morales",
      company: "Adaptive Systems Inc.",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
  ];

  return (
    <div className="container mt-16 sm:mt-24">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({
  text,
  name,
  company,
  image,
}: {
  text: string;
  name: string;
  company: string;
  image: string;
}) {
  return (
    <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
      <p className="mb-4 flex-grow text-sm text-card-foreground">
        &quot;{text}&quot;
      </p>
      <div className="flex items-center gap-3">
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          className="rounded-full border-2 border-primary"
        />
        <div>
          <p className="text-sm font-medium text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{company}</p>
        </div>
      </div>
    </div>
  );
}
