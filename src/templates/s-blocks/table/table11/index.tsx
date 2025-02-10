import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileIcon, ImageIcon, FileTextIcon, DownloadIcon } from "lucide-react";

interface FileItem {
  icon: "fig" | "ppt" | "doc" | "pdf" | "xls";
  name: string;
  sharedBy: string;
  tag: string;
  size: string;
  members: number;
  sharedDate: string;
}

const files: FileItem[] = [
  {
    icon: "fig",
    name: "Fonts.fig",
    sharedBy: "Ashley Wilson",
    tag: "designer",
    size: "3.7gb",
    members: 4,
    sharedDate: "21 February 2020",
  },
  {
    icon: "ppt",
    name: "Wireframes.ppt",
    sharedBy: "Ashley Wilson",
    tag: "designer",
    size: "3.7gb",
    members: 4,
    sharedDate: "21 February 2020",
  },
  {
    icon: "doc",
    name: "Project Outline.doc",
    sharedBy: "Ashley Wilson",
    tag: "designer",
    size: "3.7gb",
    members: 4,
    sharedDate: "21 February 2020",
  },
  {
    icon: "pdf",
    name: "Design Guidelines.pdf",
    sharedBy: "Emily Johnson",
    tag: "guidelines",
    size: "2.1gb",
    members: 6,
    sharedDate: "15 March 2020",
  },
  {
    icon: "xls",
    name: "Budget Spreadsheet.xls",
    sharedBy: "Michael Brown",
    tag: "finance",
    size: "1.8gb",
    members: 3,
    sharedDate: "10 April 2020",
  },
  {
    icon: "fig",
    name: "Logo Variations.fig",
    sharedBy: "Sarah Lee",
    tag: "branding",
    size: "4.2gb",
    members: 5,
    sharedDate: "5 May 2020",
  },
  {
    icon: "doc",
    name: "Meeting Minutes.doc",
    sharedBy: "David Clark",
    tag: "management",
    size: "0.5gb",
    members: 8,
    sharedDate: "20 June 2020",
  },
  {
    icon: "ppt",
    name: "Quarterly Presentation.ppt",
    sharedBy: "Jennifer White",
    tag: "report",
    size: "5.1gb",
    members: 12,
    sharedDate: "15 July 2020",
  },
];

const FileTypeIcon = ({ type }: { type: FileItem["icon"] }) => {
  const iconProps = {
    className: "w-5 h-5",
  };

  switch (type) {
    case "fig":
      return (
        <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
          <ImageIcon {...iconProps} />
        </div>
      );
    case "ppt":
      return (
        <div className="flex size-10 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
          <FileIcon {...iconProps} />
        </div>
      );
    case "doc":
      return (
        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <FileTextIcon {...iconProps} />
        </div>
      );
    case "pdf":
      return (
        <div className="flex size-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
          <FileTextIcon {...iconProps} />
        </div>
      );
    case "xls":
      return (
        <div className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
          <FileIcon {...iconProps} />
        </div>
      );
  }
};

export default function FileList() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-4 py-16">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-foreground">Files</h1>
        <Button variant="default">Download All</Button>
      </div>
      <ScrollArea className="h-[600px] rounded-lg border bg-background">
        <div className="divide-y divide-border">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/50"
            >
              <FileTypeIcon type={file.icon} />
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                  <div>
                    <p className="font-medium text-foreground">{file.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Shared by {file.sharedBy}
                    </p>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    #{file.tag}
                  </Badge>
                </div>
              </div>
              <div className="hidden text-sm text-muted-foreground sm:block">
                {file.size}
              </div>
              <div className="hidden text-sm text-muted-foreground sm:block">
                {file.members} members
              </div>
              <div className="hidden whitespace-nowrap text-sm text-muted-foreground sm:block">
                Shared on {file.sharedDate}
              </div>
              <Button
                variant="ghost"
                size="icon"
                title={`Download ${file.name}`}
              >
                <DownloadIcon className="size-4" />
                <span className="sr-only">Download {file.name}</span>
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
