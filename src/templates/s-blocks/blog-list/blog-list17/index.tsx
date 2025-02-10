import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  image?: string;
  link: string;
}

const featuredPost: BlogPost = {
  title: "Building AI Models: A Beginner's Guide to TensorFlow",
  excerpt:
    "Learn how to create, train, and deploy AI models using TensorFlow, and explore best practices for scaling AI applications in production.",
  image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  link: "#",
};

const smallPosts: BlogPost[] = [
  {
    title: "How to Optimize AI Models for Performance",
    excerpt:
      "Discover techniques to optimize AI models for faster inference and better resource utilization.",
    link: "#",
  },
  {
    title: "AI in Healthcare: Trends and Predictions",
    excerpt:
      "Explore how AI is transforming healthcare, from diagnostics to personalized medicine, and what the future holds.",
    link: "#",
  },
  {
    title: "Revolutionizing Industries with AI",
    excerpt:
      "Learn how AI is revolutionizing industries like finance, manufacturing, and retail, and the key technologies driving this change.",
    link: "#",
  },
  {
    title: "Ethical AI: Challenges and Best Practices",
    excerpt:
      "Understand the ethical challenges of AI development and learn best practices for building responsible AI systems.",
    link: "#",
  },
  {
    title: "AI-Powered Automation: Benefits and Use Cases",
    excerpt:
      "Explore the benefits of AI-powered automation and real-world use cases across various industries.",
    link: "#",
  },
  {
    title: "How to Get Started with AI Development",
    excerpt:
      "A step-by-step guide to getting started with AI development, from setting up your environment to deploying your first model.",
    link: "#",
  },
];

const FeaturedArticle: React.FC<{ post: BlogPost }> = ({ post }) => (
  <article>
    <a href={post.link}>
      <Image
        className="mb-5 rounded-lg"
        src={
          post.image ||
          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
        }
        alt={post.title}
        width={800}
        height={400}
      />
    </a>
    <h2 className="my-2 text-2xl font-bold tracking-tight text-foreground">
      <a href={post.link}>{post.title}</a>
    </h2>
    <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
    <a
      href={post.link}
      className="inline-flex items-center font-medium text-primary hover:underline"
    >
      Read more
      <ArrowRight className="ml-2 h-4 w-4" />
    </a>
  </article>
);

const SmallArticle: React.FC<{ post: BlogPost }> = ({ post }) => (
  <article>
    <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground">
      <a href={post.link}>{post.title}</a>
    </h2>
    <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
    <a
      href={post.link}
      className="inline-flex items-center font-medium text-primary hover:underline"
    >
      Read more
      <ArrowRight className="ml-2 h-4 w-4" />
    </a>
  </article>
);

export default function BlogSection() {
  return (
    <section className="bg-background py-8 sm:py-16">
      <div className="container mx-auto">
        <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground lg:text-4xl">
            AI Insights Blog
          </h2>
          <p className="text-muted-foreground sm:text-xl">
            Stay updated with the latest trends, tutorials, and breakthroughs in
            AI computing.
          </p>
        </div>
        <div className="mb-16 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <FeaturedArticle post={featuredPost} />
          </div>
          <div className="space-y-8 lg:col-span-1 lg:border-l lg:border-r lg:px-8">
            {smallPosts.slice(0, 3).map((post, index) => (
              <SmallArticle key={index} post={post} />
            ))}
          </div>
          <div className="space-y-8 lg:col-span-1">
            {smallPosts.slice(3).map((post, index) => (
              <SmallArticle key={index} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
