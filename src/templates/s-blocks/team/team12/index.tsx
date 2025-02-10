import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const professionals = [
  {
    id: 1,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 2,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 3,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 4,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 5,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 6,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 7,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 8,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 9,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 10,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 11,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 12,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 13,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 14,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 15,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function Professionals() {
  return (
    <div className="container py-16 md:px-6">
      <div className="grid gap-8 lg:grid-cols-[1fr,2fr] lg:gap-12 xl:grid-cols-[1fr,2.5fr]">
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Meet our professionals
          </h2>
          <p className="text-muted-foreground">
            A good idiom for kids is &quot;It&apos;s raining cats and
            dogs.&quot; Kids know what both cats and dogs are from an early age
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size={"lg"}>View All</Button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:gap-6">
          {professionals.map((professional) => (
            <div
              key={professional.id}
              className="flex items-center justify-center rounded-lg bg-accent p-2 transition-transform duration-300 hover:scale-105"
            >
              <Avatar className="size-16 border-2 sm:h-20 sm:w-20">
                <AvatarImage
                  alt={`Professional ${professional.id}`}
                  src={professional.image}
                />
              </Avatar>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
