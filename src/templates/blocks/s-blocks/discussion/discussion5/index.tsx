"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MoreVertical } from "lucide-react";

interface Comment {
  id: number;
  author: string;
  avatar: string;
  date: string;
  content: string;
  likes: number;
}

const initialComments: Comment[] = [
  {
    id: 1,
    author: "Strategic Mind",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "April 5, 2024",
    content:
      "This article provides a concise overview, but remember the strategic approach should always be at the core of UX design. It's vital to understand user behavior before jumping into the how-tos.",
    likes: 45,
  },
  {
    id: 2,
    author: "Design Thinker",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "April 6, 2024",
    content:
      "Absolutely! The strategic perspective is key. Tools are only helpful when guided by a sound strategy and user empathy.",
    likes: 12,
  },
  {
    id: 3,
    author: "UX Advocate",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "April 7, 2024",
    content:
      "I agree. It's about focusing on the problem you're trying to solve, and then using the right tools and methods to create the most effective solution.",
    likes: 28,
  },
  {
    id: 4,
    author: "Backend Explorer",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "April 8, 2024",
    content:
      "Thanks for sharing! As someone transitioning from backend, it helps to see how the UI/UX strategy and tools fit into the bigger picture.",
    likes: 22,
  },
];

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>(initialComments);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    // In a real app, you would send this to a server
  };

  return (
    <section className="bg-background py-8 lg:py-16">
      <div className="mx-auto max-w-2xl px-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-bold text-foreground lg:text-2xl">
            Share Your Thoughts
          </h2>
          <Button variant="outline">Subscribe</Button>
        </div>
        <Card className="mb-6">
          <form onSubmit={handleSubmit} className="mb-6">
            <CardContent className="grid gap-4 p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label
                    htmlFor="first-name"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Your Name
                  </label>
                  <Input
                    type="text"
                    id="first-name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Your Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="website"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Your Website (Optional)
                  </label>
                  <Input
                    type="url"
                    id="website"
                    placeholder="https://yourwebsite.com"
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Leave your comments here..."
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit">Add Comment</Button>
            </CardFooter>
          </form>
        </Card>
        {comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </section>
  );
}

function CommentCard({ comment }: { comment: Comment }) {
  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <footer className="mb-2 flex items-center justify-between">
          <div className="flex items-center">
            <Avatar className="mr-2 h-8 w-8 ring-2 ring-primary">
              <AvatarImage src={comment.avatar} alt={comment.author} />
              <AvatarFallback>{comment.author[0]}</AvatarFallback>
            </Avatar>
            <div>
              <span className="text-sm font-semibold text-foreground">
                {comment.author}
              </span>
              <p className="text-sm text-muted-foreground">
                <time dateTime={comment.date} title={comment.date}>
                  {comment.date}
                </time>
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center text-muted-foreground"
            >
              <Heart className="mr-1 h-3 w-3" />
              {comment.likes}
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <MoreVertical className="h-4 w-4" />
                  <span className="sr-only">Comment settings</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Remove</DropdownMenuItem>
                <DropdownMenuItem>Report</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </footer>
        <p className="text-muted-foreground">{comment.content}</p>
        <Button variant="link" size="sm" className="mt-4">
          Reply
        </Button>
      </CardContent>
    </Card>
  );
}
