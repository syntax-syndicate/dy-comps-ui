import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background py-16">
      <div className="mb-8 rounded-lg bg-accent">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={150}
            height={50}
            className="mx-auto"
            priority
          />
        </Link>
      </div>
      <div className="w-full max-w-4xl text-center">
        {/* Content */}
        <h1 className="mb-4 text-4xl font-bold text-primary md:text-5xl lg:text-6xl">
          404 Not Found
        </h1>
        <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
          Whoops! That page doesn&apos;t exist.
        </h2>

        {/* Navigation Links */}
        <div className="text-center">
          <p className="mb-4 text-muted-foreground">
            Here are some helpful links instead:
          </p>
          <nav>
            <ul className="flex items-center justify-center gap-6">
              <li>
                <Link
                  href="/"
                  className="text-primary transition-colors hover:text-primary/80"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/search"
                  className="text-primary transition-colors hover:text-primary/80"
                >
                  Search
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="text-primary transition-colors hover:text-primary/80"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary transition-colors hover:text-primary/80"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}
