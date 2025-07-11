import { Check, Minus, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Pricing2 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <Badge>Pricing</Badge>
        <div className="flex flex-col gap-2">
          <h2 className="font-regular max-w-xl text-center text-3xl tracking-tighter md:text-5xl">
            Prices that make sense!
          </h2>
          <p className="max-w-xl text-center text-lg leading-relaxed tracking-tight text-muted-foreground">
            Managing a small business today is already tough.
          </p>
        </div>
        <div className="grid w-full grid-cols-3 divide-x pt-20 text-left lg:grid-cols-4">
          <div className="col-span-3 lg:col-span-1"></div>
          <div className="flex flex-col gap-2 px-3 py-1 md:px-6 md:py-4">
            <p className="text-2xl">Startup</p>
            <p className="text-sm text-muted-foreground">
              Our goal is to streamline SMB trade, making it easier and faster
              than ever for everyone and everywhere.
            </p>
            <p className="mt-8 flex flex-col gap-2 text-xl lg:flex-row lg:items-center">
              <span className="text-4xl">$40</span>
              <span className="text-sm text-muted-foreground"> / month</span>
            </p>
            <Button variant="outline" className="mt-8 gap-4">
              Try it <MoveRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-col gap-2 px-3 py-1 md:px-6 md:py-4">
            <p className="text-2xl">Growth</p>
            <p className="text-sm text-muted-foreground">
              Our goal is to streamline SMB trade, making it easier and faster
              than ever for everyone and everywhere.
            </p>
            <p className="mt-8 flex flex-col gap-2 text-xl lg:flex-row lg:items-center">
              <span className="text-4xl">$40</span>
              <span className="text-sm text-muted-foreground"> / month</span>
            </p>
            <Button className="mt-8 gap-4">
              Try it <MoveRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-col gap-2 px-3 py-1 md:px-6 md:py-4">
            <p className="text-2xl">Enterprise</p>
            <p className="text-sm text-muted-foreground">
              Our goal is to streamline SMB trade, making it easier and faster
              than ever for everyone and everywhere.
            </p>
            <p className="mt-8 flex flex-col gap-2 text-xl lg:flex-row lg:items-center">
              <span className="text-4xl">$40</span>
              <span className="text-sm text-muted-foreground"> / month</span>
            </p>
            <Button variant="outline" className="mt-8 gap-4">
              Contact us <PhoneCall className="h-4 w-4" />
            </Button>
          </div>
          <div className="col-span-3 px-3 py-4 lg:col-span-1 lg:px-6">
            <b>Features</b>
          </div>
          <div></div>
          <div></div>
          <div></div>
          {/* New Line */}
          <div className="col-span-3 px-3 py-4 lg:col-span-1 lg:px-6">SSO</div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Check className="h-4 w-4 text-primary" />
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Check className="h-4 w-4 text-primary" />
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Check className="h-4 w-4 text-primary" />
          </div>
          {/* New Line */}
          <div className="col-span-3 px-3 py-4 lg:col-span-1 lg:px-6">
            AI Assistant
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Minus className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Check className="h-4 w-4 text-primary" />
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Check className="h-4 w-4 text-primary" />
          </div>
          {/* New Line */}
          <div className="col-span-3 px-3 py-4 lg:col-span-1 lg:px-6">
            Version Control
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Minus className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Check className="h-4 w-4 text-primary" />
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Check className="h-4 w-4 text-primary" />
          </div>
          {/* New Line */}
          <div className="col-span-3 px-3 py-4 lg:col-span-1 lg:px-6">
            Members
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <p className="text-sm text-muted-foreground">5 members</p>
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <p className="text-sm text-muted-foreground">25 members</p>
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <p className="text-sm text-muted-foreground">100+ members</p>
          </div>
          {/* New Line */}
          <div className="col-span-3 px-3 py-4 lg:col-span-1 lg:px-6">
            Multiplayer Mode
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Minus className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Check className="h-4 w-4 text-primary" />
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Check className="h-4 w-4 text-primary" />
          </div>
          {/* New Line */}
          <div className="col-span-3 px-3 py-4 lg:col-span-1 lg:px-6">
            Orchestration
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Minus className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Check className="h-4 w-4 text-primary" />
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Check className="h-4 w-4 text-primary" />
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default Pricing2;
