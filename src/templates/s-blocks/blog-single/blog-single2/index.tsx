import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function BlogSingle2() {
  return (
    <article className="container mx-auto max-w-4xl py-16">
      <header className="mb-8">
        <nav className="mb-4">
          <Link
            href="/category/interior"
            className="text-sm font-semibold text-primary hover:underline"
          >
            Interior
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/category/bedrooms"
            className="text-sm font-semibold text-primary hover:underline"
          >
            Bedrooms
          </Link>
        </nav>
        <h1 className="mb-4 text-4xl font-bold">
          17 Guest Bedroom Ideas Sure to Make Visitors Feel Right at Home
        </h1>
        <p className="mb-4 text-xl text-muted-foreground">
          Give your guests the five-star treatment so that they can unwind in
          comfortable privacy while you focus on entertaining.
        </p>
        <div className="mb-6 flex items-center gap-4">
          <Avatar>
            <AvatarImage
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Emily Benda Gaylord"
            />
            <AvatarFallback>EBG</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">By Emily Benda Gaylord</p>
            <p className="text-sm text-muted-foreground">
              Posted on Oct 31, 2024 5:38 PM EDT
            </p>
          </div>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1719937206109-7f4e933230c8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="An upstairs spare bedroom furnished with a neatly made bed, two nightstands, dresser, and an extra chair."
          width={1200}
          height={600}
          className="rounded-lg"
        />
        <p className="mt-2 text-sm text-muted-foreground">
          Photo: Jon Lovette via Getty Images
        </p>
      </header>

      <div className="prose-primary prose dark:prose-invert max-w-none">
        <p>
          Being a guest in someone&apos;s home is never the easiest experience.
          But as a host, there are many small details you can get right in your
          guest room to make visitors feel welcome and relaxed. It&apos;s a
          private space for your guests to unwind and have some time to
          themselves, so making a guest bedroom cozy is just as important as
          ensuring it covers all the necessities. These guest bedroom ideas are
          surefire ways to accomplish both, and maybe even wow your company in
          the process!
        </p>

        <h2 id="comfortable-bedding">1. Choose comfortable bedding.</h2>
        <Image
          src="https://images.unsplash.com/photo-1611417042712-5777f4f8fe18?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="A small upstairs guest bedroom with a window and full-size bed made with a pale-green comforter and four down pillows."
          width={600}
          height={400}
          className="my-4 rounded-lg dark:invert-0"
        />
        <p>
          Airbnb host Jonas Zook says bedding is one of the most important
          elements of guest bedroom decor since it can determine if your guests
          have a good night&apos;s rest. &quot;For bedding, I recommend a
          high-quality mattress, supportive pillows, and soft sheets,&quot; Zook
          says.
        </p>
        <p>
          Cleanliness is extremely important, so make sure the sheets are
          freshly washed and doesn&apos;t have any questionable stains. Layers
          are also a good idea so guests can pile on or remove blankets and
          comforters if they run cold or hot.
        </p>

        {/* Add more sections here following the same pattern */}
      </div>

      <footer className="mt-8">
        <h3 className="mb-2 text-lg font-semibold">Tags</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">
            <Link href="/category/design">Design</Link>
          </Badge>
          <Badge variant="secondary">
            <Link href="/category/interior-design">Interior Design</Link>
          </Badge>
        </div>
      </footer>
    </article>
  );
}
