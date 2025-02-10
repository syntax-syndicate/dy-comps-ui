"use client";

import { useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  ChevronDown,
  Filter,
  LayoutGrid,
  List,
  MoreVertical,
  Plus,
  Search,
  Share,
  Trash2,
} from "lucide-react";

type Project = {
  id: number;
  name: string;
  type: string;
  status: "Assigned" | "Pending";
  priority: "High" | "Medium" | "Low";
  owner: string;
  createdOn: string;
  dueOn: string;
};

export default function ProjectManagement() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      name: "Software Development",
      type: "Development",
      status: "Assigned",
      priority: "High",
      owner: "Jason Smith",
      createdOn: "6/28/2020",
      dueOn: "9/28/2020",
    },
    {
      id: 2,
      name: "Jade's website",
      type: "Design",
      status: "Pending",
      priority: "Medium",
      owner: "Jason Smith",
      createdOn: "6/28/2020",
      dueOn: "9/28/2020",
    },
    {
      id: 3,
      name: "Marketing Visuals",
      type: "Marketing",
      status: "Assigned",
      priority: "Low",
      owner: "Jason Smith",
      createdOn: "6/28/2020",
      dueOn: "9/28/2020",
    },
    // Repeated entries to match the screenshot
    {
      id: 4,
      name: "Jade's website",
      type: "Design",
      status: "Pending",
      priority: "Medium",
      owner: "Jason Smith",
      createdOn: "6/28/2020",
      dueOn: "9/28/2020",
    },
    {
      id: 5,
      name: "Marketing Visuals",
      type: "Marketing",
      status: "Assigned",
      priority: "Low",
      owner: "Jason Smith",
      createdOn: "6/28/2020",
      dueOn: "9/28/2020",
    },
    {
      id: 6,
      name: "Jade's website",
      type: "Design",
      status: "Pending",
      priority: "Medium",
      owner: "Jason Smith",
      createdOn: "6/28/2020",
      dueOn: "9/28/2020",
    },
    {
      id: 7,
      name: "Marketing Visuals",
      type: "Marketing",
      status: "Assigned",
      priority: "Low",
      owner: "Jason Smith",
      createdOn: "6/28/2020",
      dueOn: "9/28/2020",
    },
  ]);

  const [view, setView] = useState<"list" | "grid">("list");
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [newProject, setNewProject] = useState<Partial<Project>>({
    name: "",
    type: "",
    status: "Pending",
    priority: "Medium",
    owner: "",
    dueOn: "",
  });

  const handleEditProject = (project: Project) => {
    setEditingProject({ ...project });
  };

  const handleUpdateProject = () => {
    if (editingProject) {
      setProjects(
        projects.map((p) => (p.id === editingProject.id ? editingProject : p)),
      );
      setEditingProject(null);
    }
  };

  const handleCreateProject = () => {
    const createdOn = new Date().toLocaleDateString();
    const newProjectWithId = {
      ...newProject,
      id: projects.length + 1,
      createdOn,
    } as Project;
    setProjects([...projects, newProjectWithId]);
    setIsCreating(false);
    setNewProject({
      name: "",
      type: "",
      status: "Pending",
      priority: "Medium",
      owner: "",
      dueOn: "",
    });
  };

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  return (
    <div className="container flex flex-col py-16">
      <header className="flex items-center justify-between border-b px-6 py-4">
        <h1 className="text-2xl font-semibold">Jack and Jill Enterprise</h1>
        <Button
          className="bg-primary text-primary-foreground"
          onClick={() => setIsCreating(true)}
        >
          <Plus className="mr-2 size-4" />
          Create New
        </Button>
      </header>

      <div className="flex items-center gap-2 border-b p-4">
        <Button variant="outline" size="icon">
          <Trash2 className="size-4 text-muted-foreground" />
        </Button>
        <Button variant="outline" size="icon">
          <Share className="size-4 text-muted-foreground" />
        </Button>
        <div className="flex-1" />
        <Button
          variant="outline"
          size="icon"
          onClick={() => setView("grid")}
          className={view === "grid" ? "bg-accent" : ""}
        >
          <LayoutGrid className="size-4 text-muted-foreground" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setView("list")}
          className={view === "list" ? "bg-accent" : ""}
        >
          <List className="size-4 text-muted-foreground" />
        </Button>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 size-4 text-muted-foreground" />
          <Input
            placeholder="Search by project name or owner"
            className="w-80 pl-8"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="size-4" />
          Filter
        </Button>
      </div>

      <div className="flex-1 overflow-auto p-4">
        {view === "list" ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox />
                </TableHead>
                <TableHead className="min-w-[200px]">
                  Project
                  <ChevronDown className="ml-2 inline size-4" />
                </TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Created on</TableHead>
                <TableHead>Due on</TableHead>
                <TableHead className="w-[80px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell className="font-medium">{project.name}</TableCell>
                  <TableCell>{project.type}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        project.status === "Assigned"
                          ? "secondary"
                          : "destructive"
                      }
                      className="bg-opacity-15"
                    >
                      {project.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        project.priority === "High"
                          ? "border-red-500 text-red-500"
                          : project.priority === "Medium"
                            ? "border-yellow-500 text-yellow-500"
                            : "border-green-500 text-green-500"
                      }
                    >
                      {project.priority}
                    </Badge>
                  </TableCell>
                  <TableCell>{project.owner}</TableCell>
                  <TableCell>{project.createdOn}</TableCell>
                  <TableCell>{project.dueOn}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => handleEditProject(project)}
                        >
                          Edit Project
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDeleteProject(project.id)}
                        >
                          Delete Project
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm"
              >
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="font-semibold">{project.name}</h3>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() => handleEditProject(project)}
                      >
                        Edit Project
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDeleteProject(project.id)}
                      >
                        Delete Project
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="mb-2 text-sm text-muted-foreground">
                  {project.type}
                </div>
                <div className="mb-2 flex items-center justify-between">
                  <Badge
                    variant={
                      project.status === "Assigned"
                        ? "secondary"
                        : "destructive"
                    }
                    className="bg-opacity-15"
                  >
                    {project.status}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={
                      project.priority === "High"
                        ? "border-red-500 text-red-500"
                        : project.priority === "Medium"
                          ? "border-yellow-500 text-yellow-500"
                          : "border-green-500 text-green-500"
                    }
                  >
                    {project.priority}
                  </Badge>
                </div>
                <div className="mb-1 text-sm">Owner: {project.owner}</div>
                <div className="mb-1 text-sm">Created: {project.createdOn}</div>
                <div className="text-sm">Due: {project.dueOn}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between border-t px-4 py-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" disabled>
            <ChevronDown className="size-4 rotate-90" />
          </Button>
          <span className="text-sm text-muted-foreground">
            Page <span className="font-medium">4</span> of{" "}
            <span className="font-medium">20</span>
          </span>
          <Button variant="outline" size="icon">
            <ChevronDown className="size-4 -rotate-90" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">per page</span>
          <Select defaultValue="30">
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="30">30</SelectItem>
              <SelectItem value="40">40</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Dialog
        open={editingProject !== null}
        onOpenChange={() => setEditingProject(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Project</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={editingProject?.name ?? ""}
                onChange={(e) =>
                  setEditingProject((prev) =>
                    prev ? { ...prev, name: e.target.value } : null,
                  )
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="type" className="text-right">
                Type
              </Label>
              <Input
                id="type"
                value={editingProject?.type ?? ""}
                onChange={(e) =>
                  setEditingProject((prev) =>
                    prev ? { ...prev, type: e.target.value } : null,
                  )
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="status" className="text-right">
                Status
              </Label>
              <Select
                value={editingProject?.status}
                onValueChange={(value) =>
                  setEditingProject((prev) =>
                    prev
                      ? { ...prev, status: value as "Assigned" | "Pending" }
                      : null,
                  )
                }
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Assigned">Assigned</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="priority" className="text-right">
                Priority
              </Label>
              <Select
                value={editingProject?.priority}
                onValueChange={(value) =>
                  setEditingProject((prev) =>
                    prev
                      ? {
                          ...prev,
                          priority: value as "High" | "Medium" | "Low",
                        }
                      : null,
                  )
                }
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="owner" className="text-right">
                Owner
              </Label>
              <Input
                id="owner"
                value={editingProject?.owner ?? ""}
                onChange={(e) =>
                  setEditingProject((prev) =>
                    prev ? { ...prev, owner: e.target.value } : null,
                  )
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="dueOn" className="text-right">
                Due Date
              </Label>
              <Input
                id="dueOn"
                type="date"
                value={editingProject?.dueOn ?? ""}
                onChange={(e) =>
                  setEditingProject((prev) =>
                    prev ? { ...prev, dueOn: e.target.value } : null,
                  )
                }
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleUpdateProject}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isCreating} onOpenChange={setIsCreating}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Project</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="newName" className="text-right">
                Name
              </Label>
              <Input
                id="newName"
                value={newProject.name}
                onChange={(e) =>
                  setNewProject({ ...newProject, name: e.target.value })
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="newType" className="text-right">
                Type
              </Label>
              <Input
                id="newType"
                value={newProject.type}
                onChange={(e) =>
                  setNewProject({ ...newProject, type: e.target.value })
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="newStatus" className="text-right">
                Status
              </Label>
              <Select
                value={newProject.status}
                onValueChange={(value) =>
                  setNewProject({
                    ...newProject,
                    status: value as "Assigned" | "Pending",
                  })
                }
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Assigned">Assigned</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="newPriority" className="text-right">
                Priority
              </Label>
              <Select
                value={newProject.priority}
                onValueChange={(value) =>
                  setNewProject({
                    ...newProject,
                    priority: value as "High" | "Medium" | "Low",
                  })
                }
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="newOwner" className="text-right">
                Owner
              </Label>
              <Input
                id="newOwner"
                value={newProject.owner}
                onChange={(e) =>
                  setNewProject({ ...newProject, owner: e.target.value })
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="newDueOn" className="text-right">
                Due Date
              </Label>
              <Input
                id="newDueOn"
                type="date"
                value={newProject.dueOn}
                onChange={(e) =>
                  setNewProject({ ...newProject, dueOn: e.target.value })
                }
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleCreateProject}>Create Project</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
