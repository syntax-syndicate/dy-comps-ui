"use client";

import * as React from "react";
import { Play, X } from "lucide-react";
import Masonry from "react-masonry-css";
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
  duration: string;
  thumbnail: string;
  videoUrl: string;
}

const videos: Video[] = [
  {
    id: "1",
    title: "Breathtaking Landscapes",
    duration: "3:45",
    thumbnail:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=400&fit=crop&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: "2",
    title: "Urban Architecture",
    duration: "2:30",
    thumbnail:
      "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=400&h=300&fit=crop&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: "3",
    title: "Wildlife in Motion",
    duration: "4:15",
    thumbnail:
      "https://images.unsplash.com/photo-1484406566174-9da000fda645?w=300&h=500&fit=crop&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: "4",
    title: "Culinary Delights",
    duration: "3:00",
    thumbnail:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=350&fit=crop&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    id: "5",
    title: "Extreme Sports",
    duration: "5:30",
    thumbnail:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300&h=450&fit=crop&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    id: "6",
    title: "Artistic Expressions",
    duration: "2:45",
    thumbnail:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "7",
    title: "Serene Waterscapes",
    duration: "3:15",
    thumbnail:
      "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=400&h=300&fit=crop&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  },
  {
    id: "8",
    title: "Urban Street Life",
    duration: "4:00",
    thumbnail:
      "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=300&h=400&fit=crop&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  },
];

export default function Gallery13() {
  const [selectedVideo, setSelectedVideo] = React.useState<Video | null>(null);

  const openVideo = (video: Video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="container mx-auto p-4 py-32">
      <h1 className="mb-8 text-4xl font-bold">
        Masonry <span className="text-primary">Video Gallery</span>
      </h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="-ml-4 flex w-auto"
        columnClassName="pl-4 bg-clip-padding"
      >
        {videos.map((video) => (
          <div key={video.id} className="mb-4">
            <div
              className="group relative cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openVideo(video)}
            >
              <div className="relative" style={{ paddingTop: "75%" }}>
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-60">
                <Play className="size-12 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 translate-y-full transform p-4 text-white transition-transform duration-300 group-hover:translate-y-0">
                <h2 className="mb-1 text-lg font-semibold">{video.title}</h2>
                <p className="text-sm">{video.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </Masonry>

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
