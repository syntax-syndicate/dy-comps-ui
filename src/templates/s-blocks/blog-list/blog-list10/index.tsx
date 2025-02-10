import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const posts = [
  {
    id: "post-1",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    label: "Ut varius dolor turpis",
    author: "Jane Doe",
    published: "1 Jan 2024",
    href: "#",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: "post-2",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    label: "Ut varius dolor turpis",
    author: "Jane Doe",
    published: "1 Jan 2024",
    href: "#",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: "post-3",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    label: "Ut varius dolor turpis",
    author: "Jane Doe",
    published: "1 Jan 2024",
    href: "#",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  // ... other posts
];

export default function BlogList10() {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center gap-16">
        <div className="text-center">
          <p className="mb-6 text-xs font-medium uppercase tracking-wider">
            Tag Line
          </p>
          <h2 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            Blog Posts
          </h2>
          <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
            doloremque mollitia fugiat omnis! Porro facilis quo animi
            consequatur. Explicabo.
          </p>
          <Button variant="link" className="w-full sm:w-auto">
            Explore all posts
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.href}
              className="flex flex-col overflow-hidden text-clip rounded-lg border"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill // Makes the image fill the container
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-xl lg:mb-6">
                  {post.title}
                </h3>
                <p className="mb-3 text-muted-foreground md:mb-4 lg:mb-6">
                  {post.summary}
                </p>
                <p className="flex items-center hover:underline">
                  Read more
                  <ArrowRight className="ml-2 size-4" />
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
