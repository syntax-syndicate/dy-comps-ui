"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl space-y-12 p-4 md:p-8">
        {/* Main Product Section */}
        <section className="space-y-8">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="space-y-6 md:order-1">
              <h1 className="text-2xl font-semibold">Product description</h1>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The HP EliteBook is a premium business laptop designed for
                  professionals who demand performance, security, and
                  reliability. It features a sleek and durable design, making it
                  perfect for on-the-go productivity.
                </p>
                <p>
                  Powered by the latest Intel Core processors, the EliteBook
                  delivers exceptional performance for multitasking, data
                  analysis, and more. It also includes advanced security
                  features such as a fingerprint reader, facial recognition, and
                  HP Sure Start to protect your data.
                </p>
              </div>
            </div>
            <div className="relative aspect-square md:order-2">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="HP EliteBook Display"
                fill
                className="rounded-lg object-contain"
                priority
              />
            </div>
          </div>

          {/* Display Features */}
          <section className="space-y-6">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="relative aspect-square md:order-2">
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="HP EliteBook Display Features"
                  fill
                  className="rounded-lg object-contain"
                />
              </div>
              <div className="space-y-4 md:order-1">
                <h2 className="text-xl font-semibold">
                  Stunning Full HD Display
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    The HP EliteBook features a vibrant Full HD display with
                    anti-glare technology, ensuring clear visibility even in
                    bright environments. The narrow bezels provide a more
                    immersive viewing experience, perfect for presentations and
                    multimedia.
                  </p>
                  <p>
                    With wide viewing angles and excellent color accuracy, the
                    EliteBook's display is ideal for creative professionals and
                    business users alike.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Audio Features */}
          <section className="space-y-6">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="space-y-4 md:order-1">
                <h2 className="text-xl font-semibold">
                  High-Quality Audio for Clear Communication
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    The HP EliteBook is equipped with Bang & Olufsen-tuned
                    speakers, delivering rich and clear audio for video
                    conferences, media playback, and more.
                  </p>
                  <p>
                    Dual array microphones with noise reduction technology
                    ensure that your voice comes through clearly, even in noisy
                    environments.
                  </p>
                </div>
              </div>
              <div className="relative aspect-square md:order-2">
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="HP EliteBook Audio Features"
                  fill
                  className="rounded-lg object-contain"
                />
              </div>
            </div>
          </section>
        </section>

        {/* Accordion Sections */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="technical">
            <AccordionTrigger>Technical details</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Display: 14-inch Full HD anti-glare display
                  <br />
                  Processor: Intel Core i7-1185G7
                  <br />
                  Memory: 16GB DDR4 RAM
                  <br />
                  Storage: 512GB NVMe SSD
                  <br />
                  Camera: 720p HD camera with privacy shutter
                  <br />
                  Audio: Bang & Olufsen-tuned speakers
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="questions">
            <AccordionTrigger>Questions</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Contact our support team for any questions about the product.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="warranty">
            <AccordionTrigger>Warranty</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Comes with 3-year limited warranty and 24/7 technical support.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
