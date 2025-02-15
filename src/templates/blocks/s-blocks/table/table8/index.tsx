"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";

interface Order {
  id: string;
  date: string;
  product: {
    name: string;
    pid: string;
  };
  amount: number;
  customer: {
    name: string;
    email: string;
  };
  orderNumber: string;
  status: "pending" | "shipped" | "cancelled";
}

const initialOrders: Order[] = [
  {
    id: "1",
    date: "06/02/2020",
    product: {
      name: "Apple Macbook 2020",
      pid: "982 0192",
    },
    amount: 2200,
    customer: {
      name: "Samantha Smith",
      email: "samantha@gmail.com",
    },
    orderNumber: "WMC0191",
    status: "pending",
  },
  {
    id: "2",
    date: "06/02/2020",
    product: {
      name: "Apple Macbook 2020",
      pid: "982 0192",
    },
    amount: 2200,
    customer: {
      name: "Samantha Smith",
      email: "samantha@gmail.com",
    },
    orderNumber: "WMC0191",
    status: "pending",
  },
  {
    id: "3",
    date: "06/02/2020",
    product: {
      name: "Apple Macbook 2020",
      pid: "982 0192",
    },
    amount: 2200,
    customer: {
      name: "Samantha Smith",
      email: "samantha@gmail.com",
    },
    orderNumber: "WMC0191",
    status: "shipped",
  },
  {
    id: "4",
    date: "06/02/2020",
    product: {
      name: "Apple Macbook 2020",
      pid: "982 0192",
    },
    amount: 2200,
    customer: {
      name: "Samantha Smith",
      email: "samantha@gmail.com",
    },
    orderNumber: "WMC0191",
    status: "cancelled",
  },
];

export default function OrdersTable() {
  const [orders, setOrders] = React.useState<Order[]>(initialOrders);

  const handleConfirmOrder = (orderId: string) => {
    setOrders((currentOrders) =>
      currentOrders.map((order) =>
        order.id === orderId ? { ...order, status: "shipped" as const } : order,
      ),
    );
  };

  const handleUnconfirmOrder = (orderId: string) => {
    setOrders((currentOrders) =>
      currentOrders.map((order) =>
        order.id === orderId ? { ...order, status: "pending" as const } : order,
      ),
    );
  };

  const handleCancelOrder = (orderId: string) => {
    setOrders((currentOrders) =>
      currentOrders.map((order) =>
        order.id === orderId
          ? { ...order, status: "cancelled" as const }
          : order,
      ),
    );
  };

  const getStatusBadgeVariant = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return "secondary";
      case "shipped":
        return "default";
      case "cancelled":
        return "destructive";
      default:
        return "secondary";
    }
  };

  return (
    <div className="container py-16">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6">
          <h2 className="text-xl font-semibold">Orders</h2>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Date</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Order #</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{order.product.name}</div>
                    <div className="text-sm text-muted-foreground">
                      PID: {order.product.pid}
                    </div>
                  </div>
                </TableCell>
                <TableCell>${order.amount}</TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{order.customer.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {order.customer.email}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <a
                    href={`#${order.orderNumber}`}
                    className="text-primary hover:underline"
                  >
                    {order.orderNumber}
                  </a>
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(order.status)}>
                    {order.status.charAt(0).toUpperCase() +
                      order.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="size-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {order.status !== "shipped" && (
                        <DropdownMenuItem
                          onClick={() => handleConfirmOrder(order.id)}
                        >
                          Confirm
                        </DropdownMenuItem>
                      )}
                      {order.status === "shipped" && (
                        <DropdownMenuItem
                          onClick={() => handleUnconfirmOrder(order.id)}
                        >
                          Undo Confirmation
                        </DropdownMenuItem>
                      )}
                      {order.status !== "cancelled" && (
                        <DropdownMenuItem
                          onClick={() => handleCancelOrder(order.id)}
                        >
                          Cancel
                        </DropdownMenuItem>
                      )}
                      {order.status === "cancelled" && (
                        <DropdownMenuItem
                          onClick={() => handleUnconfirmOrder(order.id)}
                        >
                          Undo Cancellation
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
