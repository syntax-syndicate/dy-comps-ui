import Image from "next/image";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar";
export default function About27() {
  const teamMembers = [
    {
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      alt: "Team member in dramatic lighting",
    },
    {
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      alt: "Team member in tan blazer",
    },
    {
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      alt: "Team member in side profile",
    },
    {
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      alt: "Team member in striped sweater",
    },
  ];

  return (
    <div className="container py-16">
      <div className="space-y-16">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Who Are We? <span className="text-primary">/About Us</span>
          </h1>
          <p className="max-w-[800px] text-lg text-muted-foreground">
            Generating random paragraphs can be an excellent way for writers to
            get their creative flow going at the beginning of the day. The
            writer has no idea what topic the random paragraph will be about
            when it appears.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <Image
                src={member.image}
                alt={member.alt}
                width={300}
                height={400}
                className="aspect-[3/4] h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-4 rounded-lg bg-accent p-6">
            <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
            <p className="text-muted-foreground">
              We believe in creating meaningful digital experiences that inspire
              and connect. Our mission is to blend creativity with technology,
              crafting solutions that not only meet today&apos;s needs but
              anticipate tomorrow&apos;s challenges. Through collaborative
              innovation and unwavering dedication to quality, we strive to make
              a lasting impact in the digital landscape.
            </p>
            <Card className="mt-6">
              <CardContent className="flex items-center gap-4 p-6">
                <Avatar className="size-16">
                  <AvatarImage
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    alt="CEO"
                  />
                  <AvatarFallback>CEO</AvatarFallback>
                </Avatar>
                <div>
                  <blockquote className="text-lg font-semibold">
                    Our goal is to revolutionize the digital world, one
                    innovation at a time.
                  </blockquote>
                  <p className="mt-2 text-sm text-muted-foreground">
                    - Jane Doe, CEO
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute bottom-6 left-6 rounded-lg bg-background p-4 shadow">
              <p className="font-semibold">Meet Our Team Of Experts</p>
              <p className="text-sm text-muted-foreground">
                With over 10 years of experience
              </p>
            </div>

            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Featured team member"
              width={600}
              height={800}
              className="aspect-video h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
