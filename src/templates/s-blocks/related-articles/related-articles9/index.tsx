import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Navigating the World of Serverless Computing",
    tags: ["Cloud", "Serverless", "AWS"],
    summary:
      "A comprehensive guide to understanding serverless architectures and their benefits for modern web applications.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Replace with a relevant image
    readTime: "9 min read",
    href: "#",
  },
  {
    title: "The Impact of AI on Digital Marketing Strategies",
    tags: ["AI", "Marketing", "Automation"],
    summary:
      "Explore how artificial intelligence is reshaping digital marketing, from personalized content to predictive analytics.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Replace with a relevant image
    readTime: "7 min read",
    href: "#",
  },
  {
    title: "Building Accessible User Interfaces: Principles and Practices",
    tags: ["WebDev", "Accessibility", "UI/UX"],
    summary:
      "Learn how to design and develop web interfaces that are inclusive and usable for everyone, including people with disabilities.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Replace with a relevant image
    readTime: "11 min read",
    href: "#",
  },
  {
    title: "Cybersecurity Trends to Watch in the Coming Year",
    tags: ["Security", "Cybersecurity", "Trends"],
    summary:
      "Stay ahead of the curve with insights into the latest cybersecurity threats and emerging defense strategies.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Replace with a relevant image
    readTime: "6 min read",
    href: "#",
  },
];

export default function RelatedArticlesFeature() {
  return (
    <section className="bg-background py-12 md:py-24">
      <div className="container">
        <h2 className="mb-16 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Dive Deeper
        </h2>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-6 lg:col-span-1">
            {articles.slice(0, 2).map((article) => (
              <article key={article.title} className="group relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="mb-4 h-64 w-full rounded-lg object-cover"
                />
                <div className="rounded-lg bg-card p-6 shadow-md">
                  <div className="mb-2 flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">
                    <Link href={article.href} className="hover:underline">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    {article.summary}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      {article.readTime}
                    </span>
                    <Link href={article.href} passHref>
                      <Button variant="link" className="font-medium">
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 lg:col-span-1">
            {articles.slice(2, 4).map((article) => (
              <article key={article.title} className="group relative">
                <div className="rounded-lg bg-card p-6 shadow-md">
                  <div className="mb-2 flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">
                    <Link href={article.href} className="hover:underline">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    {article.summary}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      {article.readTime}
                    </span>
                    <Link href={article.href} passHref>
                      <Button variant="link" className="font-medium">
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <img
                  src={article.image}
                  alt={article.title}
                  className="mt-4 h-64 w-full rounded-lg object-cover"
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
