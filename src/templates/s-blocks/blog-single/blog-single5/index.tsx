"use client";

import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";

export default function BlogSingle5() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <main className="py-12 lg:py-20">
        <div className="mx-auto flex max-w-screen-xl justify-between px-4">
          <article className="prose prose-lg dark:prose-invert mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
            <header className="not-format mb-8 lg:mb-10">
              <div className="flex flex-col items-center sm:flex-row sm:items-start">
                <Avatar className="mb-4 flex size-24 items-center justify-center overflow-hidden border sm:mb-0 sm:mr-6">
                  <AvatarImage
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    alt="Brian Farley"
                    className="h-full w-full object-cover"
                    style={{ objectPosition: "center" }}
                    width={96}
                    height={96}
                  />
                  <AvatarFallback>BF</AvatarFallback>
                </Avatar>
                <div className="text-center sm:text-left">
                  <a href="#" rel="author" className="text-2xl font-bold">
                    Brian Farley
                  </a>
                  <p className="text-base text-muted-foreground">
                    Software Engineer, Technical writer & AI specialist
                  </p>
                  <p className="text-base text-muted-foreground">
                    <time dateTime="2025-02-08" title="February 8th, 2025">
                      Feb. 8, 2025
                    </time>
                  </p>
                </div>
              </div>
              <h1 className="mt-6 text-3xl font-extrabold leading-tight lg:text-4xl">
                Best practices for successful prototypes
              </h1>
            </header>

            <h3 id="chapter-1-introducing-tailwind">
              Chapter 1: Introducing Tailwind
            </h3>
            <p>
              Once upon a time, in a bustling digital kingdom, a team of
              designers faced a daunting challenge. They were tasked with
              creating a cohesive, scalable design system for their rapidly
              growing product. The existing approach, relying on a patchwork of
              custom CSS and inconsistent class names, had become a tangled web
              of complexity, making it difficult to maintain and iterate on the
              user interface.
            </p>

            <p>
              Enter <strong>Tailwind CSS</strong>, a revolutionary utility-first
              framework that promised to streamline their design process. The
              designers, intrigued by Tailwind&apos;s flexibility and focus on
              developer experience, decided to give it a try.
            </p>

            <h3 id="chapter-2-embracing-utility-first-design">
              Chapter 2: Embracing Utility-first Design
            </h3>
            <p>
              As the designers delved into Tailwind, they were struck by the
              elegance of its utility-first approach. Rather than relying on
              abstract class names, Tailwind provided a comprehensive set of
              atomic classes that allowed them to compose unique styles with
              ease. Gone were the days of wrestling with CSS specificity and
              overrides; Tailwind&apos;s predictable class naming conventions
              and responsive design capabilities empowered the team to build
              complex interfaces with confidence.
            </p>

            <figure>
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Placeholder image"
                width={600}
                height={400}
                className="w-full rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <figcaption>Utility-first design with Tailwind CSS</figcaption>
            </figure>

            <h3 id="chapter-3-consistency-is-key">
              Chapter 3: Consistency is Key
            </h3>
            <p>
              With Tailwind at their fingertips, the designers embarked on a
              journey to transform their design system. They meticulously
              defined a set of reusable components, each adhering to a
              consistent visual language and following Tailwind&apos;s best
              practices. This approach not only streamlined the development
              process but also ensured that the final product delivered a
              cohesive, polished experience to the end-users.
            </p>

            <h3 id="chapter-4-scaling-with-confidence">
              Chapter 4: Scaling with Confidence
            </h3>
            <p>
              As the product grew, the designers found that Tailwind&apos;s
              scalability was a game-changer. Adding new features or making
              global design changes became a breeze, thanks to Tailwind&apos;s
              modular nature and the team&apos;s clear understanding of the
              design system. The once-daunting task of maintaining visual
              consistency across the entire application now seemed effortless.
            </p>

            <h3 id="chapter-5-the-designers-triumph">
              Chapter 5: The Designer&apos;s Triumph
            </h3>
            <p>
              In the end, the designers&apos; decision to embrace Tailwind CSS
              proved to be a resounding success. The product&apos;s user
              interface became a testament to their creativity and the power of
              Tailwind&apos;s utility-first approach. The team&apos;s confidence
              grew, and they were able to focus on pushing the boundaries of
              their design, secure in the knowledge that Tailwind would support
              their efforts.
            </p>

            <p>
              As the product evolved, the designers faced new challenges, such
              as integrating complex data visualizations and creating engaging
              interactive elements. But with Tailwind as their trusty companion,
              they tackled each obstacle with renewed vigor. The
              framework&apos;s flexibility allowed them to quickly prototype and
              iterate on their ideas, ensuring that the final product remained
              visually cohesive and delightful to use.
            </p>

            <p>
              One of the standout features of the designers&apos; work was the
              implementation of a comprehensive icon system. By leveraging
              Tailwind&apos;s utility classes, they were able to create a
              library of reusable icons that seamlessly blended with the overall
              design. This attention to detail elevated the user experience,
              making the product feel polished and professional.
            </p>

            <blockquote>
              <p>
                &quot;Tailwind CSS has been a game-changer for our design
                team,&quot; remarked the lead designer. &quot;It has empowered
                us to create a truly scalable and maintainable design system,
                without sacrificing the creativity and expressiveness that our
                users expect.&quot;
              </p>
            </blockquote>

            <p>
              As the kingdom&apos;s users marveled at the seamless experience,
              the designers basked in the glory of their triumph, knowing that
              they had not only transformed their product but also elevated the
              art of design in the digital realm.
            </p>

            <table>
              <thead>
                <tr>
                  <th>King&apos;s Treasury</th>
                  <th>People&apos;s happiness</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Empty</td>
                  <td>Overflowing</td>
                </tr>
                <tr>
                  <td>Modest</td>
                  <td>Satisfied</td>
                </tr>
                <tr>
                  <td>Full</td>
                  <td>Ecstatic</td>
                </tr>
              </tbody>
            </table>

            <p>
              As the designers continued to push the boundaries of their craft,
              they became revered throughout the kingdom for their innovative
              approach and the seamless user experiences they created. Their
              success inspired other teams to follow in their footsteps, and
              soon the entire digital realm was abuzz with the transformative
              power of Tailwind CSS.
            </p>

            <section className="not-format mx-auto mt-12">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-bold text-foreground lg:text-2xl">
                  Discussion (20)
                </h2>
              </div>
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
              <article className="mb-6 rounded-lg bg-background text-base">
                <footer className="mb-2 flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="mr-2 items-center border">
                      <AvatarImage
                        src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                        alt="Brian Farley"
                        width={40}
                        height={40}
                      />
                      <AvatarFallback>MG</AvatarFallback>
                    </Avatar>
                    <p className="mr-3 inline-flex items-center text-sm font-semibold text-foreground">
                      Brian Farley
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <time dateTime="2025-02-08" title="February 8th, 2025">
                        Feb. 8, 2025
                      </time>
                    </p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="size-4" />
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
                  A spot-on article. So glad I read it. Thanks! It's a great
                  reminder that, as UX designers, tools are just our
                  instruments. Mastering the software is important, but it's the
                  solid design strategy that leads to real impact.
                </p>
                <div className="mt-4 flex items-center space-x-4">
                  <Button variant="outline" size="lg">
                    Reply
                  </Button>
                </div>
              </article>
            </section>
          </article>
        </div>
      </main>
      <aside aria-label="Explore further" className="bg-muted py-12 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-foreground">
            Dive Deeper into Our Stories
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="Featured blog post"
                  width={600}
                  height={400}
                  className="mb-5 rounded-lg object-cover" // Added object-cover
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <CardTitle className="mb-2 text-xl font-bold leading-tight">
                  <a href="#">Our New Beginning</a> {/* More Engaging Title */}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  After months of meticulous planning, we're thrilled to share
                  our office space!
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-primary underline underline-offset-4 hover:no-underline"
                >
                  A quick 2-minute read {/* More Descriptive Text */}
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="Featured blog post"
                  width={600}
                  height={400}
                  className="mb-5 rounded-lg object-cover" // Added object-cover
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <CardTitle className="mb-2 text-xl font-bold leading-tight">
                  <a href="#">The Power of Design</a>{" "}
                  {/* More Engaging Title */}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Explore our philosophy behind the design thinking.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-primary underline underline-offset-4 hover:no-underline"
                >
                  A quick 2-minute read {/* More Descriptive Text */}
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="Featured blog post"
                  width={600}
                  height={400}
                  className="mb-5 rounded-lg object-cover" // Added object-cover
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <CardTitle className="mb-2 text-xl font-bold leading-tight">
                  <a href="#">Tech Innovations </a> {/* More Engaging Title */}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  We unveil the cutting-edge technologies transforming our
                  services.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-primary underline underline-offset-4 hover:no-underline"
                >
                  A quick 2-minute read {/* More Descriptive Text */}
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="Featured blog post"
                  width={600}
                  height={400}
                  className="mb-5 rounded-lg object-cover" // Added object-cover
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <CardTitle className="mb-2 text-xl font-bold leading-tight">
                  <a href="#">Our Commitment to Community</a>{" "}
                  {/* More Engaging Title */}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Learn about our initiatives and partnerships
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-primary underline underline-offset-4 hover:no-underline"
                >
                  A quick 2-minute read {/* More Descriptive Text */}
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </aside>
    </div>
  );
}
