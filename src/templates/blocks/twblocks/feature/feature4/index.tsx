import { Badge } from "@/components/ui/badge";

const Feature4 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col gap-4">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-regular text-left text-xl tracking-tighter md:text-3xl lg:max-w-xl lg:text-5xl">
              This is the start of something new
            </h2>
            <p className="max-w-xl text-left text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-sm">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p>
          </div>
        </div>
        <div className="aspect-video h-full w-full flex-1 rounded-md bg-muted"></div>
      </div>
    </div>
  </div>
);


export default Feature4;
