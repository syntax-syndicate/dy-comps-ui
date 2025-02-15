import {
  Timer,
  Zap,
  ZoomIn,
  PersonStanding,
  DollarSign,
  MessagesSquare,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Card } from "@/components/ui/card";

export default function Feature17() {
  const features = [
    {
      icon: Timer,
      title: "Instant Performance",
      description: "Blazing-fast speeds that keep your momentum going.",
    },
    {
      icon: Zap,
      title: "Unrivaled Innovation",
      description: "Experience cutting-edge tech that sets you apart.",
    },
    {
      icon: ZoomIn,
      title: "Flawless Quality",
      description: "Expect nothing less than a polished, bug-free experience.",
    },
    {
      icon: PersonStanding,
      title: "Accessible to All",
      description: "Easy-to-use design that caters to every user.",
    },
    {
      icon: DollarSign,
      title: "Remarkable Value",
      description: "Get premium features without the premium price tag.",
    },
    {
      icon: MessagesSquare,
      title: "Dedicated Support",
      description: "24/7 assistance, ready when you need it.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <Badge variant={"outline"} className="mb-6">
          Features
        </Badge>

        <h2 className="text-3xl font-semibold lg:text-4xl">
          Uncover the Power <br />
          <span className="text-primary">Of Our Core Features</span>
        </h2>
        <p className="mt-6 w-4/5 text-xl text-muted-foreground">
          Discover the capabilities that make our platform stand out. From
          blazing speeds to unmatched support, experience the difference.
        </p>

        <div className="mx-auto mb-16 mt-14 grid gap-x-8 gap-y-8 md:grid-cols-2 lg:mt-20">
          {features.map((feature, index) => (
            <Card key={index} className="flex gap-6 rounded-lg md:block">
              <div className="rounded-lg bg-background p-6">
                <span className="mb-4 flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                  <feature.icon className="size-6 text-primary md:size-6" />
                </span>
                <h3 className="font-medium md:mb-2 md:text-xl">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground md:text-base">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      <div className="mt-16 flex flex-col items-center gap-6 py-8">
        <div className="relative mb-16 max-w-2xl text-center">
          <q className="text-2xl font-medium italic">
            This platform is a game-changer. It&apos;s transformed our workflow
            and supercharged our results.
          </q>
        </div>

        <div className="flex items-center gap-4">
          <Avatar className="size-12 border-2 border-primary">
            <AvatarImage
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Sarah Johnson"
            />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
          <div className="text-left">
            <p className="font-bold">Devin Schumacher</p>
            <p className="text-sm text-muted-foreground">CEO, DY-Comps.ai</p>
          </div>
        </div>
      </div>
    </section>
  );
}
