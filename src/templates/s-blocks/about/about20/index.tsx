"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Component() {
  const avatars = [
    {
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      name: "JD",
      position: "rotate-[45deg] -top-4 left-1/2 -translate-x-1/2",
    },
    {
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      name: "AB",
      position: "rotate-[135deg] -right-4 top-1/2 -translate-y-1/2",
    },
    {
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      name: "CD",
      position: "rotate-[225deg] -bottom-4 left-1/2 -translate-x-1/2",
    },
    {
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      name: "EF",
      position: "rotate-[-45deg] -left-4 top-1/2 -translate-y-1/2",
    },
  ];

  return (
    <section className="container py-8 md:py-16">
      <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
        <div className="space-y-6 md:space-y-8">
          {["Mission", "Projects", "Mindset"].map((title, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                Our <span className="text-primary">{title}</span>
              </h2>
              <p className="mt-2 text-sm text-muted-foreground md:mt-4 md:text-base">
                {title === "Mission" &&
                  "We're dedicated to revolutionizing the digital landscape. Our goal is to transform visionary ideas into impactful realities, creating solutions that resonate and innovate."}
                {title === "Projects" &&
                  "From disruptive startups to enterprise reinventions, we push boundaries and exceed expectations. We build digital ecosystems that drive growth and inspire change."}
                {title === "Mindset" &&
                  "Innovation is our core. We foster curiosity and out-of-the-box thinking, always aiming to create transformative, future-proof solutions that challenge the status quo."}
              </p>
            </div>
          ))}
        </div>
        <div className="relative mt-8 flex items-center justify-center lg:mt-0">
          <div className="relative h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96">
            <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-primary/20" />
            <div className="absolute inset-4 rounded-full border-[3px] border-primary/40" />
            <div className="absolute inset-8 rounded-full border-[3px] border-primary/60" />
            <div className="absolute inset-12 rounded-full border-[3px] border-primary/80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold sm:text-4xl md:text-5xl">
                  99%
                </div>
                <div className="text-xs text-muted-foreground sm:text-sm">
                  Customer Satisfaction
                </div>
              </div>
            </div>
            {avatars.map((avatar, index) => (
              <div
                key={index}
                className={`absolute rounded-full bg-accent p-1 sm:p-2 ${avatar.position}`}
              >
                <Avatar className="size-12 border-2 border-background sm:h-16 sm:w-16 md:h-20 md:w-20">
                  <AvatarImage
                    src={avatar.image}
                    alt={`Team member ${avatar.name}`}
                  />
                  <AvatarFallback>{avatar.name}</AvatarFallback>
                </Avatar>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
