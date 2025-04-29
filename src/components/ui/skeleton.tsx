import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse bg-gradient-to-tr from-gray-100 to-gray-300 rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
