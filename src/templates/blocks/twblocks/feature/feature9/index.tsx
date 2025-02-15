"use client";
import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { GripVertical } from "lucide-react";

const Feature9 = () => {
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0 && e.touches[0]) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }

    const percentage = (x / rect.width) * 100;
    setInset(percentage);
  };

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-regular text-3xl tracking-tighter md:text-5xl lg:max-w-xl">
              Something new!
            </h2>
            <p className="max-w-xl text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-xl">
              Managing a small business today is already tough.
            </p>
          </div>
          <div className="w-full pt-12">
            <div
              className="relative aspect-video h-full w-full select-none overflow-hidden rounded-2xl"
              onMouseMove={onMouseMove}
              onMouseUp={() => setOnMouseDown(false)}
              onTouchMove={onMouseMove}
              onTouchEnd={() => setOnMouseDown(false)}
            >
              <div
                className="absolute top-0 z-20 -ml-1 h-full w-1 select-none bg-muted"
                style={{
                  left: inset + "%",
                }}
              >
                <button
                  className="absolute top-1/2 z-30 -ml-2 flex h-10 w-5 -translate-y-1/2 cursor-ew-resize select-none items-center justify-center rounded bg-muted transition-all hover:scale-110"
                  onTouchStart={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onMouseDown={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onTouchEnd={() => setOnMouseDown(false)}
                  onMouseUp={() => setOnMouseDown(false)}
                >
                  <GripVertical className="h-4 w-4 select-none" />
                </button>
              </div>
              <Image
                src="https://placehold.co/1920x1080/fff/000.png?text=Light+Mode"
                alt="lightmode-image.png"
                width={1920}
                height={1080}
                priority
                unoptimized
                className="absolute left-0 top-0 z-10 aspect-video h-full w-full select-none rounded-2xl border"
                style={{
                  clipPath: "inset(0 0 0 " + inset + "%)",
                }}
              />
              <Image
                src="https://placehold.co/1920x1080/000/fff.png?text=Dark+Mode"
                alt="darkmode-image.png"
                width={1920}
                height={1080}
                priority
                unoptimized
                className="absolute left-0 top-0 aspect-video h-full w-full select-none rounded-2xl border"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Feature9;
