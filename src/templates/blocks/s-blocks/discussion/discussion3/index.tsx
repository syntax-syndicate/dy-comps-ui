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
  CodeIcon,
  SmileIcon,
  ListIcon,
  SettingsIcon,
  CalendarIcon,
  DownloadIcon,
  MoreHorizontal,
  MessageSquare,
} from "lucide-react";

interface CommentProps {
  id: string;
  author: string;
  avatar: string;
  date: string;
  content: string;
  votes: number;
  isReply?: boolean;
}

const comments: CommentProps[] = [
  {
    id: "1",
    author: "Creative Coder",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "April 5, 2024",
    content:
      "This piece is excellent. It effectively outlines the key elements, challenges, common misconceptions, and necessary steps a UX designer should keep in mind while creating a design strategy. Very informative!",
    votes: 18,
  },
  {
    id: "2",
    author: "Design Enthusiast",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "April 6, 2024",
    content: "Agreed! Really appreciate the insights. 😊",
    votes: 5,
    isReply: true,
  },
  {
    id: "3",
    author: "Tech Strategist",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "April 7, 2024",
    content:
      "A concise and well-structured article. It's valuable for both new and seasoned designers. Remember, the tools are merely extensions of our thought process; it’s the strategic approach that truly defines effective design.",
    votes: 15,
  },
  {
    id: "4",
    author: "Backend Explorer",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "April 8, 2024",
    content:
      "Thanks for sharing this. I'm transitioning from backend development and have been exploring tools for side projects. This helped me connect the dots with design strategy.",
    votes: 35,
  },
  {
    id: "5",
    author: "Aspiring Designer",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "April 9, 2024",
    content:
      "This is super helpful! I'm just starting out and seeing the focus on strategy is really important.",
    votes: 2,
    isReply: true,
  },
];

function CommentForm() {
  return (
    <div className="mb-6 flex gap-4">
      <Avatar className="hidden h-9 w-9 ring-2 ring-primary sm:block">
        <AvatarImage
          src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
          alt="User avatar"
        />
        <AvatarFallback>UN</AvatarFallback>
      </Avatar>
      <form className="w-full">
        <Textarea placeholder="Share your insights..." className="mb-4" />
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <Button variant="ghost" size="icon">
              <PaperclipIcon className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <MapPinIcon className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <ImageIcon className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <CodeIcon className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <SmileIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:inline-flex"
            >
              <ListIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:inline-flex"
            >
              <SettingsIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:inline-flex"
            >
              <CalendarIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:inline-flex"
            >
              <DownloadIcon className="h-4 w-4" />
            </Button>
          </div>
          <Button>Add comment</Button>
        </div>
      </form>
    </div>
  );
}

function Comment({
  author,
  avatar,
  date,
  content,
  votes,
  isReply = false,
}: CommentProps) {
  return (
    <Card className={isReply ? "ml-6 lg:ml-12" : ""}>
      <CardContent className="p-4 lg:p-6">
        <div className="flex gap-4">
          <div className="flex flex-col items-center rounded-full border">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-b-none rounded-t-md"
            >
              +
            </Button>
            <span className="py-1 text-sm font-medium">{votes}</span>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-b-md rounded-t-none"
            >
              -
            </Button>
          </div>
          <div className="flex-grow">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center">
                <Avatar className="mr-2 h-6 w-6 ring-2 ring-primary">
                  <AvatarImage src={avatar} alt={author} />
                  <AvatarFallback>{author[0]}</AvatarFallback>
                </Avatar>
                <span className="mr-2 text-sm font-semibold">{author}</span>
                <span className="text-xs text-muted-foreground">{date}</span>
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
            <p className="text-sm text-muted-foreground">{content}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <MessageSquare className="mr-2 h-4 w-4" />
          Reply
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function BJTDiscussionSection() {
  return (
    <section className="py-8 lg:py-16">
      <Card className="mx-auto max-w-2xl">
        <CardHeader className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Comment Section (20)</h2>
          <Button variant="outline">Subscribe</Button>
        </CardHeader>
        <CardContent>
          <CommentForm />
          <div className="space-y-6">
            {comments.map((comment) => (
              <Comment key={comment.id} {...comment} />
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
