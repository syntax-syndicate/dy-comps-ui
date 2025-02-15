import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function BlogList8() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container flex flex-col gap-8 lg:flex-row lg:gap-16">
        {/* Sidebar */}
        <div className="flex flex-col gap-6 lg:min-w-[30%] lg:gap-8">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">
              Featured Articles
            </p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Latest Updates
            </h2>
          </div>
          <p className="text-lg text-muted-foreground lg:max-w-xs">
            Explore our latest insights and industry perspectives
          </p>
          <Button size="lg" className="hidden w-fit md:inline-flex">
            View All Posts
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-6 lg:gap-8">
          {[
            {
              title: "Modern Design Principles",
              image:
                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
              category: "Design",
              readTime: "8 min read",
              excerpt:
                "Explore the fundamentals of contemporary design systems and their impact on user experience.",
              author: "Jane Doe",
              date: "1 Jan 2024",
            },
            {
              title: "Future of Web Development",
              image:
                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
              category: "Technology",
              readTime: "10 min read",
              excerpt:
                "Discover emerging trends and technologies shaping the next generation of web applications.",
              author: "John Smith",
              date: "5 Jan 2024",
            },
          ].map((post, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-xl transition-all hover:bg-accent/10"
            >
              <a href="#" className="flex flex-col space-y-4 p-4">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-lg">
                  <div className="aspect-[3/2] w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-background/0" />
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-sm font-medium text-muted-foreground">
                    {post.readTime}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="flex items-center justify-between text-xl font-semibold tracking-tight">
                    <span className="line-clamp-2 group-hover:text-primary">
                      {post.title}
                    </span>
                    <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </h3>
                  <p className="line-clamp-2 text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted font-medium">
                    {post.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{post.author}</span>
                    <span className="text-sm text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-8 md:hidden">
          <Button size="lg" className="w-full">
            View All Posts
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
