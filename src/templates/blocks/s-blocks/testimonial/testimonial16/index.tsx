"use client";

import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Just switched over to @Acme for all our team's project management needs. The intuitive interface and seamless collaboration features have boosted our productivity by 30%! #GameChanger",
    author: "Emily Chen",
    role: "Product Manager",
    likes: 142,
    retweets: 38,
    avatarUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 2,
    text: "Can't believe how much @Acme has streamlined our workflow. From task assignment to progress tracking, everything is so smooth now. Our team meetings are shorter and more productive!",
    author: "Alex Rodriguez",
    role: "Tech Lead",
    likes: 98,
    retweets: 22,
    avatarUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 3,
    text: "Huge fan of @Acme — saved hours on our latest project launch. The customizable dashboards and real-time updates keep everyone in sync. It's like having a virtual project manager!",
    author: "Sarah Johnson",
    role: "Marketing Director",
    likes: 215,
    retweets: 56,
    avatarUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 4,
    text: "Shoutout to @Acme for simplifying our remote work setup. The video conferencing integration and shared document features make collaboration feel like we're all in the same room. #RemoteWorkWin",
    author: "Michael Lee",
    role: "HR Manager",
    likes: 76,
    retweets: 19,
    avatarUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 5,
    text: "I've been using @Acme for the past month and I'm blown away. The AI-powered task prioritization has helped me focus on what truly matters. My productivity has skyrocketed!",
    author: "Olivia Taylor",
    role: "Freelance Designer",
    likes: 183,
    retweets: 41,
    avatarUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 6,
    text: "Amazing experience with @Acme for managing our startup's growth. The scalability and analytics features provide invaluable insights. We've cut meeting times in half and doubled our output!",
    author: "David Patel",
    role: "Startup Founder",
    likes: 129,
    retweets: 34,
    avatarUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 7,
    text: "Thanks to @Acme for the fantastic customer support. They didn't just solve our issue, but also provided training to prevent future problems. That's what I call going above and beyond!",
    author: "Rachel Kim",
    role: "Customer Success Manager",
    likes: 92,
    retweets: 25,
    avatarUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 8,
    text: "I've been using @Acme for a few months now, and it's transformed how we handle client projects. The client portal feature has improved communication and client satisfaction. Highly recommended!",
    author: "Thomas Brown",
    role: "Agency Owner",
    likes: 167,
    retweets: 45,
    avatarUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-gradient-to-b from-primary/5 to-background py-32">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="max-w-md bg-clip-text text-3xl font-bold lg:text-[42px] lg:leading-tight">
              Transforming Workflows, One Team at a Time
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Don&apos;t just take our word for it. See how Acme is
              revolutionizing work for teams across industries.
            </p>
          </div>
          <div>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-2xl font-bold text-foreground">
                Real Stories, Real Impact
              </p>
              <Badge variant="outline" className="text-sm">
                Live Feed
              </Badge>
            </div>
            <Separator className="mb-4" />
            {testimonials.map((testimonial) => (
              <TestimonialItem key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialItem({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className="select-none">
        <div
          className="cursor-pointer rounded-lg p-4 transition-colors hover:bg-muted"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div
            className={`overflow-hidden transition-all duration-500 ${
              isExpanded ? "max-h-96" : "max-h-24"
            }`}
          >
            <div className="flex gap-3">
              <Avatar className="size-12 border-2 border-primary">
                <AvatarImage
                  src={testimonial.avatarUrl}
                  alt={testimonial.author}
                />
                <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p
                  className={`text-lg font-medium ${
                    isExpanded ? "" : "line-clamp-2"
                  }`}
                >
                  {testimonial.text.split("@Acme").map((part, index) => (
                    <span key={index}>
                      {part}
                      {index < testimonial.text.split("@Acme").length - 1 && (
                        <a
                          href="#"
                          className="mx-1 font-semibold text-primary hover:underline"
                        >
                          @Acme
                        </a>
                      )}
                    </span>
                  ))}
                </p>
                {isExpanded && (
                  <div className="mt-2">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <span>❤ {testimonial.likes}</span>
              <span>🔁 {testimonial.retweets}</span>
            </div>
            {isExpanded ? (
              <ChevronUp className="size-5" />
            ) : (
              <ChevronDown className="size-5" />
            )}
          </div>
        </div>
      </div>
      <Separator className="my-2" />
    </>
  );
}
