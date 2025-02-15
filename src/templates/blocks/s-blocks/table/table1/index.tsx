"use client";

import * as React from "react";
import {
  MoreHorizontal,
  LinkIcon,
  Plus,
  Edit2,
  Trash2,
  AlertTriangle,
} from "lucide-react";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

type TaskStatus = "pending" | "in-progress" | "completed";
type TaskPriority = "normal" | "urgent";

type Task = {
  id: number;
  title: string;
  hasLink: boolean;
  priority: TaskPriority;
  created: string;
  comments: string;
  updated: string;
  dueDate: string;
  dueToday: boolean;
  status: TaskStatus;
};

export default function TaskList() {
  const [tasks, setTasks] = React.useState<Task[]>([
    {
      id: 1,
      title: "Marketing Keynote Presentation",
      hasLink: true,
      priority: "urgent",
      created: "04/07",
      comments: "23",
      updated: "04/07",
      dueDate: "Due today at 18:00",
      dueToday: true,
      status: "pending",
    },
    {
      id: 2,
      title: "UX Wireframes",
      hasLink: false,
      priority: "normal",
      created: "04/07",
      comments: "23",
      updated: "04/07",
      dueDate: "Due on 21.02.21",
      dueToday: false,
      status: "in-progress",
    },
  ]);

  const [editingTask, setEditingTask] = React.useState<Task | null>(null);
  const [newTask, setNewTask] = React.useState<Partial<Task>>({});
  const [isAddingTask, setIsAddingTask] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<TaskStatus | "all">("all");

  const handleAddTask = () => {
    if (newTask.title) {
      const task: Task = {
        id: tasks.length + 1,
        title: newTask.title,
        hasLink: false,
        priority: newTask.priority ?? "normal",
        created: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
        }),
        comments: "0",
        updated: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
        }),
        dueDate: newTask.dueDate ?? "Not set",
        dueToday: false,
        status: "pending",
      };
      setTasks([...tasks, task]);
      setNewTask({});
      setIsAddingTask(false);
    }
  };

  const handleEditTask = (updatedTask: Task) => {
    setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
    setEditingTask(null);
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleStatusChange = (id: number, status: TaskStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status,
              updated: new Date().toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
              }),
            }
          : task,
      ),
    );
  };

  const handlePriorityChange = (id: number, priority: TaskPriority) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              priority,
              updated: new Date().toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
              }),
            }
          : task,
      ),
    );
  };

  const handleDueDateChange = (id: number, dueDate: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              dueDate: dueDate
                ? `Due on ${new Date(dueDate).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "2-digit",
                  })}`
                : "Not set",
              dueToday: dueDate
                ? new Date(dueDate).toDateString() === new Date().toDateString()
                : false,
              updated: new Date().toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
              }),
            }
          : task,
      ),
    );
  };

  const filteredTasks =
    activeTab === "all"
      ? tasks
      : tasks.filter((task) => task.status === activeTab);

  return (
    <section className="container mx-auto w-full space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort By:</span>
          <Select defaultValue="latest">
            <SelectTrigger className="w-[100px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TaskStatus | "all")}
        className="w-full"
      >
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="flex justify-end">
        <Dialog open={isAddingTask} onOpenChange={setIsAddingTask}>
          <DialogTrigger asChild>
            <Button className="bg-primary text-primary-foreground">
              <Plus className="mr-2 size-4" />
              Add Task
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Task</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  value={newTask.title ?? ""}
                  onChange={(e) =>
                    setNewTask({ ...newTask, title: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="priority" className="text-right">
                  Priority
                </Label>
                <Select
                  value={newTask.priority ?? "normal"}
                  onValueChange={(value: TaskPriority) =>
                    setNewTask({ ...newTask, priority: value })
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="dueDate" className="text-right">
                  Due Date
                </Label>
                <Input
                  id="dueDate"
                  type="date"
                  value={newTask.dueDate ?? ""}
                  onChange={(e) =>
                    setNewTask({ ...newTask, dueDate: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>
            </div>
            <Button onClick={handleAddTask}>Add Task</Button>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12"></TableHead>
            <TableHead>Task</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Comments</TableHead>
            <TableHead>Updated</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>
                <Checkbox
                  checked={task.status === "completed"}
                  onCheckedChange={(checked) =>
                    handleStatusChange(
                      task.id,
                      checked ? "completed" : "pending",
                    )
                  }
                />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {editingTask?.id === task.id ? (
                    <Input
                      value={editingTask.title}
                      onChange={(e) =>
                        setEditingTask({
                          ...editingTask,
                          title: e.target.value,
                        })
                      }
                      onBlur={() => handleEditTask(editingTask)}
                    />
                  ) : (
                    <>
                      {task.title}
                      {task.hasLink && (
                        <LinkIcon className="size-4 text-muted-foreground" />
                      )}
                    </>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <Select
                  value={task.priority}
                  onValueChange={(value: TaskPriority) =>
                    handlePriorityChange(task.id, value)
                  }
                >
                  <SelectTrigger className="w-[100px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="urgent">
                      <div className="flex items-center">
                        <AlertTriangle className="mr-2 size-4 text-destructive" />
                        Urgent
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                <Select
                  value={task.status}
                  onValueChange={(value: TaskStatus) =>
                    handleStatusChange(task.id, value)
                  }
                >
                  <SelectTrigger className="w-[130px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>{task.created}</TableCell>
              <TableCell>{task.comments}</TableCell>
              <TableCell>{task.updated}</TableCell>
              <TableCell>
                {editingTask?.id === task.id ? (
                  <Input
                    type="date"
                    value={
                      task.dueDate.includes("Due on")
                        ? task.dueDate
                            .replace("Due on ", "")
                            .split(".")
                            .reverse()
                            .join("-")
                        : ""
                    }
                    onChange={(e) => {
                      setEditingTask({
                        ...editingTask,
                        dueDate: e.target.value,
                      });
                    }}
                    onBlur={() => {
                      if (editingTask) {
                        handleDueDateChange(task.id, editingTask.dueDate);
                        setEditingTask(null);
                      }
                    }}
                  />
                ) : (
                  <span className={task.dueToday ? "text-destructive" : ""}>
                    {task.dueDate}
                  </span>
                )}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onSelect={() => setEditingTask(task)}>
                        <Edit2 className="mr-2 size-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onSelect={() => handleDeleteTask(task.id)}
                      >
                        <Trash2 className="mr-2 size-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
