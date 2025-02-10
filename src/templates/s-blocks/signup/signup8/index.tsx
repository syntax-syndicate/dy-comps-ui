"use client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Apple } from "lucide-react";

export default function SignUpWithFeatures() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:grid lg:grid-cols-12 lg:gap-20 lg:py-16">
        <div className="mr-auto hidden flex-col justify-between lg:col-span-5 lg:flex xl:col-span-6 xl:mb-0">
          <div>
            <Link
              href="#"
              className="mb-6 inline-flex items-center text-2xl font-semibold text-foreground lg:mb-10"
            >
              <Image
                className="mr-2 h-8 w-8"
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="logo"
                width={32}
                height={32}
              />
              DY-Comps
            </Link>
            <div className="flex">
              <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="mb-2 text-xl font-bold leading-none text-foreground">
                  Get started quickly
                </h3>
                <p className="mb-2 font-light text-muted-foreground">
                  Accelerate your workflow with our developer-friendly platform.
                </p>
              </div>
            </div>
            <div className="flex pt-8">
              <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="mb-2 text-xl font-bold leading-none text-foreground">
                  Enterprise-grade security
                </h3>
                <p className="mb-2 font-light text-muted-foreground">
                  Protect your data with industry-leading security standards.
                </p>
              </div>
            </div>
            <div className="flex pt-8">
              <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="mb-2 text-xl font-bold leading-none text-foreground">
                  Trusted by industry leaders
                </h3>
                <p className="mb-2 font-light text-muted-foreground">
                  Join thousands of businesses powered by DY-Comps&apos;s solutions.
                </p>
              </div>
            </div>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground hover:underline"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mb-6 text-center lg:hidden">
          <Link
            href="#"
            className="inline-flex items-center text-2xl font-semibold text-foreground lg:hidden"
          >
            <Image
              className="mr-2 h-8 w-8"
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="logo"
              width={32}
              height={32}
            />
            DY-Comps
          </Link>
        </div>
        <Card className="mx-auto w-full lg:col-span-7 xl:col-span-6">
          <CardContent className="space-y-4 p-6 sm:p-8 lg:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-foreground sm:text-2xl">
              Create Your DY-Comps Account
            </h1>
            <div className="items-center space-y-3 sm:flex sm:space-x-4 sm:space-y-0">
              <Button variant="outline" className="w-full">
                <svg viewBox="0 0 24 24" className="mr-2 h-5 w-5">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                  <path fill="none" d="M1 1h22v22H1z" />
                </svg>
                Continue with Google
              </Button>
              <Button variant="outline" className="w-full">
                <Apple className="mr-2 h-5 w-5" />
                Continue with Apple
              </Button>
            </div>
            <div className="flex items-center">
              <div className="h-0.5 w-full bg-border"></div>
              <div className="px-5 text-center text-muted-foreground">or</div>
              <div className="h-0.5 w-full bg-border"></div>
            </div>
            <form className="space-y-4 lg:space-y-6" action="#">
              <div className="space-y-2">
                <Label htmlFor="email">Work email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="countries">Country</Label>
                <Select>
                  <SelectTrigger id="countries">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="US">United States</SelectItem>
                    <SelectItem value="CA">Canada</SelectItem>
                    <SelectItem value="FR">France</SelectItem>
                    <SelectItem value="DE">Germany</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Create password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="flex items-start">
                <Checkbox id="terms" />
                <div className="ml-3 text-sm">
                  <Label
                    htmlFor="terms"
                    className="font-light text-muted-foreground"
                  >
                    I agree to DY-Comps&apos;s{" "}
                    <Link
                      href="#"
                      className="font-medium text-primary hover:underline"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="#"
                      className="font-medium text-primary hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
              </div>
              <Button type="submit" className="w-full">
                Get Started
              </Button>
              <p className="text-sm font-light text-muted-foreground">
                Already registered?{" "}
                <Link
                  href="#"
                  className="font-medium text-primary hover:underline"
                >
                  Sign in here
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
