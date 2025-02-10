"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  MessageSquare,
  MoreHorizontal,
  PaperclipIcon,
  MapPinIcon,
  ImageIcon,
} from "lucide-react";

interface Comment {
  id: number;
  author: string;
  avatar: string;
  date: string;
  content: string;
  replies: Comment[];
}

const initialComments: Comment[] = [
  {
    id: 1,
    author: "Strategic Thinker",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "April 5, 2024",
    content:
      "This article really nails the essence of UX design strategy. It’s not just about the tools; it’s about how you use them to achieve a larger goal. Understanding the user’s journey is paramount.",
    replies: [
      {
        id: 11,
        author: "Design Novice",
        avatar:
          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        date: "April 6, 2024",
        content:
          "I'm just starting out, and this is incredibly helpful. It's good to know where to focus my learning efforts.",
        replies: [],
      },
    ],
  },
  {
    id: 2,
    author: "UX Veteran",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "April 7, 2024",
    content:
      "As someone who's been in the field for years, I can attest to the importance of a strategic approach. It's easy to get lost in the latest tools and trends, but the fundamentals of understanding user needs never change.",
    replies: [],
  },
  {
    id: 3,
    author: "Backend Dev",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "April 8, 2024",
    content:
      "Coming from a backend background, this perspective is invaluable. It helps me understand how my work integrates with the front-end to create a cohesive user experience.",
    replies: [],
  },
];

function CommentForm() {
  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <Textarea placeholder="Share your thoughts..." className="mb-4" />
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon">
              <PaperclipIcon className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <MapPinIcon className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <ImageIcon className="h-4 w-4" />
            </Button>
          </div>
          <Button>Post Comment</Button>
        </div>
      </CardContent>
    </Card>
  );
}

function CommentCard({ comment }: { comment: Comment }) {
  const [showReplyForm, setShowReplyForm] = useState(false);

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center">
            <Avatar className="mr-2 h-8 w-8 border-2 border-primary">
              <AvatarImage src={comment.avatar} alt={comment.author} />
              <AvatarFallback>{comment.author[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold text-foreground">
                {comment.author}
              </p>
              <p className="text-xs text-muted-foreground">{comment.date}</p>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Remove</DropdownMenuItem>
              <DropdownMenuItem>Report</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <p className="text-sm text-muted-foreground">{comment.content}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground"
          onClick={() => setShowReplyForm(!showReplyForm)}
        >
          <MessageSquare className="mr-2 h-4 w-4" />
          Reply
        </Button>
      </CardFooter>
      {showReplyForm && (
        <CardContent className="pt-0">
          <Textarea placeholder="Reply to this comment..." className="mb-4" />
          <Button size="sm">Post Reply</Button>
        </CardContent>
      )}
      {comment.replies.length > 0 && (
        <div className="mx-4 ml-8 mt-4 space-y-4">
          {comment.replies.map((reply) => (
            <CommentCard key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </Card>
  );
}

export default function NestedCommentSection() {
  const [comments, setComments] = useState<Comment[]>(initialComments);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="bg-background py-8 lg:py-16">
      <div className="mx-auto max-w-3xl px-4">
        <Card className="mb-6">
          <CardHeader>
            <h2 className="text-lg font-bold text-foreground lg:text-2xl">
              Join the Discussion
            </h2>
          </CardHeader>
          <CardContent>
            <CommentForm />
            <div className="space-y-6">
              {comments.map((comment) => (
                <CommentCard key={comment.id} comment={comment} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
