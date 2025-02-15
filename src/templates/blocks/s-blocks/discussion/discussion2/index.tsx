"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  MessageSquare,
  ThumbsUp,
  MoreHorizontal,
  Send,
  Paperclip,
  MapPin,
  ImageIcon,
} from "lucide-react";

interface Comment {
  id: number;
  author: string;
  avatar: string;
  date: string;
  content: string;
  likes: number;
  replies: Comment[];
}

const initialComments: Comment[] = [
  {
    id: 1,
    author: "Aria Starlight",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "2 hours ago",
    content:
      "This discussion on UX strategy is enlightening! It's crucial to balance design tools with a solid strategic approach.",
    likes: 15,
    replies: [
      {
        id: 2,
        author: "Leo Nightshade",
        avatar:
          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        date: "1 hour ago",
        content:
          "The synergy between tools and strategy is where the magic happens in UX design.",
        likes: 7,
        replies: [],
      },
    ],
  },
  {
    id: 3,
    author: "Nova Flux",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "3 hours ago",
    content:
      "As a backend developer, I find it fascinating how UX decisions impact the entire product architecture. Great insights!",
    likes: 10,
    replies: [],
  },
];

export default function EnhancedCommentSection() {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const comment: Comment = {
      id: Date.now(),
      author: "You",
      avatar: "/avatars/you.jpg",
      date: "Just now",
      content: newComment,
      likes: 0,
      replies: [],
    };

    setComments([comment, ...comments]);
    setNewComment("");
  };

  const handleLike = (commentId: number) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes + 1 }
          : comment,
      ),
    );
  };

  return (
    <section className="py-16">
      <Card className="mx-auto w-full max-w-3xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <h2 className="text-2xl font-bold">Community Insights</h2>
          <Badge variant="secondary" className="text-sm">
            {comments.length} Comments
          </Badge>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Textarea
              placeholder="Share your thoughts..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="min-h-[100px]"
            />
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Paperclip className="mr-2 h-4 w-4" />
                  Attach
                </Button>
                <Button variant="outline" size="sm">
                  <ImageIcon className="mr-2 h-4 w-4" />
                  Image
                </Button>
                <Button variant="outline" size="sm">
                  <MapPin className="mr-2 h-4 w-4" />
                  Location
                </Button>
              </div>
              <Button onClick={handleAddComment}>
                <Send className="mr-2 h-4 w-4" />
                Post Comment
              </Button>
            </div>
          </div>
          <Separator className="my-6" />
          <ScrollArea className="h-[600px] pr-4">
            {comments.map((comment) => (
              <CommentCard
                key={comment.id}
                comment={comment}
                onLike={handleLike}
              />
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    </section>
  );
}

function CommentCard({
  comment,
  onLike,
}: {
  comment: Comment;
  onLike: (id: number) => void;
}) {
  return (
    <Card className="mb-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center">
          <Avatar className="mr-2 h-10 w-10 ring-2 ring-primary">
            <AvatarImage src={comment.avatar} alt={comment.author} />
            <AvatarFallback>{comment.author[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{comment.author}</h3>
            <p className="text-sm text-muted-foreground">{comment.date}</p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
            <DropdownMenuItem>Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <p>{comment.content}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="sm" onClick={() => onLike(comment.id)}>
          <ThumbsUp className="mr-2 h-4 w-4" />
          {comment.likes} Likes
        </Button>
        <Button variant="ghost" size="sm">
          <MessageSquare className="mr-2 h-4 w-4" />
          Reply
        </Button>
      </CardFooter>
      {comment.replies.length > 0 && (
        <CardContent className="pt-0">
          <div className="ml-6 space-y-4">
            {comment.replies.map((reply) => (
              <CommentCard key={reply.id} comment={reply} onLike={onLike} />
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
}
