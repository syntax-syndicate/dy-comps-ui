"use client";

import { useState } from "react";
import Image from "next/image";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    description:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Technology",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Design",
  },
  {
    id: 3,
    title: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Business",
  },
  {
    id: 4,
    title: "Ut enim ad minim veniam, quis nostrud exercitation",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Technology",
  },
  {
    id: 5,
    title: "Excepteur sint occaecat cupidatat non proident",
    description:
      "Sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Design",
  },
  {
    id: 6,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Business",
  },
];

export default function BlogList5() {
  const [filter, setFilter] = useState("All");

  const filterOptions = ["All", "Technology", "Design", "Business"];

  const filteredPosts =
    filter === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === filter);

  return (
    <section className="bg-background py-12 md:py-24 lg:py-32">
      <div className="container">
        <h2 className="mb-8 text-3xl font-medium tracking-tighter text-foreground sm:text-5xl">
          All case studies
        </h2>
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <div className="w-full sm:w-auto">
            <select
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              {filterOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="group rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <Image
                src={post.image}
                alt={post.title}
                className="mb-4 aspect-video w-full rounded-md object-cover"
                width={600}
                height={400}
              />
              <h3 className="mb-2 text-xl font-bold text-card-foreground">
                {post.title}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                {post.description}
              </p>
              <div className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                {post.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
