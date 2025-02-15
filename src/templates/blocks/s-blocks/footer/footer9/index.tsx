import Link from "next/link";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

export default function Footer9() {
  return (
    <footer className="bg-secondary py-12 text-secondary-foreground">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-sm">
              We are a company dedicated to providing excellent services and
              products to our customers.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-sm">123 Main St, Anytown, USA 12345</p>
            <p className="text-sm">Email: info@example.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-secondary-foreground hover:text-primary"
              >
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-secondary-foreground hover:text-primary"
              >
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-secondary-foreground hover:text-primary"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-secondary-foreground hover:text-primary"
              >
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-secondary-foreground/10 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
