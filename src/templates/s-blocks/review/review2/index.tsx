"use client";

import React, { useState } from "react";
import { Star, CheckCircle2, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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
    author: "Marcus Trent",
    date: "October 5, 2023 at 12:42",
    rating: 5,
    content:
      "I was using a 2012 MacBook Pro, and upgrading to this new model felt like stepping into the future. The speed is phenomenal, and the sleek design complements my workspace beautifully. The screen quality is breathtaking, and I’m thrilled with my decision.",
    helpful: { yes: 5, no: 1 },
    verified: true,
    liked: [
      "Responsive customer service",
      "Competitive pricing",
      "Exceptional build quality",
      "Fast and reliable shipping",
    ],
  },
  {
    id: 2,
    author: "Sienna Blake",
    date: "September 22, 2023 at 09:15",
    rating: 5,
    content:
      "This machine is a game-changer! The keyboard feels fantastic to type on, and the included accessories are top-notch. It’s lightning-fast, the battery lasts all day, and I’ve had zero issues with performance. A solid investment!",
    helpful: { yes: 2, no: 0 },
    verified: true,
    liked: [
      "Premium accessories",
      "Great value for money",
      "Generous warranty",
    ],
  },
  {
    id: 3,
    author: "Elliot Rhodes",
    date: "November 10, 2023 at 18:30",
    rating: 3,
    content:
      "For the price, I was expecting higher-quality materials. The device feels a bit plasticky. On top of that, the delivery took longer than expected—I was told 3-4 days, but it arrived after 10 days. Disappointing for a premium product.",
    helpful: { yes: 1, no: 1 },
    verified: true,
    disliked: [
      "Late delivery",
      "Subpar material quality",
      "No operating system pre-installed",
    ],
  },
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
                Verified Purchase
              </div>
            )}
            <p className="mb-4 text-muted-foreground">{review.content}</p>
            {(review.liked || review.disliked) && (
              <div className="mb-4">
                <h5 className="mb-2 font-semibold text-foreground">
                  {review.liked ? "What I Loved" : "What I Disliked"}
                </h5>
                <ul className="list-inside list-disc">
                  {(review.liked || review.disliked || []).map(
                    (item, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        {item}
                      </li>
                    ),
                  )}
                </ul>
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

const AddReviewForm = () => {
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
        <Label htmlFor="title">Review Title</Label>
        <Input
          id="title"
          placeholder="Give your review a title"
          className="text-foreground"
        />
      </div>
      <div>
        <Label htmlFor="review">Review</Label>
        <Textarea
          id="review"
          placeholder="Write your review here"
          rows={4}
          className="text-foreground"
        />
      </div>
      <div>
        <Label htmlFor="likes">What did you like?</Label>
        <Input
          id="likes"
          placeholder="What you like about this product?"
          className="mb-2 text-foreground"
        />
        <Button variant="outline" className="w-full">
          <Plus className="mr-2 h-4 w-4" />
          Add another
        </Button>
      </div>
      <div>
        <Label htmlFor="dislikes">What did you dislike?</Label>
        <Input
          id="dislikes"
          placeholder="What you dislike about this product?"
          className="mb-2 text-foreground"
        />
        <Button variant="outline" className="w-full">
          <Plus className="mr-2 h-4 w-4" />
          Add another
        </Button>
      </div>
      <div>
        <Label>Add Photos (Optional)</Label>
        <div className="flex w-full items-center justify-center">
          <label
            htmlFor="dropzone-file"
            className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted bg-background hover:bg-muted/50"
          >
            <div className="flex flex-col items-center justify-center pb-6 pt-5">
              <svg
                className="mb-4 h-8 w-8 text-muted-foreground"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-muted-foreground">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-muted-foreground">
                SVG, PNG, JPG, or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
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

const ReportForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <Label>What issue are you experiencing?</Label>
        <RadioGroup defaultValue="violation">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="abuse" id="r1" />
            <Label htmlFor="r1" className="text-muted-foreground">
              Report listing abuse
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="violation" id="r2" />
            <Label htmlFor="r2" className="text-muted-foreground">
              Report a violation
            </Label>
          </div>
        </RadioGroup>
      </div>
      <div>
        <Label htmlFor="reason">Report Reason</Label>
        <Input id="reason" className="text-foreground" />
      </div>
      <div>
        <Label htmlFor="description">Describe your issue</Label>
        <Textarea id="description" rows={6} className="text-foreground" />
      </div>
      <div>
        <Label htmlFor="file">Add an attachment</Label>
        <Input id="file" type="file" />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="text-muted-foreground">
          I have read and agree with the terms and conditions
        </Label>
      </div>
      <Button type="submit">Send Report</Button>
    </form>
  );
};

export default function CustomerReviews() {
  const [isAddReviewOpen, setIsAddReviewOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);

  return (
    <section className="bg-background py-12">
      <div className="container mx-auto">
        <div className="lg:flex lg:items-start lg:gap-12">
          <div className="w-full space-y-6 lg:w-1/3">
            <h2 className="text-2xl font-semibold text-foreground">
              Customer Reviews
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-semibold text-foreground">
                  4.0
                </span>
                <RatingStars rating={4} />
                <span className="text-sm font-medium text-muted-foreground">
                  (4.6)
                </span>
                <a
                  href="#"
                  className="text-sm font-medium text-primary underline"
                >
                  645 Reviews
                </a>
              </div>
              <div className="space-y-2">
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
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  Customer reviews, including product star ratings, help
                  customers learn more about the product and decide if it's the
                  right choice for them.
                </p>
                <p>
                  To calculate the overall rating and percentage breakdown by
                  star, we don't use a simple average. Instead, our system
                  considers factors like how recent a review is and whether the
                  reviewer purchased the item on SERPUI.
                </p>
              </div>
              <Button onClick={() => setIsAddReviewOpen(true)}>
                Write a Review
              </Button>
            </div>
          </div>
          <div className="mt-6 lg:mt-0 lg:w-2/3">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing{" "}
                <span className="font-medium text-foreground">5,768</span>{" "}
                Customer Reviews
              </p>
              <div className="flex space-x-2">
                <Select>
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
                <Select>
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
            <div className="mt-6 text-center">
              <Button variant="outline">View More Reviews</Button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isAddReviewOpen} onOpenChange={setIsAddReviewOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-foreground">Add a Review</DialogTitle>
          </DialogHeader>
          <AddReviewForm />
        </DialogContent>
      </Dialog>

      <Dialog open={isReportOpen} onOpenChange={setIsReportOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-foreground">
              Report a Review
            </DialogTitle>
          </DialogHeader>
          <ReportForm />
        </DialogContent>
      </Dialog>
    </section>
  );
}
