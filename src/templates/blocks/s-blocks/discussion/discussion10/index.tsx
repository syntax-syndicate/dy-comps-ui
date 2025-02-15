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
  Heart,
  MessageSquare,
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
} from "@/components/ui/popover";

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
      {isReply ? null : (
        <CardHeader>
          <h3 className="text-lg font-semibold text-foreground">
            Leave a Comment
          </h3>
        </CardHeader>
      )}
      <CardContent className={isReply ? "" : "pt-2"}>
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <Textarea
              placeholder={`${placeholder} (Use OS emoji picker: Cmd+Ctrl+Space or Win+.)`}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mb-2 pr-10"
            />
            <div className="absolute bottom-2 right-2 flex items-center space-x-2">
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
                      Use your OS emoji picker (Cmd+Ctrl+Space or Win+.) or copy
                      these common emojis:
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
          </div>

          {image && (
            <div className="mb-4 mt-2 flex items-center space-x-2">
              <div className="relative h-24 w-24">
                <Image
                  src={image}
                  alt="Attached"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute -right-2 -top-2 h-6 w-6 rounded-full p-0"
                  onClick={handleRemoveImage}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          <div className="flex items-center justify-end">
            <Button type="submit">
              <Send className="mr-2 h-4 w-4" />
              {isReply ? "Post Reply" : "Post Comment"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
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
          <CommentForm
            onSubmit={handleReplySubmit}
            isReply={true}
            placeholder="Write a reply..."
          />
        </CardContent>
      )}
      {comment.replies.length > 0 && (
        <div className="ml-8 mt-4 space-y-4 px-6">
          {comment.replies.map((reply) => (
            <CommentCard key={reply.id} comment={reply} onReply={onReply} />
          ))}
        </div>
      )}
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

  const handleSubmit = (content: string, image?: string) => {
    const newComment: Comment = {
      id: Date.now(),
      author: "You", // Replace with actual user data
      avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Replace with user's avatar
      date: new Date().toLocaleDateString(),
      content: content,
      image: image,
      likes: 0,
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
