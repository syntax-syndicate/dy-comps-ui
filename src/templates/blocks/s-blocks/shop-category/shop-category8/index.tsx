import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Gadgets & Tech",
    items: [
      "Laptops & Desktops",
      "Smart TVs",
      "Home Projectors",
      "Tablets & iPads",
      "Speakers & Soundbars",
      "Wearable Tech",
      "Gaming Systems",
      "DSLR Cameras",
      "Earbuds & Headsets",
      "Smartphones",
    ],
  },
  {
    title: "Apparel & Style",
    items: [
      "Casual Tops",
      "Denim Jeans",
      "Evening Dresses",
      "Outerwear Coats",
      "Knit Sweaters",
      "Summer Skirts",
      "Formal Suits",
      "Elegant Blouses",
      "Comfy Shorts",
      "Stylish Scarves",
    ],
  },
  {
    title: "Groceries & Essentials",
    items: [
      "Fresh Produce",
      "Organic Veggies",
      "Artisan Bread",
      "Cheese & Yogurt",
      "Fresh Meats",
      "Frozen Seafood",
      "Rice & Pasta",
      "Pantry Staples",
      "Sweet Snacks",
      "Cold Drinks",
    ],
  },
  {
    title: "Outdoor Adventures",
    items: [
      "Camping Tents",
      "Hiking Backpacks",
      "Sleeping Gear",
      "Running Shoes",
      "Activity Trackers",
      "Mountain Bikes",
      "Fishing Rods",
      "Canoes & Kayaks",
      "Athletic Wear",
      "Home Gym Equipment",
    ],
  },
  {
    title: "Wellness & Care",
    items: [
      "Health Supplements",
      "Hair Care Kits",
      "Body Cleansers",
      "UV Protection",
      "Oral Hygiene",
      "Lip Care",
      "Personal Freshness",
      "Beauty Cosmetics",
      "Hair Tools",
      "Skin Hydration",
    ],
  },
];

export default function FeaturedCategories() {
  return (
    <section className="w-full bg-background py-16 md:py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Explore Popular Categories
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group relative rounded-lg border p-5 transition-all hover:border-primary/20 hover:bg-accent/10"
              >
                <h3 className="mb-4 text-base font-semibold tracking-wide text-foreground">
                  {category.title}
                </h3>

                <ul className="space-y-2.5">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="line-clamp-1">
                      <Link
                        href="#"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground hover:underline"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 pt-3">
                  <Link
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-primary transition-opacity hover:opacity-80"
                  >
                    Discover More
                    <ArrowRight className="ml-2 h-4 w-4 translate-x-0 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
