import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About6() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-5xl font-semibold">
            Our <span className="text-primary">Company</span>
          </h1>
          <p className="text-muted-foreground">
            Cyber risks, such as phishing, are growing challenges for
            organizations today. These tactics aim to mislead individuals into
            giving away private data or installing malware on their devices.
          </p>
        </div>
        <div className="grid gap-7 lg:grid-cols-3">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="placeholder"
            width={800}
            height={620}
            className="size-full max-h-[620px] rounded-lg object-cover lg:col-span-2"
          />
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
                  Who We Are and What We Offer
                </p>
                <p className="text-muted-foreground">
                  Providing businesses with effective tools to improve
                  workflows, boost efficiency, and encourage growth.
                </p>
              </div>
              <Button variant="outline" className="mr-auto">
                Discover more
              </Button>
            </div>
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="placeholder"
              width={400}
              height={300}
              className="grow basis-0 rounded-lg object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
            />
          </div>
        </div>
        <div className="py-32">
          <p className="text-center">Valued by clients worldwide</p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {[
              {
                name: "CocaCola",
                logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
              },
              {
                name: "Pespsi",
                logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
              },
              {
                name: "Fanta",
                logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
              },
              {
                name: "Mountain Dew",
                logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
              },
              {
                name: "Sprite",
                logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
              },
              {
                name: "Orangina",
                logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
              },
            ].map((client, index) => (
              <div key={index} className="flex items-center gap-3">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={48}
                  height={48}
                  className="h-8 w-auto md:h-12"
                />
                <p className="text-xl font-semibold md:text-2xl">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg bg-muted">
          <div className="mx-auto">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="flex flex-col items-center gap-6 p-10 text-center md:items-start md:text-left">
                <h2 className="text-4xl font-semibold">Get In Touch</h2>
                <p className="max-w-screen-sm text-muted-foreground">
                  Providing businesses with effective tools to improve
                  workflows, boost efficiency, and encourage growth.
                </p>
                <Button size="lg" className="mt-4">
                  Contact Us
                </Button>
              </div>
              <div className="relative h-64 w-full overflow-hidden md:h-80 lg:h-96">
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="Achievement illustration"
                  // Updated props for Next.js Image
                  width={1920} // Provide width (example value)
                  height={1080} // Provide height (example value)
                  className="rounded-r-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden size-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] bg-[size:80px_80px] opacity-15 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block" />
        </div>
      </div>
    </section>
  );
}
