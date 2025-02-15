import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone } from "lucide-react";

export default function Footer16() {
  return (
    <footer className="w-full bg-background text-foreground">
      <div className="container mx-auto py-12">
        {/* Location Grid */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase text-muted-foreground">
              New York
            </h3>
            <div className="space-y-2 text-sm">
              <p>Huntersville,</p>
              <p>957 Hill Hills Suite 491, United States</p>
              <div className="flex items-center gap-2">
                <Phone className="size-4 text-muted-foreground" />
                <span>Office: +12(3) 456 7890 1234</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4 text-muted-foreground" />
                <span>Support: company@name.com</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase text-muted-foreground">
              Rome
            </h3>
            <div className="space-y-2 text-sm">
              <p>Piazza di Spagna,</p>
              <p>00187 Roma RM, Italy</p>
              <div className="flex items-center gap-2">
                <Phone className="size-4 text-muted-foreground" />
                <span>Office: +12(3) 456 7890 1234</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4 text-muted-foreground" />
                <span>Support: company@name.it</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase text-muted-foreground">
              London
            </h3>
            <div className="space-y-2 text-sm">
              <p>Fulham Rd,</p>
              <p>London SW6 1HS, United Kingdom</p>
              <div className="flex items-center gap-2">
                <Phone className="size-4 text-muted-foreground" />
                <span>Office: +12(3) 456 7890 1234</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4 text-muted-foreground" />
                <span>Support: company@name.co.uk</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mb-12">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <p className="text-sm text-muted-foreground">
              Sign up to our newsletter
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-muted"
                aria-label="Email for newsletter"
              />
              <Button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between space-y-4 border-t pt-8 md:flex-row md:space-y-0">
          <div className="flex items-center gap-2">
            <div className="size-6 rounded-full bg-primary" />
            <span className="text-xl font-semibold">DY Comps</span>
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Dy Comps. All Rights Reserved.
            </span>
          </div>
          <Button variant="ghost" className="text-sm">
            🇺🇸 English (US)
          </Button>
        </div>
      </div>
    </footer>
  );
}
