import Image from "next/image";
import Link from "next/link";
import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface FundraiserProps {
  image: string;
  raised: number;
  goal: number;
  donors: number;
  title: string;
  description: string;
}

const fundraisers: FundraiserProps[] = [
  {
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    raised: 376856,
    goal: 400000,
    donors: 2756,
    title: "Thank you for supporting in planting trees work.",
    description:
      "Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone.",
  },
  {
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    raised: 75856,
    goal: 150000,
    donors: 568,
    title: "Thank you for supporting our lifesaving work.",
    description:
      "Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone.",
  },
];

export default function CallToAction30() {
  return (
    <section className="bg-background py-12 text-foreground md:py-16">
      <div className="container mx-auto">
        <div className="mb-10 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Fundraising events
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            DY-Comps helps you connect with friends, family and communities of
            people who share your interests.
          </p>
        </div>

        <div className="mb-10 grid gap-6 md:grid-cols-2">
          {fundraisers.map((fundraiser, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48 md:h-64">
                <Image
                  src={fundraiser.image}
                  alt="Fundraiser image"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{fundraiser.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xl font-bold">
                      ${fundraiser.raised.toLocaleString()}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      of ${fundraiser.goal.toLocaleString()} goal
                    </span>
                  </div>
                  <Progress
                    value={(fundraiser.raised / fundraiser.goal) * 100}
                    className="h-2"
                  />
                  <div className="mt-1 text-sm text-muted-foreground">
                    {fundraiser.donors.toLocaleString()} donors
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {fundraiser.description}
                </p>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button className="flex-1">Donate now</Button>
                <Button variant="outline" size="icon">
                  <Share2 className="size-4" />
                  <span className="sr-only">Share this Fundraiser</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="link" asChild>
            <Link
              href="#"
              className="inline-flex items-center text-primary hover:underline"
            >
              View all fundraising events
              <svg
                className="ml-2 size-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
