"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

export default function Contact5() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Reset form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
          Have questions? We'd love to hear from you. Come find out more about
          our business.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Form */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Send us a message</CardTitle>
            <CardDescription>
              We'll get back to you within 24 business hours
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="How can we help?"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Write your message here..."
                  className="min-h-[150px] resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                className="w-full gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting && (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </CardFooter>
          </form>
        </Card>

        {/* Contact Information */}
        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
              <CardDescription>
                Reach out through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 size-5 text-primary" />
                <div>
                  <p className="font-medium">Our Office</p>
                  <p className="text-muted-foreground">
                    123 Business St, Suite 100
                    <br />
                    City, State 12345
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="size-5 text-primary" />
                <div>
                  <a
                    href="tel:+11234567890"
                    className="font-medium hover:underline hover:opacity-80"
                  >
                    (123) 456-7890
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Mon-Fri, 9am-5pm EST
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="size-5 text-primary" />
                <a
                  href="mailto:contact@example.com"
                  className="font-medium hover:underline hover:opacity-80"
                >
                  contact@example.com
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Map */}
          <Card className="overflow-hidden shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Our Location</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative aspect-video">
                {!isMapLoaded && (
                  <Skeleton className="absolute inset-0 rounded-none" />
                )}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1510579767785"
                  width="100%"
                  height="100%"
                  className={cn(
                    "absolute inset-0 transition-opacity duration-300",
                    isMapLoaded ? "opacity-100" : "opacity-0",
                  )}
                  onLoad={() => setIsMapLoaded(true)}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
