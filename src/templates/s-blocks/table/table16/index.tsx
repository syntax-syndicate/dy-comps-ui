"use client";

import * as React from "react";
import {
  MoreHorizontal,
  Settings2,
  ChevronDown,
  ArrowUp,
  ArrowDown,
  Facebook,
  Twitter,
  Instagram,
  Globe,
} from "lucide-react";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface User {
  id: string;
  name: string;
  image: string;
  role: "Administrator" | "Moderator" | "Contributor";
  status: "Online" | "Offline";
  socialProfiles: {
    facebook?: boolean;
    twitter?: boolean;
    instagram?: boolean;
    website?: boolean;
  };
  featured: boolean;
  reputation: number;
  reputationTrend: "rising" | "falling";
  lastActive: string;
  additionalConnections?: number;
}

const users: User[] = [
  {
    id: "1",
    name: "Alex Morgan",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    role: "Administrator",
    status: "Online",
    socialProfiles: {
      facebook: true,
      twitter: true,
      instagram: true,
      website: true,
    },
    featured: false,
    reputation: 4.7,
    reputationTrend: "rising",
    lastActive: "2 hours ago",
  },
  {
    id: "2",
    name: "Sam Taylor",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    role: "Contributor",
    status: "Online",
    socialProfiles: {
      facebook: true,
      twitter: true,
      instagram: true,
      website: true,
    },
    featured: true,
    reputation: 3.9,
    reputationTrend: "falling",
    lastActive: "5 minutes ago",
  },
  {
    id: "3",
    name: "Jordan Lee",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    role: "Moderator",
    status: "Offline",
    socialProfiles: {
      facebook: true,
      twitter: true,
      instagram: true,
    },
    featured: false,
    reputation: 4.8,
    reputationTrend: "rising",
    lastActive: "1 day ago",
  },
  {
    id: "4",
    name: "Casey Kim",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    role: "Moderator",
    status: "Online",
    socialProfiles: {
      facebook: true,
      twitter: true,
      instagram: true,
      website: true,
    },
    featured: true,
    reputation: 5.0,
    reputationTrend: "rising",
    lastActive: "Just now",
    additionalConnections: 2,
  },
  {
    id: "5",
    name: "Riley Johnson",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    role: "Contributor",
    status: "Online",
    socialProfiles: {
      facebook: true,
      twitter: true,
      instagram: true,
      website: true,
    },
    featured: false,
    reputation: 4.2,
    reputationTrend: "falling",
    lastActive: "3 hours ago",
  },
];

function getRoleBadgeVariant(role: User["role"]) {
  switch (role) {
    case "Administrator":
      return "bg-primary/10 text-primary border-primary/20";
    case "Moderator":
      return "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20";
    default:
      return "bg-secondary text-secondary-foreground";
  }
}

export default function UserManagement() {
  const [selectedUsers, setSelectedUsers] = React.useState<string[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (value: string) => {
    setRowsPerPage(Number(value));
    setCurrentPage(1);
  };

  return (
    <div className="container w-full py-10">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div>
            <span className="text-muted-foreground">Community Members: </span>
            <span className="font-semibold">99999</span>
          </div>
          <div>
            <span className="text-muted-foreground">Active Discussions: </span>
            <span className="font-semibold">4000</span>
          </div>
        </div>
        <Button variant="outline">
          <Settings2 className="mr-2 h-4 w-4" />
          Customize View
        </Button>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <Button>Invite New Member</Button>
        <div className="flex gap-2">
          <Button variant="outline" className="text-muted-foreground">
            Mute Selected
          </Button>
          <Button variant="outline" className="text-muted-foreground">
            Archive Selected
          </Button>
          <Button variant="outline" className="text-destructive">
            Remove Selected
          </Button>
        </div>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedUsers.length === users.length}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedUsers(users.map((user) => user.id));
                    } else {
                      setSelectedUsers([]);
                    }
                  }}
                />
              </TableHead>
              <TableHead>MEMBER</TableHead>
              <TableHead>ROLE</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead>SOCIAL PRESENCE</TableHead>
              <TableHead>FEATURED</TableHead>
              <TableHead>REPUTATION</TableHead>
              <TableHead>LAST ACTIVE</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedUsers.includes(user.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedUsers([...selectedUsers, user.id]);
                      } else {
                        setSelectedUsers(
                          selectedUsers.filter((id) => id !== user.id),
                        );
                      }
                    }}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={user.image} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{user.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={getRoleBadgeVariant(user.role)}
                  >
                    {user.role === "Administrator" && (
                      <svg
                        viewBox="0 0 24 24"
                        className="mr-1 h-3 w-3 fill-current"
                      >
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v5.7c0 4.83-3.4 9.36-7 10.8-3.6-1.44-7-5.97-7-10.8v-5.7l7-3.12z" />
                      </svg>
                    )}
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      user.status === "Online"
                        ? "bg-success/10 text-success border-success/20"
                        : "border-destructive/20 bg-destructive/10 text-destructive"
                    }
                  >
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {user.socialProfiles.facebook && (
                      <Facebook className="h-4 w-4 text-muted-foreground" />
                    )}
                    {user.socialProfiles.twitter && (
                      <Twitter className="h-4 w-4 text-muted-foreground" />
                    )}
                    {user.socialProfiles.instagram && (
                      <Instagram className="h-4 w-4 text-muted-foreground" />
                    )}
                    {user.socialProfiles.website && (
                      <Globe className="h-4 w-4 text-muted-foreground" />
                    )}
                    {user.additionalConnections && (
                      <Badge variant="secondary" className="ml-1">
                        +{user.additionalConnections}
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <Switch checked={user.featured} />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    {user.reputationTrend === "rising" ? (
                      <ArrowUp className="text-success h-4 w-4" />
                    ) : (
                      <ArrowDown className="h-4 w-4 text-destructive" />
                    )}
                    {user.reputation}
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {user.lastActive}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                      <DropdownMenuItem>View Activity</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        Remove Member
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            Members per page
          </span>
          <Select
            value={rowsPerPage.toString()}
            onValueChange={handleRowsPerPageChange}
          >
            <SelectTrigger className="w-16">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-sm text-muted-foreground">
            {(currentPage - 1) * rowsPerPage + 1}-
            {Math.min(currentPage * rowsPerPage, users.length)} of{" "}
            {users.length}
          </span>
        </div>
        <div className="flex gap-1">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          {[1, 2, 3, "...", Math.ceil(users.length / rowsPerPage)].map(
            (page, i) => (
              <Button
                key={i}
                variant={page === currentPage ? "default" : "outline"}
                size="sm"
                className={page === "..." ? "pointer-events-none" : ""}
                onClick={() =>
                  typeof page === "number" && handlePageChange(page)
                }
              >
                {page}
              </Button>
            ),
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(users.length / rowsPerPage)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
