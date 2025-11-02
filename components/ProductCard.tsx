import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  className?: string;
}

export default function ProductCard({ id, name, description, icon, image, className = "" }: ProductCardProps) {
  return (
    <div 
      className={`group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent/80 flex items-center justify-center text-white mb-4">
          {icon}
        </div>
        
        <div className="h-40 mb-4 overflow-hidden rounded-lg bg-gray-800/50 flex items-center justify-center">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        
      </div>
    </div>
  );
}
