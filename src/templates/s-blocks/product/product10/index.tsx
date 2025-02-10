import { Star, Minus, Plus, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

const productFeatures = [
  {
    title: "Hand cut and sewn locally",
    description:
      "Our t-shirts are crafted with care by skilled artisans in your local community.",
  },
  {
    title: "Dyed with our proprietary colors",
    description:
      "We use eco-friendly, proprietary dyes to ensure vibrant, long-lasting colors.",
  },
  {
    title: "Pre-washed & pre-shrunk",
    description:
      "Say goodbye to shrinkage. Our tees maintain their size and shape wash after wash.",
  },
  {
    title: "Ultra-soft 100% cotton",
    description:
      "Experience ultimate comfort with our premium, breathable cotton fabric.",
  },
  {
    title: "Ethically sourced",
    description:
      "We ensure fair labor practices and sustainable sourcing for all our materials.",
  },
  {
    title: "Versatile style",
    description:
      "Perfect for casual wear, layering, or dressing up for a night out.",
  },
];

export default function Component() {
  return (
    <div className="container mx-auto py-16">
      {/* Breadcrumb */}
      <nav className="mb-6 flex gap-2 text-sm text-muted-foreground">
        <Link href="#" className="hover:text-primary">
          Men
        </Link>
        <span>/</span>
        <Link href="#" className="hover:text-primary">
          Clothing
        </Link>
        <span>/</span>
        <span className="text-foreground">Basic Tee 6-Pack</span>
      </nav>

      {/* Product Images */}
      <div className="mb-8 grid grid-cols-3 gap-4 bg-accent p-4">
        <Image
          src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
          alt="Black t-shirt"
          className="rounded-lg border bg-muted"
          width={500}
          height={500}
        />
        <Image
          src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
          alt="Gray t-shirt"
          className="rounded-lg border bg-muted"
          width={500}
          height={500}
        />
        <Image
          src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
          alt="White t-shirt"
          className="rounded-lg border bg-muted"
          width={500}
          height={500}
        />
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Product Information */}
        <div className="space-y-6 lg:col-span-2">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Basic Tee 6-Pack
            </h1>
            <div className="mt-4 flex items-center gap-4">
              <span className="text-3xl font-bold">$192</span>
              <div className="flex items-center gap-1">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-primary text-primary" />
                ))}
                <Star className="size-5 fill-muted text-muted" />
                <Link
                  href="#reviews"
                  className="ml-2 text-sm text-muted-foreground hover:text-primary"
                >
                  117 reviews
                </Link>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <p className="text-muted-foreground">
              The Basic Tee 6-Pack allows you to fully express your vibrant
              personality with three grayscale options. Feeling adventurous? Put
              on a heather gray tee. Want to be a trendsetter? Try our exclusive
              colorway: &quot;Black&quot;. Need to add an extra pop of color to
              your outfit? Our white tee has you covered.
            </p>
            <h3 className="font-medium">Highlights</h3>
            <div className="grid grid-cols-2 gap-4">
              {productFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Check className="mt-0.5 size-5 flex-shrink-0 text-primary" />
                  <div>
                    <h4 className="font-medium">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-medium">Details</h3>
            <p className="text-sm text-muted-foreground">
              The 6-Pack includes two black, two white, and two heather gray
              Basic Tees. Sign up for our subscription service and be the first
              to get new, exciting colors, like our upcoming &quot;Charcoal
              Gray&quot; limited release.
            </p>
          </div>
        </div>

        {/* Product Details Selectors */}
        <Card>
          <CardContent className="p-6">
            <form className="space-y-6">
              {/* Color Selection */}
              <div>
                <h2 className="mb-4 text-sm font-medium">Color</h2>
                <RadioGroup defaultValue="white" className="flex gap-2">
                  <div>
                    <RadioGroupItem
                      value="white"
                      id="white"
                      className="peer sr-only"
                    />
                    <label
                      htmlFor="white"
                      className="block size-8 cursor-pointer rounded-full border bg-background ring-offset-background peer-aria-checked:ring-2 peer-aria-checked:ring-primary peer-aria-checked:ring-offset-2"
                    />
                  </div>
                  <div>
                    <RadioGroupItem
                      value="gray"
                      id="gray"
                      className="peer sr-only"
                    />
                    <label
                      htmlFor="gray"
                      className="block size-8 cursor-pointer rounded-full border bg-muted ring-offset-background peer-aria-checked:ring-2 peer-aria-checked:ring-primary peer-aria-checked:ring-offset-2"
                    />
                  </div>
                  <div>
                    <RadioGroupItem
                      value="black"
                      id="black"
                      className="peer sr-only"
                    />
                    <label
                      htmlFor="black"
                      className="block size-8 cursor-pointer rounded-full bg-primary ring-offset-background peer-aria-checked:ring-2 peer-aria-checked:ring-primary peer-aria-checked:ring-offset-2"
                    />
                  </div>
                </RadioGroup>
              </div>

              {/* Size Selection */}
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-sm font-medium">Size</h2>
                  <Link
                    href="#size-guide"
                    className="text-sm text-primary hover:underline"
                  >
                    Size guide
                  </Link>
                </div>
                <RadioGroup defaultValue="m" className="grid grid-cols-4 gap-2">
                  {["XS", "S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
                    <div key={size}>
                      <RadioGroupItem
                        value={size.toLowerCase()}
                        id={size}
                        className="peer sr-only"
                      />
                      <label
                        htmlFor={size}
                        className="flex h-10 cursor-pointer items-center justify-center rounded-md border bg-background text-sm ring-offset-background transition-colors hover:bg-muted peer-aria-checked:border-primary peer-aria-checked:text-primary"
                      >
                        {size}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Quantity Selection */}
              <div>
                <h2 className="mb-4 text-sm font-medium">Quantity</h2>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="size-8 rounded-r-none"
                  >
                    <Minus className="size-4" />
                  </Button>
                  <Input
                    type="number"
                    defaultValue="1"
                    className="h-8 w-12 rounded-none border-x-0 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="size-8 rounded-l-none"
                  >
                    <Plus className="size-4" />
                  </Button>
                </div>
              </div>

              <Button className="w-full">Add to bag</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
