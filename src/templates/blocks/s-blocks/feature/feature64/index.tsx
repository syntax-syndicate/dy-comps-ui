import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react"; // Import the desired Lucide icon

export default function Feature64() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-16">
          <div className="text-center">
            <Badge variant="outline" className="mb-6">
              Under Development
            </Badge>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl lg:max-w-3xl lg:text-5xl">
              Powerful Features,{" "}
              <span className="text-primary">Seamless Integration</span>
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground lg:text-lg">
              Explore a suite of innovative tools designed to streamline your
              workflow and amplify your results. We&apos;re crafting experiences
              that put you in control.
            </p>
          </div>
          <div className="grid w-full gap-6 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardContent className="p-6">
                <div className="relative flex justify-center">
                  {" "}
                  {/* Added relative positioning */}
                  <Image
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    alt="Key functionality preview"
                    width={400}
                    height={300}
                    className="mb-6 aspect-[4/3] w-full rounded-lg object-cover sm:max-h-64 md:mb-8"
                  />
                  <div className="absolute right-2 top-2">
                    {" "}
                    {/* Icon positioning */}
                    <CheckCircle size={24} className="text-primary" />{" "}
                    {/* Icon component */}
                  </div>
                </div>
                <div className="mt-auto flex flex-col">
                  <h3 className="mb-2 text-sm font-semibold md:text-base">
                    Smart Automation
                  </h3>
                  <p className="text-sm text-muted-foreground md:text-base">
                    Automate repetitive tasks and free up your time for what
                    truly matters. Experience intelligent workflows.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardContent className="p-6">
                <div className="relative flex justify-center">
                  {" "}
                  {/* Added relative positioning */}
                  <Image
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    alt="Enhanced collaboration interface"
                    width={400}
                    height={300}
                    className="mb-6 aspect-[4/3] w-full rounded-lg object-cover sm:max-h-64 md:mb-8"
                  />
                  <div className="absolute right-2 top-2">
                    {" "}
                    {/* Icon positioning */}
                    <CheckCircle size={24} className="text-primary" />{" "}
                    {/* Icon component */}
                  </div>
                </div>
                <div className="mt-auto flex flex-col">
                  <h3 className="mb-2 text-sm font-semibold md:text-base">
                    Intuitive Collaboration
                  </h3>
                  <p className="text-sm text-muted-foreground md:text-base">
                    Work seamlessly with your team, share ideas, and accelerate
                    projects using our collaborative tools.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
