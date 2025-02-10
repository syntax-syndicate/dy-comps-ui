"use client";

import * as React from "react";
import { ChevronDown, Plus, Settings2 } from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  brand: string;
  price: number;
  stock: number;
  totalSales: number;
  status: "Active" | "Inactive";
}

const products: Product[] = [
  {
    id: "1",
    name: "Samsung Galaxy S23 Ultra",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Phone",
    brand: "Samsung",
    price: 1199,
    stock: 150,
    totalSales: 320,
    status: "Active",
  },
  {
    id: "2",
    name: "Dell XPS 15",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Laptop",
    brand: "Dell",
    price: 1999,
    stock: 80,
    totalSales: 450,
    status: "Active",
  },
  {
    id: "3",
    name: "Sony WH-1000XM5",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Headphones",
    brand: "Sony",
    price: 349,
    stock: 200,
    totalSales: 1200,
    status: "Active",
  },
  {
    id: "4",
    name: "Canon EOS R5",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Camera",
    brand: "Canon",
    price: 3899,
    stock: 50,
    totalSales: 90,
    status: "Active",
  },
  {
    id: "5",
    name: "LG OLED C2 Series",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "TV",
    brand: "LG",
    price: 2499,
    stock: 120,
    totalSales: 600,
    status: "Active",
  },
  {
    id: "6",
    name: "Google Pixel 7 Pro",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Phone",
    brand: "Google",
    price: 899,
    stock: 300,
    totalSales: 800,
    status: "Active",
  },
  {
    id: "7",
    name: "HP Spectre x360",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Laptop",
    brand: "HP",
    price: 1499,
    stock: 100,
    totalSales: 300,
    status: "Active",
  },
  {
    id: "8",
    name: "Bose QuietComfort 45",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Headphones",
    brand: "Bose",
    price: 329,
    stock: 250,
    totalSales: 1500,
    status: "Active",
  },
  {
    id: "9",
    name: "Fujifilm X-T5",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Camera",
    brand: "Fujifilm",
    price: 1699,
    stock: 70,
    totalSales: 200,
    status: "Active",
  },
  {
    id: "10",
    name: "Samsung QN90B Neo QLED",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "TV",
    brand: "Samsung",
    price: 2999,
    stock: 90,
    totalSales: 400,
    status: "Active",
  },
];

const filters = {
  brand: [
    "Samsung",
    "Dell",
    "Sony",
    "Canon",
    "LG",
    "Google",
    "HP",
    "Bose",
    "Fujifilm",
  ],
  category: ["Phone", "Laptop", "Headphones", "Camera", "TV"],
  price: ["$0-$499", "$500-$999", "$1000-$1999", "$2000+"],
  color: ["Black", "White", "Silver", "Blue"],
};

export default function FlowbiteProducts() {
  const [selectedProducts, setSelectedProducts] = React.useState<string[]>([]);
  const [sortConfig, setSortConfig] = React.useState<{
    key: keyof Product | null;
    direction: "asc" | "desc";
  }>({ key: null, direction: "asc" });

  const handleSort = (key: keyof Product) => {
    setSortConfig({
      key,
      direction:
        sortConfig.key === key && sortConfig.direction === "asc"
          ? "desc"
          : "asc",
    });
  };

  const sortedProducts = React.useMemo(() => {
    if (!sortConfig.key) return products;

    return [...products].sort((a, b) => {
      if (a[sortConfig.key!] < b[sortConfig.key!]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key!] > b[sortConfig.key!]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  }, [sortConfig]);

  return (
    <div className="container w-full p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold">SERPUI Products</h1>
          <span className="text-muted-foreground">
            {products.length} results
          </span>
        </div>
        <div className="flex gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add new product
          </Button>
          <Button variant="outline">
            <Settings2 className="mr-2 h-4 w-4" />
            Manage Columns
          </Button>
        </div>
      </div>

      <div className="mb-6 flex gap-4">
        {Object.entries(filters).map(([key, values]) => (
          <DropdownMenu key={key}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="capitalize">
                {key}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {values.map((value) => (
                <DropdownMenuItem key={value}>{value}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ))}
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedProducts.length === products.length}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedProducts(products.map((p) => p.id));
                    } else {
                      setSelectedProducts([]);
                    }
                  }}
                />
              </TableHead>
              <TableHead>PRODUCT</TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("category")}
              >
                CATEGORY{" "}
                {sortConfig.key === "category" && (
                  <ChevronDown className="ml-2 inline h-4 w-4" />
                )}
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("brand")}
              >
                BRAND{" "}
                {sortConfig.key === "brand" && (
                  <ChevronDown className="ml-2 inline h-4 w-4" />
                )}
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("price")}
              >
                PRICE{" "}
                {sortConfig.key === "price" && (
                  <ChevronDown className="ml-2 inline h-4 w-4" />
                )}
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("stock")}
              >
                STOCK{" "}
                {sortConfig.key === "stock" && (
                  <ChevronDown className="ml-2 inline h-4 w-4" />
                )}
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("totalSales")}
              >
                TOTAL SALES{" "}
                {sortConfig.key === "totalSales" && (
                  <ChevronDown className="ml-2 inline h-4 w-4" />
                )}
              </TableHead>
              <TableHead>STATUS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedProducts.includes(product.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedProducts([...selectedProducts, product.id]);
                      } else {
                        setSelectedProducts(
                          selectedProducts.filter((id) => id !== product.id),
                        );
                      }
                    }}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img
                      src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=40&width=40"
                      alt={product.name}
                      className="h-10 w-10 rounded bg-secondary object-cover"
                    />
                    <span className="font-medium">{product.name}</span>
                  </div>
                </TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.brand}</TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.totalSales}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="bg-success/10 text-success border-success/20 hover:bg-success/10"
                  >
                    {product.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex gap-4">
          <div>
            Purchase price:{" "}
            <span className="font-medium text-foreground">$ 3,567,890</span>
          </div>
          <div>
            Total selling price:{" "}
            <span className="font-medium text-foreground">$ 8,489,400</span>
          </div>
        </div>
        <div className="flex gap-4">
          <Button variant="link" className="text-primary">
            Print barcodes
          </Button>
          <Button variant="link" className="text-primary">
            Duplicate
          </Button>
          <Button>Export CSV</Button>
        </div>
      </div>
    </div>
  );
}
