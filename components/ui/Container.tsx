import { cn } from "@/lib/utils"
import React, { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
  className?: string
  id?: string
}

export function Container({ children, className, id }: ContainerProps) {
  return (
    <section 
      id={id}
      className={cn(
        "w-full py-12 md:py-16 lg:py-20",
        className
      )}
    >
      <div className="container px-4 md:px-6">
        {children}
      </div>
    </section>
  )
}

export function SectionTitle({ 
  title, 
  subtitle,
  className 
}: { 
  title: string, 
  subtitle?: string,
  className?: string 
}) {
  return (
    <div className={cn("max-w-3xl mx-auto text-center mb-12", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[#CBD5E1] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export function Card({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-[rgba(255,255,255,0.1)] bg-[#1E293B] p-6 shadow-sm transition-all hover:shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link"
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", asChild = false, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
    
    const variants = {
      primary: "bg-[#2563EB] text-[#F8FAFC] hover:bg-[#1E40AF] focus-visible:ring-[#38BDF8]",
      secondary: "bg-[#1E3A8A] text-[#F8FAFC] hover:bg-[#1E40AF] focus-visible:ring-[#38BDF8]",
      outline: "border border-[#38BDF8] text-[#38BDF8] hover:bg-[#38BDF8]/10 focus-visible:ring-[#38BDF8]",
      ghost: "text-[#F8FAFC] hover:bg-[#1E293B] focus-visible:ring-[#38BDF8]",
      link: "text-[#38BDF8] hover:underline underline-offset-4 focus-visible:ring-[#38BDF8]"
    }

    const Comp = asChild ? 'div' : 'button'

    return (
      <Comp
        className={cn(
          baseStyles,
          variants[variant],
          className
        )}
        ref={ref as any}
        {...(asChild ? {} : props as any)}
      >
        {asChild ? props.children : props.children}
      </Comp>
    )
  }
)
Button.displayName = "Button"
