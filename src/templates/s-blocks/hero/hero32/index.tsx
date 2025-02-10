import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const integrations = [
  {
    id: "integration-1",
    icon: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=128&h=128&fit=crop&q=80",
    name: "Cloud Storage",
  },
  {
    id: "integration-2",
    icon: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=128&h=128&fit=crop&q=80",
    name: "Messaging",
  },
  {
    id: "integration-3",
    icon: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=128&h=128&fit=crop&q=80",
    name: "Analytics",
  },
  {
    id: "integration-4",
    icon: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=128&h=128&fit=crop&q=80",
    name: "Security",
  },
  {
    id: "integration-5",
    icon: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=128&h=128&fit=crop&q=80",
    name: "Data Center",
  },
  {
    id: "integration-6",
    icon: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=128&h=128&fit=crop&q=80",
    name: "Coding",
  },
  {
    id: "integration-7",
    icon: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=128&h=128&fit=crop&q=80",
    name: "Project Management",
  },
  {
    id: "integration-8",
    icon: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=128&h=128&fit=crop&q=80",
    name: "Virtual Reality",
  },
  {
    id: "integration-9",
    icon: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=128&h=128&fit=crop&q=80",
    name: "Tech Support",
  },
  {
    id: "integration-10",
    icon: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=128&h=128&fit=crop&q=80",
    name: "Web Development",
  },
  {
    id: "integration-11",
    icon: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=128&h=128&fit=crop&q=80",
    name: "Artificial Intelligence",
  },
  {
    id: "integration-12",
    icon: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=128&h=128&fit=crop&q=80",
    name: "Data Science",
  },
  {
    id: "integration-13",
    icon: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=128&h=128&fit=crop&q=80",
    name: "Cloud Computing",
  },
  {
    id: "integration-14",
    icon: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=128&h=128&fit=crop&q=80",
    name: "Blockchain",
  },
  {
    id: "integration-15",
    icon: "https://images.unsplash.com/photo-1597733336794-12d05021d510?w=128&h=128&fit=crop&q=80",
    name: "Cybersecurity",
  },
  {
    id: "integration-16",
    icon: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=128&h=128&fit=crop&q=80",
    name: "IoT",
  },
];

const features = [
  "Seamless integration with 100+ tools",
  "Boost productivity by 40%",
  "Customizable workflows",
  "24/7 expert support",
];

export default function SimplifiedHero() {
  return (
    <section className="container mx-auto py-16">
      <div className="flex flex-col md:flex-row">
        <div className="mb-8 md:mb-0 md:w-1/2 md:pr-8">
          <Image
            src="/logo.svg"
            width={100}
            height={100}
            alt="logo"
            className="mb-6 dark:invert"
          />
          <h1 className="mb-4 text-4xl font-bold">
            Discover Our <span className="text-primary">Ecosystem</span>
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Explore powerful integrations to streamline your workflow and boost
            productivity across your entire tech stack.
          </p>
          <ul className="mb-8 space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="mr-2 size-5 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mb-8">
            <h3 className="mb-2 text-lg font-semibold">
              Trusted by industry leaders:
            </h3>
            <div className="flex space-x-4">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Company 1"
                width={80}
                height={40}
                className="grayscale"
              />
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Company 2"
                width={80}
                height={40}
                className="grayscale"
              />
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Company 3"
                width={80}
                height={40}
                className="grayscale"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button>
              Start Exploring <ArrowRight />
            </Button>
            <Button variant={"outline"}>Learn More</Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="grid grid-cols-4 gap-4">
            {integrations.slice(0, 16).map((integration) => (
              <div key={integration.id} className="group relative">
                <Image
                  src={integration.icon}
                  alt={integration.name}
                  width={128}
                  height={128}
                  className="rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-center text-xs text-white">
                    {integration.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
