import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  CalendarIcon,
  ClockIcon,
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
} from "lucide-react";

export default function BlogSingle4() {
  return (
    <section className="pb-16">
      <div className="relative mb-12 h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1719937206109-7f4e933230c8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Blog post cover image"
          width={1280}
          height={720}
          className="h-full w-full object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-r from-black/70 to-black/30 p-8 text-white">
          <h1 className="mb-4 text-4xl font-bold leading-tight">
            The Joke Tax Chronicles
          </h1>
          <div className="mb-4 flex items-center space-x-4">
            <Avatar className="size-12 border-2 border-white">
              <AvatarImage
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="John Doe"
                width={48}
                height={48}
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-xl font-semibold">John Doe</p>
              <p className="text-sm opacity-75">Professional Joke Teller</p>
            </div>
          </div>
          <div className="mb-4 flex items-center text-sm">
            <CalendarIcon className="mr-2 size-5" />
            <time dateTime="2024-10-29" className="mr-4">
              October 29, 2024
            </time>
            <ClockIcon className="mr-2 size-5" />
            <span>5 min read</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="secondary"
              className="bg-white/20 text-white hover:bg-white/30"
            >
              Humor
            </Badge>
            <Badge
              variant="secondary"
              className="bg-white/20 text-white hover:bg-white/30"
            >
              Politics
            </Badge>
            <Badge
              variant="secondary"
              className="bg-white/20 text-white hover:bg-white/30"
            >
              Satire
            </Badge>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-4xl">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            Once upon a time, in a bustling digital kingdom, a team of designers
            faced a daunting challenge. They were tasked with creating a
            cohesive, scalable design system for their rapidly growing product.
            The existing approach, relying on a patchwork of custom CSS and
            inconsistent class names, had become a tangled web of complexity,
            making it difficult to maintain and iterate on the user interface.
          </p>

          <h2>The Designer&apos;s Triumph</h2>

          <h3>Chapter 1: Introducing Tailwind</h3>
          <p>
            Once upon a time, in a bustling digital kingdom, a team of designers
            faced a daunting challenge. They were tasked with creating a
            cohesive, scalable design system for their rapidly growing product.
            The existing approach, relying on a patchwork of custom CSS and
            inconsistent class names, had become a tangled web of complexity,
            making it difficult to maintain and iterate on the user interface.
          </p>

          <p>
            Enter <strong>Tailwind CSS</strong>, a revolutionary utility-first
            framework that promised to streamline their design process. The
            designers, intrigued by Tailwind&apos;s flexibility and focus on
            developer experience, decided to give it a try.
          </p>

          <h3>Chapter 2: Embracing Utility-first Design</h3>
          <p>
            As the designers delved into Tailwind, they were struck by the
            elegance of its utility-first approach. Rather than relying on
            abstract class names, Tailwind provided a comprehensive set of
            atomic classes that allowed them to compose unique styles with ease.
            Gone were the days of wrestling with CSS specificity and overrides;
            Tailwind&apos;s predictable class naming conventions and responsive
            design capabilities empowered the team to build complex interfaces
            with confidence.
          </p>

          <h3 id="chapter-3-consistency-is-key">
            Chapter 3: Consistency is Key
          </h3>
          <p>
            With Tailwind at their fingertips, the designers embarked on a
            journey to transform their design system. They meticulously defined
            a set of reusable components, each adhering to a consistent visual
            language and following Tailwind&apos;s best practices. This approach
            not only streamlined the development process but also ensured that
            the final product delivered a cohesive, polished experience to the
            end-users.
          </p>

          <h3 id="chapter-4-scaling-with-confidence">
            Chapter 4: Scaling with Confidence
          </h3>
          <p>
            As the product grew, the designers found that Tailwind&apos;s
            scalability was a game-changer. Adding new features or making global
            design changes became a breeze, thanks to Tailwind&apos;s modular
            nature and the team&apos;s clear understanding of the design system.
            The once-daunting task of maintaining visual consistency across the
            entire application now seemed effortless.
          </p>

          <h3 id="chapter-5-the-designers-triumph">
            Chapter 5: The Designer&apos;s Triumph
          </h3>
          <p>
            In the end, the designers&apos; decision to embrace Tailwind CSS
            proved to be a resounding success. The product&apos;s user interface
            became a testament to their creativity and the power of
            Tailwind&apos;s utility-first approach. The team&apos;s confidence
            grew, and they were able to focus on pushing the boundaries of their
            design, secure in the knowledge that Tailwind would support their
            efforts.
          </p>

          <p>
            As the product evolved, the designers faced new challenges, such as
            integrating complex data visualizations and creating engaging
            interactive elements. But with Tailwind as their trusty companion,
            they tackled each obstacle with renewed vigor. The framework&apos;s
            flexibility allowed them to quickly prototype and iterate on their
            ideas, ensuring that the final product remained visually cohesive
            and delightful to use.
          </p>

          <p>
            One of the standout features of the designers&apos; work was the
            implementation of a comprehensive icon system. By leveraging
            Tailwind&apos;s utility classes, they were able to create a library
            of reusable icons that seamlessly blended with the overall design.
            This attention to detail elevated the user experience, making the
            product feel polished and professional.
          </p>

          <blockquote>
            <p>
              &quot;Tailwind CSS has been a game-changer for our design
              team,&quot; remarked the lead designer. &quot;It has empowered us
              to create a truly scalable and maintainable design system, without
              sacrificing the creativity and expressiveness that our users
              expect.&quot;
            </p>
          </blockquote>

          <p>
            As the kingdom&apos;s users marveled at the seamless experience, the
            designers basked in the glory of their triumph, knowing that they
            had not only transformed their product but also elevated the art of
            design in the digital realm.
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
            success inspired other teams to follow in their footsteps, and soon
            the entire digital realm was abuzz with the transformative power of
            Tailwind CSS.
          </p>
        </article>
        <Separator className="my-8" />
        <div className="flex items-center justify-between">
          <Card>
            <CardHeader>
              <CardTitle>About the Author</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Avatar className="size-10">
                  <AvatarImage
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    alt="John Doe"
                    width={40}
                    height={40}
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-sm text-muted-foreground">
                    Professional Joke Teller
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div>
            <p className="mb-2 text-sm">Share this article</p>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon">
                <TwitterIcon className="size-4" />
                <span className="sr-only">Share on Twitter</span>
              </Button>
              <Button variant="outline" size="icon">
                <FacebookIcon className="size-4" />
                <span className="sr-only">Share on Facebook</span>
              </Button>
              <Button variant="outline" size="icon">
                <LinkedinIcon className="size-4" />
                <span className="sr-only">Share on LinkedIn</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
