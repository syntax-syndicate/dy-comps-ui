import {
  Mail,
  Briefcase,
  CheckCircle,
  MessageSquare,
  ClipboardList,
  LayoutGrid,
  Link,
  PlusCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Feature107() {
  const integrations = [
    {
      icon: Mail,
      title: "Mail Connect",
      description: "Instantly link your email with your favorite platforms.",
      href: "#",
    },
    {
      icon: Briefcase,
      title: "Enterprise Hub",
      description: "Synchronize your enterprise data with preferred platforms.",
      href: "#",
    },
    {
      icon: CheckCircle,
      title: "Action Items",
      description: "Effortlessly track all your action items in one place.",
      href: "#",
    },
    {
      icon: MessageSquare,
      title: "Team Connect",
      description: "Communicate with teams seamlessly with a single click.",
      href: "#",
    },
    {
      icon: ClipboardList,
      title: "Initiative Planner",
      description: "Strategize initiatives from inception to execution.",
      href: "#",
    },
    {
      icon: LayoutGrid,
      title: "Kanban View",
      description: "Visualize tasks on a kanban board for fluid progress.",
      href: "#",
    },
  ];

  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4 md:col-span-2">
            <Badge className="w-fit">
              <Link className="mr-2 size-4" />
              Ecosystem
            </Badge>
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
              Experience Harmony
            </h2>
            <p className="text-muted-foreground">
              Discover how SAP integrates flawlessly with other tools and
              platforms, boosting your productivity and streamlining your
              workflows.
            </p>
            <Button className="mt-4 w-fit" variant="outline">
              <PlusCircle className="mr-2 size-4" />
              Request Integration
            </Button>
          </div>
          {integrations.map((integration, index) => (
            <a
              key={index}
              href={integration.href}
              className="group relative flex flex-col justify-between gap-4 rounded-lg border border-muted bg-card p-6 shadow-md transition-all hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="grid size-12 place-content-center rounded-full border border-primary/50 bg-primary/10 text-primary transition-all group-hover:scale-[1.05]">
                  <integration.icon className="size-6" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {integration.title}
                </h3>
                <p className="text-muted-foreground">
                  {integration.description}
                </p>
              </div>
              <div className="absolute right-4 top-4">
                <PlusCircle className="size-5 text-muted-foreground transition-all group-hover:text-primary" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
