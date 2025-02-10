"use client";

import React, { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import { Apple, Eye, EyeOff } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

const carouselItems = [
  {
    image:
      "https://images.unsplash.com/photo-1725958019804-1f37470b03ec?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Capturing Moments,\nCreating Memories",
    alt: "Desert landscape",
  },
  {
    image:
      "https://images.unsplash.com/photo-1731082417879-710ff0c868ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Share Your Stories,\nInspire the World",
    alt: "Mountain view",
  },
  {
    image:
      "https://images.unsplash.com/photo-1727160930825-97245483a509?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Discover Beauty,\nEverywhere You Go",
    alt: "Ocean sunset",
  },
];

export default function LoginPage9() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      terms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      {/* Left Column - Carousel */}
      <div className="relative hidden bg-primary md:block">
        <Carousel className="h-full">
          <CarouselContent>
            {carouselItems.map((item, index) => (
              <CarouselItem
                key={index}
                className={`h-full ${index === activeSlide ? "block" : "hidden"}`}
              >
                <div className="relative h-full">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={1920}
                    height={1080}
                    className="h-full max-h-screen w-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-primary/50" />
                  <div className="absolute left-8 top-8">
                    <div className="text-2xl font-bold text-white">AMU</div>
                  </div>
                  <div className="absolute bottom-12 left-8 right-8">
                    <h1 className="whitespace-pre-line text-4xl font-semibold leading-tight text-white">
                      {item.title}
                    </h1>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute bottom-4 left-8 right-8">
          <div className="flex justify-center gap-2">
            {carouselItems.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className="h-1.5 w-12 rounded-full p-0"
                onClick={() => setActiveSlide(index)}
              >
                <div
                  className={`h-full w-full rounded-full transition-all ${
                    index === activeSlide
                      ? "bg-primary-foreground"
                      : "bg-primary-foreground/30"
                  }`}
                />
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column - Sign Up Form */}
      <div className="flex items-center justify-center bg-background px-8 py-12 md:px-12">
        <div className="w-full max-w-md">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-4xl font-semibold text-foreground">
              Create account
            </h2>
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
              asChild
            >
              <Link href="#">Back to website</Link>
            </Button>
          </div>

          <p className="mb-8 text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Log in
            </Link>
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="First name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Enter your password"
                          type={showPassword ? "text" : "password"}
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="size-4" />
                          ) : (
                            <Eye className="size-4" />
                          )}
                          <span className="sr-only">
                            {showPassword ? "Hide password" : "Show password"}
                          </span>
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="text-sm text-muted-foreground">
                      I agree to the{" "}
                      <Link href="#" className="text-primary hover:underline">
                        Terms & Conditions
                      </Link>
                    </div>
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Create account
              </Button>
            </form>
          </Form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or register with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <svg className="mr-2 size-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                  <path d="M1 1h22v22H1z" fill="none" />
                </svg>
                Google
              </Button>
              <Button variant="outline" className="w-full">
                <Apple className="mr-2 size-4" />
                Apple
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
