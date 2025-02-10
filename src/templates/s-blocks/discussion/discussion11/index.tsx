"use client";

import * as React from "react";
import {
  Bold,
  Italic,
  Underline,
  Link2,
  ImageIcon,
  Smile,
  AtSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface Comment {
  id: number;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  dislikes: number;
  replies: Comment[];
}

const initialComments: Comment[] = [
  {
    id: 1,
    author: {
      name: "Noah Pierre",
      avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    content:
      "I'm a bit unclear about how condensation forms in the water cycle. Can someone break it down?",
    timestamp: "58 minutes ago",
    likes: 25,
    dislikes: 3,
    replies: [
      {
        id: 2,
        author: {
          name: "Skill Sprout",
          avatar:
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        },
        content:
          "Condensation happens when water vapor cools down and changes back into liquid droplets. It's the step before precipitation. The example with the glass of ice water in the video was a great visual!",
        timestamp: "8 minutes ago",
        likes: 2,
        dislikes: 0,
        replies: [],
      },
    ],
  },
  {
    id: 3,
    author: {
      name: "Mollie Hall",
      avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    content:
      "I really enjoyed today's lesson on the water cycle! The animations made the processes so much easier to grasp.",
    timestamp: "5 hours ago",
    likes: 12,
    dislikes: 1,
    replies: [],
  },
];

export default function ModernCommentSection() {
  const [comments, setComments] = React.useState<Comment[]>(initialComments);
  const [commentText, setCommentText] = React.useState("");
  const [sortBy, setSortBy] = React.useState("recent");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment: Comment = {
      id: Date.now(),
      author: {
        name: "You",
        avatar:
          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      content: commentText,
      timestamp: "Just now",
      likes: 0,
      dislikes: 0,
      replies: [],
    };

    setComments([newComment, ...comments]);
    setCommentText("");
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

  const handleDislike = (commentId: number) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? { ...comment, dislikes: comment.dislikes + 1 }
          : comment,
      ),
    );
  };

  return (
    <div className="mx-auto w-full max-w-3xl space-y-6 py-16">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <Textarea
            placeholder="Add comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="min-h-[100px] resize-none border-0 focus:ring-0"
          />
          <div className="flex items-center justify-between border-t p-2">
            <ToggleGroup type="multiple" className="gap-1">
              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Toggle underline">
                <Underline className="h-4 w-4" />
              </ToggleGroupItem>
              <Separator orientation="vertical" className="mx-1 h-6" />
              <ToggleGroupItem value="link" aria-label="Add link">
                <Link2 className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="image" aria-label="Add image">
                <ImageIcon className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="emoji" aria-label="Add emoji">
                <Smile className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="mention" aria-label="Mention user">
                <AtSign className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
            <Button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Submit
            </Button>
          </div>
        </div>
      </form>

      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          Comments{" "}
          <span className="text-muted-foreground">({comments.length})</span>
        </h2>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Most recent</SelectItem>
            <SelectItem value="likes">Most likes</SelectItem>
            <SelectItem value="replies">Most replies</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-6">
        {comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            onLike={handleLike}
            onDislike={handleDislike}
          />
        ))}
      </div>
    </div>
  );
}

function Separator({
  className,
  orientation,
}: {
  className?: string;
  orientation: "horizontal" | "vertical";
}) {
  return (
    <div
      className={cn(
        "bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className,
      )}
    />
  );
}

function CommentCard({
  comment,
  onLike,
  onDislike,
}: {
  comment: Comment;
  onLike: (id: number) => void;
  onDislike: (id: number) => void;
}) {
  return (
    <div className="space-y-4 p-6">
      <div className="flex gap-4">
        <Avatar className="h-10 w-10 ring-2 ring-primary">
          <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
          <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold">{comment.author.name}</span>
            <span className="text-sm text-muted-foreground">
              {comment.timestamp}
            </span>
          </div>
          <p className="text-sm text-foreground">{comment.content}</p>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => onLike(comment.id)}
            >
              👍 {comment.likes}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => onDislike(comment.id)}
            >
              👎 {comment.dislikes}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
            >
              Reply
            </Button>
          </div>
        </div>
      </div>
      {comment.replies.length > 0 && (
        <div className="ml-14 space-y-4 rounded-lg border-l-2 bg-accent pl-4">
          {comment.replies.map((reply) => (
            <CommentCard
              key={reply.id}
              comment={reply}
              onLike={onLike}
              onDislike={onDislike}
            />
          ))}
        </div>
      )}
    </div>
  );
}
