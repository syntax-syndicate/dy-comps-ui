import { Globe, UserRound } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Signup1 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-4">
          <img
            src="/logos/shadcn-ui.svg"
            alt="logo"
            className="h-8"
          />
          <Card className="mx-auto w-full max-w-md">
            <CardHeader className="items-center">
              <UserRound className="bg-accent text-muted-foreground size-10 rounded-full p-2.5" />
              <CardTitle className="text-xl">Sign Up</CardTitle>
              <CardDescription>
                Enter your information to create an account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Button variant="outline" className="w-full">
                  <Globe className="mr-2 size-4" />
                  Sign up with Google
                </Button>
                <div className="flex items-center gap-4">
                  <span className="bg-input h-px w-full"></span>
                  <span className="text-muted-foreground text-xs">OR</span>
                  <span className="bg-input h-px w-full"></span>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Create an account
                </Button>
              </div>
              <div className="text-muted-foreground mt-4 text-sm">
                By continuing, you&apos;re agreeing to our
                <a href="#" className="hover:text-primary ml-1 underline">
                  Terms and Privacy Policy.
                </a>
              </div>
            </CardContent>
          </Card>
          <div className="mx-auto flex gap-1 text-sm">
            <p>Already have an account?</p>
            <a href="#" className="underline">
              Log in
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup1
