import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CallToAction24() {
  return (
    <section className="bg-background text-foreground">
      <div className="container mx-auto max-w-screen-xl py-8 sm:py-16">
        <div className="items-center gap-8 md:grid md:grid-cols-2 xl:gap-16">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Dashboard mockup"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight">
              Let&apos;s create more tools and ideas that brings us together.
            </h2>
            <p className="mb-6 text-muted-foreground md:text-lg">
              Our platform helps you connect with friends and communities of
              people who share your interests. Connecting with your friends and
              family as well as discovering new ones is easy with features like
              Groups.
            </p>
            <Button size="lg">
              Get started
              <svg
                className="-mr-1 ml-2 size-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
