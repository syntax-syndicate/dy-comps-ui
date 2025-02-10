import { Instagram, Linkedin, Twitter, Calendar, Tag } from "lucide-react";
import Image from "next/image";

export default function BlogSingle3() {
  return (
    <div className="container bg-background py-4 md:py-16">
      <header className="relative">
        <div className="relative aspect-[4/5] w-full rounded-lg sm:aspect-video">
          <Image
            src="https://images.unsplash.com/photo-1719937206109-7f4e933230c8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Background image of a camera"
            width={1280}
            height={720}
            className="absolute inset-0 h-full w-full rounded-lg object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 rounded-lg bg-black/50"></div>
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-4 md:p-8">
            <div className="container">
              <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-6xl lg:text-8xl">
                The Joke Tax Chronicles
              </h1>
              <div className="mb-6 flex items-center space-x-4">
                <Image
                  src="https://github.com/shadcn.png"
                  alt="Author avatar"
                  width={40}
                  height={40}
                  className="size-10 rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">John Doe</p>
                  <p className="text-sm text-gray-300">Humor Correspondent</p>
                </div>
              </div>
              <div className="flex flex-col space-y-2 text-sm text-gray-300 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
                <div className="flex items-center">
                  <Calendar className="mr-2 size-4" />
                  <span>Published on May 15, 2023</span>
                </div>
                <div className="flex items-center">
                  <Tag className="mr-2 size-4" />
                  <span>Humor, Politics, Satire</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-4 md:py-12">
        <div className="flex flex-col items-start gap-8 md:flex-row">
          <aside className="mb-8 w-full md:sticky md:top-5 md:mb-0 md:w-1/3 lg:w-1/4">
            <div className="mb-6">
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Instagram className="size-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Linkedin className="size-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Twitter className="size-5" />
                </a>
              </div>
            </div>
            <div className="mb-8 rounded-lg bg-accent p-6">
              <h2 className="mb-4 text-lg font-semibold">Table of Contents</h2>
              <nav>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#the-kings-plan"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      The King&apos;s Plan
                    </a>
                  </li>
                  <li>
                    <a
                      href="#the-joke-tax"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      The Joke Tax
                    </a>
                  </li>
                  <li>
                    <a
                      href="#jokesters-revolt"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Jokester&apos;s Revolt
                    </a>
                  </li>
                  <li>
                    <a
                      href="#the-peoples-rebellion"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      The People&apos;s Rebellion
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="rounded-lg bg-accent p-6">
              <h2 className="mb-4 text-lg font-semibold">Recent Posts</h2>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="block">
                    <h3 className="text-sm font-medium hover:text-foreground">
                      The Great Pie Throwing Contest of 2023
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      May 20, 2023
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#" className="block">
                    <h3 className="text-sm font-medium hover:text-foreground">
                      Why Clowns Make the Best Economists
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      May 18, 2023
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#" className="block">
                    <h3 className="text-sm font-medium hover:text-foreground">
                      The Laughing Gas Shortage: A Nation in Giggles
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      May 16, 2023
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
          <article className="prose prose-sm dark:prose-invert sm:prose-base lg:prose-lg w-full max-w-none md:w-2/3 lg:w-3/4">
            <h2 id="the-designers-triumph">The Designer&apos;s Triumph</h2>

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

            <div className="overflow-x-auto">
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
            </div>

            <p>
              As the designers continued to push the boundaries of their craft,
              they became revered throughout the kingdom for their innovative
              approach and the seamless user experiences they created. Their
              success inspired other teams to follow in their footsteps, and
              soon the entire digital realm was abuzz with the transformative
              power of Tailwind CSS.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
