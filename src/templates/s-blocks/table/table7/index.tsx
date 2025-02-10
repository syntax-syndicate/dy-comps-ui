"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { MoreHorizontal, Search } from "lucide-react";

interface Invoice {
  id: string;
  date: string;
  invoiceNumber: string;
  customer: {
    name: string;
    avatar: string;
  };
  amount: number;
  status: string;
  category: string;
}

const initialInvoices: Invoice[] = [
  {
    id: "1",
    date: "06/02/2020",
    invoiceNumber: "IDO-2985-2",
    customer: {
      name: "Miracle Botos",
      avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    amount: 2100.0,
    status: "Approved",
    category: "Business",
  },
  {
    id: "2",
    date: "06/02/2020",
    invoiceNumber: "IDO-2985-3",
    customer: {
      name: "Tiana Levin",
      avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    amount: 2100.0,
    status: "Approved",
    category: "Business",
  },
  {
    id: "3",
    date: "06/02/2020",
    invoiceNumber: "IDO-2985-4",
    customer: {
      name: "Jordyn Korsgaard",
      avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    amount: 2100.0,
    status: "Approved",
    category: "Business",
  },
  {
    id: "4",
    date: "06/02/2020",
    invoiceNumber: "IDO-2985-5",
    customer: {
      name: "Kierra Curtis",
      avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    amount: 2100.0,
    status: "Approved",
    category: "Business",
  },
  {
    id: "5",
    date: "06/02/2020",
    invoiceNumber: "IDO-2985-6",
    customer: {
      name: "Terry Ekstrom Bothman",
      avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    amount: 2100.0,
    status: "Pending",
    category: "Business",
  },
];

export default function InvoiceDashboard() {
  const [invoices, setInvoices] = useState<Invoice[]>(initialInvoices);
  const [searchTerm, setSearchTerm] = useState("");
  const [newInvoice, setNewInvoice] = useState<Partial<Invoice>>({
    date: new Date().toISOString().split("T")[0],
    invoiceNumber: `INV-${Math.floor(Math.random() * 10000)}`,
    status: "Pending",
  });
  const [editingInvoice, setEditingInvoice] = useState<Invoice | null>(null);

  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ??
      invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const addInvoice = (e: React.FormEvent) => {
    e.preventDefault();
    setInvoices([
      ...invoices,
      { ...newInvoice, id: (invoices.length + 1).toString() } as Invoice,
    ]);
    setNewInvoice({
      date: new Date().toISOString().split("T")[0],
      invoiceNumber: `INV-${Math.floor(Math.random() * 10000)}`,
      status: "Pending",
    });
  };

  const updateInvoice = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingInvoice) {
      setInvoices(
        invoices.map((inv) =>
          inv.id === editingInvoice.id ? editingInvoice : inv,
        ),
      );
      setEditingInvoice(null);
    }
  };

  return (
    <div className="container py-16">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-foreground">Invoices</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Input
              className="w-[300px] pl-8"
              placeholder="Search"
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                New Invoice
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create New Invoice</DialogTitle>
              </DialogHeader>
              <form onSubmit={addInvoice} className="space-y-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="customerName">Customer Name</Label>
                  <Input
                    id="customerName"
                    value={newInvoice.customer?.name ?? ""}
                    onChange={(e) =>
                      setNewInvoice({
                        ...newInvoice,
                        customer: {
                          ...newInvoice.customer,
                          name: e.target.value,
                          avatar:
                            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
                        },
                      })
                    }
                    required
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="amount">Amount</Label>
                  <Input
                    id="amount"
                    type="number"
                    value={newInvoice.amount ?? ""}
                    onChange={(e) =>
                      setNewInvoice({
                        ...newInvoice,
                        amount: parseFloat(e.target.value),
                      })
                    }
                    required
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    value={newInvoice.category ?? ""}
                    onChange={(e) =>
                      setNewInvoice({ ...newInvoice, category: e.target.value })
                    }
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Create Invoice
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Invoice #</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredInvoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell>{invoice.date}</TableCell>
              <TableCell>{invoice.invoiceNumber}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="size-8">
                    <AvatarImage
                      src={invoice.customer.avatar}
                      alt={invoice.customer.name}
                    />
                    <AvatarFallback>
                      {invoice.customer.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  {invoice.customer.name}
                </div>
              </TableCell>
              <TableCell>${invoice.amount.toFixed(2)}</TableCell>
              <TableCell>
                <Badge
                  variant="secondary"
                  className={
                    invoice.status === "Approved"
                      ? "bg-primary/10 text-primary hover:bg-primary/20"
                      : "bg-destructive/10 text-destructive hover:bg-destructive/20"
                  }
                >
                  {invoice.status}
                </Badge>
              </TableCell>
              <TableCell>{invoice.category}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        className="h-8 px-2 text-muted-foreground"
                      >
                        View
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Invoice Details</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <strong>Invoice Number:</strong>{" "}
                          {invoice.invoiceNumber}
                        </div>
                        <div>
                          <strong>Date:</strong> {invoice.date}
                        </div>
                        <div>
                          <strong>Customer:</strong> {invoice.customer.name}
                        </div>
                        <div>
                          <strong>Amount:</strong> ${invoice.amount.toFixed(2)}
                        </div>
                        <div>
                          <strong>Status:</strong> {invoice.status}
                        </div>
                        <div>
                          <strong>Category:</strong> {invoice.category}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8 text-muted-foreground"
                      >
                        <MoreHorizontal className="size-4" />
                        <span className="sr-only">Edit invoice</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit Invoice</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={updateInvoice} className="space-y-4">
                        <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor="editCustomerName">
                            Customer Name
                          </Label>
                          <Input
                            id="editCustomerName"
                            value={editingInvoice?.customer.name ?? ""}
                            onChange={(e) =>
                              setEditingInvoice(
                                editingInvoice
                                  ? {
                                      ...editingInvoice,
                                      customer: {
                                        ...editingInvoice.customer,
                                        name: e.target.value,
                                      },
                                    }
                                  : null,
                              )
                            }
                            required
                          />
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor="editAmount">Amount</Label>
                          <Input
                            id="editAmount"
                            type="number"
                            value={editingInvoice?.amount ?? ""}
                            onChange={(e) =>
                              setEditingInvoice(
                                editingInvoice
                                  ? {
                                      ...editingInvoice,
                                      amount: parseFloat(e.target.value),
                                    }
                                  : null,
                              )
                            }
                            required
                          />
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor="editCategory">Category</Label>
                          <Input
                            id="editCategory"
                            value={editingInvoice?.category ?? ""}
                            onChange={(e) =>
                              setEditingInvoice(
                                editingInvoice
                                  ? {
                                      ...editingInvoice,
                                      category: e.target.value,
                                    }
                                  : null,
                              )
                            }
                            required
                          />
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor="editStatus">Status</Label>
                          <Input
                            id="editStatus"
                            value={editingInvoice?.status ?? ""}
                            onChange={(e) =>
                              setEditingInvoice(
                                editingInvoice
                                  ? {
                                      ...editingInvoice,
                                      status: e.target.value,
                                    }
                                  : null,
                              )
                            }
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full">
                          Update Invoice
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
