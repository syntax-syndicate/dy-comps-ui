"use client";

import * as React from "react";
import { Plus, RefreshCcw, ShoppingCart, Check, X, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableHeader,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  image: string;
  brand: string;
  productName: string;
  colors: string;
  category: string;
  price: string;
  processor: string;
  ram: string;
  storage: string;
  display: string;
  resolution: string;
  graphics: string;
  batteryLife: string;
  weight: string;
  operatingSystem: string;
  country: string;
  duration: string;
  tax: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "MacBook Air",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    brand: "Apple",
    productName: "MacBook Air (M2, 2025)",
    colors: "Space Gray, Silver, Gold, Midnight",
    category: "Laptop",
    price: "$1,199",
    processor: "Apple M2 chip",
    ram: "8GB Unified Memory",
    storage: "256GB SSD",
    display: "13.6-inch Liquid Retina",
    resolution: "2560 x 1664",
    graphics: "Integrated 8-core GPU",
    batteryLife: "Up to 18 hours",
    weight: "2.7 pounds",
    operatingSystem: "macOS Ventura",
    country: "Worldwide",
    duration: "5-10 Days",
    tax: "2.5%",
  },
  {
    id: "2",
    name: "MacBook Pro 13-inch",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    brand: "Apple",
    productName: "MacBook Pro 13-inch (M2, 2025)",
    colors: "Space Gray, Silver",
    category: "Laptop",
    price: "$1,299",
    processor: "Apple M2 chip",
    ram: "8GB Unified Memory",
    storage: "256GB SSD",
    display: "13.3-inch Retina",
    resolution: "2560 x 1600",
    graphics: "Integrated 10-core GPU",
    batteryLife: "Up to 20 hours",
    weight: "3.0 pounds",
    operatingSystem: "macOS Ventura",
    country: "Worldwide",
    duration: "5-10 Days",
    tax: "2.5%",
  },
  {
    id: "3",
    name: "MacBook Pro 16-inch",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    brand: "Apple",
    productName: "MacBook Pro 16-inch (M1 Pro, 2024)",
    colors: "Space Gray, Silver",
    category: "Laptop",
    price: "$2,499",
    processor: "Apple M1 Pro chip",
    ram: "16GB Unified Memory",
    storage: "512GB SSD",
    display: "16.2-inch Liquid Retina XDR",
    resolution: "3456 x 2234",
    graphics: "Integrated 16-core GPU",
    batteryLife: "Up to 21 hours",
    weight: "4.7 pounds",
    operatingSystem: "macOS Ventura",
    country: "Worldwide",
    duration: "5-10 Days",
    tax: "2.5%",
  },
];

export default function ProductComparison() {
  return (
    <div className="container w-full py-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold">Compare Products</h1>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  Selected MacBook Air, MacBook Pro 13-inch, and MacBook Pro
                  16-inch
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className="rounded-lg border">
        <Table className="border-collapse">
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/4"></TableHead>
              {products.map((product) => (
                <TableHead key={product.id} className="w-1/4 p-6 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative h-32 w-32">
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
                    <span className="font-semibold">{product.name}</span>
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="bg-muted/50">
              <TableCell colSpan={4} className="font-semibold">
                General Information
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left font-medium">Brand</TableCell>
              {products.map((product) => (
                <TableCell key={product.id} className="text-center">
                  {product.brand}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="text-left font-medium">
                Product Name
              </TableCell>
              {products.map((product) => (
                <TableCell key={product.id} className="text-center">
                  {product.productName}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="text-left font-medium">Colors</TableCell>
              {products.map((product) => (
                <TableCell key={product.id} className="text-center">
                  {product.colors}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="text-left font-medium">Category</TableCell>
              {products.map((product) => (
                <TableCell key={product.id} className="text-center">
                  {product.category}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="text-left font-medium">Price</TableCell>
              {products.map((product) => (
                <TableCell key={product.id} className="text-center">
                  {product.price}
                </TableCell>
              ))}
            </TableRow>
            <TableRow className="bg-muted/50">
              <TableCell colSpan={4} className="font-semibold">
                Technical Information
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left font-medium">Processor</TableCell>
              {products.map((product) => (
                <TableCell key={product.id} className="text-center">
                  {product.processor}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="text-left font-medium">RAM</TableCell>
              {products.map((product) => (
                <TableCell key={product.id} className="text-center">
                  {product.ram}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="text-left font-medium">Storage</TableCell>
              {products.map((product) => (
                <TableCell key={product.id} className="text-center">
                  {product.storage}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="text-left font-medium">Display</TableCell>
              {products.map((product) => (
                <TableCell key={product.id} className="text-center">
                  {product.display}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="text-left font-medium">
                Resolution
              </TableCell>
              {products.map((product) => (
                <TableCell key={product.id} className="text-center">
                  {product.resolution}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="text-left font-medium">Graphics</TableCell>
              {products.map((product) => (
                <TableCell key={product.id} className="text-center">
                  {product.graphics}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="text-left font-medium">
                Battery Life
              </TableCell>
              {products.map((product) => (
                <TableCell key={product.id} className="text-center">
                  {product.batteryLife}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="text-left font-medium">Weight</TableCell>
              {products.map((product) => (
                <TableCell key={product.id} className="text-center">
                  {product.weight}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="text-left font-medium">
                Operating System
              </TableCell>
              {products.map((product) => (
                <TableCell key={product.id} className="text-center">
                  {product.operatingSystem}
                </TableCell>
              ))}
            </TableRow>
            <TableRow className="bg-muted/50">
              <TableCell colSpan={4} className="font-semibold">
                Delivery Information
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left font-medium">Country</TableCell>
              {products.map((product) => (
                <TableCell key={product.id} className="text-center">
                  {product.country}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="text-left font-medium">Duration</TableCell>
              {products.map((product) => (
                <TableCell key={product.id} className="text-center">
                  {product.duration}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="text-left font-medium">Tax</TableCell>
              {products.map((product) => (
                <TableCell key={product.id} className="text-center">
                  {product.tax}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              {products.map((product) => (
                <TableCell key={product.id} className="text-center">
                  <Button className="w-full">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to cart
                  </Button>
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
