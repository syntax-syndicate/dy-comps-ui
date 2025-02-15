import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function SimpleTooltip({
  children,
  title,
  delay,
  ...p
}: React.ComponentProps<typeof TooltipContent> & { title: React.ReactNode, delay?: number }) {
  return (
    <TooltipProvider delayDuration={delay}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent asChild {...p}>
          <span>{title}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default SimpleTooltip;
