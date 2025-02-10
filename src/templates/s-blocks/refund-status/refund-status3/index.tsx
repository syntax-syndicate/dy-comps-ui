"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  ChevronRight,
  Home,
  Package,
  Star,
  Truck,
  Wallet,
  FileCheck,
  Eye,
  Gift,
  Settings,
  LogOut,
  ArrowLeft,
  X,
} from "lucide-react";

const Breadcrumb = () => (
  <nav className="mb-6 md:mb-8" aria-label="Breadcrumb">
    <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
      <li className="flex items-center">
        <a href="#" className="flex items-center gap-1 hover:text-primary">
          <Home className="h-4 w-4" />
          Home
        </a>
      </li>
      <ChevronRight className="h-4 w-4 opacity-50" />
      <li className="flex items-center">
        <a href="#" className="hover:text-primary">
          My account
        </a>
      </li>
      <ChevronRight className="h-4 w-4 opacity-50" />
      <li className="font-medium text-primary">Returns</li>
    </ol>
  </nav>
);

const UserDropdown = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button
        variant="outline"
        className="w-full justify-start gap-3 p-10 px-4"
      >
        <div className="relative h-10 w-10">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="User avatar"
            className="rounded-full object-cover"
            fill
            sizes="40px"
          />
        </div>
        <div className="text-left">
          <p className="font-semibold">Immi</p>
          <p className="text-sm text-muted-foreground">example@gmail.com</p>
        </div>
        <ChevronRight className="ml-auto h-4 w-4 opacity-50" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start" className="w-[294px] p-2">
      <DropdownMenuItem className="gap-3 px-3 py-2">
        <div className="relative h-9 w-9">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Company logo"
            className="rounded-lg object-cover"
            fill
            sizes="36px"
          />
        </div>
        <div>
          <p className="font-semibold">DY-Comps (Company)</p>
          <p className="text-sm text-muted-foreground">example@gmail.com</p>
        </div>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const SidebarLink = ({
  icon: Icon,
  children,
  href,
  variant = "default",
}: {
  icon: React.ElementType;
  children: React.ReactNode;
  href: string;
  variant?: "default" | "destructive";
}) => (
  <a
    href={href}
    className={`flex items-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
      variant === "destructive"
        ? "text-destructive hover:bg-destructive/10"
        : "text-foreground hover:bg-accent"
    }`}
  >
    <Icon
      className={`h-5 w-5 ${variant === "destructive" ? "text-destructive" : "text-muted-foreground"}`}
    />
    <span className="ml-3">{children}</span>
  </a>
);

const Sidebar = () => (
  <aside className="hidden h-full w-64 shrink-0 border-r lg:block">
    <div className="flex h-full flex-col gap-4 overflow-y-auto px-4 py-6">
      <UserDropdown />

      <div className="grid grid-cols-3 gap-2">
        {[
          { icon: FileCheck, label: "Profile", color: "text-primary" },
          { icon: Gift, label: "Gifts", color: "text-secondary" },
          { icon: Wallet, label: "Wallet", color: "text-accent" },
        ].map((item, index) => (
          <Button
            key={index}
            variant="outline"
            className="h-20 flex-col gap-2 py-4"
          >
            <item.icon className={`h-6 w-6 ${item.color}`} />
            <span className="text-xs font-medium">{item.label}</span>
          </Button>
        ))}
      </div>

      <ScrollArea className="flex-1">
        <nav className="space-y-1">
          {[
            { icon: Truck, label: "My orders" },
            { icon: Star, label: "Reviews" },
            { icon: Home, label: "Delivery addresses" },
            { icon: Eye, label: "Recently viewed" },
            { icon: Package, label: "Favourite items" },
          ].map((item, index) => (
            <SidebarLink key={index} icon={item.icon} href="#">
              {item.label}
            </SidebarLink>
          ))}
        </nav>

        <Separator className="my-4" />

        <nav className="space-y-1">
          <SidebarLink icon={Settings} href="#">
            Settings
          </SidebarLink>
          <SidebarLink icon={LogOut} href="#" variant="destructive">
            Log out
          </SidebarLink>
        </nav>
      </ScrollArea>
    </div>
  </aside>
);

const ProgressStep = ({
  icon: Icon,
  title,
  date,
  description,
  status,
}: {
  icon: React.ElementType;
  title: string;
  date: string;
  description?: string;
  status: "completed" | "current" | "upcoming";
}) => (
  <div
    className={`flex flex-col items-center gap-2 px-2 text-center ${
      status === "completed"
        ? "text-primary"
        : status === "current"
          ? "text-foreground"
          : "text-muted-foreground"
    }`}
  >
    <div className="rounded-full bg-accent p-2">
      <Icon className="h-6 w-6" />
    </div>
    <p className="text-sm font-medium">{title}</p>
    <p className="text-sm text-muted-foreground">{date}</p>
    {description && (
      <p className="text-xs text-muted-foreground">{description}</p>
    )}
  </div>
);

const RefundProgress = () => (
  <div className="my-8 space-y-6">
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <ProgressStep
        icon={Truck}
        title="Request Registered"
        date="22 Nov 2023: 12:27"
        description="Request confirmed"
        status="completed"
      />
      <ProgressStep
        icon={Package}
        title="Product Picked Up"
        date="24 Nov 2023: 10:47"
        description="Package in transit"
        status="completed"
      />
      <ProgressStep
        icon={FileCheck}
        title="Product Inspection"
        date="25 Nov 2023 - 28 Nov 2023"
        description="Estimated 3-4 business days"
        status="current"
      />
      <ProgressStep
        icon={Wallet}
        title="Refund Processed"
        date="29 Nov 2023"
        description="Estimated 1 business day"
        status="upcoming"
      />
    </div>
    <Progress value={50} className="h-2" />
  </div>
);

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <>
    <div className="flex items-center justify-between py-3">
      <span className="text-sm font-medium">{label}</span>
      <span className="max-w-[60%] text-right text-sm text-muted-foreground">
        {value}
      </span>
    </div>
    <Separator />
  </>
);

const RefundDetails = () => (
  <Card>
    <CardHeader className="pb-3">
      <CardTitle>Refund Request Details</CardTitle>
    </CardHeader>
    <CardContent className="space-y-2">
      <DetailRow label="Order date" value="20 November 2023" />
      <DetailRow
        label="Refund reason"
        value="Product arrived damaged and non-functional"
      />
      <DetailRow
        label="Package condition"
        value="Outer packaging intact, inner product damaged"
      />
      <DetailRow
        label="Refund method"
        value="Original payment method (Credit Card)"
      />
      <DetailRow label="Refund amount" value="$879.99" />
    </CardContent>
  </Card>
);

const CancelRefundModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle className="text-lg">Cancel Refund Request?</DialogTitle>
        <DialogDescription className="text-base">
          This action cannot be undone. Are you sure you want to cancel your
          refund request?
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button variant="outline" onClick={onClose}>
          Go Back
        </Button>
        <Button variant="destructive" onClick={onClose}>
          Confirm Cancellation
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default function RefundTrackingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-background py-6 md:py-8">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <Breadcrumb />

        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Track Refund <span className="text-primary">#RF23112401</span>
          </h1>
        </div>

        <div className="gap-6 lg:flex">
          <Sidebar />

          <main className="flex-1">
            <RefundProgress />
            <RefundDetails />

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Account
              </Button>
              <Button
                variant="destructive"
                className="gap-2"
                onClick={() => setIsModalOpen(true)}
              >
                <X className="h-4 w-4" />
                Cancel Refund
              </Button>
            </div>
          </main>
        </div>

        <CancelRefundModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
}
