"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
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
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  countryCode: z.string(),
  phone: z.string().min(6, "Invalid phone number"),
  teamSize: z.string().min(1, "Please select team size"),
  location: z.string().min(1, "Please select location"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  products: z.array(z.string()).min(1, "Select at least one product"),
});

type FormValues = z.infer<typeof formSchema>;

const countries = [
  { code: "AU", name: "Australia", flag: "🇦🇺", phoneCode: "+61" },
  { code: "US", name: "United States", flag: "🇺🇸", phoneCode: "+1" },
  { code: "UK", name: "United Kingdom", flag: "🇬🇧", phoneCode: "+44" },
];

const teamSizes = [
  "1-50 people",
  "51-100 people",
  "101-500 people",
  "500+ people",
];

const products = [
  "Untitled Mail",
  "Untitled Calendar",
  "Untitled Drive",
  "Untitled VPN",
  "Untitled Workspace",
  "Other",
];

export default function Contact12() {
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
      countryCode: "AU",
      location: "AU",
    },
  });

  const selectedCountry = watch("countryCode");
  const selectedProducts = watch("products") || [];

  const onSubmit = async (data: FormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
  };

  return (
    <div className="container mx-auto py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Contact & Support
          </h1>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Have questions about pricing, plans, or Untitled UI? Fill out the
            form
            <br className="hidden md:inline" />
            and our team will respond within 24 hours.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Contact our sales team</h2>
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
                  type="email"
                  placeholder="you@company.com"
                  {...register("email")}
                  error={errors.email?.message}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone number</Label>
                <div className="flex gap-2">
                  <Select
                    value={selectedCountry}
                    onValueChange={(value) => setValue("countryCode", value)}
                  >
                    <SelectTrigger className="w-[130px]">
                      <SelectValue>
                        {
                          countries.find((c) => c.code === selectedCountry)
                            ?.flag
                        }
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          {country.flag} {country.name} ({country.phoneCode})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    id="phone"
                    placeholder={`${countries.find((c) => c.code === selectedCountry)?.phoneCode} 400 000 000`}
                    type="tel"
                    {...register("phone")}
                    error={errors.phone?.message}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="teamSize">Team size</Label>
                <Select
                  onValueChange={(value) => setValue("teamSize", value)}
                  {...register("teamSize")}
                >
                  <SelectTrigger error={errors.teamSize?.message}>
                    <SelectValue placeholder="Select team size" />
                  </SelectTrigger>
                  <SelectContent>
                    {teamSizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.teamSize && (
                  <p className="text-sm text-destructive">
                    {errors.teamSize.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Select
                  onValueChange={(value) => setValue("location", value)}
                  {...register("location")}
                >
                  <SelectTrigger error={errors.location?.message}>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        {country.flag} {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.location && (
                  <p className="text-sm text-destructive">
                    {errors.location.message}
                  </p>
                )}
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
                  className={cn(
                    selectedProducts.length === 0 && "text-destructive",
                  )}
                >
                  Products of interest{" "}
                  <span className="text-muted-foreground">
                    (select at least one)
                  </span>
                </Label>
                <div className="grid gap-3 sm:grid-cols-2">
                  {products.map((product) => (
                    <div key={product} className="flex items-center space-x-2">
                      <Checkbox
                        id={product.toLowerCase().replace(" ", "-")}
                        checked={selectedProducts.includes(product)}
                        onCheckedChange={(checked) => {
                          const newProducts = checked
                            ? [...selectedProducts, product]
                            : selectedProducts.filter((p) => p !== product);
                          setValue("products", newProducts);
                        }}
                      />
                      <Label htmlFor={product.toLowerCase().replace(" ", "-")}>
                        {product}
                      </Label>
                    </div>
                  ))}
                </div>
                {errors.products && (
                  <p className="text-sm text-destructive">
                    {errors.products.message}
                  </p>
                )}
              </div>
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

          {/* Contact Info */}
          <div className="space-y-6 rounded-lg border bg-accent/30 p-6 backdrop-blur-sm">
            <div className="space-y-8">
              <div>
                <h2 className="mb-4 text-lg font-semibold">Chat to sales</h2>
                <p className="mb-3 text-muted-foreground">
                  Interested in switching? Speak to our friendly team.
                </p>
                <a
                  href="mailto:sales@untitledui.com"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <Mail className="size-4" />
                  sales@untitledui.com
                </a>
              </div>

              <div>
                <h2 className="mb-4 text-lg font-semibold">Email support</h2>
                <p className="mb-3 text-muted-foreground">
                  Email us and we&apos;ll get back to you within 24 hours.
                </p>
                <a
                  href="mailto:support@untitledui.com"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <Mail className="size-4" />
                  support@untitledui.com
                </a>
              </div>

              <div>
                <h2 className="mb-4 text-lg font-semibold">Live chat</h2>
                <p className="mb-3 text-muted-foreground">
                  Instant access to 24/7 support team.
                </p>
                <Button variant="outline" className="w-full gap-2">
                  <MessageSquare className="size-4" />
                  Start live chat
                  <Badge className="ml-2 bg-green-500/15 text-green-600">
                    Online
                  </Badge>
                  <span className="ml-auto text-sm text-muted-foreground">
                    Avg. response: 2 min
                  </span>
                </Button>
              </div>

              <div>
                <h2 className="mb-4 text-lg font-semibold">Call us</h2>
                <div className="mb-3 flex items-center gap-2 text-muted-foreground">
                  <Clock className="size-4" />
                  Mon - Fri, 9:00 AM - 5:00 PM (UTC/GMT +9:00)
                </div>
                <div className="space-y-2">
                  <a
                    href="tel:1300123642"
                    className="block text-primary hover:underline"
                  >
                    1300 123 642
                  </a>
                  <a
                    href="tel:+61400020024"
                    className="block text-primary hover:underline"
                  >
                    +61 400 020 024
                  </a>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h2 className="mb-3 text-lg font-semibold">Melbourne</h2>
                  <p className="mb-2 text-muted-foreground">
                    Visit our office Mon - Fri, 9:00 AM - 5:00 PM.
                  </p>
                  <a
                    href="https://maps.app.goo.gl/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    <MapPin className="size-4" />
                    10 Gertude Street, Fitzroy VIC 3065
                  </a>
                </div>

                <div>
                  <h2 className="mb-3 text-lg font-semibold">Sydney</h2>
                  <p className="mb-2 text-muted-foreground">
                    Visit our office Mon - Fri, 9:00 AM - 5:00 PM.
                  </p>
                  <a
                    href="https://maps.app.goo.gl/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    <MapPin className="size-4" />
                    40 Bridge Street, Sydney NSW 2000
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
