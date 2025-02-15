import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, ChevronRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "The Essential Guide to Building Scalable APIs",
    category: "Backend Development",
    summary:
      "Learn best practices for designing, developing, and deploying robust and scalable APIs.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Replace with a relevant image
    readTime: "12 min read",
    href: "#",
    tags: ["API", "REST", "Scalability", "Node.js"],
  },
  {
    title: "Exploring the Latest Advancements in Frontend Frameworks",
    category: "Frontend Development",
    summary:
      "Stay up-to-date with the newest features and trends in popular frontend frameworks like React, Angular, and Vue.js.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Replace with a relevant image
    readTime: "9 min read",
    href: "#",
    tags: ["React", "Angular", "Vue.js", "JavaScript"],
  },
  {
    title: "A Deep Dive into the World of Progressive Web Apps",
    category: "Web Development",
    summary:
      "Discover how Progressive Web Apps (PWAs) are revolutionizing the web by delivering app-like experiences.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Replace with a relevant image
    readTime: "8 min read",
    href: "#",
    tags: ["PWA", "Web Apps", "JavaScript", "Service Workers"],
  },
  {
    title: "Demystifying Machine Learning for Web Developers",
    category: "Artificial Intelligence",
    summary:
      "Get started with machine learning concepts and learn how to integrate AI into your web projects.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Replace with a relevant image
    readTime: "10 min read",
    href: "#",
    tags: ["AI", "Machine Learning", "TensorFlow.js", "Web Dev"],
  },
];

export default function RelatedArticlesDiagonal() {
  return (
    <section className="bg-background py-12 md:py-24">
      <div className="container">
        <h2 className="mb-16 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          More to Explore
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {articles.map((article, index) => (
            <article
              key={article.title}
              className={`relative flex flex-col justify-between rounded-lg border bg-card p-6 shadow-md transition-all duration-200 hover:shadow-lg`}
            >
              {/* Diagonal Line */}
              <div className="z-10">
                {" "}
                {/* Ensure content is above the line */}
                <Badge variant="secondary" className="mb-4">
                  {article.category}
                </Badge>
                <h3 className="mb-4 text-xl font-bold">
                  <Link href={article.href} className="hover:underline">
                    {article.title}
                  </Link>
                </h3>
                <img
                  src={article.image}
                  alt={article.title}
                  className="mb-4 h-48 w-full rounded-lg object-cover"
                />
                <p className="mb-4 text-muted-foreground">{article.summary}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="rounded-md px-2 py-1 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    {article.readTime}
                  </span>
                </div>
              </div>
              <div className="z-10 mt-6">
                {" "}
                {/* Ensure button is above the line */}
                <Link href={article.href} passHref>
                  <Button variant="secondary" className="w-full">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
