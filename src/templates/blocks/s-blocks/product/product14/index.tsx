import { Star, Minus, Plus, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
  {
    title: "Durable construction",
    description:
      "Reinforced seams and high-quality stitching ensure long-lasting wear.",
  },
  {
    title: "Easy care",
    description:
      "Machine washable and quick-drying for hassle-free maintenance.",
  },
];

export default function Component() {
  return (
    <div className="container mx-auto py-16">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center space-x-2 text-sm text-muted-foreground">
        <Link href="#" className="hover:text-primary">
          Home
        </Link>
        <span>/</span>
        <Link href="#" className="hover:text-primary">
          Men
        </Link>
        <span>/</span>
        <Link href="#" className="hover:text-primary">
          Clothing
        </Link>
        <span>/</span>
        <span className="font-medium text-foreground">Basic Tee 6-Pack</span>
      </nav>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Product Images */}
        <div className="space-y-4">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Main product image"
            className="aspect-square h-auto w-full rounded-lg border bg-muted object-cover"
            width={600}
            height={600}
          />
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Image
                key={i}
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt={`Product thumbnail ${i + 1}`}
                className="aspect-square h-auto w-full cursor-pointer rounded-lg border bg-muted object-cover transition-all hover:ring-2 hover:ring-primary"
                width={150}
                height={150}
              />
            ))}
          </div>
        </div>

        {/* Product Information */}
        <div className="space-y-6">
          <div>
            <h1 className="mb-2 text-3xl font-bold tracking-tight">
              Basic Tee 6-Pack
            </h1>
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold">$192</span>
              <div className="flex items-center">
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

          <p className="text-muted-foreground">
            Express your vibrant personality with our Basic Tee 6-Pack,
            featuring three versatile grayscale options. From adventurous
            heather gray to trendsetting black and classic white, we&apos;ve got
            you covered for any style mood.
          </p>
          <p className="text-muted-foreground">
            Express your vibrant personality with our Basic Tee 6-Pack,
            featuring three versatile grayscale options. From adventurous
            heather gray to trendsetting black and classic white, we&apos;ve got
            you covered for any style mood.
          </p>

          <Tabs defaultValue="options" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="options">Options</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
            </TabsList>
            <TabsContent value="options" className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Color</h3>
                <RadioGroup defaultValue="white" className="flex gap-2">
                  {["white", "gray", "black"].map((color) => (
                    <div key={color}>
                      <RadioGroupItem
                        value={color}
                        id={color}
                        className="peer sr-only"
                      />
                      <label
                        htmlFor={color}
                        className={`block size-8 cursor-pointer rounded-full border ring-offset-background peer-aria-checked:ring-2 peer-aria-checked:ring-primary peer-aria-checked:ring-offset-2 ${
                          color === "white"
                            ? "bg-background"
                            : color === "gray"
                              ? "bg-muted"
                              : "bg-primary"
                        }`}
                      />
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">Size</h3>
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
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Quantity</h3>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="size-10 rounded-r-none"
                  >
                    <Minus className="size-4" />
                  </Button>
                  <Input
                    type="number"
                    defaultValue="1"
                    className="h-10 w-14 rounded-none border-x-0 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="size-10 rounded-l-none"
                  >
                    <Plus className="size-4" />
                  </Button>
                </div>
              </div>
              <Button className="w-full" size="lg">
                Add to bag
              </Button>
            </TabsContent>
            <TabsContent value="details" className="space-y-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Specification</TableHead>
                    <TableHead>Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Material</TableCell>
                    <TableCell>100% Cotton</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Fit</TableCell>
                    <TableCell>Regular fit</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Neck</TableCell>
                    <TableCell>Crew neck</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sleeve</TableCell>
                    <TableCell>Short sleeve</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Pack Includes</TableCell>
                    <TableCell>2 Black, 2 White, 2 Heather Gray</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Origin</TableCell>
                    <TableCell>Ethically made in Portugal</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div>
                <h3 className="mb-2 font-medium">Care Instructions</h3>
                <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  <li>Machine wash cold</li>
                  <li>Tumble dry low</li>
                  <li>Do not bleach</li>
                  <li>Iron on low heat if needed</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="features" className="space-y-4">
              <div className="grid gap-4">
                {productFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
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
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
