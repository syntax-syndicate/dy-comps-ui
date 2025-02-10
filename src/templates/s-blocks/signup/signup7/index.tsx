import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function SignUpForm() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center">
          <Link
            href="#"
            className="mb-6 flex items-center text-2xl font-semibold text-foreground"
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
          <Card className="w-full sm:max-w-md">
            <CardHeader>
              <CardTitle className="text-xl font-bold leading-tight tracking-tight text-foreground md:text-2xl">
                Create an account
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4 md:space-y-6" action="#">
                <div className="space-y-2">
                  <Label htmlFor="email">Your email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm password</Label>
                  <Input
                    type="password"
                    id="confirm-password"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div className="flex items-start">
                  <Checkbox id="terms" />
                  <Label
                    htmlFor="terms"
                    className="ml-2 text-sm font-light text-muted-foreground"
                  >
                    I accept the{" "}
                    <Link
                      href="#"
                      className="font-medium text-primary hover:underline"
                    >
                      Terms and Conditions
                    </Link>
                  </Label>
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
                    Login here
                  </Link>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
