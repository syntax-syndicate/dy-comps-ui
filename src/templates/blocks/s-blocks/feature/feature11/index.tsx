import { ChevronRight, CircleCheckBig } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Feature11() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col gap-12 md:flex-row">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Advanced technology ecosystem"
            className="max-h-96 w-full rounded-bl-lg rounded-tr-lg bg-accent object-cover pb-4 pr-4 md:max-h-[500px] md:w-1/2"
            width={600}
            height={600}
          />

          <div className="flex flex-col justify-center">
            <h2 className="text-balance text-3xl font-medium text-foreground md:text-5xl">
              Engineered with cutting-edge <br />{" "}
              <span className="text-primary">technological innovations</span>
            </h2>
            <p className="text-large mt-4 text-muted-foreground md:mt-6">
              Our ecosystem harnesses state-of-the-art technologies to provide
              an unparalleled, robust, and dynamic experience. Each element of
              our infrastructure is meticulously chosen to ensure maximum
              efficiency, adaptability, and seamless integration for developers.
            </p>
            <Button variant="outline" size={"lg"} className="mt-6 w-fit">
              Discover more <ChevronRight className="ml-2 size-4" />
            </Button>
            <ul className="mt-10 grid gap-4 md:grid-cols-2">
              {["Reliability", "Versatility", "Intuitive", "Efficient"].map(
                (feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CircleCheckBig className="size-5 text-primary" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
