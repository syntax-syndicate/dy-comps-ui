import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Focus Paper Refill",
    details: "3 sizes available",
    price: "$13",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Focus Card Holder",
    details: "Walnut",
    price: "$64",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Focus Carry Case",
    details: "Heather Gray",
    price: "$32",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Focus Multi-Pack",
    details: "3 refill packs",
    price: "$39",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Machined Mechanical Pencil",
    details: "Black and brass",
    price: "$35",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Brass Scissors",
    details: "Includes brass stand",
    price: "$50",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function ProductList5() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, i) => (
          <Link key={i} href="#" className="group relative flex flex-col">
            <div className="aspect-[3/4] w-full overflow-hidden rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={800}
                className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 flex flex-col">
              <h3 className="text-sm font-medium text-foreground transition-colors duration-300 group-hover:text-primary">
                {product.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {product.details}
              </p>
              <p className="mt-1 text-sm font-medium text-primary">
                {product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
