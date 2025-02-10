import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About8() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container mx-auto">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Securing Your
                <br />
                <span className="text-primary"> Digital Future</span>
              </h1>
              <p className="max-w-prose text-xl text-muted-foreground">
                We provide{" "}
                <span className="font-bold text-primary">
                  cutting-edge cybersecurity solutions
                </span>{" "}
                to protect your business from evolving digital threats.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button size="lg" asChild>
                  <Link href="/services">Explore Our Services</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Get a Free Consultation</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-72 w-full rounded-lg md:h-96">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Cybersecurity illustration"
                fill
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Empowering Global Cybersecurity Leaders
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[
              {
                name: "QuantumShield",
                logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
              },
              {
                name: "NexusGuard",
                logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
              },
              {
                name: "CipherPulse",
                logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
              },
              {
                name: "ByteSentinel",
                logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
              },
              {
                name: "SynapseArmor",
                logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
              },
            ].map((client, index) => (
              <div key={index} className="flex items-center gap-3">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={48}
                  height={48}
                  className="h-8 w-auto md:h-12"
                />
                <p className="text-lg font-semibold md:text-xl">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-lg bg-muted p-8 md:p-16">
            <div className="mb-12 flex flex-col items-center gap-6 text-center md:text-left">
              <h2 className="text-3xl font-bold md:text-4xl">
                Revolutionizing Digital Defense
              </h2>
              <p className="mx-auto max-w-2xl text-center text-muted-foreground">
                From startups to Fortune 500 companies, we&apos;ve fortified
                digital infrastructures against evolving cyber threats, setting
                new standards in proactive cybersecurity measures.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
              {[
                { label: "Cyber Attacks Thwarted", value: "10M+" },
                { label: "Vulnerability Assessments", value: "25,000+" },
                { label: "Client Retention Rate", value: "98.7%" },
                { label: "Cybersecurity Patents", value: "50+" },
              ].map((stat, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <span className="text-3xl font-bold md:text-4xl">
                    {stat.value}
                  </span>
                  <p className="text-sm text-muted-foreground md:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link href="/case-studies">
                  Explore Our Case Studies{" "}
                  <ExternalLink className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
            <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden size-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] bg-[size:80px_80px] opacity-15 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block" />
          </div>
        </div>
      </section>
    </div>
  );
}
