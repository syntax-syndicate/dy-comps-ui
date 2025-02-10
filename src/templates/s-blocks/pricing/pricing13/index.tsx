import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const addons = [
  {
    name: "Extra Storage",
    description:
      "Expand your cloud capacity with additional secure storage space.",
    price: 5,
    unit: "GB",
    popular: true,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    features: ["100GB extra storage", "Automatic backup", "File versioning"],
  },
  {
    name: "Advanced Sharing",
    description:
      "Unlock powerful collaboration tools and granular access controls.",
    price: 10,
    unit: "month",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    features: [
      "Custom permissions",
      "Password-protected links",
      "Expiring share links",
    ],
  },
  {
    name: "AI-Powered Search",
    description:
      "Find any file instantly with our cutting-edge AI search technology.",
    price: 15,
    unit: "month",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    features: [
      "Content-based search",
      "Image recognition",
      "Natural language processing",
    ],
  },
];

export default function EnhancedCloudStorageAddons() {
  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="mb-12 space-y-4">
          <h2 className="text-4xl font-bold">Enhance Your Cloud Experience</h2>
          <p className="text-lg text-muted-foreground">
            Customize your cloud storage with powerful add-ons designed to boost
            productivity and security.
          </p>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-3">
          {addons.map((addon, index) => (
            <Card
              key={index}
              className="relative flex flex-col overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-video">
                <Image
                  src={addon.image}
                  alt={`${addon.name} illustration`}
                  layout="fill"
                  objectFit="cover"
                />
                {addon.popular && (
                  <Badge
                    className="absolute right-2 top-2 bg-primary text-primary-foreground"
                    variant="secondary"
                  >
                    Popular
                  </Badge>
                )}
              </div>
              <CardHeader>
                <CardTitle className="mb-2 text-2xl">{addon.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-grow flex-col justify-between">
                <p className="mb-4 text-muted-foreground">
                  {addon.description}
                </p>
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-bold">${addon.price}</span>
                  <span className="text-muted-foreground">
                    per {addon.unit}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Add-on Comparison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Feature</TableHead>
                  {addons.map((addon) => (
                    <TableHead key={addon.name}>{addon.name}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {["Feature 1", "Feature 2", "Feature 3"].map(
                  (feature, index) => (
                    <TableRow key={feature}>
                      <TableCell className="font-medium">{feature}</TableCell>
                      {addons.map((addon) => (
                        <TableCell key={`${addon.name}-${feature}`}>
                          {addon.features[index] ?? "-"}
                        </TableCell>
                      ))}
                    </TableRow>
                  ),
                )}
                <TableRow>
                  <TableCell className="font-medium">Price</TableCell>
                  {addons.map((addon) => (
                    <TableCell key={`${addon.name}-price`}>
                      ${addon.price}/{addon.unit}
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
