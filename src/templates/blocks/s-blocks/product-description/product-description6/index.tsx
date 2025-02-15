import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ProductDescription() {
  return (
    <Card className="bg-background py-8 text-foreground md:py-16">
      <CardContent className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="mb-6 text-xl font-semibold sm:mb-8 sm:text-2xl lg:mb-8">
          Product Description
        </h2>
        <div className="mb-6 space-y-6 sm:mb-8 lg:mb-8 lg:space-y-16">
          <div className="grid lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <p className="text-muted-foreground">
                The GPS Navigator features a high-sensitivity GPS receiver with
                support for multiple satellite systems, including GPS, GLONASS,
                and Galileo. This ensures accurate positioning even in
                challenging environments like urban canyons or dense forests.
              </p>
              <p className="text-muted-foreground">
                With a 7-inch high-resolution touchscreen display, the device
                offers clear and intuitive navigation. The anti-glare coating
                ensures visibility even in bright sunlight, making it perfect
                for outdoor adventures or long road trips.
              </p>
              <p className="text-muted-foreground">
                The GPS Navigator comes preloaded with detailed maps of over 100
                countries, and free lifetime map updates ensure you always have
                the latest information. Real-time traffic updates and voice
                guidance help you avoid congestion and reach your destination
                faster.
              </p>
              <p className="text-muted-foreground">
                Additionally, the device supports offline navigation, allowing
                you to use it in areas with limited or no cellular coverage.
                This makes it an excellent choice for remote travel or
                international trips where data connectivity might be unreliable.
              </p>
            </div>
            <div className="mx-auto hidden max-w-md shrink-0 lg:flex lg:max-w-lg">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="GPS front view"
                width={400}
                height={400}
                className="w-full"
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 lg:gap-16">
            <div className="mx-auto hidden max-w-md shrink-0 lg:flex lg:max-w-lg">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="GPS mounted in car"
                width={400}
                height={400}
                className="w-full"
              />
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Easy Installation and Use:
                </span>
                The GPS Navigator comes with a versatile mounting system that
                allows you to securely attach it to your car's dashboard or
                windshield. The adjustable mount ensures optimal viewing angles,
                and the device is powered via a car charger for uninterrupted
                navigation.
              </p>
              <p className="text-muted-foreground">
                The intuitive user interface makes it easy to plan routes,
                search for points of interest, and customize your navigation
                preferences. Voice commands allow you to control the device
                hands-free, ensuring a safe driving experience.
              </p>
              <p className="text-muted-foreground">
                With Bluetooth connectivity, you can pair your smartphone to
                receive calls and notifications directly on the GPS screen. This
                feature keeps you connected without distracting you from the
                road.
              </p>
              <p className="text-muted-foreground">
                The device also includes a built-in speaker for clear voice
                guidance and alerts. For added convenience, you can connect
                external speakers or headphones via the 3.5mm audio jack for
                private listening.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Advanced Features for Every Journey:
                </span>
                The GPS Navigator includes advanced features like lane guidance,
                speed limit alerts, and junction view to help you navigate
                complex road networks with ease. The device also supports
                multi-stop route planning, making it ideal for road trips or
                delivery routes.
              </p>
              <p className="text-muted-foreground">
                For outdoor enthusiasts, the device offers topographic maps and
                trailhead information, making it a great companion for hiking,
                biking, or camping. The rugged design and water-resistant
                construction ensure durability in all weather conditions.
              </p>
              <p className="text-muted-foreground">
                The built-in battery provides up to 5 hours of continuous use,
                allowing you to use the device even when you're away from your
                vehicle. The microSD card slot lets you expand storage for
                additional maps or media files.
              </p>
              <p className="text-muted-foreground">
                Furthermore, the GPS Navigator includes a trip planner feature
                that lets you save and organize your favorite destinations. You
                can also track your travel history and share routes with friends
                or family, making it a versatile tool for both personal and
                professional use.
              </p>
            </div>
            <div className="mx-auto hidden max-w-md shrink-0 lg:flex lg:max-w-lg">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="GPS used outdoors"
                width={400}
                height={400}
                className="w-full"
              />
            </div>
          </div>
        </div>

        <h2 className="mb-6 text-xl font-semibold sm:mb-8 sm:text-2xl lg:mb-8">
          Technical Details
        </h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-72">
                  <span className="sr-only">Name</span>
                </TableHead>
                <TableHead className="min-w-[36rem] whitespace-nowrap">
                  <span className="sr-only">Description</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Display</TableCell>
                <TableCell>
                  7-inch high-resolution touchscreen, anti-glare coating,
                  800x480 resolution, supports multi-touch gestures
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">GPS Receiver</TableCell>
                <TableCell>
                  High-sensitivity GPS, GLONASS, and Galileo support, fast
                  satellite acquisition
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Maps</TableCell>
                <TableCell>
                  Preloaded maps for 100+ countries, free lifetime map updates,
                  real-time traffic updates
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Connectivity</TableCell>
                <TableCell>
                  Bluetooth, micro-USB port, microSD card slot (up to 32GB
                  supported)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Battery</TableCell>
                <TableCell>
                  Built-in rechargeable battery, up to 5 hours of continuous use
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Dimensions</TableCell>
                <TableCell>19.5 x 11.5 x 2.2 cm (7.7 x 4.5 x 0.9 in)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Weight</TableCell>
                <TableCell>300 g (10.6 oz)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">In the Box</TableCell>
                <TableCell>
                  GPS Navigator, car mount, car charger, USB cable, quick start
                  guide
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
