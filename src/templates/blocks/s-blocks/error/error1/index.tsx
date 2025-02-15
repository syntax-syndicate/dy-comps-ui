import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center py-16">
      <Card className="container mx-auto">
        <CardContent className="flex flex-col items-center justify-center gap-16 px-6 py-28 md:px-24 md:py-20 lg:flex-row lg:gap-28 lg:py-32">
          <div className="w-full rounded-lg bg-accent p-4 lg:w-1/2">
            <Image
              className="hidden lg:block"
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="404 illustration"
              width={500}
              height={500}
            />
          </div>
          <div className="w-full space-y-4 lg:w-1/2">
            <h1 className="text-3xl font-extrabold lg:text-4xl">
              Looks like you&apos;ve found the doorway to the great nothing
            </h1>
            <p className="text-base text-muted-foreground">
              The content you&apos;re looking for doesn&apos;t exist. Either it
              was removed, or you mistyped the link.
            </p>
            <p className="text-base text-muted-foreground">
              Sorry about that! Please visit our homepage to get where you need
              to go.
            </p>
            <Button asChild className="w-full lg:w-auto">
              <Link href="/">Go back to Homepage</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
