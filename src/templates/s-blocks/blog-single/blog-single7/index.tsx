"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import {
  ThumbsUp,
  MessageSquare,
  Share2,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";
import Image from "next/image";

const dummyBlogPost = {
  title: "Unveiling the Potential of Lumina AI: A Comprehensive Look",
  author: "Dr. Alistair Finch",
  date: "March 15, 2024",
  content: `
   <article className="prose max-w-none dark:prose-invert">
      <p>
      At Lumina AI, we're dedicated to illuminating the path forward in artificial intelligence. Our team is constantly pushing the boundaries of what’s possible, focusing on innovative solutions and ethical practices.
      </p>
       <p>
       We believe that by emphasizing both groundbreaking research and practical applications, we can deliver AI solutions that are not only powerful but also ethical and beneficial to society.
       </p>
       <p>
       This month, we're thrilled to share some of our recent advancements and provide insights into the future of AI as envisioned by Lumina.
       </p>
      <h2>Exploring the Latest Developments at Lumina AI</h2>
        <p>
           Lumina AI is committed to leading innovation in the field of artificial intelligence. Our projects span from cutting-edge machine learning models to pioneering research in neural network architectures.
        </p>
         <p> Here’s a glimpse into our most recent achievements: </p>
        <p>
           <ul>
               <li><b>Advanced Image Recognition</b>: We have developed a cutting-edge image recognition model that excels in accuracy and efficiency, setting new standards for the industry.</li>
               <li><b>Personalized AI Learning</b>: Our algorithms provide customized learning experiences, adapting to the unique needs and preferences of every learner.</li>
               <li><b>Transparent AI Practices</b>: We are committed to open-source projects and maintaining transparency in our research and development, fostering a community of collaborative innovation. </li>
           </ul>
        </p>
         <h2>Our Commitment to Ethical AI</h2>
           <p>
           At Lumina AI, we firmly believe in the importance of responsible AI. We are strong advocates for a future where AI is developed with ethical principles, privacy considerations, and fairness.
           </p>
           <p>
           We are devoted to creating AI technologies that enhance capabilities while upholding our core values. Our commitment to ethical AI is at the heart of our mission.
            </p>
          <h2>What's Next?</h2>
           <p>
           Our journey doesn't end here. We are constantly working on several exciting new initiatives that will further push the boundaries of AI.
           </p>
           <ol>
               <li><strong> AI-Driven Scientific Discovery </strong>: Exploring how AI can accelerate research in scientific fields such as genetics and medicine.</li>
               <li><strong> Human-Centered AI Interactions </strong> : Developing new interfaces that make interactions with AI more intuitive and humanistic.</li>
               <li><strong> AI for Creative Arts </strong>: Using AI to enhance and enable new forms of artistic expression and innovation. </li>
           </ol>
       </article>
    `,
};

const dummyComments = [
  {
    id: 1,
    author: "Olivia Martinez",
    content:
      "Impressive work! The image recognition technology is game-changing.",
    likes: 9,
  },
  {
    id: 2,
    author: "Ethan Rodriguez",
    content:
      "I'm particularly impressed by the commitment to ethical AI. This should be the standard.",
    likes: 6,
  },
  {
    id: 3,
    author: "Sophia Nguyen",
    content:
      "Can you share more about the open-source projects? I'd love to contribute.",
    likes: 4,
  },
];

export default function BlogPostPage() {
  const [comments, setComments] = useState(dummyComments);
  const [newComment, setNewComment] = useState("");
  const [likes, setLikes] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentObj = {
        id: comments.length + 1,
        author: "Current User",
        content: newComment,
        likes: 0,
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
    }
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="container mx-auto bg-background py-8 text-foreground md:py-12 lg:py-16">
      <main>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <header className="not-format mb-4 lg:mb-6">
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-foreground dark:text-foreground lg:mb-6 lg:text-4xl">
                {dummyBlogPost.title}
              </h1>
              <address className="mb-6 flex items-center not-italic">
                <div className="mr-3 inline-flex items-center text-sm text-foreground dark:text-foreground">
                  <Image
                    className="mr-4 h-16 w-16 rounded-full ring-2 ring-primary"
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    alt="Dr. Alistair Finch"
                    height={40}
                    width={40}
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-xl font-bold text-foreground dark:text-foreground"
                    >
                      {dummyBlogPost.author}
                    </a>
                    <p className="text-base text-muted-foreground dark:text-muted-foreground">
                      Lead AI Innovator
                    </p>
                    <p className="text-base text-muted-foreground dark:text-muted-foreground">
                      <time dateTime="2024-03-15" title="March 15th, 2024">
                        {dummyBlogPost.date}
                      </time>
                    </p>
                  </div>
                </div>
              </address>
            </header>
            <div
              className="prose dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary max-w-none"
              dangerouslySetInnerHTML={{
                __html: dummyBlogPost.content,
              }}
            ></div>
            <div className="mt-8 flex items-center justify-between">
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" onClick={handleLike}>
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  Like ({likes})
                </Button>
                <Button variant="outline" size="sm">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Comment
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
              <Button variant="outline" size="sm" onClick={handleBookmark}>
                <Bookmark
                  className={`mr-2 h-4 w-4 ${
                    isBookmarked ? "fill-current" : ""
                  }`}
                />
                {isBookmarked ? "Bookmarked" : "Bookmark"}
              </Button>
            </div>
            <section className="not-format mt-8">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-bold text-foreground dark:text-foreground lg:text-2xl">
                  Discussion ({comments.length})
                </h2>
              </div>
              <form className="mb-6" onSubmit={handleCommentSubmit}>
                <div className="mb-4 rounded-lg rounded-t-lg border bg-background px-4 py-2 dark:border dark:bg-background">
                  <label htmlFor="comment" className="sr-only">
                    Your comment
                  </label>
                  <Textarea
                    id="comment"
                    rows={6}
                    placeholder="Write a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit">Post comment</Button>
              </form>
              {comments.map((comment) => (
                <article
                  key={comment.id}
                  className="mb-6 rounded-lg border border-t bg-background p-6 text-base dark:border dark:bg-background"
                >
                  <footer className="mb-2 flex items-center justify-between">
                    <div className="flex items-center">
                      <p className="mr-3 inline-flex items-center text-sm font-semibold text-foreground dark:text-foreground">
                        <Image
                          className="mr-2 h-6 w-6 rounded-full ring-2 ring-primary"
                          src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                          alt={comment.author}
                          width={40}
                          height={40}
                        />
                        {comment.author}
                      </p>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                        <time dateTime="2024-03-15" title="March 15th, 2024">
                          Mar. 15, 2024
                        </time>
                      </p>
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
                  </footer>
                  <p>{comment.content}</p>
                  <div className="mt-4 flex items-center space-x-4">
                    <Button variant="ghost" size="sm">
                      <ThumbsUp className="mr-1 h-4 w-4" />
                      {comment.likes}
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MessageSquare className="mr-1 h-4 w-4" />
                      Reply
                    </Button>
                  </div>
                </article>
              ))}
            </section>
          </article>
          <aside className="lg:col-span-1">
            <div className="sticky top-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-foreground dark:text-foreground">
                    About the author
                  </h3>
                  <div className="mb-4 flex items-center">
                    <Image
                      className="mr-4 h-16 w-16 rounded-full ring-2 ring-primary"
                      src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                      alt="Dr. Alistair Finch"
                      width={100}
                      height={100}
                    />
                    <div>
                      <a
                        href="#"
                        rel="author"
                        className="text-xl font-bold text-foreground dark:text-foreground"
                      >
                        {dummyBlogPost.author}
                      </a>
                      <p className="text-base text-muted-foreground dark:text-muted-foreground">
                        Lead AI Innovator at Lumina AI
                      </p>
                    </div>
                  </div>
                  <p className="mb-4 text-muted-foreground dark:text-muted-foreground">
                    Dr. Finch is at the forefront of AI research and innovation,
                    known for his work in advanced neural networks and ethical
                    AI practices.
                  </p>
                  <ul className="flex space-x-4">
                    <li>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary dark:hover:text-primary"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary dark:hover:text-primary"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary dark:hover:text-primary"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-foreground dark:text-foreground">
                    Recommended topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">
                      Lumina AI
                    </Button>
                    <Button variant="outline" size="sm">
                      Image Recognition
                    </Button>
                    <Button variant="outline" size="sm">
                      Personalized Learning
                    </Button>
                    <Button variant="outline" size="sm">
                      Ethical AI
                    </Button>
                    <Button variant="outline" size="sm">
                      Open Source
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
