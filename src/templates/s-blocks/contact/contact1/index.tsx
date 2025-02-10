"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, ArrowRight, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import Image from "next/image";

// Define the type for the form data
interface FormData {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  country: string;
  companySize: string;
  referral: string;
}

export default function Contact1() {
  const form = useForm<FormData>({
    defaultValues: {
      fullName: "",
      company: "",
      phone: "",
      email: "",
      country: "",
      companySize: "",
      referral: "",
    },
  });

  // Apply the FormData type to the onSubmit function
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <section className="relative py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,hsl(var(--primary)/20%),transparent_80%)]"></div>
      <div className="container grid w-full grid-cols-1 gap-x-32 overflow-hidden lg:grid-cols-2">
        <div className="w-full pb-10 md:space-y-10 md:pb-0">
          <div className="space-y-4 md:max-w-[40rem]">
            <h1 className="bg-clip-text text-4xl font-bold lg:text-5xl">
              Transform Your Workflow
            </h1>
            <div className="text-muted-foreground md:text-base lg:text-lg lg:leading-7">
              Experience a personalized demonstration of our cutting-edge
              platform. Discover how we can streamline your processes, boost
              productivity, and drive innovation in your business.
            </div>
          </div>
          <div className="hidden md:block">
            <div className="space-y-16 pb-20 lg:pb-0">
              <div className="space-y-6">
                <div className="mt-16 flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Star className="size-5" />
                    </div>
                    <div className="text-lg font-semibold">
                      4.9/5 Average Rating
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="size-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Based on 1000+ customer reviews
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-lg font-semibold">
                    Why choose our solution?
                  </p>
                  <div className="flex items-center space-x-2.5">
                    <Check className="size-5 shrink-0 text-primary" />
                    <p className="text-sm">Boost productivity by up to 40%</p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Check className="size-5 shrink-0 text-primary" />
                    <p className="text-sm">
                      Seamless integration with your existing tools
                    </p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Check className="size-5 shrink-0 text-primary" />
                    <p className="text-sm">24/7 expert support and guidance</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-lg font-semibold">
                  Trusted by industry leaders:
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <Image
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    alt="TechCorp logo"
                    width={120}
                    height={40}
                    className="h-10 opacity-70 transition-opacity hover:opacity-100"
                  />
                  <Image
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    alt="InnovateCo logo"
                    width={120}
                    height={40}
                    className="h-10 opacity-70 transition-opacity hover:opacity-100"
                  />
                  <Image
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    alt="FutureTech logo"
                    width={120}
                    height={40}
                    className="h-10 opacity-70 transition-opacity hover:opacity-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="x flex w-full justify-center lg:mt-2.5">
          <Card className="relative flex w-full min-w-80 max-w-[30rem] flex-col items-center overflow-visible border-primary/10 shadow-lg md:min-w-96">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-8"
              >
                <div className="space-y-6 rounded-lg bg-background p-6">
                  <h2 className="mb-6 text-center text-2xl font-semibold">
                    Schedule Your Demo
                  </h2>
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Company" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone number</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (555) 000-0000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="you@yourcompany.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your country" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="au">Australia</SelectItem>
                            <SelectItem value="de">Germany</SelectItem>
                            <SelectItem value="fr">France</SelectItem>
                            <SelectItem value="jp">Japan</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="companySize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company size</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select company size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1-10">1-10 employees</SelectItem>
                            <SelectItem value="11-50">
                              11-50 employees
                            </SelectItem>
                            <SelectItem value="51-200">
                              51-200 employees
                            </SelectItem>
                            <SelectItem value="201-500">
                              201-500 employees
                            </SelectItem>
                            <SelectItem value="501-1000">
                              501-1000 employees
                            </SelectItem>
                            <SelectItem value="1000+">
                              1000+ employees
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="referral"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          How did you hear about us?{" "}
                          <span className="text-muted-foreground">
                            (Optional)
                          </span>
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select source" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="search">
                              Search Engine
                            </SelectItem>
                            <SelectItem value="social">Social Media</SelectItem>
                            <SelectItem value="friend">
                              Friend/Colleague
                            </SelectItem>
                            <SelectItem value="conference">
                              Conference/Event
                            </SelectItem>
                            <SelectItem value="advertisement">
                              Advertisement
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex w-full flex-col justify-end space-y-3 pt-2">
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      Book Your Demo <ArrowRight className="ml-2 size-4" />
                    </Button>
                    <div className="text-xs text-muted-foreground">
                      By submitting this form, you agree to our{" "}
                      <a href="#" className="underline">
                        terms of service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="underline">
                        privacy policy
                      </a>
                      .
                    </div>
                  </div>
                </div>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </section>
  );
}
