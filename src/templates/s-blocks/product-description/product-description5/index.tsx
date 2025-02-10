import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function ProductInfoPage() {
  return (
    <div className="container py-8">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="mb-2 text-4xl font-bold tracking-tight">
            EcoTech Pro X1000
          </h1>
          <p className="mb-4 text-xl text-muted-foreground">
            Next-Generation Smart Home Energy Management System
          </p>
          <div className="relative mb-6 aspect-video">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="EcoTech Pro X1000 installed in a modern home"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="mb-6 flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-sm">
              Energy Efficient
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Smart Home
            </Badge>
            <Badge variant="secondary" className="text-sm">
              IoT Compatible
            </Badge>
            <Badge variant="secondary" className="text-sm">
              AI-Powered
            </Badge>
          </div>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">Product Overview</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The EcoTech Pro X1000 is a cutting-edge smart home energy
                management system designed to revolutionize the way you control
                and monitor your home's energy consumption. With its advanced
                AI-driven algorithms and seamless integration with your existing
                smart home devices, the Pro X1000 offers unparalleled efficiency
                and savings.
              </p>
              <p>
                Our system learns your household's energy usage patterns and
                automatically optimizes consumption, potentially reducing your
                energy bills by up to 30%. The sleek, modern design of the Pro
                X1000 hub fits perfectly into any home decor, while its
                intuitive mobile app gives you complete control at your
                fingertips.
              </p>
              <p>
                Whether you're looking to reduce your carbon footprint, save
                money on utilities, or simply gain more insight into your energy
                usage, the EcoTech Pro X1000 is the perfect solution for the
                environmentally conscious and tech-savvy homeowner.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">Key Features</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <strong className="">AI-Powered Optimization:</strong> Advanced
                machine learning algorithms that adapt to your lifestyle and
                maximize energy efficiency.
              </li>
              <li>
                <strong className="">Real-Time Monitoring:</strong> Track energy
                consumption of individual appliances and systems in real-time
                through the mobile app or web dashboard.
              </li>
              <li>
                <strong className="">Smart Device Integration:</strong>{" "}
                Seamlessly connects with popular smart home ecosystems like
                Google Home, Amazon Alexa, and Apple HomeKit.
              </li>
              <li>
                <strong className="">Predictive Maintenance:</strong> Identifies
                potential issues with appliances before they become problems,
                saving you money on repairs and replacements.
              </li>
              <li>
                <strong className="">Custom Energy Goals:</strong> Set and track
                personalized energy-saving targets with guided recommendations.
              </li>
              <li>
                <strong className="">Time-of-Use Optimization:</strong>{" "}
                Automatically shifts energy-intensive tasks to off-peak hours to
                take advantage of lower utility rates.
              </li>
              <li>
                <strong className="">Solar Panel Compatibility:</strong>{" "}
                Optimizes energy usage when paired with solar panel systems,
                maximizing the use of clean energy.
              </li>
              <li>
                <strong className="">Voice Control:</strong> Manage your energy
                settings hands-free with voice commands through your preferred
                smart assistant.
              </li>
            </ul>
          </section>

          <Card className="mb-8 p-6">
            <h2 className="mb-4 text-2xl font-semibold">
              Technical Specifications
            </h2>
            <div className="grid grid-cols-1 gap-6 text-muted-foreground md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold">Dimensions</h3>
                  <p>4.5" x 4.5" x 1.2" (114.3mm x 114.3mm x 30.5mm)</p>
                </div>
                <Separator />
                <div>
                  <h3 className="mb-2 font-semibold">Weight</h3>
                  <p>8.5 oz (240g)</p>
                </div>
                <Separator />
                <div>
                  <h3 className="mb-2 font-semibold">Power</h3>
                  <p>100-240V AC, 50/60Hz</p>
                </div>
                <Separator />
                <div>
                  <h3 className="mb-2 font-semibold">Connectivity</h3>
                  <ul className="list-inside list-disc">
                    <li>Wi-Fi: 802.11 a/b/g/n/ac (2.4GHz and 5GHz)</li>
                    <li>Bluetooth 5.0</li>
                    <li>Zigbee 3.0</li>
                    <li>Z-Wave Plus</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold">Compatibility</h3>
                  <ul className="list-inside list-disc">
                    <li>iOS 13.0 or later</li>
                    <li>Android 8.0 or later</li>
                    <li>
                      Works with Amazon Alexa, Google Assistant, and Apple
                      HomeKit
                    </li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <h3 className="mb-2 font-semibold">Sensors</h3>
                  <ul className="list-inside list-disc">
                    <li>Temperature</li>
                    <li>Humidity</li>
                    <li>Ambient light</li>
                    <li>Motion (for occupancy detection)</li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <h3 className="mb-2 font-semibold">Security</h3>
                  <ul className="list-inside list-disc">
                    <li>End-to-end encryption</li>
                    <li>Two-factor authentication</li>
                    <li>Regular security updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardContent className="p-6">
              <div className="mb-4">
                <p className="text-4xl font-bold">$599.99</p>
                <p className="text-sm text-muted-foreground">
                  Free shipping on orders over $500
                </p>
              </div>
              <Button size="lg" className="mb-4 w-full">
                Add to Cart
              </Button>
              <p className="mb-4 text-sm text-muted-foreground">
                30-day money-back guarantee. Free returns.
              </p>
              <Separator className="my-4" />
              <h3 className="mb-2 font-semibold">What's in the box:</h3>
              <ul className="mb-4 list-inside list-disc text-sm text-muted-foreground">
                <li>EcoTech Pro X1000 Hub</li>
                <li>Power adapter</li>
                <li>Quick start guide</li>
                <li>5 smart plugs</li>
                <li>2 door/window sensors</li>
              </ul>
              <Separator className="my-4" />
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold">Estimated delivery:</p>
                <p>3-5 business days</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
