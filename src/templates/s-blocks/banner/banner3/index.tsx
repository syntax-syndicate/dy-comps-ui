import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Banner() {
  return (
    <div
      id="banner"
      tabIndex={-1}
      className="fixed z-50 flex w-full items-center justify-between border-b bg-background px-4 py-3"
    >
      <div className="mx-auto flex items-center">
        <p className="flex items-center text-sm font-medium text-foreground md:my-0">
          <Badge variant="secondary" className="mr-2 hidden md:inline-flex">
            New
          </Badge>
          We have launched AI-powered computing solutions to revolutionize your
          workflow!
          <a
            href="#"
            className="ml-0 inline-flex items-center text-sm font-medium text-primary hover:underline md:ml-2"
          >
            Learn more
            <ArrowRight className="ml-1 h-4 w-4 text-primary" />
          </a>
        </p>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Close banner</span>
      </Button>
    </div>
  );
}
