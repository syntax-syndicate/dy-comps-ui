"use client";

import * as React from "react";
import {
  File,
  Folder,
  MoreVertical,
  Plus,
  Trash,
  Upload,
  HardDrive,
  FileText,
  Image,
  Film,
} from "lucide-react";
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface FileItem {
  id: string;
  name: string;
  type: "file" | "folder";
  size: number;
  lastModified: string;
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function EnhancedFileDashboard() {
  const [files, setFiles] = React.useState<FileItem[]>([
    {
      id: "1",
      name: "Document.pdf",
      type: "file",
      size: 1024000,
      lastModified: "2023-05-15",
    },
    {
      id: "2",
      name: "Images",
      type: "folder",
      size: 0,
      lastModified: "2023-05-14",
    },
    {
      id: "3",
      name: "Spreadsheet.xlsx",
      type: "file",
      size: 512000,
      lastModified: "2023-05-13",
    },
    {
      id: "4",
      name: "Presentation.pptx",
      type: "file",
      size: 2048000,
      lastModified: "2023-05-12",
    },
    {
      id: "5",
      name: "Video.mp4",
      type: "file",
      size: 10240000,
      lastModified: "2023-05-11",
    },
  ]);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const newFile: FileItem = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        type: "file",
        size: file.size,
        lastModified: new Date().toISOString().split("T")[0] ?? "",
      };
      setFiles([...files, newFile]);
    }
  };

  const handleDelete = (id: string) => {
    setFiles(files.filter((file) => file.id !== id));
  };

  const handleCreateFolder = (name: string) => {
    const newFolder: FileItem = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      type: "folder",
      size: 0,
      lastModified: new Date().toISOString().split("T")[0] ?? "",
    };
    setFiles([...files, newFolder]);
  };

  const totalSize = files.reduce((acc, file) => acc + file.size, 0);
  const fileCount = files.filter((file) => file.type === "file").length;
  const folderCount = files.filter((file) => file.type === "folder").length;

  const fileTypes = files.reduce(
    (acc, file) => {
      if (file.type === "file") {
        const extension = file.name.split(".").pop()?.toLowerCase() || "other";
        acc[extension] = (acc[extension] || 0) + 1;
      }
      return acc;
    },
    {} as Record<string, number>,
  );

  const pieChartData = Object.entries(fileTypes).map(([name, value]) => ({
    name,
    value,
  }));

  const lineChartData = [
    { name: "Jan", uploads: 4 },
    { name: "Feb", uploads: 3 },
    { name: "Mar", uploads: 2 },
    { name: "Apr", uploads: 5 },
    { name: "May", uploads: 7 },
  ];

  const renderMobileFileCard = (file: FileItem) => (
    <Card key={file.id} className="mb-4">
      <CardHeader className="space-y-0">
        <CardTitle className="flex items-center space-x-2">
          {file.type === "folder" ? (
            <Folder className="size-4" />
          ) : (
            <File className="size-4" />
          )}
          <span>{file.name}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-2">
        <div>
          <p className="text-sm font-medium">Type</p>
          <p className="text-sm">{file.type}</p>
        </div>
        {file.type === "file" && (
          <div>
            <p className="text-sm font-medium">Size</p>
            <p className="text-sm">{(file.size / 1024).toFixed(2)} KB</p>
          </div>
        )}
        <div>
          <p className="text-sm font-medium">Last Modified</p>
          <p className="text-sm">{file.lastModified}</p>
        </div>
        <div className="flex items-start justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <MoreVertical className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleDelete(file.id)}>
                <Trash className="mr-2 size-4" />
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto py-6 sm:px-0 sm:py-10">
      <h1 className="mb-6 text-2xl font-bold sm:mb-8 sm:text-3xl md:text-4xl">
        Enhanced File Management Dashboard
      </h1>

      <div className="mb-6 grid gap-4 sm:mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Storage Used
            </CardTitle>
            <HardDrive className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold sm:text-xl md:text-2xl">
              {(totalSize / (1024 * 1024)).toFixed(2)} MB
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Files</CardTitle>
            <FileText className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold sm:text-xl md:text-2xl">
              {fileCount}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Folders</CardTitle>
            <Folder className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold sm:text-xl md:text-2xl">
              {folderCount}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Recent Uploads
            </CardTitle>
            <Upload className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold sm:text-xl md:text-2xl">
              {
                files.filter((file) => {
                  const date = new Date(file.lastModified);
                  const now = new Date();
                  const diffTime = Math.abs(now.getTime() - date.getTime());
                  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                  return diffDays <= 7;
                }).length
              }
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:gap-4">
          <Input
            type="file"
            onChange={handleUpload}
            className="w-full sm:w-64"
          />
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full sm:w-auto">
                <Plus className="mr-2 size-4" />
                New Folder
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Folder</DialogTitle>
              </DialogHeader>
              <Input
                placeholder="Folder Name"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleCreateFolder(e.currentTarget.value);
                    e.currentTarget.value = "";
                  }
                }}
              />
            </DialogContent>
          </Dialog>
        </div>
        {files.length > 0 ? (
          <>
            <div className="overflow-x-auto sm:hidden">
              <div className="w-full">{files.map(renderMobileFileCard)}</div>
            </div>
            <div className="hidden sm:block">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Last Modified</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {files.map((file) => (
                    <TableRow key={file.id}>
                      <TableCell className="font-medium">
                        {file.type === "folder" ? (
                          <Folder className="mr-2 inline" />
                        ) : (
                          <File className="mr-2 inline" />
                        )}
                        {file.name}
                      </TableCell>
                      <TableCell>{file.type}</TableCell>
                      <TableCell>
                        {file.type === "file"
                          ? `${(file.size / 1024).toFixed(2)} KB`
                          : "-"}
                      </TableCell>
                      <TableCell>{file.lastModified}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="size-8 p-0">
                              <MoreVertical className="size-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              onClick={() => handleDelete(file.id)}
                            >
                              <Trash className="mr-2 size-4" />
                              <span>Delete</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500">
            No files or folders found.
          </p>
        )}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>File Type Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {pieChartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>File Uploads Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="uploads"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
