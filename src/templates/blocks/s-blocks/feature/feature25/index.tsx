"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FeatureOverview() {
  const features = [
    {
      title: "Intelligent Project Orchestration",
      items: [
        "AI-powered task prioritization and resource allocation",
        "Real-time collaboration with multi-user editing and version control",
        "Customizable Kanban boards with automated workflow triggers",
        "Gantt charts with drag-and-drop timeline adjustments",
        "Predictive analytics for project timelines and budget forecasting",
        "Integrated time tracking with billable hours calculation",
        "Automated report generation for stakeholder communications",
        "Risk assessment matrix with mitigation strategy suggestions",
        "Cross-project dependency mapping and critical path analysis",
        "Resource leveling algorithms for optimal team utilization",
        "Customizable project templates with industry-specific best practices",
        "Agile sprint planning and velocity tracking",
        "Burndown and burnup charts for progress visualization",
        "Integration with popular version control systems (Git, SVN)",
        "Automated code review assignment and tracking",
      ],
    },
    {
      title: "Dynamic Website Customization Engine",
      items: [
        "Intuitive drag-and-drop interface for layout design",
        "Real-time preview with device-specific emulation",
        "Component library with customizable presets and styles",
        "Visual CSS editor with instant feedback",
        "Custom JavaScript injection with syntax highlighting and error checking",
        "Responsive breakpoint editor with live grid overlay",
        "Automated image optimization and lazy loading implementation",
        "Built-in accessibility checker with WCAG compliance suggestions",
        "SEO optimization tools with real-time content analysis",
        "A/B testing framework for layout and content variations",
        "Integration with popular CMS platforms for dynamic content",
        "Custom font uploader with web font optimization",
        "Animation creator with keyframe editor and easing functions",
        "Performance budget tracking with suggestions for improvement",
        "Multilingual support with automatic content translation",
      ],
    },
    {
      title: "Advanced Component Styling System",
      items: [
        "Comprehensive theme editor with global variable management",
        "Real-time CSS-in-JS compilation with type safety",
        "Automated dark mode generation with customizable color palettes",
        "Design token system for consistent styling across components",
        "Visual regression testing for style changes",
        "Responsive typography scale with adjustable base sizes",
        "CSS Grid and Flexbox visual editors",
        "Custom property (CSS variables) manager with scoping options",
        "Animation library with presets and custom easing function editor",
        "Icon management system with SVG optimization",
        "Color contrast checker for accessibility compliance",
        "CSS specificity visualizer and optimizer",
        "Sass/Less preprocessor support with mixin library",
        "CSS Modules integration for scoped styling",
        "Atomic CSS generator for performance optimization",
      ],
    },
  ];

  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="mx-auto flex max-w-screen-md flex-col items-center gap-4 text-center">
          <Badge variant="outline" className="text-sm font-medium">
            Comprehensive Feature Set
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Empower Your Development with{" "}
            <span className="text-primary">Cutting-Edge Tools</span>
          </h2>
          <p className="max-w-[85%] text-muted-foreground sm:text-lg">
            Discover our extensive suite of features designed to revolutionize
            your web development workflow, from project inception to deployment
            and beyond.
          </p>
        </div>
        <div className="mt-16 space-y-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              isDefaultOpen={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  isDefaultOpen,
}: {
  feature: { title: string; items: string[] };
  isDefaultOpen: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(isDefaultOpen);

  return (
    <Card className="w-full overflow-hidden">
      <CardHeader
        className="cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <CardTitle className="flex items-center justify-between text-2xl font-semibold">
          {feature.title}
          {isExpanded ? (
            <ChevronUp className="size-6 text-muted-foreground" />
          ) : (
            <ChevronDown className="size-6 text-muted-foreground" />
          )}
        </CardTitle>
      </CardHeader>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={{
              expanded: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <CardContent>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {feature.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 size-5 flex-shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
