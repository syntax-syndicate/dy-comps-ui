"use client";

import React, { useState } from "react";
import { Star, Flag, ChevronLeft, ChevronRight, Upload } from "lucide-react";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const reviews = [
  {
    id: 1,
    author: "Brian Farley",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Placeholder image
    date: "November 18 2023 at 15:08",
    rating: 5,
    title: "Fast and reliable",
    content:
      "My old IMAC was from 2013. This replacement was well needed. Very fast, and the colour matches my office set up perfectly. The display is out of this world and I'm very happy with this purchase.",
    helpful: 2,
    totalReviews: 34,
  },
  // Add more review objects here...
];

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-primary text-primary" : "text-muted-foreground"}`}
        />
      ))}
    </div>
  );
};

const ReviewCard = ({ review }: { review: (typeof reviews)[0] }) => {
  return (
    <article className="border-b py-6">
      <div className="mb-3 flex items-center">
        <Avatar className="mr-4 h-10 w-10">
          <AvatarImage src={review.avatar} alt={review.author} />
          <AvatarFallback>{review.author[0]}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-foreground">{review.author}</p>
          <p className="text-sm text-muted-foreground">
            Total Reviews:{" "}
            <span className="font-medium text-foreground">
              {review.totalReviews}
            </span>
          </p>
        </div>
      </div>
      <h3 className="mb-1 text-xl font-semibold text-foreground">
        {review.title}
      </h3>
      <div className="mb-3 flex items-center">
        <RatingStars rating={review.rating} />
        <p className="ml-2 text-sm text-muted-foreground">{review.date}</p>
      </div>
      <p className="mb-3 text-muted-foreground">{review.content}</p>
      <div className="flex items-center">
        <Button variant="outline" size="sm" className="text-xs">
          Helpful ({review.helpful})
        </Button>
        <Button variant="ghost" size="sm" className="ml-4">
          <Flag className="mr-1 h-4 w-4" />
          Report
        </Button>
      </div>
    </article>
  );
};

const AddReviewForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="rating">Rating</Label>
        <div className="mt-1 flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="h-6 w-6 cursor-pointer text-muted-foreground hover:text-primary"
            />
          ))}
        </div>
      </div>
      <div>
        <Label htmlFor="title">Review title</Label>
        <Input id="title" placeholder="Give your review a title" />
      </div>
      <div>
        <Label htmlFor="description">Review description</Label>
        <Textarea
          id="description"
          placeholder="Write your review here"
          rows={6}
        />
      </div>
      <div>
        <Label>Add photos (Optional)</Label>
        <div className="flex w-full items-center justify-center">
          <label
            htmlFor="dropzone-file"
            className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted bg-background hover:bg-muted/50"
          >
            <div className="flex flex-col items-center justify-center pb-6 pt-5">
              <Upload className="mb-4 h-8 w-8 text-muted-foreground" />
              <p className="mb-2 text-sm text-muted-foreground">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-muted-foreground">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="text-sm text-muted-foreground">
          By publishing this review you agree with the{" "}
          <a href="#" className="text-primary hover:underline">
            terms and conditions
          </a>
          .
        </Label>
      </div>
      <Button type="submit">Submit review</Button>
    </form>
  );
};

export default function CustomerReviews() {
  const [isAddReviewOpen, setIsAddReviewOpen] = useState(false);

  return (
    <section className="bg-background py-8 antialiased">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="mb-6 text-2xl font-semibold text-foreground">Reviews</h2>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="space-y-3">
                <p className="text-3xl font-bold text-foreground">5/5</p>
                <p className="text-base text-muted-foreground">
                  Average rating
                </p>
                <RatingStars rating={5} />
                <p className="text-sm text-muted-foreground">(3,657 reviews)</p>
              </div>

              <div className="hidden border-l md:block"></div>

              <div className="space-y-3">
                <p className="text-3xl font-bold text-foreground">100M+</p>
                <p className="text-base text-muted-foreground">
                  Worldwide Clients
                </p>
                <div className="flex items-center gap-4">
                  <img
                    className="h-6"
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg" // Placeholder image
                    alt="Brand 1"
                  />
                  <img
                    className="h-5"
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg" // Placeholder image
                    alt="Brand 2"
                  />
                  <img
                    className="h-8"
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg" // Placeholder image
                    alt="Brand 3"
                  />
                </div>
              </div>

              <div className="md:col-span-3">
                <p className="mb-2 text-xl font-semibold text-foreground">
                  Do you own or have you used the product?
                </p>
                <p className="mb-4 text-base text-muted-foreground">
                  Give your opinion by rating the product
                </p>
                <div className="mb-4 flex items-center">
                  <RatingStars rating={0} />
                  <Button variant="link" className="ml-2">
                    Give a note
                  </Button>
                </div>
                <Button onClick={() => setIsAddReviewOpen(true)}>
                  Write a customer review
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">5,768</span>{" "}
            Customer Reviews
          </p>
          <div className="flex space-x-4">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Reviews" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Reviews</SelectItem>
                <SelectItem value="5">5 stars</SelectItem>
                <SelectItem value="4">4 stars</SelectItem>
                <SelectItem value="3">3 stars</SelectItem>
                <SelectItem value="2">2 stars</SelectItem>
                <SelectItem value="1">1 star</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="recent">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Recently Added" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Recently Added</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="flex items-center justify-between py-6">
          <span className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">1</span> to{" "}
            <span className="font-semibold text-foreground">5</span> of{" "}
            <span className="font-semibold text-foreground">100</span> Reviews
          </span>
          <div className="inline-flex">
            <Button variant="outline" size="icon" className="rounded-r-none">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous page</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-l-none">
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next page</span>
            </Button>
          </div>
        </div>

        <Card className="mt-6">
          <CardContent className="p-6">
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              Add a review
            </h3>
            <AddReviewForm />
          </CardContent>
        </Card>

        <Dialog open={isAddReviewOpen} onOpenChange={setIsAddReviewOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Write a Review</DialogTitle>
            </DialogHeader>
            <AddReviewForm />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
