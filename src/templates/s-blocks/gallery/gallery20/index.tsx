"use client";

import * as React from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
}

const videos: Video[] = [
  {
    id: "1",
    title: "Mountain Landscapes",
    thumbnail:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300&h=300&fit=crop",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: "2",
    title: "Ocean Waves",
    thumbnail:
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=300&h=300&fit=crop",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: "3",
    title: "City Timelapse",
    thumbnail:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=300&h=300&fit=crop",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: "4",
    title: "Nature Documentary",
    thumbnail:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    id: "5",
    title: "Space Exploration",
    thumbnail:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=300&fit=crop",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    id: "6",
    title: "Underwater World",
    thumbnail:
      "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=300&h=300&fit=crop",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
];

export default function CircularVideoGallery() {
  const [selectedVideo, setSelectedVideo] = React.useState<Video | null>(
    videos[0] ?? null,
  );
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [rotation, setRotation] = React.useState(0);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const selectVideo = (video: Video) => {
    setSelectedVideo(video);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  const togglePlayPause = async () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        await videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const rotateGallery = () => {
    setRotation((prevRotation) => (prevRotation + 60) % 360);
  };

  React.useEffect(() => {
    const timer = setInterval(rotateGallery, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto p-4 py-16">
      <h1 className="mb-4 text-center text-2xl font-bold md:mb-8 md:text-4xl">
        Circular <span className="text-primary">Video Gallery</span>
      </h1>
      <div className="relative mx-auto aspect-square w-full max-w-[800px] p-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="aspect-square w-1/2 overflow-hidden rounded-full shadow-lg">
            {selectedVideo && (
              <video
                ref={videoRef}
                src={selectedVideo.videoUrl}
                poster={selectedVideo.thumbnail}
                className="h-full w-full object-cover"
                onEnded={() => setIsPlaying(false)}
              />
            )}
          </div>
        </div>
        <div
          className="absolute inset-0"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: "transform 1s ease-in-out",
          }}
        >
          {videos.map((video, index) => {
            const angle = (index * 60 * Math.PI) / 180;
            const radius = "37.5%"; // 75% of half the container width
            return (
              <Button
                key={video.id}
                className="absolute aspect-square h-[22%] w-[22%] overflow-hidden rounded-full p-0 transition-transform duration-200 hover:scale-110"
                style={{
                  left: `calc(50% + ${radius} * ${Math.cos(angle)})`,
                  top: `calc(50% + ${radius} * ${Math.sin(angle)})`,
                  transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
                }}
                onClick={() => selectVideo(video)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-full w-full object-cover"
                />
              </Button>
            );
          })}
        </div>
        <div className="absolute bottom-0 left-1/2 mb-4 flex -translate-x-1/2 transform space-x-4">
          <Button
            onClick={togglePlayPause}
            variant="outline"
            size="icon"
            className="size-10 md:h-12 md:w-12"
          >
            {isPlaying ? (
              <Pause className="size-4 md:h-6 md:w-6" />
            ) : (
              <Play className="size-4 md:h-6 md:w-6" />
            )}
          </Button>
          <Button
            onClick={rotateGallery}
            variant="outline"
            size="icon"
            className="size-10 md:h-12 md:w-12"
          >
            <RotateCcw className="size-4 md:h-6 md:w-6" />
          </Button>
        </div>
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-xl font-semibold md:text-2xl">
          {selectedVideo?.title}
        </h2>
      </div>
    </div>
  );
}
