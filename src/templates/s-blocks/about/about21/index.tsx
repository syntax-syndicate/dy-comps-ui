import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Lightbulb,
  Users,
  Target,
  Zap,
} from "lucide-react";

export default function About21() {
  const features = [
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "Cutting-edge technology to solve complex problems",
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "Working closely with clients to ensure success",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on achieving measurable results",
    },
    {
      icon: Zap,
      title: "Rapid Delivery",
      description: "Efficient processes for faster time-to-market",
    },
  ];

  return (
    <section className="bg-background py-16">
      <div className="container">
        <div className="mb-16 space-y-4 text-center">
          <h1 className="text-6xl font-bold tracking-tighter">
            Who we are &{" "}
            <span className="text-6xl text-primary">What we do</span>
          </h1>
          <p className="mx-auto max-w-[800px] text-xl text-muted-foreground">
            We are designers, developer, and testers. We provide best design
            solution to our clients. Working perfectly with our clients.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Modern skyscrapers with sunlight"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground">
              As technology disrupts all established norms – bringing complexity
              and uncertainty, alongside new opportunities to improve the world
              – our mission is to help businesses harness technological change
              to successfully deliver innovation. We help our clients gain a
              competitive advantage and improve the lives of people around the
              globe.
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Team collaborating in office"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <h2 className="text-2xl font-bold">Our Story</h2>
            <p className="text-muted-foreground">
              As technology disrupts all established norms – bringing complexity
              and uncertainty, alongside new opportunities to improve the world
              – our mission is to help businesses harness technological change
              to successfully deliver innovation.
            </p>
          </div>
        </div>
      </div>
      <div className="container py-16">
        <Separator className="bg-border" />
      </div>
      <div className="container py-16 md:px-6">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter">
          Our Approach
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-6 flex size-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                  <feature.icon className="size-6 text-primary" />
                </div>

                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="container py-16 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Join Our <span className="text-primary">Innovative</span> Team
            </h2>
            <p className="text-xl text-muted-foreground">
              We&apos;re always looking for passionate individuals who are ready
              to push the boundaries of technology and creativity. If
              you&apos;re excited about shaping the future of digital solutions,
              we want to hear from you.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg">View Open Positions</Button>
              <Button size="lg" variant="outline">
                Learn About Our Culture
              </Button>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Team working together in a modern office"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
      <div className="container py-8 md:px-6">
        <Separator className="bg-border" />
      </div>
      <div className="container py-16 md:px-6">
        <div className="mb-8 flex justify-center space-x-6">
          <a href="#" className="text-muted-foreground hover:text-primary">
            <Facebook className="size-6" />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary">
            <Twitter className="size-6" />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary">
            <Instagram className="size-6" />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary">
            <Linkedin className="size-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary">
            <Github className="size-6" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
        <div className="text-center">
          <p className="text-lg text-muted-foreground">
            Empowering innovation through technology. <br />
            Join us in shaping the future of digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
