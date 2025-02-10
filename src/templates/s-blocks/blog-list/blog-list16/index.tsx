import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Building AI Models with TensorFlow",
    excerpt:
      "Learn how to create, train, and deploy AI models using TensorFlow, and explore best practices for scaling AI applications in production.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Tutorial",
    author: {
      name: "Alex Johnson",
      avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    date: "Aug 15, 2023",
    readTime: "16 min read",
  },
  {
    title: "AI in Healthcare: Trends and Predictions",
    excerpt:
      "Discover how AI is transforming healthcare, from diagnostics to personalized medicine, and what the future holds for AI-driven innovations.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Article",
    author: {
      name: "Maria Gonzalez",
      avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    date: "Aug 15, 2023",
    readTime: "16 min read",
  },
  {
    title: "Revolutionizing Industries with AI",
    excerpt:
      "Explore how AI is revolutionizing industries like finance, manufacturing, and retail, and learn about the key technologies driving this change.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Article",
    author: {
      name: "Sofia McGuire",
      avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    date: "Aug 15, 2023",
    readTime: "16 min read",
  },
];

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <a href="#">
          <Image
            className="aspect-video rounded-t-lg object-cover"
            src={
              post.image ||
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            }
            alt={post.title}
            width={800}
            height={400}
          />
        </a>
      </CardHeader>
      <CardContent className="p-4">
        <Badge variant="secondary" className="mb-2">
          {post.category}
        </Badge>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground">
          <a href="#" className="hover:underline">
            {post.title}
          </a>
        </h2>
        <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="p-4">
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
          <div className="font-medium">
            <div className="text-foreground">{post.author.name}</div>
            <div className="text-sm text-muted-foreground">
              {post.date} · {post.readTime}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default function BlogSection() {
  return (
    <section className="bg-background py-8 lg:py-16">
      <div className="container mx-auto">
        <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground">
            AI Insights Blog
          </h2>
          <p className="text-muted-foreground sm:text-xl">
            Stay updated with the latest trends, tutorials, and breakthroughs in
            AI computing.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
