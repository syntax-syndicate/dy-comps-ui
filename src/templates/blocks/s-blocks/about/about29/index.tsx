import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Paintbrush, Code, TestTube } from "lucide-react";

export default function About29() {
  const teamFeatures = [
    {
      icon: Paintbrush,
      title: "Expert designers",
      description: "Crafting beautiful interfaces",
    },
    {
      icon: Code,
      title: "Skilled developers",
      description: "Building robust solutions",
    },
    {
      icon: TestTube,
      title: "Thorough testers",
      description: "Ensuring quality products",
    },
  ];

  return (
    <section className="container py-16">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-5xl font-bold tracking-tighter">
            WHO WE ARE
            <br /> <span className="text-primary">WHAT WE DO</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We are a team of passionate professionals dedicated to providing the
            best design solutions to our clients.
          </p>
          <div className="grid gap-4">
            {teamFeatures.map((feature, index) => (
              <Card key={index}>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                    <feature.icon className="size-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex gap-4">
            <Button size="lg">Learn More About Us</Button>
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
        <div className="grid gap-4 rounded-lg bg-accent p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Anna Bill"
                width={400}
                height={400}
                className="aspect-square rounded-lg object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="font-medium text-white">Anna Bill</h3>
                <p className="text-sm text-white">Support</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Dan Joseph"
                width={400}
                height={400}
                className="aspect-square object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="font-medium text-white">Dan Joseph</h3>
                <p className="text-sm text-white">Manager</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-[2/1] overflow-hidden rounded-lg">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Design team members Anna, Bill, Sam, and Ashly collaborating"
              width={800}
              height={400}
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <h3 className="font-medium text-white">Anna, Bill, Sam, Ashly</h3>
              <p className="text-sm text-white">Designers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
