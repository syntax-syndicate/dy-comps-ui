import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProductDescription() {
  return (
    <section className="bg-background py-8 text-foreground md:py-16">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold">GPS Navigator Pro</h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Advanced navigation system with high-sensitivity GPS receiver,
            7-inch touchscreen, and preloaded maps for 100+ countries.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">GPS</Badge>
            <Badge variant="secondary">GLONASS</Badge>
            <Badge variant="secondary">Galileo</Badge>
            <Badge variant="secondary">7" Display</Badge>
            <Badge variant="secondary">Touchscreen</Badge>
            <Badge variant="secondary">Bluetooth</Badge>
          </div>
        </div>

        <Image
          src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
          alt="GPS Navigator Pro"
          width={800}
          height={600}
          className="mb-8 aspect-video w-full rounded-lg object-cover"
        />

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Key Features</h2>
            <ul className="list-inside list-disc space-y-2">
              <li>
                High-sensitivity GPS receiver with multi-satellite support
              </li>
              <li>
                7-inch high-resolution touchscreen with anti-glare coating
              </li>
              <li>Preloaded maps for over 100 countries</li>
              <li>
                Free lifetime map updates and real-time traffic information
              </li>
              <li>Offline navigation capabilities</li>
              <li>Voice guidance and lane assistance</li>
              <li>Bluetooth connectivity for hands-free calling</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Usage and Benefits</h2>
            <ul className="list-inside list-disc space-y-2">
              <li>Easy dashboard or windshield mounting</li>
              <li>Intuitive touchscreen interface for route planning</li>
              <li>Voice command support for hands-free operation</li>
              <li>Multi-stop route planning for complex journeys</li>
              <li>Topographic maps for outdoor adventures</li>
              <li>Trip planner for organizing favorite destinations</li>
              <li>Expandable storage via microSD card slot</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-semibold">Detailed Description</h2>
          <div className="space-y-4">
            <p>
              The GPS Navigator Pro features a high-sensitivity GPS receiver
              with support for multiple satellite systems, including GPS,
              GLONASS, and Galileo. This ensures accurate positioning even in
              challenging environments like urban canyons or dense forests.
            </p>
            <p>
              With a 7-inch high-resolution touchscreen display, the device
              offers clear and intuitive navigation. The anti-glare coating
              ensures visibility even in bright sunlight, making it perfect for
              outdoor adventures or long road trips.
            </p>
            <p>
              The GPS Navigator comes preloaded with detailed maps of over 100
              countries, and free lifetime map updates ensure you always have
              the latest information. Real-time traffic updates and voice
              guidance help you avoid congestion and reach your destination
              faster.
            </p>
            <p>
              Additionally, the device supports offline navigation, allowing you
              to use it in areas with limited or no cellular coverage. This
              makes it an excellent choice for remote travel or international
              trips where data connectivity might be unreliable.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-semibold">
            Technical Specifications
          </h2>
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b">
                <td className="py-2 pr-4 font-medium">Display</td>
                <td>
                  7-inch touchscreen, 800x480 resolution, anti-glare coating
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4 font-medium">GPS Receiver</td>
                <td>High-sensitivity GPS, GLONASS, and Galileo support</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4 font-medium">Connectivity</td>
                <td>Bluetooth, micro-USB, microSD (up to 32GB)</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4 font-medium">Battery</td>
                <td>Up to 5 hours of continuous use</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4 font-medium">Dimensions</td>
                <td>19.5 x 11.5 x 2.2 cm (7.7 x 4.5 x 0.9 in)</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4 font-medium">Weight</td>
                <td>300 g (10.6 oz)</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">In the Box</td>
                <td>
                  GPS Navigator, car mount, car charger, USB cable, quick start
                  guide
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
