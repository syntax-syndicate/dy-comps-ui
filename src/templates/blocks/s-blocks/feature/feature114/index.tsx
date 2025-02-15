import {
  ArrowUpRight,
  Lock,
  CheckCircle,
  Cloud,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Feature114() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Secure and Enterprise-ready
            </h2>
            <p className="mt-2 text-xl text-muted-foreground">
              Meet security and operational requirements to bring AI products to
              market faster.
            </p>
          </div>
          <Link
            href="/security"
            className="mb-auto mt-4 inline-flex items-center text-primary hover:underline"
          >
            Explore security
            <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="inline-flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-accent">
              <Lock className="size-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Secure</h3>
            <p className="text-muted-foreground">
              Control your data and know it&apos;s safe. Pinecone is SOC 2 and
              HIPAA certified.
            </p>
          </div>

          <div className="space-y-4">
            <div className="inline-flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-accent">
              <CheckCircle className="size-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Reliable</h3>
            <p className="text-muted-foreground">
              Powering mission-critical applications of all sizes, with support
              SLAs and observability.
            </p>
          </div>

          <div className="space-y-4">
            <div className="inline-flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-accent">
              <Cloud className="size-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Cloud-native</h3>
            <p className="text-muted-foreground">
              Fully managed in the cloud of your choice. Also available via
              marketplaces: AWS, Azure, GCP.
            </p>
          </div>
        </div>

        <Separator className="my-16" />

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold tracking-tight">
            Enterprise-grade security and compliance
          </h3>
          <p className="max-w-3xl text-muted-foreground">
            Our platform is designed to meet the most stringent security
            requirements. We offer advanced features such as end-to-end
            encryption, role-based access control, and comprehensive audit logs
            to ensure your data remains protected at all times.
          </p>
          <Link
            href="/enterprise"
            className="inline-flex items-center text-primary hover:underline"
          >
            Learn more about our enterprise solutions
            <ArrowRight className="ml-1 size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
