"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Facebook,
  Twitter,
  Linkedin,
  Share2,
  ThumbsUp,
  MessageSquare,
  Bookmark,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function AlternativeBlogPost() {
  return (
    <main className="bg-background text-foreground">
      <BlogHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          <BlogContent />
          <Sidebar />
        </div>
      </div>
    </main>
  );
}

function BlogHeader() {
  return (
    <header className="relative bg-[url('https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg')] bg-cover bg-center py-16 lg:py-24">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        aria-hidden="true"
      ></div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-3xl font-bold text-white lg:text-5xl">
            The Future of Artificial Intelligence: Opportunities and Challenges
          </h1>
          <div className="flex items-center justify-center space-x-4 text-sm text-white">
            <span>By Alex Johnson</span>
            <Separator orientation="vertical" className="h-4 bg-white/50" />
            <span>Published on May 15, 2023</span>
            <Separator orientation="vertical" className="h-4 bg-white/50" />
            <span>10 min read</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function BlogContent() {
  const [likes, setLikes] = useState(42);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <article className="lg:w-2/3">
      <Card>
        <CardContent className="p-6">
          <div className="prose dark:prose-invert prose-img:aspect-video prose-img:object-cover max-w-none">
            <p className="lead">
              Artificial Intelligence (AI) has become one of the most
              transformative technologies of our time, reshaping industries,
              revolutionizing scientific research, and changing the way we live
              and work.
            </p>
            <p>
              As we stand on the brink of a new era in technological
              advancement, it's crucial to explore both the immense
              opportunities and the significant challenges that AI presents to
              our society.
            </p>
            <h2>The Promise of AI</h2>
            <p>
              AI has the potential to solve some of humanity's most pressing
              problems. From healthcare to climate change, AI-powered solutions
              are already making significant impacts:
            </p>
            <ul>
              <li>
                Early disease detection and personalized treatment plans in
                medicine
              </li>
              <li>
                Optimizing energy consumption and predicting natural disasters
              </li>
              <li>
                Enhancing education through personalized learning experiences
              </li>
              <li>
                Improving transportation safety and efficiency with autonomous
                vehicles
              </li>
            </ul>
            <h2>Challenges and Ethical Considerations</h2>
            <p>
              However, the rapid advancement of AI also raises important ethical
              questions and societal challenges:
            </p>
            <ol>
              <li>Job displacement and the need for workforce reskilling</li>
              <li>Privacy concerns and data protection</li>
              <li>Algorithmic bias and fairness in AI decision-making</li>
              <li>
                The potential for AI to be used in warfare or surveillance
              </li>
            </ol>
            <p>
              As we continue to develop and deploy AI systems, it's crucial that
              we address these challenges head-on, ensuring that the benefits of
              AI are distributed equitably and that proper safeguards are in
              place.
            </p>
            <h2>The Path Forward</h2>
            <p>
              The future of AI is not predetermined. It will be shaped by the
              choices we make today in research, policy, and ethics. By
              fostering collaboration between technologists, policymakers, and
              ethicists, we can harness the power of AI to create a better
              future for all.
            </p>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLikes(likes + 1)}
              >
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
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsBookmarked(!isBookmarked)}
            >
              <Bookmark
                className={`mr-2 h-4 w-4 ${isBookmarked ? "fill-current" : ""}`}
              />
              {isBookmarked ? "Bookmarked" : "Bookmark"}
            </Button>
          </div>
        </CardContent>
      </Card>
      <CommentsSection />
    </article>
  );
}

function Sidebar() {
  return (
    <aside className="lg:w-1/3">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>About the Author</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/173700484?v=4"
                alt="Alex Johnson"
              />
              <AvatarFallback>AJ</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">Devin Schumacher</h3>
              <p className="text-sm text-muted-foreground">
                AI Researcher and Ethicist
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm">
            Devin Schumacer is a renowned AI researcher and ethicist, focusing
            on the societal impacts of artificial intelligence and machine
            learning.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Table of Contents</CardTitle>
        </CardHeader>
        <CardContent>
          <nav>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="p-0">
                  Introduction
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0">
                  The Promise of AI
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0">
                  Challenges and Ethical Considerations
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0">
                  The Path Forward
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0">
                  Conclusion
                </Button>
              </li>
            </ul>
          </nav>
        </CardContent>
      </Card>
    </aside>
  );
}

function CommentsSection() {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Jane Doe",
      content:
        "Fascinating article! I'm particularly interested in how we can ensure AI benefits all of society.",
      likes: 5,
    },
    {
      id: 2,
      author: "John Smith",
      content:
        "Great points about the ethical considerations. We need to be proactive in addressing these challenges.",
      likes: 3,
    },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          author: "You",
          content: newComment,
          likes: 0,
        },
      ]);
      setNewComment("");
    }
  };

  return (
    <section className="py-12">
      <div>
        <h2 className="mb-6 text-2xl font-bold">
          Comments ({comments.length})
        </h2>
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleCommentSubmit} className="mb-6">
              <Textarea
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="mb-4"
              />
              <Button type="submit">Post Comment</Button>
            </form>
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="flex space-x-4">
                  <Avatar>
                    <AvatarFallback>{comment.author[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{comment.author}</h4>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Report</DropdownMenuItem>
                          <DropdownMenuItem>Block User</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {comment.content}
                    </p>
                    <div className="mt-2 flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <ThumbsUp className="mr-1 h-3 w-3" />
                        {comment.likes}
                      </Button>
                      <Button variant="ghost" size="sm">
                        Reply
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
