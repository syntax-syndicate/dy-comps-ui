import { ArrowRight, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface BlogPost {
  tag: string;
  image: string;
  title: string;
  description: string;
  href: string;
}

export default function BlogList12() {
  const posts: BlogPost[] = [
    {
      tag: "Blog",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      title: "Vespa Newsletter, October 2024",
      description:
        "Advances in Vespa features and performance include Global significance models and Nearest Neighbor Search with multiple sparse tensor dimensions.",
      href: "#",
    },
    {
      tag: "Blog",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      title:
        'vespa.ai: The "Sleeping Giant" Powering Next-Gen Search and Recommendations',
      description:
        "Vespa has quietly led the way in search and recommendation systems, providing the backbone for some of today's most advanced applications.",
      href: "#",
    },
    {
      tag: "Blog",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      title: "Deploying RAG at Scale: Key Questions for Vendors",
      description:
        "Retrieval-augmented generation (RAG) has emerged as a vital technology for organizations embracing generative AI.",
      href: "#",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <Card key={index} className="flex flex-col overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative">
                <Image
                  src={post.image}
                  alt=""
                  width={600}
                  height={400}
                  className="aspect-[3/2] object-cover"
                />
                <div className="absolute left-4 top-4">
                  <span className="inline-flex items-center rounded-md bg-accent px-2 py-1 text-sm font-medium">
                    <Tag className="mr-1 size-3" />
                    {post.tag}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-6">
              <h2 className="mb-4 text-2xl font-bold tracking-tight">
                {post.title}
              </h2>
              <p className="text-muted-foreground">{post.description}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Link
                href={post.href}
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Read more
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
