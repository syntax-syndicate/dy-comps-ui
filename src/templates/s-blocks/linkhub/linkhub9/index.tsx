"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  ChevronRight,
  ExternalLink,
  Folder,
  File,
  Globe,
  Book,
  Code,
  Cpu,
  Database,
  Server,
} from "lucide-react";

interface LinkItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

interface Category {
  name: string;
  icon: React.ReactNode;
  subcategories?: Category[];
  links?: LinkItem[];
}

const categories: Category[] = [
  {
    name: "Web Development",
    icon: <Globe className="size-5" />,
    subcategories: [
      {
        name: "Frontend",
        icon: <Code className="size-5" />,
        links: [
          {
            href: "https://reactjs.org",
            label: "React",
            icon: <File className="size-4" />,
          },
          {
            href: "https://vuejs.org",
            label: "Vue.js",
            icon: <File className="size-4" />,
          },
          {
            href: "https://angular.io",
            label: "Angular",
            icon: <File className="size-4" />,
          },
        ],
      },
      {
        name: "Backend",
        icon: <Server className="size-5" />,
        links: [
          {
            href: "https://nodejs.org",
            label: "Node.js",
            icon: <File className="size-4" />,
          },
          {
            href: "https://www.python.org",
            label: "Python",
            icon: <File className="size-4" />,
          },
          {
            href: "https://www.ruby-lang.org",
            label: "Ruby",
            icon: <File className="size-4" />,
          },
        ],
      },
    ],
  },
  {
    name: "Data Science",
    icon: <Database className="size-5" />,
    subcategories: [
      {
        name: "Machine Learning",
        icon: <Cpu className="size-5" />,
        links: [
          {
            href: "https://scikit-learn.org",
            label: "Scikit-learn",
            icon: <File className="size-4" />,
          },
          {
            href: "https://www.tensorflow.org",
            label: "TensorFlow",
            icon: <File className="size-4" />,
          },
          {
            href: "https://pytorch.org",
            label: "PyTorch",
            icon: <File className="size-4" />,
          },
        ],
      },
      {
        name: "Data Visualization",
        icon: <Globe className="size-5" />,
        links: [
          {
            href: "https://d3js.org",
            label: "D3.js",
            icon: <File className="size-4" />,
          },
          {
            href: "https://matplotlib.org",
            label: "Matplotlib",
            icon: <File className="size-4" />,
          },
          {
            href: "https://plotly.com",
            label: "Plotly",
            icon: <File className="size-4" />,
          },
        ],
      },
    ],
  },
  {
    name: "Computer Science Fundamentals",
    icon: <Book className="size-5" />,
    links: [
      {
        href: "https://www.geeksforgeeks.org/data-structures",
        label: "Data Structures",
        icon: <File className="size-4" />,
      },
      {
        href: "https://www.geeksforgeeks.org/fundamentals-of-algorithms",
        label: "Algorithms",
        icon: <File className="size-4" />,
      },
      {
        href: "https://www.geeksforgeeks.org/operating-systems",
        label: "Operating Systems",
        icon: <File className="size-4" />,
      },
    ],
  },
];

const TreeNode: React.FC<{ category: Category; depth: number }> = ({
  category,
  depth,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`w-full justify-start ${depth > 0 ? "pl-8" : ""}`}
        >
          <ChevronRight
            className={`size-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
          />
          {category.icon}
          <span className="ml-2">{category.name}</span>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        {category.subcategories?.map((subcategory, index) => (
          <TreeNode key={index} category={subcategory} depth={depth + 1} />
        ))}
        {category.links?.map((link, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={`w-full justify-start ${depth > 0 ? "pl-12" : "pl-8"}`}
            asChild
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2"
            >
              {link.icon}
              <span>{link.label}</span>
              <ExternalLink className="ml-auto size-3" />
            </a>
          </Button>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default function LinkHub9() {
  return (
    <div className="container mx-auto py-16">
      <Card className="mx-auto max-w-3xl">
        <CardHeader>
          <CardTitle className="text-2xl">Tree Link Hub</CardTitle>
          <CardDescription>
            Explore our knowledge base through this hierarchical structure
          </CardDescription>
        </CardHeader>
        <CardContent>
          {categories.map((category, index) => (
            <TreeNode key={index} category={category} depth={0} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
