"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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

export default function Contact6() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-background py-32">
      <div className="container mx-auto max-w-6xl">
        <h1 className="mb-4 text-center text-4xl font-bold text-foreground">
          Contact Us
        </h1>
        <p className="mx-auto mb-8 max-w-4xl text-center text-xl text-muted-foreground">
          Have questions? We&apos;d love to hear from you. Come find out more
          about our business. Have questions? We&apos;d love to hear from you.
        </p>
        <Card className="grid gap-12 border p-8 shadow-sm md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="size-6 text-primary" />
              <span className="text-foreground">contact@example.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="size-6 text-primary" />
              <span className="text-foreground">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="size-6 text-primary" />
              <span className="text-foreground">
                123 Business Ave, San Francisco, CA 94107
              </span>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="size-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="size-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="size-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="size-6" />
              </a>
            </div>

            {/* Map Section */}
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1510579767785"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your name"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={message}
                className="mt-2 h-48"
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Your message here..."
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
