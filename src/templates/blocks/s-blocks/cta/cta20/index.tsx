"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CallToAction20() {
  const [quantity, setQuantity] = useState(1);
  const [customRequirements, setCustomRequirements] = useState("");
  const [quoteType, setQuoteType] = useState("instant");
  const [showQuote, setShowQuote] = useState(false);

  const handleGetQuote = () => {
    // In a real application, this would call an API or perform calculations
    setShowQuote(true);
  };

  return (
    <div className="container mx-auto py-16">
      <h1 className="mb-6 text-3xl font-bold">Get Your Quote</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Price Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="quantity">Quantity</Label>
              <Slider
                id="quantity"
                min={1}
                max={100}
                step={1}
                value={[quantity]}
                onValueChange={(value) => setQuantity(value[0] ?? 0)}
                className="mt-2"
              />
              <div className="mt-1 text-right">{quantity}</div>
            </div>

            <div>
              <Label htmlFor="custom-requirements">Custom Requirements</Label>
              <Textarea
                id="custom-requirements"
                placeholder="Enter any custom requirements..."
                value={customRequirements}
                onChange={(e) => setCustomRequirements(e.target.value)}
                className="mt-1"
              />
            </div>

            <div>
              <Label>Quote Type</Label>
              <RadioGroup
                value={quoteType}
                onValueChange={setQuoteType}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="instant" id="instant" />
                  <Label htmlFor="instant">Instant Quote</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="detailed" id="detailed" />
                  <Label htmlFor="detailed">Detailed Quote</Label>
                </div>
              </RadioGroup>
            </div>

            <Button onClick={handleGetQuote} className="w-full">
              Get My Quote
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sample Quote Preview</CardTitle>
          </CardHeader>
          <CardContent>
            {showQuote ? (
              <div className="space-y-2">
                <p>
                  <strong>Quantity:</strong> {quantity}
                </p>
                <p>
                  <strong>Custom Requirements:</strong>{" "}
                  {customRequirements || "None"}
                </p>
                <p>
                  <strong>Quote Type:</strong>{" "}
                  {quoteType === "instant" ? "Instant" : "Detailed"}
                </p>
                <p>
                  <strong>Estimated Price:</strong> $
                  {(quantity * 10).toFixed(2)}
                </p>
                <p className="text-sm text-muted-foreground">
                  This is a sample quote. In a real application, the price would
                  be calculated based on various factors.
                </p>
              </div>
            ) : (
              <p className="text-center text-muted-foreground">
                Your quote preview will appear here after you click &quot;Get My
                Quote&quot;.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
