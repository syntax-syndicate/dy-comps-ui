import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function AIImagePricing() {
  return (
    <section className="py-24">
      <div className="container">
        <Card className="border py-6 md:py-8 lg:pb-12 lg:pt-16">
          <CardContent className="px-6 md:px-8 lg:px-12">
            <div className="mb-8 md:mb-10 md:flex md:justify-between lg:mb-9">
              <div className="lg:w-2/3">
                <h1 className="mb-4 text-2xl font-medium md:text-3xl lg:text-4xl">
                  Enhance Your AI Image Generation
                </h1>
                <p className="text-xs text-muted-foreground md:text-sm lg:text-base">
                  Unlock the full potential of AI-powered creativity with our
                  premium add-ons. Elevate your image generation experience and
                  bring your imagination to life.
                </p>
              </div>
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="AI Image Generation"
                className="hidden size-24 rounded-lg md:block lg:size-32"
                width={200}
                height={200}
              />
            </div>

            <div className="flex gap-x-8 gap-y-3 xl:flex-row">
              {[
                {
                  name: "High-Resolution Output",
                  description:
                    "Generate images up to 4K resolution for stunning detail and clarity",
                  price: 19.99,
                },
                {
                  name: "Style Transfer",
                  description:
                    "Apply artistic styles from famous paintings to your AI-generated images",
                  price: 14.99,
                },
                {
                  name: "Batch Processing",
                  description:
                    "Create multiple variations of your prompts in a single generation",
                  price: 24.99,
                },
              ].map((option, index) => (
                <Card key={index} className="flex-1 bg-accent p-6 lg:py-8">
                  <h2 className="mb-1.5 text-base font-medium lg:mb-2 lg:text-lg">
                    {option.name}
                  </h2>
                  <div className="grid flex-1 grid-cols-1 gap-x-10 md:grid-cols-3 lg:grid-cols-1">
                    <p className="mb-8 max-w-xs text-xs text-muted-foreground md:col-span-2 md:mb-0 lg:mb-10 lg:text-base">
                      {option.description}
                    </p>
                    <div className="col-span-1 md:ml-auto md:mt-auto lg:ml-0">
                      <p>
                        <span className="font-medium lg:text-2xl">
                          ${option.price.toFixed(2)}
                        </span>
                        <span className="text-xs font-medium text-muted-foreground">
                          {" "}
                          / Month
                        </span>
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-6 rounded-lg border border-t p-6 md:mt-8 lg:mt-10">
              <div className="divide-y divide-border">
                {[
                  {
                    name: "Custom Training",
                    description:
                      "Train the AI on your specific style or brand for unique outputs",
                    price: 99.99,
                  },
                  {
                    name: "API Access",
                    description:
                      "Integrate our AI image generation into your own applications",
                    price: 199.99,
                  },
                  {
                    name: "Dedicated Support",
                    description: "Get priority assistance from our AI experts",
                    price: 49.99,
                    footnote: "24/7 support available for enterprise plans",
                  },
                ].map((option, index) => (
                  <div
                    key={index}
                    className="flex flex-col space-y-4 py-6 last:pb-0 md:flex-row md:items-center md:justify-between md:space-x-12 md:space-y-0 lg:py-10"
                  >
                    <div className="flex items-center md:max-w-md md:space-x-4 lg:max-w-full lg:space-x-6">
                      <Image
                        src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                        alt={option.name}
                        height={80}
                        width={80}
                        className="hidden shrink-0 md:block md:size-16 lg:size-20"
                      />
                      <div className="max-w-md space-y-1 lg:max-w-md lg:space-y-2">
                        <p className="mb-1.5 text-lg font-medium md:text-xl lg:mb-2 lg:text-2xl">
                          {option.name}
                        </p>
                        <p className="text-xs text-muted-foreground md:text-xs lg:text-base">
                          {option.description}
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0 md:self-end md:text-end">
                      <span className="text-2xl font-medium md:text-3xl lg:text-4xl">
                        ${option.price.toFixed(2)}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {" "}
                        / Month
                      </span>
                      {option.footnote && (
                        <div className="mt-1 text-xs font-medium text-muted-foreground md:max-w-32 lg:max-w-full">
                          * {option.footnote}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
