"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AlbumDescription() {
  return (
    <section className="container mx-auto py-8 md:py-16">
      <Card>
        <CardContent className="p-4 md:p-6">
          <div className="mx-auto max-w-5xl">
            <CardHeader>
              <CardTitle className="text-center text-4xl font-semibold sm:text-6xl">
                Album Description
              </CardTitle>
            </CardHeader>
            <div className="my-8 aspect-video xl:mb-16 xl:mt-12">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Rick Astley Album Cover"
                width={1000}
                height={500}
                layout="responsive"
                className="aspect-video object-cover"
              />
            </div>
            <div className="mx-auto max-w-2xl space-y-6">
              <p className="text-base text-muted-foreground">
                Rick Astley's debut album, "Whenever You Need Somebody,"
                released in 1987, is a timeless classic that catapulted him to
                international fame. Known for its catchy pop tunes and Rick's
                distinctive deep voice, this album remains a favorite among fans
                of 80s music.
              </p>
              <p className="text-base text-muted-foreground">
                The album features the iconic hit "Never Gonna Give You Up,"
                which became a global sensation and is still widely recognized
                today. Other standout tracks include "Together Forever,"
                "Whenever You Need Somebody," and "It Would Take a Strong Strong
                Man."
              </p>
              <h3 className="text-lg font-semibold">
                Key Features and Highlights:
              </h3>
              <ul className="space-y-4 pl-4">
                {[
                  {
                    title: "Iconic Hit Singles",
                    content:
                      "The album includes the legendary track 'Never Gonna Give You Up,' which became a cultural phenomenon and is often associated with the 'Rickroll' internet meme.",
                  },
                  {
                    title: "Catchy Pop Melodies",
                    content:
                      "Filled with upbeat, danceable tracks, the album is a perfect representation of 80s pop music, blending synthesizers, drum machines, and Rick's soulful voice.",
                  },
                  {
                    title: "Timeless Appeal",
                    content:
                      "Decades after its release, the album continues to resonate with audiences, thanks to its memorable lyrics and infectious energy.",
                  },
                  {
                    title: "Chart Success",
                    content:
                      "The album topped charts in multiple countries and solidified Rick Astley's place in music history.",
                  },
                ].map((item, index) => (
                  <li key={index} className="text-base text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      {item.title}:{" "}
                    </span>
                    {item.content}
                  </li>
                ))}
              </ul>
            </div>
            <div className="my-6 md:my-12">
              <iframe
                className="h-[260px] w-full rounded-lg md:h-[540px]"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mx-auto mb-6 max-w-3xl space-y-6 md:mb-12">
              <p className="text-base text-muted-foreground">
                Rick Astley's music has stood the test of time, and "Whenever
                You Need Somebody" remains a must-listen for fans of pop and 80s
                music. Whether you're rediscovering the album or hearing it for
                the first time, its charm is undeniable.
              </p>
              <p className="text-base text-muted-foreground">
                The album is available on various streaming platforms and in
                physical formats, making it easy to enjoy Rick's timeless hits
                wherever you are.
              </p>
            </div>
            <div className="text-center">
              <Button variant="outline">Show more...</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
