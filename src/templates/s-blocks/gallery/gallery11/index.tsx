"use client";

import * as React from "react";
import { Play, X } from "lucide-react";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
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
    title: "Introduction to React",
    duration: "12:34",
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: "2",
    title: "Advanced CSS Techniques",
    duration: "18:22",
    thumbnail:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&h=400&fit=crop&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: "3",
    title: "JavaScript ES6 Features",
    duration: "15:45",
    thumbnail:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=600&h=400&fit=crop&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: "4",
    title: "Building RESTful APIs",
    duration: "20:10",
    thumbnail:
      "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=600&h=400&fit=crop&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    id: "5",
    title: "Responsive Web Design",
    duration: "14:55",
    thumbnail:
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=600&h=400&fit=crop&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    id: "6",
    title: "Vue.js for Beginners",
    duration: "16:40",
    thumbnail:
      "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=600&h=400&fit=crop&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
];

export default function VideoGalleryWithPlayback() {
  const [selectedVideo, setSelectedVideo] = React.useState<Video | null>(null);

  const openVideo = (video: Video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="container mx-auto p-4 py-32">
      <h1 className="mb-8 text-4xl font-bold">Video Gallery</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <div
            key={video.id}
            className="group relative overflow-hidden rounded-lg"
          >
            <AspectRatio ratio={16 / 9}>
              <Image
                src={video.thumbnail}
                alt={video.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </AspectRatio>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h2 className="mb-1 line-clamp-2 text-xl font-semibold text-white">
                  {video.title}
                </h2>
                <p className="text-sm text-gray-300">{video.duration}</p>
              </div>
            </div>
            <Button
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              variant="secondary"
              size="icon"
              onClick={() => openVideo(video)}
            >
              <Play className="size-6" />
              <span className="sr-only">Play {video.title}</span>
            </Button>
            <div className="absolute right-2 top-2 rounded bg-black/60 px-2 py-1 text-xs font-medium text-white">
              {video.duration}
            </div>
          </div>
        ))}
      </div>

      <Dialog open={selectedVideo !== null} onOpenChange={closeVideo}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>{selectedVideo?.title}</DialogTitle>
          </DialogHeader>
          {selectedVideo && (
            <div className="mt-2">
              <AspectRatio ratio={16 / 9}>
                <video
                  src={selectedVideo.videoUrl}
                  controls
                  autoPlay
                  className="h-full w-full rounded-md object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </AspectRatio>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
