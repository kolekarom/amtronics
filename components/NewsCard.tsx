import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

interface NewsCardProps {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  image?: string
}

export default function NewsCard({ id, title, excerpt, date, category, image }: NewsCardProps) {
  return (
    <Link href={`/news/${id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full">
        {image && (
          <div className="w-full h-48 bg-neutral-gray flex items-center justify-center">
            <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold text-primary-blue bg-blue-50 px-3 py-1 rounded-full">
              {category}
            </span>
            <span className="text-xs text-text-light flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {date}
            </span>
          </div>
          <h3 className="text-lg font-bold text-neutral-dark mb-2 line-clamp-2">{title}</h3>
          <p className="text-text-light text-sm mb-4 line-clamp-2">{excerpt}</p>
          <div className="flex items-center gap-2 text-primary-blue font-medium text-sm">
            Read More
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  )
}
