import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const partners = [
  {
    id: 1,
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 2,
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 3,
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 4,
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 5,
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 6,
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 7,
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 8,
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function PartnerShowcase() {
  return (
    <section className="bg-muted/10 py-32">
      <div className="container">
        <div className="mx-auto flex max-w-screen-md flex-col items-center gap-6">
          <h2 className="mb-2 text-balance text-center text-4xl font-extrabold text-foreground lg:text-6xl">
            <span className="text-primary">Unified Platform,</span>
            <br />
            Limitless Connections
          </h2>
          <p className="text-center text-lg text-muted-foreground lg:text-xl">
            Connect effortlessly with your essential services to amplify your
            efficiency and amplify your impact.
          </p>
          <div className="flex gap-2">
            <Button size={"lg"} className="mt-6">
              Join The Partner Network
            </Button>
            <Button variant="outline" size={"lg"} className="mt-6">
              Explore Partner Network
            </Button>
          </div>
        </div>
        <div className="my-14">
          <div className="flex justify-center -space-x-4 sm:-space-x-5">
            {partners.map((partner) => (
              <span
                key={partner.id}
                className="flex aspect-square h-[13vw] min-h-10 shrink-0 items-center justify-center rounded-full border-4 bg-muted transition-all duration-200 hover:border-primary md:h-28"
              >
                <Image
                  src={partner.logo}
                  alt={`Partner logo ${partner.id}`}
                  width={48}
                  height={48}
                  className="w-full rounded-full"
                />
              </span>
            ))}
          </div>
        </div>
        <div className="text-center text-sm text-foreground">
          Alongside a growing network of
          <Link href="#" className="ml-1 font-bold text-primary underline">
            150+ partners
          </Link>
        </div>
      </div>
    </section>
  );
}
