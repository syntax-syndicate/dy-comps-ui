import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "The Power of Serverless Computing in Modern Web Apps",
    category: "Cloud Computing",
    summary:
      "Discover how serverless architectures can help you build scalable and cost-effective web applications.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Replace with a relevant image
    readTime: "8 min read",
    date: "2023-11-15",
    href: "#",
  },
  {
    title: "A Comprehensive Guide to Accessibility in Web Design",
    category: "Web Development",
    summary:
      "Learn how to create inclusive and accessible web experiences for users of all abilities.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Replace with a relevant image
    readTime: "10 min read",
    date: "2023-11-08",
    href: "#",
  },
  {
    title: "Exploring the Latest Trends in AI and Machine Learning",
    category: "Artificial Intelligence",
    summary:
      "Stay up-to-date with the rapidly evolving field of AI and its impact on various industries.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Replace with a relevant image
    readTime: "9 min read",
    date: "2023-11-01",
    href: "#",
  },
  {
    title: "Mastering the Art of Responsive Design",
    category: "Web Design",
    summary:
      "Create websites that adapt seamlessly to different screen sizes and devices using these essential techniques.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Replace with a relevant image
    readTime: "7 min read",
    date: "2023-10-25",
    href: "#",
  },
];

export default function RelatedArticlesGrid() {
  return (
    <section className="bg-background py-12 md:py-24">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Further Reading
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {articles.map((article) => (
            <article
              key={article.title}
              className="rounded-lg border bg-card p-8 shadow-md transition-all duration-200 hover:shadow-lg"
            >
              <div className="flex h-full flex-col">
                {" "}
                {/* Added flex flex-col h-full */}
                <div className="flex-1">
                  {" "}
                  {/* Added flex-1 */}
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
                    className="mb-4 aspect-video w-full rounded-lg object-cover"
                  />
                  <p className="mb-4 text-muted-foreground">
                    {article.summary}
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href={article.href} passHref>
                    <Button variant="outline" className="w-full">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
