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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowUp,
  ArrowDown,
  MessageCircle,
  MoreHorizontal,
  Send,
  X,
  Image as ImageIcon,
  Paperclip,
  Smile,
} from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";

interface Comment {
  id: number;
  author: string;
  avatar: string;
  date: string;
  content: string;
  image?: string;
  votes: number;
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
    votes: 15,
    replies: [
      {
        id: 11,
        author: "UX Apprentice",
        avatar:
          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        date: "April 6, 2024",
        content:
          "As someone who's relatively new to the field, I find these insights incredibly valuable. It's eye-opening to learn about the importance of strategy alongside tool proficiency.",
        votes: 5,
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
    votes: 28,
    replies: [],
  },
  {
    id: 3,
    author: "Backend Developer",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "April 8, 2024",
    content:
      "This conversation is quite enlightening from a backend developer's perspective. Understanding the strategic thinking behind UX design helps me appreciate the collaborative nature of product development and how the backend supports the overall user experience.",
    votes: 10,
    replies: [],
  },
];

const commonEmojis = [
  "😀",
  "😂",
  "😍",
  "👍",
  "❤️",
  "🙏",
  "✨",
  "🔥",
  "💯",
  "🤷",
];

function CommentForm({
  onSubmit,
  isReply = false,
  placeholder = "Share your thoughts...",
}: {
  onSubmit: (content: string, image?: string) => void;
  isReply?: boolean;
  placeholder?: string;
}) {
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string | undefined>(undefined);
  const [showImageOptions, setShowImageOptions] = useState(false);

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
    setShowImageOptions(false);
  };

  const handleRemoveImage = () => {
    setImage(undefined);
  };

  const copyEmojiToClipboard = (emoji: string) => {
    navigator.clipboard.writeText(emoji);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(content, image);
    setContent("");
    setImage(undefined);
  };

  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-4">
            <Avatar className="mt-1 ring-2 ring-primary">
              <AvatarImage
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Your Avatar"
              />
              <AvatarFallback>YA</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                placeholder={`${placeholder} (Use OS emoji picker: Cmd+Ctrl+Space or Win+.)`}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="mb-3 w-full"
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Popover
                    open={showImageOptions}
                    onOpenChange={setShowImageOptions}
                  >
                    <PopoverTrigger asChild>
                      <Button type="button" variant="ghost" size="icon">
                        <ImageIcon className="h-4 w-4" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="border-none p-1"
                      side="top"
                      align="start"
                    >
                      <div className="flex space-x-2">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                          id="image-upload"
                        />
                        <label htmlFor="image-upload">
                          <Button
                            asChild
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <Paperclip className="h-4 w-4" />
                          </Button>
                        </label>
                      </div>
                    </PopoverContent>
                  </Popover>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button type="button" variant="ghost" size="icon">
                        <Smile className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Emoji Helper</DialogTitle>
                        <DialogDescription>
                          Use your OS emoji picker (Cmd+Ctrl+Space or Win+.) or
                          copy these common emojis:
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid grid-cols-5 gap-4 py-4">
                        {commonEmojis.map((emoji) => (
                          <Button
                            key={emoji}
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10"
                            onClick={() => copyEmojiToClipboard(emoji)}
                          >
                            {emoji}
                          </Button>
                        ))}
                      </div>
                      <DialogFooter>
                        <Button
                          type="button"
                          variant="secondary"
                          onClick={() =>
                            alert(
                              "Use your OS emoji picker (Cmd+Ctrl+Space or Win+.)",
                            )
                          }
                        >
                          Learn More
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
                <Button type="submit" size="sm" className="px-4">
                  <Send className="h-4 w-4" />
                  {isReply ? "" : ""}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

function CommentCard({
  comment,
  onReply,
  isReply = false,
}: {
  comment: Comment;
  onReply: (commentId: number, reply: string, image?: string) => void;
  isReply?: boolean;
}) {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [voted, setVoted] = useState<"up" | "down" | null>(null);
  const [votes, setVotes] = useState(comment.votes);

  const handleVote = (type: "up" | "down") => {
    if (voted === type) {
      // Cancel vote
      setVotes(votes + (type === "up" ? -1 : 1));
      setVoted(null);
    } else if (voted === null) {
      // New vote
      setVotes(votes + (type === "up" ? 1 : -1));
      setVoted(type);
    } else {
      // Change vote
      setVotes(votes + (type === "up" ? 2 : -2));
      setVoted(type);
    }
  };

  const handleReplySubmit = (reply: string, image?: string) => {
    onReply(comment.id, reply, image);
    setShowReplyForm(false);
  };

  return (
    <Card className={`mb-6 ${isReply ? "ml-16" : ""}`}>
      <CardContent className="p-4">
        <div className="flex space-x-4">
          <div className="flex flex-col items-center space-y-2">
            <Button
              variant={voted === "up" ? "default" : "ghost"}
              size="icon"
              onClick={() => handleVote("up")}
            >
              <ArrowUp
                className={`h-4 w-4 ${voted === "up" ? "text-white" : ""}`}
              />
            </Button>
            <span className="text-sm font-medium">{votes}</span>
            <Button
              variant={voted === "down" ? "destructive" : "ghost"}
              size="icon"
              onClick={() => handleVote("down")}
            >
              <ArrowDown
                className={`h-4 w-4 ${voted === "down" ? "text-white" : ""}`}
              />
            </Button>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Avatar className="h-8 w-8 ring-2 ring-primary">
                  <AvatarImage src={comment.avatar} alt={comment.author} />
                  <AvatarFallback>{comment.author[0]}</AvatarFallback>
                </Avatar>
                <div className="ml-2">
                  <p className="text-sm font-semibold text-foreground">
                    {comment.author}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {comment.date}
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {comment.content}
            </p>
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
            <div className="mt-4 flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground"
                onClick={() => setShowReplyForm(!showReplyForm)}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Reply
              </Button>
            </div>
            {showReplyForm && (
              <div className="mt-4">
                <CommentForm
                  onSubmit={handleReplySubmit}
                  isReply={true}
                  placeholder="Write a reply..."
                />
              </div>
            )}
            {comment.replies.length > 0 && (
              <div className="mt-6">
                {comment.replies.map((reply) => (
                  <CommentCard
                    key={reply.id}
                    comment={reply}
                    onReply={onReply}
                    isReply={true}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function EnhancedCommentSection() {
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
              votes: 0,
              replies: [],
            },
          ],
        };
      }
      return comment;
    });
    setComments(newComments);
  };

  const handleSubmit = (content: string, image?: string) => {
    const newComment: Comment = {
      id: Date.now(),
      author: "You", // Replace with actual user data
      avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Replace with user's avatar
      date: new Date().toLocaleDateString(),
      content: content,
      image: image,
      votes: 0,
      replies: [],
    };

    setComments([newComment, ...comments]);
  };

  return (
    <section className="bg-background py-8 lg:py-16">
      <div className="mx-auto max-w-2xl px-4">
        <CommentForm onSubmit={handleSubmit} />
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
