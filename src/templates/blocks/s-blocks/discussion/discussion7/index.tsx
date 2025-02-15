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
import { Heart, MessageSquare, MoreHorizontal, Share } from "lucide-react";

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
    author: "Design Strategist",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "April 5, 2024",
    content:
      "This article does a great job of outlining the importance of a user-centered design strategy. Remember, tools are just an extension of our strategic thinking. It's about understanding user needs and behaviors first.",
    likes: 55,
    replies: [
      {
        id: 11,
        author: "UX Beginner",
        avatar:
          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        date: "April 6, 2024",
        content:
          "This is really helpful for someone just starting out. It's good to know where to focus my learning.",
        likes: 12,
        replies: [],
      },
    ],
  },
  {
    id: 2,
    author: "Seasoned Designer",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "April 7, 2024",
    content:
      "Having been in the field for over a decade, I can vouch for the significance of a solid strategic approach. Trends and tools come and go, but the fundamentals of user empathy and problem-solving remain constant.",
    likes: 78,
    replies: [],
  },
  {
    id: 3,
    author: "Backend Developer",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "April 8, 2024",
    content:
      "As a backend developer, this perspective is essential. It helps me understand how my work contributes to the overall user experience and the importance of collaborating effectively with the front-end team.",
    likes: 34,
    replies: [],
  },
];

function ReplyForm({
  onReplySubmit,
}: {
  onReplySubmit: (reply: string) => void;
}) {
  const [reply, setReply] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onReplySubmit(reply);
    setReply(""); // Clear the input after submitting
  };

  return (
    <form onSubmit={handleSubmit}>
      <Textarea
        placeholder="Reply to this comment..."
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        className="mb-2"
      />
      <Button type="submit" size="sm">
        Post Reply
      </Button>
    </form>
  );
}

function CommentCard({
  comment,
  onReply,
}: {
  comment: Comment;
  onReply: (commentId: number, reply: string) => void;
}) {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(comment.likes);

  const handleLike = () => {
    setLiked(!liked);
    if (!liked) {
      setLikes(comment.likes + 1);
    } else {
      setLikes(comment.likes);
    }
  };

  const handleReplySubmit = (reply: string) => {
    onReply(comment.id, reply);
    setShowReplyForm(false);
  };

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center">
            <Avatar className="mr-2 h-8 w-8 ring-2 ring-primary">
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
          <div className="flex items-center space-x-2">
            <Button
              variant={liked ? "ghost" : "ghost"}
              size="icon"
              className={liked ? "text-red-500" : ""}
              onClick={handleLike}
            >
              <Heart className="h-4 w-4" />
            </Button>
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
        </div>
        <p className="text-sm text-muted-foreground">{comment.content}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-muted-foreground">
            {likes} {likes === 1 ? "Like" : "Likes"}
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground"
            onClick={() => setShowReplyForm(!showReplyForm)}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Reply
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <Share className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </CardFooter>
      {showReplyForm && (
        <CardContent className="pt-0">
          <ReplyForm onReplySubmit={handleReplySubmit} />
        </CardContent>
      )}
      {comment.replies.length > 0 && (
        <div className="mx-6 ml-8 mt-4 space-y-4">
          {comment.replies.map((reply) => (
            <CommentCard key={reply.id} comment={reply} onReply={onReply} />
          ))}
        </div>
      )}
    </Card>
  );
}

function CommentForm() {
  return (
    <Card className="mb-6">
      <CardHeader>
        <h3 className="text-lg font-semibold text-foreground">
          Leave a Comment
        </h3>
      </CardHeader>
      <CardContent className="pt-2">
        <Textarea placeholder="Share your thoughts..." className="mb-4" />
        <div className="flex items-center justify-between">
          <div className="flex space-x-2"></div>
          <Button>Post Comment</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function InteractiveCommentSection() {
  const [comments, setComments] = useState<Comment[]>(initialComments);

  const handleReply = (commentId: number, reply: string) => {
    const newComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [
            ...comment.replies,
            {
              id: Date.now(), // Simple unique ID generator for demo purposes
              author: "You", // In a real app, you'd pull the author from the user's profile
              avatar:
                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Replace with the user's actual avatar
              date: new Date().toLocaleDateString(),
              content: reply,
              likes: 0,
              replies: [],
            },
          ],
        };
      }
      return comment;
    });
    setComments(newComments);
  };

  return (
    <section className="bg-background py-8 lg:py-16">
      <div className="mx-auto max-w-2xl px-4">
        <CommentForm />
        <div className="space-y-6">
          {comments.map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              onReply={handleReply}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
