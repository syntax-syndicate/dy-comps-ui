import Image from "next/image";
import { Star, Zap, Target, Sparkles } from "lucide-react";

export default function Feature37() {
  return (
    <section className="bg-background py-16 text-foreground">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
          <div className="flex flex-col justify-between rounded-lg bg-accent md:col-span-2">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="placeholder"
              width={512}
              height={288}
              className="aspect-video max-h-72 w-full rounded-t-lg object-cover"
            />
            <div className="p-6">
              <div className="mb-3 flex items-center">
                <Star className="mr-2 size-6 text-primary" />
                <p className="text-lg font-semibold">Lorem ipsum dolor sit.</p>
              </div>
              <p className="text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                laboriosam voluptatibus temporibus doloremque laudantium.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-accent md:col-span-3">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="placeholder"
              width={768}
              height={288}
              className="aspect-video max-h-72 w-full rounded-t-lg object-cover"
            />
            <div className="p-6">
              <div className="mb-3 flex items-center">
                <Zap className="mr-2 size-6 text-primary" />
                <p className="text-lg font-semibold">Lorem ipsum dolor sit.</p>
              </div>
              <p className="text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                laboriosam voluptatibus temporibus doloremque laudantium.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-accent md:col-span-3">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="placeholder"
              width={768}
              height={288}
              className="aspect-video max-h-72 w-full rounded-t-lg object-cover"
            />
            <div className="p-6">
              <div className="mb-3 flex items-center">
                <Target className="mr-2 size-6 text-primary" />
                <p className="text-lg font-semibold">Lorem ipsum dolor sit.</p>
              </div>
              <p className="text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                laboriosam voluptatibus temporibus doloremque laudantium.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-accent md:col-span-2">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="placeholder"
              width={512}
              height={288}
              className="aspect-video max-h-72 w-full rounded-t-lg object-cover"
            />
            <div className="p-6">
              <div className="mb-3 flex items-center">
                <Sparkles className="mr-2 size-6 text-primary" />
                <p className="text-lg font-semibold">Lorem ipsum dolor sit.</p>
              </div>
              <p className="text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                laboriosam voluptatibus temporibus doloremque laudantium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
