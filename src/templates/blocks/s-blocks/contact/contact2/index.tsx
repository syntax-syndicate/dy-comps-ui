"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Mail,
  Phone,
  Send,
  Clock,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Contact2() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (Math.random() > 0.7) throw new Error("Random error");
      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Get in Touch
              </h1>
              <p className="max-w-[600px] md:text-xl">
                We&apos;re here to help and answer any question you might have.
                We look forward to hearing from you.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <div className="flex items-center gap-2">
                  <Phone className="size-5 text-primary" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    (123) 456-7890
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="size-5 text-primary" />
                  <a
                    href="mailto:contact@example.com"
                    className="text-sm text-primary hover:underline"
                  >
                    contact@example.com
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Office Information</h2>
              <div className="flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  123 Business Ave, Suite 100, City, State 12345
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-5 text-primary" />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Monday - Friday: 9:00 AM - 5:00 PM
                </span>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger>What services do you offer?</AccordionTrigger>
                <AccordionContent>
                  We offer a wide range of services including web development,
                  mobile app development, UI/UX design, and digital marketing
                  solutions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger>
                  How long does it take to get a response?
                </AccordionTrigger>
                <AccordionContent>
                  We strive to respond to all inquiries within 24-48 business
                  hours.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger>Do you offer consultations?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer free initial consultations to discuss your
                  project needs and how we can help.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="flex flex-col gap-4 rounded-lg border bg-card p-6 shadow-lg md:p-8">
            <h2 className="mb-4 text-2xl font-bold">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Enter the subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button className="w-full" type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 size-4" />
                  </>
                )}
              </Button>
            </form>
            {submitStatus === "success" && (
              <p className="text-center text-green-600 dark:text-green-400">
                Message sent successfully!
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-center text-red-600 dark:text-red-400">
                An error occurred. Please try again later.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
