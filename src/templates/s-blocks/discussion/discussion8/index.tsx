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
import { Heart, MessageSquare, MoreHorizontal, Send } from "lucide-react";
import Image from "next/image";

interface Comment {
  id: number;
  author: string;
  avatar: string;
  date: string;
  content: string;
  image?: string;
  likes: number;
  replies: Comment[];
}

const initialComments: Comment[] = [
  {
    id: 1,
    author: "Design Enthusiast",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "April 5, 2024",
    content:
      "This discussion highlights the critical balance between utilizing design tools and implementing a thoughtful UX strategy. It's fascinating to see how different tools can be leveraged to enhance user experience when guided by a clear strategic vision.",
    likes: 55,
    replies: [
      {
        id: 11,
        author: "UX Apprentice",
        avatar:
          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        date: "April 6, 2024",
        content:
          "As someone who's relatively new to the field, I find these insights incredibly valuable. It's eye-opening to learn about the importance of strategy alongside tool proficiency.",
        likes: 12,
        replies: [],
      },
    ],
  },
  {
    id: 2,
    author: "Veteran UX Designer",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "April 7, 2024",
    content:
      "In my years of experience, I've seen firsthand how a well-defined UX strategy can make or break a product. It's not just about having the latest tools at your disposal, but knowing how to use them effectively to meet user needs and business goals.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    likes: 78,
    replies: [],
  },
  {
    id: 3,
    author: "Backend Developer",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "April 8, 2024",
    content:
      "This conversation is quite enlightening from a backend developer's perspective. Understanding the strategic thinking behind UX design helps me appreciate the collaborative nature of product development and how the backend supports the overall user experience.",
    likes: 34,
    replies: [],
  },
];

function ReplyForm({
  onReplySubmit,
}: {
  onReplySubmit: (reply: string, image?: string) => void;
}) {
  const [reply, setReply] = useState("");
  const [image, setImage] = useState<string | undefined>(undefined);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(undefined);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onReplySubmit(reply, image);
    setReply("");
    setImage(undefined);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Textarea
        placeholder="Reply to this comment..."
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        className="mb-2"
      />
      <div className="mb-2">
        <Input type="file" accept="image/*" onChange={handleImageChange} />
        {image && (
          <div className="mt-2 h-24 w-24">
            <Image
              src={image}
              alt="Attached"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        )}
      </div>
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
  onReply: (commentId: number, reply: string, image?: string) => void;
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

  const handleReplySubmit = (reply: string, image?: string) => {
    onReply(comment.id, reply, image);
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
        {comment.image && (
          <div className="mt-4 w-full">
            <Image
              src={comment.image}
              alt="Comment image"
              layout="responsive"
              width={400}
              height={300}
            />
          </div>
        )}
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

function ImageCommentForm() {
  const [comment, setComment] = useState("");
  const [image, setImage] = useState<string | undefined>(undefined);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(undefined);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Handle comment submission with image
    console.log("Comment:", comment);
    console.log("Image:", image);
    setComment("");
    setImage(undefined);
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <h3 className="text-lg font-semibold text-foreground">
          Leave a Comment
        </h3>
      </CardHeader>
      <CardContent className="pt-2">
        <form onSubmit={handleSubmit}>
          <Textarea
            placeholder="Share your thoughts..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="mb-4"
          />
          <div className="mb-4">
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-2"
            />
            {image && (
              <div className="mt-2 h-24 w-24">
                <Image
                  src={image}
                  alt="Attached"
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </div>
            )}
          </div>
          <div className="flex items-center justify-end">
            <Button type="submit">
              <Send className="mr-2 h-4 w-4" />
              Post Comment
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default function ImageInteractiveCommentSection() {
  const [comments, setComments] = useState<Comment[]>(initialComments);

  const handleReply = (commentId: number, reply: string, image?: string) => {
    const newComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [
            ...comment.replies,
            {
              id: Date.now(),
              author: "You",
              avatar:
                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
              date: new Date().toLocaleDateString(),
              content: reply,
              image: image,
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
        <ImageCommentForm />
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
