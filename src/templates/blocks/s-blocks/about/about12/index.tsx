import Image from "next/image";
import Link from "next/link";
import { Calendar, Users, Book, Mountain, Coffee } from "lucide-react";

export default function About12() {
  return (
    <div className="container mx-auto bg-background py-12 text-foreground">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        {/* Left Column */}
        <div className="space-y-12">
          {/* Top Left Section */}
          <div className="space-y-4">
            <h2 className="text-6xl font-bold">
              10+ SESSIONS
              <br />
              <span className="text-primary">15+ WORKSHOPS</span>
            </h2>
            <p className="text-muted-foreground">
              Join us for an immersive experience filled with learning
              opportunities and hands-on activities.
            </p>
            <Link
              href="/dates"
              className="flex items-center space-x-2 text-primary hover:underline"
            >
              <Calendar className="size-5" />
              <span>Multiple dates available</span>
            </Link>
          </div>

          {/* Bottom Left Section */}
          <div className="space-y-4 md:mt-24">
            <h2 className="text-3xl font-bold">
              SPEND TIME WITH GOOD PEOPLE WITH BRILLIANT MINDS
            </h2>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="People in a workshop setting"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-lg object-cover"
              />
            </div>
            <Link
              href="/networking"
              className="flex items-center space-x-2 text-primary hover:underline"
            >
              <Users className="size-5" />
              <span>Network with industry experts</span>
            </Link>
          </div>

          {/* Additional Left Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Expand Your Knowledge</h3>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Learning session"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-lg object-cover"
              />
            </div>
            <p className="text-muted-foreground">
              Dive deep into cutting-edge topics and emerging trends in your
              field.
            </p>
            <Link
              href="/materials"
              className="flex items-center space-x-2 text-primary hover:underline"
            >
              <Book className="size-5" />
              <span>Comprehensive learning materials provided</span>
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-12 md:mt-24">
          {/* Top Right Section */}
          <div className="space-y-4">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Ski day event"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-lg object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold">Ski Day Event</h3>
            <p className="text-muted-foreground">
              Experience the thrill of the slopes with our annual ski day event.
              Perfect for all skill levels!
            </p>
            <Link
              href="/ski-day"
              className="flex items-center space-x-2 text-primary hover:underline"
            >
              <Mountain className="size-5" />
              <span>Equipment rental available</span>
            </Link>
          </div>

          {/* Middle Right Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Coffee & Connections</h3>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Networking event"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-lg object-cover"
              />
            </div>
            <p className="text-muted-foreground">
              Start your day with stimulating conversations and premium coffee.
              Build lasting professional relationships.
            </p>
            <Link
              href="/coffee-connections"
              className="flex items-center space-x-2 text-primary hover:underline"
            >
              <Coffee className="size-5" />
              <span>Daily morning meetups</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
