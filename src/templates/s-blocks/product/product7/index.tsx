"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Star,
  Minus,
  Plus,
  Heart,
  ShoppingCart,
  ChevronDown,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
// import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const product = {
  category: "Clothing / Menswear",
  name: "Basic Yellow Tropical Printed Shirt",
  price: 220,
  rating: 4,
  reviews: 1624,
  description:
    "Introducing our vibrant Basic Yellow Tropical Printed Shirt - a celebration of style and sunshine! Embrace the essence of summer wherever you go with this eye-catching piece that effortlessly blends comfort and tropical flair.",
  features: [
    "Branded shirt",
    "3 color shirt",
    "Pure Cotton Shirt with 60% as 40%",
    "all size is available",
  ],
  sizes: ["S", "M", "L", "XL", "XXL"],
  colors: [
    { name: "Yellow", class: "bg-yellow-400" },
    { name: "Blue", class: "bg-blue-500" },
    { name: "Green", class: "bg-green-500" },
  ],
  images: [
    {
      src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      alt: "Yellow Tropical Printed Shirt - Front view",
    },
    {
      src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      alt: "Yellow Tropical Printed Shirt - Back view",
    },
    {
      src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      alt: "Yellow Tropical Printed Shirt - Side view",
    },
    {
      src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      alt: "Yellow Tropical Printed Shirt - Detail view",
    },
  ],
  specifications: [
    { name: "Material", value: "100% Cotton" },
    { name: "Fit", value: "Regular" },
    { name: "Care", value: "Machine wash cold" },
    { name: "Origin", value: "Imported" },
  ],
};

export default function EnhancedProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]?.name);
  const [mainImage, setMainImage] = useState(product.images[0]);
  // const { toast } = useToast();

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  const handleAddToCart = () => {
    // toast({
    //   title: "Added to cart",
    //   description: `${quantity} x ${product.name} (${selectedSize}, ${selectedColor}) added to your cart.`,
    // });
  };

  const handleAddToWishlist = () => {
    // toast({
    //   title: "Added to wishlist",
    //   description: `${product.name} has been added to your wishlist.`,
    // });
  };

  return (
    <section className="relative py-16">
      <div className="container mx-auto">
        <div className="mx-auto grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <Image
                src={mainImage?.src ?? ""}
                alt={mainImage?.alt ?? ""}
                width={600}
                height={600}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(image)}
                  className={`relative aspect-square overflow-hidden rounded-lg ${
                    mainImage?.src === image.src ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={150}
                    height={150}
                    className="h-full w-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <div className="mt-2 flex items-center gap-4">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`size-5 ${
                        i < product.rating
                          ? "fill-primary text-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.reviews} reviews
                </span>
              </div>
            </div>
            <div>
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl font-bold">${product.price}</p>
            </div>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="description"
            >
              <AccordionItem value="description">
                <AccordionTrigger>Product Description</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{product.description}</p>
                  <ul className="mt-4 space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Badge variant="default" className="rounded-full p-1">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </Badge>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="specifications">
                <AccordionTrigger>Specifications</AccordionTrigger>
                <AccordionContent>
                  <dl className="divide-y divide-gray-200">
                    {product.specifications.map((spec) => (
                      <div
                        key={spec.name}
                        className="flex justify-between py-2"
                      >
                        <dt className="text-sm font-medium text-muted-foreground">
                          {spec.name}
                        </dt>
                        <dd className="text-sm text-gray-900">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Color</h3>
              <RadioGroup
                value={selectedColor}
                onValueChange={setSelectedColor}
                className="mt-2"
              >
                <div className="flex items-center space-x-3">
                  {product.colors.map((color) => (
                    <div key={color.name}>
                      <RadioGroupItem
                        value={color.name}
                        id={`color-${color.name}`}
                        className="sr-only"
                      />
                      <Label
                        htmlFor={`color-${color.name}`}
                        className={`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none ${
                          selectedColor === color.name
                            ? "ring-2 ring-primary"
                            : ""
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`size-8 rounded-full border border-black border-opacity-10 ${color.class}`}
                        />
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="link"
                      className="text-sm font-medium text-primary"
                    >
                      Size guide
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Size Guide</DialogTitle>
                      <DialogDescription>
                        Measurements are in inches.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-4 gap-4 py-4">
                      <div className="font-bold">Size</div>
                      <div className="font-bold">Chest</div>
                      <div className="font-bold">Waist</div>
                      <div className="font-bold">Length</div>
                      {product.sizes.map((size) => (
                        <>
                          <div>{size}</div>
                          <div>
                            {Math.round(38 + product.sizes.indexOf(size) * 2)}
                          </div>
                          <div>
                            {Math.round(32 + product.sizes.indexOf(size) * 2)}
                          </div>
                          <div>
                            {Math.round(28 + product.sizes.indexOf(size))}
                          </div>
                        </>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <RadioGroup
                value={selectedSize}
                onValueChange={setSelectedSize}
                className="mt-2"
              >
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <div key={size}>
                      <RadioGroupItem
                        value={size}
                        id={`size-${size}`}
                        className="sr-only"
                      />
                      <Label
                        htmlFor={`size-${size}`}
                        className={`flex size-12 cursor-pointer items-center justify-center rounded-md border text-sm font-medium uppercase focus:outline-none ${
                          selectedSize === size
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-gray-200 bg-background text-foreground hover:bg-secondary"
                        }`}
                      >
                        {size}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(-1)}
                >
                  <Minus className="size-4" />
                </Button>
                <Input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="mx-2 w-16 text-center"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(1)}
                >
                  <Plus className="size-4" />
                </Button>
              </div>
              <Button
                onClick={handleAddToCart}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <ShoppingCart className="mr-2 size-4" /> Add to cart
              </Button>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={handleAddToWishlist}
              >
                <Heart className="size-4" />
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
