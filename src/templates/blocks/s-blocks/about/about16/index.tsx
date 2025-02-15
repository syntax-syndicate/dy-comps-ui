import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About16() {
  return (
    <section className="bg-background py-12 md:py-24">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold tracking-tighter">
                Empowering
                <br />
                <span className="text-primary">Your Digital Journey</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                At our core, we believe in harnessing the power of technology to
                transform businesses. Our suite of services is designed to
                <span className="font-bold text-primary">
                  {" "}
                  elevate your digital presence
                </span>{" "}
                and streamline your operations, ensuring you stay ahead in
                today&apos;s fast-paced digital landscape.
              </p>
              <p className="text-lg text-muted-foreground">
                With a team of seasoned experts and cutting-edge tools, we craft
                bespoke solutions that address your unique challenges and unlock
                new opportunities for growth and innovation.
              </p>
            </div>

            <div className="space-y-4 rounded-lg bg-accent p-6">
              <h3 className="text-xl font-semibold">Our Key Focus Areas</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-center">
                  <div className="mr-2 size-1.5 rounded-full bg-primary" />
                  Tailored solutions to meet your specific needs
                </li>
                <li className="flex items-center">
                  <div className="mr-2 size-1.5 rounded-full bg-primary" />
                  Seamless transition to scalable cloud infrastructure
                </li>
                <li className="flex items-center">
                  <div className="mr-2 size-1.5 rounded-full bg-primary" />
                  Unlock insights and automate processes
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Our Commitment to Excellence
              </h3>
              <p className="text-lg text-muted-foreground">
                We pride ourselves on delivering not just services, but
                partnerships.
              </p>
            </div>

            <Button size={"lg"}>Explore Our Services</Button>
          </div>

          <div className="relative rounded-lg bg-accent p-6">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Tech professional working on a laptop"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="mt-4">
              <h4 className="font-medium">Innovate. Transform. Succeed.</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
