"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function AlbumDescription() {
  return (
    <div className="min-h-screen bg-background p-4 text-foreground md:p-8 lg:py-16">
      <div className="container mx-auto space-y-8">
        {/* Album Overview Section */}
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-2xl font-semibold md:text-3xl">
              Album Description
            </h1>
            <div className="space-y-4 text-sm text-muted-foreground md:text-base">
              <p>
                Rick Astley's debut album, "Whenever You Need Somebody,"
                released in 1987, is a timeless classic that catapulted him to
                international fame. Known for its catchy pop tunes, infectious
                energy, and Rick's distinctive deep voice, this album remains a
                favorite among fans of 80s music. Produced by the legendary trio
                Stock Aitken Waterman, the album is a masterclass in 80s pop
                production, blending synthesizers, drum machines, and heartfelt
                lyrics into a sound that defined an era.
              </p>

              <p>
                With its blend of upbeat melodies, heartfelt lyrics, and Rick's
                soulful vocals, this album is a must-listen for anyone who loves
                80s pop music. The album's production is polished yet
                accessible, making it a perfect representation of the era's pop
                sound. Tracks like "When I Fall in Love" and "Don't Say Goodbye"
                further demonstrate Rick's versatility as an artist, balancing
                danceable tracks with slower, more introspective moments.
              </p>
              <p>
                Beyond its musical achievements, "Whenever You Need Somebody"
                holds a special place in pop culture history. It marked the
                arrival of a new star in Rick Astley, who quickly became a
                household name. The album's success was not just commercial but
                also critical, earning praise for its catchy hooks, relatable
                themes, and Rick's undeniable charisma. Decades later, the album
                continues to resonate with audiences, proving that great music
                truly stands the test of time.
              </p>
            </div>
          </div>
          <div className="relative aspect-video md:aspect-square">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Whenever You Need Somebody Album Cover"
              fill
              className="rounded-lg object-contain"
              priority
            />
          </div>
        </div>
        {/* Technical Details Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold md:text-2xl">Album Details</h2>
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Specification</TableHead>
                    <TableHead>Details</TableHead>
                    <TableHead>Additional Info</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Release Date</TableCell>
                    <TableCell className="text-muted-foreground">
                      November 16, 1987
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      Debuted at #1 in the UK
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Genre</TableCell>
                    <TableCell className="text-muted-foreground">
                      Pop, Dance-Pop
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      Influenced by 80s synth-pop
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Label</TableCell>
                    <TableCell className="text-muted-foreground">
                      RCA Records
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      Produced by Stock Aitken Waterman
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Length</TableCell>
                    <TableCell className="text-muted-foreground">
                      40:12 (Original Release)
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      Includes 10 tracks
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Singles</TableCell>
                    <TableCell className="text-muted-foreground">
                      "Never Gonna Give You Up," "Together Forever," "Whenever
                      You Need Somebody"
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      All singles charted in the top 10 globally
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Certifications
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      Platinum (UK, US, Canada)
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      Over 15 million copies sold worldwide
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        {/* Features Section */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-card">
            <CardContent className="space-y-2 p-6">
              <h3 className="text-lg font-medium">Iconic Hit Singles</h3>
              <p className="text-sm text-muted-foreground">
                Includes the legendary track "Never Gonna Give You Up," which
                became a cultural phenomenon.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card">
            <CardContent className="space-y-2 p-6">
              <h3 className="text-lg font-medium">Catchy Pop Melodies</h3>
              <p className="text-sm text-muted-foreground">
                Filled with upbeat, danceable tracks that define 80s pop music.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card">
            <CardContent className="space-y-2 p-6">
              <h3 className="text-lg font-medium">Timeless Appeal</h3>
              <p className="text-sm text-muted-foreground">
                Decades after its release, the album continues to resonate with
                audiences worldwide.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
