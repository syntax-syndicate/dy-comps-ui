import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Rocket, Zap, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const innovations = [
  {
    title: "Launchpad Capital",
    description: "Ignite startups with smart seed funding",
    icon: Rocket,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    title: "Agile Investments",
    description: "Pivot your portfolio with market trends",
    icon: Zap,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    title: "Network Amplifier",
    description: "Magnify your reach in the startup ecosystem",
    icon: Users,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function VentureVista() {
  return (
    <section className="bg-gradient-to-b from-background to-secondary/20 py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Revolutionize Your{" "}
              <span className="text-primary">Venture Capital Journey</span>
            </h2>
            <p className="max-w-[600px] text-zinc-500 dark:text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Embark on a transformative VC experience. We&apos;re not just a
              platform; we&apos;re your strategic partner in navigating the
              complex world of startup investments.
            </p>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button
                size="lg"
                className="inline-flex items-center justify-center"
              >
                Schedule a Demo
                <Rocket className="ml-2 size-5" />
              </Button>
              <Button variant="outline" size="lg">
                Explore Solutions
              </Button>
            </div>
          </div>
          <div className="lg:order-last">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="VentureVista Dashboard"
              width={600}
              height={400}
              className="shadow-2xl"
            />
          </div>
        </div>
      </div>
      <Separator className="my-16" />
      <div className="container">
        <h3 className="mb-8 text-center text-2xl font-semibold">
          Innovative Features for Modern VCs
        </h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {innovations.map((item, index) => (
            <Link
              key={index}
              href="#"
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-secondary/40 opacity-90 transition-opacity group-hover:opacity-100" />
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="h-64 w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <item.icon className="mb-4 size-10 text-primary" />
                <h4 className="mb-2 text-xl font-semibold text-white">
                  {item.title}
                </h4>
                <p className="text-white/90">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
