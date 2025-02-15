import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About3() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-5xl font-semibold">
            Our <span className="text-primary">Mission Statement</span>
          </h1>
          <p className="text-muted-foreground">
            In today&apos;s digital landscape, businesses face unprecedented
            challenges in cybersecurity.{" "}
            <span className="font-bold text-primary">
              Our mission is to empower organizations with cutting-edge AI
              solutions.
            </span>{" "}
          </p>
        </div>
        <div className="grid gap-7 lg:grid-cols-3">
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div className="flex flex-col justify-between gap-6 rounded-lg bg-muted p-7 md:w-1/2 lg:w-auto">
              <Image
                src="/logo.svg"
                alt="logo"
                width={48}
                height={48}
                className="mr-auto h-12 dark:invert"
              />
              <div>
                <p className="mb-2 text-lg font-semibold">
                  Innovative Security Solutions
                </p>
                <p className="text-muted-foreground">
                  We provide state-of-the-art cybersecurity tools and services
                  that protect your business from evolving threats, ensuring
                  peace of mind and operational continuity.
                </p>
              </div>
              <Button className="mr-auto">Explore Our Services</Button>
            </div>
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Cybersecurity illustration"
              width={400}
              height={300}
              className="grow basis-0 rounded-lg object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
            />
          </div>
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Security operations center"
            width={800}
            height={620}
            className="size-full max-h-[620px] rounded-lg object-cover lg:col-span-2"
          />
        </div>
      </div>
    </section>
  );
}
