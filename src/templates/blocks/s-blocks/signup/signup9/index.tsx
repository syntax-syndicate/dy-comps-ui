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
import { Apple } from "lucide-react";

export default function SignUpWithIllustration() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-20 lg:py-16">
        <Card className="mx-auto w-full p-6 sm:p-8 lg:col-span-6">
          <CardContent className="space-y-4">
            <Link
              href="#"
              className="mb-4 inline-flex items-center text-xl font-semibold text-foreground"
            >
              <Image
                className="mr-2 h-8 w-8"
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="logo"
                width={32}
                height={32}
              />
              Aetheria AI
            </Link>
            <h1 className="mb-2 text-2xl font-bold leading-tight tracking-tight text-foreground">
              Join the Aetheria Community
            </h1>
            <p className="text-sm font-light text-muted-foreground">
              Unlock the power of AI. Already have an account?{" "}
              <Link
                href="#"
                className="font-medium text-primary hover:underline"
              >
                Log in here
              </Link>
              .
            </p>
            <form className="mt-4 space-y-6 sm:mt-6" action="#">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Your email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="email@domain.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="full-name">Full Name</Label>
                  <Input
                    type="text"
                    id="full-name"
                    placeholder="e.g., Alex Johnson"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select>
                    <SelectTrigger id="industry">
                      <SelectValue placeholder="Select an industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="research">Research</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="********"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-0.5 w-full bg-border"></div>
                <div className="px-5 text-center text-muted-foreground">or</div>
                <div className="h-0.5 w-full bg-border"></div>
              </div>
              <div className="space-y-3">
                <Button variant="outline" className="w-full">
                  <Image
                    className="mr-2 h-5 w-5"
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    alt="google icon"
                    width={20}
                    height={20}
                  />
                  Sign up with Google
                </Button>
                <Button variant="outline" className="w-full">
                  <Apple className="mr-2 h-5 w-5" />
                  Sign up with Apple
                </Button>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Checkbox id="terms" />
                  <div className="ml-3 text-sm">
                    <Label
                      htmlFor="terms"
                      className="font-light text-muted-foreground"
                    >
                      By signing up, you are creating an Aetheria AI account,
                      and you agree to Aetheria AI's{" "}
                      <Link
                        href="#"
                        className="font-medium text-primary hover:underline"
                      >
                        Terms of Use
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="#"
                        className="font-medium text-primary hover:underline"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </Label>
                  </div>
                </div>
                <div className="flex items-start">
                  <Checkbox id="newsletter" />
                  <div className="ml-3 text-sm">
                    <Label
                      htmlFor="newsletter"
                      className="font-light text-muted-foreground"
                    >
                      Email me about product updates and resources.
                    </Label>
                  </div>
                </div>
              </div>
              <Button type="submit" className="w-full">
                Create an account
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="mr-auto h-full place-self-center border lg:col-span-6">
          <Image
            className="mx-auto hidden h-full w-full rounded-lg object-cover lg:flex"
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="illustration"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
