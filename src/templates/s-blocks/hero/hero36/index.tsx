import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const products = [
  {
    name: "Global Expansion",
    description:
      "Expand your business into new markets with our comprehensive suite of tools and services designed for international growth.",
    image:
      "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=300&h=300&fit=crop&q=80",
  },
  {
    name: "Market Analysis",
    description:
      "Get in-depth market analysis and insights to make informed decisions about your global expansion strategy.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop&q=80",
  },
  {
    name: "Localization Services",
    description:
      "Adapt your products and services to local markets with our expert localization and translation services.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=300&fit=crop&q=80",
  },
];

export default function Hero36() {
  return (
    <section className="relative overflow-hidden bg-secondary py-24 lg:py-32">
      <div className="bg-grid-white/[0.02] absolute inset-0 bg-[size:60px_60px]" />
      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <Badge>New Release</Badge>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-secondary-foreground sm:text-5xl md:text-6xl">
            Our blocks help global companies{" "}
            <span className="text-primary">expand into new markets</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Empower your business with our comprehensive suite of tools and
            services designed for international growth.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:mt-20 lg:mt-24 lg:grid-cols-3">
          {products.map((product, index) => (
            <Card key={index} className="flex flex-col overflow-hidden">
              <CardHeader className="p-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="aspect-[4/3] w-full object-cover"
                />
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="mb-2 text-xl">{product.name}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="ghost" className="w-full justify-between">
                  <span>Learn More</span>
                  <ArrowRight className="size-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
