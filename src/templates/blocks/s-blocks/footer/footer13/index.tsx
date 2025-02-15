import { Button } from "@/components/ui/button";

export default function Footer13() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Button
            variant="link"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <div className="size-6 rounded-full bg-primary text-primary-foreground" />
            DY Comps
          </Button>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            Open-source library of over 850+ web components and interactive
            elements built for better web.
          </p>
        </div>
        <nav className="flex flex-col items-center gap-4 md:ml-auto md:flex-row md:gap-6">
          <Button variant="link" className="text-sm font-medium">
            About
          </Button>
          <Button variant="link" className="text-sm font-medium">
            Premium
          </Button>
          <Button variant="link" className="text-sm font-medium">
            Campaigns
          </Button>
          <Button variant="link" className="text-sm font-medium">
            Blog
          </Button>
          <Button variant="link" className="text-sm font-medium">
            Affiliate Program
          </Button>
          <Button variant="link" className="text-sm font-medium">
            FAQs
          </Button>
          <Button variant="link" className="text-sm font-medium">
            Contact
          </Button>
        </nav>
      </div>
      <div className="border-t">
        <div className="container py-4">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dy Comps. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
