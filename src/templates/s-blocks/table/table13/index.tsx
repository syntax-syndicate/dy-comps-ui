"use client";

import * as React from "react";
import { Star, StarHalf, Plus, RefreshCcw, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  stock: number;
  salesPerDay: number;
  salesPerMonth: number;
  rating: number;
  sales: string;
  revenue: string;
  lastUpdate: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Samsung Galaxy S23 Ultra",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Phone",
    stock: 200,
    salesPerDay: 3.8,
    salesPerMonth: 1.9,
    rating: 4.9,
    sales: "1.5M",
    revenue: "$2.8M",
    lastUpdate: "Today",
  },
  {
    id: "2",
    name: "Dell XPS 15 Laptop",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Laptop",
    stock: 150,
    salesPerDay: 2.1,
    salesPerMonth: 1.2,
    rating: 4.7,
    sales: "800K",
    revenue: "$1.9M",
    lastUpdate: "2 days ago",
  },
  {
    id: "3",
    name: "Sony WH-1000XM5 Headphones",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Audio",
    stock: 300,
    salesPerDay: 4.5,
    salesPerMonth: 2.3,
    rating: 4.8,
    sales: "1.2M",
    revenue: "$1.5M",
    lastUpdate: "Yesterday",
  },
  {
    id: "4",
    name: "LG OLED C2 65-inch TV",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "TV",
    stock: 90,
    salesPerDay: 1.7,
    salesPerMonth: 0.8,
    rating: 4.6,
    sales: "600K",
    revenue: "$2.1M",
    lastUpdate: "3 days ago",
  },
  {
    id: "5",
    name: "Canon EOS R5 Camera",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Camera",
    stock: 75,
    salesPerDay: 1.2,
    salesPerMonth: 0.6,
    rating: 4.9,
    sales: "400K",
    revenue: "$3.0M",
    lastUpdate: "Last week",
  },
  {
    id: "6",
    name: "Apple MacBook Air M2",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Laptop",
    stock: 250,
    salesPerDay: 3.0,
    salesPerMonth: 1.5,
    rating: 4.8,
    sales: "1.1M",
    revenue: "$2.5M",
    lastUpdate: "Today",
  },
  {
    id: "7",
    name: "Bose QuietComfort 45 Headphones",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Audio",
    stock: 180,
    salesPerDay: 2.8,
    salesPerMonth: 1.4,
    rating: 4.7,
    sales: "900K",
    revenue: "$1.3M",
    lastUpdate: "Yesterday",
  },
  {
    id: "8",
    name: "Nintendo Switch OLED",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Gaming Console",
    stock: 400,
    salesPerDay: 5.2,
    salesPerMonth: 2.6,
    rating: 4.9,
    sales: "2.3M",
    revenue: "$1.8M",
    lastUpdate: "This week",
  },
  {
    id: "9",
    name: "Google Pixel 7 Pro",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Phone",
    stock: 120,
    salesPerDay: 2.3,
    salesPerMonth: 1.1,
    rating: 4.6,
    sales: "700K",
    revenue: "$1.6M",
    lastUpdate: "2 days ago",
  },
  {
    id: "10",
    name: "Samsung Odyssey G9 Monitor",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Monitor",
    stock: 60,
    salesPerDay: 1.5,
    salesPerMonth: 0.7,
    rating: 4.5,
    sales: "300K",
    revenue: "$1.2M",
    lastUpdate: "Last week",
  },
];

function StockIndicator({ stock }: { stock: number }) {
  let color = "bg-destructive";
  if (stock > 1000) color = "bg-success";
  else if (stock > 400) color = "bg-warning";
  else if (stock > 100) color = "bg-orange-500";

  return <div className={`h-2 w-2 rounded-full ${color} mr-2 inline-block`} />;
}

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="text-warning flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
      {hasHalfStar && <StarHalf className="h-4 w-4 fill-current" />}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <Star key={`empty-${i}`} className="h-4 w-4 text-muted" />
      ))}
      <span className="ml-1 text-sm text-muted-foreground">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export default function ProductDashboard() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalProducts = 1000;
  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  return (
    <div className="container w-full p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div>
            <span className="text-muted-foreground">All Products: </span>
            <span className="font-semibold">123456</span>
          </div>
          <div>
            <span className="text-muted-foreground">Total sales: </span>
            <span className="font-semibold">$88.4k</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add new product
          </Button>
          <Button variant="outline">
            <RefreshCcw className="mr-2 h-4 w-4" />
            Update stocks 1/250
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox />
              </TableHead>
              <TableHead>PRODUCT</TableHead>
              <TableHead>CATEGORY</TableHead>
              <TableHead>STOCK</TableHead>
              <TableHead>SALES/DAY</TableHead>
              <TableHead>SALES/MONTH</TableHead>
              <TableHead>RATING</TableHead>
              <TableHead>SALES</TableHead>
              <TableHead>REVENUE</TableHead>
              <TableHead>LAST UPDATE</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img
                      src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                      alt={product.name}
                      className="h-10 w-10 rounded object-cover"
                    />
                    <span className="font-medium">{product.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/10"
                  >
                    {product.category}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <StockIndicator stock={product.stock} />
                    {product.stock}
                  </div>
                </TableCell>
                <TableCell>{product.salesPerDay}</TableCell>
                <TableCell>{product.salesPerMonth}</TableCell>
                <TableCell>
                  <StarRating rating={product.rating} />
                </TableCell>
                <TableCell>{product.sales}</TableCell>
                <TableCell>{product.revenue}</TableCell>
                <TableCell>
                  <span className="text-muted-foreground">
                    {product.lastUpdate}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing 1-10 of 1000
        </div>
        <div className="flex gap-1">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          {[1, 2, 3, "...", 100].map((page, i) => (
            <Button
              key={i}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => typeof page === "number" && setCurrentPage(page)}
              className={page === "..." ? "pointer-events-none" : ""}
            >
              {page}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
