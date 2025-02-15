import Image from "next/image";
import {
  Award,
  Users,
  Lightbulb,
  Heart,
  Star,
  Target,
  Book,
  Rocket,
  Send,
  Code,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About11() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto py-16">
        <h1 className="mb-4 text-center text-5xl font-bold md:text-6xl lg:text-7xl">
          <span className="text-primary">About</span> Me
        </h1>
        <p className="mb-20 text-center text-xl text-muted-foreground">
          Passionate Designer & Developer
        </p>

        <div className="grid gap-12 md:gap-16">
          {/* First Row */}
          <div className="grid gap-8 rounded-lg bg-accent p-6 md:grid-cols-2 md:gap-12">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Professional portrait"
                className="rounded-lg object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex items-center">
              <div className="space-y-6">
                <p className="flex items-start gap-4 text-lg text-muted-foreground">
                  <Award className="mt-1 size-6 flex-shrink-0 text-primary" />
                  <span>
                    Award-winning designer, recipient of the Awwward in October
                    2024 for an innovative IDE website.
                  </span>
                </p>
                <p className="flex items-start gap-4 text-lg text-muted-foreground">
                  <Users className="mt-1 size-6 flex-shrink-0 text-primary" />
                  <span>
                    Aiming to positively impact 1,000,000 people before turning
                    30.
                  </span>
                </p>
                <p className="flex items-start gap-4 text-lg text-muted-foreground">
                  <Star className="mt-1 size-6 flex-shrink-0 text-primary" />
                  <span>
                    Specialized in creating intuitive user interfaces that
                    bridge complex functionality and user-friendly experiences.
                  </span>
                </p>
                <p className="flex items-start gap-4 text-lg text-muted-foreground">
                  <Code className="mt-1 size-6 flex-shrink-0 text-primary" />
                  <span>
                    Proficient in multiple programming languages and frameworks,
                    always eager to learn more.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="order-2 flex items-center md:order-1">
              <div className="space-y-6">
                <p className="flex items-start gap-4 text-lg text-muted-foreground">
                  <Lightbulb className="mt-1 size-6 flex-shrink-0 text-primary" />
                  <span>
                    Constantly ideating and building new projects, even when not
                    actively designing.
                  </span>
                </p>
                <p className="flex items-start gap-4 text-lg text-muted-foreground">
                  <Heart className="mt-1 size-6 flex-shrink-0 text-primary" />
                  <span>
                    Passionate about leaving a positive mark on the world
                    through innovative design and technology.
                  </span>
                </p>

                <p className="flex items-start gap-4 text-lg text-muted-foreground">
                  <Target className="mt-1 size-6 flex-shrink-0 text-primary" />
                  <span>
                    Committed to pixel-perfect designs and clean, efficient,
                    scalable code.
                  </span>
                </p>
                <p className="flex items-start gap-4 text-lg text-muted-foreground">
                  <Zap className="mt-1 size-6 flex-shrink-0 text-primary" />
                  <span>
                    Quick learner, adapting to new technologies and design
                    trends with enthusiasm.
                  </span>
                </p>
              </div>
            </div>
            <div className="relative order-1 aspect-video overflow-hidden md:order-2">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Creative portrait"
                className="rounded-lg object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Third Row */}
          <div className="relative aspect-[21/9] overflow-hidden">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Thoughtful portrait"
              className="rounded-lg object-cover"
              fill
              sizes="100vw"
            />
          </div>

          {/* Additional Content */}
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">My Approach</h2>
              <p className="flex items-start gap-4 text-lg text-muted-foreground">
                <Book className="mt-1 size-6 flex-shrink-0 text-primary" />
                <span>
                  Continuous learning and staying updated with the latest design
                  trends and technologies.
                </span>
              </p>
              <p className="flex items-start gap-4 text-lg text-muted-foreground">
                <Rocket className="mt-1 size-6 flex-shrink-0 text-primary" />
                <span>
                  Pushing the boundaries of what&apos;s possible in web design
                  and development.
                </span>
              </p>
            </div>
            <div className="space-y-6 rounded-lg bg-accent p-6">
              <h2 className="text-2xl font-semibold">Let&apos;s Collaborate</h2>
              <p className="text-lg text-muted-foreground">
                I&apos;m always open to new opportunities and exciting projects.
                If you have an idea or need a creative problem-solver,
                let&apos;s connect and bring your vision to life.
              </p>
              <Button className="w-full" size="lg">
                <Send className="mr-2 size-4" /> Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
