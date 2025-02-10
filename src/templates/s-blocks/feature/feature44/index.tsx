import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Star, Sparkles } from "lucide-react";

export default function EnhancedIntegrations() {
  const integrations = [
    {
      name: "Slack",
      description: "Streamline team communication and boost productivity.",
      logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      color: "bg-green-500",
      icon: Zap,
    },
    {
      name: "Google Drive",
      description: "Seamlessly store and share files in the cloud.",
      logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      color: "bg-blue-500",
      icon: Star,
    },
    {
      name: "Dropbox",
      description: "Sync and access your files from anywhere, anytime.",
      logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      color: "bg-indigo-500",
      icon: Sparkles,
    },
    {
      name: "Github",
      description: "Collaborate on code and manage your projects efficiently.",
      logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      color: "bg-purple-500",
      icon: Zap,
    },
    {
      name: "Figma",
      description: "Design, prototype, and collaborate in real-time.",
      logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      color: "bg-pink-500",
      icon: Star,
    },
    {
      name: "Trello",
      description: "Organize projects and tasks with visual boards.",
      logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      color: "bg-cyan-500",
      icon: Sparkles,
    },
    {
      name: "Asana",
      description: "Manage team projects and track progress effortlessly.",
      logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      color: "bg-orange-500",
      icon: Zap,
    },
    {
      name: "Jira",
      description: "Plan, track, and release great software with agility.",
      logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      color: "bg-teal-500",
      icon: Star,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-background to-secondary/10 py-32 text-foreground">
      <div className="container mx-auto">
        <h2 className="mb-4 text-3xl font-bold lg:text-5xl">
          Supercharge Your Workflow
        </h2>
        <p className="max-w-2xl text-lg text-muted-foreground lg:text-xl">
          Unlock the full potential of your team with our powerful integrations.
          Seamlessly connect your favorite tools and boost productivity.
        </p>
        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {integrations.map((integration, index) => (
            <li key={index} className="group">
              <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardContent className="flex h-full flex-col p-6">
                  <div
                    className={`relative size-16 ${integration.color} rounded-full p-3`}
                  >
                    <Image
                      src={integration.logo}
                      alt={integration.name}
                      width={56}
                      height={56}
                      className="h-full w-full object-contain"
                    />
                    <integration.icon
                      className={`absolute -right-2 bottom-0 size-8 rounded-full p-2 ${integration.color} `}
                    />
                  </div>
                  <h3 className="mb-2 mt-4 text-xl font-semibold">
                    {integration.name}
                  </h3>
                  <p className="mb-4 flex-grow text-sm text-muted-foreground">
                    {integration.description}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    Explore integration
                    <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
