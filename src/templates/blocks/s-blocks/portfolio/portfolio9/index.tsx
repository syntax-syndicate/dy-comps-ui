import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function PortfolioResume() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="container mx-auto grid gap-8 py-20 md:grid-cols-2">
        <div className="space-y-6">
          <div className="flex gap-4">
            <Badge
              variant="secondary"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-base"
            >
              🌍 Digital Nomad
            </Badge>
            <Badge variant="outline" className="bg-primary px-4 py-2 text-base">
              📧 hello@benwilson.com
            </Badge>
          </div>
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Professional headshot of Ben Wilson"
            className="rounded-lg shadow-lg"
            height={800}
            width={800}
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">Hi, I&apos;m Ben Wilson</h1>
          <p className="text-muted-foreground">
            I&apos; an assionate digital nomad with a knack for solving complex
            problems through creative design and technology. With over 5 years
            of experience in web development, UX/UI design, and digital
            marketing, I help businesses grow by crafting meaningful digital
            experiences.
          </p>
          <p className="text-muted-foreground">
            My journey has taken me across 20+ countries, where I&apos;ve worked
            remotely with startups, agencies, and Fortune 500 companies. I
            thrive in dynamic environments and love turning ideas into reality.
          </p>
          <div className="space-y-4 text-muted-foreground">
            <div className="grid grid-cols-2 gap-2">
              <span className="font-semibold">Full Name:</span>
              <span>Ben Wilson</span>
              <span className="font-semibold">Location:</span>
              <span>Currently in Bali, Indonesia</span>
              <span className="font-semibold">Expertise:</span>
              <span>Web Development, UX/UI Design</span>
              <span className="font-semibold">Email:</span>
              <span>hello@benwilson.com</span>
              <span className="font-semibold">Phone:</span>
              <span>+1 (123) 456-7890</span>
              <span className="font-semibold">LinkedIn:</span>
              <span>
                <a
                  href="https://linkedin.com/example"
                  className="text-primary hover:underline"
                >
                  linkedin.com/in/benwilson
                </a>
              </span>
              <span className="font-semibold">GitHub:</span>
              <span>
                <a
                  href="https://github.com/programming-with-ia"
                  className="text-primary hover:underline"
                >
                  github.com/benwilson
                </a>
              </span>
              <span className="font-semibold">Availability:</span>
              <span>Open for new projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">What I Do Best</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Web Development</h2>
            <p className="text-muted-foreground">
              I build responsive, user-friendly websites using modern
              technologies like React, Next.js, and Tailwind CSS. From landing
              pages to full-stack applications, I ensure seamless performance
              and scalability.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Proficient in JavaScript, TypeScript, and Node.js</li>
              <li>Experience with RESTful APIs and GraphQL</li>
              <li>Strong knowledge of database systems (SQL, MongoDB)</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">UX/UI Design</h2>
            <p className="text-muted-foreground">
              I create intuitive and visually appealing interfaces that enhance
              user engagement. My design process focuses on usability,
              accessibility, and aesthetics.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Skilled in Figma, Adobe XD, and Sketch</li>
              <li>Expertise in wireframing and prototyping</li>
              <li>Strong understanding of design systems</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Digital Strategy</h2>
            <p className="text-muted-foreground">
              I help businesses develop and execute digital strategies that
              drive growth. From SEO to content marketing, I ensure your brand
              stands out in the digital landscape.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>SEO optimization and analytics</li>
              <li>Content creation and marketing</li>
              <li>Social media strategy and management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Featured Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              title: "E-Commerce Platform",
              description:
                "Built a scalable e-commerce platform with React, Node.js, and MongoDB. Integrated payment gateways and optimized for performance.",
              technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
            },
            {
              title: "Portfolio Website Builder",
              description:
                "Developed a no-code portfolio website builder for creatives, enabling users to create and customize their portfolios effortlessly.",
              technologies: ["Next.js", "Tailwind CSS", "Firebase"],
            },
            {
              title: "Travel Blog Platform",
              description:
                "Designed and developed a travel blog platform with a focus on user-generated content and SEO optimization.",
              technologies: ["WordPress", "PHP", "MySQL", "SEO Tools"],
            },
            {
              title: "AI-Powered Chatbot",
              description:
                "Created an AI-powered chatbot for customer support, leveraging natural language processing and machine learning.",
              technologies: ["Python", "TensorFlow", "NLP", "AWS Lambda"],
            },
          ].map((project, index) => (
            <Card key={index} className="border bg-card">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">
          What Clients Say
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              name: "Sarah Johnson",
              role: "CEO at InnovateTech",
              image:
                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
              quote:
                "Ben transformed our website into a powerful tool for customer engagement. His attention to detail and creativity are unmatched.",
            },
            {
              name: "Michael Lee",
              role: "Founder of GreenSolutions",
              image:
                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
              quote:
                "Working with Ben was a game-changer for our digital strategy. He delivered results beyond our expectations.",
            },
            {
              name: "Emily Carter",
              role: "Marketing Director at BrightIdeas",
              image:
                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
              quote:
                "Ben's designs are not only beautiful but also highly functional. He truly understands the user experience.",
            },
          ].map((testimonial) => (
            <Card key={testimonial.name} className="border bg-card">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <Avatar className="h-20 w-20">
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <p className="text-muted-foreground">{testimonial.quote}</p>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-accent py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">
            Let&apos;s Build Something Amazing
          </h2>
          <p className="mt-4 text-muted-foreground">
            Whether you&apos;re looking to revamp your website, improve your
            digital strategy, or just chat about tech, I&apos;d love to hear
            from you!
          </p>
          <a
            href="mailto:hello@benwilson.com"
            className="mt-8 inline-block rounded-full bg-primary px-8 py-3 text-lg font-semibold text-foreground"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
