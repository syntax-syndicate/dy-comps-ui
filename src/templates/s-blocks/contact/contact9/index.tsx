"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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
import { MessageSquare, Mail, Phone, MapPin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect, useState } from "react";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  countryCode: z.string(),
  phone: z.string().min(6, "Invalid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  services: z.array(z.string()).min(1, "Select at least one service"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact9() {
  const [isMounted, setIsMounted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setValue,
    watch,
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      countryCode: "US",
    },
  });

  const services = watch("services") || [];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onSubmit = async (data: FormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
  };

  if (!isMounted) return null;

  return (
    <div className="relative w-full overflow-hidden bg-background">
      {/* Grid background */}

      {/* Radial overlay */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,hsl(var(--accent)/0.1),transparent)]"
        aria-hidden="true"
      />
      <div className="container relative mx-auto py-24 md:py-32">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Contact our team
          </h1>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Got questions about our product or platform? We're here to help.
            <br className="hidden md:inline" />
            Reach out 24/7 and get started in under 5 minutes.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="bg-background/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input
                      id="firstName"
                      placeholder="First name"
                      {...register("firstName")}
                      error={errors.firstName?.message}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input
                      id="lastName"
                      placeholder="Last name"
                      {...register("lastName")}
                      error={errors.lastName?.message}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="you@company.com"
                    type="email"
                    {...register("email")}
                    error={errors.email?.message}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <div className="flex gap-2">
                    <Select
                      onValueChange={(value) => setValue("countryCode", value)}
                      defaultValue="US"
                    >
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="US">🇺🇸 +1</SelectItem>
                        <SelectItem value="UK">🇬🇧 +44</SelectItem>
                        <SelectItem value="CA">🇨🇦 +1</SelectItem>
                        <SelectItem value="AU">🇦🇺 +61</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      id="phone"
                      placeholder="(555) 000-0000"
                      type="tel"
                      {...register("phone")}
                      error={errors.phone?.message}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    className="min-h-[120px]"
                    id="message"
                    placeholder="How can we help you?"
                    {...register("message")}
                    error={errors.message?.message}
                  />
                </div>
                <div className="space-y-3">
                  <Label
                    className={cn(services.length === 0 && "text-destructive")}
                  >
                    Services needed{" "}
                    <span className="text-muted-foreground">
                      (select at least one)
                    </span>
                  </Label>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      { id: "website", label: "Website design" },
                      { id: "content", label: "Content creation" },
                      { id: "ux", label: "UX design" },
                      { id: "strategy", label: "Strategy & consulting" },
                      { id: "research", label: "User research" },
                      { id: "other", label: "Other" },
                    ].map((service) => (
                      <div
                        key={service.id}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={service.id}
                          checked={services.includes(service.id)}
                          onCheckedChange={(checked) => {
                            const newServices = checked
                              ? [...services, service.id]
                              : services.filter((id) => id !== service.id);
                            setValue("services", newServices);
                          }}
                        />
                        <Label htmlFor={service.id} className="font-normal">
                          {service.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                  {errors.services && (
                    <p className="text-sm text-destructive">
                      {errors.services.message}
                    </p>
                  )}
                </div>
                <Button
                  className="w-full gap-2"
                  size="lg"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting && (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  )}
                  {isSubmitting ? "Sending..." : "Send message"}
                </Button>
                {isSubmitSuccessful && (
                  <p className="text-center text-green-600">
                    Message sent successfully!
                  </p>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="bg-background/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="space-y-8">
                <div>
                  <h2 className="mb-4 text-lg font-semibold">Live Support</h2>
                  <p className="mb-4 text-muted-foreground">
                    Connect with our team in real-time
                  </p>
                  <div className="space-y-3">
                    <Button
                      className="w-full justify-start gap-2"
                      variant="outline"
                    >
                      <MessageSquare className="size-4" />
                      Start live chat
                      <span className="ml-auto text-sm text-muted-foreground">
                        Typically replies in 2 minutes
                      </span>
                    </Button>
                    <Button
                      className="w-full justify-start gap-2"
                      variant="outline"
                    >
                      <Mail className="size-4" />
                      Email support
                      <span className="ml-auto text-sm text-muted-foreground">
                        response@example.com
                      </span>
                    </Button>
                    <Button
                      className="w-full justify-start gap-2"
                      variant="outline"
                    >
                      <Twitter className="size-4" />
                      Message on X
                      <span className="ml-auto text-sm text-muted-foreground">
                        @support_handle
                      </span>
                    </Button>
                  </div>
                </div>
                <div>
                  <h2 className="mb-4 text-lg font-semibold">Phone Support</h2>
                  <p className="mb-4 text-muted-foreground">
                    Available Mon-Fri 8am-5pm (EST)
                  </p>
                  <Button
                    className="w-full justify-start gap-2"
                    variant="outline"
                  >
                    <Phone className="size-4" />
                    +1 (555) 000-0000
                    <span className="ml-auto text-sm text-muted-foreground">
                      Press 2 for sales
                    </span>
                  </Button>
                </div>
                <div>
                  <h2 className="mb-4 text-lg font-semibold">HQ Location</h2>
                  <p className="mb-4 text-muted-foreground">
                    Visit our Melbourne office
                  </p>
                  <Button
                    className="w-full justify-start gap-2 text-left"
                    variant="outline"
                  >
                    <MapPin className="size-4 shrink-0" />
                    <span className="truncate">
                      100 Smith Street, Collingwood VIC 3066
                    </span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
