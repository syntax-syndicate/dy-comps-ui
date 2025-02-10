import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function BlogList9() {
  const posts = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="mb-12 text-center md:mb-16 lg:mb-20">
          <p className="mb-4 text-sm font-medium text-muted-foreground">
            Latest Insights
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Design & Development Journal
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Exploring the intersection of modern design and cutting-edge
            technology
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12 xl:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post} index={post} />
          ))}
        </div>

        <div className="mt-12 md:mt-16">
          <Pagination />
        </div>
      </div>
    </section>
  );
}

function BlogCard({ index }: { index: number }) {
  const categories = ["UI Patterns", "Web Dev", "Case Study"];
  const authors = ["Alex Turner", "Sam Rivera", "Jordan Lee"];

  return (
    <article className="group relative overflow-hidden rounded-xl transition-all hover:bg-accent/5">
      <a href="#" className="flex flex-col space-y-4 p-4">
        <div className="relative overflow-hidden rounded-lg">
          <div className="aspect-[3/2] w-full">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Modern web interface design"
              width={600}
              height={400}
              className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-background/0" />
        </div>

        <div className="flex items-center gap-3">
          <Badge variant="secondary">{categories[index % 3]}</Badge>
          <span className="text-sm font-medium text-muted-foreground">
            {`${5 + (index % 3)} min read`}
          </span>
        </div>

        <h3 className="flex items-start justify-between text-xl font-semibold tracking-tight">
          <span className="line-clamp-2 group-hover:text-primary">
            {
              [
                "Next-Gen Responsive Design Patterns",
                "Optimizing React Component Architecture",
                "Accessibility in Modern Web Applications",
              ][index % 3]
            }
          </span>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </h3>

        <p className="line-clamp-2 text-muted-foreground">
          {
            [
              "Discover innovative approaches to responsive layouts using modern CSS features and container queries.",
              "Learn best practices for structuring large-scale React applications with maintainable component hierarchies.",
              "Essential techniques for building inclusive web experiences that work for everyone.",
            ][index % 3]
          }
        </p>

        <div className="flex items-center gap-3 pt-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted font-medium">
            {authors[index % 3]
              ?.split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{authors[index % 3]}</span>
            <span className="text-sm text-muted-foreground">
              {`${1 + (index % 28)} ${["Jan", "Feb", "Mar"][index % 3]} 2024`}
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}

function Pagination() {
  return (
    <nav aria-label="Pagination" className="flex items-center justify-center">
      <ul className="flex items-center gap-2">
        <li>
          <Button variant="outline" size="sm" className="gap-2">
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
        </li>
        <li className="hidden gap-1 md:flex">
          {[1, 2, 3, 4, 5].map((page) => (
            <Button
              key={page}
              variant={page === 1 ? "secondary" : "ghost"}
              size="sm"
              className="h-10 w-10"
            >
              {page}
            </Button>
          ))}
        </li>
        <li>
          <Button variant="outline" size="sm" className="gap-2">
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </li>
      </ul>
    </nav>
  );
}
