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
    name: 'Dell UltraSharp 32"',
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Monitor",
    stock: 85,
    salesPerDay: 1.25,
    salesPerMonth: 0.55,
    rating: 4.8,
    sales: "1.4M",
    revenue: "$2.8M",
    lastUpdate: "Just now",
  },
  {
    id: "2",
    name: 'HP Envy 27"',
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "All-in-One PC",
    stock: 92,
    salesPerDay: 1.1,
    salesPerMonth: 0.4,
    rating: 4.7,
    sales: "5.5M",
    revenue: "$1.2M",
    lastUpdate: "This week",
  },
  {
    id: "3",
    name: "Samsung Galaxy S23 Ultra",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Phone",
    stock: 30,
    salesPerDay: 1.3,
    salesPerMonth: 0.85,
    rating: 4.6,
    sales: "1.5M",
    revenue: "$3.5M",
    lastUpdate: "Just now",
  },
  {
    id: "4",
    name: "Microsoft Surface Pro X",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Tablet",
    stock: 210,
    salesPerDay: 0.55,
    salesPerMonth: 0.95,
    rating: 4.4,
    sales: "320K",
    revenue: "$550K",
    lastUpdate: "Just now",
  },
  {
    id: "5",
    name: "Nintendo Switch Pro",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Console",
    stock: 400,
    salesPerDay: 1.75,
    salesPerMonth: 0.45,
    rating: 4.9,
    sales: "150K",
    revenue: "$400K",
    lastUpdate: "This week",
  },
  {
    id: "6",
    name: "Sony PlayStation 5 Pro",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Console",
    stock: 2200,
    salesPerDay: 1.6,
    salesPerMonth: 0.25,
    rating: 4.7,
    sales: "2.3M",
    revenue: "$4.5M",
    lastUpdate: "This week",
  },
  {
    id: "7",
    name: "Xbox Series Z",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Gaming/Console",
    stock: 180,
    salesPerDay: 6.85,
    salesPerMonth: 3.1,
    rating: 4.8,
    sales: "1.1M",
    revenue: "$2.5M",
    lastUpdate: "This week",
  },
  {
    id: "8",
    name: "Fitbit Sense 2",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Watch",
    stock: 380,
    salesPerDay: 4.25,
    salesPerMonth: 0.8,
    rating: 4.6,
    sales: "95K",
    revenue: "$50K",
    lastUpdate: "2 weeks ago",
  },
  {
    id: "9",
    name: "Canon EOS R6",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Photo/Video",
    stock: 280,
    salesPerDay: 0.35,
    salesPerMonth: 0.65,
    rating: 4.5,
    sales: "1.1M",
    revenue: "$1.8M",
    lastUpdate: "3 weeks ago",
  },
  {
    id: "10",
    name: "LG UltraFine 34-inch",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "TV/Monitor",
    stock: 1100,
    salesPerDay: 3.85,
    salesPerMonth: 0.35,
    rating: 4.3,
    sales: "250K",
    revenue: "$1.5M",
    lastUpdate: "Just now",
  },
];

function StockIndicator({ stock }: { stock: number }) {
  let color = "bg-red-500";
  if (stock > 1000) color = "bg-green-500";
  else if (stock > 400) color = "bg-yellow-500";
  else if (stock > 100) color = "bg-orange-500";

  return <div className={`h-2 w-2 rounded-full ${color} mr-2 inline-block`} />;
}

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
      {hasHalfStar && <StarHalf className="h-4 w-4 fill-current" />}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />
      ))}
      <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
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
            <span className="text-gray-500">All Products: </span>
            <span className="font-semibold">5555555</span>
          </div>
          <div>
            <span className="text-gray-500">Total sales: </span>
            <span className="font-semibold">$100.4k</span>
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
                      src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=40&width=40"
                      alt={product.name}
                      className="h-10 w-10 rounded object-cover"
                    />
                    <span className="font-medium">{product.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className="bg-blue-50 text-blue-700 hover:bg-blue-50"
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
                  <span className="text-gray-500">{product.lastUpdate}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-500">Showing 1-10 of 1000</div>
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
