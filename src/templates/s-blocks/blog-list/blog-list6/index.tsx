import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function BlogList6() {
  const posts = [
    {
      id: 1,
      title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
      excerpt:
        "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
      category: "Design",
      author: "Jane Doe",
      date: "1 Jan 2024",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      id: 2,
      title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
      excerpt:
        "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
      category: "Design",
      author: "Jane Doe",
      date: "1 Jan 2024",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      id: 3,
      title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
      excerpt:
        "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
      category: "Design",
      author: "Jane Doe",
      date: "1 Jan 2024",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    // Add more post objects as needed
  ];

  return (
    <section className="py-12 md:py-24">
      <div className="container">
        <div className="mb-8 md:mb-12">
          <h1 className="mb-4 text-4xl font-medium md:text-6xl">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Duis sem sem, gravida vel porttitor eu, volutpat ut arcu
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className="relative aspect-video w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill // This makes the image fill the container
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-4">
                <p className="mb-2 text-sm font-medium text-primary">
                  {post.category}
                </p>
                <h2 className="mb-2 text-xl font-bold">{post.title}</h2>
                <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex size-10 items-center justify-center rounded-full bg-muted">
                      <span className="text-xs font-medium">JD</span>
                    </div>
                    <span className="text-sm font-medium">{post.author}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {post.date}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button variant="outline">Load More</Button>
        </div>
      </div>
    </section>
  );
}
