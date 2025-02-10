"use client";

import * as React from "react";
import {
  Search,
  Filter,
  Settings2,
  MoreHorizontal,
  ExternalLink,
  Play,
  Pause,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface User {
  id: string;
  name: string;
  image: string;
}

interface Task {
  id: string;
  name: string;
  status: "In progress" | "Completed" | "In review" | "Pending";
  users: User[];
  progress: number;
  timeTracked: string;
  totalTime: string;
  isTimeRunning?: boolean;
  dueDate: string;
}

const users: User[] = [
  {
    id: "1",
    name: "User 1",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: "2",
    name: "User 2",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: "3",
    name: "User 3",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: "4",
    name: "User 4",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: "5",
    name: "User 5",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

const tasks: Task[] = [
  {
    id: "11",
    name: "Develop API integration for payment gateway",
    status: "In progress",
    users: [...users.slice(0, 3)],
    progress: 40,
    timeTracked: "2:30",
    totalTime: "10:00",
    isTimeRunning: true,
    dueDate: "30 Nov 2025",
  },
  {
    id: "12",
    name: "Conduct user testing for new feature",
    status: "Pending",
    users: users.slice(0, 2),
    progress: 0,
    timeTracked: "0:00",
    totalTime: "5:00",
    isTimeRunning: false,
    dueDate: "05 Dec 2025",
  },
  {
    id: "13",
    name: "Optimize database queries",
    status: "Pendings",
    users: [...users.slice(0, 3), ...users.slice(0, 2)],
    progress: 60,
    timeTracked: "4:45",
    totalTime: "8:00",
    isTimeRunning: true,
    dueDate: "25 Nov 2025",
  },
  {
    id: "14",
    name: "Write documentation for new API",
    status: "Completed",
    users: users.slice(0, 2),
    progress: 100,
    timeTracked: "6:00",
    totalTime: "6:00",
    dueDate: "20 Nov 2025",
  },
  {
    id: "15",
    name: "Design onboarding flow for new users",
    status: "In review",
    users: users.slice(0, 3),
    progress: 100,
    timeTracked: "5:30",
    totalTime: "5:30",
    dueDate: "28 Nov 2025",
  },
  {
    id: "16",
    name: "Set up CI/CD pipeline",
    status: "In progress",
    users: [...users.slice(0, 3)],
    progress: 30,
    timeTracked: "3:00",
    totalTime: "10:00",
    isTimeRunning: true,
    dueDate: "01 Dec 2025",
  },
  {
    id: "17",
    name: "Create marketing campaign for product launch",
    status: "Pending",
    users: users.slice(0, 2),
    progress: 0,
    timeTracked: "0:00",
    totalTime: "12:00",
    isTimeRunning: false,
    dueDate: "10 Dec 2025",
  },
  {
    id: "18",
    name: "Refactor legacy codebase",
    status: "In progress",
    users: [...users.slice(0, 3), ...users.slice(0, 2)],
    progress: 70,
    timeTracked: "6:15",
    totalTime: "8:00",
    isTimeRunning: true,
    dueDate: "27 Nov 2025",
  },
  {
    id: "19",
    name: "Prepare quarterly performance report",
    status: "Completed",
    users: users.slice(0, 2),
    progress: 100,
    timeTracked: "4:00",
    totalTime: "4:00",
    dueDate: "15 Nov 2025",
  },
  {
    id: "20",
    name: "Implement dark mode for the application",
    status: "In progress",
    users: [...users.slice(0, 3)],
    progress: 50,
    timeTracked: "4:00",
    totalTime: "8:00",
    isTimeRunning: true,
    dueDate: "29 Nov 2025",
  },
];

function getStatusColor(status: Task["status"]) {
  switch (status) {
    case "Completed":
      return "bg-success/10 text-success border-success/20 hover:bg-success/10";
    case "In progress":
      return "bg-primary/10 text-primary border-primary/20 hover:bg-primary/10";
    case "In review":
      return "bg-warning/10 text-warning border-warning/20 hover:bg-warning/10";
    default:
      return "";
  }
}

function getProgressColor(progress: number) {
  if (progress === 100) return "bg-success";
  if (progress >= 75) return "bg-primary";
  if (progress >= 50) return "bg-warning";
  return "bg-destructive";
}

export default function TaskManagement() {
  const [filter, setFilter] = React.useState("all");
  const [search, setSearch] = React.useState("");

  const filteredTasks = React.useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch = task.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesFilter =
        filter === "all" ||
        (filter === "completed" && task.status === "Completed") ||
        (filter === "in_progress" && task.status === "In progress") ||
        (filter === "in_review" && task.status === "In review");
      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  return (
    <div className="container py-10">
      <h1 className="mb-6 text-2xl font-semibold">All Tasks</h1>

      <div className="mb-6 flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline">
            <Settings2 className="mr-2 h-4 w-4" />
            Configurations
          </Button>
          <Button>Add new task</Button>
        </div>

        <RadioGroup
          className="flex gap-4"
          defaultValue="all"
          onValueChange={setFilter}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="all" />
            <label htmlFor="all">All</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="completed" id="completed" />
            <label htmlFor="completed">Completed tasks</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="in_progress" id="in_progress" />
            <label htmlFor="in_progress">Tasks in progress</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="in_review" id="in_review" />
            <label htmlFor="in_review">Tasks in review</label>
          </div>
        </RadioGroup>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox />
              </TableHead>
              <TableHead>TASK</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead>USERS</TableHead>
              <TableHead>PROGRESS</TableHead>
              <TableHead>PREVIEW</TableHead>
              <TableHead>TIME TRACKING</TableHead>
              <TableHead>DUE DATE</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">{task.name}</TableCell>
                <TableCell className="w-max">
                  <Badge
                    variant="outline"
                    className={
                      getStatusColor(task.status) + `shrink-0 whitespace-nowrap`
                    }
                  >
                    {task.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex -space-x-2">
                    {task.users.slice(0, 3).map((user, i) => (
                      <Avatar
                        key={user.id}
                        className="border-2 border-background"
                      >
                        <AvatarImage src={user.image} alt={user.name} />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                      </Avatar>
                    ))}
                    {task.users.length > 3 && (
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted text-sm text-muted-foreground">
                        +{task.users.length - 3}
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell className="w-[200px]">
                  <div className="space-y-1">
                    <div className="rounded-full border">
                      {" "}
                      <Progress
                        value={task.progress}
                        className={getProgressColor(task.progress)}
                      />
                    </div>

                    <span className="text-sm text-muted-foreground">
                      {task.progress}%
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="link" className="p-0 text-primary">
                    Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="tabular-nums">
                      {task.timeTracked}/{task.totalTime}
                    </span>
                    {task.isTimeRunning ? (
                      <Badge
                        variant="outline"
                        className="border-destructive/20 bg-destructive/10 text-destructive hover:bg-destructive/10"
                      >
                        <Pause className="h-3 w-3" />
                      </Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        className="bg-success/10 text-success border-success/20 hover:bg-success/10"
                      >
                        <Play className="h-3 w-3" />
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {task.dueDate}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
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
          <Button variant="outline" className="" size="sm">
            Previous
          </Button>
          {[1, 2, 3, "...", 100].map((page, i) => (
            <Button
              key={i}
              variant={page === 1 ? "default" : "outline"}
              size="sm"
              className={page === "..." ? "pointer-events-none" : ""}
            >
              {page}
            </Button>
          ))}
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
