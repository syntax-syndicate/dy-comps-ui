import React from "react";
import Image from "next/image";
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
    date: "12 days ago",
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
    date: "24 days ago",
  },
  {
    category: "Article",
    title: "5 powerful AI applications transforming industries",
    excerpt:
      "Explore how AI is revolutionizing industries like finance, manufacturing, and retail, and learn about the key technologies driving this change.",
    author: {
      name: "Roberta Casas",
      avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    date: "2 months ago",
  },
];

const BlogPostItem: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <article className="py-6 first:pt-0 last:pb-0">
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
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground">
        <a href="#" className="hover:underline">
          {post.title}
        </a>
      </h2>
      <p className="mb-5 text-muted-foreground">{post.excerpt}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image
            className="rounded-full ring-2 ring-primary"
            src={
              post.author.avatar ||
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            }
            alt={`${post.author.name} avatar`}
            width={40}
            height={40}
          />
          <span className="font-medium text-foreground">
            {post.author.name}
          </span>
        </div>
        <a
          href="#"
          className="inline-flex items-center font-medium text-primary hover:underline"
        >
          Read more
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </article>
  );
};

export default function BlogSection() {
  return (
    <section className="bg-background py-8 lg:py-16">
      <div className="container mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground">
              AI Insights Blog
            </h2>
            <p className="text-muted-foreground sm:text-xl">
              Stay updated with the latest trends, tutorials, and breakthroughs
              in AI computing.
            </p>
          </div>
          <div className="divide-y divide-border">
            {blogPosts.map((post, index) => (
              <BlogPostItem key={index} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
