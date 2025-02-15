import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal, MessageSquare } from "lucide-react";

interface Comment {
  id: string;
  author: string;
  avatar: string;
  date: string;
  content: string;
}

const comments: Comment[] = [
  {
    id: "1",
    author: "Tech Enthusiast",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "March 15, 2024",
    content:
      "An insightful piece! It really highlights the need for a solid understanding of not just the tools but also the underlying design principles. It's easy to get lost in software without a strategy.",
  },
  {
    id: "2",
    author: "Design Maven",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "March 16, 2024",
    content:
      "Absolutely! Agreed on the importance of strategic thinking. The best tools are those used with purpose and skill, not just for their own sake.",
  },
  {
    id: "3",
    author: "Curious Learner",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "March 17, 2024",
    content:
      "I'm just starting to learn about this and this is really helpful! It's good to know to focus on the strategy first.",
  },
  // Add more comments as needed
];

export default function DiscussionSection() {
  return (
    <section className="py-8 lg:py-16">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <h2 className="text-2xl font-bold">Engage the Conversation (20)</h2>
        </CardHeader>
        <CardContent>
          <form className="mb-6">
            <Textarea
              id="comment"
              placeholder="Share your thoughts..."
              className="mb-4"
            />
            <Button>Post comment</Button>
          </form>
          {comments.map((comment) => (
            <Card key={comment.id} className="mb-6">
              <CardContent className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="mr-2 ring-2 ring-primary">
                      <AvatarImage src={comment.avatar} alt={comment.author} />
                      <AvatarFallback>{comment.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold">{comment.author}</p>
                      <p className="text-xs text-muted-foreground">
                        {comment.date}
                      </p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant={"ghost"} size={"sm"}>
                        <MoreHorizontal className="h-4 w-4" />
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
                <p className="mt-4 text-sm text-muted-foreground">
                  {comment.content}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Reply
                </Button>
              </CardFooter>
            </Card>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
