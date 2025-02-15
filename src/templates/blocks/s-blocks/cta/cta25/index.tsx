import { QRCodeSVG } from "qrcode.react";

export default function CallToAction25() {
  return (
    <section className="flex min-h-[400px] items-center justify-center bg-background py-16 text-foreground">
      <div className="container mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Trade. <span className="text-primary">Anywhere.</span>
        </h1>
        <p className="mb-12 text-lg text-muted-foreground">
          Compatible with multiple devices, start trading with safety and
          convenience.
        </p>
        <div className="rounded-lg bg-card p-4">
          <QRCodeSVG
            value="https://example.com/trade"
            size={200}
            level="H"
            className="h-48 w-48 md:h-64 md:w-64"
          />
        </div>
      </div>
    </section>
  );
}
