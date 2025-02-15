import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Apple, LogIn } from "lucide-react";

export default function SignUpSplitLayout() {
  return (
    <section className="bg-background">
      <div className="grid lg:h-screen lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-16 sm:px-0 lg:py-0">
          <form
            className="max-w-md space-y-4 md:space-y-6 xl:max-w-xl"
            action="#"
          >
            <h2 className="text-xl font-bold text-foreground">
              Embark on Your AI Journey
            </h2>
            <div className="items-center space-x-0 space-y-3 sm:flex sm:space-x-4 sm:space-y-0">
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
            <div className="flex items-center">
              <div className="h-0.5 w-full bg-border"></div>
              <div className="px-5 text-center text-muted-foreground">or</div>
              <div className="h-0.5 w-full bg-border"></div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="full-name">What's your name?</Label>
              <Input
                type="text"
                id="full-name"
                placeholder="e.g., Anya Sharma"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Your email address</Label>
              <Input
                type="email"
                id="email"
                placeholder="email@aetheria.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Create a password</Label>
              <Input
                type="password"
                id="password"
                placeholder="********"
                required
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <Checkbox id="terms" />
                <Label
                  htmlFor="terms"
                  className="ml-3 text-sm font-light text-muted-foreground"
                >
                  By signing up, you're creating an Aetheria AI account,
                  agreeing to our{" "}
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
              <div className="flex items-start">
                <Checkbox id="newsletter" />
                <Label
                  htmlFor="newsletter"
                  className="ml-3 text-sm font-light text-muted-foreground"
                >
                  Email me about product updates and resources.
                </Label>
              </div>
            </div>
            <Button type="submit" className="w-full">
              Create an account
            </Button>
            <p className="text-sm font-light text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="#"
                className="font-medium text-primary hover:underline"
              >
                Log in here
              </Link>
            </p>
          </form>
        </div>
        <div className="flex items-center justify-center bg-primary px-4 py-6 sm:px-0 lg:py-0">
          <div className="max-w-md xl:max-w-xl">
            <Link
              href="#"
              className="mb-4 flex items-center text-2xl font-semibold text-white"
            >
              Aetheria AI
            </Link>
            <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white xl:text-5xl">
              Unleash Your Potential with AI.
            </h1>
            <p className="text-primary-200 mb-4 font-light lg:mb-8">
              Join a community of innovators leveraging AI to solve real-world
              problems. Start your journey today with Aetheria AI.
            </p>
            <div className="divide-primary-500 flex items-center divide-x">
              <div className="flex -space-x-4 pr-3 sm:pr-5">
                <Image
                  className="h-10 w-10 rounded-full border-2 border-white"
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="user avatar"
                  width={40}
                  height={40}
                />
                <Image
                  className="h-10 w-10 rounded-full border-2 border-white"
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="user avatar"
                  width={40}
                  height={40}
                />
                <Image
                  className="h-10 w-10 rounded-full border-2 border-white"
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="user avatar"
                  width={40}
                  height={40}
                />
                <Image
                  className="h-10 w-10 rounded-full border-2 border-white"
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="user avatar"
                  width={40}
                  height={40}
                />
              </div>
              <Link
                href="#"
                className="pl-3 text-white dark:text-white sm:pl-5"
              >
                <span className="text-primary-200 text-sm">
                  Over <span className="font-medium text-white">100k</span>{" "}
                  Satisfied Users
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
