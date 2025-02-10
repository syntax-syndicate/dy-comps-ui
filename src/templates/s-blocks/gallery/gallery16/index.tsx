"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  videoUrl: string;
}
const featuredVideos: Video[] = [
  {
    id: 1,
    title: "Introduction to React Hooks",
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
    duration: "15:30",
    views: "10K",
    videoUrl: "https://www.example.com/video1.mp4",
  },
  {
    id: 2,
    title: "Building a REST API with Node.js",
    thumbnail:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60",
    duration: "22:15",
    views: "8.5K",
    videoUrl: "https://www.example.com/video2.mp4",
  },
  {
    id: 3,
    title: "CSS Grid Layout Mastery",
    thumbnail:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&auto=format&fit=crop&q=60",
    duration: "18:45",
    views: "12K",
    videoUrl: "https://www.example.com/video3.mp4",
  },
  {
    id: 4,
    title: "TypeScript for Beginners",
    thumbnail:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop&q=60",
    duration: "20:00",
    views: "7K",
    videoUrl: "https://www.example.com/video4.mp4",
  },
  {
    id: 5,
    title: "Advanced JavaScript Patterns",
    thumbnail:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&auto=format&fit=crop&q=60",
    duration: "25:10",
    views: "15K",
    videoUrl: "https://www.example.com/video5.mp4",
  },
  {
    id: 6,
    title: "Responsive Web Design Techniques",
    thumbnail:
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&auto=format&fit=crop&q=60",
    duration: "17:30",
    views: "9K",
    videoUrl: "https://www.example.com/video6.mp4",
  },
  {
    id: 7,
    title: "GraphQL Fundamentals",
    thumbnail:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&auto=format&fit=crop&q=60",
    duration: "23:45",
    views: "11K",
    videoUrl: "https://www.example.com/video7.mp4",
  },
  {
    id: 8,
    title: "Docker for Web Developers",
    thumbnail:
      "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&auto=format&fit=crop&q=60",
    duration: "28:20",
    views: "13K",
    videoUrl: "https://www.example.com/video8.mp4",
  },
  {
    id: 9,
    title: "Vue.js Crash Course",
    thumbnail:
      "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=800&auto=format&fit=crop&q=60",
    duration: "19:55",
    views: "6.5K",
    videoUrl: "https://www.example.com/video9.mp4",
  },
];

export default function Gallery16() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const openVideoDialog = (video: Video) => {
    setSelectedVideo(video);
    setIsDialogOpen(true);
  };

  return (
    <section className="container mx-auto py-8">
      <h2 className="mb-6 text-2xl font-bold">
        Featured <span className="text-primary">Videos</span>
      </h2>
      <div className="space-y-8">
        <div
          className="relative aspect-video cursor-pointer overflow-hidden rounded-lg"
          onClick={() =>
            openVideoDialog({
              id: 0,
              title: "Master Class: Full Stack Development",
              videoUrl: "https://www.example.com/masterclass.mp4",
              thumbnail: "",
              duration: "45:30",
              views: "25k",
            })
          }
        >
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&auto=format&fit=crop&q=60"
            alt="Featured video thumbnail"
            layout="fill"
            objectFit="cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <Play className="size-16 text-white" aria-hidden="true" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-4">
            <h3 className="text-xl font-semibold text-white">
              Master Class: Full Stack Development
            </h3>
            <p className="text-sm text-gray-200">45:30 • 25K views</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredVideos.map((video) => (
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
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-lg bg-black bg-opacity-0 transition-opacity duration-200 group-hover:bg-opacity-40">
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
            <DialogTitle>{selectedVideo?.title}</DialogTitle>
          </DialogHeader>
          <div className="aspect-video">
            {selectedVideo && (
              <video
                src={selectedVideo?.videoUrl}
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
