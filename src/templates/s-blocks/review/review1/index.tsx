"use client";

import React, { useState } from "react";
import { Star, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const reviews = [
  {
    id: 1,
    author: "John Doe",
    date: "December 5 2023 at 10:15",
    rating: 4,
    content:
      "The product is great, but it could be better. The performance is solid, but I expected a bit more from the battery life. Overall, a good purchase.",
    helpful: { yes: 2, no: 1 },
    verified: true,
  },
  {
    id: 2,
    author: "Jane Smith",
    date: "December 1 2023 at 14:45",
    rating: 5,
    content:
      "Absolutely love this product! It's sleek, fast, and the design is stunning. The display is crystal clear, and the performance is top-notch. Highly recommend!",
    helpful: { yes: 5, no: 0 },
    verified: true,
    images: [
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    ],
  },
  // Add more review objects as needed
];

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-yellow-300 text-yellow-300" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
};

const ReviewCard = ({ review }: { review: (typeof reviews)[0] }) => {
  return (
    <Card className="mb-4">
      <CardContent className="pt-6">
        <div className="flex items-start space-x-4">
          <Avatar>
            <AvatarFallback className="bg-muted text-foreground">
              {review.author[0]}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="mb-2 flex items-center">
              <RatingStars rating={review.rating} />
              <span className="ml-2 text-sm text-muted-foreground">
                {review.date}
              </span>
            </div>
            <h4 className="font-bold text-foreground">{review.author}</h4>
            {review.verified && (
              <div className="mb-2 flex items-center text-sm text-primary">
                <CheckCircle2 className="mr-1 h-4 w-4" />
                Verified purchase
              </div>
            )}
            <p className="mb-4 text-muted-foreground">{review.content}</p>
            {review.images && (
              <div className="mb-4 flex space-x-2">
                {review.images.map((img, index) => (
                  <img
                    key={index}
                    src={
                      img ||
                      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    }
                    alt={`Review image ${index + 1}`}
                    className="h-20 w-20 rounded object-cover"
                  />
                ))}
              </div>
            )}
            <div className="flex items-center space-x-4 text-sm">
              <span className="text-muted-foreground">Was this helpful?</span>
              <Button variant="outline" size="sm">
                Yes ({review.helpful.yes})
              </Button>
              <Button variant="outline" size="sm">
                No ({review.helpful.no})
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ReviewForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="rating">Rating</Label>
        <div className="mt-1 flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="h-6 w-6 cursor-pointer text-gray-300 hover:text-yellow-300"
            />
          ))}
        </div>
      </div>
      <div>
        <Label htmlFor="title">Review title</Label>
        <Input
          id="title"
          placeholder="Give your review a title"
          className="text-foreground"
        />
      </div>
      <div>
        <Label htmlFor="content">Review content</Label>
        <Textarea
          id="content"
          placeholder="Write your review here"
          rows={4}
          className="text-foreground"
        />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="text-muted-foreground">
          I agree to the terms and conditions
        </Label>
      </div>
      <Button type="submit">Submit Review</Button>
    </form>
  );
};

export default function ProductReviews() {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  return (
    <section className="bg-background py-12">
      <div className="container mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-foreground">
            Customer Reviews
          </h2>
          <div className="flex items-center space-x-2">
            <RatingStars rating={4} />
            <span className="text-sm font-medium text-muted-foreground">
              (4.6)
            </span>
            <a
              href="#"
              className="text-sm font-medium text-primary underline hover:text-primary/80"
            >
              645 Reviews
            </a>
          </div>
        </div>

        <div className="mb-8 grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <p className="mb-4 text-2xl font-bold text-foreground">
              4.65 out of 5
            </p>
            <Dialog
              open={isReviewModalOpen}
              onOpenChange={setIsReviewModalOpen}
            >
              <DialogTrigger asChild>
                <Button>Write a review</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-foreground">
                    Write a Review
                  </DialogTitle>
                </DialogHeader>
                <ReviewForm />
              </DialogContent>
            </Dialog>
          </div>
          <div className="space-y-2 md:col-span-2">
            {[5, 4, 3, 2, 1].map((stars) => (
              <div key={stars} className="flex items-center">
                <span className="w-8 text-sm font-medium text-foreground">
                  {stars}
                </span>
                <Star className="mr-2 h-4 w-4 text-yellow-300" />
                <Progress
                  value={stars * 20}
                  className="h-2 w-full max-w-[200px] bg-muted"
                />
                <a
                  href="#"
                  className="ml-4 text-sm font-medium text-primary hover:underline"
                >
                  {stars * 100} reviews
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline">
            View more reviews
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
