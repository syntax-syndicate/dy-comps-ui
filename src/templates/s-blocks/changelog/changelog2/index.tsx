import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap, Bug, Download } from "lucide-react";

export default function Changelog2() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-4xl font-bold">Changelog</h1>
        <p className="mb-8 text-muted-foreground">
          Get the latest updates and improvements to our platform.
        </p>
        <div className="mx-auto flex max-w-sm gap-2">
          <Input
            type="email"
            placeholder="name@example.com"
            className="bg-background"
          />
          <Button>
            Subscribe
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-8">
        <Card className="border-2 border-primary/30">
          <CardHeader>
            <div className="mb-2 flex items-center justify-between">
              <Badge variant="outline" className="bg-primary/5 text-primary">
                Version 1.2.1
              </Badge>
              <span className="text-sm text-muted-foreground">
                23 September 2024
              </span>
            </div>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="size-5 text-primary" />
              New features and improvements
            </CardTitle>
            <CardDescription>
              Here are the latest updates and improvements to our platform. We
              are always working to improve our platform and your experience.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Download className="mt-0.5 size-5 text-primary" />
                <span>Added new feature to export data</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="mt-0.5 size-5 text-primary" />
                <span>Improved performance and speed</span>
              </li>
              <li className="flex items-start gap-2">
                <Bug className="mt-0.5 size-5 text-primary" />
                <span>Fixed minor bugs and issues</span>
              </li>
              <li className="flex items-start gap-2">
                <Download className="mt-0.5 size-5 text-primary" />
                <span>Added new feature to import data</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="mb-2 flex items-center justify-between">
              <Badge variant="outline">Version 1.0.0</Badge>
              <span className="text-sm text-muted-foreground">
                21 August 2024
              </span>
            </div>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="size-5 text-primary" />
              First version of our platform
            </CardTitle>
            <CardDescription>
              Introducing a new platform to help you manage your projects and
              tasks. We are excited to launch our platform and help you get
              started. We are always working to improve our platform and your
              experience.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center rounded-lg bg-muted/40 p-12">
              <svg
                className="size-12 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
