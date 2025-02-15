import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";

const articles = [
  {
    title: "The Transformative Power of AI in Healthcare",
    topic: "Artificial Intelligence",
    description:
      "Explore how AI is revolutionizing diagnostics, treatment, and patient care in the healthcare industry.",
    date: "2023-11-15",
    readTime: "8 min read",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    href: "#",
  },
  {
    title: "Sustainable Tech: Innovations for a Greener Future",
    topic: "Environmental Tech",
    description:
      "Discover the latest technological advancements aimed at reducing our environmental footprint.",
    date: "2023-11-08",
    readTime: "6 min read",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    href: "#",
  },
  {
    title: "The Future of Remote Work: Trends and Technologies",
    topic: "Remote Work",
    description:
      "Explore the evolving landscape of remote work and the tools shaping its future.",
    date: "2023-11-01",
    readTime: "7 min read",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    href: "#",
  },
  {
    title: "Cybersecurity in the Age of Quantum Computing",
    topic: "Cybersecurity",
    description:
      "Learn how quantum computing is posing new challenges and opportunities for cybersecurity.",
    date: "2023-10-25",
    readTime: "9 min read",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    href: "#",
  },
];

export default function RelatedArticlesTimeline() {
  return (
    <section className="bg-background py-12 md:py-24">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Explore More Insights
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {articles.map((article) => (
            <Card key={article.title} className="flex flex-col justify-between">
              <div className="flex-1">
                <CardHeader>
                  <Badge variant="secondary" className="mb-2 w-max">
                    {article.topic}
                  </Badge>
                  <CardTitle className="text-xl">
                    <Link href={article.href} className="hover:underline">
                      {article.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={100}
                    height={100}
                    className="mt-4 h-48 w-full rounded-lg object-cover"
                  />
                  <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </div>
              <div className="p-6 pt-0">
                <Link href={article.href} passHref>
                  <Button variant="link" className="w-full">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
