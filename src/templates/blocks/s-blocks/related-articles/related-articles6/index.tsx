import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Clock, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const articles = [
  {
    title: "Unlocking the Power of Progressive Web Apps",
    topic: "Web Development",
    description:
      "Discover how PWAs are bridging the gap between web and native apps, offering enhanced user experiences.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "2023-11-15",
    readTime: "7 min read",
    href: "#",
  },
  {
    title: "The Rise of AI in Content Creation",
    topic: "Artificial Intelligence",
    description:
      "Explore how AI-powered tools are transforming content creation, from generating text to designing visuals.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "2023-11-08",
    readTime: "9 min read",
    href: "#",
  },
  {
    title: "Building Scalable Microservices with Node.js",
    topic: "Backend Development",
    description:
      "Learn best practices for designing and deploying microservices architectures using Node.js.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "2023-11-01",
    readTime: "10 min read",
    href: "#",
  },
  {
    title: "Data Privacy in the Age of Big Data",
    topic: "Data Science",
    description:
      "Understand the challenges and strategies for protecting user data in a data-driven world.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "2023-10-25",
    readTime: "6 min read",
    href: "#",
  },
];

export default function RelatedArticlesCarousel() {
  return (
    <section className="bg-background py-12 md:py-24">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Recommended Reading
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Ideally, replace this with a carousel component */}
          {articles.map((article) => (
            <Card key={article.title} className="flex flex-col">
              <div className="flex-1">
                <Image
                  src={article.image}
                  alt={article.title}
                  className="h-48 w-full rounded-t-lg object-cover"
                  width={200}
                  height={200}
                />
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
                  <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <CalendarCheck className="mr-1 h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </div>
              <CardFooter>
                <Link href={article.href} passHref>
                  <Button variant="outline" className="w-full">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
