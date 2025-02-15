import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const productLinks = [
  "Product 1",
  "Product 2",
  "Product 3",
  "Product 4",
  "Product 5",
  "Product 6",
];
const resourceLinks = [
  "Blog",
  "Knowledge Base",
  "Documentation",
  "Partner Directory",
];

export default function Footer6() {
  return (
    <footer className="py-16">
      <div className="container">
        <div className="relative mb-8 flex w-full flex-col gap-x-28 gap-y-8 md:flex-row md:justify-between md:gap-y-0">
          <div className="max-w-96">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg border bg-accent p-2">
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="Company logo"
                  width={48}
                  height={48}
                  className="size-full object-contain object-center"
                />
              </div>
              <h3 className="text-xl font-bold">Company Name</h3>
            </div>
            <p className="text-base font-medium text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col items-start gap-x-20 gap-y-14 xl:flex-row">
            <div className="inline-grid w-fit grid-cols-1 gap-x-20 gap-y-14 sm:grid-cols-2">
              <div className="h-fit w-min">
                <h4 className="mb-6 whitespace-nowrap text-base font-semibold">
                  Product
                </h4>
                <ul className="space-y-2 text-base font-medium text-muted-foreground">
                  {productLinks.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="whitespace-nowrap text-base hover:text-accent-foreground"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="h-fit w-min">
                <h4 className="mb-6 whitespace-nowrap text-base font-semibold">
                  Resources
                </h4>
                <ul className="space-y-2 text-base font-medium text-muted-foreground">
                  {resourceLinks.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="whitespace-nowrap text-base hover:text-accent-foreground"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full shrink-0 sm:w-fit">
              <div className="mb-6 text-base font-semibold">
                Stay up to date
              </div>
              <form className="flex w-full flex-col justify-center gap-2 sm:flex-row">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  className="lg:min-w-72"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-baseline justify-between gap-8 border-t pt-8 md:flex-row md:gap-16">
          <div className="text-xs text-muted-foreground sm:text-sm">
            © Company Name {new Date().getFullYear()}
          </div>
          <div className="flex flex-col items-start gap-4 text-xs text-muted-foreground sm:text-sm md:flex-row lg:items-center">
            <Link href="#" className="hover:text-accent-foreground">
              Terms
            </Link>
            <Link href="#" className="hover:text-accent-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-accent-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
