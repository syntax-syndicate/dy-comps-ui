import Link from "next/link";
import { Facebook, Instagram, Twitter, Github, Youtube } from "lucide-react";

export default function Footer10() {
  return (
    <footer className="border border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-4 sm:flex-row md:h-14 md:py-0">
        <p className="text-sm text-muted-foreground">
          © 2024 Your Company, Inc. All rights reserved.
        </p>
        <nav className="flex items-center gap-4">
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Facebook className="size-4" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Instagram className="size-4" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Twitter className="size-4" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="size-4" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Youtube className="size-4" />
            <span className="sr-only">YouTube</span>
          </Link>
        </nav>
      </div>
    </footer>
  );
}
