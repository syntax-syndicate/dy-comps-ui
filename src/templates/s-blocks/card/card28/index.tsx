"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Bookmark, Heart, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";

export default function InteractiveCard() {
  const [likes, setLikes] = useState(42);
  const [comments, setComments] = useState(13);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="container flex justify-center py-16">
      <Card className="w-full max-w-md overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="John Doe"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">
                Posted 2 hours ago
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pb-4">
          <h2 className="mb-2 text-xl font-bold">
            The Impact of AI on Modern Web Design
          </h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Explore how artificial intelligence is reshaping the landscape of
            web design, from personalized user experiences to automated layout
            generation.
          </p>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{likes} likes</span>
            <span>{comments} comments</span>
            <span>1.2k views</span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setIsLiked(!isLiked);
              setLikes(isLiked ? likes - 1 : likes + 1);
            }}
            className={isLiked ? "text-primary" : ""}
          >
            <Heart className="mr-2 size-4" />
            Like
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setComments(comments + 1)}
          >
            <MessageCircle className="mr-2 size-4" />
            Comment
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={isBookmarked ? "text-primary" : ""}
          >
            <Bookmark className="mr-2 size-4" />
            Save
          </Button>
          <Button variant="ghost" size="sm">
            <Share2 className="mr-2 size-4" />
            Share
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
