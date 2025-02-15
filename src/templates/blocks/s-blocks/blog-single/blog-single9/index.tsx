import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ThumbsUp,
  MessageSquare,
  Share2,
  MoreHorizontal,
  Clock,
} from "lucide-react";

const BlogPost = {
  title:
    "The Art of Algorithmic Harmony: Crafting Seamless User Experiences with Cadence AI",
  author: "Dr. Eleanor Vance",
  date: "May 2, 2024",
  content: `
    <p>
    At Cadence AI, we believe that the future of technology lies in the seamless integration of sophisticated algorithms with intuitive user experiences.
     This means moving beyond clunky interfaces and embracing designs that feel natural, fluid, and harmonized.
   </p>
   <p>
        Today, we delve into the principles guiding our work, exploring how we approach algorithmic design and the future we are building with Cadence AI.
   </p>

    <h2>The Cadence AI Design Philosophy</h2>
        <p>
          Our approach is centered around creating experiences that are not only functional but also beautiful and engaging. We focus on crafting harmonious interfaces that amplify human capabilities without overwhelming the user.
        </p>
        <p>
            Our key principles include:
            <ul>
                <li><b>User-Centered Design</b>: Every decision we make is driven by a deep understanding of the user’s needs, goals, and contexts.</li>
                <li><b>Algorithmic Transparency</b>: We believe users should understand why AI makes certain decisions, fostering trust and confidence.</li>
                <li><b>Seamless Integration</b>: Our algorithms work in the background to enhance, not hinder, user interactions, creating intuitive pathways.</li>
                <li><b>Adaptive Interfaces</b>: Our UIs adapt to user behaviors and preferences, creating a more personalized and enjoyable experience.</li>
                <li><b>Aesthetically Pleasing Design</b>: We believe that technology should be as visually appealing as it is powerful.</li>
             </ul>
       </p>

        <figure>
            <img src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg" alt="Abstract digital art" />
            <figcaption>Abstract Digital Art Representing Algorithmic Harmony</figcaption>
        </figure>

        <h2>Realizing Algorithmic Harmony</h2>
        <p>
            At Cadence AI, we implement these design principles using several innovative approaches:
             <ul>
                 <li><b>Contextual Intelligence</b>: Our AI algorithms are designed to understand the user's context, providing relevant information and tools at the right time.</li>
                 <li><b>Dynamic Interface Generation</b>: Our systems create interfaces that adapt to the specific user and task at hand, ensuring optimal usability.</li>
                 <li><b>Visual Feedback Systems</b>: We employ sophisticated visual feedback systems that communicate algorithmic decisions and system states transparently to users.</li>
                 <li><b>Iterative Design Loops</b>: We continuously iterate on our designs, gathering user feedback and refining our interfaces to ensure they are effective and delightful.</li>
             </ul>
      </p>

        <h2>The Future of Algorithmic Design</h2>
        <p>
          At Cadence AI, we see a future where technology seamlessly weaves into the fabric of our lives, powered by algorithms that enhance our abilities, amplify our potential, and enrich our experiences.
        </p>
        <p>
        We are committed to pushing the boundaries of what is possible, creating not just interfaces, but truly harmonious experiences. Join us as we craft this future together, one algorithm at a time.
      </p>
  `,
};

const comments = [
  {
    id: 1,
    author: "Aisha Khan",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "May 2, 2024",
    content:
      "This is such an insightful perspective on the future of UI design! I’m particularly intrigued by the concept of algorithmic transparency.",
    likes: 15,
  },
  {
    id: 2,
    author: "Carlos Ramirez",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "May 3, 2024",
    content:
      "The focus on user-centered design is spot on. Technology should be an extension of our abilities, not a barrier. Excited to see what Cadence AI will achieve!",
    likes: 10,
  },
  {
    id: 3,
    author: "Mei Lin",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "May 3, 2024",
    content:
      "The idea of adaptive interfaces resonates deeply. It's about personalization and creating technology that truly understands us. What tools are you using for feedback collection?",
    likes: 7,
  },
  // Add more comments as needed
];

const relatedArticles = [
  {
    title: "The Next Generation of Human-Computer Interaction",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    title: "Ethical AI and the User Experience",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  // Add more related articles as needed
];

export default function BlogPostPage() {
  return (
    <div className="container mx-auto py-8">
      <main className="flex flex-col gap-8 lg:flex-row">
        <article className="lg:w-2/3">
          <header className="mb-4 lg:mb-6">
            <nav className="mb-4 flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-muted-foreground">/</span>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Tech
                    </a>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className="mx-2 text-muted-foreground">/</span>
                    <span className="text-sm text-muted-foreground">
                      Algorithmic Harmony
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
            <div className="mb-4 flex items-center">
              <Button variant="outline" size="sm" className="mr-2">
                Technology
              </Button>
              <Button variant="outline" size="sm" className="mr-2">
                Design
              </Button>
              <Button variant="outline" size="sm">
                AI
              </Button>
            </div>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-foreground lg:mb-6 lg:text-4xl">
              {BlogPost.title}
            </h1>
            <div className="flex items-center justify-between border-y py-4">
              <div className="mr-4 text-sm">
                <address className="inline not-italic">
                  By{" "}
                  <a
                    rel="author"
                    className="text-foreground hover:underline"
                    href="#"
                  >
                    {BlogPost.author}
                  </a>
                </address>
                <span>
                  {" "}
                  on{" "}
                  <time
                    className="text-muted-foreground"
                    dateTime="2024-05-02"
                    title="May 2nd, 2024"
                  >
                    {BlogPost.date}
                  </time>
                </span>
              </div>
              <a
                href="#comments"
                className="flex items-center text-sm font-medium text-primary hover:underline"
              >
                <MessageSquare className="mr-1 h-4 w-4" />
                {comments.length} Comments
              </a>
            </div>
          </header>
          <div
            className="prose dark:prose-invert prose-img:aspect-video prose-img:object-cover max-w-none"
            dangerouslySetInnerHTML={{ __html: BlogPost.content }}
          ></div>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex space-x-4">
              <Button variant="outline" size="sm">
                <ThumbsUp className="mr-2 h-4 w-4" />
                Like
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
          </div>
          <section className="mt-8" id="comments">
            <h2 className="mb-4 text-2xl font-bold">
              Comments ({comments.length})
            </h2>
            <form className="mb-6">
              <div className="mb-4 rounded-lg rounded-t-lg border bg-background px-4 py-2">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <Textarea
                  id="comment"
                  rows={6}
                  placeholder="Write a comment..."
                  required
                />
              </div>
              <Button type="submit">Post comment</Button>
            </form>
            {comments.map((comment) => (
              <Card key={comment.id} className="mb-6">
                <CardContent className="p-6">
                  <footer className="mb-2 flex items-center justify-between">
                    <div className="flex items-center">
                      <Avatar className="mr-3 h-8 w-8 ring-2 ring-primary">
                        <AvatarImage
                          src={comment.avatar}
                          alt={comment.author}
                        />
                        <AvatarFallback>{comment.author[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <span className="font-semibold text-foreground">
                          {comment.author}
                        </span>
                        <p className="text-sm text-muted-foreground">
                          <time dateTime="2024-05-02">{comment.date}</time>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <ThumbsUp className="mr-1 h-3 w-3" />
                        {comment.likes}
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
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
                  </footer>
                  <p className="text-muted-foreground">{comment.content}</p>
                  <Button variant="link" size="sm" className="mt-4">
                    Reply
                  </Button>
                </CardContent>
              </Card>
            ))}
          </section>
        </article>
        <aside className="lg:w-1/3">
          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-semibold">About the author</h3>
              <div className="mb-4 flex items-center">
                <Avatar className="mr-4 h-16 w-16 ring-2 ring-primary">
                  <AvatarImage
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=64&width=64"
                    alt={BlogPost.author}
                  />
                  <AvatarFallback>{BlogPost.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">{BlogPost.author}</h4>
                  <p className="text-sm text-muted-foreground">
                    Lead UX Designer & Algorithmic Strategist
                  </p>
                </div>
              </div>
              <p className="mb-4 text-muted-foreground">
                Dr. Vance is at the helm of Cadence AI's UX strategy, known for
                her groundbreaking work in algorithmic design and human-computer
                interaction.
              </p>
              <Button variant="outline" className="w-full">
                View full profile
              </Button>
            </CardContent>
          </Card>
          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-semibold">Latest news</h3>
              {relatedArticles.map((article, index) => (
                <div key={index} className="mb-4 flex items-center">
                  <Image
                    src={article.image}
                    alt={article.title}
                    className="mr-4 h-16 w-16 rounded-lg object-cover"
                    height={64}
                    width={64}
                  />
                  <h5 className="text-sm font-semibold hover:underline">
                    <a href="#">{article.title}</a>
                  </h5>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-semibold">
                Sign up for our newsletter
              </h3>
              <p className="mb-4 text-muted-foreground">
                Stay up to date with the latest innovations and insights from
                Cadence AI. Sign up with your email below.
              </p>
              <form>
                <div className="mb-4">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Subscribe
                </Button>
              </form>
            </CardContent>
          </Card>
        </aside>
      </main>
    </div>
  );
}
