"use client";

import * as React from "react";
import { LayoutGrid, List, MoreHorizontal, Search, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface User {
  id: number;
  name: string;
  avatar: string;
  age: number;
  created: string;
  jobTitle: string;
  status: "Approved" | "Pending";
}

const initialUsers: User[] = [
  {
    id: 1,
    name: "Miracle Botos",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    age: 28,
    created: "06/02/2020",
    jobTitle: "Product Designer",
    status: "Approved",
  },
  {
    id: 2,
    name: "Tiana Levin",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    age: 28,
    created: "06/02/2020",
    jobTitle: "Product Designer",
    status: "Approved",
  },
  {
    id: 3,
    name: "Jordyn Korsgaard",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    age: 28,
    created: "06/02/2020",
    jobTitle: "Product Designer",
    status: "Pending",
  },
  {
    id: 4,
    name: "Kierra Curtis",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    age: 28,
    created: "06/02/2020",
    jobTitle: "Product Designer",
    status: "Approved",
  },
  {
    id: 5,
    name: "Terry Ekstrom Bothman",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    age: 28,
    created: "06/02/2020",
    jobTitle: "Product Designer",
    status: "Approved",
  },
  {
    id: 6,
    name: "Corey Vetrovs",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    age: 28,
    created: "06/02/2020",
    jobTitle: "Product Designer",
    status: "Pending",
  },
  {
    id: 7,
    name: "Zain George",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    age: 28,
    created: "06/02/2020",
    jobTitle: "Product Designer",
    status: "Approved",
  },
  {
    id: 8,
    name: "Angel Saris",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    age: 28,
    created: "06/02/2020",
    jobTitle: "Product Designer",
    status: "Pending",
  },
];

export default function UserManagement() {
  const [users, setUsers] = React.useState<User[]>(initialUsers);
  const [viewType, setViewType] = React.useState<"list" | "grid">("list");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filterType, setFilterType] = React.useState("all");
  const [isAddUserDialogOpen, setIsAddUserDialogOpen] = React.useState(false);
  const [isEditUserDialogOpen, setIsEditUserDialogOpen] = React.useState(false);
  const [editingUser, setEditingUser] = React.useState<User | null>(null);
  const { toast } = useToast();

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterType === "all" ||
        (filterType === "approved" && user.status === "Approved") ||
        (filterType === "pending" && user.status === "Pending")),
  );

  const handleAddUser = (newUser: Omit<User, "id">) => {
    const id = Math.max(...users.map((u) => u.id)) + 1;
    setUsers([...users, { ...newUser, id }]);
    setIsAddUserDialogOpen(false);
    toast({
      title: "User Added",
      description: `${newUser.name} has been added successfully.`,
    });
  };

  const handleEditUser = (updatedUser: User) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user)),
    );
    setIsEditUserDialogOpen(false);
    setEditingUser(null);
    toast({
      title: "User Updated",
      description: `${updatedUser.name}'s information has been updated.`,
    });
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
    toast({
      title: "User Deleted",
      description: "The user has been removed from the system.",
      variant: "destructive",
    });
  };

  return (
    <div className="container py-16">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-foreground">Users</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-lg bg-secondary p-1">
            <Button
              variant={viewType === "list" ? "secondary" : "ghost"}
              size="icon"
              className="size-8"
              onClick={() => setViewType("list")}
            >
              <List className="size-4" />
            </Button>
            <Button
              variant={viewType === "grid" ? "secondary" : "ghost"}
              size="icon"
              className="size-8"
              onClick={() => setViewType("grid")}
            >
              <LayoutGrid className="size-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
              <Input
                placeholder="Search"
                className="w-[240px] pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-[140px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Users</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => setIsAddUserDialogOpen(true)}
          >
            Add User
          </Button>
        </div>
      </div>
      {viewType === "list" ? (
        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[60px]">#</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Job Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="size-8">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{user.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>{user.created}</TableCell>
                  <TableCell>{user.jobTitle}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        user.status === "Approved" ? "default" : "secondary"
                      }
                      className={
                        user.status === "Approved"
                          ? "bg-blue-50 text-blue-600 hover:bg-blue-50 hover:text-blue-600"
                          : "bg-orange-50 text-orange-600 hover:bg-orange-50 hover:text-orange-600"
                      }
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => {
                          setEditingUser(user);
                          setIsEditUserDialogOpen(true);
                        }}
                      >
                        Edit
                      </Button>
                      <Button variant="secondary" size="sm">
                        Call
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="size-8">
                          <MoreHorizontal className="size-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onSelect={() => {
                            setEditingUser(user);
                            setIsEditUserDialogOpen(true);
                          }}
                        >
                          Edit user
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onSelect={() => handleDeleteUser(user.id)}
                        >
                          Delete user
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="rounded-lg bg-card text-card-foreground shadow-sm"
            >
              <div className="p-6">
                <div className="mb-4 flex items-center gap-4">
                  <Avatar className="size-10">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{user.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {user.jobTitle}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Age:</span>
                    <span className="text-sm">{user.age}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Created:
                    </span>
                    <span className="text-sm">{user.created}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Status:
                    </span>
                    <Badge
                      variant={
                        user.status === "Approved" ? "default" : "secondary"
                      }
                      className={
                        user.status === "Approved"
                          ? "bg-blue-50 text-blue-600 hover:bg-blue-50 hover:text-blue-600"
                          : "bg-orange-50 text-orange-600 hover:bg-orange-50 hover:text-orange-600"
                      }
                    >
                      {user.status}
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-b-lg bg-muted/50 px-6 py-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setEditingUser(user);
                    setIsEditUserDialogOpen(true);
                  }}
                >
                  Edit
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8">
                      <MoreHorizontal className="size-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onSelect={() => {
                        setEditingUser(user);
                        setIsEditUserDialogOpen(true);
                      }}
                    >
                      Edit user
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onSelect={() => handleDeleteUser(user.id)}
                    >
                      Delete user
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      )}
      <Dialog open={isAddUserDialogOpen} onOpenChange={setIsAddUserDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
            <DialogDescription>
              Fill in the details to add a new user.
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const newUser: Omit<User, "id"> = {
                name: formData.get("name") as string,
                avatar:
                  "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
                age: parseInt(formData.get("age") as string),
                created: new Date().toLocaleDateString(),
                jobTitle: formData.get("jobTitle") as string,
                status: formData.get("status") as "Approved" | "Pending",
              };
              handleAddUser(newUser);
            }}
          >
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" name="name" className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="age" className="text-right">
                  Age
                </Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="jobTitle" className="text-right">
                  Job Title
                </Label>
                <Input
                  id="jobTitle"
                  name="jobTitle"
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="status" className="text-right">
                  Status
                </Label>
                <Select name="status" defaultValue="Pending">
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Approved">Approved</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Add User</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog
        open={isEditUserDialogOpen}
        onOpenChange={setIsEditUserDialogOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
            <DialogDescription>
              Make changes to the user&apos;s information.
            </DialogDescription>
          </DialogHeader>
          {editingUser && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const updatedUser: User = {
                  ...editingUser,
                  name: formData.get("name") as string,
                  age: parseInt(formData.get("age") as string),
                  jobTitle: formData.get("jobTitle") as string,
                  status: formData.get("status") as "Approved" | "Pending",
                };
                handleEditUser(updatedUser);
              }}
            >
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="edit-name"
                    name="name"
                    defaultValue={editingUser.name}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-age" className="text-right">
                    Age
                  </Label>
                  <Input
                    id="edit-age"
                    name="age"
                    type="number"
                    defaultValue={editingUser.age}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-jobTitle" className="text-right">
                    Job Title
                  </Label>
                  <Input
                    id="edit-jobTitle"
                    name="jobTitle"
                    defaultValue={editingUser.jobTitle}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-status" className="text-right">
                    Status
                  </Label>
                  <Select name="status" defaultValue={editingUser.status}>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select a status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Approved">Approved</SelectItem>
                      <SelectItem value="Pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save Changes</Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
