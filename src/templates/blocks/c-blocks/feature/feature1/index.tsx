import { MessagesSquare, Play } from "lucide-react"

import { Button } from "@/components/ui/button"

const Feature1 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="bg-accent flex size-12 items-center justify-center rounded-full">
              <MessagesSquare className="size-6" />
            </span>
            <h1 className="my-6 text-pretty text-3xl font-bold lg:text-4xl">
              Welcome to Our Website
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
              doloremque mollitia fugiat omnis! Porro facilis quo animi
              consequatur. Explicabo.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button
                variant="outline"
                className="w-full sm:w-auto"
                size={"lg"}
              >
                <Play className="mr-2 size-4" />
                Watch Demo
              </Button>
              <Button className="w-full sm:w-auto" size={"lg"}>
                Get Started
              </Button>
            </div>
          </div>
          <img
            src="https://placehold.co/900/EBEDED/C3C9C9?text=Y&font=poppins.svg"
            alt="placeholder hero"
            className="max-h-96 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Feature1
