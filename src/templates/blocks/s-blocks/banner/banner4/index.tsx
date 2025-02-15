import Link from "next/link";
import Image from "next/image";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export default function AnnouncementBanner() {
  return (
    <Alert
      variant="default"
      className="rounded-none bg-primary text-primary-foreground"
    >
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <AlertTitle className="flex items-center gap-2 text-lg font-semibold">
            <Badge variant="secondary" className="text-secondary-foreground">
              New
            </Badge>
            <div className="flex items-center gap-2">
              <Rocket className="h-5 w-5" />{" "}
              {/* Lucide icon for AI computing */}
              AI-Powered Updates
            </div>
          </AlertTitle>
          <AlertDescription className="text-center sm:text-left">
            We&apos;ve enhanced our platform with cutting-edge AI computing
            features.
          </AlertDescription>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="AI Computing"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <Button
            asChild
            variant="secondary"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/features">Learn More</Link>
          </Button>
        </div>
      </div>
    </Alert>
  );
}
