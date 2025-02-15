"use client";

import React, { useState } from "react";
import { Plus, ChevronDown, ChevronUp, Edit2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Order = {
  id: string;
  date: string;
  customerName: string;
  customerNumber: string;
  orderNumber: string;
  unitsPerOrder: number;
  costPerOrder: number;
  unitCost: number;
};

type SortKey = keyof Order;
type SortOrder = "asc" | "desc";

const initialOrders: Order[] = [
  {
    id: "1",
    date: "20/04/2020",
    customerName: "Jon Strak",
    customerNumber: "0381 9201716",
    orderNumber: "#41523",
    unitsPerOrder: 541,
    costPerOrder: 6471,
    unitCost: 2471,
  },
  {
    id: "2",
    date: "21/04/2020",
    customerName: "Jane Doe",
    customerNumber: "0382 9301717",
    orderNumber: "#41524",
    unitsPerOrder: 322,
    costPerOrder: 4500,
    unitCost: 1800,
  },
  {
    id: "3",
    date: "22/04/2020",
    customerName: "Bob Smith",
    customerNumber: "0383 9401718",
    orderNumber: "#41525",
    unitsPerOrder: 750,
    costPerOrder: 8900,
    unitCost: 3200,
  },
  {
    id: "4",
    date: "23/04/2020",
    customerName: "Alice Johnson",
    customerNumber: "0384 9501719",
    orderNumber: "#41526",
    unitsPerOrder: 180,
    costPerOrder: 2200,
    unitCost: 1100,
  },
  {
    id: "5",
    date: "24/04/2020",
    customerName: "Charlie Brown",
    customerNumber: "0385 9601720",
    orderNumber: "#41527",
    unitsPerOrder: 920,
    costPerOrder: 11000,
    unitCost: 3800,
  },
];

export default function OrderTable() {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [sortKey, setSortKey] = useState<SortKey>("date");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [columns, setColumns] = useState<(keyof Order)[]>([
    "date",
    "customerName",
    "orderNumber",
    "unitsPerOrder",
    "costPerOrder",
    "unitCost",
  ]);
  const [newColumnName, setNewColumnName] = useState("");
  const [editingCell, setEditingCell] = useState<{
    id: string;
    key: keyof Order;
  } | null>(null);

  const sortedOrders = [...orders].sort((a, b) => {
    if (a[sortKey] < b[sortKey]) return sortOrder === "asc" ? -1 : 1;
    if (a[sortKey] > b[sortKey]) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  const handleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const addColumn = () => {
    if (newColumnName && !columns.includes(newColumnName as keyof Order)) {
      setColumns([...columns, newColumnName as keyof Order]);
      setOrders(orders.map((order) => ({ ...order, [newColumnName]: "" })));
      setNewColumnName("");
    }
  };

  const addRow = () => {
    const lastOrder = orders[orders.length - 1];
    const lastOrderNumber = parseInt(lastOrder?.orderNumber?.slice(1) ?? "");
    const newOrderNumber = `#${(lastOrderNumber + 1).toString().padStart(5, "0")}`;

    const newOrder: Order = {
      id: (orders.length + 1).toString(),
      date: new Date().toLocaleDateString("en-GB"),
      customerName: "",
      customerNumber: "",
      orderNumber: newOrderNumber,
      unitsPerOrder: 0,
      costPerOrder: 0,
      unitCost: 0,
    };
    setOrders([...orders, newOrder]);
  };

  const handleCellEdit = (id: string, key: keyof Order, value: string) => {
    setOrders(
      orders.map((order) =>
        order.id === id
          ? {
              ...order,
              [key]:
                key === "date"
                  ? value
                  : isNaN(Number(value))
                    ? value
                    : Number(value),
            }
          : order,
      ),
    );
    setEditingCell(null);
  };

  const formatCellValue = (value: string | number, column: keyof Order) => {
    if (column === "costPerOrder" || column === "unitCost") {
      return `$${Number(value).toLocaleString()}`;
    }
    return value;
  };

  return (
    <div className="container w-full py-16">
      <div className="mb-4 flex items-center justify-between">
        <Button
          onClick={addRow}
          className="bg-secondary text-secondary-foreground"
        >
          <Plus className="mr-2 size-4" />
          Add Row
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary text-primary-foreground">
              <Plus className="mr-2 size-4" />
              Add Column
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Column</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={newColumnName}
                  onChange={(e) => setNewColumnName(e.target.value)}
                  className="col-span-3"
                />
              </div>
            </div>
            <Button onClick={addColumn}>Add Column</Button>
          </DialogContent>
        </Dialog>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              {columns.map((column) => (
                <TableHead
                  key={column}
                  className="cursor-pointer"
                  onClick={() => handleSort(column)}
                >
                  {column.charAt(0).toUpperCase() + column.slice(1)}
                  {sortKey === column &&
                    (sortOrder === "asc" ? (
                      <ChevronUp className="ml-2 inline" />
                    ) : (
                      <ChevronDown className="ml-2 inline" />
                    ))}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedOrders.map((order) => (
              <TableRow key={order.id} className="hover:bg-muted/50">
                {columns.map((column) => (
                  <TableCell
                    key={`${order.id}-${column}`}
                    className="relative p-0"
                  >
                    <div className="group relative flex min-h-[40px] items-center p-4">
                      {editingCell?.id === order.id &&
                      editingCell?.key === column ? (
                        <Input
                          value={order[column].toString()}
                          onChange={(e) =>
                            handleCellEdit(order.id, column, e.target.value)
                          }
                          onBlur={() => setEditingCell(null)}
                          className="absolute inset-0 h-full"
                          autoFocus
                        />
                      ) : (
                        <>
                          {formatCellValue(order[column], column)}
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                            onClick={() =>
                              setEditingCell({ id: order.id, key: column })
                            }
                          >
                            <Edit2 className="size-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
