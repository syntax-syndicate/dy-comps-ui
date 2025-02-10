import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero3 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div>
            <Badge variant="outline">We&apos;re live!</Badge>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-regular max-w-lg text-left text-5xl tracking-tighter md:text-7xl">
              This is the start of something!
            </h1>
            <p className="max-w-md text-left text-xl leading-relaxed tracking-tight text-muted-foreground">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button size="lg" className="gap-4" variant="outline">
              Jump on a call <PhoneCall className="h-4 w-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Sign up here <MoveRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="aspect-square rounded-md bg-muted"></div>
      </div>
    </div>
  </div>
);


export default Hero3;
