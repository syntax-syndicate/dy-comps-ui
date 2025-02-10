import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Globe, Mail, User, Calendar, Briefcase, Star } from "lucide-react";

export default function PortfolioResume() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="container mx-auto py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4">
              <Badge className="gap-2 rounded-full px-6 py-3 text-base">
                <User className="h-5 w-5" />
                Digital Nomad Developer
              </Badge>
              <Badge
                variant="secondary"
                className="gap-2 rounded-full px-6 py-3 text-base"
              >
                <Mail className="h-5 w-5" />
                hello@domain.com
              </Badge>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Ben Wilson professional headshot"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">
              Ben Wilson
              <span className="block text-3xl text-primary md:text-4xl">
                Full Stack Developer
              </span>
            </h1>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Passionate full-stack developer with 8+ years of experience
              building scalable web applications. Specialized in React, Node.js,
              and cloud technologies. Open-source contributor and tech educator.
            </p>

            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <DetailItem
                icon={<Calendar className="h-5 w-5" />}
                label="Experience"
                value="8+ Years"
              />
              <DetailItem
                icon={<Briefcase className="h-5 w-5" />}
                label="Availability"
                value="Open for Work"
              />
              <DetailItem
                icon={<Globe className="h-5 w-5" />}
                label="Location"
                value="Remote Worldwide"
              />
              <DetailItem
                icon={<Star className="h-5 w-5" />}
                label="Speciality"
                value="Web Apps"
              />
            </dl>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto">
          <div className="grid gap-12 md:grid-cols-3">
            <FeatureBlock
              title="Technical Expertise"
              icon={<CodeIcon className="h-8 w-8" />}
              content="Full-stack development with modern frameworks including React, Next.js, Node.js, and Python."
            />
            <FeatureBlock
              title="Cloud Architecture"
              icon={<CloudIcon className="h-8 w-8" />}
              content="AWS Certified Solutions Architect with experience in scalable cloud infrastructure design."
            />
            <FeatureBlock
              title="Team Leadership"
              icon={<TeamIcon className="h-8 w-8" />}
              content="Led multiple cross-functional teams in agile environments with a focus on CI/CD practices."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="mb-16 text-center text-4xl font-bold tracking-tight">
          Client Testimonials
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </section>
    </div>
  );
}

function DetailItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-lg border p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
        {icon}
      </div>
      <div>
        <dt className="text-sm font-medium text-muted-foreground">{label}</dt>
        <dd className="mt-1 font-semibold">{value}</dd>
      </div>
    </div>
  );
}

function FeatureBlock({
  title,
  icon,
  content,
}: {
  title: string;
  icon: React.ReactNode;
  content: string;
}) {
  return (
    <div className="space-y-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
      <p className="text-lg leading-relaxed text-muted-foreground">{content}</p>
    </div>
  );
}

function TestimonialCard({
  name,
  role,
  image,
  quote,
}: {
  name: string;
  role: string;
  image: string;
  quote: string;
}) {
  return (
    <Card className="group relative overflow-hidden transition-all hover:border-primary">
      <CardContent className="p-8">
        <div className="flex flex-col items-center space-y-6 text-center">
          <Avatar className="h-20 w-20 transition-transform group-hover:scale-110">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback className="bg-primary/10 text-primary">
              {name[0]}
            </AvatarFallback>
          </Avatar>
          <p className="text-lg italic text-muted-foreground">
            &quot;{quote}&quot;
          </p>
          <div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-sm text-primary">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO at TechCorp",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    quote:
      "Ben's expertise in cloud architecture transformed our infrastructure, reducing costs by 40% while improving scalability.",
  },
  {
    name: "Michael Chen",
    role: "Lead Product Manager",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    quote:
      "One of the most proficient developers I've worked with. Delivers beyond expectations consistently.",
  },
  {
    name: "Emma Wilson",
    role: "Startup Founder",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    quote:
      "Ben helped us build our MVP in record time. His full-stack knowledge is unparalleled.",
  },
];

// Example icons (replace with actual icon imports)
function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z" />
    </svg>
  );
}

function CloudIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.35 10.04c-.68-3.45-3.71-6.04-7.35-6.04-4.14 0-7.5 3.36-7.5 7.5h-.5c-2.76 0-5 2.24-5 5s2.24 5 5 5h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
    </svg>
  );
}

function TeamIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  );
}
