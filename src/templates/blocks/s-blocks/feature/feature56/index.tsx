import Image from "next/image";
import { Zap, Shield, Rocket } from "lucide-react";

export default function Feature56() {
  return (
    <section className="bg-background py-32 text-foreground">
      <div className="container flex flex-col gap-6 lg:px-32">
        <div className="flex flex-col rounded-lg border bg-accent p-6">
          <div className="mb-2 flex items-center gap-2">
            <Zap className="size-5 text-primary" />
            <p className="text-sm font-semibold md:text-base">
              Lightning-Fast Performance
            </p>
          </div>
          <p className="mb-8 text-sm text-muted-foreground md:text-base">
            Experience blazing-fast load times and smooth interactions. Our
            optimized platform ensures that your users enjoy a seamless
            experience, keeping them engaged and improving conversion rates.
          </p>
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Lightning-fast performance illustration"
            width={1200}
            height={675}
            className="aspect-video rounded-md object-cover lg:mt-auto lg:w-full"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="grid-cols-2 gap-x-20 rounded-lg border bg-accent p-6 md:grid md:p-6 lg:flex lg:flex-col">
            <div className="flex flex-col">
              <div className="mb-2 flex items-center gap-2">
                <Shield className="size-5 text-primary" />
                <p className="text-sm font-semibold md:text-base">
                  Robust Security
                </p>
              </div>
              <p className="mb-8 text-sm text-muted-foreground md:text-base">
                Protect your data with our state-of-the-art security measures,
                ensuring peace of mind for you and your users.
              </p>
            </div>
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Robust security illustration"
              width={400}
              height={300}
              className="aspect-video rounded-md object-cover lg:mt-auto lg:w-full"
            />
          </div>

          <div className="grid-cols-2 gap-x-20 rounded-lg border bg-accent p-6 md:grid md:p-6 lg:flex lg:flex-col">
            <div className="flex flex-col">
              <div className="mb-2 flex items-center gap-2">
                <Rocket className="size-5 text-primary" />
                <p className="text-sm font-semibold md:text-base">
                  Scalable Solutions
                </p>
              </div>
              <p className="mb-8 text-sm text-muted-foreground md:text-base">
                Grow your business with confidence using our scalable
                infrastructure that adapts to your evolving needs.
              </p>
            </div>
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Scalable solutions illustration"
              width={400}
              height={300}
              className="aspect-video rounded-md object-cover lg:mt-auto lg:w-full"
            />
          </div>

          <div className="grid-cols-2 gap-x-20 rounded-lg border bg-accent p-6 md:grid md:p-6 lg:flex lg:flex-col">
            <div className="flex flex-col">
              <div className="mb-2 flex items-center gap-2">
                <Zap className="size-5 text-primary" />
                <p className="text-sm font-semibold md:text-base">
                  Intuitive Interface
                </p>
              </div>
              <p className="mb-8 text-sm text-muted-foreground md:text-base">
                Navigate with ease through our user-friendly interface, designed
                to enhance productivity and user satisfaction.
              </p>
            </div>
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Intuitive interface illustration"
              width={400}
              height={300}
              className="aspect-video rounded-md object-cover lg:mt-auto lg:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
