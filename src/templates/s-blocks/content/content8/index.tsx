import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";
import Image from "next/image";

export default function Content8() {
  return (
    <div className="container mx-auto max-w-4xl space-y-12 px-4 py-12">
      <div className="space-y-4">
        <Badge
          variant="secondary"
          className="bg-primary/10 text-primary hover:bg-primary/20"
        >
          Introducing
        </Badge>

        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          JavaScript for beginners
        </h1>

        <p className="text-xl text-muted-foreground">
          Start your journey into web development with our comprehensive
          JavaScript course. Perfect for absolute beginners who want to learn
          the fundamentals of modern programming.
        </p>
      </div>

      <div className="space-y-6 text-muted-foreground">
        <p>
          Master the basics of JavaScript in a structured, easy-to-follow
          format. Our course breaks down complex concepts into digestible
          pieces, ensuring you build a solid foundation for your programming
          career.
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex size-6 shrink-0 items-center justify-center text-primary">
              <CheckIcon className="size-6" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Data types</h3>
              <p>
                Learn about strings, numbers, booleans, and how JavaScript
                handles different types of data. Understanding data types is
                crucial for writing reliable code.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex size-6 shrink-0 items-center justify-center text-primary">
              <CheckIcon className="size-6" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Loops</h3>
              <p>
                Master the art of iteration with for loops, while loops, and
                modern array methods. Learn how to efficiently work with data
                collections.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex size-6 shrink-0 items-center justify-center text-primary">
              <CheckIcon className="size-6" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Events</h3>
              <p>
                Discover how to make your websites interactive by handling user
                actions. Learn about event listeners, bubbling, and modern event
                handling patterns.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          From beginner to expert in 3 hours
        </h2>
        <p className="text-muted-foreground">
          Our carefully structured curriculum takes you from understanding basic
          syntax to building real-world applications. With hands-on exercises
          and practical examples, you&apos;ll be writing your own JavaScript
          code in no time.
        </p>
      </div>

      <Card className="border-l-4 border-l-primary">
        <CardContent className="p-6">
          <blockquote className="mb-4 italic text-foreground">
            The course structure made learning JavaScript incredibly
            approachable. The practical examples helped me understand how to
            apply concepts in real-world scenarios. I went from complete
            beginner to writing my own programs in just a few hours!
          </blockquote>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-foreground">Sarah Chen</div>
              <div className="text-sm text-muted-foreground">Web Developer</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
        <Image
          src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
          alt="JavaScript code example"
          className="h-full w-full object-cover"
          height={400}
          width={400}
        />
      </div>
    </div>
  );
}
