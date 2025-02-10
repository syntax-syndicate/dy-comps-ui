import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const people = [
  {
    id: "person-1",
    name: "Name",
    role: "Role",
    avatar: "/images/avatar-1.webp",
  },
  {
    id: "person-2",
    name: "Name",
    role: "Role",
    avatar: "/images/avatar-2.webp",
  },
  {
    id: "person-3",
    name: "Name",
    role: "Role",
    avatar: "/images/avatar-3.webp",
  },
  {
    id: "person-4",
    name: "Name",
    role: "Role",
    avatar: "/images/avatar-4.webp",
  },
  {
    id: "person-5",
    name: "Name",
    role: "Role",
    avatar: "/images/avatar-1.webp",
  },
  {
    id: "person-6",
    name: "Name",
    role: "Role",
    avatar: "/images/avatar-2.webp",
  },
  {
    id: "person-7",
    name: "Name",
    role: "Role",
    avatar: "/images/avatar-3.webp",
  },
  {
    id: "person-8",
    name: "Name",
    role: "Role",
    avatar: "/images/avatar-4.webp",
  },
]

const Team1 = () => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center text-center">
        <p className="semibold">We&apos;re hiring</p>
        <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
          Meet our team
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
          doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur.
          Explicabo.
        </p>
      </div>
      <div className="container mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
        {people.map((person) => (
          <div key={person.id} className="flex flex-col items-center">
            <Avatar className="mb-4 size-20 border md:mb-5 lg:size-24">
              <AvatarImage src={person.avatar} />
              <AvatarFallback>{person.name}</AvatarFallback>
            </Avatar>
            <p className="text-center font-medium">{person.name}</p>
            <p className="text-muted-foreground text-center">{person.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Team1
