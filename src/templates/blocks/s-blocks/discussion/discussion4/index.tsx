import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  PaperclipIcon,
  MapPinIcon,
  ImageIcon,
  MoreHorizontal,
  MessageSquare,
  Heart,
} from "lucide-react";

interface CommentProps {
  author: string;
  avatar: string;
  date: string;
  content: string;
  likes: number;
  isReply?: boolean;
}

const comments: CommentProps[] = [
  {
    author: "Strategic Thinker",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "April 5, 2024",
    content:
      "This article really hits the mark! It emphasizes the critical role of strategy in UX design, beyond just knowing the tools. Understanding the user's journey and needs is paramount.",
    likes: 22,
  },
  {
    author: "Design Collaborator",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "April 6, 2024",
    content:
      "Totally agree! The strategic approach makes all the difference. 😊",
    likes: 8,
    isReply: true,
  },
  {
    author: "UX Innovator",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "April 7, 2024",
    content:
      "The content is concise and insightful. It's a great reminder that tools are just enablers; it's the strategic mindset and planning that shapes effective design solutions. It's about purpose over procedure.",
    likes: 30,
  },
  {
    author: "Backend Convert",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "April 8, 2024",
    content:
      "Thanks for this perspective! Coming from a backend background, exploring design tools for side projects is quite insightful. This provides great context.",
    likes: 15,
  },
  {
    author: "Aspiring UXer",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "April 9, 2024",
    content:
      "This is so helpful for someone just starting out! It's great to know where the focus should be.",
    likes: 4,
  },
];

function CommentForm() {
  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <Textarea placeholder="Share your insights..." className="mb-4" />
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
          <Button>Add comment</Button>
        </div>
      </CardContent>
    </Card>
  );
}

function Comment({
  author,
  avatar,
  date,
  content,
  likes,
  isReply = false,
}: CommentProps) {
  return (
    <Card className={isReply ? "ml-12" : ""}>
      <CardContent className="p-4">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center">
            <Avatar className="mr-2 h-6 w-6 ring-2 ring-primary">
              <AvatarImage src={avatar} alt={author} />
              <AvatarFallback>{author[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold">{author}</p>
              <p className="text-xs text-muted-foreground">{date}</p>
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
        <p className="mb-4 text-sm text-muted-foreground">{content}</p>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <Heart className="mr-2 h-4 w-4" />
            {likes} Likes
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <MessageSquare className="mr-2 h-4 w-4" />
            Reply
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function DiscussionSection() {
  return (
    <section className="py-8 lg:py-16">
      <div className="mx-auto max-w-2xl px-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Join the Discussion (20)</h2>
          <Button variant="outline">Subscribe</Button>
        </div>
        <CommentForm />
        <div className="space-y-6">
          {comments.map((comment, index) => (
            <Comment key={index} {...comment} />
          ))}
        </div>
      </div>
    </section>
  );
}
