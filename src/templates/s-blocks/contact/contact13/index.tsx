"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(6, "Invalid phone number"),
  company: z.string().min(2, "Company name required"),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  project: z
    .string()
    .min(10, "Project description must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const services = [
  { value: "web", label: "Web Development" },
  { value: "design", label: "Design" },
  { value: "marketing", label: "Marketing" },
  { value: "consulting", label: "Consulting" },
];

const budgets = [
  { value: "5k", label: "$5,000 - $10,000" },
  { value: "10k", label: "$10,000 - $25,000" },
  { value: "25k", label: "$25,000 - $50,000" },
  { value: "50k", label: "$50,000+" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Contact13() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setValue,
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[2fr,1fr]">
          {/* Contact Form */}
          <div>
            <div className="mb-12">
              <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
                Let&apos;s work
                <br />
                together!
              </h1>
              <p className="text-muted-foreground md:text-lg">
                Let us help you become even greater at what you do.
                <br className="hidden md:inline" />
                Fill out the form and we&apos;ll respond within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-6">
                {/* Name Field */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">01</span>
                    <Label htmlFor="name">What&apos;s your name?</Label>
                  </div>
                  <Input
                    id="name"
                    placeholder="Type your full name"
                    className={cn(
                      "h-12 rounded-lg border-b border-input px-3 transition-colors",
                      errors.name && "border-destructive",
                    )}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">02</span>
                    <Label htmlFor="email">
                      What&apos;s your email address?
                    </Label>
                  </div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    className={cn(
                      "h-12 rounded-lg border-b border-input px-3 transition-colors",
                      errors.email && "border-destructive",
                    )}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">03</span>
                    <Label htmlFor="phone">
                      What&apos;s your phone number?
                    </Label>
                  </div>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 2222 333344"
                    className={cn(
                      "h-12 rounded-lg border-b border-input px-3 transition-colors",
                      errors.phone && "border-destructive",
                    )}
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Company Field */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">04</span>
                    <Label htmlFor="company">Company/Organization name</Label>
                  </div>
                  <Input
                    id="company"
                    placeholder="Type your company name"
                    className={cn(
                      "h-12 rounded-lg border-b border-input px-3 transition-colors",
                      errors.company && "border-destructive",
                    )}
                    {...register("company")}
                  />
                  {errors.company && (
                    <p className="text-sm text-destructive">
                      {errors.company.message}
                    </p>
                  )}
                </div>

                {/* Services Dropdown */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">05</span>
                    <Label>What services are you looking for?</Label>
                  </div>
                  <Select onValueChange={(value) => setValue("service", value)}>
                    <SelectTrigger
                      className={cn(
                        "h-12 rounded-lg border-b border-input px-3",
                        errors.service && "border-destructive",
                      )}
                    >
                      <SelectValue placeholder="Choose from a list here" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p className="text-sm text-destructive">
                      {errors.service.message}
                    </p>
                  )}
                </div>

                {/* Budget Dropdown */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">06</span>
                    <Label>Project budget range</Label>
                  </div>
                  <Select onValueChange={(value) => setValue("budget", value)}>
                    <SelectTrigger
                      className={cn(
                        "h-12 rounded-lg border-b border-input px-3",
                        errors.budget && "border-destructive",
                      )}
                    >
                      <SelectValue placeholder="Choose from a list here" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgets.map((budget) => (
                        <SelectItem key={budget.value} value={budget.value}>
                          {budget.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.budget && (
                    <p className="text-sm text-destructive">
                      {errors.budget.message}
                    </p>
                  )}
                </div>

                {/* Project Description */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">07</span>
                    <Label htmlFor="project">Tell us about your project</Label>
                  </div>
                  <Textarea
                    id="project"
                    placeholder="Please type your project description"
                    className={cn(
                      "min-h-[100px] rounded-lg border-b border-input px-3 transition-colors",
                      errors.project && "border-destructive",
                    )}
                    {...register("project")}
                  />
                  {errors.project && (
                    <p className="text-sm text-destructive">
                      {errors.project.message}
                    </p>
                  )}
                </div>
              </div>

              <Button
                className="group gap-2 px-6"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                ) : (
                  <>
                    Send message
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>

              {isSubmitSuccessful && (
                <p className="text-green-600">Message sent successfully!</p>
              )}
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-sm font-semibold text-muted-foreground">
                CALL US
              </h2>
              <div className="space-y-2">
                <a
                  href="tel:+112158973027"
                  className="block hover:text-primary"
                >
                  +11 2158 973027
                </a>
                <a
                  href="tel:+114545996738"
                  className="block hover:text-primary"
                >
                  +11 4545 996738
                </a>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-sm font-semibold text-muted-foreground">
                ADDRESS
              </h2>
              <a
                href="https://maps.google.com/?q=2154 Glen Falls Road, Plymouth Meeting, Pennsylvania"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                2154 Glen Falls Road
                <br />
                Plymouth Meeting,
                <br />
                Pennsylvania(PA), 19462
              </a>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={link.label}
                >
                  <link.icon className="size-5 transition-transform hover:scale-110" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
