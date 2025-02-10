import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const integrations = [
  {
    name: "Comms Hub",
    description:
      "Centralize all your team conversations, from quick chats to in-depth project discussions, enhancing collaboration and transparency.",
    icon: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Cloud Storage",
    description:
      "Securely store, access, and co-create on documents in the cloud. Ensure everyone has the latest versions and maintain seamless workflow.",
    icon: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Secure Repository",
    description:
      "Keep all your critical files protected and accessible. Facilitate easy sharing and collaboration, no matter where your team is working from.",
    icon: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Code Platform",
    description:
      "Streamline code management and development workflows with advanced version control and collaborative project tools.",
    icon: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function Feature82() {
  return (
    <section className="bg-background py-32 text-foreground">
      <div className="container">
        <div className="grid place-items-center items-center gap-4 lg:grid-cols-5 lg:gap-16">
          <h1 className="text-balance text-center text-4xl font-semibold lg:col-span-2 lg:text-left lg:text-5xl">
            Connect Your <span className="text-primary">Ecosystem</span>
          </h1>
          <p className="text-center text-lg text-muted-foreground lg:col-span-2 lg:text-left">
            Supercharge your workflow by connecting your essential tools and
            services into one unified experience.
          </p>
          <Button className="mx-auto w-fit lg:mx-0 lg:ml-auto">
            Dive into Integrations
          </Button>
        </div>
        <Separator className="mb-12 mt-8" />
        <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-20">
          {integrations.map((integration, index) => (
            <li key={index}>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-center rounded-lg bg-accent p-6">
                  <Image
                    src={integration.icon}
                    alt={integration.name}
                    width={64}
                    height={64}
                    className="h-auto w-full rounded-lg"
                  />
                </div>
                <h3 className="my-2 text-2xl font-bold">{integration.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {integration.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="mt-12 flex items-center justify-center gap-1 text-lg font-semibold text-primary hover:underline"
        >
          Explore the Full Potential
          <ArrowRight className="h-auto w-4" />
        </a>
      </div>
    </section>
  );
}
