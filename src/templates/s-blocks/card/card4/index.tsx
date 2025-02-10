"use client";

import { ChevronDown, Heart, ShoppingCart, Tag, Truck } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ProductShowcase() {
  return (
    <div className="container flex justify-center py-16">
      <Card className="w-full max-w-2xl">
        <CardHeader className="space-y-0">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <CardTitle>Eco-Friendly Water Bottle</CardTitle>
              <CardDescription>
                Sleek, durable, and environmentally conscious. This 20oz water
                bottle keeps your drinks cold for 24 hours or hot for 12 hours.
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="px-3">
                <Heart className="mr-2 size-4" />
                Save
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="px-2">
                    <ChevronDown className="size-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  alignOffset={-5}
                  className="w-[200px]"
                  forceMount
                >
                  <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <ShoppingCart className="mr-2 size-4" /> Add to Cart
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Tag className="mr-2 size-4" /> Compare
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Truck className="mr-2 size-4" /> Check Shipping
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Tag className="mr-1 size-3 text-green-500" />
              $24.99
            </div>
            <div className="flex items-center">
              <Heart className="mr-1 size-3 text-red-500" />
              4.8 (2.3k reviews)
            </div>
            <div>In stock</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
