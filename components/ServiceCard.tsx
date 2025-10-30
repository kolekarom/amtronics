import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import { Check, ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  features: string[]
  className?: string
  variant?: 'default' | 'featured'
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  features,
  className,
  variant = 'default',
}: ServiceCardProps) {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border/20 p-6 transition-all",
        "bg-card shadow-lg hover:shadow-xl hover:shadow-primary/10",
        variant === 'featured' 
          ? "bg-gradient-to-br from-card to-primary/5 ring-2 ring-primary/50" 
          : "hover:bg-card/80",
        className
      )}
    >
      <div className="absolute right-4 top-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-accent transition-colors group-hover:bg-primary">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      
      <h3 className="mb-3 text-xl font-bold text-foreground">{title}</h3>
      <p className="mb-4 text-muted-foreground">{description}</p>
      
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-accent" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-6">
        <button 
          className={cn(
            "inline-flex items-center text-sm font-medium text-accent",
            "hover:underline hover:text-primary transition-colors"
          )}
        >
          Learn more
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  )
}

