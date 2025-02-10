import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export function ImageDialog({
  children,
  src,
  alt,
}: {
  src: string;
  children: React.ReactNode;
  alt?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogPrimitive.Portal>
        <DialogOverlay />
        <DialogPrimitive.Content asChild>
          <img
            className={cn(
              "fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%]",
              "max-h-[80%] max-w-[80%] object-contain",
              "grid items-center justify-center border bg-background shadow-lg sm:rounded-lg",
              "duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
            )}
            src={src}
            alt={alt}
          />
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </Dialog>
  );
}
