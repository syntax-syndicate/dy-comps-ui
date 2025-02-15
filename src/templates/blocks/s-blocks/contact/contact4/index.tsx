"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface ContactCardProps {
  title: string;
  description: string;
  linkText: string;
  href: string;
}

interface MapSlideProps {
  image: string;
  title: string;
  description: string;
  linkText: string;
}

export default function Contact4() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="relative py-16">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex w-full items-center justify-center rounded-lg bg-accent">
            <Image
              src="/logo.svg" // Replace with your actual logo path
              alt="Company Logo"
              width={300}
              height={100}
              priority
            />
          </div>

          <div className="max-w-screen-sm">
            <h1 className="mb-3 text-xl font-medium text-primary">
              Contact us
            </h1>
            <p className="text-balance text-4xl font-medium md:text-5xl">
              Let&apos;s connect – Reach out today to{" "}
              <span className="text-primary">
                explore how we can assist you.
              </span>
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-4 rounded-lg md:grid-cols-3 md:gap-8">
          <ContactCard
            title="Sales Inquiries"
            description="Interested in leveraging our platform? Connect with our sales team to discover the potential."
            linkText="Explore Demo Options"
            href="#"
          />
          <ContactCard
            title="Technical Support"
            description="Need assistance? Our support team is ready to guide you. Browse our FAQs or reach out directly."
            linkText="Access Support Resources"
            href="#"
          />
          <ContactCard
            title="General Questions"
            description="For any other queries, feel free to get in touch via our contact form, 24/7 support is available."
            linkText="Use the Contact Form"
            href="#"
          />
        </div>
        <div className="mt-7">
          <div
            className="relative"
            role="region"
            aria-roledescription="carousel"
          >
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <MapSlide
                  image="https://developers.google.com/static/maps/documentation/urls/images/map-no-params.png"
                  title="Global Presence: 4 Locations"
                  description="Our offices are strategically located in New York, Paris, Kyiv, and Singapore to serve you best."
                  linkText="Discover More"
                />
                <MapSlide
                  image="https://developers.google.com/static/maps/documentation/urls/images/map-no-params.png"
                  title="New York Office, USA"
                  description="Find us at 1 Liberty Plaza, 165 Broadway, New York, NY 10006."
                  linkText="View on Maps"
                />
                <MapSlide
                  image="https://developers.google.com/static/maps/documentation/urls/images/map-no-params.png"
                  title="Paris Office, France"
                  description="Our Paris office is located at 10 Rue de la Paix, 75002 Paris."
                  linkText="View on Maps"
                />
                <MapSlide
                  image="https://developers.google.com/static/maps/documentation/urls/images/map-no-params.png"
                  title="Kyiv Office, Ukraine"
                  description="Visit us at 1A Sportyvna Square, 01023 Kyiv."
                  linkText="View on Maps"
                />
                <MapSlide
                  image="https://developers.google.com/static/maps/documentation/urls/images/map-no-params.png"
                  title="Singapore Office, Singapore"
                  description="Find our Singapore office at One Raffles Place, Singapore 048616."
                  linkText="View on Maps"
                />
              </div>
            </div>
            <div className="absolute bottom-2 right-6 flex gap-4 md:bottom-5 md:right-10">
              <Button
                variant="outline"
                size="icon"
                className="size-8 rounded-full"
                onClick={prevSlide}
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="size-4" />
                <span className="sr-only">Previous slide</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="size-8 rounded-full"
                onClick={nextSlide}
                disabled={currentSlide === totalSlides - 1}
              >
                <ChevronRight className="size-4" />
                <span className="sr-only">Next slide</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ title, description, linkText, href }: ContactCardProps) {
  return (
    <Card className="flex flex-col justify-between">
      <CardContent className="flex flex-col justify-between gap-6 p-6">
        <div>
          <h2 className="mb-4 text-xl font-medium md:text-2xl">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <a href={href} className="font-semibold text-primary hover:underline">
          {linkText}
        </a>
      </CardContent>
    </Card>
  );
}

function MapSlide({ image, title, description, linkText }: MapSlideProps) {
  return (
    <div className="max-h-96 min-w-0 shrink-0 grow-0 basis-full">
      <div className="md:max-h-[496px relative flex h-full flex-col overflow-hidden rounded-t-lg md:rounded-lg">
        <Image
          src={image}
          alt="Map location"
          className="size-full rounded-t-lg object-cover md:rounded-lg"
          width={500}
          height={300}
        />
        <div className="bottom-8 left-8 flex flex-col justify-between gap-6 rounded-b-lg border-x border-b bg-background p-6 md:absolute md:max-w-96 md:rounded-lg md:border">
          <div>
            <h2 className="mb-4 text-xl font-medium md:text-2xl">{title}</h2>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <a href="#" className="font-semibold text-primary hover:underline">
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
}
