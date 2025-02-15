import { Button } from "@/components/ui/button"

interface BlogPostProps {
  title: string;
  description: string;
  date: string;
  author: string;
  imageSrc: string;
  category: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  description,
  date,
  author,
  imageSrc,
  category,
}) => (
  <a className="group flex flex-col" href="#">
    <div className="mb-4 flex text-clip rounded-xl md:mb-5">
      <div className="transition duration-300 group-hover:scale-105">
        <img
          alt={description}
          className="aspect-[3/2] size-full object-cover object-center"
          src={imageSrc}
        />
      </div>
    </div>
    <div>
      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
        {category}
      </div>
    </div>
    <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-2xl lg:pt-4 lg:text-3xl">
      {title}
    </div>
    <div className="text-muted-foreground mb-4 line-clamp-2 text-sm md:mb-5 md:text-base">
      {description}
    </div>
    <div className="flex items-center gap-2">
      <span className="relative flex size-12 shrink-0 overflow-hidden rounded-full">
        <img
          className="aspect-square h-full w-full"
          src="/images/avatar-1.webp"
          alt={`Avatar of ${author}`}
        />
      </span>
      <div className="flex flex-col gap-px">
        <span className="text-xs font-medium">{author}</span>
        <span className="text-muted-foreground text-xs">{date}</span>
      </div>
    </div>
  </a>
)

const Blog4: React.FC = () => {
  const posts = [
    {
      title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
      description:
        "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
      date: "1 Jan 2025",
      author: "Jane Doe",
      imageSrc: "https://placehold.co/900/EBEDED/C3C9C9?text=D&font=poppins.svg",
      category: "Ut varius dolor turpis",
    },
    {
      title: "Curabitur euismod nulla et odio congue, ut suscipit dolor tristique",
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean eget justo turpis.",
      date: "2 Jan 2025",
      author: "John Smith",
      imageSrc: "https://placehold.co/900/EBEDED/C3C9C9?text=D&font=poppins.svg",
      category: "Curabitur ullamcorper",
    },
    {
      title: "Mauris interdum, odio nec tempor aliquam, quam erat gravida libero",
      description:
        "Quisque aliquam mauris sit amet felis consectetur, eu dignissim ligula blandit.",
      date: "3 Jan 2025",
      author: "Alice Johnson",
      imageSrc: "https://placehold.co/900/EBEDED/C3C9C9?text=D&font=poppins.svg",
      category: "Aliquam gravida",
    }
  ]

  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-8 md:mb-14 lg:mb-16">
          <div className="flex items-start justify-between gap-8">
            <div>
              <p className="text-wider text-muted-foreground mb-4 text-sm font-medium">
                Eyebrow
              </p>
              <h2 className="mb-4 w-full text-4xl font-medium md:mb-5 md:text-5xl lg:mb-6 lg:text-6xl">
                Blog
              </h2>
            </div>
            <Button className="hidden md:block">
              View all posts
            </Button>
          </div>
          <p>Duis sem sem, gravida vel porttitor eu, volutpat ut arcu</p>
        </div>
        <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-6 lg:gap-y-12 2xl:grid-cols-3">
          {posts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center py-2 md:hidden">
          <Button className="w-full">
            View all posts
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Blog4
