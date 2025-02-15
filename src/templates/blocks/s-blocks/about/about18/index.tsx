import { Button } from "@/components/ui/button";
import { BookOpen, Brain, Lightbulb } from "lucide-react";
import Image from "next/image";

export default function About18() {
  const performances = [
    {
      icon: BookOpen,
      title: "Extraordinary Performance",
      description:
        "Our comprehensive curriculum ensures thorough understanding of fundamental concepts through practical application and real-world examples.",
    },
    {
      icon: Brain,
      title: "Extraordinary Performance",
      description:
        "Interactive learning methods and personalized attention help students develop critical thinking and problem-solving skills.",
    },
    {
      icon: Lightbulb,
      title: "Extraordinary Performance",
      description:
        "Creative approaches to education that make complex topics accessible and engaging for all learning styles.",
    },
  ];

  return (
    <section className="bg-background py-12 md:py-24">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left Column: Text and Button */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                How Many Letters
                <br />
                <span className="text-primary">In the Alphabet?</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                There are currently 26 letters in the English alphabet, but
                there was once a 27th letter. In fact, it still exists on
                computer keyboards. The 27th letter was &quot;&&quot; and
                referred to as an &quot;ampersand&quot; or more commonly.
              </p>
              <Button className="bg-primary text-primary-foreground" size="lg">
                Explore More
              </Button>
            </div>
          </div>

          {/* Right Column: Image with Floating Card */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Student studying at desk"
                className="rounded-lg object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Floating Card on Image */}
              <div className="absolute bottom-4 left-4 flex flex-col rounded-lg bg-background p-4 shadow-lg sm:bottom-6 sm:left-6 sm:p-6">
                <span className="text-lg font-semibold sm:text-xl">
                  Learning Made Simple
                </span>
                <span className="max-w-72 text-sm text-muted-foreground sm:text-base">
                  Our innovative teaching methods make education accessible
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Section */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {performances.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="flex size-12 items-center justify-center rounded-full border-2 border-primary/50 bg-primary/10">
                  <item.icon className="size-6 text-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
