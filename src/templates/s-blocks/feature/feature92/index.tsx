import Image from "next/image";
import Link from "next/link";
import { Disc, MessageSquare, Twitter, Send, Linkedin } from "lucide-react";

const integrations = [
  {
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    name: "Figma",
    url: "#",
    description:
      "Keep teams aligned with live-updated thumbnails and synced feedback directly within tasks.",
  },
  {
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    name: "Tailwind CSS",
    url: "#",
    description:
      "Streamline your workflow by automating actions through commits and pull requests, linking tasks across platforms.",
  },
  {
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    name: "shadcn/ui",
    url: "#",
    description:
      "Enhance collaboration with insights on linked items and by associating conversations to specific tasks.",
  },
];

const communities = [
  { name: "Discord", icon: Disc, url: "#" },
  { name: "Reddit", icon: MessageSquare, url: "#" },
  { name: "Twitter", icon: Twitter, url: "#" },
  { name: "Telegram", icon: Send, url: "#" },
  { name: "LinkedIn", icon: Linkedin, url: "#" },
];

export default function Feature92() {
  return (
    <section className="border-b bg-background py-24">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          <div className="mb-10 lg:mb-0">
            <h2 className="text-5xl font-extrabold text-foreground">
              Unified Ecosystem.
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Centralize your workflow by connecting all your communications and
              tasks.
            </p>
          </div>
          <div className="space-y-6">
            {integrations.map((integration, index) => (
              <div key={index} className="flex items-start gap-4">
                <Link href={integration.url}>
                  <Image
                    src={integration.logo}
                    alt={integration.name}
                    width={40}
                    height={40}
                  />
                </Link>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {integration.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {integration.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-xl border bg-muted p-6">
          <h3 className="mb-4 text-2xl font-semibold text-foreground">
            Join Our Community
          </h3>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {communities.map((community, index) => (
              <li key={index} className="flex items-center gap-2">
                <Link href={community.url}>
                  <community.icon className="size-5 text-primary" />
                </Link>
                <Link href={community.url}>
                  <span className="font-medium text-foreground hover:text-primary">
                    {community.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
