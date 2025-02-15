import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Zap, Palette } from "lucide-react";
import Image from "next/image";

export default function Feature8() {
  return (
    <section className="bg-accent py-32">
      <div className="container">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <h1 className="max-w-2xl text-center text-3xl font-medium md:text-5xl">
            Welcome to our <br />
            <span className="text-primary">Themed Block Library</span>
          </h1>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-6 md:flex-row lg:mt-20 lg:gap-10">
          {[
            {
              title: "Built with shadcn/ui",
              description:
                "Leverage the power of shadcn/ui components to build beautiful and functional interfaces quickly.",
              icon: <Zap className="size-6 text-primary" />,
              logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
              alt: "shadcn",
            },
            {
              title: "Styled with Tailwind CSS",
              description:
                "Utilize the flexibility of Tailwind CSS to create custom designs with ease and efficiency.",
              icon: <Palette className="size-6 text-primary" />,
              logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
              alt: "tailwind",
            },
          ].map((item, index) => (
            <Card key={index} className="group p-6 hover:border-primary">
              <Button
                variant="outline"
                className="ml-auto hidden w-fit cursor-pointer transition-all duration-200 group-hover:opacity-100 md:flex lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0"
              >
                Learn more
                <ChevronRight className="ml-1 size-4" />
              </Button>
              <div className="mt-6 flex gap-4">
                <div>
                  <h2 className="mb-2 text-xl font-semibold">{item.title}</h2>
                  <p className="text-lg font-light lg:text-2xl">
                    {item.description}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 cursor-pointer md:hidden"
                >
                  <ChevronRight className="size-4" />
                </Button>
              </div>
              <div className="mt-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {item.icon}
                  <p className="text-sm font-light lg:text-base">
                    {index === 0 ? "Built with" : "Styled with"}
                  </p>
                </div>
                <div
                  className={`flex items-center justify-center ${index === 0 ? "h-7 w-28" : "h-4 w-28"}`}
                >
                  <Image
                    src={item.logo}
                    alt={item.alt}
                    width={40}
                    height={40}
                    className="size-10 object-contain"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
