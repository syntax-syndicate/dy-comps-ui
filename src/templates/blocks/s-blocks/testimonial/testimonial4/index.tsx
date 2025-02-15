import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
  avatarSrc?: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  rating,
  avatarSrc,
}) => (
  <Card className="transition-all duration-300 hover:shadow-lg">
    <CardContent className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`size-5 ${
                i < rating ? "fill-yellow-500 text-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <Badge variant="secondary" className="text-xs">
          Verified
        </Badge>
      </div>
      <div className="italic leading-7 text-foreground">
        <q>{quote}</q>
      </div>
      <div className="flex items-center pt-4">
        <div className="flex gap-4 leading-5">
          <Avatar className="size-10 border-2 border-primary">
            {avatarSrc ? (
              <AvatarImage src={avatarSrc} alt={author} />
            ) : (
              <AvatarFallback>{author[0]}</AvatarFallback>
            )}
          </Avatar>
          <div className="text-sm">
            <p className="font-semibold">{author}</p>
            <p className="text-muted-foreground">{role}</p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function TestimonialSection() {
  return (
    <section className="bg-gradient-to-b from-background to-primary/5 py-16">
      <div className="container">
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 items-stretch gap-x-0 gap-y-4 lg:grid-cols-3 lg:gap-4">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Team collaboration"
              width={384}
              height={288}
              className="h-72 w-full rounded-md object-cover shadow-md lg:h-auto"
            />
            <Card className="col-span-2 flex items-center justify-center bg-accent p-6">
              <div className="flex flex-col gap-4">
                <q className="text-xl font-medium lg:text-3xl">
                  This platform didn&apos;t just streamline our hiring process;
                  it revolutionized our entire approach to team building.
                  We&apos;ve seen a 200% increase in quality applicants and cut
                  our time-to-hire in half. It&apos;s not just a tool; it&apos;s
                  our secret weapon in the talent war.
                </q>
                <div className="flex flex-col items-start">
                  <p className="font-bold">Dr. Amelia Quantum</p>
                  <p className="text-muted-foreground">
                    Chief Innovation Officer, FutureTech Dynamics
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <TestimonialCard
              quote="The AI-powered matching algorithm is mind-blowing. We found candidates who not only fit our technical requirements but also aligned perfectly with our company culture. It's like the platform read our minds!"
              author="Zara Codesmith"
              role="Lead Developer, ByteBurst Studios"
              rating={5}
              avatarSrc="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            />
            <TestimonialCard
              quote="As a startup, every hire is crucial. This platform's data-driven insights helped us make informed decisions quickly. We built a dream team in record time, all while staying within our budget."
              author="Leo Venturini"
              role="Founder, NexGen Innovations"
              rating={4}
            />
            <TestimonialCard
              quote="The diversity of talent we've accessed is unparalleled. We've built a global team of rockstars from backgrounds we never thought we could reach. Our projects have taken on a whole new dimension of creativity."
              author="Aisha Brightstar"
              role="Global Talent Director, Cosmos Creations"
              rating={5}
              avatarSrc="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
