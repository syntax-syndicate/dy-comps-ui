"use client";

import * as React from "react";
import { Play } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
}

const videos: Video[] = [
  {
    id: "1",
    title: "Cosmic Wonders",
    thumbnail:
      "https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=300&h=300&fit=crop&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: "2",
    title: "Deep Sea Mysteries",
    thumbnail:
      "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=300&h=300&fit=crop&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: "3",
    title: "Urban Rhythms",
    thumbnail:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=300&h=300&fit=crop&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: "4",
    title: "Nature's Palette",
    thumbnail:
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=300&fit=crop&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    id: "5",
    title: "Culinary Journey",
    thumbnail:
      "https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=300&h=300&fit=crop&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    id: "6",
    title: "Architectural Marvels",
    thumbnail:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=300&fit=crop&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "7",
    title: "Extreme Sports",
    thumbnail:
      "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=300&h=300&fit=crop&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  },
];

export default function Gallery15() {
  const [selectedVideo, setSelectedVideo] = React.useState<Video | null>(null);

  const openVideo = (video: Video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="container mx-auto p-4 py-8 md:py-16">
      <h1 className="mb-8 text-center text-3xl font-bold md:mb-16 md:text-4xl">
        Hexagonal <span className="text-primary">Video Gallery</span>
      </h1>
      <div className="honeycomb mx-auto flex max-w-5xl flex-col items-center">
        <div className="honeycomb-row flex flex-wrap justify-center gap-4 md:gap-8">
          {videos.map((video, index) => (
            <HexagonalVideo
              key={video.id}
              video={video}
              openVideo={openVideo}
              className={index >= 4 ? "mt-0 md:-mt-14 lg:-mt-16" : ""}
            />
          ))}
        </div>
      </div>

      <Dialog open={selectedVideo !== null} onOpenChange={closeVideo}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>{selectedVideo?.title}</DialogTitle>
          </DialogHeader>
          {selectedVideo && (
            <div className="mt-2">
              <video
                src={selectedVideo.videoUrl}
                controls
                autoPlay
                className="w-full rounded-md"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function HexagonalVideo({
  video,
  openVideo,
  className,
}: {
  video: Video;
  openVideo: (video: Video) => void;
  className?: string;
}) {
  return (
    <div
      className={`hexagon-wrapper relative h-48 w-40 p-10 sm:h-56 sm:w-48 md:h-64 md:w-56 ${className}`}
    >
      <div
        className="hexagon absolute inset-0 overflow-hidden bg-muted transition-transform duration-300 ease-in-out hover:scale-105"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      >
        <div className="relative h-full w-full">
          <Image
            src={video.thumbnail}
            alt={video.title}
            layout="fill"
            objectFit="cover"
            className="opacity-90"
          />
        </div>
        <div className="hexagon-overlay absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
          <h3 className="mb-2 px-2 text-center text-xs font-semibold text-white sm:text-sm">
            {video.title}
          </h3>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => openVideo(video)}
          >
            <Play className="mr-2 size-3 sm:h-4 sm:w-4" />
            Play
          </Button>
        </div>
      </div>
    </div>
  );
}
