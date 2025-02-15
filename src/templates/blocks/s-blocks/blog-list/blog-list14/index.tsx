import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Video, FileText } from "lucide-react";

interface BlogPost {
  category: "Tutorial" | "Article";
  title: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  shares: number;
}

const blogPosts: BlogPost[] = [
  {
    category: "Tutorial",
    title: "How to build and deploy AI models with TensorFlow",
    author: {
      name: "Alex Johnson",
      avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    date: "March 26",
    shares: 178,
  },
  {
    category: "Article",
    title: "The future of AI in healthcare: Trends and predictions",
    author: {
      name: "Maria Gonzalez",
      avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    date: "March 26",
    shares: 178,
  },
  {
    category: "Article",
    title: "5 powerful AI applications transforming industries",
    author: {
      name: "Thomas Lean",
      avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    date: "March 26",
    shares: 178,
  },
];

const BlogPostItem: React.FC<{ post: BlogPost; className?: string }> = ({
  post,
  className = "",
}) => {
  return (
    <article className={`py-6 text-center ${className}`}>
      <Badge
        variant="secondary"
        className="bg-secondary text-secondary-foreground"
      >
        {post.category === "Tutorial" ? (
          <Video className="mr-1 h-3 w-3" />
        ) : (
          <FileText className="mr-1 h-3 w-3" />
        )}
        {post.category}
      </Badge>
      <h2 className="my-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
        <a href="#" className="hover:underline">
          {post.title}
        </a>
      </h2>
      <div className="flex items-center justify-center space-x-4 text-muted-foreground sm:space-x-6">
        <div className="flex items-center space-x-3">
          <Image
            className="h-6 w-6 rounded-full ring-2 ring-primary"
            src={
              post.author.avatar ||
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            }
            alt={`${post.author.name} portrait`}
            width={24}
            height={24}
          />
          <span className="text-lg font-medium text-foreground">
            {post.author.name}
          </span>
        </div>
        <span>{post.date}</span>
        <span>{post.shares} shares</span>
      </div>
    </article>
  );
};

export default function BlogSection() {
  return (
    <section className="bg-background py-8 sm:py-16">
      <div className="container mx-auto">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground">
            AI Insights Blog
          </h2>
          <p className="mb-8 text-muted-foreground sm:text-xl lg:mb-16">
            Stay updated with the latest trends, tutorials, and breakthroughs in
            AI computing.
          </p>
        </div>
        <div className="mx-auto max-w-screen-sm divide-y divide-border">
          {blogPosts.map((post, index) => (
            <BlogPostItem
              key={index}
              post={post}
              className={
                index === 0
                  ? "pb-6"
                  : index === blogPosts.length - 1
                    ? "pt-6"
                    : "py-6"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
