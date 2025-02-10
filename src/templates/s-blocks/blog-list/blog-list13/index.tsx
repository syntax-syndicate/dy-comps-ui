import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Video, FileText, ArrowRight } from "lucide-react";

interface BlogPost {
  category: "Tutorial" | "Article";
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    category: "Tutorial",
    title: "How to build and deploy AI models with TensorFlow",
    excerpt:
      "Learn how to create, train, and deploy AI models using TensorFlow, and explore best practices for scaling AI applications in production.",
    author: {
      name: "Alex Johnson",
      avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    date: "7 days ago",
  },
  {
    category: "Article",
    title: "The future of AI in healthcare: Trends and predictions",
    excerpt:
      "Discover how AI is transforming healthcare, from diagnostics to personalized medicine, and what the future holds for AI-driven innovations.",
    author: {
      name: "Maria Gonzalez",
      avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    date: "10 days ago",
  },
];

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <Card>
      <CardHeader>
        <div className="mb-5 flex items-center justify-between text-muted-foreground">
          <Badge variant="secondary" className="flex items-center gap-1">
            {post.category === "Tutorial" ? (
              <Video className="h-3 w-3" />
            ) : (
              <FileText className="h-3 w-3" />
            )}
            {post.category}
          </Badge>
          <span className="text-sm">{post.date}</span>
        </div>
        <h2 className="mb-2 text-2xl font-bold tracking-tight">
          <a href="#" className="text-card-foreground hover:underline">
            {post.title}
          </a>
        </h2>
      </CardHeader>
      <CardContent>
        <p className="mb-5 text-muted-foreground">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image
            className="rounded-full"
            src={
              post.author.avatar ||
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            }
            alt={`${post.author.name} avatar`}
            width={28}
            height={28}
          />
          <span className="font-medium">{post.author.name}</span>
        </div>
        <a
          href="#"
          className="inline-flex items-center font-medium text-primary hover:underline"
        >
          Read more
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </CardFooter>
    </Card>
  );
};

export default function BlogSection() {
  return (
    <section className="bg-background py-8 lg:py-16">
      <div className="container mx-auto">
        <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-extrabold lg:text-4xl">
            AI Insights Blog
          </h2>
          <p className="text-muted-foreground sm:text-xl">
            Explore the latest trends, tutorials, and breakthroughs in AI
            computing, and stay ahead in the world of artificial intelligence.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
