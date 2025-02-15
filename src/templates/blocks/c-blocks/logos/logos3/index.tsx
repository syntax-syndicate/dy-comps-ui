// This template requires the Embla Auto Scroll plugin to be installed:
//
// npm install embla-carousel-auto-scroll

"use client"

import AutoScroll from "embla-carousel-auto-scroll"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const logos = [
  {
    id: "logo-1",
    description: "Logo 1",
    image: "/logos/astro.svg",
  },
  {
    id: "logo-2",
    description: "Logo 2",
    image: "/logos/figma.svg",
  },
  {
    id: "logo-3",
    description: "Logo 3",
    image: "/logos/nextjs.svg",
  },
  {
    id: "logo-4",
    description: "Logo 4",
    image: "/logos/react.png",
  },
  {
    id: "logo-5",
    description: "Logo 5",
    image: "/logos/shadcn-ui.svg",
  },
  {
    id: "logo-6",
    description: "Logo 6",
    image: "/logos/supabase.svg",
  },
  {
    id: "logo-7",
    description: "Logo 7",
    image: "/logos/tailwind.svg",
  },
  {
    id: "logo-8",
    description: "Logo 8",
    image: "/logos/vercel.svg",
  },
]

const Logos3 = () => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center text-center">
        <h1 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
          Trusted by these companies
        </h1>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="basis-1/3 pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className="h-7 w-auto"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="from-background absolute inset-y-0 left-0 w-12 bg-gradient-to-r to-transparent"></div>
          <div className="from-background absolute inset-y-0 right-0 w-12 bg-gradient-to-l to-transparent"></div>
        </div>
      </div>
    </section>
  )
}

export default Logos3
