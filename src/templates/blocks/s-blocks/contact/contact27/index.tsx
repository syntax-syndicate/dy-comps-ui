import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Mail, Phone } from "lucide-react";

export default function Contact27() {
  return (
    <section className="bg-accent py-16 sm:py-24">
      <div className="container mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to take your business to the next level?
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Get in touch with our expert team today. We&apos;re here to help
              you achieve your goals and drive your success.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex items-center">
                <Mail className="mr-2 size-5 text-primary" />
                <a
                  href="mailto:contact@example.com"
                  className="text-primary hover:underline"
                >
                  contact@example.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 size-5 text-primary" />
                <a
                  href="tel:+1234567890"
                  className="text-primary hover:underline"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-background p-6 shadow-lg sm:p-8">
            <h3 className="mb-6 text-2xl font-semibold">Contact Us</h3>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="How can we help you?"
                />
              </div>
              <Button className="w-full" size="lg">
                Send Message
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
