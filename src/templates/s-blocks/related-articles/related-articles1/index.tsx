import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "The Future of AI in Web Development",
    description:
      "Explore how artificial intelligence is revolutionizing the way we build and interact with websites.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    readTime: "5 minutes",
  },
  {
    title: "Mastering Responsive Design Techniques",
    description:
      "Learn advanced strategies for creating seamless user experiences across all device sizes.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    readTime: "8 minutes",
  },
  {
    title: "The Rise of Serverless Architecture",
    description:
      "Discover how serverless computing is changing the landscape of backend development.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    readTime: "6 minutes",
  },
  {
    title: "Optimizing Performance with Next.js",
    description:
      "Unlock the full potential of your web applications with Next.js optimization techniques.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    readTime: "7 minutes",
  },
];

export default function RelatedArticles() {
  return (
    <aside
      aria-label="Related articles"
      className="bg-background py-8 lg:py-24"
    >
      <div className="container mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">
            Related articles
          </h2>
          <Link
            href="#"
            className="inline-flex items-center font-medium text-primary hover:underline"
          >
            View all related articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((article, index) => (
            <Card key={index} className="max-w-xs">
              <CardHeader className="p-0">
                <Link href="#" className="relative block aspect-square">
                  <Image
                    src={
                      article.image ||
                      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    }
                    alt={`Article ${index + 1}`}
                    fill
                    className="rounded-t-lg object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </Link>
              </CardHeader>
              <CardContent className="pt-4">
                <CardTitle className="mb-2 text-xl">
                  <Link href="#" className="hover:underline">
                    {article.title}
                  </Link>
                </CardTitle>
                <p className="text-muted-foreground">{article.description}</p>
              </CardContent>
              <CardFooter>
                <Link
                  href="#"
                  className="inline-flex items-center font-medium text-primary underline underline-offset-4 hover:no-underline"
                >
                  Read in {article.readTime}
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </aside>
  );
}
