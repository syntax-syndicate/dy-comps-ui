import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  Bookmark,
  MoreHorizontal,
  Clock,
} from "lucide-react";

const BlogPost = {
  title:
    "Decoding the Cosmos with Stellaris AI: A Deep Dive into Advanced Analytics",
  author: "Dr. Vivian Holloway",
  date: "April 10, 2024, 10:30 AM PDT",
  content: `
    <p class="lead">
    Stellaris AI is revolutionizing the field of astronomical data analysis. We're developing cutting-edge algorithms and machine learning models to unlock the secrets of the universe.
    </p>
    <p>
    Our mission is to provide unparalleled insights into astronomical phenomena, from distant galaxies to nearby exoplanets, aiding scientists and researchers around the globe.
    </p>
    <p>
    Today, we're excited to share a deeper look at Stellaris AI, our core technologies, and what the future holds for astronomical discovery.
    </p>

    <h2>The Stellaris AI Framework</h2>
    <p>
      Stellaris AI’s framework is built around a modular, scalable, and adaptable architecture. This approach allows us to integrate diverse data sources and analytical tools, enabling unprecedented levels of detail and accuracy in our analyses.
    </p>
    <p>
        Key features include:
        <ul>
            <li><b>Advanced Signal Processing</b>: Our algorithms can detect and isolate faint signals from the cosmic background noise, revealing subtle astronomical events.</li>
            <li><b>Machine Learning Models for Classification</b>: We use machine learning to classify celestial objects with greater precision, improving our understanding of the universe’s structure.</li>
            <li><b>Real-time Data Visualization</b>: Our tools enable real-time visualization of astronomical data, allowing for better analysis and faster insights.</li>
            <li><b>Collaborative Research Platform</b>: Stellaris AI provides a platform for researchers to collaborate, share data, and build upon each other’s work, accelerating scientific progress.</li>
         </ul>
     </p>

    <h2>Applications in Astronomical Research</h2>
    <p>
    Stellaris AI is actively being used in a variety of astronomical research projects, including:
      <ul>
        <li><b>Exoplanet Discovery</b>: Our algorithms can identify subtle changes in starlight that could indicate the presence of exoplanets, improving our capacity to discover new worlds.</li>
        <li><b>Galaxy Evolution Studies</b>: By analyzing data from large-scale galaxy surveys, we’re able to create detailed models of galaxy formation and evolution.</li>
        <li><b>Cosmic Microwave Background Analysis</b>: Stellaris AI is helping researchers uncover the secrets hidden within the cosmic microwave background radiation, offering insights into the early universe.</li>
        <li><b>Near-Earth Object Tracking</b>: Our technology also supports the tracking of near-Earth objects, contributing to planetary safety efforts.</li>
      </ul>
     </p>

    <h2>The Future of Stellaris AI</h2>
    <p>
      Our journey is just beginning. We are working on several exciting initiatives that will further enhance Stellaris AI, including:
         <ul>
             <li><b>Expanding Data Integration</b>: We are integrating more data sources from different observatories and satellites to broaden our perspective of the cosmos.</li>
             <li><b>Developing Quantum-Enhanced AI</b>: We are exploring quantum computing applications to accelerate our data analysis and unlock new possibilities.</li>
             <li><b>Creating a Public Access Platform</b>: We plan to make our tools and data more widely accessible, empowering researchers worldwide to push the boundaries of astronomical knowledge.</li>
         </ul>
    </p>
    <p>Join us as we continue to reach for the stars, guided by the power of Stellaris AI!</p>
  `,
};

const comments = [
  {
    id: 1,
    author: "Dr. Kenji Tanaka",
    avatar:
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=32&width=32",
    date: "Apr. 10, 2024",
    content:
      "Absolutely fascinating work! The potential of Stellaris AI to advance our understanding of the cosmos is immense. I'm particularly interested in the application for exoplanet discovery.",
    likes: 12,
  },
  {
    id: 2,
    author: "Maria Rodriguez",
    avatar:
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=32&width=32",
    date: "Apr. 10, 2024",
    content:
      "As a researcher in galaxy evolution, I find Stellaris AI's capabilities to analyze large datasets invaluable. The real-time data visualization tool is truly impressive.",
    likes: 8,
  },
  {
    id: 3,
    author: "David Chen",
    avatar:
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=32&width=32",
    date: "Apr. 11, 2024",
    content:
      "The development of the collaborative platform is a huge step for the community. I believe it will greatly accelerate scientific progress. I’m also curious about your open-source initiatives.",
    likes: 6,
  },
  // Add more comments as needed
];

export default function BlogPostPage() {
  return (
    <div className="container mx-auto py-8">
      <main className="flex flex-col gap-8 lg:flex-row">
        <article className="lg:w-2/3">
          <header className="mb-4 lg:mb-6">
            <div className="mb-4 flex items-center text-sm text-primary">
              <div className="mr-2 h-3 w-3 rounded-full bg-primary"></div>
              Live Reporting
            </div>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-foreground">
              {BlogPost.title}
            </h1>
            <div className="flex items-center text-muted-foreground">
              <Clock className="mr-2 h-4 w-4" />
              <time dateTime="2024-04-10">{BlogPost.date}</time>
            </div>
          </header>
          <div
            className="prose dark:prose-invert max-w-none"
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
            <Button variant="outline" size="sm">
              <Bookmark className="mr-2 h-4 w-4" />
              Save
            </Button>
          </div>
          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-bold">
              Comments ({comments.length})
            </h2>
            {comments.map((comment) => (
              <Card key={comment.id} className="mb-4">
                <CardContent className="p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center">
                      <Avatar className="mr-2 h-8 w-8 ring-2 ring-primary">
                        <AvatarImage
                          src={comment.avatar}
                          alt={comment.author}
                        />
                        <AvatarFallback>{comment.author[0]}</AvatarFallback>
                      </Avatar>
                      <span className="font-semibold">{comment.author}</span>
                    </div>
                    <time className="text-sm text-muted-foreground">
                      {comment.date}
                    </time>
                  </div>
                  <p className="mb-4 text-foreground">{comment.content}</p>
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" size="sm">
                      <ThumbsUp className="mr-2 h-4 w-4" />
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
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                        <DropdownMenuItem>Report</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardContent>
              </Card>
            ))}
            <form className="mt-4">
              <Textarea placeholder="Write a comment..." className="mb-4" />
              <Button type="submit">Post comment</Button>
            </form>
          </section>
        </article>
        <aside className="lg:w-1/3">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-semibold">About the author</h3>
              <div className="mb-4 flex items-center">
                <Avatar className="mr-4 h-10 w-10 ring-2 ring-primary">
                  <AvatarImage
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    alt={BlogPost.author}
                  />
                  <AvatarFallback>{BlogPost.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{BlogPost.author}</p>
                  <p className="text-sm text-muted-foreground">
                    Lead Astrophysicist & Data Scientist
                  </p>
                </div>
              </div>
              <p className="mb-4 text-muted-foreground">
                Dr. Holloway is a renowned astrophysicist and data scientist,
                dedicated to advancing our understanding of the cosmos through
                innovative AI solutions.
              </p>
              <Button variant="outline" className="w-full">
                Follow
              </Button>
            </CardContent>
          </Card>
          <Card className="mt-4">
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-semibold">Recommended topics</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="secondary" size="sm">
                  Stellaris AI
                </Button>
                <Button variant="secondary" size="sm">
                  Astrophysics
                </Button>
                <Button variant="secondary" size="sm">
                  Data Science
                </Button>
                <Button variant="secondary" size="sm">
                  Machine Learning
                </Button>
                <Button variant="secondary" size="sm">
                  Astronomy
                </Button>
                <Button variant="secondary" size="sm">
                  Cosmology
                </Button>
              </div>
            </CardContent>
          </Card>
        </aside>
      </main>
    </div>
  );
}
