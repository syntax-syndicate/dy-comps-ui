import Image from "next/image";
import { Minus, Plus, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface RecommendedProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
}

export default function ShoppingCart() {
  const cartItems: CartItem[] = [
    {
      id: "1",
      name: 'PC system All in One APPLE iMac (2023) mqrg3ro/a, Apple M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, Keyboard layout INT',
      price: 1499,
      quantity: 2,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      id: "2",
      name: "Restored Apple Watch Series 8 (GPS) 41mm Midnight Aluminum Case with Midnight Sport Band",
      price: 598,
      quantity: 1,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
  ];

  const recommendedProducts: RecommendedProduct[] = [
    {
      id: "1",
      name: 'iMac 27"',
      description:
        "This generation has some improvements, including a longer continuous battery life.",
      price: 299,
      originalPrice: 399.99,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      id: "2",
      name: "Playstation 5",
      description:
        "This generation has some improvements, including a longer continuous battery life.",
      price: 499,
      originalPrice: 799.99,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      id: "3",
      name: "Apple Watch Series 8",
      description:
        "This generation has some improvements, including a longer continuous battery life.",
      price: 1199,
      originalPrice: 1799.99,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
  ];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const savings = 299;
  const tax = 799;
  const total = subtotal - savings + tax;

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-6 text-2xl font-bold">Shopping Cart</h1>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {cartItems.map((item) => (
            <Card key={item.id}>
              <CardContent className="flex gap-4 p-4">
                <div className="relative h-24 w-24">
                  <Image
                    src={
                      item.image ||
                      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    }
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="font-medium">{item.name}</h3>
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      Remove
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button variant="outline" size="icon">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="min-w-[80px] text-right">
                  <span className="font-bold">${item.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-4">
              <h2 className="mb-4 text-lg font-bold">Order summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Original price</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between text-destructive">
                  <span>Savings</span>
                  <span>-${savings}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Store Pickup</span>
                  <span>$99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${tax}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>
              <Button className="mt-4 w-full" size="lg">
                Proceed to Checkout
              </Button>
              <Button variant="link" className="mt-2 w-full">
                Continue Shopping
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4 p-4">
              <h3 className="font-medium">
                Do you have a voucher or gift card?
              </h3>
              <div className="flex gap-2">
                <Input placeholder="Enter code" />
                <Button>Apply Code</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="mb-6 text-xl font-bold">People also bought</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recommendedProducts.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-4">
                <div className="relative mb-4 aspect-square">
                  <Image
                    src={
                      product.image ||
                      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    }
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold">{product.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold">${product.price}</span>
                    <span className="ml-2 text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  </div>
                  <Button variant="outline" size="sm">
                    Add to cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
