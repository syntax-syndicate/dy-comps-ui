import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";

export default function BlogList7() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-8 md:mb-14 lg:mb-16">
          <div className="flex items-start justify-between gap-8">
            <div>
              <p className="text-wider mb-4 text-sm font-medium text-muted-foreground">
                Eyebrow
              </p>
              <h2 className="mb-4 w-full text-4xl font-medium md:mb-5 md:text-5xl lg:mb-6 lg:text-6xl">
                Blog
              </h2>
            </div>
            <Button size={"lg"} className="hidden md:block">
              View all posts
            </Button>
          </div>
          <p>Duis sem sem, gravida vel porttitor eu, volutpat ut arcu</p>
        </div>
        <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-6 lg:gap-y-12 2xl:grid-cols-3">
          {[1, 2, 3].map((_, index) => (
            <a key={index} href="#" className="group flex flex-col">
              <div className="mb-4 flex text-clip rounded-xl md:mb-5">
                <div className="transition duration-300 group-hover:scale-105">
                  <Image
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    alt="Duis sem sem, gravida vel porttitor eu, volutpat ut arcu"
                    width={600}
                    height={400}
                    className="aspect-[3/2] size-full rounded-lg object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
              <div>
                <Badge variant="default">Ut varius dolor turpis</Badge>
              </div>
              <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-2xl lg:pt-4 lg:text-3xl">
                Duis sem sem, gravida vel porttitor eu, volutpat ut arcu
              </div>
              <div className="mb-4 line-clamp-2 text-sm text-muted-foreground md:mb-5 md:text-base">
                Pellentesque eget quam ligula. Sed felis ante, consequat nec
                ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim
                sollicitudin hendrerit.
              </div>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-px">
                  <span className="text-xs font-medium">Jane Doe</span>
                  <span className="text-xs text-muted-foreground">
                    1 Jan 2024
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center py-2 md:hidden">
          <Button className="w-full sm:w-fit">View all posts</Button>
        </div>
      </div>
    </section>
  );
}
