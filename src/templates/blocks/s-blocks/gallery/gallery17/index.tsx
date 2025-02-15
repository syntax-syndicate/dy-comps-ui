"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Video } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface VideoType {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  videoUrl: string;
}

const featuredVideos: VideoType[] = [
  {
    id: 1,
    title: "Master Class: Full Stack Development",
    thumbnail:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1280&h=720&auto=format&fit=crop&q=80",
    duration: "45:30",
    views: "25K",
    videoUrl: "https://www.example.com/masterclass.mp4",
  },
  {
    id: 2,
    title: "Introduction to React Hooks",
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=640&h=360&auto=format&fit=crop&q=80",
    duration: "15:30",
    views: "10K",
    videoUrl: "https://www.example.com/video1.mp4",
  },
  {
    id: 3,
    title: "Building a REST API with Node.js",
    thumbnail:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=640&h=480&auto=format&fit=crop&q=80",
    duration: "22:15",
    views: "8.5K",
    videoUrl: "https://www.example.com/video2.mp4",
  },
  {
    id: 4,
    title: "CSS Grid Layout Mastery",
    thumbnail:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=640&h=360&auto=format&fit=crop&q=80",
    duration: "18:45",
    views: "12K",
    videoUrl: "https://www.example.com/video3.mp4",
  },
  {
    id: 5,
    title: "TypeScript for Beginners",
    thumbnail:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=640&h=480&auto=format&fit=crop&q=80",
    duration: "20:00",
    views: "7K",
    videoUrl: "https://www.example.com/video4.mp4",
  },
  {
    id: 6,
    title: "Advanced JavaScript Patterns",
    thumbnail:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=640&h=360&auto=format&fit=crop&q=80",
    duration: "25:10",
    views: "15K",
    videoUrl: "https://www.example.com/video5.mp4",
  },
];

export default function Gallery17() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoType | null>(null);

  const openVideoDialog = (video: VideoType) => {
    setSelectedVideo(video);
    setIsDialogOpen(true);
  };

  return (
    <section className="container relative mx-auto py-8">
      <div className="absolute right-4 top-4 rounded-full bg-primary p-2 text-primary-foreground">
        <Video className="size-6" />
      </div>
      <h2 className="mb-6 text-2xl font-bold">
        Featured <span className="text-primary">Videos</span>
      </h2>
      <div className="space-y-8">
        <div className="flex flex-col gap-6 md:flex-row">
          <div
            className="relative cursor-pointer overflow-hidden rounded-lg md:w-2/3"
            onClick={() =>
              featuredVideos[0] && openVideoDialog(featuredVideos[0])
            }
          >
            <div className="aspect-vide">
              <Image
                src={featuredVideos[0]?.thumbnail ?? ""}
                alt="Featured video thumbnail"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <Play className="size-16 text-white" aria-hidden="true" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-4">
              <h3 className="text-xl font-semibold text-white">
                {featuredVideos[0]?.title}
              </h3>
              <p className="text-sm text-primary">
                {featuredVideos[0]?.duration} • {featuredVideos[0]?.views} views
              </p>
            </div>
          </div>
          <div className="space-y-4 md:w-1/3">
            {featuredVideos.slice(1, 3).map((video) => (
              <div
                key={video.id}
                className="group cursor-pointer"
                onClick={() => openVideoDialog(video)}
              >
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-200 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-opacity duration-200 group-hover:bg-opacity-40">
                    <Play
                      className="size-12 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 px-2 py-1 text-xs text-white">
                    {video.duration}
                  </div>
                </div>
                <div className="mt-2">
                  <h4 className="line-clamp-2 text-sm font-medium">
                    {video.title}
                  </h4>
                  <p className="text-xs text-primary">{video.views} views</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredVideos.slice(3).map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer"
              onClick={() => openVideoDialog(video)}
            >
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-200 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-opacity duration-200 group-hover:bg-opacity-40">
                  <Play
                    className="size-12 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 px-2 py-1 text-xs text-white">
                  {video.duration}
                </div>
              </div>
              <div className="mt-2">
                <h4 className="line-clamp-2 text-sm font-medium">
                  {video.title}
                </h4>
                <p className="text-xs text-primary">{video.views} views</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            {selectedVideo && <DialogTitle>{selectedVideo.title}</DialogTitle>}
          </DialogHeader>
          <div className="aspect-video">
            {selectedVideo && (
              <video
                src={selectedVideo.videoUrl}
                controls
                className="h-full w-full"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
