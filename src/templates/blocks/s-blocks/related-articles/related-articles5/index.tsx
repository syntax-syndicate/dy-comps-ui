import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const articles = [
  {
    title: "Mastering the Art of Responsive Web Design",
    category: "Web Development",
    summary:
      "Learn the essential techniques for creating websites that adapt seamlessly to any device and screen size.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    readTime: "8 min read",
    href: "#",
  },
  {
    title: "The Future of AI in Software Engineering",
    category: "Artificial Intelligence",
    summary:
      "Explore how AI is transforming the software development lifecycle, from code generation to testing and deployment.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    readTime: "10 min read",
    href: "#",
  },
  {
    title: "A Comprehensive Guide to Serverless Architectures",
    category: "Cloud Computing",
    summary:
      "Dive into the world of serverless computing and learn how to build scalable, cost-effective applications.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    readTime: "7 min read",
    href: "#",
  },
  {
    title: "Cybersecurity Best Practices for Modern Web Apps",
    category: "Security",
    summary:
      "Protect your web applications from evolving threats with these essential cybersecurity strategies.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    readTime: "9 min read",
    href: "#",
  },
];

export default function RelatedArticlesList() {
  return (
    <section className="bg-background py-12 md:py-24">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Keep Reading
        </h2>
        <div className="space-y-6">
          {articles.map((article) => (
            <article
              key={article.title}
              className="rounded-lg border bg-card p-6 shadow-md transition-all duration-200 hover:shadow-lg"
            >
              <div className="flex flex-col items-start gap-6 md:flex-row">
                <div className="md:w-1/3">
                  <Image
                    src={article.image}
                    alt={article.title}
                    className="h-48 w-full rounded-lg object-cover"
                    width={200}
                    height={100}
                  />
                </div>
                <div className="md:w-2/3">
                  <Badge variant="secondary" className="mb-2">
                    {article.category}
                  </Badge>
                  <h3 className="mb-2 text-xl font-semibold">
                    <Link href={article.href} className="hover:underline">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    {article.summary}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {article.readTime}
                    </span>
                    <Link href={article.href} passHref>
                      <Button
                        variant="link"
                        className="font-medium text-primary"
                      >
                        Read More <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
