import Link from "next/link";
import {
  Boxes,
  Share,
  Users,
  Mail,
  MessageCircle,
  Cpu,
  Code,
  LifeBuoy,
  MonitorCheck,
} from "lucide-react";

const platforms = [
  {
    icon: Cpu,
    name: "Unified Workspace",
    url: "#",
    description:
      "Synchronize your team's tasks and communications within a single, streamlined interface.",
  },
  {
    icon: Code,
    name: "Code Connect",
    url: "#",
    description:
      "Automate code-related tasks and link development stages using commits and pull requests.",
  },
  {
    icon: LifeBuoy,
    name: "Insight Hub",
    url: "#",
    description:
      "Gain valuable insights by connecting discussions directly to related project elements.",
  },
  {
    icon: MonitorCheck,
    name: "Project Watch",
    url: "#",
    description:
      "Monitor project progress in real-time with live updates and customizable dashboards.",
  },
];

const networks = [
  { name: "Community Central", icon: Users, url: "#" },
  { name: "Dev Forum", icon: MessageCircle, url: "#" },
  { name: "Social Sphere", icon: Share, url: "#" },
  { name: "Open Source", icon: Mail, url: "#" },
];

export default function Feature92() {
  return (
    <section className="bg-background py-24">
      <div className="container grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <div className="mb-8">
            <h2 className="text-4xl font-extrabold text-foreground">
              Integrated Platform.
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Harmonize your projects, connect teams, and streamline workflows.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {platforms.map((platform, index) => (
              <div key={index} className="flex gap-4">
                <Link href={platform.url}>
                  <platform.icon className="size-10 text-primary" />
                </Link>
                <div>
                  <Link href={platform.url}>
                    <h3 className="text-xl font-semibold text-foreground">
                      {platform.name}
                    </h3>
                  </Link>

                  <p className="mt-1 text-muted-foreground">
                    {platform.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border bg-muted px-6 py-10">
          <div className="mb-6 flex items-center gap-4">
            <Boxes className="size-10 text-primary" />
            <h3 className="text-3xl font-semibold text-foreground">
              Engage & Connect
            </h3>
          </div>

          <p className="text-lg text-muted-foreground">
            Become a part of our vibrant community. Share insights, seek
            guidance, and grow together.
          </p>
          <ul className="mt-8 flex flex-col gap-6">
            {networks.map((network, index) => (
              <li key={index} className="flex items-center gap-3">
                <Link href={network.url}>
                  <network.icon className="size-6 shrink-0 text-primary" />
                </Link>
                <Link href={network.url}>
                  <span className="font-medium text-foreground hover:text-primary">
                    {network.name}
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
