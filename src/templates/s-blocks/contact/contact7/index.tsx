import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We&apos;re here to help and answer any question you might have.
                We look forward to hearing from you.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="size-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Our Location</h3>
                  <p className="text-sm text-muted-foreground">
                    123 Business Ave, Suite 100, City, State 12345
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="size-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-sm text-muted-foreground">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="size-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    contact@example.com
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="size-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Business Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Monday - Friday: 9am - 5pm
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Talk to an Expert
              </CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company name</Label>
                  <Input id="company" placeholder="Acme Inc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="size">Company size</Label>
                  <Select>
                    <SelectTrigger id="size">
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201-500">201-500 employees</SelectItem>
                      <SelectItem value="501+">501+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-4">
              <p className="text-sm text-muted-foreground">
                We typically respond within 2 business days
              </p>
              <Button className="w-full">Contact Sales Now</Button>
              <div className="flex w-full justify-center space-x-4">
                <Button variant="outline" size="icon">
                  <Phone className="size-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Mail className="size-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <MessageCircle className="size-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
