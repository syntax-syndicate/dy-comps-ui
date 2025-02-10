import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MessageSquare,
  Users,
  MessageCircleDashed,
  ScanFace,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import React from "react";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  href: string;
}

interface OfficeLocationProps {
  flag: string;
  city: string;
  country: string;
  address: string;
  href: string;
}

export default function Contact3() {
  return (
    <section className="bg-gradient-to-b from-background to-secondary/20 py-24">
      <div className="container">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Ready to Connect?
          </h1>
          <p className="mx-auto mb-8 max-w-[700px] text-lg text-muted-foreground">
            Got burning questions or exciting ideas? We&apos;re all ears!
            Let&apos;s chat about how we can help you achieve your goals.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
            >
              Request a demo
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary hover:bg-primary/10 sm:w-auto"
            >
              Start your free trial
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            No payment details needed. Dive right in!
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <ContactCard
            icon={<MessageSquare className="size-10" />}
            title="Customer Support"
            description="Need a hand? Our support gurus are on standby 24/7, ready to tackle any question or hiccup."
            linkText="Contact support →"
            href="#"
          />
          <ContactCard
            icon={<Users className="size-10" />}
            title="Sales Inquiries"
            description="Ready to explore the possibilities? Connect with our sales pros to uncover the perfect solution for your unique needs."
            linkText="Talk to sales →"
            href="#"
          />
          <ContactCard
            icon={<MessageCircleDashed className="size-10" />}
            title="General Inquiries"
            description="Got a burning question or a brilliant idea? We're all ears! Shoot us a message, we love a good chat."
            linkText="Contact us →"
            href="#"
          />
          <ContactCard
            icon={<ScanFace className="size-10" />}
            title="Verification Services"
            description="Need to verify employment or confirm income? Our trusted third-party partners are here to assist."
            linkText="Get verified →"
            href="#"
          />
        </div>

        <div className="mt-24">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
            Our Global Hubs
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <OfficeLocation
              flag="🇺🇸"
              city="New York City"
              country="USA"
              address="123 5th Ave, New York, NY 10001"
              href="/locations/nyc"
            />
            <OfficeLocation
              flag="🇬🇧"
              city="London"
              country="UK"
              address="50 Oxford St, London W1D 1BS"
              href="/locations/london"
            />
            <OfficeLocation
              flag="🇯🇵"
              city="Tokyo"
              country="Japan"
              address="2-7-5 Kyobashi, Chuo-ku, Tokyo 104-0031"
              href="/locations/tokyo"
            />
            <OfficeLocation
              flag="🇦🇺"
              city="Sydney"
              country="Australia"
              address="100 George St, Sydney NSW 2000"
              href="/locations/sydney"
            />
            <OfficeLocation
              flag="🇩🇪"
              city="Berlin"
              country="Germany"
              address="Unter den Linden 52, 10117 Berlin"
              href="/locations/berlin"
            />
            <Link href="/locations" className="block h-full">
              <Card className="flex h-full items-center justify-center border border-dotted border-primary p-6 transition-colors hover:bg-primary/10">
                <span className="font-medium">Explore all locations</span>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  description,
  linkText,
  href,
}: ContactCardProps) {
  return (
    <Card className="group h-full border transition-all hover:border-primary hover:shadow-md">
      <CardContent className="flex h-full flex-col items-start justify-between p-6">
        <div>
          <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            {icon}
          </div>
          <h3 className="mb-2 text-xl font-bold">{title}</h3>
          <p className="mb-4 text-muted-foreground">{description}</p>
        </div>
        <a
          href={href}
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          {linkText}
        </a>
      </CardContent>
    </Card>
  );
}

function OfficeLocation({
  flag,
  city,
  country,
  address,
  href,
}: OfficeLocationProps) {
  return (
    <Link href={href} className="block h-full">
      <Card className="h-full border transition-all hover:border-primary hover:shadow-md">
        <CardContent className="flex h-full flex-col items-start p-6">
          <div className="mb-4 text-4xl">{flag}</div>
          <h3 className="mb-2 text-lg font-bold">
            {city}, <span className="text-muted-foreground">{country}</span>
          </h3>
          <p className="text-sm text-muted-foreground">{address}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
