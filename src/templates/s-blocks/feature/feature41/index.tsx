import { MapPin, Flag } from "lucide-react";

export default function Feature41() {
  const locations = [
    {
      city: "Lisbon, Portugal",
      address: "Exemplo de rua 2",
      postalCode: "1000-100 Lisboa",
      flagColor: "bg-red-500",
      coords: { lat: 38.7223, lng: -9.1393 },
    },
    {
      city: "Rome, Italy",
      address: "Esempio di strada 2",
      postalCode: "00042 Roma",
      flagColor: "bg-green-500",
      coords: { lat: 41.9028, lng: 12.4964 },
    },
    {
      city: "Paris, France",
      address: "Exemple de rue 2",
      postalCode: "75000 Paris",
      flagColor: "bg-blue-500",
      coords: { lat: 48.8566, lng: 2.3522 },
    },
    {
      city: "Madrid, Spain",
      address: "Ejemplo de calle 2",
      postalCode: "28000 Madrid",
      flagColor: "bg-amber-500",
      coords: { lat: 40.4168, lng: -3.7038 },
    },
  ];

  return (
    <section className="bg-background py-24 text-foreground">
      <div className="container mx-auto">
        <div className="grid gap-12 md:grid-cols-5 md:gap-8">
          <div className="col-span-2 flex flex-col justify-center">
            <h2 className="mb-4 text-4xl font-bold lg:text-5xl">
              Explore Our Global Presence
            </h2>
            <p className="text-lg text-muted-foreground">
              Find our offices and facilities worldwide. Contact us to learn
              more.
            </p>
          </div>
          <div className="col-span-3 grid gap-8 sm:grid-cols-2">
            {locations.map((location, index) => (
              <div
                key={index}
                className="group relative rounded-lg border border-border p-6 transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="absolute right-4 top-4 flex items-center gap-2">
                  <div
                    className={`h-5 w-7 rounded-sm ${location.flagColor} relative`}
                  ></div>
                  <Flag className="size-4 text-muted-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{location.city}</h3>
                <div className="mb-2 flex items-center text-muted-foreground">
                  <MapPin className="mr-1 size-4" />
                  <p className="text-sm">
                    {location.address} <br /> {location.postalCode}
                  </p>
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${location.coords.lat},${location.coords.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
                >
                  View on Map
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
