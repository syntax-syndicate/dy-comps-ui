import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Hero15() {
  return (
    <section className="bg-gradient-to-b from-background to-secondary py-24 md:py-32">
      <div className="container mx-auto">
        <div className="space-y-8 md:space-y-12">
          <a href="/linktosomething">
            <Badge
              variant="secondary"
              className="mx-auto flex w-fit items-center gap-2 px-4 py-2 text-sm"
            >
              <span>What&apos;s new in the magic toolbox?</span>
              <span className="font-semibold">Check it out</span>
              <ArrowRight className="size-4" />
            </Badge>
          </a>

          <div className="space-y-6 md:space-y-8">
            <h1 className="mx-auto max-w-3xl text-center text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Tools So Easy,{" "}
              <span className="text-primary">
                {" "}
                You&apos;ll Think You&apos;re Cheating
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-center text-lg text-muted-foreground md:text-xl">
              Level up your workflow with tools so efficient, you&apos;ll wonder
              if they have secret superpowers. (They might.)
            </p>
          </div>

          <div className="flex justify-center">
            <Button size="lg" className="w-full sm:w-auto">
              Try it for free – No cape required!
            </Button>
          </div>

          <div className="mt-8 md:mt-12">
            <ul className="flex flex-wrap justify-center gap-4 text-sm md:gap-6 md:text-base">
              {[
                {
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="size-5 fill-primary stroke-primary"
                    >
                      <path d="m12.954 11.616 2.957-2.957L6.36 3.291c-.633-.342-1.226-.39-1.746-.016l8.34 8.341zm3.461 3.462 3.074-1.729c.6-.336.929-.812.929-1.34 0-.527-.329-1.004-.928-1.34l-2.783-1.563-3.133 3.132 2.841 2.84zM4.1 4.002c-.064.197-.1.417-.1.658v14.705c0 .381.084.709.236.97l8.097-8.098L4.1 4.002zm8.854 8.855L4.902 20.91c.154.059.32.09.495.09.312 0 .637-.092.968-.276l9.255-5.197-2.666-2.67z" />
                    </svg>
                  ),
                  text: "4.7 rating on Play Store (Yes, really)",
                },
                {
                  icon: (
                    <svg
                      viewBox="0 0 384 512"
                      className="size-5 fill-primary stroke-primary"
                    >
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>
                  ),
                  text: "4.8 rating on App Store (Not even our moms's reviews)",
                },
                {
                  icon: <Star className="size-5 fill-primary stroke-primary" />,
                  text: "4.9 rating on Trustpilot (People really like us)",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 whitespace-nowrap"
                >
                  {item.icon}
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
