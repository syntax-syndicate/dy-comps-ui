"use client";

import React, { useState } from "react";
import { Grid, List, Play, Clock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface Video {
  id: number;
  title: string;
  duration: string;
  thumbnail: string;
  views: string;
  videoUrl: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: "Nature Documentary: Exploring the Amazon Rainforest",
    duration: "12:34",
    thumbnail:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&auto=format&fit=crop&q=60",
    views: "1.2K",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: 2,
    title: "Cooking Tutorial: Mastering the Art of Sushi",
    duration: "8:45",
    thumbnail:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop&q=60",
    views: "856",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: 3,
    title: "Travel Vlog: Hidden Gems of Kyoto, Japan",
    duration: "15:20",
    thumbnail:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop&q=60",
    views: "2.1K",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: 4,
    title: "Tech Review: The Latest Smartphone Revolution",
    duration: "10:15",
    thumbnail:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=60",
    views: "3.4K",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    id: 5,
    title: "Music Performance: Live Jazz at the Blue Note",
    duration: "6:50",
    thumbnail:
      "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&auto=format&fit=crop&q=60",
    views: "942",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    id: 6,
    title: "Gaming Stream: Exploring the World of Cyberpunk 2077",
    duration: "25:30",
    thumbnail:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=60",
    views: "1.8K",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: 7,
    title: "Fitness Tutorial: 30-Minute Full Body HIIT Workout",
    duration: "30:00",
    thumbnail:
      "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=800&auto=format&fit=crop&q=60",
    views: "5.2K",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  },
  {
    id: 8,
    title: "DIY Home Improvement: Modern Kitchen Makeover",
    duration: "18:45",
    thumbnail:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&auto=format&fit=crop&q=60",
    views: "3.7K",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  },
];

const VideoCard: React.FC<{ video: Video; onPlay: () => void }> = ({
  video,
  onPlay,
}) => (
  <div className="group cursor-pointer" onClick={onPlay}>
    <div className="relative overflow-hidden rounded-lg">
      <Image
        src={video.thumbnail}
        alt={video.title}
        width={320}
        height={180}
        className="h-[180px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-2 right-2 rounded bg-background/75 px-2 py-1 text-xs">
        {video.duration}
      </div>
    </div>
    <div className="mt-2">
      <h3 className="line-clamp-2 font-medium">{video.title}</h3>
      <p className="text-sm text-muted-foreground">{video.views} views</p>
    </div>
  </div>
);

const VideoListItem: React.FC<{ video: Video; onPlay: () => void }> = ({
  video,
  onPlay,
}) => (
  <div
    className="group flex cursor-pointer items-center gap-4 rounded-lg p-2 transition-colors hover:bg-accent"
    onClick={onPlay}
  >
    <div className="relative h-[90px] w-[160px] flex-shrink-0 overflow-hidden rounded-md">
      <Image
        src={video.thumbnail}
        alt={video.title}
        width={160}
        height={90}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-2 right-2 rounded bg-background/75 px-2 py-1 text-xs">
        {video.duration}
      </div>
    </div>
    <div className="flex flex-1 flex-col justify-center overflow-hidden">
      <h3 className="line-clamp-2 font-medium">{video.title}</h3>
      <div className="mt-1 flex items-center gap-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-1 text-primary">
          <Eye className="size-4" />
          <span>{video.views}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="size-4" />
          <span>{video.duration}</span>
        </div>
      </div>
    </div>
    <Button size="icon" variant="ghost" className="ml-auto">
      <Play className="size-4" />
    </Button>
  </div>
);

export default function ImprovedVideoGallery() {
  const [layout, setLayout] = useState<"grid" | "list">("list");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <div className="container mx-auto p-4 py-16">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold">Video Gallery</h2>
        <div className="flex gap-2">
          <Button
            variant={layout === "grid" ? "default" : "ghost"}
            size="icon"
            onClick={() => setLayout("grid")}
          >
            <Grid className="size-4" />
          </Button>
          <Button
            variant={layout === "list" ? "default" : "ghost"}
            size="icon"
            onClick={() => setLayout("list")}
          >
            <List className="size-4" />
          </Button>
        </div>
      </div>

      {layout === "grid" ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onPlay={() => setSelectedVideo(video)}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {videos.map((video, index) => (
            <React.Fragment key={video.id}>
              <VideoListItem
                video={video}
                onPlay={() => setSelectedVideo(video)}
              />
              {index < videos.length - 1 && <Separator />}
            </React.Fragment>
          ))}
        </div>
      )}

      <Dialog
        open={!!selectedVideo}
        onOpenChange={() => setSelectedVideo(null)}
      >
        <DialogContent className="sm:max-w-[800px]">
          {selectedVideo && (
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg pt-[56.25%]">
                <video
                  className="absolute left-0 top-0 h-full w-full"
                  src={selectedVideo.videoUrl}
                  controls
                  autoPlay
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{selectedVideo.title}</h2>
                <p className="text-sm text-primary">
                  {selectedVideo.views} views
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
