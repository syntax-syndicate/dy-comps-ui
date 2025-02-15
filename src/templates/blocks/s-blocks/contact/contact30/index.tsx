import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact30() {
  return (
    <div className="container mx-auto py-12">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
          <p className="text-muted-foreground">
            Ready to discuss your needs? Click{" "}
            <a href="#" className="font-medium text-primary hover:underline">
              here
            </a>{" "}
            to schedule a convenient meeting with us. If you prefer, you can
            also email us directly at{" "}
            <a
              href="mailto:hello@searchplex.net"
              className="font-medium text-primary hover:underline"
            >
              hello@searchplex.net
            </a>
            ; or use the contact form. We look forward to connecting with you!
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Your email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Your email"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Your message</Label>
            <Textarea
              id="message"
              placeholder="Your message"
              className="min-h-[150px]"
            />
          </div>

          <Button type="submit" size="lg">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
