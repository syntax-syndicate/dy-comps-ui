import Image from "next/image";
import { Github, Linkedin, Dribbble } from "lucide-react";
import type { LucideIcon } from "lucide-react"; // Import LucideIcon type for type annotations

// Define the SocialLink interface
interface SocialLink {
  icon: LucideIcon; // Use the LucideIcon type from lucide-react
  href: string;
}

// Define the TeamMemberProps interface
interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  image: string;
  socialLinks: SocialLink[];
}

// Define the teamMembers array with the TeamMemberProps type
const teamMembers: TeamMemberProps[] = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    description:
      "Visionary leader with 15 years of experience in tech innovation.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    socialLinks: [
      { icon: Github, href: "https://github.com/jln13x" },
      { icon: Linkedin, href: "https://linkedin.com/example" },
      { icon: Dribbble, href: "https://dribbble.com/oimmi" },
    ],
  },
  {
    name: "Jane Smith",
    role: "CTO",
    description: "Tech genius with a passion for cutting-edge solutions.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    socialLinks: [
      { icon: Github, href: "https://github.com/Reflex2468" },
      { icon: Linkedin, href: "https://linkedin.com/example" },
    ],
  },
  // Add more team members here...
];

export default function TeamSection() {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-start text-left">
        <p className="font-semibold text-primary">We&apos;re hiring</p>
        <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
          Meet our team
        </h2>
        <p className="mb-8 max-w-3xl text-muted-foreground lg:text-xl">
          Our diverse team of experts is dedicated to pushing the boundaries of
          innovation and delivering exceptional results for our clients.
        </p>
      </div>
      <div className="container mt-16 grid gap-x-12 gap-y-8 lg:grid-cols-2">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </section>
  );
}

// Apply the TeamMemberProps interface to the TeamMember component
function TeamMember({
  name,
  role,
  description,
  image,
  socialLinks,
}: TeamMemberProps) {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="mb-4 aspect-square w-full shrink-0 sm:mb-0 sm:mr-5 sm:w-48">
        <Image
          src={image}
          alt={name}
          width={192}
          height={192}
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col items-start">
        <p className="w-full text-left font-medium">{name}</p>
        <p className="w-full text-left text-muted-foreground">{role}</p>
        <p className="w-full py-2 text-sm text-muted-foreground">
          {description}
        </p>
        <div className="my-2 flex items-start gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <link.icon className="size-4 text-muted-foreground transition-colors hover:text-primary" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
