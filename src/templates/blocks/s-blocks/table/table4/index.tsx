"use client";

import { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Project {
  id: number;
  name: string;
  company: string;
  progress: number;
  tasks: { completed: number; total: number; pending: number };
  budget: { total: number; remaining: number };
  deadline: string;
  daysLeft: number;
  members: { image: string; name: string }[];
  icon: string;
}

interface ProjectFormProps {
  project?: Project;
  onSubmit: (project: Omit<Project, "id">) => void;
  onCancel: () => void;
}

function ProjectForm({ project, onSubmit, onCancel }: ProjectFormProps) {
  const [formData, setFormData] = useState({
    name: project?.name ?? "",
    company: project?.company ?? "",
    progress: project?.progress ?? 0,
    tasksCompleted: project?.tasks.completed ?? 0,
    tasksTotal: project?.tasks.total ?? 0,
    tasksPending: project?.tasks.pending ?? 0,
    budgetTotal: project?.budget.total ?? 0,
    budgetRemaining: project?.budget.remaining ?? 0,
    deadline: project?.deadline ?? "",
    daysLeft: project?.daysLeft ?? 0,
    icon: project?.icon ?? "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name: formData.name,
      company: formData.company,
      progress: Number(formData.progress),
      tasks: {
        completed: Number(formData.tasksCompleted),
        total: Number(formData.tasksTotal),
        pending: Number(formData.tasksPending),
      },
      budget: {
        total: Number(formData.budgetTotal),
        remaining: Number(formData.budgetRemaining),
      },
      deadline: formData.deadline,
      daysLeft: Number(formData.daysLeft),
      icon: formData.icon,
      members: project?.members ?? [],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
      <div>
        <Label htmlFor="name">Project Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="progress">Progress (%)</Label>
        <Input
          id="progress"
          name="progress"
          type="number"
          value={formData.progress}
          onChange={handleChange}
          required
          min="0"
          max="100"
        />
      </div>
      <div>
        <Label htmlFor="tasksCompleted">Tasks Completed</Label>
        <Input
          id="tasksCompleted"
          name="tasksCompleted"
          type="number"
          value={formData.tasksCompleted}
          onChange={handleChange}
          required
          min="0"
        />
      </div>
      <div>
        <Label htmlFor="tasksTotal">Total Tasks</Label>
        <Input
          id="tasksTotal"
          name="tasksTotal"
          type="number"
          value={formData.tasksTotal}
          onChange={handleChange}
          required
          min="0"
        />
      </div>
      <div>
        <Label htmlFor="tasksPending">Pending Tasks</Label>
        <Input
          id="tasksPending"
          name="tasksPending"
          type="number"
          value={formData.tasksPending}
          onChange={handleChange}
          required
          min="0"
        />
      </div>
      <div>
        <Label htmlFor="budgetTotal">Total Budget ($)</Label>
        <Input
          id="budgetTotal"
          name="budgetTotal"
          type="number"
          value={formData.budgetTotal}
          onChange={handleChange}
          required
          min="0"
        />
      </div>
      <div>
        <Label htmlFor="budgetRemaining">Remaining Budget ($)</Label>
        <Input
          id="budgetRemaining"
          name="budgetRemaining"
          type="number"
          value={formData.budgetRemaining}
          onChange={handleChange}
          required
          min="0"
        />
      </div>
      <div>
        <Label htmlFor="deadline">Deadline</Label>
        <Input
          id="deadline"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="daysLeft">Days Left</Label>
        <Input
          id="daysLeft"
          name="daysLeft"
          type="number"
          value={formData.daysLeft}
          onChange={handleChange}
          required
          min="0"
        />
      </div>
      <div>
        <Label htmlFor="icon">Icon</Label>
        <Input
          id="icon"
          name="icon"
          value={formData.icon}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
}

const initialProjects: Project[] = [
  {
    id: 1,
    name: "UX Design & Visual Strategy",
    company: "Herman Group",
    progress: 72,
    tasks: { completed: 32, total: 47, pending: 5 },
    budget: { total: 13000, remaining: 4200 },
    deadline: "22.12.21",
    daysLeft: 34,
    members: [
      {
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        name: "Member 1",
      },
      {
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        name: "Member 2",
      },
      {
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        name: "Member 3",
      },
      {
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        name: "Member 4",
      },
    ],
    icon: "🎨",
  },
  {
    id: 2,
    name: "Branding",
    company: "Cassin, Bradtke and Jacobson",
    progress: 18,
    tasks: { completed: 9, total: 47, pending: 5 },
    budget: { total: 13000, remaining: 4200 },
    deadline: "22.12.21",
    daysLeft: 34,
    members: [
      {
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        name: "Member 1",
      },
      {
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        name: "Member 2",
      },
      {
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        name: "Member 3",
      },
      {
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        name: "Member 4",
      },
    ],
    icon: "⭕",
  },
];

export default function ProjectDashboard() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [isNewProjectDialogOpen, setIsNewProjectDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const handleAddProject = (newProject: Omit<Project, "id">) => {
    setProjects((prev) => [...prev, { ...newProject, id: Date.now() }]);
    setIsNewProjectDialogOpen(false);
  };

  const handleEditProject = (updatedProject: Omit<Project, "id">) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === editingProject?.id ? { ...updatedProject, id: p.id } : p,
      ),
    );
    setEditingProject(null);
  };

  const handleDeleteProject = (id: number) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="container py-16">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-foreground">Projects</h1>
        <Dialog
          open={isNewProjectDialogOpen}
          onOpenChange={setIsNewProjectDialogOpen}
        >
          <DialogTrigger asChild>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              New Project
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Project</DialogTitle>
            </DialogHeader>
            <ProjectForm
              onSubmit={handleAddProject}
              onCancel={() => setIsNewProjectDialogOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </div>
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Project</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Tasks</TableHead>
              <TableHead>Budget</TableHead>
              <TableHead>Deadline</TableHead>
              <TableHead>Members</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded bg-muted text-xl">
                      {project.icon}
                    </div>
                    <div>
                      <div className="font-medium text-foreground">
                        {project.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {project.company}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-2">
                    <Progress value={project.progress} className="h-2" />
                    <span className="text-sm text-muted-foreground">
                      {project.progress}%
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{`${project.tasks.completed}/${project.tasks.total}`}</div>
                    <div className="text-sm text-muted-foreground">
                      {project.tasks.pending} tasks pending
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">
                      ${project.budget.total.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      ${project.budget.remaining.toLocaleString()} left
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{project.deadline}</div>
                    <div className="text-sm text-muted-foreground">
                      {project.daysLeft} days
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex -space-x-2">
                    {project.members.map((member, index) => (
                      <Avatar
                        key={index}
                        className="border-2 border-background"
                      >
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="size-8 p-0">
                        <MoreHorizontal className="size-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onSelect={() => setEditingProject(project)}
                      >
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onSelect={() => handleDeleteProject(project.id)}
                      >
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Dialog
        open={!!editingProject}
        onOpenChange={(open) => !open && setEditingProject(null)}
      >
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Project</DialogTitle>
          </DialogHeader>
          {editingProject && (
            <ProjectForm
              project={editingProject}
              onSubmit={handleEditProject}
              onCancel={() => setEditingProject(null)}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
