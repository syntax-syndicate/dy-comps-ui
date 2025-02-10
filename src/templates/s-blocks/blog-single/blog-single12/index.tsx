import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { MoreHorizontal, ThumbsUp, MessageSquare } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export default function BlogArticle() {
  return (
    <main
      className={cn(
        "bg-background pb-16 pt-8 text-foreground lg:pb-24 lg:pt-16",
      )}
    >
      <div className="mx-auto flex max-w-screen-xl justify-between px-4">
        <article className="format format-sm sm:format-base lg:format-lg mx-auto w-full max-w-2xl">
          <header className="not-format mb-4 lg:mb-6">
            <address className="mb-6 flex items-center not-italic">
              <div className="mr-3 inline-flex items-center text-sm">
                <Avatar className="mr-4 h-16 w-16">
                  <AvatarImage
                    src="https://avatars.githubusercontent.com/u/47101047?v=4"
                    alt="Elias Vance"
                  />
                  <AvatarFallback>EV</AvatarFallback>
                </Avatar>
                <div>
                  <a
                    href="#"
                    rel="author"
                    className="text-xl font-bold text-foreground"
                  >
                    Brian Farley
                  </a>
                  <p className="text-base text-muted-foreground">
                    Tech Enthusiast & Lead Engineer
                  </p>
                  <p className="text-base text-muted-foreground">
                    <time dateTime="2023-10-26" title="October 26th, 2023">
                      Oct. 26, 2023
                    </time>
                  </p>
                </div>
              </div>
            </address>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-foreground lg:mb-6 lg:text-4xl">
              Demystifying Advanced JavaScript Concepts
            </h1>
          </header>
          <div className="prose dark:prose-invert max-w-none">
            <p className="lead">
              JavaScript is a versatile language with many complexities. This
              article aims to unravel some of the more advanced concepts that
              often confuse developers.
            </p>
            <p>
              From closures to prototypes, mastering these topics is crucial for
              writing efficient and maintainable code. Let's dive in!
            </p>
            <p>
              Understanding asynchronous programming with{" "}
              <a href="#" className="text-primary hover:text-primary/80">
                Promises and Async/Await
              </a>{" "}
              is critical in modern JavaScript development.
            </p>
            <figure>
              <img
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=400&width=800"
                alt="JavaScript Concepts"
                className="w-full rounded-lg"
              />
              <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                Key JavaScript Concepts
              </figcaption>
            </figure>
            <h2>Exploring Closures</h2>
            <p>
              Closures are a fundamental concept in JavaScript. They allow
              functions to access variables from their outer scope even after
              the outer function has returned.
            </p>
            <p>Here's a basic example of a closure:</p>
            <pre>
              <code className="language-javascript">
                {`function outerFunction() {
  let outerVar = "Hello";
  function innerFunction() {
    console.log(outerVar);
  }
  return innerFunction;
}
const myClosure = outerFunction();
myClosure(); // Output: "Hello"
`}
              </code>
            </pre>
            <h2>Prototypes and Inheritance</h2>
            <ol>
              <li>
                <strong>Prototype Chain</strong>. JavaScript uses prototypes for
                object inheritance.
              </li>
              <li>
                <strong>Constructor Functions</strong>. Use constructor
                functions to create objects with shared properties and methods.
              </li>
              <li>
                <strong>Class Syntax</strong>. While class syntax was introduced
                in ES6, it's still fundamentally based on prototypes.
              </li>
            </ol>
            <h3>Common Pitfalls</h3>
            <p>
              Developers often stumble with issues like hoisting, the use of
              'this', and scope management. Being aware of these pitfalls is
              crucial for avoiding bugs.
            </p>
            <blockquote>
              <p>
                "Understanding JavaScript deeply requires patience and
                consistent practice."
              </p>
            </blockquote>
            <h3>Conclusion</h3>
            <p>
              By mastering these advanced concepts, you'll elevate your
              JavaScript skills and write more robust and efficient code. Keep
              practicing and exploring!
            </p>
          </div>
          <section className="not-format mt-8">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-bold text-foreground lg:text-2xl">
                Discussion (12)
              </h2>
            </div>
            <form className="mb-6">
              <div className="mb-4 rounded-lg rounded-t-lg bg-background">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <Textarea
                  id="comment"
                  rows={6}
                  placeholder="Share your thoughts..."
                  required
                />
              </div>
              <Button type="submit">Post comment</Button>
            </form>
            <article className="mb-6 rounded-lg bg-muted p-6 text-base">
              <footer className="mb-2 flex items-center justify-between">
                <div className="flex items-center">
                  <p className="mr-3 inline-flex items-center text-sm font-semibold text-foreground">
                    <Avatar className="mr-2 h-6 w-6">
                      <AvatarImage
                        src="https://randomuser.me/api/portraits/women/5.jpg"
                        alt="Aaliyah Khan"
                      />
                      <AvatarFallback>AK</AvatarFallback>
                    </Avatar>
                    Aaliyah Khan
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <time dateTime="2023-10-27" title="October 27th, 2023">
                      Oct. 27, 2023
                    </time>
                  </p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Comment settings</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Remove</DropdownMenuItem>
                    <DropdownMenuItem>Report</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </footer>
              <p>
                This article is incredibly helpful! The explanations are clear
                and easy to follow. I finally understand closures better.
              </p>
              <div className="mt-4 flex items-center space-x-4">
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="mr-1 h-3 w-3" />
                  Like
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageSquare className="mr-1 h-3 w-3" />
                  Reply
                </Button>
              </div>
            </article>
            <article className="mb-6 ml-6 rounded-lg bg-muted p-6 text-base lg:ml-12">
              <footer className="mb-2 flex items-center justify-between">
                <div className="flex items-center">
                  <p className="mr-3 inline-flex items-center text-sm font-semibold text-foreground">
                    <Avatar className="mr-2 h-6 w-6">
                      <AvatarImage
                        src="https://randomuser.me/api/portraits/men/7.jpg"
                        alt="Liam Davis"
                      />
                      <AvatarFallback>LD</AvatarFallback>
                    </Avatar>
                    Liam Davis
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <time dateTime="2023-10-28" title="October 28th, 2023">
                      Oct. 28, 2023
                    </time>
                  </p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Comment settings</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Remove</DropdownMenuItem>
                    <DropdownMenuItem>Report</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </footer>
              <p>
                Glad it helped Aaliyah! Happy to help clear up those confusing
                parts.
              </p>
              <div className="mt-4 flex items-center space-x-4">
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="mr-1 h-3 w-3" />
                  Like
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageSquare className="mr-1 h-3 w-3" />
                  Reply
                </Button>
              </div>
            </article>
          </section>
        </article>
      </div>
    </main>
  );
}
